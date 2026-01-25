import { Skeleton } from "@/components/ui/skeleton";

export default function GalleryLoading() {
  return (
    <main className="min-h-screen">
      {/* Page Header Skeleton */}
      <section className="py-8 md:py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <Skeleton className="h-10 w-48 mb-2" />
              <Skeleton className="h-5 w-32" />
            </div>
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </section>

      {/* Filters Skeleton */}
      <section className="py-4 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <Skeleton className="h-10 w-[160px]" />
            <Skeleton className="h-10 w-[180px]" />
            <Skeleton className="h-5 w-24 ml-auto" />
          </div>
        </div>
      </section>

      {/* Gallery Grid Skeleton */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border">
                <Skeleton className="aspect-square w-full" />
                <div className="p-3 border-t border-border">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
