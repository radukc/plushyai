"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu } from "lucide-react";
import { UserProfile } from "@/components/auth/user-profile";
import { useSession } from "@/lib/auth-client";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CreditBalance } from "./credit-balance";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function SiteHeader() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const isAuthenticated = !!session;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if user is admin
  const platformRole = (session?.user as any)?.platformRole;
  const isAdmin = platformRole === "admin";

  // Filter navigation links based on auth state
  const visibleLinks = NAV_LINKS.filter(
    (link) => !link.requiresAuth || isAuthenticated
  );

  // Admin link object
  const adminLink = { href: "/admin", label: "Admin" };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:rounded-md"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" role="banner">
        <nav
          className="container mx-auto px-4 py-4 flex justify-between items-center"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <h1 className="text-2xl font-bold">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-all duration-200"
              aria-label="Plushify - Go to homepage"
            >
              <div
                className="flex items-center justify-center w-9 h-9 rounded-xl shadow-lg shadow-amber-500/20"
                style={{
                  background: `linear-gradient(135deg, var(--amber-gradient-start), var(--amber-gradient-end))`
                }}
                aria-hidden="true"
              >
                <Heart className="h-5 w-5 text-white fill-white" />
              </div>
              <span
                className="font-extrabold tracking-tight"
                style={{
                  background: `linear-gradient(90deg, var(--amber-gradient-start), var(--amber-600), var(--amber-gradient-start))`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Plushify
              </span>
            </Link>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {visibleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            {/* Admin link - only visible to admin users */}
            {isAdmin && (
              <Link
                href={adminLink.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === adminLink.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {adminLink.label}
              </Link>
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3" role="group" aria-label="User actions">
            {isAuthenticated && <CreditBalance variant="compact" />}
            <UserProfile />
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {isAuthenticated && <CreditBalance variant="compact" />}
            <ModeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-lg"
                      style={{
                        background: `linear-gradient(135deg, var(--amber-gradient-start), var(--amber-gradient-end))`
                      }}
                    >
                      <Heart className="h-4 w-4 text-white fill-white" />
                    </div>
                    <span
                      className="font-bold"
                      style={{
                        background: `linear-gradient(90deg, var(--amber-gradient-start), var(--amber-gradient-end))`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Plushify
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {visibleLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                        pathname === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  {/* Admin link - only visible to admin users */}
                  {isAdmin && (
                    <Link
                      href={adminLink.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                        pathname === adminLink.href
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      {adminLink.label}
                    </Link>
                  )}
                  <div className="border-t pt-4 mt-2">
                    <div className="px-4">
                      <UserProfile />
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  );
}
