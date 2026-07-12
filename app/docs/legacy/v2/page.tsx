import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CodeBlock } from "@/components/docs/code-block";

export default function LegacyV2Page() {
  return (
    <div className="space-y-10 pb-16">
      <header className="space-y-3">
        <p className="text-xs font-bold uppercase text-warning-icon">Stable legacy</p>
        <h1 className="text-poyraz-heading font-semibold">Poyraz UI V2</h1>
        <p className="max-w-3xl text-muted-foreground">
          V2 package imports remain documented at this stable URL for existing applications. New
          applications should use the V3 registry.
        </p>
        <p className="max-w-3xl text-sm text-muted-foreground">
          Planned blocker-fix support ends 2027-03-31. V2 reaches end of maintenance on 2027-06-30
          and remains available under the planned <code>legacy-v2</code> dist-tag.
        </p>
      </header>
      <section className="space-y-3">
        <h2 className="text-poyraz-title font-semibold">Package setup</h2>
        <CodeBlock lang="bash" code="pnpm add poyraz-ui reactive-switcher" />
        <CodeBlock lang="bash" code="pnpm add poyraz-ui@legacy-v2" />
        <CodeBlock
          lang="css"
          code={`@import "tailwindcss";
@import "poyraz-ui/preset.css";`}
        />
      </section>
      <section className="space-y-3">
        <h2 className="text-poyraz-title font-semibold">Package imports</h2>
        <CodeBlock
          code={`import { Button, Card, Input } from "poyraz-ui/atoms";
import { Dialog, Select } from "poyraz-ui/molecules";
import { Navbar, Sidebar } from "poyraz-ui/organisms";`}
        />
      </section>
      <Link
        href="/docs/migration"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary no-underline"
      >
        Start the V3 migration <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
