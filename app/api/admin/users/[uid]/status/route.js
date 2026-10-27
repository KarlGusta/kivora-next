import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/adminAuth";
import { updateUserStatus } from "@/lib/adminUsers";

export const runtime = "nodejs";

function jsonError(error, fallback = "Request failed.") {
  const status = Number(error?.status) || 500;
  return NextResponse.json(
    { error: error?.message || fallback, code: error?.code || undefined },
    { status }
  );
}

export async function PATCH(request, context) {
  try {
    const admin = await requireAdmin(request);
    const params = await context.params;
    const uid = params?.uid;
    const body = await request.json().catch(() => ({}));
    const requestedStatus =
      typeof body.status === "string" ? body.status.toLowerCase() : "";

    if (!uid) {
      return NextResponse.json({ error: "User ID is required." }, { status: 400 });
    }

    const user = await updateUserStatus(uid, requestedStatus, admin.uid);
    return NextResponse.json({ message: "User status updated.", user });
  } catch (error) {
    console.error("Update user status failed:", error);
    return jsonError(error, "Failed to update user status.");
  }
}
