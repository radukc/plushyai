"use client";

import { MoreHorizontal, Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface UserWithSubscription {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  platformRole: string;
  createdAt: string;
  updatedAt: string;
  subscriptionId: string | null;
  plan: string | null;
  credits: number | null;
}

interface UserTableProps {
  users: UserWithSubscription[];
  onEdit: (user: UserWithSubscription) => void;
  onResetPassword: (user: UserWithSubscription) => void;
  onChangeCredits: (user: UserWithSubscription) => void;
}

export function UserTable({
  users,
  onEdit,
  onResetPassword,
  onChangeCredits,
}: UserTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-center">Credits</TableHead>
            <TableHead className="text-center">Verified</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="w-[70px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                No users found
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge
                    variant={user.platformRole === "admin" ? "default" : "secondary"}
                  >
                    {user.platformRole}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  {user.credits ?? 0}
                </TableCell>
                <TableCell className="text-center">
                  {user.emailVerified ? (
                    <Check className="inline h-4 w-4 text-green-600" />
                  ) : (
                    <X className="inline h-4 w-4 text-muted-foreground" />
                  )}
                </TableCell>
                <TableCell>{formatDate(user.createdAt)}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => onEdit(user)}>
                        Edit user
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => onResetPassword(user)}>
                        Reset password
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => onChangeCredits(user)}>
                        Change credits
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
