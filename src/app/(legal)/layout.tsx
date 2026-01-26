import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const legalPages = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
    { href: "/refund", label: "Refund Policy" },
    { href: "/gdpr", label: "GDPR" },
    { href: "/ccpa", label: "CCPA" },
    { href: "/acceptable-use", label: "Acceptable Use" },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Back navigation */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Optional: Table of contents sidebar */}
          <aside className="hidden xl:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">
                Legal Documents
              </h3>
              <ScrollArea className="h-[calc(100vh-12rem)]">
                <nav className="space-y-1">
                  {legalPages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5"
                    >
                      {page.label}
                    </Link>
                  ))}
                </nav>
              </ScrollArea>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 max-w-4xl">
            <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-h1:text-3xl prose-h1:md:text-4xl prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
              {children}
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
