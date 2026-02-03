# Implementation Plan: Replace Mock Auth with Real Better Auth

## Phase 1: Database Schema

Add subscription table to store credits and plan data.

### Tasks

- [x] Add `subscription` table to `src/lib/schema.ts` with fields:
  - `id` (text, primary key, UUID)
  - `userId` (text, unique, FK to user.id, cascade delete)
  - `plan` (text, default "free")
  - `credits` (integer, default 3)
  - `createdAt`, `updatedAt` (timestamps)
- [x] Add index on `userId` column
- [x] Run `pnpm run db:generate` to generate migration
- [x] Run `pnpm run db:migrate` to apply migration

---

## Phase 2: Server-Side Subscription Utilities

Create server utilities for subscription operations.

### Tasks

- [x] Create `src/lib/subscription.ts` with functions:
  - `getSubscription(userId)` - Fetch user's subscription row
  - `ensureSubscription(userId)` - Create free tier if none exists
  - `consumeCredits(userId, amount)` - Deduct credits, return null if insufficient
  - `addCredits(userId, amount)` - Add credits to user's balance
  - `updateSubscriptionPlan(userId, plan)` - Update user's plan (bonus)

---

## Phase 3: API Routes

Create REST endpoints for subscription access.

### Tasks

- [x] Create `src/app/api/subscription/route.ts`:
  - GET handler that returns `{ plan, credits }`
  - Requires authenticated session
  - Calls `ensureSubscription()` for first-time users
- [x] Create `src/app/api/subscription/consume/route.ts`:
  - POST handler that consumes credits
  - Accepts `{ amount }` in body
  - Returns 402 if insufficient credits
  - Returns updated `{ plan, credits }`

---

## Phase 4: Client-Side Hook

Create React hook for subscription data.

### Tasks

- [x] Create `src/lib/hooks/use-subscription.ts`:
  - `useSubscription()` hook that fetches from `/api/subscription`
  - Returns `{ plan, credits, isLoading, consumeCredits, refetch }`
  - Handles loading states and refetching after credit consumption

---

## Phase 5: Update Components

Replace mock auth usage with real Better Auth.

### Tasks

#### Layout
- [x] Edit `src/app/layout.tsx`:
  - Remove `MockAuthProvider` import
  - Remove `<MockAuthProvider>` wrapper from component tree

#### Auth Hook
- [x] Edit `src/lib/hooks/use-auth.ts`:
  - Remove `useMockAuth` import
  - Remove mock auth fallback logic
  - Simplify to only use `useSession()` from auth-client
  - Return `{ session, user, isAuthenticated, isPending }`

#### Site Header
- [x] Edit `src/components/site-header.tsx`:
  - Replace `import { useMockAuth }` with `import { useSession } from "@/lib/auth-client"`
  - Replace `const { isAuthenticated } = useMockAuth()` with:
    ```typescript
    const { data: session } = useSession();
    const isAuthenticated = !!session;
    ```

#### Credit Balance
- [x] Edit `src/components/credit-balance.tsx`:
  - Replace `import { useMockAuth }` with `import { useSubscription } from "@/lib/hooks/use-subscription"`
  - Replace `const { user, isAuthenticated } = useMockAuth()` with:
    ```typescript
    const { plan, credits, isLoading } = useSubscription();
    ```
  - Update renders to use `plan` and `credits` instead of `user.plan`/`user.credits`
  - Handle `isLoading` state (return null or skeleton)

#### Profile Page
- [x] Edit `src/app/profile/page.tsx`:
  - Add `import { useSubscription } from "@/lib/hooks/use-subscription"`
  - Replace `mockUser.credits` with `credits` from useSubscription
  - Replace `mockUser.plan` with `plan` from useSubscription
  - Ensure user identity comes from `session.user`

#### Dashboard Page
- [x] Edit `src/app/dashboard/page.tsx`:
  - Replace `import { useAuth }` with `import { useSession } from "@/lib/auth-client"`
  - Replace `const { isAuthenticated, isPending, isMockAuthenticated } = useAuth()` with:
    ```typescript
    const { data: session, isPending } = useSession();
    const isAuthenticated = !!session;
    ```
  - Remove `isMockAuthenticated` check from auth guard
  - Keep `mockGalleryImages` import (static placeholder data)

---

## Phase 6: Cleanup

Remove mock auth files and clean up mock data.

### Tasks

- [x] Delete `src/lib/mock-auth.tsx` entirely
- [x] Edit `src/lib/mock-data.ts`:
  - Remove `User` interface (approx lines 3-11)
  - Remove `mockUser` constant (approx lines 56-65)
  - Keep all other exports: `mockGalleryImages`, `mockTestimonials`, `pricingTiers`, `features`, `faqItems`, `GalleryImage`, `Testimonial`, etc.

---

## Phase 7: Verification

Ensure everything works correctly.

### Tasks

- [x] Run `pnpm run lint` - fix any errors
- [x] Run `pnpm run typecheck` - fix any type errors
- [x] Run `pnpm run build` - ensure production build succeeds
- [ ] Manual testing:
  - [ ] Visit app while logged out - sign in button appears
  - [ ] Sign in with email/password or Google
  - [ ] Header shows user profile dropdown with real name/avatar
  - [ ] Credit balance shows real credits (3 for new users)
  - [ ] Profile page shows real user data
  - [ ] Dashboard requires authentication

---

## File Summary

### New Files (4)
| File | Purpose |
|------|---------|
| `src/lib/subscription.ts` | Server utilities for subscription CRUD |
| `src/app/api/subscription/route.ts` | GET subscription endpoint |
| `src/app/api/subscription/consume/route.ts` | POST consume credits endpoint |
| `src/lib/hooks/use-subscription.ts` | Client hook for subscription data |

### Modified Files (8)
| File | Changes |
|------|---------|
| `src/lib/schema.ts` | Add subscription table |
| `src/app/layout.tsx` | Remove MockAuthProvider |
| `src/lib/hooks/use-auth.ts` | Remove mock fallback |
| `src/components/site-header.tsx` | Use real session |
| `src/components/credit-balance.tsx` | Use useSubscription |
| `src/app/profile/page.tsx` | Use real session + subscription |
| `src/app/dashboard/page.tsx` | Use real session |
| `src/lib/mock-data.ts` | Remove mockUser and User interface |

### Deleted Files (1)
| File | Reason |
|------|--------|
| `src/lib/mock-auth.tsx` | No longer needed |
