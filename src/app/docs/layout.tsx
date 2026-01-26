"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { SidebarNav } from "@/components/docs/sidebar-nav";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-16 z-40">
        <div className="container mx-auto px-4 py-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSidebarOpen(true)}
            className="gap-2"
          >
            <Menu className="h-4 w-4" />
            Menu
          </Button>
        </div>
      </div>

      {/* Mobile sidebar sheet */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-72 p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Documentation Navigation</SheetTitle>
            <SheetDescription>
              Navigate through the documentation sections
            </SheetDescription>
          </SheetHeader>
          <SidebarNav onNavigate={() => setSidebarOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Main content area */}
      <div className="flex-1 container mx-auto px-4">
        <div className="flex">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-60 flex-shrink-0 border-r">
            <div className="sticky top-20 h-[calc(100vh-5rem)]">
              <SidebarNav />
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}
