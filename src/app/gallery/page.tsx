"use client";

import * as React from "react";
import Link from "next/link";
import { Lock, SlidersHorizontal, ArrowUpDown, Plus } from "lucide-react";
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
import { mockGalleryImages, type GalleryImage } from "@/lib/mock-data";

export default function GalleryPage() {
  const { isAuthenticated, isPending } = useAuth();

  // State for gallery
  const [images, setImages] = React.useState<GalleryImage[]>(mockGalleryImages);
  const [selectedImage, setSelectedImage] = React.useState<GalleryImage | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [sortBy, setSortBy] = React.useState("newest");
  const [filterStyle, setFilterStyle] = React.useState("all");

  // Get unique styles from images
  const styles = React.useMemo(() => {
    const uniqueStyles = new Set(mockGalleryImages.map((img) => img.style));
    return Array.from(uniqueStyles);
  }, []);

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

  const handleDownload = (image: GalleryImage) => {
    window.open(image.plushifiedUrl, "_blank");
  };

  const handleDownloadOriginal = (image: GalleryImage) => {
    window.open(image.originalUrl, "_blank");
  };

  const handleDelete = (image: GalleryImage) => {
    setImages((prev) => prev.filter((img) => img.id !== image.id));
    if (selectedImage?.id === image.id) {
      setSelectedImage(null);
      setIsModalOpen(false);
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
