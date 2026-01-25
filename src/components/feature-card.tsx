"use client";

import {
  Sparkles,
  Palette,
  ImageUp,
  Zap,
  Shield,
  MousePointerClick,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  Sparkles,
  Palette,
  ImageUp,
  Zap,
  Shield,
  MousePointerClick,
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  const IconComponent = ICON_MAP[icon] || Sparkles;

  return (
    <div
      className={cn(
        "group rounded-2xl border border-border bg-card p-6 transition-all duration-300",
        "hover:shadow-plushify hover:-translate-y-1 hover:border-primary/50",
        className
      )}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20">
        <IconComponent className="h-6 w-6 text-primary" />
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
