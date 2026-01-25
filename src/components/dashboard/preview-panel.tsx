"use client";

import { ImageIcon } from "lucide-react";

import { GenerationProgress, type GenerationStatus } from "@/components/generation-progress";
import { ImageComparisonSlider } from "@/components/ui/image-comparison-slider";
import { cn } from "@/lib/utils";

interface PreviewPanelProps {
  uploadedImageUrl?: string | null;
  generatedImageUrl?: string | null;
  generationStatus: GenerationStatus;
  generationProgress: number;
  className?: string;
}

export function PreviewPanel({
  uploadedImageUrl,
  generatedImageUrl,
  generationStatus,
  generationProgress,
  className,
}: PreviewPanelProps) {
  const isGenerating =
    generationStatus !== "idle" &&
    generationStatus !== "complete" &&
    generationStatus !== "error";
  const isComplete = generationStatus === "complete";
  const hasUploadedImage = !!uploadedImageUrl;

  return (
    <div className={cn("flex flex-col h-full", className)}>
      <h3 className="font-semibold mb-4">Preview</h3>

      <div className="flex-1 flex items-center justify-center">
        {/* Complete State - Show Comparison Slider */}
        {isComplete && uploadedImageUrl && generatedImageUrl && (
          <div className="w-full max-w-lg">
            <ImageComparisonSlider
              beforeImage={uploadedImageUrl}
              afterImage={generatedImageUrl}
              beforeLabel="Original"
              afterLabel="Plushified"
            />
          </div>
        )}

        {/* Generating State - Show Progress */}
        {isGenerating && (
          <div className="w-full max-w-md">
            <GenerationProgress
              status={generationStatus}
              progress={generationProgress}
            />
          </div>
        )}

        {/* Idle State with Image - Show uploaded image */}
        {!isGenerating && !isComplete && hasUploadedImage && (
          <div className="w-full max-w-lg">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-plushify">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={uploadedImageUrl}
                alt="Uploaded preview"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="text-center text-white">
                  <p className="text-lg font-medium">Ready to transform</p>
                  <p className="text-sm opacity-80">
                    Click &quot;Generate Plushie&quot; to start
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State - No image uploaded */}
        {!isGenerating && !isComplete && !hasUploadedImage && (
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <ImageIcon className="h-12 w-12 text-muted-foreground" />
            </div>
            <h4 className="text-lg font-medium mb-2">No image uploaded</h4>
            <p className="text-muted-foreground max-w-sm">
              Upload a photo to see the preview here. Your plushified image will
              appear once generation is complete.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
