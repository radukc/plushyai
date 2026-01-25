"use client";

import Link from "next/link";
import { ImageIcon, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  className?: string;
}

export function EmptyState({ className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 px-4 text-center",
        className
      )}
    >
      {/* Illustration */}
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
          <ImageIcon className="h-16 w-16 text-muted-foreground" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Message */}
      <h3 className="text-xl font-semibold mb-2">No plushies yet</h3>
      <p className="text-muted-foreground max-w-sm mb-6">
        Your gallery is empty. Create your first adorable plushie and it will
        appear here!
      </p>

      {/* CTA Button */}
      <Button asChild size="lg">
        <Link href="/dashboard">
          <Sparkles className="h-4 w-4 mr-2" />
          Create Your First Plushie
        </Link>
      </Button>
    </div>
  );
}
