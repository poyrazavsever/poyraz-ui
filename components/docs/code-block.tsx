"use client";

import * as React from "react";

import { CodeBlock } from "@/components/docs/code-snippet";
import { RegistryDetails } from "@/components/docs/registry-details";
import { cn } from "@/lib/utils";

export { CodeBlock } from "@/components/docs/code-snippet";

export function DemoBlock({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-slot="docs-demo"
      className={cn(
        "@container/demo relative min-w-0 overflow-visible rounded-lg border border-border bg-[linear-gradient(135deg,var(--poyraz-primary-muted),var(--poyraz-surface),var(--poyraz-info))] p-3 @sm/demo:p-4 @lg/demo:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ComponentPage({
  name,
  description,
  importCode,
  children,
}: {
  name: string;
  description: string;
  importCode: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0 space-y-10 pb-10">
      <div className="space-y-3">
        <h1 className="text-2xl font-black tracking-tight">{name}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <section className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-widest text-placeholder">Import</h2>
        <CodeBlock code={importCode} />
      </section>
      {children}
      <RegistryDetails name={name} />
    </div>
  );
}

export function DemoSection({
  title,
  description,
  code,
  children,
}: {
  title: string;
  description?: string;
  code?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-lg font-bold">{title}</h2>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <DemoBlock>{children}</DemoBlock>
      {code && <CodeBlock code={code} />}
    </section>
  );
}
