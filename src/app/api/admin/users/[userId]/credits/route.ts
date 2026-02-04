import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { subscription, user } from "@/lib/schema";

type PlatformRole = "admin" | "user";

type AuthResult =
  | { error: string; status: 401 | 403 }
  | { session: Awaited<ReturnType<typeof auth.api.getSession>> };

async function requireAdminApi(): Promise<AuthResult> {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return { error: "Unauthorized", status: 401 };
  }
  const platformRole = (session.user as { platformRole?: PlatformRole }).platformRole;
  if (platformRole !== "admin") {
    return { error: "Forbidden", status: 403 };
  }
  return { session };
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  const authResult = await requireAdminApi();
  if ("error" in authResult) {
    return NextResponse.json({ error: authResult.error }, { status: authResult.status });
  }

  const { userId } = await params;
  const body = await request.json();
  const { credits } = body;

  // Validate credits
  if (credits === undefined || typeof credits !== "number") {
    return NextResponse.json(
      { error: "Credits must be a number" },
      { status: 400 }
    );
  }

  if (credits < 0 || !Number.isInteger(credits)) {
    return NextResponse.json(
      { error: "Credits must be a non-negative integer" },
      { status: 400 }
    );
  }

  // Check if user exists
  const existingUser = await db
    .select({ id: user.id })
    .from(user)
    .where(eq(user.id, userId))
    .limit(1);

  if (existingUser.length === 0) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Check if subscription exists
  const existingSubscription = await db
    .select({ id: subscription.id })
    .from(subscription)
    .where(eq(subscription.userId, userId))
    .limit(1);

  if (existingSubscription.length === 0) {
    // Create subscription if it doesn't exist
    await db.insert(subscription).values({
      id: crypto.randomUUID(),
      userId,
      plan: "free",
      credits,
    });
  } else {
    // Update existing subscription
    await db
      .update(subscription)
      .set({ credits })
      .where(eq(subscription.userId, userId));
  }

  return NextResponse.json({ success: true, credits });
}
