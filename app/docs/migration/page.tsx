import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CodeBlock } from "@/components/docs/code-block";

const steps = [
  ["1. Foundation", "Install theme and utilities before moving visual components.", "pnpm dlx shadcn@latest add @poyraz/poyraz-theme @poyraz/poyraz-utils"],
  ["2. Primitives", "Replace Button, Input and Card imports one component at a time.", "pnpm dlx shadcn@latest add @poyraz/button @poyraz/input @poyraz/card"],
  ["3. Interactive components", "Move Radix-backed molecules and verify keyboard flows.", "pnpm dlx shadcn@latest add @poyraz/dialog @poyraz/select @poyraz/dropdown-menu"],
  ["4. Layouts", "Install organisms and blocks after their child components are stable.", "pnpm dlx shadcn@latest add @poyraz/navbar @poyraz/sidebar"],
] as const;

export default function MigrationPage() {
  return (
    <div className="space-y-10 pb-16">
      <header className="space-y-3">
        <p className="text-xs font-bold uppercase text-primary">Migration</p>
        <h1 className="text-poyraz-heading font-semibold">V2 to V3</h1>
        <p className="max-w-3xl text-muted-foreground">V3 is registry-first. Migrate incrementally and keep V2 package imports working until each source-owned component is verified.</p>
      </header>
      <div className="space-y-8">
        {steps.map(([title, description, command]) => (
          <section key={title} className="space-y-3 border-l-2 border-primary pl-5">
            <h2 className="font-semibold">{title}</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
            <CodeBlock lang="bash" code={command} />
          </section>
        ))}
      </div>
      <section className="space-y-3">
        <h2 className="text-poyraz-title font-semibold">Find remaining V2 imports</h2>
        <CodeBlock lang="bash" code={`rg 'from ["\\']poyraz-ui(?:/atoms|/molecules|/organisms)?["\\']' src app components`} />
      </section>
      <Link href="/docs/legacy/v2" className="inline-flex items-center gap-2 text-sm font-semibold text-primary no-underline">Open stable V2 reference <ArrowRight className="size-4" /></Link>
    </div>
  );
}

