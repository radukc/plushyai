import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { ensureSubscription } from "@/lib/subscription";

/**
 * GET /api/subscription
 * Returns the current user's subscription plan and credits.
 * Requires authentication.
 */
export async function GET(_request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const subscription = await ensureSubscription(session.user.id);

    return NextResponse.json({
      plan: subscription.plan,
      credits: subscription.credits,
    });
  } catch (error) {
    console.error("Error fetching subscription:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
