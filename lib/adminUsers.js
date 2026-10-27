import { getAdminAuth, getAdminDb, initFirebaseAdmin } from "@/lib/firebaseAdmin";
import { isAdminEmail } from "@/lib/adminConstants";
import { getGumroadUsersByEmail } from "@/lib/gumroadService";

const PAGE_SIZE = 250;
const MAX_USERS = 1000;
export const USER_STATUSES = new Set([
  "approved",
  "pending",
  "subscribed",
  "unsubscribed",
  "suspended",
]);
export const DEFAULT_USER_STATUS = "unsubscribed";
export const ACCESS_STATUSES = new Set(["approved", "subscribed"]);

export function getUserStatus(userRecord, firestoreData = {}, gumroadUser = null) {
  if (isAdminEmail(userRecord.email || "")) return "approved";

  const stored =
    typeof firestoreData.status === "string"
      ? firestoreData.status.toLowerCase()
      : typeof userRecord.customClaims?.status === "string"
        ? userRecord.customClaims.status.toLowerCase()
        : "";

  if (stored === "approved" || stored === "suspended") return stored;

  if (gumroadUser?.active) return "subscribed";

  if (stored === "pending") return "pending";
  if (stored === "subscribed") return "unsubscribed";

  return userRecord.disabled ? "suspended" : stored || DEFAULT_USER_STATUS;
}

export function formatUserRecord(userRecord, firestoreData = {}, gumroadUser = null) {
  return {
    uid: userRecord.uid,
    email: userRecord.email || firestoreData.email || "",
    displayName: userRecord.displayName || firestoreData.displayName || "",
    disabled: Boolean(userRecord.disabled),
    gumroadActive: Boolean(gumroadUser?.active),
    status: getUserStatus(userRecord, firestoreData, gumroadUser),
    emailVerified: Boolean(userRecord.emailVerified),
    generationsUsed: Number(firestoreData.generationsUsed) || 0,
    providerIds: (userRecord.providerData || []).map((p) => p.providerId),
    createdAt: userRecord.metadata?.creationTime || null,
    lastSignInAt: userRecord.metadata?.lastSignInTime || null,
  };
}

export async function getLastGumroadSyncAt() {
  try {
    initFirebaseAdmin();
    const snap = await getAdminDb().collection("settings").doc("gumroadSync").get();
    if (!snap.exists) return null;
    return snap.data()?.lastGumroadSyncAt || null;
  } catch {
    return null;
  }
}

export async function listAdminUsers() {
  initFirebaseAdmin();
  const auth = getAdminAuth();
  const db = getAdminDb();
  const gumroadUsersByEmail = await getGumroadUsersByEmail();

  const users = [];
  let nextPageToken;

  do {
    const remaining = MAX_USERS - users.length;
    const maxResults = remaining > PAGE_SIZE ? PAGE_SIZE : remaining;
    const result = await auth.listUsers(maxResults, nextPageToken);

    await Promise.all(
      result.users.map(async (userRecord) => {
        const email = (userRecord.email || "").toLowerCase().trim();
        let firestoreData = {};
        try {
          const snap = await db.collection("users").doc(userRecord.uid).get();
          if (snap.exists) firestoreData = snap.data() || {};
        } catch {
          // ignore
        }
        users.push(
          formatUserRecord(userRecord, firestoreData, gumroadUsersByEmail.get(email))
        );
      })
    );

    nextPageToken = result.pageToken;
  } while (nextPageToken && users.length < MAX_USERS);

  users.sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));

  return {
    total: users.length,
    lastGumroadSyncAt: await getLastGumroadSyncAt(),
    users,
  };
}

