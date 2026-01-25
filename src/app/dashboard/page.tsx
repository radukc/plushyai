"use client";

import Link from "next/link";
import { Lock, Sparkles, ImageIcon } from "lucide-react";
import { UserProfile } from "@/components/auth/user-profile";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";
import { useMockAuth } from "@/lib/mock-auth";

export default function DashboardPage() {
  const { data: session, isPending } = useSession();
  const { user: mockUser, isAuthenticated: isMockAuthenticated } = useMockAuth();

  // Use mock auth for UI development
  const isAuthenticated = isMockAuthenticated || !!session;
  const user = mockUser || session?.user;

  if (isPending && !isMockAuthenticated) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <Lock className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-2xl font-bold mb-2">Sign In Required</h1>
            <p className="text-muted-foreground mb-6">
              You need to sign in to access the dashboard
            </p>
          </div>
          <UserProfile />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user?.name || "User"}!
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="font-medium">{mockUser?.credits ?? 0} credits</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border border-border rounded-lg bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <ImageIcon className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Create Plushie</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Upload a photo and transform it into an adorable plushie version
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Full dashboard UI coming in Phase 6
          </p>
          <Button disabled>
            Coming Soon
          </Button>
        </div>

        <div className="p-6 border border-border rounded-lg bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Your Gallery</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            View and manage all your generated plushie images
          </p>
          <Button asChild variant="outline">
            <Link href="/gallery">View Gallery</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
