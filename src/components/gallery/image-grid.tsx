"use client";

import type { GalleryImage } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { EmptyState } from "./empty-state";
import { ImageCard } from "./image-card";

interface ImageGridProps {
  images: GalleryImage[];
  onView: (image: GalleryImage) => void;
  onDownload: (image: GalleryImage) => void;
  onDelete: (image: GalleryImage) => void;
  className?: string;
}

export function ImageGrid({
  images,
  onView,
  onDownload,
  onDelete,
  className,
}: ImageGridProps) {
  if (images.length === 0) {
    return <EmptyState />;
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6",
        className
      )}
    >
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          onView={onView}
          onDownload={onDownload}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
