import { CodeBlock } from "@/components/docs/code-block";

const checks = [
  [
    "404 registry item",
    "Confirm @poyraz points to https://ui.poyrazavsever.com/r/{name}.json in components.json.",
  ],
  [
    "Missing colors or motion",
    "Reinstall @poyraz/poyraz-theme so cssVars, utilities and keyframes are merged into the configured global CSS file.",
  ],
  [
    "Unresolved @/ imports",
    "Check aliases.ui and aliases.lib in components.json; registry targets resolve through those aliases.",
  ],
  [
    "Glass appears opaque",
    "Backdrop filtering may be unsupported or reduced. The opaque fallback is intentional and preserves contrast.",
  ],
  [
    "Existing file conflict",
    "Run with --diff first. Use --overwrite only after reviewing local modifications.",
  ],
] as const;

export default function TroubleshootingPage() {
  return (
    <div className="space-y-10 pb-16">
      <header className="space-y-3">
        <p className="text-xs font-bold uppercase text-primary">Getting started</p>
        <h1 className="text-poyraz-heading font-semibold">Registry troubleshooting</h1>
        <p className="max-w-3xl text-muted-foreground">
          Diagnose installation, alias, theme and overwrite problems without changing unrelated
          project configuration.
        </p>
      </header>
      <CodeBlock
        lang="bash"
        code={`pnpm dlx shadcn@latest add @poyraz/button --dry-run
pnpm dlx shadcn@latest add @poyraz/button --diff components/ui/button.tsx`}
      />
      <div className="divide-y divide-border rounded-md border border-border bg-surface">
        {checks.map(([title, description]) => (
          <section key={title} className="grid gap-2 p-4 sm:grid-cols-[12rem_1fr]">
            <h2 className="text-sm font-semibold">{title}</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
