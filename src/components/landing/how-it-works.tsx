"use client";

import { Upload, Palette, Download, ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: 1,
    icon: Upload,
    title: "Upload Your Photo",
    description:
      "Simply drag and drop or click to upload any photo of yourself, friends, family, or pets.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    number: 2,
    icon: Palette,
    title: "Choose Your Style",
    description:
      "Select from Classic, Kawaii, Realistic, Cartoon, or Chibi plushie styles to match your vibe.",
    image:
      "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=200&h=200&fit=crop",
  },
  {
    number: 3,
    icon: Download,
    title: "Download Your Plushie",
    description:
      "In seconds, your adorable plushie is ready to download in high resolution.",
    image:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=200&h=200&fit=crop",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transform any photo into a plushie in three simple steps. No design
            skills required!
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Step Card */}
                <div className="text-center">
                  {/* Step Number & Icon */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30 relative z-10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Preview Image */}
                  <div className="relative w-32 h-32 mx-auto rounded-2xl overflow-hidden border-2 border-border shadow-plushify">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Arrow (Mobile) */}
                {index < STEPS.length - 1 && (
                  <div className="flex justify-center my-6 md:hidden">
                    <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
