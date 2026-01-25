"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageComparisonSlider } from "@/components/ui/image-comparison-slider";

const HERO_IMAGES = {
  before:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
  after:
    "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=600&h=600&fit=crop",
};

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Magic</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Turn Anyone Into a{" "}
              <span className="text-gradient">Plushie</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Transform your photos into adorable plushie versions with AI.
              Create cute, cuddly digital plushies from any photo in seconds.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="text-lg">
                <Link href="/pricing">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg"
              >
                <Link href="#testimonials">See Examples</Link>
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-3 justify-center lg:justify-start pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background bg-primary/20 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/32?u=user${i}`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>
                  <strong className="text-foreground">10,000+</strong> plushies
                  created
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Image Comparison */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />

            {/* Main Slider */}
            <div className="relative z-10 max-w-md mx-auto lg:max-w-none">
              <ImageComparisonSlider
                beforeImage={HERO_IMAGES.before}
                afterImage={HERO_IMAGES.after}
                beforeLabel="Original"
                afterLabel="Plushified"
                className="animate-scale-in"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 right-4 md:right-8 bg-card border border-border rounded-xl px-4 py-2 shadow-plushify animate-float">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">10 sec generation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
