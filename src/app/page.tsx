import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex-1 container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
              <Sparkles className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gradient">
              Plushify
            </h1>
          </div>
          <h2 className="text-2xl font-semibold text-muted-foreground">
            Turn Anyone Into a Plushie
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your photos into adorable plushie versions with AI.
            Create cute, cuddly digital plushies from any photo in seconds.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg">
            <Link href="/pricing">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg">
            <Link href="/dashboard">Try It Now</Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Landing page content coming in Phase 4
        </p>
      </div>
    </main>
  );
}
