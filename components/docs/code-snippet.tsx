"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

import { Card, CardContent } from "@/components/ui/atoms/card";
import { Button } from "@/components/ui/atoms/button";
import { toast } from "@/components/ui/molecules/sonner";
import { cn } from "@/lib/utils";

let highlighterPromise: Promise<Awaited<ReturnType<(typeof import("shiki"))["createHighlighter"]>>> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = import("shiki").then((mod) => mod.createHighlighter({
      themes: ["github-dark"],
      langs: ["tsx", "typescript", "bash", "json", "css"],
    }));
  }
  return highlighterPromise;
}

function useHighlightedCode(code: string, lang: string) {
  const [html, setHtml] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    getHighlighter().then((highlighter) => {
      if (!cancelled) setHtml(highlighter.codeToHtml(code, { lang, theme: "github-dark" }));
    });
    return () => { cancelled = true; };
  }, [code, lang]);

  return html;
}

export function CodeBlock({ code, lang = "tsx", children, className }: {
  code: string;
  lang?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const [copied, setCopied] = React.useState(false);
  const highlightedHtml = useHighlightedCode(code, lang);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Copied to clipboard!");
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className={cn("group relative border-slate-800 bg-slate-950 text-slate-50", className)}>
      <Button type="button" variant="ghost" size="icon-sm" onClick={handleCopy} className="absolute right-2 top-2 z-10 text-slate-400 hover:bg-white/10 hover:text-white" aria-label="Copy code">
        {copied ? <Check className="size-4 text-green-400" /> : <Copy className="size-4" />}
      </Button>
      <CardContent className="overflow-x-auto p-4 pr-12 text-sm leading-relaxed [&_code]:!bg-transparent [&_pre]:!m-0 [&_pre]:!bg-transparent [&_pre]:!p-0">
        {children ?? (highlightedHtml ? <div dangerouslySetInnerHTML={{ __html: highlightedHtml }} /> : <pre className="whitespace-pre-wrap font-mono"><code>{code}</code></pre>)}
      </CardContent>
    </Card>
  );
}
