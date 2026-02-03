import { useState, useEffect, useCallback } from "react";
import { useSession } from "@/lib/auth-client";

export type SubscriptionPlan = "free" | "pro" | "enterprise";

export interface SubscriptionData {
  plan: SubscriptionPlan;
  credits: number;
}

interface UseSubscriptionReturn {
  plan: SubscriptionPlan | null;
  credits: number | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  consumeCredits: (amount: number) => Promise<boolean>;
  refetch: () => Promise<void>;
}

/**
 * Client-side hook for fetching and managing subscription data.
 * Returns the user's plan, credits, and functions for credit consumption.
 */
export function useSubscription(): UseSubscriptionReturn {
  const { data: session, isPending: isSessionPending } = useSession();

  const [subscription, setSubscription] = useState<SubscriptionData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = !!session;

  /**
   * Fetch subscription data from the API.
   */
  const fetchSubscription = useCallback(async () => {
    if (!session) {
      setSubscription(null);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/subscription");

      if (!response.ok) {
        if (response.status === 401) {
          // Not authenticated
          setSubscription(null);
        } else {
          console.error("Failed to fetch subscription:", response.statusText);
        }
        return;
      }

      const data = await response.json();
      setSubscription(data);
    } catch (error) {
      console.error("Error fetching subscription:", error);
    } finally {
      setIsLoading(false);
    }
  }, [session]);

  /**
   * Consume credits from the user's subscription.
   * Returns true if successful, false otherwise.
   */
  const consumeCredits = useCallback(async (amount: number): Promise<boolean> => {
    if (!session) {
      return false;
    }

    try {
      const response = await fetch("/api/subscription/consume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      if (!response.ok) {
        if (response.status === 402) {
          // Insufficient credits
          return false;
        }
        console.error("Failed to consume credits:", response.statusText);
        return false;
      }

      const data = await response.json();
      setSubscription(data);
      return true;
    } catch (error) {
      console.error("Error consuming credits:", error);
      return false;
    }
  }, [session]);

  // Fetch subscription on mount and when session changes
  useEffect(() => {
    if (!isSessionPending) {
      fetchSubscription();
    }
  }, [isSessionPending, fetchSubscription]);

  return {
    plan: subscription?.plan ?? null,
    credits: subscription?.credits ?? null,
    isLoading: isLoading || isSessionPending,
    isAuthenticated,
    consumeCredits,
    refetch: fetchSubscription,
  };
}
