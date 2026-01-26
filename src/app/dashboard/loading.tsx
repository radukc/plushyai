import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
      {/* Left Sidebar */}
      <aside className="w-full lg:w-80 xl:w-96 border-b lg:border-b-0 lg:border-r border-border bg-card/50">
        <div className="p-4 lg:p-6 space-y-6">
          {/* Page Title */}
          <div>
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-4 w-56 mt-2" />
          </div>

          {/* Credit Balance */}
          <div className="flex items-center gap-3 p-3 border rounded-lg">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex-1">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-5 w-24 mt-1" />
            </div>
          </div>

          {/* Upload Dropzone */}
          <div className="border-2 border-dashed rounded-lg p-8">
            <div className="flex flex-col items-center gap-3">
              <Skeleton className="h-12 w-12 rounded-full" />
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>

          <Skeleton className="h-px w-full" />

          {/* Style Options */}
          <div className="space-y-3">
            <Skeleton className="h-5 w-28" />
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-3 p-2 border rounded-lg">
                  <Skeleton className="h-12 w-12 rounded-md" />
                  <div className="flex-1">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-32 mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Skeleton className="h-px w-full" />

          {/* Generation Settings */}
          <div className="space-y-4">
            <Skeleton className="h-5 w-20" />
            <div className="space-y-3">
              <div>
                <Skeleton className="h-4 w-16 mb-2" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-6 w-11 rounded-full" />
              </div>
            </div>
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        <div className="flex-1 p-4 lg:p-8">
          {/* Preview Panel */}
          <div className="h-full flex items-center justify-center border-2 border-dashed rounded-xl bg-muted/20">
            <div className="text-center space-y-4 p-8">
              <Skeleton className="h-16 w-16 mx-auto rounded-full" />
              <Skeleton className="h-6 w-48 mx-auto" />
              <Skeleton className="h-4 w-64 mx-auto" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
