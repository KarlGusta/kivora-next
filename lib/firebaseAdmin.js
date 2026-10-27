import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

function readServiceAccountJson() {
  const raw =
    process.env.FIREBASE_SERVICE_ACCOUNT_JSON ||
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY ||
    process.env.GOOGLE_SERVICE_ACCOUNT_JSON ||
    "";

  if (!raw) return null;

  const value = String(raw).trim();
  const candidates = [value];

  try {
    candidates.push(Buffer.from(value, "base64").toString("utf8"));
  } catch {
    // ignore
  }

  for (const candidate of candidates) {
    try {
      const parsed = JSON.parse(candidate);
      if (parsed?.project_id && parsed?.client_email && parsed?.private_key) {
        return parsed;
      }
    } catch {
      // keep trying
    }
  }

  return null;
}

function normalizePrivateKey(raw) {
  if (!raw) return "";
  let key = String(raw).trim();
  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }
  return key.replace(/\\n/g, "\n").trim();
}

const buildCredential = () => {
  const serviceAccount = readServiceAccountJson();
  if (serviceAccount) {
    return cert({
      projectId: serviceAccount.project_id,
      clientEmail: serviceAccount.client_email,
      privateKey: normalizePrivateKey(serviceAccount.private_key),
    });
  }

  const projectId = process.env.FIREBASE_PROJECT_ID?.trim();
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL?.trim();
  const privateKey = normalizePrivateKey(process.env.FIREBASE_PRIVATE_KEY);

  if (!projectId || !clientEmail || !privateKey) {
    const error = new Error(
      "Missing Firebase Admin credentials. Set FIREBASE_SERVICE_ACCOUNT_JSON or FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL / FIREBASE_PRIVATE_KEY."
    );
    error.status = 500;
    error.code = "FIREBASE_ADMIN_CONFIG";
    throw error;
  }

  return cert({ projectId, clientEmail, privateKey });
};

export function initFirebaseAdmin() {
  if (!getApps().length) {
    initializeApp({ credential: buildCredential() });
  }
  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

export function getAdminAuth() {
  return initFirebaseAdmin().auth;
}

export function getAdminDb() {
  return initFirebaseAdmin().db;
}
