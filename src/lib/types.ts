export interface GalleryImage {
  id: string;
  originalUrl: string;
  plushifiedUrl: string;
  style: string;
  createdAt: Date;
  quality: "standard" | "high" | "ultra";
  size: string;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

/** Map a quality tier to its display size string */
export function qualityToSize(quality: string): string {
  switch (quality) {
    case "ultra":
      return "2048x2048";
    case "high":
      return "1024x1024";
    default:
      return "512x512";
  }
}
