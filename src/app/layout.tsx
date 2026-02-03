import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Plushify - Turn Anyone Into a Plushie",
    template: "%s | Plushify",
  },
  description:
    "Transform your photos into adorable plushie versions with AI. Create cute, cuddly digital plushies from any photo in seconds. Multiple styles, high resolution, and commercial-ready outputs.",
  keywords: [
    "Plushify",
    "AI photo transformation",
    "plushie generator",
    "photo to plushie",
    "AI art",
    "cute avatar",
    "kawaii",
    "plush toy",
    "image transformation",
    "AI-powered",
  ],
  authors: [{ name: "Plushify" }],
  creator: "Plushify",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Plushify",
    title: "Plushify - Turn Anyone Into a Plushie",
    description:
      "Transform your photos into adorable plushie versions with AI. Create cute, cuddly digital plushies in seconds.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Plushify - AI Plushie Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plushify - Turn Anyone Into a Plushie",
    description:
      "Transform your photos into adorable plushie versions with AI. Create cute, cuddly digital plushies in seconds.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Plushify",
  applicationCategory: "MultimediaApplication",
  description:
    "Transform your photos into adorable plushie versions with AI. Create cute, cuddly digital plushies from any photo in seconds.",
  operatingSystem: "Web",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "9",
    highPrice: "29",
    priceCurrency: "USD",
    offerCount: "3",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "1250",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "AI-powered photo transformation",
    "Multiple plushie styles",
    "High-resolution output up to 2048px",
    "Fast processing in seconds",
    "Commercial use license available",
    "Background removal",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
