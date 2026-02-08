"use client";

import * as React from "react";
import { Lock } from "lucide-react";
import { toast } from "sonner";
import { generatePlushie } from "@/actions/generate-plushie";
import { UserProfile } from "@/components/auth/user-profile";
import { GenerationSettings } from "@/components/dashboard/generation-settings";
import { PreviewPanel } from "@/components/dashboard/preview-panel";
import { ResultsDisplay } from "@/components/dashboard/results-display";
import { StyleOptions } from "@/components/dashboard/style-options";
import { UploadPanel } from "@/components/dashboard/upload-panel";
import type { GenerationStatus } from "@/components/generation-progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useSession } from "@/lib/auth-client";
import { useSubscription } from "@/lib/hooks/use-subscription";

export default function DashboardPage() {
  const { data: session, isPending } = useSession();
  const { refetch } = useSubscription();
  const isAuthenticated = !!session;
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // State for the generation flow
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = React.useState("classic");
  const [quality, setQuality] = React.useState("standard");
  const [backgroundRemoval, setBackgroundRemoval] = React.useState(false);
  const [generationStatus, setGenerationStatus] =
    React.useState<GenerationStatus>("idle");
  const [generationProgress, setGenerationProgress] = React.useState(0);
  const [generatedImageUrl, setGeneratedImageUrl] = React.useState<string | null>(
    null
  );
  const [isSavedToGallery, setIsSavedToGallery] = React.useState(false);

  // Clean up Object URLs on unmount
  React.useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle image selection
  const handleImageSelect = (file: File) => {
    // Revoke previous URL to prevent memory leak
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    // Reset generation state
    setGenerationStatus("idle");
    setGenerationProgress(0);
    setGeneratedImageUrl(null);
    setIsSavedToGallery(false);
  };

  // Handle image clear
  const handleImageClear = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedImage(null);
    setPreviewUrl(null);
    setGenerationStatus("idle");
    setGenerationProgress(0);
    setGeneratedImageUrl(null);
    setIsSavedToGallery(false);
  };

  // Real generation via server action
  const handleGenerate = async () => {
    if (!selectedImage) return;

    setGenerationStatus("uploading");
    setGenerationProgress(0);
    setIsSavedToGallery(false);

    // Build FormData
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("styleId", selectedStyle);
    formData.append("qualityId", quality);

    // Show progress states
    setGenerationProgress(20);
    setGenerationStatus("analyzing");

    // Simulate progress while waiting for server action
    const progressTimer = setInterval(() => {
      setGenerationProgress((prev) => {
        if (prev >= 80) {
          clearInterval(progressTimer);
          return 80;
        }
        return prev + 5;
      });
    }, 1000);

    setGenerationStatus("generating");

    try {
      const result = await generatePlushie(formData);
      clearInterval(progressTimer);

      if (result.success) {
        setGenerationProgress(100);
        setGenerationStatus("complete");
        setGeneratedImageUrl(result.generatedUrl);
        setIsSavedToGallery(true); // Server action auto-saves to DB
        toast.success("Plushie generated successfully!");
        await refetch(); // Update credit display
      } else {
        setGenerationStatus("error");
        setGenerationProgress(0);

        switch (result.error) {
          case "INSUFFICIENT_CREDITS":
            toast.error(result.message, {
              action: {
                label: "Buy Credits",
                onClick: () => window.location.assign("/pricing"),
              },
            });
            break;
          case "UNAUTHORIZED":
            toast.error("Please sign in to generate images.");
            break;
          case "INVALID_INPUT":
            toast.error(result.message);
            break;
          case "GENERATION_FAILED":
            toast.error(result.message);
            break;
        }
      }
    } catch {
      clearInterval(progressTimer);
      setGenerationStatus("error");
      setGenerationProgress(0);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  // Handle generate another
  const handleGenerateAnother = () => {
    handleImageClear();
  };

  const handleDownload = async () => {
    if (!generatedImageUrl) return;
    try {
      const response = await fetch(generatedImageUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "plushie.jpg";
      link.click();
      URL.revokeObjectURL(blobUrl);
    } catch {
      // Fallback: open in new tab
      window.open(generatedImageUrl, "_blank");
    }
  };

  const handleSaveToGallery = () => {
    // Already saved by server action
    setIsSavedToGallery(true);
  };

  const handleShare = () => {
    if (generatedImageUrl) {
      navigator.clipboard.writeText(generatedImageUrl);
    }
  };

  // Auth loading state - use isMounted to avoid hydration mismatch
  if (!isMounted || isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  // Not authenticated state
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <Lock className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-2xl font-bold mb-2">Sign In Required</h1>
            <p className="text-muted-foreground mb-6">
              You need to sign in to access the dashboard
            </p>
          </div>
          <UserProfile />
        </div>
      </div>
    );
  }

  const isGenerating =
    generationStatus !== "idle" &&
    generationStatus !== "complete" &&
    generationStatus !== "error";
  const isComplete = generationStatus === "complete";
  const canGenerate = !!selectedImage && !isGenerating;

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
      {/* Left Sidebar */}
      <aside className="w-full lg:w-80 xl:w-96 border-b lg:border-b-0 lg:border-r border-border bg-card/50">
        <ScrollArea className="h-full">
          <div className="p-4 lg:p-6 space-y-6">
            {/* Page Title */}
            <div>
              <h1 className="text-2xl font-bold text-gradient">Create Plushie</h1>
              <p className="text-sm text-muted-foreground">
                Transform your photos into adorable plushies
              </p>
            </div>

            {/* Upload Panel */}
            <UploadPanel
              onImageSelect={handleImageSelect}
              onImageClear={handleImageClear}
              selectedImage={selectedImage}
              previewUrl={previewUrl}
              disabled={isGenerating}
            />

            <Separator />

            {/* Style Options */}
            <StyleOptions
              selectedStyle={selectedStyle}
              onStyleSelect={setSelectedStyle}
              disabled={isGenerating}
            />

            <Separator />

            {/* Generation Settings */}
            <GenerationSettings
              quality={quality}
              onQualityChange={setQuality}
              backgroundRemoval={backgroundRemoval}
              onBackgroundRemovalChange={setBackgroundRemoval}
              onGenerate={handleGenerate}
              disabled={isGenerating}
              isGenerating={isGenerating}
              canGenerate={canGenerate}
            />
          </div>
        </ScrollArea>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        <div className="flex-1 p-4 lg:p-8">
          <PreviewPanel
            uploadedImageUrl={previewUrl}
            generatedImageUrl={generatedImageUrl}
            generationStatus={generationStatus}
            generationProgress={generationProgress}
          />
        </div>

        {/* Results Actions - Only show when complete */}
        {isComplete && (
          <div className="p-4 lg:p-6 border-t border-border">
            <ResultsDisplay
              onDownload={handleDownload}
              onSaveToGallery={handleSaveToGallery}
              onGenerateAnother={handleGenerateAnother}
              onShare={handleShare}
              isSaved={isSavedToGallery}
            />
          </div>
        )}
      </main>
    </div>
  );
}
