import Link from "next/link";
import { Mail } from "lucide-react";
import { DocContent, DocHeader, DocSection } from "@/components/docs/doc-content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { getFAQsByCategory } from "@/lib/mock-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Plushify Docs",
  description:
    "Frequently asked questions about Plushify. Find answers about billing, technical features, privacy, and more.",
};

// Category metadata for display
const categoryInfo = {
  general: {
    title: "General",
    description: "Common questions about Plushify and how it works.",
  },
  billing: {
    title: "Billing & Credits",
    description: "Questions about pricing, credits, and payments.",
  },
  technical: {
    title: "Technical",
    description: "Questions about features, quality, and technical details.",
  },
  privacy: {
    title: "Privacy & Security",
    description: "Questions about data protection and privacy.",
  },
};

export default function FAQPage() {
  const categories = ["general", "billing", "technical", "privacy"] as const;

  return (
    <DocContent>
      <DocHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about Plushify."
      />

      {categories.map((category) => {
        const info = categoryInfo[category];
        const faqs = getFAQsByCategory(category);

        return (
          <DocSection key={category} title={info.title} id={category}>
            <p className="text-muted-foreground mb-6">{info.description}</p>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border rounded-lg px-4 mb-3 data-[state=open]:bg-muted/30"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </DocSection>
        );
      })}

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
