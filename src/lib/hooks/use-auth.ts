"use client";

import { useSession } from "@/lib/auth-client";
import { useMockAuth } from "@/lib/mock-auth";

/**
 * Unified authentication hook that combines real auth (BetterAuth) with mock auth.
 * Use this hook in protected pages to get consistent auth state.
 */
export function useAuth() {
  const { data: session, isPending } = useSession();
  const { user: mockUser, isAuthenticated: isMockAuthenticated } = useMockAuth();

  // Combine real and mock authentication
  const isAuthenticated = isMockAuthenticated || !!session;
  const user = session?.user || mockUser;

  return {
    user,
    isAuthenticated,
    isPending,
    // Expose individual states for advanced use cases
    session,
    mockUser,
    isMockAuthenticated,
  };
}
