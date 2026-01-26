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

// Comprehensive FAQ items for all pages (pricing, docs, etc.)
export const faqItems: FAQItem[] = [
  // General category
  {
    id: "faq_g1",
    question: "What is Plushify?",
    answer: "Plushify is an AI-powered service that transforms your photos into adorable plushie versions. Simply upload any photo, choose a style, and our AI will create a cute plushie transformation in seconds.",
    category: "general",
  },
  {
    id: "faq_g2",
    question: "How does Plushify work?",
    answer: "Plushify uses advanced AI image generation technology to analyze your photos and create plushie versions. The AI understands facial features, textures, and compositions, then transforms them into soft, plushie-style artwork while maintaining recognizable characteristics.",
    category: "general",
  },
  {
    id: "faq_g3",
    question: "What types of photos work best?",
    answer: "Photos with clear faces and good lighting produce the best results. Front-facing portraits, pet photos, and images with simple backgrounds work particularly well. Avoid heavily filtered, blurry, or very dark images.",
    category: "general",
  },
  {
    id: "faq_g4",
    question: "Can I use images commercially?",
    answer: "Pro and Elite plans include a commercial use license, allowing you to use generated plushie images for merchandise, marketing, and other commercial purposes. Basic plan users are limited to personal use only.",
    category: "general",
  },
  {
    id: "faq_g5",
    question: "What file formats can I upload?",
    answer: "Plushify accepts JPG, PNG, and WebP image formats. Maximum file size is 10MB, with a minimum resolution of 256x256 pixels. We recommend uploading high-quality images for the best results.",
    category: "general",
  },
  {
    id: "faq_g6",
    question: "How many styles are available?",
    answer: "Plushify offers five unique plushie styles: Classic Plushie, Kawaii, Realistic Plush, Cartoon, and Chibi. Basic plans have access to 3 styles, while Pro and Elite plans unlock all 5 styles.",
    category: "general",
  },
  // Billing category
  {
    id: "faq_b1",
    question: "What are credits?",
    answer: "Credits are used to generate plushie images. Each generation uses 1 credit. Different plans come with different amounts of credits, and you can purchase additional credit packs anytime.",
    category: "billing",
  },
  {
    id: "faq_b2",
    question: "Do credits expire?",
    answer: "No! Your credits never expire. Use them whenever you want, at your own pace. Once purchased, they're yours forever.",
    category: "billing",
  },
  {
    id: "faq_b3",
    question: "Can I upgrade my plan?",
    answer: "Yes! You can upgrade your plan at any time. When you upgrade, you'll immediately receive the additional credits and features from your new plan.",
    category: "billing",
  },
  {
    id: "faq_b4",
    question: "Can I downgrade my plan?",
    answer: "You can downgrade your plan at the end of your current billing period. Your credits will carry over, but you'll lose access to plan-specific features like higher resolutions and additional styles.",
    category: "billing",
  },
  {
    id: "faq_b5",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely through Stripe.",
    category: "billing",
  },
  {
    id: "faq_b6",
    question: "Is there a free trial?",
    answer: "New users receive 3 free credits to try Plushify! No credit card required. Sign up and start creating your first plushie right away.",
    category: "billing",
  },
  {
    id: "faq_b7",
    question: "What's your refund policy?",
    answer: "We offer a 30-day money-back guarantee on all credit purchases. If you're not satisfied with Plushify, contact us for a full refund. Note that used credits cannot be refunded.",
    category: "billing",
  },
  {
    id: "faq_b8",
    question: "Can I buy credits without a subscription?",
    answer: "Currently, credits are included with plan subscriptions. We're working on one-time credit pack purchases that will be available soon.",
    category: "billing",
  },
  // Technical category
  {
    id: "faq_t1",
    question: "How long does generation take?",
    answer: "Most generations complete in 10-30 seconds, depending on the selected resolution and current server load. Pro and Elite users get priority processing for faster results.",
    category: "technical",
  },
  {
    id: "faq_t2",
    question: "What resolution can I get?",
    answer: "Basic plan supports 512x512 pixels, Pro plan supports up to 1024x1024 pixels, and Elite plan supports up to 2048x2048 pixels. Higher resolutions are better for printing and merchandise.",
    category: "technical",
  },
  {
    id: "faq_t3",
    question: "Can I remove the background?",
    answer: "Yes! Pro and Elite plans include background removal. When enabled, your plushie will be generated with a transparent background, perfect for overlays and compositions.",
    category: "technical",
  },
  {
    id: "faq_t4",
    question: "What's the difference between quality levels?",
    answer: "Standard quality is fast and good for previews. High quality provides more detail and smoother results. Ultra quality (Elite only) produces the highest fidelity output with maximum detail.",
    category: "technical",
  },
  {
    id: "faq_t5",
    question: "Can I process multiple images at once?",
    answer: "Batch processing is available for Elite plan users. You can upload multiple images and process them in a queue, making it efficient for large projects.",
    category: "technical",
  },
  {
    id: "faq_t6",
    question: "What makes a good source photo?",
    answer: "For best results, use photos with clear faces, good lighting, and minimal background clutter. Front-facing portraits work best. The AI handles the rest!",
    category: "technical",
  },
  {
    id: "faq_t7",
    question: "Why does my plushie look different from the preview?",
    answer: "The AI generates unique results each time based on the style and settings chosen. Small variations are normal. If you're not happy with a result, you can generate again.",
    category: "technical",
  },
  {
    id: "faq_t8",
    question: "Is there an API available?",
    answer: "We're developing a RESTful API for Elite plan users. It will allow you to integrate Plushify into your own applications. Sign up for our API waitlist to be notified when it launches.",
    category: "technical",
  },
  // Privacy category
  {
    id: "faq_p1",
    question: "How is my data protected?",
    answer: "We use industry-standard encryption (TLS 1.3) for all data transfers and AES-256 encryption for stored data. Your uploaded images are processed securely on isolated servers.",
    category: "privacy",
  },
  {
    id: "faq_p2",
    question: "Do you store my uploaded images?",
    answer: "Uploaded images are stored temporarily for processing and in your gallery (if saved). Images not saved to your gallery are automatically deleted after 24 hours. You can manually delete any saved images at any time.",
    category: "privacy",
  },
  {
    id: "faq_p3",
    question: "Can I delete my generated images?",
    answer: "Yes! You can delete any of your generated images from your gallery at any time. Deleted images are permanently removed from our servers within 24 hours.",
    category: "privacy",
  },
  {
    id: "faq_p4",
    question: "Do you use my images to train AI?",
    answer: "No. Your uploaded images are never used to train our AI models. They are processed solely to generate your plushie and are then deleted according to our retention policy.",
    category: "privacy",
  },
  {
    id: "faq_p5",
    question: "Who can see my generated plushies?",
    answer: "Your generated images are private by default. Only you can access them through your account. We do not share your images with anyone without your explicit consent.",
    category: "privacy",
  },
  {
    id: "faq_p6",
    question: "How do I request my data?",
    answer: "You can request a copy of all your data through your account settings. We'll compile your data and send it to your registered email within 30 days, as required by GDPR and CCPA.",
    category: "privacy",
  },
  {
    id: "faq_p7",
    question: "How do I delete my account?",
    answer: "You can delete your account from the account settings page. This will permanently remove all your data, including generated images and personal information, from our systems.",
    category: "privacy",
  },
  {
    id: "faq_p8",
    question: "Is Plushify GDPR compliant?",
    answer: "Yes, Plushify is fully GDPR compliant. We respect your data rights, provide transparent data practices, and allow you to access, modify, or delete your data at any time.",
    category: "privacy",
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