export async function syncGumroadMemberships() {
  initFirebaseAdmin();
  const auth = getAdminAuth();
  const db = getAdminDb();
  const gumroadUsersByEmail = await getGumroadUsersByEmail();

  let nextPageToken;
  let scanned = 0;
  let subscribedCount = 0;
  let unsubscribedCount = 0;
  let skippedApproved = 0;
  let skippedSuspended = 0;
  let skippedUnchanged = 0;

  do {
    const result = await auth.listUsers(PAGE_SIZE, nextPageToken);

    for (const userRecord of result.users) {
      scanned += 1;
      const email = (userRecord.email || "").toLowerCase().trim();
      if (!email || isAdminEmail(email)) {
        skippedUnchanged += 1;
        continue;
      }

      const userRef = db.collection("users").doc(userRecord.uid);
      let firestoreData = {};
      try {
        const snap = await userRef.get();
        if (snap.exists) firestoreData = snap.data() || {};
      } catch {
        // ignore
      }

      const stored =
        typeof firestoreData.status === "string"
          ? firestoreData.status.toLowerCase()
          : typeof userRecord.customClaims?.status === "string"
            ? userRecord.customClaims.status.toLowerCase()
            : "";

      if (stored === "approved") {
        skippedApproved += 1;
        continue;
      }

      if (stored === "suspended" || userRecord.disabled) {
        skippedSuspended += 1;
        continue;
      }

      const gumroadUser = gumroadUsersByEmail.get(email);
      const nextStatus = gumroadUser?.active ? "subscribed" : DEFAULT_USER_STATUS;

      if (stored === nextStatus) {
        skippedUnchanged += 1;
        continue;
      }

      await userRef.set(
        {
          email,
          status: nextStatus,
          gumroadSyncedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        { merge: true }
      );

      await auth.setCustomUserClaims(userRecord.uid, {
        ...(userRecord.customClaims || {}),
        status: nextStatus,
      });

      if (nextStatus === "subscribed") subscribedCount += 1;
      else unsubscribedCount += 1;
    }

    nextPageToken = result.pageToken;
  } while (nextPageToken && scanned < MAX_USERS);

  const lastGumroadSyncAt = new Date().toISOString();
  await db.collection("settings").doc("gumroadSync").set(
    {
      lastGumroadSyncAt,
      lastSyncStats: {
        scanned,
        subscribedCount,
        unsubscribedCount,
        skippedApproved,
        skippedSuspended,
        skippedUnchanged,
        gumroadCustomers: gumroadUsersByEmail.size,
      },
      updatedAt: lastGumroadSyncAt,
      updatedBy: "sync",
    },
    { merge: true }
  );

  return {
    lastGumroadSyncAt,
    scanned,
    subscribedCount,
    unsubscribedCount,
    skippedApproved,
    skippedSuspended,
    skippedUnchanged,
    gumroadCustomers: gumroadUsersByEmail.size,
  };
}

export async function updateUserStatus(uid, requestedStatus, adminUid) {
  if (!USER_STATUSES.has(requestedStatus)) {
    const error = new Error("status must be a valid user status.");
    error.status = 400;
    throw error;
  }

  initFirebaseAdmin();
  const auth = getAdminAuth();
  const db = getAdminDb();

  const existingUser = await auth.getUser(uid);
  const targetIsAdmin = isAdminEmail(existingUser.email || "");
  const disabled = requestedStatus === "suspended";

  if (uid === adminUid && disabled) {
    const error = new Error("You cannot suspend your own admin account.");
    error.status = 400;
    throw error;
  }

  const statusToStore = targetIsAdmin ? "approved" : requestedStatus;

  await auth.updateUser(uid, { disabled: targetIsAdmin ? false : disabled });
  await auth.setCustomUserClaims(uid, {
    ...(existingUser.customClaims || {}),
    status: statusToStore,
  });

  await db.collection("users").doc(uid).set(
    {
      email: existingUser.email || "",
      status: statusToStore,
      updatedAt: new Date().toISOString(),
    },
    { merge: true }
  );

  const updatedUser = await auth.getUser(uid);
  const gumroadUsersByEmail = await getGumroadUsersByEmail();
  const snap = await db.collection("users").doc(uid).get();
  const firestoreData = snap.exists ? snap.data() : {};
  const gumroadUser = gumroadUsersByEmail.get(
    (updatedUser.email || "").toLowerCase().trim()
  );

  return formatUserRecord(updatedUser, firestoreData, gumroadUser);
}
