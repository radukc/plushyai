"use client";

import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { PricingTier } from "@/lib/mock-data";

interface PricingCardProps {
  tier: PricingTier;
  className?: string;
}

export function PricingCard({ tier, className }: PricingCardProps) {
  const isPopular = tier.popular;
  const hasBadge = tier.badge;

  return (
    <div
      className={cn(
        "relative rounded-2xl border bg-card p-6 transition-all duration-300",
        "hover:shadow-plushify hover:-translate-y-1",
        isPopular
          ? "border-primary shadow-plushify scale-105 z-10"
          : "border-border hover:border-primary/50",
        className
      )}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground px-4 py-1">
            <Sparkles className="h-3 w-3 mr-1" />
            Popular
          </Badge>
        </div>
      )}

      {/* Best Value Badge */}
      {hasBadge && !isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="secondary" className="px-4 py-1">
            {tier.badge}
          </Badge>
        </div>
      )}

      {/* Tier Name */}
      <h3 className="text-xl font-bold mb-2">{tier.name}</h3>

      {/* Price */}
      <div className="mb-4">
        <span className="text-4xl font-bold text-gradient">${tier.price}</span>
        <span className="text-muted-foreground ml-1">one-time</span>
      </div>

      {/* Credits */}
      <div className="flex items-center gap-2 mb-6 p-3 rounded-lg bg-primary/10">
        <Sparkles className="h-5 w-5 text-primary" />
        <span className="font-semibold">{tier.credits} credits</span>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button
        asChild
        className={cn(
          "w-full",
          isPopular
            ? "bg-primary hover:bg-primary/90"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        )}
        size="lg"
      >
        <Link href="/register">Get Started</Link>
      </Button>
    </div>
  );
}
