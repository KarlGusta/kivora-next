import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/adminAuth";
import { fetchGumroadUserRecords } from "@/lib/gumroadService";

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

    if (!process.env.GUMROAD_ACCESS_TOKEN) {
      return NextResponse.json(
        { error: "GUMROAD_ACCESS_TOKEN is not configured." },
        { status: 500 }
      );
    }

    const users = await fetchGumroadUserRecords();
    return NextResponse.json({
      total: users.length,
      salesTotal: users.reduce((total, entry) => total + entry.purchaseCount, 0),
      users,
    });
  } catch (error) {
    console.error("List Gumroad users failed:", error);
    return jsonError(error, "Failed to load Gumroad users.");
  }
}
