import { Skeleton } from "@/components/ui/skeleton";

export default function LegalLoading() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Back navigation */}
        <Skeleton className="h-9 w-32 mb-8" />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="hidden xl:block w-56 flex-shrink-0">
            <Skeleton className="h-4 w-32 mb-4" />
            <div className="space-y-2">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <Skeleton key={i} className="h-5 w-full" />
              ))}
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 max-w-4xl">
            <article className="space-y-8">
              {/* Title */}
              <div>
                <Skeleton className="h-10 w-80 mb-2" />
                <Skeleton className="h-5 w-48" />
              </div>

              {/* Content sections */}
              {[1, 2, 3, 4, 5].map((section) => (
                <div key={section} className="space-y-4">
                  <Skeleton className="h-7 w-64" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                  {section % 2 === 0 && (
                    <div className="space-y-2 pl-6">
                      {[1, 2, 3].map((li) => (
                        <Skeleton key={li} className="h-4 w-full" />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
