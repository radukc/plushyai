"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Compass, Code, HelpCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    title: "Getting Started",
    href: "/docs/getting-started",
    icon: <Compass className="h-4 w-4" />,
  },
  {
    title: "How to Use",
    href: "/docs/how-to-use",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "API Reference",
    href: "/docs/api",
    icon: <Code className="h-4 w-4" />,
  },
  {
    title: "FAQ",
    href: "/docs/faq",
    icon: <HelpCircle className="h-4 w-4" />,
  },
];

interface SidebarNavProps {
  className?: string;
  onNavigate?: () => void;
}

export function SidebarNav({ className, onNavigate }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <ScrollArea className={cn("h-full py-6", className)}>
      <nav className="space-y-1 px-4">
        <div className="mb-4 px-3">
          <h4 className="text-sm font-semibold text-foreground">
            Documentation
          </h4>
          <p className="text-xs text-muted-foreground mt-1">
            Learn how to use Plushify
          </p>
        </div>
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href === "/docs/getting-started" && pathname === "/docs");
          return (
            <Link
              key={item.href}
              href={item.href}
              {...(onNavigate && { onClick: onNavigate })}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <span
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-md",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {item.icon}
              </span>
              {item.title}
            </Link>
          );
        })}
      </nav>
    </ScrollArea>
  );
}
