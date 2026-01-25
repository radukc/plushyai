"use client";

import * as React from "react";
import { Loader2, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

export type GenerationStatus =
  | "idle"
  | "uploading"
  | "analyzing"
  | "generating"
  | "finalizing"
  | "complete"
  | "error";

interface GenerationProgressProps {
  progress: number;
  status: GenerationStatus;
  className?: string;
}

const STATUS_CONFIG: Record<
  GenerationStatus,
  { message: string; icon: React.ReactNode }
> = {
  idle: {
    message: "Ready to generate",
    icon: <Sparkles className="h-5 w-5" />,
  },
  uploading: {
    message: "Uploading your image...",
    icon: <Loader2 className="h-5 w-5 animate-spin" />,
  },
  analyzing: {
    message: "Analyzing features...",
    icon: <Loader2 className="h-5 w-5 animate-spin" />,
  },
  generating: {
    message: "Creating your plushie...",
    icon: <Loader2 className="h-5 w-5 animate-spin" />,
  },
  finalizing: {
    message: "Adding final touches...",
    icon: <Loader2 className="h-5 w-5 animate-spin" />,
  },
  complete: {
    message: "Your plushie is ready!",
    icon: <Check className="h-5 w-5" />,
  },
  error: {
    message: "Something went wrong",
    icon: <Sparkles className="h-5 w-5" />,
  },
};

export function GenerationProgress({
  progress,
  status,
  className,
}: GenerationProgressProps) {
  const config = STATUS_CONFIG[status];
  const isActive = status !== "idle" && status !== "error";
  const isComplete = status === "complete";

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-6",
        isComplete && "border-primary/50 bg-primary/5",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
            isComplete
              ? "bg-primary text-primary-foreground"
              : isActive
                ? "bg-primary/20 text-primary"
                : "bg-muted text-muted-foreground"
          )}
        >
          {config.icon}
        </div>
        <div className="flex-1">
          <p className="font-medium">{config.message}</p>
          {isActive && !isComplete && (
            <p className="text-sm text-muted-foreground">{progress}% complete</p>
          )}
        </div>
      </div>

      <Progress
        value={progress}
        className={cn(
          "h-2 transition-all",
          isComplete && "[&>div]:bg-primary"
        )}
      />

      {isActive && !isComplete && (
        <div className="mt-4 flex justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-bounce-soft"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      )}

      {isComplete && (
        <p className="text-center text-sm text-muted-foreground mt-4">
          Drag the slider to compare before and after
        </p>
      )}
    </div>
  );
}
