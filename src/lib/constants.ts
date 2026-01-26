// Plushify application constants

import { pricingTiers } from "./mock-data";

// Re-export pricing tiers for convenience
export const PRICING_TIERS = pricingTiers;

// Plushie style options
export interface PlushieStyle {
  id: string;
  name: string;
  description: string;
  preview: string;
  creditCost: number;
  available: boolean;
}

export const PLUSHIE_STYLES: PlushieStyle[] = [
  {
    id: "classic",
    name: "Classic Plushie",
    description: "Traditional soft toy look with round features and button eyes",
    preview: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=200&h=200&fit=crop",
    creditCost: 1,
    available: true,
  },
  {
    id: "kawaii",
    name: "Kawaii",
    description: "Japanese-inspired cute style with big eyes and pastel colors",
    preview: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=200&h=200&fit=crop",
    creditCost: 1,
    available: true,
  },
  {
    id: "realistic",
    name: "Realistic Plush",
    description: "Detailed, lifelike plush texture with realistic proportions",
    preview: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200&h=200&fit=crop",
    creditCost: 1,
    available: true,
  },
  {
    id: "cartoon",
    name: "Cartoon",
    description: "Fun, exaggerated cartoon style with bold colors",
    preview: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=200&h=200&fit=crop",
    creditCost: 1,
    available: true,
  },
  {
    id: "chibi",
    name: "Chibi",
    description: "Super-deformed style with oversized head and tiny body",
    preview: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop",
    creditCost: 1,
    available: true,
  },
];

// Generation quality options
export interface QualityOption {
  id: string;
  name: string;
  resolution: string;
  pixels: number;
  creditMultiplier: number;
  description: string;
  requiredPlan: "free" | "basic" | "pro" | "elite";
}

export const GENERATION_QUALITY_OPTIONS: QualityOption[] = [
  {
    id: "standard",
    name: "Standard",
    resolution: "512x512",
    pixels: 512,
    creditMultiplier: 1,
    description: "Good for social media and web use",
    requiredPlan: "free",
  },
  {
    id: "high",
    name: "High",
    resolution: "1024x1024",
    pixels: 1024,
    creditMultiplier: 1,
    description: "Great for prints and merchandise",
    requiredPlan: "pro",
  },
  {
    id: "ultra",
    name: "Ultra",
    resolution: "2048x2048",
    pixels: 2048,
    creditMultiplier: 2,
    description: "Maximum detail for large prints",
    requiredPlan: "elite",
  },
];

// Navigation links for header
export interface NavLink {
  label: string;
  href: string;
  requiresAuth?: boolean;
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Gallery",
    href: "/gallery",
    requiresAuth: true,
  },
  {
    label: "Docs",
    href: "/docs",
  },
];

// Footer links organized by column
export interface FooterLinkColumn {
  title: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}

export const FOOTER_LINKS: FooterLinkColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Gallery", href: "/gallery" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Getting Started", href: "/docs/getting-started" },
      { label: "API Reference", href: "/docs/api" },
      { label: "FAQ", href: "/docs/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Refund Policy", href: "/refund" },
      { label: "GDPR", href: "/gdpr" },
      { label: "CCPA", href: "/ccpa" },
      { label: "Acceptable Use", href: "/acceptable-use" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

// Social media links
export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Twitter",
    href: "https://twitter.com/plushify",
    icon: "Twitter",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/plushify",
    icon: "Instagram",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@plushify",
    icon: "Music2",
  },
  {
    name: "Discord",
    href: "https://discord.gg/plushify",
    icon: "MessageCircle",
  },
];

// App configuration
export const APP_CONFIG = {
  name: "Plushify",
  tagline: "Turn Anyone Into a Plushie",
  description: "Transform your photos into adorable plushie versions with AI",
  domain: "plushify.com",
  email: {
    support: "support@plushify.com",
    business: "hello@plushify.com",
  },
  freeCredits: 3,
  maxFileSize: 10 * 1024 * 1024, // 10MB
  supportedFormats: ["image/jpeg", "image/png", "image/webp"],
  generationTimeout: 60000, // 60 seconds
};

// Legal document metadata - update this once when legal docs change
export const LEGAL_LAST_UPDATED = "January 26, 2026";

// Credit costs for different operations
export const CREDIT_COSTS = {
  standardGeneration: 1,
  backgroundRemoval: 0,
  hdDownload: 1,
  batchGeneration: (count: number) => Math.ceil(count * 0.9), // 10% discount for batch
};

// Plan feature limits
export const PLAN_LIMITS = {
  free: {
    maxResolution: 512,
    styles: ["classic", "kawaii", "cartoon"],
    historyDays: 7,
    commercialUse: false,
    backgroundRemoval: false,
    batchProcessing: false,
    apiAccess: false,
  },
  basic: {
    maxResolution: 512,
    styles: ["classic", "kawaii", "cartoon"],
    historyDays: 7,
    commercialUse: false,
    backgroundRemoval: false,
    batchProcessing: false,
    apiAccess: false,
  },
  pro: {
    maxResolution: 1024,
    styles: ["classic", "kawaii", "cartoon", "realistic", "chibi"],
    historyDays: 30,
    commercialUse: true,
    backgroundRemoval: true,
    batchProcessing: false,
    apiAccess: false,
  },
  elite: {
    maxResolution: 2048,
    styles: ["classic", "kawaii", "cartoon", "realistic", "chibi"],
    historyDays: -1, // unlimited
    commercialUse: true,
    backgroundRemoval: true,
    batchProcessing: true,
    apiAccess: true,
  },
};
