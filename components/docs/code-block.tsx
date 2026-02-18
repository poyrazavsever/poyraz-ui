"use client";

import * as React from "react";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "@/components/ui/molecules/sonner";
import { Card, CardContent } from "@/components/ui/atoms/card";
import { cn } from "@/components/ui/atoms/typography";

/* ================================================================== */
/*  CODE BLOCK — Copyable code snippet                                 */
/* ================================================================== */

export function CodeBlock({
  code,
  children,
  className,
}: {
  code: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card
      className={cn(
        "bg-slate-950 text-slate-50 border-slate-800 relative group",
        className,
      )}
    >
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-slate-500 hover:text-white cursor-pointer transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
      <CardContent className="p-4 font-mono text-sm leading-relaxed overflow-x-auto">
        {children ?? (
          <pre className="whitespace-pre-wrap">
            <code>{code}</code>
          </pre>
        )}
      </CardContent>
    </Card>
  );
}

/* ================================================================== */
/*  DEMO BLOCK — Live preview + optional code                          */
/* ================================================================== */

export function DemoBlock({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "p-6 border-2 border-dashed border-slate-200 bg-white",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ================================================================== */
/*  COMPONENT PAGE — Standard layout for a component doc page          */
/* ================================================================== */

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
    <div className="space-y-10 pb-10">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl font-black tracking-tight">{name}</h1>
        <p className="text-base text-slate-500 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>

      {/* Import */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
          Import
        </h2>
        <CodeBlock code={importCode} />
      </section>

      {/* Demos */}
      {children}
    </div>
  );
}

/* ================================================================== */
/*  DEMO SECTION — Titled section within a component page              */
/* ================================================================== */

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
        {description && <p className="text-sm text-slate-500">{description}</p>}
      </div>
      <DemoBlock>{children}</DemoBlock>
      {code && <CodeBlock code={code} />}
    </section>
  );
}
