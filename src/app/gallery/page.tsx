"use client";

import * as React from "react";
import Link from "next/link";
import { Loader2, Lock, SlidersHorizontal, ArrowUpDown, Plus } from "lucide-react";
import { toast } from "sonner";
import { UserProfile } from "@/components/auth/user-profile";
import { ComparisonModal } from "@/components/gallery/comparison-modal";
import { ImageGrid } from "@/components/gallery/image-grid";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/lib/hooks/use-auth";
import type { GalleryImage } from "@/lib/types";
import { qualityToSize } from "@/lib/types";

export default function GalleryPage() {
  const { isAuthenticated, isPending } = useAuth();

  // State for gallery
  const [images, setImages] = React.useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [fetchError, setFetchError] = React.useState<string | null>(null);
  const [selectedImage, setSelectedImage] = React.useState<GalleryImage | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [sortBy, setSortBy] = React.useState("newest");
  const [filterStyle, setFilterStyle] = React.useState("all");

  // Fetch gallery data from API
  const fetchGallery = React.useCallback(async () => {
    try {
      setIsLoading(true);
      setFetchError(null);
      const response = await fetch("/api/gallery");
      if (!response.ok) {
        throw new Error("Failed to fetch gallery");
      }
      const data = await response.json();
      const mapped: GalleryImage[] = data.generations.map(
        (g: {
          id: string;
          originalUrl: string;
          generatedUrl: string;
          style: string;
          quality: string;
          createdAt: string;
        }) => ({
          id: g.id,
          originalUrl: g.originalUrl,
          plushifiedUrl: g.generatedUrl,
          style: g.style,
          quality: g.quality as GalleryImage["quality"],
          createdAt: new Date(g.createdAt),
          size: qualityToSize(g.quality),
        })
      );
      setImages(mapped);
    } catch {
      setFetchError("Failed to load gallery. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    if (isAuthenticated) {
      fetchGallery();
    }
  }, [isAuthenticated, fetchGallery]);

  // Get unique styles from images
  const styles = React.useMemo(() => {
    const uniqueStyles = new Set(images.map((img) => img.style));
    return Array.from(uniqueStyles);
  }, [images]);

  // Filter and sort images
  const filteredImages = React.useMemo(() => {
    let result = [...images];

    // Filter by style
    if (filterStyle !== "all") {
      result = result.filter((img) => img.style === filterStyle);
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.createdAt.getTime() - a.createdAt.getTime();
        case "oldest":
          return a.createdAt.getTime() - b.createdAt.getTime();
        case "style":
          return a.style.localeCompare(b.style);
        default:
          return 0;
      }
    });

    return result;
  }, [images, sortBy, filterStyle]);

  // Handlers
  const handleView = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const downloadImage = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(url, "_blank");
    }
  };

  const handleDownload = (image: GalleryImage) => {
    downloadImage(image.plushifiedUrl, `plushie-${image.id}.jpg`);
  };

  const handleDownloadOriginal = (image: GalleryImage) => {
    downloadImage(image.originalUrl, `original-${image.id}.jpg`);
  };

  const handleDelete = async (image: GalleryImage) => {
    try {
      const response = await fetch(`/api/gallery/${image.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete");
      }
      setImages((prev) => prev.filter((img) => img.id !== image.id));
      if (selectedImage?.id === image.id) {
        setSelectedImage(null);
        setIsModalOpen(false);
      }
      toast.success("Image deleted successfully.");
    } catch {
      toast.error("Failed to delete image. Please try again.");
    }
  };

  // Auth loading state
  if (isPending) {
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
              You need to sign in to access your gallery
            </p>
          </div>
          <UserProfile />
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground mb-4">{fetchError}</p>
        <Button onClick={fetchGallery}>Retry</Button>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="py-8 md:py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gradient">
                Your Gallery
              </h1>
              <p className="text-muted-foreground mt-1">
                {images.length} {images.length === 1 ? "plushie" : "plushies"}{" "}
                created
              </p>
            </div>

            <Button asChild>
              <Link href="/dashboard">
                <Plus className="h-4 w-4 mr-2" />
                Create New
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      {images.length > 0 && (
        <section className="py-4 border-b border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-4">
              {/* Sort */}
              <div className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest first</SelectItem>
                    <SelectItem value="oldest">Oldest first</SelectItem>
                    <SelectItem value="style">By style</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Filter by Style */}
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                <Select value={filterStyle} onValueChange={setFilterStyle}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Filter by style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All styles</SelectItem>
                    {styles.map((style) => (
                      <SelectItem key={style} value={style}>
                        {style}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Results count */}
              <span className="text-sm text-muted-foreground ml-auto">
                Showing {filteredImages.length} of {images.length}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Grid */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <ImageGrid
            images={filteredImages}
            onView={handleView}
            onDownload={handleDownload}
            onDelete={handleDelete}
          />
        </div>
      </section>

      {/* Comparison Modal */}
      <ComparisonModal
        image={selectedImage}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onDownloadOriginal={handleDownloadOriginal}
        onDownloadPlushified={handleDownload}
        onDelete={handleDelete}
      />
    </main>
  );
}
