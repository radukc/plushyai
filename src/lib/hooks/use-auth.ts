"use client";

import { useSession } from "@/lib/auth-client";

/**
 * Unified authentication hook using BetterAuth.
 * Use this hook in components to get consistent auth state.
 */
export function useAuth() {
  const { data: session, isPending } = useSession();

  return {
    session,
    user: session?.user,
    isAuthenticated: !!session,
    isPending,
  };
}
