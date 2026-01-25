# Plushify SaaS UI Requirements

## Overview

Transform the existing Next.js boilerplate into a SaaS application that allows users to upload images of themselves, friends, family, or pets, and converts the subjects into plushie versions using AI.

**Scope**: UI components only - no backend logic implementation at this stage.

---

## Initial Requirements

### Product Vision
- Users can upload images and receive AI-generated plushie versions
- Credit-based pricing model for image generation
- Gallery to store and manage generated images
- Public-facing marketing and documentation

### Design Direction
- **Style**: Modern & Playful (rounded corners, soft colors, fun animations)
- **Theme**: Full dark mode support
- **Framework**: Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui

---

## Functional Requirements

### FR-01: Landing Page
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-01.1 | Display hero section with before/after image comparison slider | Must |
| FR-01.2 | Show product features in an engaging grid layout | Must |
| FR-01.3 | Present "How it Works" section with 3-step process | Must |
| FR-01.4 | Display customer testimonials with ratings | Should |
| FR-01.5 | Include multiple call-to-action sections | Must |
| FR-01.6 | Implement SEO-optimized content and metadata | Must |

### FR-02: Pricing Page
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-02.1 | Display 3 pricing tiers: Basic ($9/30 credits), Pro ($19/100 credits), Elite ($29/200 credits) | Must |
| FR-02.2 | Highlight the recommended/popular tier visually | Should |
| FR-02.3 | Show feature comparison table across tiers | Must |
| FR-02.4 | Include FAQ section with common pricing questions | Must |
| FR-02.5 | Provide clear CTA buttons for each tier | Must |

### FR-03: User Dashboard (Split View)
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-03.1 | Left panel: Display image upload dropzone with drag-and-drop support | Must |
| FR-03.2 | Left panel: Show plushie style selection options | Must |
| FR-03.3 | Left panel: Provide generation settings (quality, size) | Should |
| FR-03.4 | Right panel: Display uploaded image preview | Must |
| FR-03.5 | Right panel: Show generation progress with status messages | Must |
| FR-03.6 | Right panel: Display before/after comparison of results | Must |
| FR-03.7 | Right panel: Provide download and save-to-gallery actions | Must |
| FR-03.8 | Display user's current credit balance | Must |
| FR-03.9 | Show quick access link to gallery | Should |

### FR-04: User Gallery
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-04.1 | Display generated images in a responsive grid layout | Must |
| FR-04.2 | Show image cards with thumbnails and metadata (date, style) | Must |
| FR-04.3 | Provide hover actions: view, download, delete | Must |
| FR-04.4 | Open full comparison modal when clicking an image | Must |
| FR-04.5 | Display empty state with CTA for users with no images | Must |
| FR-04.6 | Support sorting/filtering options | Could |

### FR-05: Documentation
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-05.1 | Provide Getting Started guide | Must |
| FR-05.2 | Include How to Use documentation | Must |
| FR-05.3 | Display API documentation placeholder | Should |
| FR-05.4 | Present FAQ section | Must |
| FR-05.5 | Implement sidebar navigation for docs | Must |

### FR-06: Legal Pages
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-06.1 | Privacy Policy page | Must |
| FR-06.2 | Terms of Service page | Must |
| FR-06.3 | Cookie Policy page | Must |
| FR-06.4 | Refund Policy page | Must |
| FR-06.5 | GDPR Information page | Should |
| FR-06.6 | CCPA Notice page | Should |
| FR-06.7 | Acceptable Use Policy page | Should |

### FR-07: Navigation & Layout
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-07.1 | Update header with new navigation links (Pricing, Docs, Gallery) | Must |
| FR-07.2 | Display user profile and credit balance in header when logged in | Must |
| FR-07.3 | Implement mobile-responsive navigation menu | Must |
| FR-07.4 | Update footer with product, resources, and legal link columns | Must |
| FR-07.5 | Support dark/light mode toggle | Must |

### FR-08: Mock Data & Authentication
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-08.1 | Implement mock user data (name, email, avatar, credits, plan) | Must |
| FR-08.2 | Provide mock gallery images with before/after pairs | Must |
| FR-08.3 | Create mock testimonials for landing page | Must |
| FR-08.4 | Simulate authenticated state for dashboard/gallery access | Must |
| FR-08.5 | Allow toggling between logged-in and logged-out states | Should |

---

## Non-Functional Requirements

### NFR-01: Performance
| ID | Requirement |
|----|-------------|
| NFR-01.1 | Pages should achieve Lighthouse performance score > 90 |
| NFR-01.2 | First Contentful Paint (FCP) < 1.5 seconds |
| NFR-01.3 | Images should use Next.js Image optimization |
| NFR-01.4 | Implement lazy loading for gallery images |

### NFR-02: Responsiveness
| ID | Requirement |
|----|-------------|
| NFR-02.1 | All pages must be fully responsive (mobile, tablet, desktop) |
| NFR-02.2 | Dashboard split view should stack on mobile devices |
| NFR-02.3 | Navigation must collapse to mobile menu on small screens |
| NFR-02.4 | Image comparison slider must work on touch devices |

