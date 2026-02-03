import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { consumeCredits } from "@/lib/subscription";

/**
 * POST /api/subscription/consume
 * Consumes credits from the current user's subscription.
 * Requires authentication.
 *
 * Body: { amount: number }
 * Returns: { plan: string, credits: number }
 * Returns 402 if insufficient credits.
 */
export async function POST(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { amount } = body;

    if (typeof amount !== "number" || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount. Must be a positive number." },
        { status: 400 }
      );
    }

    const updatedSubscription = await consumeCredits(session.user.id, amount);

    if (!updatedSubscription) {
      return NextResponse.json(
        { error: "Insufficient credits" },
        { status: 402 }
      );
    }

    return NextResponse.json({
      plan: updatedSubscription.plan,
      credits: updatedSubscription.credits,
    });
  } catch (error) {
    console.error("Error consuming credits:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
