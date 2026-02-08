# Plushify AI Image Generation - Implementation Plan

## Overview

This document outlines the implementation plan for replacing the mock image generation system with real AI-powered plushie generation using Gemini 2.5 Flash via OpenRouter, persisting images in blob storage, and wiring the gallery to show real user data with delete capability.

**Tech Stack**: Next.js 16 + Vercel AI SDK 5 + OpenRouter + Drizzle ORM + Vercel Blob

---

## Phase 1: Database Schema

Add the `generation` table to persist AI-generated images.

### Tasks

- [x] Open `src/lib/schema.ts`
- [x] Add `generation` table with columns: id (text PK), userId (text FK to user.id, cascade delete), originalUrl (text), generatedUrl (text), style (text), quality (text), creditsCost (integer), createdAt (timestamp)
- [x] Add index on `userId`
- [x] Add index on `createdAt`
- [x] Run `pnpm run db:generate` to generate migration
- [x] Run `pnpm run db:migrate` to apply migration
- [x] Verify table exists in database

---

## Phase 2: Shared Types

Extract shared types from mock data into a dedicated types file.

### Tasks

- [x] Create `src/lib/types.ts`
- [x] Move `GalleryImage` interface from `mock-data.ts` to `types.ts`
- [x] Add `plushifiedUrl` as display alias for `generatedUrl`
- [x] Add `size` field derived from quality tier
- [x] Move `formatDate` helper to `types.ts`
- [x] Export all types and helpers

---

## Phase 3: Server Action for AI Generation

Create the core server action that handles the full generation pipeline.

### Tasks

#### 3.1 Server Action Setup
- [x] Create `src/actions/generate-plushie.ts`
- [x] Add `"use server"` directive
- [x] Define `generatePlushie(formData: FormData)` function
- [x] Define typed return type with success/error discriminated union
- [x] Define error codes: `UNAUTHORIZED`, `INSUFFICIENT_CREDITS`, `INVALID_INPUT`, `GENERATION_FAILED`

#### 3.2 Auth & Validation
- [x] Add auth check via `auth.api.getSession()`
- [x] Extract image file, styleId, qualityId from FormData
- [x] Validate file type against `APP_CONFIG.supportedFormats`
- [x] Validate file size against `APP_CONFIG.maxFileSize`
- [x] Return `INVALID_INPUT` error for invalid inputs

#### 3.3 Credit System Integration
- [x] Calculate credit cost: `CREDIT_COSTS.standardGeneration * qualityConfig.creditMultiplier`
- [x] Call `ensureSubscription(userId)` to verify subscription exists
- [x] Call `consumeCredits(userId, cost)` to deduct credits
- [x] Return `INSUFFICIENT_CREDITS` error if credits insufficient

#### 3.4 Image Upload & AI Generation
- [x] Upload original image to blob storage under `plushify/originals` folder
- [x] Call `generateText()` with `openrouter("google/gemini-2.5-flash-image")`
- [x] Send input image + plushify prompt as multimodal message
- [x] Add `AbortSignal.timeout(APP_CONFIG.generationTimeout)` for 60s timeout
- [x] Extract generated image from `result.files` (filter by `mediaType.startsWith("image/")`)

#### 3.5 Result Processing
- [x] Convert `file.uint8Array` to Buffer
- [x] Upload generated image to blob storage under `plushify/generated` folder
- [x] Insert record into `generation` table with all metadata
- [x] Return success with URLs + remaining credits

#### 3.6 Error Handling
- [x] On AI failure: refund credits via `addCredits()`, return `GENERATION_FAILED` error
- [x] On no image in `result.files`: refund credits, return `GENERATION_FAILED` error
- [x] On timeout: refund credits, return `GENERATION_FAILED` error
- [x] Ensure credits are always refunded on any failure after consumption

---

## Phase 4: Gallery API Routes

Create API routes for fetching and deleting gallery images.

### Tasks

#### 4.1 Gallery List Endpoint
- [x] Create `src/app/api/gallery/route.ts`
- [x] Implement `GET /api/gallery` handler
- [x] Add auth protection via `auth.api.getSession()`
- [x] Query `generation` table for current `userId`
- [x] Order results by `createdAt DESC`
- [x] Return `{ generations: [...] }` response

#### 4.2 Gallery Delete Endpoint
- [x] Create `src/app/api/gallery/[id]/route.ts`
- [x] Implement `DELETE /api/gallery/[id]` handler
- [x] Add auth protection via `auth.api.getSession()`
- [x] Verify ownership (`userId` match on generation record)
- [x] Delete original file from storage via `deleteFile()` (best-effort)
- [x] Delete generated file from storage via `deleteFile()` (best-effort)
- [x] Delete database record from `generation` table
- [x] Return `{ success: true }` response

---

## Phase 5: Dashboard Integration

Wire the dashboard page to use real AI generation instead of mock data.

### Tasks

