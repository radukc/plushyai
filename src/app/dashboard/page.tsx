"use client";

import * as React from "react";
import { Lock } from "lucide-react";

import { UserProfile } from "@/components/auth/user-profile";
import { UploadPanel } from "@/components/dashboard/upload-panel";
import { StyleOptions } from "@/components/dashboard/style-options";
import { GenerationSettings } from "@/components/dashboard/generation-settings";
import { PreviewPanel } from "@/components/dashboard/preview-panel";
import { ResultsDisplay } from "@/components/dashboard/results-display";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSession } from "@/lib/auth-client";
import { useMockAuth } from "@/lib/mock-auth";
import { mockGalleryImages } from "@/lib/mock-data";
import type { GenerationStatus } from "@/components/generation-progress";

export default function DashboardPage() {
  const { data: session, isPending } = useSession();
  const { isAuthenticated: isMockAuthenticated } = useMockAuth();

  // Use mock auth for UI development
  const isAuthenticated = isMockAuthenticated || !!session;

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

  // Handle image selection
  const handleImageSelect = (file: File) => {
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

  // Simulate generation process
  const handleGenerate = () => {
    if (!selectedImage) return;

    setGenerationStatus("uploading");
    setGenerationProgress(0);
    setIsSavedToGallery(false);

    // Simulate upload phase
    setTimeout(() => {
      setGenerationProgress(20);
      setGenerationStatus("analyzing");

      // Simulate analyzing phase
      setTimeout(() => {
        setGenerationProgress(40);
        setGenerationStatus("generating");

        // Simulate generation phase with progress updates
        let progress = 40;
        const progressInterval = setInterval(() => {
          progress += 10;
          setGenerationProgress(progress);

          if (progress >= 80) {
            clearInterval(progressInterval);
            setGenerationStatus("finalizing");

            // Simulate finalizing phase
            setTimeout(() => {
              setGenerationProgress(100);
              setGenerationStatus("complete");
              // Use a mock generated image
              const mockResult = mockGalleryImages[0];
              if (mockResult) {
                setGeneratedImageUrl(mockResult.plushifiedUrl);
              }
            }, 1000);
          }
        }, 500);
      }, 1500);
    }, 1000);
  };

  // Handle generate another
  const handleGenerateAnother = () => {
    handleImageClear();
  };

  // Mock handlers
  const handleDownload = () => {
    if (generatedImageUrl) {
      window.open(generatedImageUrl, "_blank");
    }
  };

  const handleDownloadHD = () => {
    if (generatedImageUrl) {
      window.open(generatedImageUrl, "_blank");
    }
  };

  const handleSaveToGallery = () => {
    setIsSavedToGallery(true);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  // Auth loading state
  if (isPending && !isMockAuthenticated) {
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
              onDownloadHD={handleDownloadHD}
              onSaveToGallery={handleSaveToGallery}
              onGenerateAnother={handleGenerateAnother}
              onShare={handleShare}
              hdCreditCost={1}
              isSaved={isSavedToGallery}
            />
          </div>
        )}
      </main>
    </div>
  );
}
