# Requirements: Replace Mock Auth with Real Better Auth

## Summary

Replace all stubbed/mock user data with actual Better Auth authentication data throughout the application.

## Background

The application currently uses a dual-auth system where `useAuth()` combines real BetterAuth with a mock auth fallback. This displays a fake user "Sarah Johnson" with 47 credits and a pro plan, even when no real user is authenticated.

## Goals

1. Remove all mock authentication dependencies
2. Use real Better Auth session data for user identity (name, email, avatar)
3. Implement a proper subscription system for credits and plan data
4. Ensure unauthenticated users see sign-in prompts instead of fake data

## Affected Areas

### Components Using Mock Data
- **Site Header** - Uses `useMockAuth()` for authentication state and conditional navigation
- **Credit Balance** - Displays `user.credits` and `user.plan` from mock data
- **Profile Page** - Shows `mockUser.credits` and `mockUser.plan`
- **Dashboard Page** - Uses `isMockAuthenticated` for auth guard

### Files to Remove
- `src/lib/mock-auth.tsx` - Mock authentication provider

### Files to Clean Up
- `src/lib/mock-data.ts` - Remove `mockUser` and `User` interface (keep static content data)

## Non-Goals

- Email provider integration (password reset will continue to log to console)
- Payment integration (Polar) - handled separately
- Unit/E2E testing

## Technical Decisions

### Credits and Plan Storage

The BetterAuth user table only has identity fields (id, name, email, emailVerified, image, timestamps). Credits and plan are business data that require a separate `subscription` table.

**Rationale:**
- Credits change frequently (every generation) - storing in user table would conflict with session caching
- Plan data aligns with future Polar payment integration which manages subscriptions separately
- Clean separation: Better Auth owns identity, application owns business state

### Default Values for New Users
- Plan: `free`
- Credits: `3` (matches `APP_CONFIG.freeCredits`)

## Acceptance Criteria

1. Logged-out users see sign-in buttons (not fake user data)
2. Logged-in users see their real name, email, and avatar from Better Auth
3. Credit balance displays actual credits from subscription table
4. Plan badge shows actual plan from subscription table
5. Profile page shows real user information
6. Dashboard requires real authentication
7. New users automatically get free tier with 3 credits on first access
8. Build passes (`pnpm run lint && pnpm run typecheck && pnpm run build`)
