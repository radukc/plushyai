import Link from "next/link";
import { Heart, Twitter, Instagram, MessageCircle } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS, APP_CONFIG } from "@/lib/constants";

// Map icon names to Lucide components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Twitter,
  Instagram,
  MessageCircle,
  Music2: () => (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  ),
};

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Top Section - Logo and Tagline */}
        <div className="flex flex-col items-center text-center mb-12">
          <Link
            href="/"
            className="flex items-center gap-2 mb-3 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg shadow-pink-500/20">
              <Heart className="h-5 w-5 text-white fill-white" />
            </div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {APP_CONFIG.name}
            </span>
          </Link>
          <p className="text-muted-foreground max-w-md">
            {APP_CONFIG.description}
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {FOOTER_LINKS.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-foreground mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      {...(link.external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section - Social Links and Copyright */}
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} {APP_CONFIG.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
