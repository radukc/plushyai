import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function GET() {
  const session = await auth.api.getSession({ headers: await headers() });

  return NextResponse.json({
    session: session,
    // Check if platformRole exists in session.user
    hasPlatformRole: !!(session?.user as any)?.platformRole,
    platformRoleValue: (session?.user as any)?.platformRole,
  });
}
