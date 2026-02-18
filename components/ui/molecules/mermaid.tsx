"use client";

import * as React from "react";
import { cn } from "@/components/ui/atoms/typography";

/* ================================================================== */
/*  MERMAID — Render mermaid diagrams from children code               */
/* ================================================================== */

export interface MermaidProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mermaid code — pass as children (string) or as this prop */
  code?: string;
  /** Chart id prefix */
  chartId?: string;
  children?: React.ReactNode;
}

let mermaidInitialized = false;
let mermaidReady: Promise<typeof import("mermaid")> | null = null;

function getMermaid() {
  if (!mermaidReady) {
    mermaidReady = import("mermaid").then((mod) => {
      if (!mermaidInitialized) {
        mod.default.initialize({
          startOnLoad: false,
          theme: "base",
          themeVariables: {
            // Brutalist — flat, dashed feel
            primaryColor: "#fee2e2",
            primaryBorderColor: "#dc2626",
            primaryTextColor: "#0f172a",
            secondaryColor: "#f1f5f9",
            secondaryBorderColor: "#94a3b8",
            secondaryTextColor: "#334155",
            tertiaryColor: "#fef3c7",
            tertiaryBorderColor: "#d97706",
            tertiaryTextColor: "#78350f",
            lineColor: "#64748b",
            textColor: "#0f172a",
            mainBkg: "#ffffff",
            nodeBorder: "#dc2626",
            clusterBkg: "#f8fafc",
            clusterBorder: "#cbd5e1",
            titleColor: "#0f172a",
            edgeLabelBackground: "#ffffff",
            // Fonts
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            fontSize: "13px",
            // Flowchart
            nodeTextColor: "#0f172a",
          },
          flowchart: {
            htmlLabels: true,
            curve: "basis",
            padding: 12,
          },
          sequence: {
            actorMargin: 60,
            boxMargin: 8,
            noteMargin: 10,
            messageMargin: 30,
          },
        });
        mermaidInitialized = true;
      }
      return mod;
    });
  }
  return mermaidReady;
}

let idCounter = 0;

const Mermaid = React.forwardRef<HTMLDivElement, MermaidProps>(
  ({ className, code, chartId, children, ...props }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [svg, setSvg] = React.useState<string>("");
    const [error, setError] = React.useState<string>("");
    const [loading, setLoading] = React.useState(true);

    // Resolve mermaid code from children or code prop
    const mermaidCode = React.useMemo(() => {
      if (code) return code.trim();
      if (typeof children === "string") return children.trim();
      return "";
    }, [code, children]);

    React.useEffect(() => {
      if (!mermaidCode) {
        setLoading(false);
        setError("No mermaid code provided.");
        return;
      }

      let cancelled = false;
      const id = chartId ?? `poyraz-mermaid-${++idCounter}`;

      setLoading(true);
      setError("");

      getMermaid()
        .then(async (mod) => {
          if (cancelled) return;
          try {
            const { svg: rendered } = await mod.default.render(id, mermaidCode);
            if (!cancelled) {
              setSvg(rendered);
              setLoading(false);
            }
          } catch (err) {
            if (!cancelled) {
              setError(
                err instanceof Error
                  ? err.message
                  : "Failed to render diagram.",
              );
              setLoading(false);
            }
          }
        })
        .catch((err) => {
          if (!cancelled) {
            setError(
              err instanceof Error ? err.message : "Failed to load mermaid.",
            );
            setLoading(false);
          }
        });

      return () => {
        cancelled = true;
      };
    }, [mermaidCode, chartId]);

    // Combine refs
    const setRefs = React.useCallback(
      (node: HTMLDivElement | null) => {
        (
          containerRef as React.MutableRefObject<HTMLDivElement | null>
        ).current = node;
        if (typeof ref === "function") ref(node);
        else if (ref)
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      },
      [ref],
    );

    return (
      <div
        ref={setRefs}
        className={cn(
          "relative border-2 border-dashed border-slate-200 bg-white p-4",
          "overflow-x-auto",
          className,
        )}
        {...props}
      >
        {loading && (
          <div className="flex items-center justify-center py-8 gap-3 text-sm text-slate-400">
            <div className="h-4 w-4 border-2 border-dashed border-red-600 border-t-transparent animate-spin" />
            Rendering diagram…
          </div>
        )}

        {error && !loading && (
          <div className="py-6 text-center">
            <div className="inline-block px-3 py-2 border-2 border-dashed border-red-300 bg-red-50 text-xs text-red-700 font-mono">
              {error}
            </div>
          </div>
        )}

        {svg && !loading && (
          <div
            className="mermaid-output flex justify-center [&_svg]:max-w-full"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        )}

        {/* Override some SVG styles to match brutalist theme */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
.mermaid-output .node rect,
.mermaid-output .node circle,
.mermaid-output .node ellipse,
.mermaid-output .node polygon {
  stroke-dasharray: 6, 3;
  stroke-width: 2px;
}
.mermaid-output .cluster rect {
  stroke-dasharray: 8, 4;
  stroke-width: 1.5px;
  rx: 0;
  ry: 0;
}
.mermaid-output .edgePath .path {
  stroke-width: 1.5px;
}
.mermaid-output text {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
}
.mermaid-output .label {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
}
`,
          }}
        />
      </div>
    );
  },
);
Mermaid.displayName = "Mermaid";

export { Mermaid };
