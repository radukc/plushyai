"use client";

import { FeatureCard } from "@/components/feature-card";
import { features } from "@/lib/mock-data";

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">Plushify</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Create adorable plushie versions of your photos with our powerful AI
            technology. Here&apos;s what makes us special.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
