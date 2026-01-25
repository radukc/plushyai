import Link from "next/link";
import type { Metadata } from "next";

import { ArrowRight, Check, X, Sparkles } from "lucide-react";

import { PricingCard } from "@/components/pricing-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PRICING_TIERS } from "@/lib/constants";
import { faqItems } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Pricing - Plushify",
  description:
    "Choose the perfect plan for your plushie creations. Simple, transparent pricing with credits that never expire. Start free with 3 credits.",
  openGraph: {
    title: "Pricing - Plushify",
    description:
      "Choose the perfect plan for your plushie creations. Simple, transparent pricing with credits that never expire.",
  },
};

// Feature comparison data
const comparisonFeatures = [
  {
    name: "Credits included",
    basic: "30 credits",
    pro: "100 credits",
    elite: "200 credits",
  },
  {
    name: "Image resolution",
    basic: "512px",
    pro: "1024px",
    elite: "2048px",
  },
  {
    name: "Plushie styles",
    basic: "3 styles",
    pro: "All 5 styles",
    elite: "All 5 styles",
  },
  {
    name: "Processing speed",
    basic: "Standard",
    pro: "Priority",
    elite: "Priority+",
  },
  {
    name: "Generation history",
    basic: "7 days",
    pro: "30 days",
    elite: "Unlimited",
  },
  {
    name: "Commercial use license",
    basic: false,
    pro: true,
    elite: true,
  },
  {
    name: "Background removal",
    basic: false,
    pro: true,
    elite: true,
  },
  {
    name: "Batch processing",
    basic: false,
    pro: false,
    elite: true,
  },
  {
    name: "API access",
    basic: false,
    pro: false,
    elite: true,
  },
  {
    name: "Priority support",
    basic: false,
    pro: true,
    elite: true,
  },
];

// Filter FAQ items relevant to pricing (billing category)
const pricingFAQs = faqItems.filter(
  (faq) => faq.category === "billing" || faq.category === "general"
);

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Simple,{" "}
            <span className="text-gradient">Transparent Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include credits that
            never expire, so you can create plushies at your own pace.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {PRICING_TIERS.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>

          {/* Free credits note */}
          <p className="text-center text-muted-foreground mt-8">
            <Sparkles className="inline h-4 w-4 mr-1 text-primary" />
            New users get 3 free credits to try Plushify — no credit card required!
          </p>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Compare Plans
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            See what&apos;s included in each plan and choose the one that&apos;s right for you.
          </p>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[240px]">Feature</TableHead>
                  <TableHead className="text-center">Basic</TableHead>
                  <TableHead className="text-center bg-primary/5">
                    <span className="flex items-center justify-center gap-1">
                      Pro
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    </span>
                  </TableHead>
                  <TableHead className="text-center">Elite</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonFeatures.map((feature, index) => (
                  <TableRow
                    key={feature.name}
                    className={index % 2 === 0 ? "bg-background" : "bg-muted/50"}
                  >
                    <TableCell className="font-medium">{feature.name}</TableCell>
                    <TableCell className="text-center">
                      {typeof feature.basic === "boolean" ? (
                        feature.basic ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                        )
                      ) : (
                        feature.basic
                      )}
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      {typeof feature.pro === "boolean" ? (
                        feature.pro ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                        )
                      ) : (
                        feature.pro
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {typeof feature.elite === "boolean" ? (
                        feature.elite ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                        )
                      ) : (
                        feature.elite
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re
            looking for, feel free to contact our support team.
          </p>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {pricingFAQs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-plushify opacity-90" />

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            {/* Content */}
            <div className="relative z-10 px-6 py-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Start Creating Today
              </h2>

              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Join thousands of happy users who have transformed their photos
                into adorable plushies. Start free, upgrade anytime.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg"
                >
                  <Link href="/register">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 text-lg"
                >
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
