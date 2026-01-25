# Plushify SaaS UI Implementation Plan

## Overview

This document outlines the phased implementation plan for transforming the boilerplate project into the Plushify SaaS UI. Each phase contains actionable tasks with checkboxes for progress tracking.

**Tech Stack**: Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui

---

## Phase 0: Boilerplate Cleanup

Remove all boilerplate-specific files and components that are not part of Plushify.

### Tasks

- [x] Delete `src/app/chat/` directory (entire folder)
- [x] Delete `src/app/profile/` directory (entire folder)
- [x] Delete `src/app/api/chat/route.ts`
- [x] Delete `src/app/api/diagnostics/route.ts`
- [x] Delete `src/components/setup-checklist.tsx`
- [x] Delete `src/components/starter-prompt-modal.tsx`
- [x] Delete `src/components/ui/github-stars.tsx`
- [x] Delete `src/hooks/use-diagnostics.ts`
- [x] Remove any imports referencing deleted files in `site-header.tsx`
- [x] Remove any imports referencing deleted files in `site-footer.tsx`
- [x] Remove any imports referencing deleted files in `page.tsx`
- [x] Verify app runs without errors (`pnpm dev`)
- [x] Run `pnpm lint` and fix any errors
- [x] Run `pnpm typecheck` and fix any errors

---

## Phase 1: Foundation Setup

Set up the foundational elements: shadcn components, color scheme, mock data, and metadata.

### Tasks

#### 1.1 Add Required shadcn Components
- [x] Install `progress` component: `pnpm dlx shadcn@latest add progress`
- [x] Install `slider` component: `pnpm dlx shadcn@latest add slider`
- [x] Install `tabs` component: `pnpm dlx shadcn@latest add tabs`
- [x] Install `accordion` component: `pnpm dlx shadcn@latest add accordion`
- [x] Install `scroll-area` component: `pnpm dlx shadcn@latest add scroll-area`
- [x] Install `radio-group` component: `pnpm dlx shadcn@latest add radio-group`
- [x] Install `select` component: `pnpm dlx shadcn@latest add select`
- [x] Install `switch` component: `pnpm dlx shadcn@latest add switch`
- [x] Install `table` component: `pnpm dlx shadcn@latest add table`
- [x] Install `tooltip` component: `pnpm dlx shadcn@latest add tooltip`
- [x] Install `aspect-ratio` component: `pnpm dlx shadcn@latest add aspect-ratio`
- [x] Install `alert` component: `pnpm dlx shadcn@latest add alert`
- [x] Install `navigation-menu` component: `pnpm dlx shadcn@latest add navigation-menu`

#### 1.2 Update Color Scheme
- [x] Open `src/app/globals.css`
- [x] Add playful primary color (soft pink/purple gradient)
- [x] Add accent color (warm coral/peach)
- [x] Update light mode background to soft cream
- [x] Update dark mode background to deep purple-gray
- [x] Add CSS custom properties for gradients
- [x] Add keyframe animations for playful effects (bounce, float, pulse)
- [x] Verify dark mode colors look cohesive

#### 1.3 Create Mock Data
- [x] Create `src/lib/mock-data.ts`
- [x] Add `mockUser` object (id, name, email, image, credits: 47, plan: "pro")
- [x] Add `mockGalleryImages` array (6-8 before/after image pairs)
- [x] Add `mockTestimonials` array (4-6 testimonials with name, avatar, quote, rating)
- [x] Add `pricingTiers` array (Basic, Pro, Elite with prices and credits)
- [x] Add `features` array for landing page features
- [x] Add `faqItems` array for pricing and docs FAQ

#### 1.4 Create Mock Auth Context
- [x] Create `src/lib/mock-auth.tsx`
- [x] Create `MockAuthProvider` component
- [x] Create `useMockAuth` hook returning `{ user, isAuthenticated, login, logout }`
- [x] Default to authenticated state with `mockUser`
- [x] Export provider and hook

