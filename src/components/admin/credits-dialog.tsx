"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { UserWithSubscription } from "./user-table";

interface CreditsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: UserWithSubscription | null;
  onSubmit: (userId: string, credits: number) => Promise<void>;
}

export function CreditsDialog({
  open,
  onOpenChange,
  user,
  onSubmit,
}: CreditsDialogProps) {
  const [credits, setCredits] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reset form when user changes
  useEffect(() => {
    if (user) {
      setCredits(String(user.credits ?? 0));
      setError(null);
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setError(null);

    const creditsNum = parseInt(credits, 10);
    if (isNaN(creditsNum) || creditsNum < 0) {
      setError("Credits must be a non-negative number");
      return;
    }

    setIsLoading(true);

    try {
      await onSubmit(user.id, creditsNum);
      onOpenChange(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update credits");
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAdd = (amount: number) => {
    const currentCredits = parseInt(credits, 10) || 0;
    setCredits(String(currentCredits + amount));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Change Credits</DialogTitle>
            <DialogDescription>
              Update credits for {user?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {error && (
              <div className="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-md">
                {error}
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="credits">Credits</Label>
              <Input
                id="credits"
                type="number"
                min="0"
                value={credits}
                onChange={(e) => setCredits(e.target.value)}
                placeholder="0"
                required
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleQuickAdd(10)}
              >
                +10
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleQuickAdd(50)}
              >
                +50
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleQuickAdd(100)}
              >
                +100
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setCredits("0")}
              >
                Set to 0
              </Button>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update Credits"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
