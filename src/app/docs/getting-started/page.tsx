import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DocContent,
  DocHeader,
  DocSection,
  DocStep,
  DocTip,
} from "@/components/docs/doc-content";

export const metadata: Metadata = {
  title: "Getting Started - Plushify Docs",
  description:
    "Learn how to get started with Plushify and create your first plushie transformation in minutes.",
};

export default function GettingStartedPage() {
  return (
    <DocContent>
      <DocHeader
        title="Getting Started"
        description="Learn how to transform your photos into adorable plushies in just a few minutes."
      />

      <DocSection title="Quick Start">
        <p className="text-muted-foreground mb-6">
          Plushify makes it incredibly easy to turn any photo into a cute plushie
          version. Follow these three simple steps to get started:
        </p>

        <DocStep number={1} title="Create Your Account">
          <p>
            Sign up for a free Plushify account to get started. New users receive{" "}
            <strong>3 free credits</strong> to try out the service - no credit
            card required.
          </p>
        </DocStep>

        <DocStep number={2} title="Upload Your Photo">
          <p>
            Navigate to the dashboard and upload any photo you&apos;d like to
            transform. For best results, use a clear photo with good lighting.
            We support JPG, PNG, and WebP formats up to 10MB.
          </p>
        </DocStep>

        <DocStep number={3} title="Generate Your Plushie">
          <p>
            Choose your preferred plushie style, adjust any settings, and click
            Generate. In seconds, your adorable plushie version will be ready to
            download!
          </p>
        </DocStep>

        <DocTip variant="tip">
          For the best results, use photos with clear faces, good lighting, and
          minimal background clutter. Front-facing portraits work particularly
          well.
        </DocTip>
      </DocSection>

      <DocSection title="Create Your Account">
        <p className="text-muted-foreground mb-4">
          Getting started with Plushify is quick and easy:
        </p>

        <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
          <li>
            Visit the{" "}
            <Link href="/register" className="text-primary hover:underline">
              registration page
            </Link>
          </li>
          <li>Enter your email address and create a password</li>
          <li>Verify your email address (check your inbox)</li>
          <li>You&apos;re all set! Your account comes with 3 free credits</li>
        </ol>

        <div className="flex items-center gap-2 p-4 rounded-lg bg-primary/5 border border-primary/10">
          <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
          <p className="text-sm">
            <strong>Pro tip:</strong> Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign in here
            </Link>{" "}
            to access your dashboard and start creating.
          </p>
        </div>
      </DocSection>

      <DocSection title="Your First Plushie">
        <p className="text-muted-foreground mb-6">
          Now that you have an account, let&apos;s create your first plushie
          transformation:
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">1. Go to the Dashboard</h4>
            <p className="text-sm text-muted-foreground">
              Click on{" "}
              <Link href="/dashboard" className="text-primary hover:underline">
                Dashboard
              </Link>{" "}
              in the navigation menu to access your creation workspace.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">2. Upload Your Image</h4>
            <p className="text-sm text-muted-foreground">
              Drag and drop your image into the upload area, or click to browse
              your files. The image will appear in the preview panel once
              uploaded.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">3. Choose Your Style</h4>
            <p className="text-sm text-muted-foreground">
              Select from five unique plushie styles: Classic Plushie, Kawaii,
              Realistic Plush, Cartoon, or Chibi. Each style gives a different
              artistic interpretation.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">4. Adjust Settings (Optional)</h4>
            <p className="text-sm text-muted-foreground">
              Fine-tune your output by selecting the quality level and output
              size. Higher settings produce more detailed results but use more
              credits.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">5. Generate & Download</h4>
            <p className="text-sm text-muted-foreground">
              Click the Generate button and watch the magic happen! Once
              complete, you can download your plushie, save it to your gallery,
              or create another.
            </p>
          </div>
        </div>
      </DocSection>

      <DocSection title="Next Steps">
        <p className="text-muted-foreground mb-6">
          Now that you&apos;ve created your first plushie, explore more of what
          Plushify has to offer:
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/how-to-use"
            className="group flex flex-col p-4 border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors"
          >
            <h4 className="font-medium mb-1 group-hover:text-primary">
              How to Use
            </h4>
            <p className="text-sm text-muted-foreground">
              Detailed guides on all features and best practices.
            </p>
            <ArrowRight className="h-4 w-4 mt-2 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>

          <Link
            href="/docs/faq"
            className="group flex flex-col p-4 border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors"
          >
            <h4 className="font-medium mb-1 group-hover:text-primary">FAQ</h4>
            <p className="text-sm text-muted-foreground">
              Answers to common questions about Plushify.
            </p>
            <ArrowRight className="h-4 w-4 mt-2 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>

          <Link
            href="/pricing"
            className="group flex flex-col p-4 border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors"
          >
            <h4 className="font-medium mb-1 group-hover:text-primary">
              Pricing Plans
            </h4>
            <p className="text-sm text-muted-foreground">
              Compare plans and find the right one for you.
            </p>
            <ArrowRight className="h-4 w-4 mt-2 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>

          <Link
            href="/gallery"
            className="group flex flex-col p-4 border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors"
          >
            <h4 className="font-medium mb-1 group-hover:text-primary">
              Your Gallery
            </h4>
            <p className="text-sm text-muted-foreground">
              View and manage all your plushie creations.
            </p>
            <ArrowRight className="h-4 w-4 mt-2 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </div>
      </DocSection>

      {/* CTA */}
      <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
        <h3 className="text-xl font-semibold mb-2">Ready to Create?</h3>
        <p className="text-muted-foreground mb-4">
          Start transforming your photos into adorable plushies right now.
        </p>
        <Button asChild>
          <Link href="/dashboard">
            Go to Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </DocContent>
  );
}