#### 1.5 Add Mock Image Assets
- [x] Create `public/mock/` directory
- [x] Add `hero-before.jpg` (sample person/pet photo) - Using Unsplash URLs in mock-data.ts
- [x] Add `hero-after.jpg` (plushified version) - Using Unsplash URLs in mock-data.ts
- [x] Add `original-1.jpg` through `original-6.jpg` - Using Unsplash URLs in mock-data.ts
- [x] Add `plushified-1.jpg` through `plushified-6.jpg` - Using Unsplash URLs in mock-data.ts
- [x] Add placeholder avatar images or use pravatar.cc URLs - Using pravatar.cc URLs

#### 1.6 Update App Metadata
- [x] Open `src/app/layout.tsx`
- [x] Update `metadata.title` to "Plushify - Turn Anyone Into a Plushie"
- [x] Update `metadata.description` with SEO-optimized text
- [x] Update `metadata.keywords` with relevant keywords
- [x] Update Open Graph metadata
- [x] Update JSON-LD structured data for SaaS product
- [x] Wrap children with `MockAuthProvider`

#### 1.7 Create Constants File
- [x] Create `src/lib/constants.ts`
- [x] Export `PRICING_TIERS` constant
- [x] Export `PLUSHIE_STYLES` array (Classic, Kawaii, Realistic, Cartoon, etc.)
- [x] Export `GENERATION_QUALITY_OPTIONS` array
- [x] Export `NAV_LINKS` array for header
- [x] Export `FOOTER_LINKS` object with columns

---

## Phase 2: Navigation Components

Update header and footer with new navigation structure.

### Tasks

#### 2.1 Update Site Header
- [x] Open `src/components/site-header.tsx`
- [x] Update logo/branding to "Plushify" with playful styling
- [x] Add navigation links: Home, Pricing, Docs
- [x] Add conditional Gallery link (show when authenticated)
- [x] Add `CreditBalance` component display for authenticated users
- [x] Keep user profile dropdown for authenticated users
- [x] Keep dark mode toggle
- [x] Add mobile hamburger menu button
- [x] Create mobile navigation drawer/sheet
- [x] Add smooth transitions for menu open/close
- [x] Verify responsive behavior at all breakpoints

#### 2.2 Update Site Footer
- [x] Open `src/components/site-footer.tsx`
- [x] Create 4-column layout: Product, Resources, Legal, Company
- [x] Product column: Features, Pricing, Gallery
- [x] Resources column: Documentation, Getting Started, API, FAQ
- [x] Legal column: Privacy, Terms, Cookies, Refund, GDPR, CCPA, Acceptable Use
- [x] Company column: About (placeholder), Contact (placeholder)
- [x] Add Plushify logo and tagline at top
- [x] Add copyright notice at bottom
- [x] Add social media icon links (placeholder hrefs)
- [x] Make footer responsive (stack columns on mobile)

---

## Phase 3: Shared UI Components

Build reusable components used across multiple pages.

### Tasks

#### 3.1 Image Comparison Slider
- [x] Create `src/components/ui/image-comparison-slider.tsx`
- [x] Accept `beforeImage` and `afterImage` props
- [x] Implement draggable divider with mouse support
- [x] Implement touch support for mobile
- [x] Add "Before" and "After" labels
- [x] Add smooth transition animations
- [x] Handle edge cases (0% and 100% positions)
- [x] Style with rounded corners and shadow
- [x] Export component

#### 3.2 Credit Balance Component
- [x] Create `src/components/credit-balance.tsx`
- [x] Accept `credits` and `variant` (compact/full) props
- [x] Display credit icon and count
- [x] Add "Buy Credits" link when credits are low (< 10)
- [x] Style compact variant for header
- [x] Style full variant for dashboard
- [x] Add tooltip showing plan info

