import { cn } from "@/lib/utils";

interface DocContentProps {
  children: React.ReactNode;
  className?: string;
}

export function DocContent({ children, className }: DocContentProps) {
  return (
    <div
      className={cn(
        "flex-1 px-6 py-8 lg:px-12 lg:py-10",
        "max-w-4xl mx-auto w-full",
        className
      )}
    >
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {children}
      </article>
    </div>
  );
}

interface DocHeaderProps {
  title: string;
  description?: string;
}

export function DocHeader({ title, description }: DocHeaderProps) {
  return (
    <div className="mb-8 border-b pb-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
        {title}
      </h1>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

interface DocSectionProps {
  title: string;
  id?: string;
  children: React.ReactNode;
}

export function DocSection({ title, id, children }: DocSectionProps) {
  const sectionId = id || title.toLowerCase().replace(/\s+/g, "-");
  return (
    <section id={sectionId} className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-semibold tracking-tight mb-4">{title}</h2>
      {children}
    </section>
  );
}

interface DocStepProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export function DocStep({ number, title, children }: DocStepProps) {
  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-shrink-0">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
          {number}
        </div>
      </div>
      <div className="flex-1 pt-0.5">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

interface DocTipProps {
  children: React.ReactNode;
  variant?: "tip" | "warning" | "info";
}

export function DocTip({ children, variant = "tip" }: DocTipProps) {
  const styles = {
    tip: "bg-primary/10 border-primary/20 text-foreground",
    warning: "bg-orange-500/10 border-orange-500/20 text-foreground",
    info: "bg-blue-500/10 border-blue-500/20 text-foreground",
  };

  const labels = {
    tip: "Tip",
    warning: "Warning",
    info: "Note",
  };

  return (
    <div
      className={cn(
        "rounded-lg border p-4 my-6",
        styles[variant]
      )}
    >
      <p className="text-sm font-semibold mb-1">{labels[variant]}</p>
      <div className="text-sm">{children}</div>
    </div>
  );
}
