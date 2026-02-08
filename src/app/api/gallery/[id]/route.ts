import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { generation } from "@/lib/schema";
import { deleteFile } from "@/lib/storage";

/**
 * DELETE /api/gallery/[id]
 * Deletes a generated image by ID. Requires authentication and ownership.
 */
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    // Fetch the generation record, verifying ownership
    const records = await db
      .select()
      .from(generation)
      .where(
        and(
          eq(generation.id, id),
          eq(generation.userId, session.user.id)
        )
      )
      .limit(1);

    const record = records[0];

    if (!record) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Delete files from storage (best-effort — don't fail the request if storage cleanup fails)
    try {
      await deleteFile(record.originalUrl);
    } catch {
      // Ignore storage deletion errors for original
    }

    try {
      await deleteFile(record.generatedUrl);
    } catch {
      // Ignore storage deletion errors for generated
    }

    // Delete the database record
    await db
      .delete(generation)
      .where(
        and(
          eq(generation.id, id),
          eq(generation.userId, session.user.id)
        )
      );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting gallery image:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
