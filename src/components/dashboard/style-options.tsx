"use client";

import Image from "next/image";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { PLUSHIE_STYLES, type PlushieStyle } from "@/lib/constants";

interface StyleOptionsProps {
  selectedStyle: string;
  onStyleSelect: (styleId: string) => void;
  disabled?: boolean;
  className?: string;
}

export function StyleOptions({
  selectedStyle,
  onStyleSelect,
  disabled = false,
  className,
}: StyleOptionsProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <h3 className="font-semibold">Choose Style</h3>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
        {PLUSHIE_STYLES.map((style) => (
          <StyleCard
            key={style.id}
            style={style}
            isSelected={selectedStyle === style.id}
            onSelect={() => onStyleSelect(style.id)}
            disabled={disabled || !style.available}
          />
        ))}
      </div>
    </div>
  );
}

interface StyleCardProps {
  style: PlushieStyle;
  isSelected: boolean;
  onSelect: () => void;
  disabled?: boolean;
}

function StyleCard({ style, isSelected, onSelect, disabled }: StyleCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={disabled}
      className={cn(
        "relative flex items-center gap-3 p-2 rounded-lg border transition-all text-left",
        "hover:border-primary/50 hover:bg-primary/5",
        isSelected
          ? "border-primary bg-primary/10 ring-1 ring-primary"
          : "border-border bg-card",
        disabled && "opacity-50 cursor-not-allowed hover:border-border hover:bg-card"
      )}
    >
      {/* Preview Thumbnail */}
      <div className="relative w-12 h-12 rounded-md overflow-hidden shrink-0">
        <Image
          src={style.preview}
          alt={style.name}
          fill
          className="object-cover"
          sizes="48px"
        />
      </div>

      {/* Style Info */}
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm truncate">{style.name}</p>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {style.description}
        </p>
      </div>

      {/* Selected Checkmark */}
      {isSelected && (
        <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
          <Check className="h-3 w-3 text-primary-foreground" />
        </div>
      )}
    </button>
  );
}
