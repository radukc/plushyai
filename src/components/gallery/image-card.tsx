"use client";

import Image from "next/image";
import { Eye, Download, Trash2 } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate, type GalleryImage } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface ImageCardProps {
  image: GalleryImage;
  onView: (image: GalleryImage) => void;
  onDownload: (image: GalleryImage) => void;
  onDelete: (image: GalleryImage) => void;
  className?: string;
}

export function ImageCard({
  image,
  onView,
  onDownload,
  onDelete,
  className,
}: ImageCardProps) {
  const handleView = (e: React.MouseEvent) => {
    e.stopPropagation();
    onView(image);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDownload(image);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(image);
  };

  return (
    <div
      className={cn(
        "group relative rounded-xl overflow-hidden border border-border bg-card cursor-pointer transition-all duration-300",
        "hover:shadow-plushify hover:-translate-y-1 hover:border-primary/50",
        className
      )}
      onClick={handleView}
    >
      <AspectRatio ratio={1}>
        <Image
          src={image.plushifiedUrl}
          alt={`Plushified image - ${image.style}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <Badge variant="secondary" className="bg-black/50 text-white text-xs">
            {formatDate(image.createdAt)}
          </Badge>
        </div>
        <div className="absolute top-2 right-2">
          <Badge className="bg-primary/90 text-primary-foreground text-xs">
            {image.style}
          </Badge>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <Button
            variant="secondary"
            size="icon"
            className="h-10 w-10 rounded-full"
            onClick={handleView}
          >
            <Eye className="h-5 w-5" />
            <span className="sr-only">View</span>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-10 w-10 rounded-full"
            onClick={handleDownload}
          >
            <Download className="h-5 w-5" />
            <span className="sr-only">Download</span>
          </Button>
          <Button
            variant="destructive"
            size="icon"
            className="h-10 w-10 rounded-full"
            onClick={handleDelete}
          >
            <Trash2 className="h-5 w-5" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      </AspectRatio>

      {/* Bottom Info Bar */}
      <div className="p-3 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{image.size}</span>
          <Badge variant="outline" className="text-xs capitalize">
            {image.quality}
          </Badge>
        </div>
      </div>
    </div>
  );
}