#### 3.3 Image Upload Dropzone
- [x] Create `src/components/image-upload-dropzone.tsx`
- [x] Implement drag-and-drop zone with visual feedback
- [x] Add click-to-upload functionality
- [x] Accept file type validation (images only)
- [x] Show file size limit (e.g., 10MB max)
- [x] Display upload icon and instructional text
- [x] Show preview thumbnail after upload
- [x] Add remove/clear button for uploaded image
- [x] Handle drag over, drag leave, drop states
- [x] Style with dashed border and hover effects

#### 3.4 Generation Progress Component
- [x] Create `src/components/generation-progress.tsx`
- [x] Accept `progress` (0-100) and `status` props
- [x] Display progress bar with percentage
- [x] Show status messages ("Uploading...", "Analyzing...", "Generating...", "Complete!")
- [x] Add animated spinner during processing
- [x] Style with playful colors and smooth animations

#### 3.5 Pricing Card Component
- [x] Create `src/components/pricing-card.tsx`
- [x] Accept `tier` object prop (name, price, credits, features, popular)
- [x] Display tier name with styling
- [x] Display price prominently
- [x] Display credits amount
- [x] List included features with checkmarks
- [x] Add "Popular" badge for highlighted tier
- [x] Add CTA button
- [x] Style popular tier with accent border/background
- [x] Add hover effects and transitions

#### 3.6 Feature Card Component
- [x] Create `src/components/feature-card.tsx`
- [x] Accept `icon`, `title`, `description` props
- [x] Display Lucide icon
- [x] Display title with appropriate heading
- [x] Display description text
- [x] Add hover effect (slight lift, shadow)
- [x] Style with rounded corners and padding

#### 3.7 Testimonial Card Component
- [x] Create `src/components/testimonial-card.tsx`
- [x] Accept `testimonial` object prop (name, avatar, role, quote, rating)
- [x] Display avatar image
- [x] Display customer name and role
- [x] Display quote with quotation styling
- [x] Display star rating (filled/empty stars)
- [x] Style with card background and shadow

---

## Phase 4: Landing Page

Build the marketing landing page with all sections.

### Tasks

#### 4.1 Hero Section
- [x] Create `src/components/landing/hero-section.tsx`
- [x] Add large headline with gradient text effect
- [x] Add subheadline with value proposition
- [x] Integrate `ImageComparisonSlider` with hero images
- [x] Add primary CTA button ("Get Started" → /pricing)
- [x] Add secondary CTA button ("See Examples" → scroll to testimonials)
- [x] Add trust indicators (e.g., "10,000+ plushies created")
- [x] Add subtle background animation or gradient
- [x] Make fully responsive

#### 4.2 Features Section
- [x] Create `src/components/landing/features-section.tsx`
- [x] Add section heading ("Why Choose Plushify")
- [x] Create 6 feature cards using `FeatureCard` component:
  - AI-Powered Transformation
  - Multiple Plushie Styles
  - High-Resolution Output
  - Fast Processing
  - Secure & Private
  - Easy to Use
- [x] Arrange in responsive grid (3x2 on desktop, 2x3 on tablet, 1x6 on mobile)
- [x] Add fade-in animation on scroll (optional)

#### 4.3 How It Works Section
- [x] Create `src/components/landing/how-it-works.tsx`
- [x] Add section heading ("How It Works")
- [x] Create 3 step cards:
  - Step 1: Upload your photo
  - Step 2: Choose your style
  - Step 3: Download your plushie
- [x] Add numbered circles or icons for each step
- [x] Add connecting line/arrow between steps
- [x] Include small illustration for each step
- [x] Make responsive (horizontal on desktop, vertical on mobile)

#### 4.4 Testimonials Section
- [x] Create `src/components/landing/testimonials-section.tsx`
- [x] Add section heading ("What Our Customers Say")
- [x] Display 3-4 testimonials using `TestimonialCard` component
- [x] Arrange in responsive grid
- [x] Add subtle background color differentiation
- [x] Add section ID for scroll-to functionality

#### 4.5 CTA Section
- [x] Create `src/components/landing/cta-section.tsx`
- [x] Add compelling headline ("Ready to Create Your Plushie?")
- [x] Add supporting text
- [x] Add large CTA button
- [x] Add background gradient or pattern
- [x] Make visually distinct from other sections

