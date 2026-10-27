import { getAdminAuth, initFirebaseAdmin } from "@/lib/firebaseAdmin";
import { ADMIN_EMAIL, isAdminEmail } from "@/lib/adminConstants";

export { ADMIN_EMAIL, isAdminEmail };

export function extractBearerToken(authorizationHeader = "") {
  if (!authorizationHeader.startsWith("Bearer ")) return "";
  return authorizationHeader.slice("Bearer ".length).trim();
}

export async function requireUser(request) {
  try {
    initFirebaseAdmin();
  } catch (error) {
    const err = new Error(error?.message || "Firebase Admin is not configured.");
    err.status = 500;
    err.code = error?.code || "FIREBASE_ADMIN_CONFIG";
    throw err;
  }

  const idToken = extractBearerToken(request.headers.get("authorization") || "");
  if (!idToken) {
    const error = new Error("Missing or invalid authorization token.");
    error.status = 401;
    error.code = "UNAUTHORIZED";
    throw error;
  }

  try {
    return await getAdminAuth().verifyIdToken(idToken);
  } catch {
    const error = new Error("Invalid or expired authorization token.");
    error.status = 401;
    error.code = "UNAUTHORIZED";
    throw error;
  }
}

export async function requireAdmin(request) {
  const decoded = await requireUser(request);
  const email = (decoded.email || "").toLowerCase().trim();

  if (!isAdminEmail(email)) {
    const error = new Error("Admin access required.");
    error.status = 403;
    error.code = "FORBIDDEN";
    throw error;
  }

  return { uid: decoded.uid, email, token: decoded };
}
