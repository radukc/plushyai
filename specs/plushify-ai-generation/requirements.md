# Plushify AI Image Generation - Requirements

## Goal

Replace the mock image generation system with real AI-powered plushie generation using Gemini 2.5 Flash via OpenRouter, persist images in blob storage, and wire the gallery to show real user data with delete capability.

## Current State

- Dashboard page has fully-built UI for image upload, style selection, and generation settings
- Generation is mocked with `setTimeout` + random Unsplash images
- Gallery page shows hardcoded mock data from `src/lib/mock-data.ts`
- No database table for persisting generations
- No real AI model integration for image generation

## Requirements

### 1. Database Persistence
- New `generation` table to store all generated images
- Fields: id, userId (FK), originalUrl, generatedUrl, style, quality, creditsCost, createdAt
- Indexes on userId and createdAt for efficient queries

### 2. AI Image Generation
- Use `google/gemini-2.5-flash-image` via OpenRouter
- The model is a **language model** with multimodal image output (uses `generateText()`, NOT `generateImage()`)
- Generated images come back in `result.files` array
- Server action pattern for secure server-side execution
- Credit consumption before generation, refund on failure

### 3. Storage
- Upload original images to blob storage (`plushify/originals` folder)
- Upload generated images to blob storage (`plushify/generated` folder)
- Use existing `upload` / `deleteFile` from `src/lib/storage.ts`

### 4. Gallery Integration
- Gallery page fetches real data from API instead of mock data
- Delete functionality removes from both storage and database
- Loading states during data fetch

### 5. Credit System Integration
- Use existing `consumeCredits` / `addCredits` / `ensureSubscription` from subscription.ts
- Credit cost: `CREDIT_COSTS.standardGeneration * qualityConfig.creditMultiplier`
- Refund credits on generation failure

### 6. Error Handling
- Typed error codes: UNAUTHORIZED, INSUFFICIENT_CREDITS, INVALID_INPUT, GENERATION_FAILED
- 60-second timeout via `AbortSignal.timeout()`
- Toast notifications for user feedback

## Non-Requirements (Out of Scope)
- Batch processing
- Background removal integration
- HD download as separate credit cost
- API access for external consumers