#### 5.1 Import Updates
- [x] Remove `import { mockGalleryImages } from "@/lib/mock-data"` from dashboard
- [x] Add `import { generatePlushie } from "@/actions/generate-plushie"`
- [x] Add `import { toast } from "sonner"`
- [x] Import `useSubscription` from `@/lib/hooks/use-subscription` for `refetch`

#### 5.2 Generation Flow
- [x] Replace mock `handleGenerate` with real implementation
- [x] Build `FormData` with image file, style, and quality
- [x] Show progress states: uploading -> analyzing -> generating -> finalizing
- [x] Call `generatePlushie(formData)` server action
- [x] On success: set generated image URL, mark as saved, show success toast
- [x] Call `refetch()` to update credit display after generation

#### 5.3 Error Handling
- [x] On `INSUFFICIENT_CREDITS`: show toast with "Buy Credits" action linking to `/pricing`
- [x] On `GENERATION_FAILED`: show error toast with retry suggestion
- [x] On `UNAUTHORIZED`: redirect to login
- [x] On `INVALID_INPUT`: show validation error toast

#### 5.4 UI Updates
- [x] Set `isSavedToGallery` to `true` automatically (server action saves to DB)
- [x] Update `handleDownload` to create a proper download link from real URL
- [x] Remove any remaining mock/setTimeout generation logic

---

## Phase 6: Gallery Page Integration

Wire the gallery page to fetch and display real user data.

### Tasks

#### 6.1 Import & Data Fetching
- [x] Remove `import { mockGalleryImages, type GalleryImage } from "@/lib/mock-data"` from gallery
- [x] Import `GalleryImage` type from `@/lib/types`
- [x] Add `import { toast } from "sonner"`
- [x] Add `isLoading` state for initial data fetch
- [x] Fetch from `GET /api/gallery` on component mount

#### 6.2 Data Mapping
- [x] Map API response to display format: `generatedUrl` -> `plushifiedUrl`
- [x] Parse `createdAt` string to Date object
- [x] Derive `size` from quality tier
- [x] Compute unique styles from fetched data (instead of mock data)

#### 6.3 Delete Functionality
- [x] Replace mock `handleDelete` with real `DELETE /api/gallery/[id]` call
- [x] Show loading state during delete
- [x] Show success/error toast after delete
- [x] Remove deleted item from local state

#### 6.4 Loading States
- [x] Add loading skeleton/spinner during initial fetch
- [x] Show empty state when no generations exist
- [x] Handle fetch error with error message and retry button

---

## Phase 7: Gallery Subcomponent Updates

Update gallery subcomponents to use shared types instead of mock-data imports.

### Tasks

- [x] Update `src/components/gallery/image-grid.tsx` - change import from `@/lib/mock-data` to `@/lib/types`
- [x] Update `src/components/gallery/image-card.tsx` - change import from `@/lib/mock-data` to `@/lib/types`
- [x] Update `src/components/gallery/comparison-modal.tsx` - change import from `@/lib/mock-data` to `@/lib/types`
- [x] Verify `GalleryImage` interface shape is compatible (no breaking changes)
- [x] Verify `formatDate` function is available from new import path

---

## Phase 8: Configuration & Polish

Update Next.js config and verify everything works end-to-end.

### Tasks

#### 8.1 Next.js Image Config
- [x] Open `next.config.ts`
- [x] Verify Vercel Blob storage domain (`*.public.blob.vercel-storage.com`) is in `images.remotePatterns`
- [x] Add domain if missing

#### 8.2 Code Quality
- [x] Run `pnpm run lint` - fix all errors
- [x] Run `pnpm run typecheck` - fix all errors
- [x] Remove any `console.log` statements
- [x] Remove any unused imports
- [x] Verify no references to mock data remain in dashboard or gallery

#### 8.3 End-to-End Verification
- [x] Manual test: Upload image on dashboard
- [x] Verify credits are deducted after generation
- [x] Verify generated image appears in preview with before/after slider
- [x] Verify generated image appears in gallery page
- [x] Verify before/after comparison slider works in gallery modal
- [x] Verify delete removes image from gallery and storage
- [x] Verify insufficient credits shows proper error with "Buy Credits" action
- [x] Verify generation failure refunds credits

---

## Summary

| Phase | Description | Tasks |
|-------|-------------|-------|
| 1 | Database Schema | 7 |
| 2 | Shared Types | 6 |
| 3 | Server Action for AI Generation | 20 |
| 4 | Gallery API Routes | 13 |
| 5 | Dashboard Integration | 14 |
| 6 | Gallery Page Integration | 12 |
| 7 | Gallery Subcomponent Updates | 5 |
| 8 | Configuration & Polish | 11 |
| **Total** | | **~88 tasks** |

---

## Notes

- Uses `generateText()` (NOT `generateImage()`) since Gemini 2.5 Flash is a language model with multimodal image output
- Generated images come back in `result.files` array, not as a direct image response
- Credits are consumed before generation and refunded on failure to prevent abuse
- Storage uses existing `upload`/`deleteFile` from `src/lib/storage.ts`
- All existing dashboard UI components are reused — only the data flow changes
