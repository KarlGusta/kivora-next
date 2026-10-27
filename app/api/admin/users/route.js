import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/adminAuth";
import { listAdminUsers } from "@/lib/adminUsers";

export const runtime = "nodejs";

function jsonError(error, fallback = "Request failed.") {
  const status = Number(error?.status) || 500;
  return NextResponse.json(
    { error: error?.message || fallback, code: error?.code || undefined },
    { status }
  );
}

export async function GET(request) {
  try {
    await requireAdmin(request);
    const payload = await listAdminUsers();
    return NextResponse.json(payload);
  } catch (error) {
    console.error("List admin users failed:", error);
    return jsonError(error, "Failed to load users.");
  }
}
