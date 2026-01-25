// Mock data for Plushify SaaS UI development

export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  credits: number;
  plan: "free" | "basic" | "pro" | "elite";
  createdAt: Date;
}

export interface GalleryImage {
  id: string;
  originalUrl: string;
  plushifiedUrl: string;
  style: string;
  createdAt: Date;
  quality: "standard" | "high" | "ultra";
  size: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  quote: string;
  rating: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  credits: number;
  features: string[];
  popular?: boolean;
  badge?: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "billing" | "technical" | "privacy";
}

// Mock authenticated user
export const mockUser: User = {
  id: "user_1",
  name: "Sarah Johnson",
  email: "sarah@example.com",
  image: "https://i.pravatar.cc/150?u=sarah",
  credits: 47,
  plan: "pro",
  createdAt: new Date("2024-01-15"),
};

// Mock gallery images (before/after pairs)
export const mockGalleryImages: GalleryImage[] = [
  {
    id: "img_1",
    originalUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=512&h=512&fit=crop",
    plushifiedUrl: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=512&h=512&fit=crop",
    style: "Classic Plushie",
    createdAt: new Date("2024-12-20"),
    quality: "high",
    size: "1024x1024",
  },
  {
    id: "img_2",
    originalUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=512&h=512&fit=crop",
    plushifiedUrl: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=512&h=512&fit=crop",
    style: "Kawaii",
    createdAt: new Date("2024-12-18"),
    quality: "ultra",
    size: "2048x2048",
  },
  {
    id: "img_3",
    originalUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=512&h=512&fit=crop",
    plushifiedUrl: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=512&h=512&fit=crop",
    style: "Cartoon",
    createdAt: new Date("2024-12-15"),
    quality: "standard",
    size: "512x512",
  },
  {
    id: "img_4",
    originalUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=512&h=512&fit=crop",
    plushifiedUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=512&h=512&fit=crop",
    style: "Realistic Plush",
    createdAt: new Date("2024-12-12"),
    quality: "high",
    size: "1024x1024",
  },
  {
    id: "img_5",
    originalUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=512&h=512&fit=crop",
    plushifiedUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=512&h=512&fit=crop",
    style: "Chibi",
    createdAt: new Date("2024-12-10"),
    quality: "ultra",
    size: "2048x2048",
  },
  {
    id: "img_6",
    originalUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=512&h=512&fit=crop",
    plushifiedUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=512&h=512&fit=crop",
    style: "Classic Plushie",
    createdAt: new Date("2024-12-08"),
    quality: "high",
    size: "1024x1024",
  },
  {
    id: "img_7",
    originalUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=512&h=512&fit=crop",
    plushifiedUrl: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=512&h=512&fit=crop",
    style: "Kawaii",
    createdAt: new Date("2024-12-05"),
    quality: "standard",
    size: "512x512",
  },
  {
    id: "img_8",
    originalUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=512&h=512&fit=crop",
    plushifiedUrl: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=512&h=512&fit=crop",
    style: "Cartoon",
    createdAt: new Date("2024-12-01"),
    quality: "high",
    size: "1024x1024",
  },
];

// Mock testimonials
export const mockTestimonials: Testimonial[] = [
  {
    id: "test_1",
    name: "Emily Chen",
    avatar: "https://i.pravatar.cc/150?u=emily",
    role: "Graphic Designer",
    quote: "Plushify transformed my pet photos into the cutest plushie versions! The quality is amazing and my kids absolutely love them.",
    rating: 5,
  },
  {
    id: "test_2",
    name: "Marcus Williams",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    role: "Content Creator",
    quote: "I use Plushify for all my social media content. The AI is incredibly fast and the results are always adorable. Best investment ever!",
    rating: 5,
  },
  {
    id: "test_3",
    name: "Sofia Rodriguez",
    avatar: "https://i.pravatar.cc/150?u=sofia",
    role: "Small Business Owner",
    quote: "Created custom plushie designs for my merchandise line. The multiple style options let me offer unique products my customers love.",
    rating: 5,
  },
  {
    id: "test_4",
    name: "James Thompson",
    avatar: "https://i.pravatar.cc/150?u=james",
    role: "Parent",
    quote: "Made plushie versions of our family photos as gifts. Everyone was so touched! The Kawaii style is my favorite.",
    rating: 4,
  },
  {
    id: "test_5",
    name: "Aisha Patel",
    avatar: "https://i.pravatar.cc/150?u=aisha",
    role: "Artist",
    quote: "The realistic plush style is perfect for my art projects. High-resolution outputs mean I can print them large without losing quality.",
    rating: 5,
  },
  {
    id: "test_6",
    name: "David Kim",
    avatar: "https://i.pravatar.cc/150?u=david",
    role: "Marketing Manager",
    quote: "Our team uses Plushify for fun team-building activities. Turning everyone into plushies for our company newsletter was a huge hit!",
    rating: 5,
  },
];

