"use client";

import { useState } from "react";
import {
  Download,
  Image as ImageIcon,
  RefreshCw,
  Share2,
  Check,
  Coins,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ResultsDisplayProps {
  onDownload: () => void;
  onDownloadHD: () => void;
  onSaveToGallery: () => void;
  onGenerateAnother: () => void;
  onShare: () => void;
  hdCreditCost?: number;
  isSaved?: boolean;
  className?: string;
}

export function ResultsDisplay({
  onDownload,
  onDownloadHD,
  onSaveToGallery,
  onGenerateAnother,
  onShare,
  hdCreditCost = 1,
  isSaved = false,
  className,
}: ResultsDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    onShare();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2 p-4 rounded-xl border bg-card",
        className
      )}
    >
      <TooltipProvider>
        {/* Download Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={onDownload} variant="default">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </TooltipTrigger>
          <TooltipContent>Download standard resolution</TooltipContent>
        </Tooltip>

        {/* Download HD Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={onDownloadHD} variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download HD
              <span className="ml-2 flex items-center text-xs text-muted-foreground">
                <Coins className="h-3 w-3 mr-0.5" />
                {hdCreditCost}
              </span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Download high resolution ({hdCreditCost} credit)
          </TooltipContent>
        </Tooltip>

        {/* Save to Gallery Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={onSaveToGallery}
              variant="outline"
              disabled={isSaved}
            >
              {isSaved ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Saved
                </>
              ) : (
                <>
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Save to Gallery
                </>
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {isSaved ? "Already saved to gallery" : "Save to your gallery"}
          </TooltipContent>
        </Tooltip>

        {/* Generate Another Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={onGenerateAnother} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Generate Another
            </Button>
          </TooltipTrigger>
          <TooltipContent>Start a new generation</TooltipContent>
        </Tooltip>

        {/* Share Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={handleShare} variant="ghost" size="icon">
              {copied ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <Share2 className="h-4 w-4" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {copied ? "Link copied!" : "Copy share link"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
