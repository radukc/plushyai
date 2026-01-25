"use client";

import { CreditBalance } from "@/components/credit-balance";
import { ImageUploadDropzone } from "@/components/image-upload-dropzone";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface UploadPanelProps {
  onImageSelect: (file: File) => void;
  onImageClear?: (() => void) | undefined;
  selectedImage?: File | null | undefined;
  previewUrl?: string | null | undefined;
  disabled?: boolean;
  className?: string;
}

export function UploadPanel({
  onImageSelect,
  onImageClear,
  selectedImage,
  previewUrl,
  disabled = false,
  className,
}: UploadPanelProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {/* Credit Balance */}
      <CreditBalance variant="full" />

      <Separator />

      {/* Upload Section */}
      <div>
        <h3 className="font-semibold mb-3">Upload Photo</h3>
        <ImageUploadDropzone
          onImageSelect={onImageSelect}
          onImageClear={onImageClear}
          selectedImage={selectedImage}
          previewUrl={previewUrl}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
