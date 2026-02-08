import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { generation } from "@/lib/schema";

/**
 * GET /api/gallery
 * Returns the current user's generated images, ordered by most recent first.
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

    const generations = await db
      .select()
      .from(generation)
      .where(eq(generation.userId, session.user.id))
      .orderBy(desc(generation.createdAt));

    return NextResponse.json({ generations });
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
