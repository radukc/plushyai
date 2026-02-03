import { eq, and, gte, sql } from "drizzle-orm";
import { db } from "./db";
import { subscription } from "./schema";

export type SubscriptionPlan = "free" | "pro" | "enterprise";

export interface Subscription {
  id: string;
  userId: string;
  plan: SubscriptionPlan;
  credits: number;
  createdAt: Date;
  updatedAt: Date;
}

type DbSubscription = {
  id: string;
  userId: string;
  plan: string;
  credits: number;
  createdAt: Date;
  updatedAt: Date;
};

function toSubscription(row: DbSubscription): Subscription {
  return {
    ...row,
    plan: row.plan as SubscriptionPlan,
  };
}

/**
 * Fetch a user's subscription by user ID.
 * Returns null if no subscription exists.
 */
export async function getSubscription(
  userId: string
): Promise<Subscription | null> {
  const result = await db
    .select()
    .from(subscription)
    .where(eq(subscription.userId, userId))
    .limit(1);

  return result[0] ? toSubscription(result[0]) : null;
}

/**
 * Ensure a user has a subscription. Creates a free tier subscription
 * if none exists for the given user.
 * Returns the user's subscription (existing or newly created).
 */
export async function ensureSubscription(userId: string): Promise<Subscription> {
  const existing = await getSubscription(userId);

  if (existing) {
    return existing;
  }

  // Create new free tier subscription
  const newSubscription = {
    id: crypto.randomUUID(),
    userId,
    plan: "free" as const,
    credits: 3,
  };

  await db.insert(subscription).values(newSubscription);

  return {
    ...newSubscription,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

/**
 * Consume credits from a user's subscription using an atomic operation.
 * This prevents race conditions by using a single SQL query that checks
 * credit availability and decrements in one atomic operation.
 *
 * Returns the updated subscription if successful.
 * Returns null if the user has insufficient credits or no subscription.
 */
export async function consumeCredits(
  userId: string,
  amount: number
): Promise<Subscription | null> {
  if (amount <= 0) {
    throw new Error("Amount must be greater than 0");
  }

  // Atomic decrement that only succeeds if credits >= amount
  // This prevents race conditions and double-spending
  const updated = await db
    .update(subscription)
    .set({
      credits: sql`${subscription.credits} - ${amount}`,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(subscription.userId, userId),
        gte(subscription.credits, amount) // Only update if sufficient credits
      )
    )
    .returning();

  // If no rows were updated, it means either:
  // 1. No subscription exists for the user
  // 2. Insufficient credits
  return updated[0] ? toSubscription(updated[0]) : null;
}

/**
 * Add credits to a user's subscription.
 * Returns the updated subscription if successful.
 * Returns null if the user has no subscription.
 */
export async function addCredits(
  userId: string,
  amount: number
): Promise<Subscription | null> {
  if (amount <= 0) {
    throw new Error("Amount must be greater than 0");
  }

  const updated = await db
    .update(subscription)
    .set({
      credits: sql`${subscription.credits} + ${amount}`,
      updatedAt: new Date(),
    })
    .where(eq(subscription.userId, userId))
    .returning();

  return updated[0] ? toSubscription(updated[0]) : null;
}

/**
 * Update a user's subscription plan.
 * Returns the updated subscription if successful.
 * Returns null if the user has no subscription.
 */
export async function updateSubscriptionPlan(
  userId: string,
  plan: SubscriptionPlan
): Promise<Subscription | null> {
  const updated = await db
    .update(subscription)
    .set({ plan, updatedAt: new Date() })
    .where(eq(subscription.userId, userId))
    .returning();

  return updated[0] ? toSubscription(updated[0]) : null;
}
