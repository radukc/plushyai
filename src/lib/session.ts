import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth, type PlatformRole } from "@/lib/auth";

// Extended session type with our custom platformRole field
interface AdminSession {
  user: {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image?: string | null;
    createdAt: Date;
    updatedAt: Date;
    platformRole: PlatformRole;
  };
  session: {
    id: string;
    expiresAt: Date;
    token: string;
    createdAt: Date;
    updatedAt: Date;
    ipAddress?: string | null;
    userAgent?: string | null;
    userId: string;
  };
}

/**
 * Protected routes that require authentication.
 * These are also configured in src/proxy.ts for optimistic redirects.
 */
export const protectedRoutes = ["/chat", "/dashboard", "/profile", "/admin"];

/**
 * Checks if the current request is authenticated.
 * Should be called in Server Components for protected routes.
 *
 * @returns The session object if authenticated
 * @throws Redirects to home page if not authenticated
 */
export async function requireAuth() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/");
  }

  return session;
}

/**
 * Gets the current session without requiring authentication.
 * Returns null if not authenticated.
 *
 * @returns The session object or null
 */
export async function getOptionalSession() {
  return await auth.api.getSession({ headers: await headers() });
}

/**
 * Checks if a given path is a protected route.
 *
 * @param path - The path to check
 * @returns True if the path requires authentication
 */
export function isProtectedRoute(path: string): boolean {
  return protectedRoutes.some(
    (route) => path === route || path.startsWith(`${route}/`)
  );
}

/**
 * Checks if the current user is an admin (has platformRole === "admin").
 * Should be called in Server Components for admin-only routes.
 *
 * @returns The session object if user is an admin
 * @throws Redirects to dashboard if not authenticated or not an admin
 */
export async function requireAdmin() {
  const session = await requireAuth();

  // Type assertion to access platformRole - at runtime this works correctly
  const platformRole = (session.user as any).platformRole as PlatformRole | undefined;

  if (!platformRole || platformRole !== "admin") {
    redirect("/dashboard");
  }

  return session as AdminSession;
}

/**
 * Checks if the current user has a specific platform role.
 *
 * @param role - The role to check for
 * @returns True if the user has the specified role
 */
export async function hasRole(role: PlatformRole): Promise<boolean> {
  const session = await getOptionalSession();
  const platformRole = session?.user as any;
  return platformRole?.platformRole === role;
}

/**
 * Checks if the current user is an admin.
 *
 * @returns True if the user is an admin
 */
export async function isAdmin(): Promise<boolean> {
  return hasRole("admin");
}