#### 4.6 Assemble Landing Page
- [x] Open `src/app/page.tsx`
- [x] Remove all existing boilerplate content
- [x] Import and arrange all landing sections:
  - HeroSection
  - FeaturesSection
  - HowItWorksSection
  - TestimonialsSection
  - CTASection
- [x] Add proper spacing between sections (py-16 to py-24)
- [x] Verify page metadata is correct
- [x] Test full page scroll behavior
- [x] Verify responsive layout at all breakpoints

---

## Phase 5: Pricing Page

Build the dedicated pricing page with tiers, comparison, and FAQ.

### Tasks

#### 5.1 Create Pricing Page
- [x] Create `src/app/pricing/page.tsx`
- [x] Add page metadata (title, description)
- [x] Add page header with title and subtitle
- [x] Import pricing data from constants

#### 5.2 Pricing Tiers Section
- [x] Display 3 `PricingCard` components in a row
- [x] Basic tier: $9, 30 credits, basic features
- [x] Pro tier: $19, 100 credits, all features, marked as Popular
- [x] Elite tier: $29, 200 credits, all features + priority
- [x] Arrange responsively (3 columns → 1 column on mobile)
- [x] Add "Most Value" or similar badge to Elite

#### 5.3 Feature Comparison Table
- [x] Add section heading ("Compare Plans")
- [x] Create table with features as rows, tiers as columns
- [x] Features to compare:
  - Credits included
  - Image resolution
  - Plushie styles available
  - Processing speed
  - Commercial use license
  - Priority support
- [x] Use checkmarks and X marks for boolean features
- [x] Style table with alternating row colors
- [x] Make table horizontally scrollable on mobile

#### 5.4 FAQ Section
- [x] Add section heading ("Frequently Asked Questions")
- [x] Create accordion with 8-10 FAQ items:
  - What are credits?
  - Do credits expire?
  - Can I upgrade my plan?
  - What payment methods do you accept?
  - Is there a free trial?
  - What's your refund policy?
  - Can I use images commercially?
  - How long does generation take?
- [x] Use shadcn Accordion component
- [x] Style with proper spacing

#### 5.5 Final CTA
- [x] Add CTA section at bottom
- [x] "Start Creating Today" headline
- [x] Button linking to sign-up or dashboard

---

## Phase 6: Dashboard

Build the split-view image generation dashboard.

### Tasks

#### 6.1 Dashboard Layout
- [ ] Open `src/app/dashboard/page.tsx`
- [ ] Remove existing boilerplate content
- [ ] Create split layout container (flex with sidebar + main)
- [ ] Left sidebar: 320px width on desktop
- [ ] Right main area: remaining width
- [ ] Add responsive behavior (stack on mobile)
- [ ] Add page title in header area

#### 6.2 Upload Panel (Left Sidebar)
- [ ] Create `src/components/dashboard/upload-panel.tsx`
- [ ] Add `CreditBalance` component at top
- [ ] Add `ImageUploadDropzone` component
- [ ] Add section divider

#### 6.3 Style Options
- [ ] Create `src/components/dashboard/style-options.tsx`
- [ ] Add "Choose Style" heading
- [ ] Create radio group or card selector for styles:
  - Classic Plushie
  - Kawaii
  - Realistic Plush
  - Cartoon
  - Chibi
- [ ] Show style preview thumbnails
- [ ] Highlight selected style
- [ ] Style with proper spacing and borders

#### 6.4 Generation Settings
- [ ] Create `src/components/dashboard/generation-settings.tsx`
- [ ] Add "Settings" heading
- [ ] Add quality slider (Standard / High / Ultra)
- [ ] Add output size selector (512px, 1024px, 2048px)
- [ ] Add optional settings (background removal toggle)
- [ ] Add "Generate" button (primary, full width)
- [ ] Show credit cost for selected options

