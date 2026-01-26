import Link from "next/link";
import type { Metadata } from "next";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DocContent, DocHeader, DocSection } from "@/components/docs/doc-content";

export const metadata: Metadata = {
  title: "FAQ - Plushify Docs",
  description:
    "Frequently asked questions about Plushify. Find answers about billing, technical features, privacy, and more.",
};

// Comprehensive FAQ data organized by category
const faqCategories = {
  general: {
    title: "General",
    description: "Common questions about Plushify and how it works.",
    questions: [
      {
        q: "What is Plushify?",
        a: "Plushify is an AI-powered service that transforms your photos into adorable plushie versions. Simply upload any photo, choose a style, and our AI will create a cute plushie transformation in seconds.",
      },
      {
        q: "How does Plushify work?",
        a: "Plushify uses advanced AI image generation technology to analyze your photos and create plushie versions. The AI understands facial features, textures, and compositions, then transforms them into soft, plushie-style artwork while maintaining recognizable characteristics.",
      },
      {
        q: "What types of photos work best?",
        a: "Photos with clear faces and good lighting produce the best results. Front-facing portraits, pet photos, and images with simple backgrounds work particularly well. Avoid heavily filtered, blurry, or very dark images.",
      },
      {
        q: "Can I use images commercially?",
        a: "Pro and Elite plans include a commercial use license, allowing you to use generated plushie images for merchandise, marketing, and other commercial purposes. Basic plan users are limited to personal use only.",
      },
      {
        q: "What file formats can I upload?",
        a: "Plushify accepts JPG, PNG, and WebP image formats. Maximum file size is 10MB, with a minimum resolution of 256x256 pixels. We recommend uploading high-quality images for the best results.",
      },
      {
        q: "How many styles are available?",
        a: "Plushify offers five unique plushie styles: Classic Plushie, Kawaii, Realistic Plush, Cartoon, and Chibi. Basic plans have access to 3 styles, while Pro and Elite plans unlock all 5 styles.",
      },
    ],
  },
  billing: {
    title: "Billing & Credits",
    description: "Questions about pricing, credits, and payments.",
    questions: [
      {
        q: "What are credits?",
        a: "Credits are used to generate plushie images. Each generation uses 1 credit. Different plans come with different amounts of credits, and you can purchase additional credit packs anytime.",
      },
      {
        q: "Do credits expire?",
        a: "No! Your credits never expire. Use them whenever you want, at your own pace. Once purchased, they're yours forever.",
      },
      {
        q: "Can I upgrade my plan?",
        a: "Yes! You can upgrade your plan at any time. When you upgrade, you'll immediately receive the additional credits and features from your new plan.",
      },
      {
        q: "Can I downgrade my plan?",
        a: "You can downgrade your plan at the end of your current billing period. Your credits will carry over, but you'll lose access to plan-specific features like higher resolutions and additional styles.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely through Stripe.",
      },
      {
        q: "Is there a free trial?",
        a: "New users receive 3 free credits to try Plushify! No credit card required. Sign up and start creating your first plushie right away.",
      },
      {
        q: "What's your refund policy?",
        a: "We offer a 30-day money-back guarantee on all credit purchases. If you're not satisfied with Plushify, contact us for a full refund. Note that used credits cannot be refunded.",
      },
      {
        q: "Can I buy credits without a subscription?",
        a: "Currently, credits are included with plan subscriptions. We're working on one-time credit pack purchases that will be available soon.",
      },
    ],
  },
  technical: {
    title: "Technical",
    description: "Questions about features, quality, and technical details.",
    questions: [
      {
        q: "How long does generation take?",
        a: "Most generations complete in 10-30 seconds, depending on the selected resolution and current server load. Pro and Elite users get priority processing for faster results.",
      },
      {
        q: "What resolution can I get?",
        a: "Basic plan supports 512x512 pixels, Pro plan supports up to 1024x1024 pixels, and Elite plan supports up to 2048x2048 pixels. Higher resolutions are better for printing and merchandise.",
      },
      {
        q: "Can I remove the background?",
        a: "Yes! Pro and Elite plans include background removal. When enabled, your plushie will be generated with a transparent background, perfect for overlays and compositions.",
      },
      {
        q: "What's the difference between quality levels?",
        a: "Standard quality is fast and good for previews. High quality provides more detail and smoother results. Ultra quality (Elite only) produces the highest fidelity output with maximum detail.",
      },
      {
        q: "Can I process multiple images at once?",
        a: "Batch processing is available for Elite plan users. You can upload multiple images and process them in a queue, making it efficient for large projects.",
      },
      {
        q: "What makes a good source photo?",
        a: "For best results, use photos with clear faces, good lighting, and minimal background clutter. Front-facing portraits work best. The AI handles the rest!",
      },
      {
        q: "Why does my plushie look different from the preview?",
        a: "The AI generates unique results each time based on the style and settings chosen. Small variations are normal. If you're not happy with a result, you can generate again.",
      },
      {
        q: "Is there an API available?",
        a: "We're developing a RESTful API for Elite plan users. It will allow you to integrate Plushify into your own applications. Sign up for our API waitlist to be notified when it launches.",
      },
    ],
  },
  privacy: {
    title: "Privacy & Security",
    description: "Questions about data protection and privacy.",
    questions: [
      {
        q: "How is my data protected?",
        a: "We use industry-standard encryption (TLS 1.3) for all data transfers and AES-256 encryption for stored data. Your uploaded images are processed securely on isolated servers.",
      },
      {
        q: "Do you store my uploaded images?",
        a: "Uploaded images are stored temporarily for processing and in your gallery (if saved). Images not saved to your gallery are automatically deleted after 24 hours. You can manually delete any saved images at any time.",
      },
      {
        q: "Can I delete my generated images?",
        a: "Yes! You can delete any of your generated images from your gallery at any time. Deleted images are permanently removed from our servers within 24 hours.",
      },
      {
        q: "Do you use my images to train AI?",
        a: "No. Your uploaded images are never used to train our AI models. They are processed solely to generate your plushie and are then deleted according to our retention policy.",
      },
      {
        q: "Who can see my generated plushies?",
        a: "Your generated images are private by default. Only you can access them through your account. We do not share your images with anyone without your explicit consent.",
      },
      {
        q: "How do I request my data?",
        a: "You can request a copy of all your data through your account settings. We'll compile your data and send it to your registered email within 30 days, as required by GDPR and CCPA.",
      },
      {
        q: "How do I delete my account?",
        a: "You can delete your account from the account settings page. This will permanently remove all your data, including generated images and personal information, from our systems.",
      },
      {
        q: "Is Plushify GDPR compliant?",
        a: "Yes, Plushify is fully GDPR compliant. We respect your data rights, provide transparent data practices, and allow you to access, modify, or delete your data at any time.",
      },
    ],
  },
};

