import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { CodeBlock } from "@/components/docs/code-block";
import migration from "@/src/migration-map.json";

const steps = [
  [
    "1. Foundation",
    "Install the generated theme, utilities and shared recipes before visual components.",
    "pnpm dlx shadcn@latest add @poyraz/poyraz-theme @poyraz/poyraz-utils @poyraz/poyraz-recipes",
  ],
  [
    "2. Primitives",
    "Move Button, Input and Card separately and compare dimensions before changing variants.",
    "pnpm dlx shadcn@latest add @poyraz/button @poyraz/input @poyraz/card",
  ],
  [
    "3. Interactive components",
    "Move one Radix family at a time, then verify keyboard and focus behavior.",
    "pnpm dlx shadcn@latest add @poyraz/dialog @poyraz/select @poyraz/dropdown-menu @poyraz/tabs",
  ],
  [
    "4. Organisms and blocks",
    "Install composite layouts only after their child component migrations are stable.",
    "pnpm dlx shadcn@latest add @poyraz/navbar @poyraz/sidebar @poyraz/footer @poyraz/dashboard-shell-block",
  ],
] as const;

function MappingTable({ headers, rows }: { headers: string[]; rows: Array<Array<string>> }) {
  return (
    <div className="overflow-x-auto border-y border-border">
      <table className="w-full min-w-[48rem] text-left text-sm">
        <thead className="bg-surface-subtle text-xs uppercase text-muted-foreground">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-3 py-2 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row, index) => (
            <tr key={`${row[0]}-${index}`} className="align-top">
              {row.map((cell, cellIndex) => (
                <td
                  key={`${cell}-${cellIndex}`}
                  className={
                    cellIndex === 0 ? "px-3 py-2 font-medium" : "px-3 py-2 text-muted-foreground"
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MigrationPage() {
  return (
    <div className="space-y-12 pb-16">
      <header className="space-y-3">
        <p className="text-xs font-bold uppercase text-primary">Migration</p>
        <h1 className="text-poyraz-heading font-semibold">V2 to V3</h1>
        <p className="max-w-3xl text-muted-foreground">
          Upgrade to the V3 npm runtime package for centralized semver updates, or move selected
          components to the source registry when you need local ownership. Both routes can coexist
          during an incremental migration.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <span>
            V2 blocker fixes through{" "}
            <strong>{migration.support.securityAndBlockerFixesUntil}</strong>
          </span>
          <span>
            End of maintenance <strong>{migration.support.endOfMaintenance}</strong>
          </span>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3 border border-border bg-surface p-5">
          <h2 className="text-poyraz-title font-semibold">Npm package upgrade</h2>
          <p className="text-sm text-muted-foreground">
            Keep supported package imports and move the application to the V3 runtime package.
          </p>
          <CodeBlock lang="bash" code="pnpm add poyraz-ui@3" />
        </div>
        <div className="space-y-3 border border-border bg-surface p-5">
          <h2 className="text-poyraz-title font-semibold">Own the source</h2>
          <p className="text-sm text-muted-foreground">
            Follow the incremental sequence below for components that need source-level control.
          </p>
          <CodeBlock lang="bash" code="pnpm dlx shadcn@latest add @poyraz/button" />
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-poyraz-title font-semibold">Incremental sequence</h2>
        {steps.map(([title, description, command]) => (
          <div key={title} className="space-y-3 border-l-2 border-primary pl-5">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            <CodeBlock lang="bash" code={command} />
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-poyraz-title font-semibold">Component mapping</h2>
        <p className="text-sm text-muted-foreground">
          This mapping is only required for the source-ownership route. Install the registry item
          first, then replace that component&apos;s package import with the local target.
        </p>
        <MappingTable
          headers={["Layer", "V2 symbols", "V3 item", "Local import"]}
          rows={migration.componentMappings.map((item) => [
            item.layer,
            `${item.v2Module}: ${item.symbols}`,
            `@poyraz/${item.item}`,
            item.target,
          ])}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-poyraz-title font-semibold">Prop mapping</h2>
        <MappingTable
          headers={["Component", "V2", "V3", "Action"]}
          rows={migration.propMappings.map((item) => [
            item.component,
            item.v2,
            item.v3,
            item.action,
          ])}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-poyraz-title font-semibold">Variant changes</h2>
        <MappingTable
          headers={["Component", "V2", "V3", "Action"]}
          rows={migration.variantMappings.map((item) => [
            item.component,
            item.v2,
            item.v3,
            item.action,
          ])}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-poyraz-title font-semibold">Token mapping</h2>
        <MappingTable
          headers={["V2 token", "V3 token", "Status"]}
          rows={migration.tokenMappings.map((item) => [item.v2, item.v3, item.status])}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-poyraz-title font-semibold">
          Source route: remove V2 runtime theme objects
        </h2>
        <p className="text-sm text-muted-foreground">
          The registry theme owns variables. A provider-independent application only needs to set
          the selector consumed by the preset.
        </p>
        <CodeBlock
          code={`export function setColorTheme(theme: "light" | "dark") {
  document.documentElement.dataset.poyrazTheme = theme;
  localStorage.setItem("color-theme", theme);
}`}
        />
        <h3 className="font-semibold">Next.js with next-themes</h3>
        <CodeBlock
          code={`"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-poyraz-theme" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}`}
        />
        <p className="text-sm text-muted-foreground">
          Add <code>suppressHydrationWarning</code> to the root html element and mount
          theme-dependent controls on the client.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-poyraz-title font-semibold">Audit and safe codemod</h2>
        <CodeBlock
          lang="bash"
          code={`pnpm migration:audit src app components
pnpm migration:tokens src app components
pnpm migration:codemod -- src app components
pnpm migration:codemod --write -- src app components`}
        />
        <p className="text-sm text-muted-foreground">
          The codemod changes named imports only when the local registry target already exists. It
          does not rewrite props, compositions, namespace imports or consumer component files.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-poyraz-title font-semibold">Overwrite and rollback policy</h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Commit before each registry install and never enable global overwrite.</li>
          <li>Keep consumer customization in a separate commit from upstream source updates.</li>
          <li>Rollback the component-specific commit and restore its pinned V2 import.</li>
          <li>Remove registry dependencies only after checking migrated dependents.</li>
          <li>Re-run typecheck, production build, keyboard and visual checks.</li>
        </ol>
      </section>

      <div className="flex flex-wrap gap-5 text-sm font-semibold text-primary">
        <Link href="/docs/legacy/v2" className="inline-flex items-center gap-2 no-underline">
          Stable V2 reference <ArrowRight className="size-4" />
        </Link>
        <a
          href="https://github.com/poyrazavsever/poyraz-ui/blob/v3/docs/v3/migration-v2-to-v3.md"
          className="inline-flex items-center gap-2 no-underline"
        >
          Full migration guide <ExternalLink className="size-4" />
        </a>
      </div>
    </div>
  );
}
