import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { user } from "@/lib/schema";

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
  const { name, platformRole, emailVerified } = body;

  // Check if user exists
  const existingUser = await db
    .select({ id: user.id })
    .from(user)
    .where(eq(user.id, userId))
    .limit(1);

  if (existingUser.length === 0) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Build update object
  const updateData: Partial<{
    name: string;
    platformRole: string;
    emailVerified: boolean;
  }> = {};

  if (name !== undefined) {
    if (typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name must be a non-empty string" },
        { status: 400 }
      );
    }
    updateData.name = name.trim();
  }

  if (platformRole !== undefined) {
    if (platformRole !== "admin" && platformRole !== "user") {
      return NextResponse.json(
        { error: "Platform role must be 'admin' or 'user'" },
        { status: 400 }
      );
    }
    updateData.platformRole = platformRole;
  }

  if (emailVerified !== undefined) {
    if (typeof emailVerified !== "boolean") {
      return NextResponse.json(
        { error: "emailVerified must be a boolean" },
        { status: 400 }
      );
    }
    updateData.emailVerified = emailVerified;
  }

  if (Object.keys(updateData).length === 0) {
    return NextResponse.json(
      { error: "No valid fields to update" },
      { status: 400 }
    );
  }

  // Update user
  const [updatedUser] = await db
    .update(user)
    .set(updateData)
    .where(eq(user.id, userId))
    .returning();

  return NextResponse.json({ user: updatedUser });
}
