"use client";

import { Download, Trash2, Calendar, Palette, Image as ImageIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ImageComparisonSlider } from "@/components/ui/image-comparison-slider";
import { formatDate, type GalleryImage } from "@/lib/mock-data";

interface ComparisonModalProps {
  image: GalleryImage | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDownloadOriginal: (image: GalleryImage) => void;
  onDownloadPlushified: (image: GalleryImage) => void;
  onDelete: (image: GalleryImage) => void;
}

export function ComparisonModal({
  image,
  open,
  onOpenChange,
  onDownloadOriginal,
  onDownloadPlushified,
  onDelete,
}: ComparisonModalProps) {
  if (!image) return null;

  const handleDownloadOriginal = () => {
    onDownloadOriginal(image);
  };

  const handleDownloadPlushified = () => {
    onDownloadPlushified(image);
  };

  const handleDelete = () => {
    onDelete(image);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Compare Images</DialogTitle>
          <DialogDescription>
            Drag the slider to compare the original and plushified versions
          </DialogDescription>
        </DialogHeader>

        {/* Image Comparison Slider */}
        <div className="mt-4">
          <ImageComparisonSlider
            beforeImage={image.originalUrl}
            afterImage={image.plushifiedUrl}
            beforeLabel="Original"
            afterLabel="Plushified"
            className="w-full max-h-[60vh]"
          />
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(image.createdAt)}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Palette className="h-4 w-4" />
            <span>{image.style}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <ImageIcon className="h-4 w-4" />
            <span>{image.size}</span>
          </div>
          <Badge variant="outline" className="capitalize">
            {image.quality} quality
          </Badge>
        </div>

        <Separator className="my-4" />

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={handleDownloadOriginal}>
              <Download className="h-4 w-4 mr-2" />
              Download Original
            </Button>
            <Button onClick={handleDownloadPlushified}>
              <Download className="h-4 w-4 mr-2" />
              Download Plushified
            </Button>
          </div>
          <Button variant="destructive" onClick={handleDelete}>
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
