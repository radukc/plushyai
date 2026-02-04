import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { hashPassword } from "better-auth/crypto";
import { and, eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { account, user } from "@/lib/schema";

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

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  const authResult = await requireAdminApi();
  if ("error" in authResult) {
    return NextResponse.json({ error: authResult.error }, { status: authResult.status });
  }

  const { userId } = await params;
  const body = await request.json();
  const { password } = body;

  // Validate password
  if (!password || typeof password !== "string") {
    return NextResponse.json(
      { error: "Password is required" },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return NextResponse.json(
      { error: "Password must be at least 8 characters" },
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

  // Check if user has a credential account
  const credentialAccount = await db
    .select({ id: account.id })
    .from(account)
    .where(and(eq(account.userId, userId), eq(account.providerId, "credential")))
    .limit(1);

  if (credentialAccount.length === 0) {
    return NextResponse.json(
      { error: "User does not have credential-based authentication" },
      { status: 400 }
    );
  }

  // Hash new password
  const hashedPassword = await hashPassword(password);

  // Update password
  await db
    .update(account)
    .set({ password: hashedPassword })
    .where(and(eq(account.userId, userId), eq(account.providerId, "credential")));

  return NextResponse.json({ success: true });
}