#### 6.5 Preview Panel (Right Main Area)
- [ ] Create `src/components/dashboard/preview-panel.tsx`
- [ ] Add placeholder state when no image uploaded
- [ ] Show uploaded image preview when available
- [ ] Show `GenerationProgress` during mock generation
- [ ] Show `ImageComparisonSlider` when complete

#### 6.6 Results Display
- [ ] Create `src/components/dashboard/results-display.tsx`
- [ ] Add "Download" button (primary)
- [ ] Add "Download HD" button (secondary, shows credit cost)
- [ ] Add "Save to Gallery" button
- [ ] Add "Generate Another" button
- [ ] Add sharing options (copy link placeholder)
- [ ] Style as action bar below preview

#### 6.7 Assemble Dashboard
- [ ] Integrate all dashboard components in page
- [ ] Wire up mock state for upload → progress → result flow
- [ ] Add useState for uploaded image, generation state, result
- [ ] Simulate generation progress (setTimeout with intervals)
- [ ] Show mock result after "generation" completes
- [ ] Test full flow end-to-end
- [ ] Verify responsive stacking on mobile

---

## Phase 7: Gallery Page

Build the user's image gallery with grid and modals.

### Tasks

#### 7.1 Gallery Page Structure
- [ ] Create `src/app/gallery/page.tsx`
- [ ] Add page metadata
- [ ] Add page header with title
- [ ] Add sort/filter controls (placeholder functionality)
- [ ] Import mock gallery data

#### 7.2 Empty State Component
- [ ] Create `src/components/gallery/empty-state.tsx`
- [ ] Add illustration or icon
- [ ] Add "No plushies yet" message
- [ ] Add "Create your first plushie" CTA button
- [ ] Style with centered layout and muted colors

#### 7.3 Image Card Component
- [ ] Create `src/components/gallery/image-card.tsx`
- [ ] Accept image object prop
- [ ] Display thumbnail using `AspectRatio` (1:1)
- [ ] Add date badge in corner
- [ ] Add style badge
- [ ] Create hover overlay with actions:
  - View (eye icon)
  - Download (download icon)
  - Delete (trash icon)
- [ ] Add smooth hover transition
- [ ] Handle click to open modal

#### 7.4 Comparison Modal
- [ ] Create `src/components/gallery/comparison-modal.tsx`
- [ ] Use shadcn Dialog component
- [ ] Display `ImageComparisonSlider` with full-size images
- [ ] Add image metadata (date, style used)
- [ ] Add action buttons:
  - Download Original
  - Download Plushified
  - Delete
- [ ] Add close button
- [ ] Add keyboard support (Escape to close)

#### 7.5 Image Grid Component
- [ ] Create `src/components/gallery/image-grid.tsx`
- [ ] Accept images array prop
- [ ] Display grid of `ImageCard` components
- [ ] Responsive: 4 columns → 3 → 2 → 1
- [ ] Add gap between cards
- [ ] Handle empty state conditional

#### 7.6 Assemble Gallery Page
- [ ] Integrate all gallery components
- [ ] Add state for selected image (for modal)
- [ ] Add state for mock deletion
- [ ] Wire up modal open/close
- [ ] Wire up delete functionality (remove from local state)
- [ ] Show empty state when all deleted
- [ ] Test full interaction flow

#### 7.7 Gallery Loading State
- [ ] Create `src/app/gallery/loading.tsx`
- [ ] Display skeleton grid matching gallery layout
- [ ] Use shadcn Skeleton component

---

## Phase 8: Documentation Pages

Build the documentation section with sidebar navigation.

### Tasks

#### 8.1 Docs Layout
- [ ] Create `src/app/docs/layout.tsx`
- [ ] Create two-column layout (sidebar + content)
- [ ] Sidebar: 240px width on desktop
- [ ] Content: remaining width with max-width
- [ ] Make sidebar collapsible on mobile

#### 8.2 Sidebar Navigation
- [ ] Create `src/components/docs/sidebar-nav.tsx`
- [ ] Add navigation links:
  - Getting Started
  - How to Use
  - API Reference
  - FAQ
