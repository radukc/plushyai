import { UserManagement } from "@/components/admin/user-management";
import { requireAdmin } from "@/lib/session";

/**
 * Admin Dashboard
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
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Manage users and platform settings
          </p>
        </div>

        {/* User Management Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">User Management</h2>
          <UserManagement />
        </div>
      </div>
    </main>
  );
}
