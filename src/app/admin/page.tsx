import { requireAdmin } from "@/lib/session";

/**
 * Admin Dashboard - Placeholder
 *
 * This page is protected and only accessible to users with platformRole === "admin".
 * Non-admin users will be redirected to /dashboard.
 * Unauthenticated users will be redirected to /.
 */
export default async function AdminPage() {
  // This will redirect if the user is not an admin
  await requireAdmin();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Platform administration (placeholder)
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="border rounded-lg p-8 bg-card">
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Admin dashboard placeholder
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              This page will be populated with admin features in a future step.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
