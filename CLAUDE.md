# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Plushify is an AI-powered SaaS that transforms photos into plushie-style images. Built on Next.js 16 with App Router, React 19, TypeScript (strict mode), BetterAuth, PostgreSQL via Drizzle ORM, and AI image generation via OpenRouter + Vercel AI SDK 5.

## Commands

```bash
pnpm run dev          # Start dev server with Turbopack (DON'T run this yourself)
pnpm run check        # Run lint + typecheck (ALWAYS run after changes)
pnpm run lint         # ESLint only
pnpm run typecheck    # tsc --noEmit only
pnpm run build        # Production build
pnpm run db:generate  # Generate Drizzle migrations after schema changes
pnpm run db:migrate   # Apply migrations
pnpm run db:push      # Push schema directly (dev shortcut)
pnpm run db:studio    # Open Drizzle Studio GUI
```

**Critical**: Always run `pnpm run check` after completing changes. Never start the dev server yourself.

## Architecture

### AI Integration (OpenRouter, NOT OpenAI)

- Provider: `@openrouter/ai-sdk-provider` -- import `openrouter` from it
- Image generation uses `generateText()` with `openrouter("google/gemini-2.5-flash-image")` -- hardcoded model, NOT the `OPENROUTER_MODEL` env var
- Must pass `providerOptions: { openrouter: { modalities: ["image", "text"] } }` for image output
- Generated images come back in `result.files` array (provider maps OpenRouter's `choices[0].message.images` to AI SDK file parts)
- Chat endpoint uses `OPENROUTER_MODEL` env var (default `openai/gpt-5-mini`)

### Authentication (BetterAuth)

**Server-side** (API routes, server actions):
```typescript
import { auth } from "@/lib/auth";
const session = await auth.api.getSession({ headers: await headers() });
```

**Server Components** (protected pages):
```typescript
import { requireAuth, requireAdmin } from "@/lib/session";
await requireAdmin(); // redirects if not admin
```

**Client Components** (protected pages):
```typescript
import { useSession } from "@/lib/auth-client";
const { data: session, isPending } = useSession();
// OR
import { useAuth } from "@/lib/hooks/use-auth";
const { isAuthenticated, isPending } = useAuth();
```

**API route auth pattern** -- check session, return 401 if missing. Admin routes additionally check `platformRole === "admin"`.

### Credit/Subscription System

- `src/lib/subscription.ts` -- server-side functions: `ensureSubscription`, `consumeCredits`, `addCredits`
- `consumeCredits` uses atomic SQL: `UPDATE ... SET credits = credits - $amount WHERE credits >= $amount` -- prevents race conditions
- Server action pattern: consume credits before generation, refund via `addCredits` on any failure (wrapped in try/catch to prevent silent refund failures)
- Client hook: `useSubscription()` from `src/lib/hooks/use-subscription.ts` -- returns `{ plan, credits, refetch }`

### File Storage Abstraction

`src/lib/storage.ts` -- switches automatically based on `BLOB_READ_WRITE_TOKEN` env var:
- **Local dev** (no token): saves to `public/uploads/`, serves at `/uploads/`
- **Production** (token set): uses Vercel Blob (`@vercel/blob`)

Functions: `upload(buffer, filename, folder)`, `deleteFile(url)`

### Server Actions vs API Routes

- **Mutations** use server actions (e.g., `src/actions/generate-plushie.ts`)
- **Data fetching** uses API routes (e.g., `GET /api/gallery`, `GET /api/subscription`)
- Server actions include `"use server"` directive, accept FormData, return discriminated union `{ success: true, ... } | { success: false, error: ErrorCode, message: string }`

### Database

- PostgreSQL via `postgres` (postgres.js) + Drizzle ORM
- Schema: `src/lib/schema.ts` -- tables: `user`, `session`, `account`, `verification` (BetterAuth-managed), `generation`, `subscription` (app-specific)
- BetterAuth tables use text IDs; app tables use UUID (`crypto.randomUUID()`)
- After schema changes: `pnpm run db:generate` then `pnpm run db:migrate`

### Routing

- Uses Next.js 16 `src/proxy.ts` for optimistic cookie-based redirects (NOT middleware.ts)
- Route groups: `(auth)/` for login/register, `(legal)/` for legal pages
- Protected client pages: dashboard, gallery, profile (use client-side session check)
- Protected server pages: admin (uses `requireAdmin()`)

## Key Conventions

### Styling
- Tailwind CSS 4 with shadcn/ui (`new-york` style, `lucide` icons)
- Use shadcn color tokens: `bg-background`, `text-foreground`, `text-muted-foreground`
- Support dark mode via Tailwind classes -- both modes must work
- Install new components: `pnpm dlx shadcn@latest add <component>`

### TypeScript
- Strict mode with `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noUnusedLocals`, `noUnusedParameters`
- Path alias: `@/*` maps to `./src/*`

### ESLint
- `no-console`: only `console.warn` and `console.error` allowed
- `import/order`: enforced alphabetical grouping (builtin > external > internal > parent > sibling)
- `prefer-const`, `no-var`, `eqeqeq: always`

### App Config
- Central config in `src/lib/constants.ts`: `APP_CONFIG`, `PLUSHIE_STYLES`, `GENERATION_QUALITY_OPTIONS`, `CREDIT_COSTS`, `PLAN_LIMITS`
- Shared gallery types in `src/lib/types.ts` (NOT `src/lib/mock-data.ts`)
- Mock data for landing page only: `src/lib/mock-data.ts` (testimonials, pricing, FAQ)

### Environment Variables
Required: `POSTGRES_URL`, `BETTER_AUTH_SECRET`
AI: `OPENROUTER_API_KEY`, `OPENROUTER_MODEL`
Storage: `BLOB_READ_WRITE_TOKEN` (empty = local dev)
App: `NEXT_PUBLIC_APP_URL`

## Feature Specs

Feature specs live in `specs/<feature-name>/` with `requirements.md` and `plan.md`. Plans use checkbox-based task tracking across numbered phases.
