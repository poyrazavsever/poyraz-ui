"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "@/components/ui/molecules/sonner";
import { Card, CardContent } from "@/components/ui/atoms/card";
import { cn } from "@/components/ui/atoms/typography";

/* ================================================================== */
/*  Shiki highlighting helper (lazy-loaded)                            */
/* ================================================================== */

let highlighterPromise: Promise<
  Awaited<ReturnType<(typeof import("shiki"))["createHighlighter"]>>
> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = import("shiki").then((mod) =>
      mod.createHighlighter({
        themes: ["github-dark"],
        langs: ["tsx", "typescript", "bash", "json", "css"],
      }),
    );
  }
  return highlighterPromise;
}

function useHighlightedCode(code: string, lang: string = "tsx") {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    getHighlighter().then((highlighter) => {
      if (cancelled) return;
      const result = highlighter.codeToHtml(code, {
        lang,
        theme: "github-dark",
      });
      setHtml(result);
    });
    return () => {
      cancelled = true;
    };
  }, [code, lang]);

  return html;
}

/* ================================================================== */
/*  CODE BLOCK — Copyable code snippet with syntax highlighting        */
/* ================================================================== */

export function CodeBlock({
  code,
  lang = "tsx",
  children,
  className,
}: {
  code: string;
  lang?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const highlightedHtml = useHighlightedCode(code, lang);

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
        className="absolute top-3 right-3 z-10 text-slate-500 hover:text-white cursor-pointer transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
      <CardContent className="p-4 text-sm leading-relaxed overflow-x-auto [&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:!m-0 [&_code]:!bg-transparent">
        {children ??
          (highlightedHtml ? (
            <div dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
          ) : (
            <pre className="whitespace-pre-wrap font-mono">
              <code>{code}</code>
            </pre>
          ))}
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
        "p-6 border border-border rounded-sm bg-background",
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
        <h1 className="text-2xl font-black tracking-tight">{name}</h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>

      {/* Import */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-widest text-placeholder">
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
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <DemoBlock>{children}</DemoBlock>
      {code && <CodeBlock code={code} />}
    </section>
  );
}
