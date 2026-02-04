"use client";

import { useCallback, useEffect, useState } from "react";
import { Plus, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddUserDialog } from "./add-user-dialog";
import { CreditsDialog } from "./credits-dialog";
import { EditUserDialog } from "./edit-user-dialog";
import { ResetPasswordDialog } from "./reset-password-dialog";
import { UserTable, type UserWithSubscription } from "./user-table";

export function UserManagement() {
  const [users, setUsers] = useState<UserWithSubscription[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Dialog states
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
  const [creditsDialogOpen, setCreditsDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserWithSubscription | null>(
    null
  );

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data.users);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load users");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleAddUser = async (data: {
    email: string;
    password: string;
    name: string;
    isAdmin: boolean;
    emailVerified: boolean;
  }) => {
    const response = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to create user");
    }

    await fetchUsers();
  };

  const handleEditUser = async (
    userId: string,
    data: { name: string; platformRole: string; emailVerified: boolean }
  ) => {
    const response = await fetch(`/api/admin/users/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to update user");
    }

    await fetchUsers();
  };

  const handleResetPassword = async (userId: string, password: string) => {
    const response = await fetch(`/api/admin/users/${userId}/password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to reset password");
    }
  };

  const handleUpdateCredits = async (userId: string, credits: number) => {
    const response = await fetch(`/api/admin/users/${userId}/credits`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credits }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to update credits");
    }

    await fetchUsers();
  };

  const openEditDialog = (user: UserWithSubscription) => {
    setSelectedUser(user);
    setEditDialogOpen(true);
  };

  const openPasswordDialog = (user: UserWithSubscription) => {
    setSelectedUser(user);
    setPasswordDialogOpen(true);
  };

  const openCreditsDialog = (user: UserWithSubscription) => {
    setSelectedUser(user);
    setCreditsDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            {users.length} user{users.length !== 1 ? "s" : ""} total
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchUsers}
            disabled={isLoading}
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button size="sm" onClick={() => setAddDialogOpen(true)}>
            <Plus className="h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>

      {error && (
        <div className="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-md">
          {error}
        </div>
      )}

      {isLoading && users.length === 0 ? (
        <div className="border rounded-md p-8 text-center text-muted-foreground">
          Loading users...
        </div>
      ) : (
        <UserTable
          users={users}
          onEdit={openEditDialog}
          onResetPassword={openPasswordDialog}
          onChangeCredits={openCreditsDialog}
        />
      )}

      <AddUserDialog
        open={addDialogOpen}
        onOpenChange={setAddDialogOpen}
        onSubmit={handleAddUser}
      />

      <EditUserDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        user={selectedUser}
        onSubmit={handleEditUser}
      />

      <ResetPasswordDialog
        open={passwordDialogOpen}
        onOpenChange={setPasswordDialogOpen}
        user={selectedUser}
        onSubmit={handleResetPassword}
      />

      <CreditsDialog
        open={creditsDialogOpen}
        onOpenChange={setCreditsDialogOpen}
        user={selectedUser}
        onSubmit={handleUpdateCredits}
      />
    </div>
  );
}