- [ ] Highlight active page
- [ ] Add icons for each section
- [ ] Style with proper spacing and hover effects

#### 8.3 Doc Content Wrapper
- [ ] Create `src/components/docs/doc-content.tsx`
- [ ] Add consistent padding and max-width
- [ ] Add typography styles for headings, paragraphs, lists
- [ ] Add "On this page" table of contents (optional)

#### 8.4 Getting Started Page
- [ ] Create `src/app/docs/page.tsx` (index redirects or shows getting started)
- [ ] Create `src/app/docs/getting-started/page.tsx`
- [ ] Add page title and introduction
- [ ] Add "Quick Start" section with 3 steps
- [ ] Add "Create Your Account" section
- [ ] Add "Your First Plushie" section
- [ ] Add "Next Steps" links

#### 8.5 How to Use Page
- [ ] Create `src/app/docs/how-to-use/page.tsx`
- [ ] Add detailed guide sections:
  - Uploading Images
  - Choosing a Style
  - Adjusting Settings
  - Downloading Results
  - Managing Your Gallery
- [ ] Add tips and best practices
- [ ] Add troubleshooting common issues

#### 8.6 API Reference Page
- [ ] Create `src/app/docs/api/page.tsx`
- [ ] Add "Coming Soon" or placeholder message
- [ ] Add brief overview of planned API features
- [ ] Add email signup for API access notifications (placeholder)

#### 8.7 FAQ Page
- [ ] Create `src/app/docs/faq/page.tsx`
- [ ] Organize FAQs by category:
  - General
  - Billing
  - Technical
  - Privacy
- [ ] Use Accordion for each category
- [ ] Add 5-8 questions per category
- [ ] Add "Still have questions? Contact us" CTA

---

## Phase 9: Legal Pages

Create all required legal documentation pages.

### Tasks

#### 9.1 Legal Layout
- [ ] Create `src/app/(legal)/layout.tsx`
- [ ] Add consistent layout for all legal pages
- [ ] Add page title area
- [ ] Add "Last Updated" date display
- [ ] Add back navigation link
- [ ] Add table of contents sidebar (optional)
- [ ] Style with readable typography

#### 9.2 Privacy Policy
- [ ] Create `src/app/(legal)/privacy/page.tsx`
- [ ] Add standard privacy policy sections:
  - Information We Collect
  - How We Use Your Information
  - Information Sharing
  - Data Security
  - Your Rights
  - Cookies
  - Children's Privacy
  - Changes to Policy
  - Contact Us
- [ ] Use placeholder company details

#### 9.3 Terms of Service
- [ ] Create `src/app/(legal)/terms/page.tsx`
- [ ] Add standard ToS sections:
  - Acceptance of Terms
  - Description of Service
  - User Accounts
  - Acceptable Use
  - Intellectual Property
  - Payment Terms
  - Disclaimers
  - Limitation of Liability
  - Termination
  - Governing Law
  - Contact

#### 9.4 Cookie Policy
- [ ] Create `src/app/(legal)/cookies/page.tsx`
- [ ] Add cookie policy sections:
  - What Are Cookies
  - Types of Cookies We Use
  - How to Control Cookies
  - Third-Party Cookies
  - Updates to Policy

#### 9.5 Refund Policy
- [ ] Create `src/app/(legal)/refund/page.tsx`
- [ ] Add refund policy sections:
  - Overview
  - Credit Purchases
  - Refund Eligibility
  - How to Request a Refund
  - Processing Time
  - Exceptions
  - Contact

#### 9.6 GDPR Information
- [ ] Create `src/app/(legal)/gdpr/page.tsx`
- [ ] Add GDPR-specific sections:
  - Your Rights Under GDPR
  - Data Controller Information
  - Legal Basis for Processing
  - Data Retention
  - International Transfers
  - How to Exercise Your Rights
  - Complaints