### NFR-03: Accessibility
| ID | Requirement |
|----|-------------|
| NFR-03.1 | All interactive elements must be keyboard accessible |
| NFR-03.2 | Images must have appropriate alt text |
| NFR-03.3 | Color contrast must meet WCAG 2.1 AA standards |
| NFR-03.4 | Form inputs must have associated labels |
| NFR-03.5 | Focus states must be clearly visible |

### NFR-04: Code Quality
| ID | Requirement |
|----|-------------|
| NFR-04.1 | TypeScript strict mode must pass without errors |
| NFR-04.2 | ESLint must pass with no errors |
| NFR-04.3 | Components should follow shadcn/ui patterns |
| NFR-04.4 | CSS should use Tailwind utility classes |

### NFR-05: Browser Support
| ID | Requirement |
|----|-------------|
| NFR-05.1 | Support latest 2 versions of Chrome, Firefox, Safari, Edge |
| NFR-05.2 | Support iOS Safari and Chrome for Android |

### NFR-06: Maintainability
| ID | Requirement |
|----|-------------|
| NFR-06.1 | Components should be modular and reusable |
| NFR-06.2 | Mock data should be centralized in dedicated files |
| NFR-06.3 | Constants (pricing, features) should be in a single source of truth |

---

## Acceptance Criteria

### AC-01: Landing Page
- [ ] Hero section displays with animated before/after image comparison slider
- [ ] Slider is draggable with mouse and touch input
- [ ] All 6 feature cards render with icons and descriptions
- [ ] How it works section shows 3 numbered steps
- [ ] At least 3 testimonials display with avatars, quotes, and ratings
- [ ] CTA buttons link to pricing or sign-up pages
- [ ] Page renders correctly in dark and light mode
- [ ] Page is fully responsive on mobile devices

### AC-02: Pricing Page
- [ ] All 3 pricing tiers display with correct prices and credit amounts
- [ ] Pro tier is visually highlighted as "Popular"
- [ ] Feature comparison table shows differences between tiers
- [ ] FAQ accordion expands/collapses correctly
- [ ] CTA buttons are present for each tier
- [ ] Page is fully responsive

### AC-03: Dashboard
- [ ] Split view layout renders with left sidebar and right main area
- [ ] Credit balance displays in the interface
- [ ] Upload dropzone accepts drag-and-drop and click-to-upload
- [ ] File type validation shows error for non-image files
- [ ] Style options can be selected
- [ ] Generation settings (sliders) are functional
- [ ] Preview area shows uploaded image
- [ ] Mock generation progress displays with percentage
- [ ] Results show before/after comparison slider
- [ ] Download and save buttons are present
- [ ] Layout stacks correctly on mobile

### AC-04: Gallery
- [ ] Mock images display in a responsive grid
- [ ] Image cards show thumbnails with date and style badges
- [ ] Hover state reveals action buttons (view, download, delete)
- [ ] Clicking an image opens full comparison modal
- [ ] Modal displays before/after slider
- [ ] Empty state renders when no images exist
- [ ] Delete action removes image from view (mock behavior)

### AC-05: Documentation
- [ ] Sidebar navigation renders with all doc links
- [ ] Active page is highlighted in sidebar
- [ ] Getting Started page has content
- [ ] How to Use page has step-by-step instructions
- [ ] API page shows placeholder content
- [ ] FAQ page has expandable accordion items
- [ ] Layout is responsive with collapsible sidebar on mobile

### AC-06: Legal Pages
- [ ] All 7 legal pages render with content
- [ ] Consistent layout across all legal pages
- [ ] "Last updated" date displays
- [ ] Back navigation is available
- [ ] Content is readable and properly formatted

### AC-07: Navigation
- [ ] Header shows logo and navigation links
- [ ] Pricing, Docs links visible to all users
- [ ] Gallery link visible when logged in (mock)
- [ ] User avatar and credit balance show when logged in
- [ ] Dark mode toggle functions correctly
- [ ] Mobile menu opens and closes properly
- [ ] Footer displays all link columns
- [ ] All footer links navigate to correct pages

### AC-08: Mock Authentication
- [ ] Mock user data loads correctly
- [ ] Header shows authenticated state with user info
- [ ] Dashboard and Gallery are accessible
- [ ] Credit balance reflects mock user data (47 credits)
- [ ] Gallery shows mock generated images

### AC-09: Cleanup
- [ ] No boilerplate chat feature exists
- [ ] No diagnostics endpoint exists
- [ ] No setup checklist component exists
- [ ] No GitHub stars widget exists
- [ ] Application runs without errors referencing deleted files

---

## Out of Scope

The following are explicitly **not** included in this phase:

- Backend API implementation
- Database integration for user data
- Actual AI image generation
- Payment processing (Stripe, etc.)
- Real authentication (OAuth, email verification)
- Image upload to cloud storage
- Email notifications
- Unit tests and E2E tests
- CI/CD pipeline setup
- Analytics and tracking
- Error monitoring (Sentry, etc.)

---

## Glossary

| Term | Definition |
|------|------------|
| Plushify | The process of converting an image subject into a plushie/stuffed toy version |
| Credit | A unit of currency within the app; each image generation costs credits |
| Before/After Slider | An interactive component showing original and plushified images side by side |
| Split View | Dashboard layout with controls on left, preview/results on right |
| Mock Data | Simulated data used for UI development without backend |
