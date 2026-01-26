"use client";

import { Sparkles, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { GENERATION_QUALITY_OPTIONS, CREDIT_COSTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface GenerationSettingsProps {
  quality: string;
  onQualityChange: (quality: string) => void;
  backgroundRemoval: boolean;
  onBackgroundRemovalChange: (enabled: boolean) => void;
  onGenerate: () => void;
  disabled?: boolean;
  isGenerating?: boolean;
  canGenerate?: boolean;
  className?: string;
}

export function GenerationSettings({
  quality,
  onQualityChange,
  backgroundRemoval,
  onBackgroundRemovalChange,
  onGenerate,
  disabled = false,
  isGenerating = false,
  canGenerate = false,
  className,
}: GenerationSettingsProps) {
  const selectedQuality = GENERATION_QUALITY_OPTIONS.find(
    (q) => q.id === quality
  );

  // Calculate credit cost
  const baseCost = CREDIT_COSTS.standardGeneration;
  const qualityMultiplier = selectedQuality?.creditMultiplier ?? 1;
  const totalCost = baseCost * qualityMultiplier;

  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="font-semibold">Settings</h3>

      {/* Quality Selector */}
      <div className="space-y-2">
        <Label htmlFor="quality">Output Quality</Label>
        <Select
          value={quality}
          onValueChange={onQualityChange}
          disabled={disabled || isGenerating}
        >
          <SelectTrigger id="quality">
            <SelectValue placeholder="Select quality" />
          </SelectTrigger>
          <SelectContent>
            {GENERATION_QUALITY_OPTIONS.map((option) => (
              <SelectItem key={option.id} value={option.id}>
                <div className="flex items-center gap-2">
                  <span>{option.name}</span>
                  <span className="text-xs text-muted-foreground">
                    ({option.resolution})
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {selectedQuality && (
          <p className="text-xs text-muted-foreground">
            {selectedQuality.description}
          </p>
        )}
      </div>

      {/* Background Removal Toggle */}
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="bg-removal">Background Removal</Label>
          <p className="text-xs text-muted-foreground">
            Remove background automatically
          </p>
        </div>
        <Switch
          id="bg-removal"
          checked={backgroundRemoval}
          onCheckedChange={onBackgroundRemovalChange}
          disabled={disabled || isGenerating}
        />
      </div>

      {/* Credit Cost Display */}
      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
        <div className="flex items-center gap-2">
          <Coins className="h-4 w-4 text-primary" />
          <span className="text-sm">Credit Cost</span>
        </div>
        <span className="font-semibold">
          {totalCost} {totalCost === 1 ? "credit" : "credits"}
        </span>
      </div>

      {/* Generate Button */}
      <Button
        onClick={onGenerate}
        disabled={disabled || isGenerating || !canGenerate}
        className="w-full"
        size="lg"
      >
        {isGenerating ? (
          <>
            <Sparkles className="h-4 w-4 mr-2 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Sparkles className="h-4 w-4 mr-2" />
            Generate Plushie
          </>
        )}
      </Button>

      {!canGenerate && !isGenerating && (
        <p className="text-xs text-center text-muted-foreground">
          Upload an image to start generating
        </p>
      )}
    </div>
  );
}
