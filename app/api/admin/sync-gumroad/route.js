import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/adminAuth";
import { syncGumroadMemberships } from "@/lib/adminUsers";

export const runtime = "nodejs";
export const maxDuration = 300;

function jsonError(error, fallback = "Request failed.") {
  const status = Number(error?.status) || 500;
  return NextResponse.json(
    { error: error?.message || fallback, code: error?.code || undefined },
    { status }
  );
}

async function authorize(request) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get("authorization") || "";
  const isCron =
    Boolean(cronSecret) &&
    (authHeader === `Bearer ${cronSecret}` ||
      request.headers.get("x-vercel-cron") === "1");

  if (isCron) return { source: "cron" };
  await requireAdmin(request);
  return { source: "admin" };
}

export async function POST(request) {
  try {
    await authorize(request);

    if (!process.env.GUMROAD_ACCESS_TOKEN) {
      return NextResponse.json(
        { error: "GUMROAD_ACCESS_TOKEN is not configured." },
        { status: 500 }
      );
    }

    const summary = await syncGumroadMemberships();
    return NextResponse.json({
      success: true,
      message: `Synced Gumroad: ${summary.subscribedCount} subscribed, ${summary.skippedApproved} approved left unchanged.`,
      ...summary,
    });
  } catch (error) {
    console.error("Sync Gumroad failed:", error);
    return jsonError(error, "Failed to sync with Gumroad.");
  }
}

export async function GET(request) {
  return POST(request);
}
