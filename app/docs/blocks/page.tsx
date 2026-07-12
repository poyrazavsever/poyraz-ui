import Link from "next/link";
import { ArrowRight, Blocks } from "lucide-react";

import docsCatalog from "@/src/docs-registry.json";
import { InstallCommand } from "@/components/docs/install-command";

const previews = [
  { label: "Dashboard", href: "/docs/templates/dashboard" },
  { label: "Auth", href: "/docs/templates/auth" },
  { label: "Pricing", href: "/docs/templates/pricing" },
  { label: "Hero", href: "/docs/templates/hero" },
];

export default function BlocksPage() {
  return (
    <div className="space-y-10 pb-16">
      <header className="space-y-3">
        <p className="text-xs font-bold uppercase text-primary">Registry blocks</p>
        <h1 className="text-poyraz-heading font-semibold">Composable application blocks</h1>
        <p className="max-w-3xl text-muted-foreground">Source-owned layouts assembled from Poyraz primitives. Install a block, then edit its markup and data directly in your application.</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-poyraz-title font-semibold">Responsive previews</h2>
        <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {previews.map((preview) => (
            <Link key={preview.href} href={preview.href} className="flex items-center justify-between bg-surface p-4 no-underline hover:bg-surface-subtle">
              <span className="text-sm font-semibold">{preview.label}</span><ArrowRight className="size-4 text-primary" />
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2"><Blocks className="size-5 text-primary" /><h2 className="text-poyraz-title font-semibold">All blocks ({docsCatalog.counts.blocks})</h2></div>
        <div className="grid gap-4 lg:grid-cols-2">
          {docsCatalog.blocks.map((block) => (
            <article key={block.name} id={block.name} className="scroll-mt-24 rounded-md border border-border bg-surface p-4">
              <div className="mb-4"><h3 className="font-semibold">{block.title}</h3><p className="mt-1 text-sm text-muted-foreground">{block.description}</p></div>
              <InstallCommand name={block.name} />
              <p className="mt-3 text-xs text-placeholder">{block.registryDependencies.length} registry dependencies / {block.files.length} source files</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