// Pricing tiers
export const pricingTiers: PricingTier[] = [
  {
    id: "basic",
    name: "Basic",
    price: 9,
    credits: 30,
    features: [
      "30 generation credits",
      "Standard resolution (512px)",
      "3 plushie styles",
      "Email support",
      "7-day generation history",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 19,
    credits: 100,
    popular: true,
    features: [
      "100 generation credits",
      "High resolution (1024px)",
      "All 5 plushie styles",
      "Priority email support",
      "30-day generation history",
      "Commercial use license",
      "Background removal",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    price: 29,
    credits: 200,
    badge: "Best Value",
    features: [
      "200 generation credits",
      "Ultra resolution (2048px)",
      "All 5 plushie styles",
      "Priority support (24h response)",
      "Unlimited generation history",
      "Commercial use license",
      "Background removal",
      "Batch processing",
      "API access",
    ],
  },
];

// Landing page features
export const features: Feature[] = [
  {
    id: "feat_1",
    icon: "Sparkles",
    title: "AI-Powered Transformation",
    description: "Our advanced AI analyzes your photos and creates adorable plushie versions with incredible detail and accuracy.",
  },
  {
    id: "feat_2",
    icon: "Palette",
    title: "Multiple Plushie Styles",
    description: "Choose from Classic, Kawaii, Realistic, Cartoon, and Chibi styles to match your perfect aesthetic.",
  },
  {
    id: "feat_3",
    icon: "ImageUp",
    title: "High-Resolution Output",
    description: "Get crisp, print-ready images up to 2048x2048 pixels, perfect for merchandise and large prints.",
  },
  {
    id: "feat_4",
    icon: "Zap",
    title: "Fast Processing",
    description: "Generate your plushie in seconds, not minutes. Our optimized AI delivers results lightning fast.",
  },
  {
    id: "feat_5",
    icon: "Shield",
    title: "Secure & Private",
    description: "Your photos are processed securely and never shared. We respect your privacy and protect your data.",
  },
  {
    id: "feat_6",
    icon: "MousePointerClick",
    title: "Easy to Use",
    description: "Simply upload a photo, choose a style, and download your plushie. No design skills required!",
  },
];

// FAQ items for pricing and docs
export const faqItems: FAQItem[] = [
  {
    id: "faq_1",
    question: "What are credits?",
    answer: "Credits are used to generate plushie images. Each generation uses 1 credit. Different plans come with different amounts of credits, and you can purchase additional credit packs anytime.",
    category: "billing",
  },
  {
    id: "faq_2",
    question: "Do credits expire?",
    answer: "No! Your credits never expire. Use them whenever you want, at your own pace. Once purchased, they're yours forever.",
    category: "billing",
  },
  {
    id: "faq_3",
    question: "Can I upgrade my plan?",
    answer: "Yes! You can upgrade your plan at any time. When you upgrade, you'll immediately receive the additional credits and features from your new plan.",
    category: "billing",
  },
  {
    id: "faq_4",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely through Stripe.",
    category: "billing",
  },
  {
    id: "faq_5",
    question: "Is there a free trial?",
    answer: "New users receive 3 free credits to try Plushify! No credit card required. Sign up and start creating your first plushie right away.",
    category: "billing",
  },
  {
    id: "faq_6",
    question: "What's your refund policy?",
    answer: "We offer a 30-day money-back guarantee on all credit purchases. If you're not satisfied with Plushify, contact us for a full refund. Note that used credits cannot be refunded.",
    category: "billing",
  },
  {
    id: "faq_7",
    question: "Can I use the images commercially?",
    answer: "Pro and Elite plans include a commercial use license, allowing you to use your generated plushie images for merchandise, marketing, and other commercial purposes.",
    category: "general",
  },
  {
    id: "faq_8",
    question: "How long does generation take?",
    answer: "Most generations complete in 10-30 seconds, depending on the selected resolution and current server load. Pro and Elite users get priority processing.",
    category: "technical",
  },
  {
    id: "faq_9",
    question: "What image formats are supported?",
    answer: "You can upload JPG, PNG, and WebP images. We recommend using high-quality photos with good lighting for the best results. Maximum file size is 10MB.",
    category: "technical",
  },
  {
    id: "faq_10",
    question: "How is my data protected?",
    answer: "We use industry-standard encryption for all data transfers and storage. Your uploaded images are processed securely and automatically deleted after 30 days (or immediately upon request).",
    category: "privacy",
  },
  {
    id: "faq_11",
    question: "Can I delete my generated images?",
    answer: "Yes! You can delete any of your generated images from your gallery at any time. Deleted images are permanently removed from our servers.",
    category: "privacy",
  },
  {
    id: "faq_12",
    question: "What makes a good source photo?",
    answer: "For best results, use photos with clear faces, good lighting, and minimal background clutter. Front-facing portraits work best. The AI handles the rest!",
    category: "technical",
  },
];

// Helper function to get FAQs by category
export function getFAQsByCategory(category: FAQItem["category"]): FAQItem[] {
  return faqItems.filter((faq) => faq.category === category);
}

// Helper function to format date
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