#### 9.7 CCPA Notice
- [ ] Create `src/app/(legal)/ccpa/page.tsx`
- [ ] Add CCPA-specific sections:
  - California Residents' Rights
  - Categories of Information Collected
  - How We Use Information
  - Do Not Sell My Information
  - How to Exercise Your Rights
  - Non-Discrimination

#### 9.8 Acceptable Use Policy
- [ ] Create `src/app/(legal)/acceptable-use/page.tsx`
- [ ] Add AUP sections:
  - Purpose
  - Prohibited Content
  - Prohibited Activities
  - Content Guidelines
  - Enforcement
  - Reporting Violations

---

## Phase 10: Final Polish & Verification

Complete final updates and verify everything works.

### Tasks

#### 10.1 Update Sitemap
- [ ] Open `src/app/sitemap.ts`
- [ ] Add all new public routes:
  - /pricing
  - /docs
  - /docs/getting-started
  - /docs/how-to-use
  - /docs/api
  - /docs/faq
  - /privacy
  - /terms
  - /cookies
  - /refund
  - /gdpr
  - /ccpa
  - /acceptable-use
- [ ] Set appropriate priorities and changefreq

#### 10.2 Update Robots.txt
- [ ] Open `src/app/robots.ts`
- [ ] Disallow /dashboard
- [ ] Disallow /gallery
- [ ] Allow all public pages
- [ ] Add sitemap reference

#### 10.3 Verify All Routes
- [ ] Test landing page loads correctly
- [ ] Test pricing page loads correctly
- [ ] Test dashboard page loads correctly
- [ ] Test gallery page loads correctly
- [ ] Test all documentation pages load
- [ ] Test all legal pages load
- [ ] Test 404 page still works

#### 10.4 Verify Responsive Design
- [ ] Test all pages at 375px (mobile)
- [ ] Test all pages at 768px (tablet)
- [ ] Test all pages at 1024px (small desktop)
- [ ] Test all pages at 1440px (large desktop)
- [ ] Fix any layout issues found

#### 10.5 Verify Dark Mode
- [ ] Toggle dark mode on landing page
- [ ] Toggle dark mode on pricing page
- [ ] Toggle dark mode on dashboard
- [ ] Toggle dark mode on gallery
- [ ] Toggle dark mode on docs pages
- [ ] Toggle dark mode on legal pages
- [ ] Fix any contrast or visibility issues

#### 10.6 Verify Navigation
- [ ] Test all header links work
- [ ] Test all footer links work
- [ ] Test mobile menu opens and closes
- [ ] Test mobile menu links work
- [ ] Test back navigation on legal pages
- [ ] Test docs sidebar navigation

#### 10.7 Code Quality
- [ ] Run `pnpm lint` - fix all errors
- [ ] Run `pnpm typecheck` - fix all errors
- [ ] Remove any console.log statements
- [ ] Remove any TODO comments (or document them)
- [ ] Verify no unused imports

#### 10.8 Final Verification
- [ ] Full user flow: Landing → Pricing → Dashboard → Generate (mock) → Gallery
- [ ] Verify mock user appears in header
- [ ] Verify credit balance shows correctly
- [ ] Verify gallery shows mock images
- [ ] Take screenshots of key pages for documentation

---

## Summary

| Phase | Description | Est. Tasks |
|-------|-------------|------------|
| 0 | Boilerplate Cleanup | 14 |
| 1 | Foundation Setup | 35 |
| 2 | Navigation Components | 20 |
| 3 | Shared UI Components | 35 |
| 4 | Landing Page | 30 |
| 5 | Pricing Page | 20 |
| 6 | Dashboard | 35 |
| 7 | Gallery Page | 25 |
| 8 | Documentation Pages | 25 |
| 9 | Legal Pages | 25 |
| 10 | Final Polish | 30 |
| **Total** | | **~294 tasks** |

---

## Notes

- All mock images can use placeholder services (e.g., picsum.photos, pravatar.cc) initially
- Real plushified images can be added later when available
- Backend integration will be a separate implementation phase
- Testing (unit/e2e) will be added in a future phase