export default function FAQPage() {
  return (
    <DocContent>
      <DocHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about Plushify."
      />

      {Object.entries(faqCategories).map(([key, category]) => (
        <DocSection key={key} title={category.title} id={key}>
          <p className="text-muted-foreground mb-6">{category.description}</p>

          <Accordion type="single" collapsible className="w-full">
            {category.questions.map((faq, index) => (
              <AccordionItem
                key={`${key}-${index}`}
                value={`${key}-${index}`}
                className="border rounded-lg px-4 mb-3 data-[state=open]:bg-muted/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </DocSection>
      ))}

      {/* Contact CTA */}
      <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-shrink-0 p-3 rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">Still have questions?</h3>
            <p className="text-muted-foreground">
              Can&apos;t find what you&apos;re looking for? Our support team is
              here to help.
            </p>
          </div>
          <Button asChild>
            <Link href="mailto:support@plushify.com">Contact Support</Link>
          </Button>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-8 pt-8 border-t">
        <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/docs/getting-started"
            className="flex items-center gap-2 p-3 border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors"
          >
            <span className="text-sm font-medium">Getting Started Guide</span>
          </Link>
          <Link
            href="/docs/how-to-use"
            className="flex items-center gap-2 p-3 border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors"
          >
            <span className="text-sm font-medium">How to Use Plushify</span>
          </Link>
          <Link
            href="/pricing"
            className="flex items-center gap-2 p-3 border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors"
          >
            <span className="text-sm font-medium">View Pricing Plans</span>
          </Link>
          <Link
            href="/privacy"
            className="flex items-center gap-2 p-3 border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors"
          >
            <span className="text-sm font-medium">Privacy Policy</span>
          </Link>
        </div>
      </div>
    </DocContent>
  );
}
