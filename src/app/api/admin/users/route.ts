import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { hashPassword } from "better-auth/crypto";
import { desc, eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { account, subscription, user } from "@/lib/schema";

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

export async function GET() {
  const authResult = await requireAdminApi();
  if ("error" in authResult) {
    return NextResponse.json({ error: authResult.error }, { status: authResult.status });
  }

  const users = await db
    .select({
      id: user.id,
      name: user.name,
      email: user.email,
      emailVerified: user.emailVerified,
      image: user.image,
      platformRole: user.platformRole,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      subscriptionId: subscription.id,
      plan: subscription.plan,
      credits: subscription.credits,
    })
    .from(user)
    .leftJoin(subscription, eq(user.id, subscription.userId))
    .orderBy(desc(user.createdAt));

  return NextResponse.json({ users, total: users.length });
}

export async function POST(request: NextRequest) {
  const authResult = await requireAdminApi();
  if ("error" in authResult) {
    return NextResponse.json({ error: authResult.error }, { status: authResult.status });
  }

  const body = await request.json();
  const { email, password, name, isAdmin, emailVerified } = body;

  // Validate required fields
  if (!email || !password || !name) {
    return NextResponse.json(
      { error: "Email, password, and name are required" },
      { status: 400 }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 }
    );
  }

  // Validate password length
  if (password.length < 8) {
    return NextResponse.json(
      { error: "Password must be at least 8 characters" },
      { status: 400 }
    );
  }

  // Check if email already exists
  const existingUser = await db
    .select({ id: user.id })
    .from(user)
    .where(eq(user.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return NextResponse.json(
      { error: "A user with this email already exists" },
      { status: 409 }
    );
  }

  // Hash password using BetterAuth's crypto
  const hashedPassword = await hashPassword(password);

  // Generate IDs
  const userId = crypto.randomUUID();
  const accountId = crypto.randomUUID();
  const subscriptionId = crypto.randomUUID();

  // Create user
  const [newUser] = await db
    .insert(user)
    .values({
      id: userId,
      name,
      email,
      emailVerified: emailVerified ?? false,
      platformRole: isAdmin ? "admin" : "user",
    })
    .returning();

  // Create account for credential auth
  await db.insert(account).values({
    id: accountId,
    userId,
    accountId: email,
    providerId: "credential",
    password: hashedPassword,
  });

  // Create subscription with default credits
  await db.insert(subscription).values({
    id: subscriptionId,
    userId,
    plan: "free",
    credits: 3,
  });

  return NextResponse.json(
    {
      user: {
        ...newUser,
        credits: 3,
        plan: "free",
      },
    },
    { status: 201 }
  );
}
