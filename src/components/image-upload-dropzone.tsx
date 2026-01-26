"use client";

import * as React from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ImageUploadDropzoneProps {
  onImageSelect: (file: File) => void;
  onImageClear?: (() => void) | undefined;
  selectedImage?: File | null | undefined;
  previewUrl?: string | null | undefined;
  className?: string;
  disabled?: boolean;
}

export function ImageUploadDropzone({
  onImageSelect,
  onImageClear,
  selectedImage,
  previewUrl,
  className,
  disabled = false,
}: ImageUploadDropzoneProps) {
  const [isDragOver, setIsDragOver] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const validateFile = (file: File): boolean => {
    setError(null);

    if (!APP_CONFIG.supportedFormats.includes(file.type)) {
      setError("Please upload a JPG, PNG, or WebP image");
      return false;
    }

    if (file.size > APP_CONFIG.maxFileSize) {
      setError("File size must be less than 10MB");
      return false;
    }

    return true;
  };

  const handleFile = (file: File) => {
    if (validateFile(file)) {
      onImageSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    if (disabled) return;

    const files = e.dataTransfer.files;
    const file = files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleClick = () => {
    if (!disabled) {
      inputRef.current?.click();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const file = files?.[0];
    if (file) {
      handleFile(file);
    }
    // Reset input value to allow selecting the same file again
    e.target.value = "";
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setError(null);
    onImageClear?.();
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  if (previewUrl && selectedImage) {
    return (
      <div className={cn("relative", className)}>
        <div className="relative rounded-xl overflow-hidden border border-border bg-card">
          <img
            src={previewUrl}
            alt="Selected image preview"
            className="w-full aspect-square object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white text-sm font-medium truncate">
              {selectedImage.name}
            </p>
            <p className="text-white/70 text-xs">
              {formatFileSize(selectedImage.size)}
            </p>
          </div>
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8"
            onClick={handleClear}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "relative border-2 border-dashed rounded-xl p-8 transition-all cursor-pointer",
          "flex flex-col items-center justify-center text-center",
          "hover:border-primary hover:bg-primary/5",
          isDragOver && "border-primary bg-primary/10 scale-[1.02]",
          disabled && "opacity-50 cursor-not-allowed",
          error && "border-destructive",
          !isDragOver && !error && "border-muted-foreground/25"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept={APP_CONFIG.supportedFormats.join(",")}
          onChange={handleInputChange}
          className="hidden"
          disabled={disabled}
        />

        <div
          className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors",
            isDragOver ? "bg-primary/20" : "bg-muted"
          )}
        >
          {isDragOver ? (
            <ImageIcon className="h-8 w-8 text-primary" />
          ) : (
            <Upload className="h-8 w-8 text-muted-foreground" />
          )}
        </div>

        <p className="font-medium mb-1">
          {isDragOver ? "Drop your image here" : "Drag & drop your image"}
        </p>
        <p className="text-sm text-muted-foreground mb-3">
          or click to browse
        </p>
        <p className="text-xs text-muted-foreground">
          JPG, PNG, or WebP up to 10MB
        </p>
      </div>

      {error && (
        <p className="text-destructive text-sm mt-2 text-center">{error}</p>
      )}
    </div>
  );
}
