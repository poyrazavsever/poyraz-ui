"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

export function InstallCommand({ name }: { name: string }) {
  const [copied, setCopied] = React.useState(false);
  const command = `pnpm dlx shadcn@latest add @poyraz/${name}`;
  return (
    <div className="flex min-w-0 items-center rounded-md border border-border bg-surface px-2 py-1.5">
      <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap px-2 text-xs">
        {command}
      </code>
      <button
        type="button"
        title="Copy install command"
        aria-label={`Copy ${name} install command`}
        className="flex size-8 shrink-0 items-center justify-center rounded-sm text-muted-foreground hover:bg-accent hover:text-foreground"
        onClick={async () => {
          await navigator.clipboard.writeText(command);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1500);
        }}
      >
        {copied ? <Check className="size-4 text-success-icon" /> : <Copy className="size-4" />}
      </button>
    </div>
  );
}
