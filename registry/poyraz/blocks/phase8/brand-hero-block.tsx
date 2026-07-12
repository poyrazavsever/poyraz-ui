import { ArrowRight, Blocks, Code2, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/atoms/badge";
import { Button } from "@/components/ui/atoms/button";

const heroFeatures = [
  { title: "Source owned", description: "Every installed file is yours.", icon: Code2 },
  { title: "Accessible", description: "Radix behavior and visible states.", icon: ShieldCheck },
  { title: "Composable", description: "Primitives and product-ready blocks.", icon: Blocks },
];

function BrandHeroBlock() {
  return (
    <section data-slot="brand-hero-block" className="@container/hero overflow-hidden rounded-xl border border-border bg-background">
      <div className="px-4 py-12 text-center @sm/hero:px-8 @lg/hero:py-16">
        <Badge variant="glass">Poyraz UI v3</Badge>
        <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight @lg/hero:text-5xl">Build product interfaces with <span className="text-primary">open, adaptable</span> source</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground @sm/hero:text-base">A registry-first React UI kit combining accessible behavior, semantic tokens and restrained glass surfaces.</p>
        <div className="mt-6 flex flex-col justify-center gap-2 @sm/hero:flex-row"><Button>Browse components <ArrowRight className="size-4" /></Button><Button variant="outline">Read documentation</Button></div>
      </div>
      <div className="grid border-t border-border @md/hero:grid-cols-3">{heroFeatures.map(({ title, description, icon: Icon }) => <div key={title} className="flex gap-3 border-b border-border p-4 last:border-b-0 @md/hero:border-b-0 @md/hero:border-r @md/hero:last:border-r-0"><span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary-muted text-primary"><Icon className="size-4" /></span><div><h2 className="text-sm font-semibold">{title}</h2><p className="mt-1 text-xs text-muted-foreground">{description}</p></div></div>)}</div>
    </section>
  );
}

export { BrandHeroBlock, heroFeatures };
