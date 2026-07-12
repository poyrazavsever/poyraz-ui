"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* ================================================================== */
/*  MERMAID — Render mermaid diagrams from children code               */
/* ================================================================== */

export interface MermaidProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mermaid code — pass as children (string) or as this prop */
  code?: string;
  /** Chart id prefix */
  chartId?: string;
  children?: React.ReactNode;
  surface?: "solid" | "soft" | "glass";
  radius?: "none" | "sm" | "md" | "lg" | "xl";
  diagramStyle?: "soft" | "minimal" | "technical";
  loadingContent?: React.ReactNode;
  errorContent?: (error: string) => React.ReactNode;
}

let mermaidReady: Promise<typeof import("mermaid")> | null = null;

function getMermaid() {
  if (!mermaidReady) {
    mermaidReady = import("mermaid");
  }
  return mermaidReady;
}

function resolveColor(container: HTMLElement, variable: string, fallback: string) {
  const probe = document.createElement("span");
  probe.style.cssText = `position:absolute;visibility:hidden;color:var(${variable},${fallback})`;
  container.appendChild(probe);
  const color = getComputedStyle(probe).color || fallback;
  probe.remove();
  return color;
}

function resolveMermaidTheme(container: HTMLElement) {
  return {
    primaryColor: resolveColor(container, "--poyraz-primary-muted", "rgb(254 226 226)"),
    primaryBorderColor: resolveColor(container, "--poyraz-primary", "rgb(220 38 38)"),
    primaryTextColor: resolveColor(container, "--poyraz-foreground", "rgb(15 23 42)"),
    secondaryColor: resolveColor(container, "--poyraz-surface-subtle", "rgb(241 245 249)"),
    secondaryBorderColor: resolveColor(container, "--poyraz-border-strong", "rgb(148 163 184)"),
    secondaryTextColor: resolveColor(container, "--poyraz-foreground", "rgb(51 65 85)"),
    tertiaryColor: resolveColor(container, "--poyraz-warning", "rgb(254 243 199)"),
    tertiaryBorderColor: resolveColor(container, "--poyraz-warning-border", "rgb(217 119 6)"),
    tertiaryTextColor: resolveColor(container, "--poyraz-warning-foreground", "rgb(120 53 15)"),
    lineColor: resolveColor(container, "--poyraz-muted-foreground", "rgb(100 116 139)"),
    textColor: resolveColor(container, "--poyraz-foreground", "rgb(15 23 42)"),
    mainBkg: resolveColor(container, "--poyraz-surface", "rgb(255 255 255)"),
    nodeBorder: resolveColor(container, "--poyraz-primary", "rgb(220 38 38)"),
    clusterBkg: resolveColor(container, "--poyraz-surface-subtle", "rgb(248 250 252)"),
    clusterBorder: resolveColor(container, "--poyraz-border", "rgb(203 213 225)"),
    titleColor: resolveColor(container, "--poyraz-foreground", "rgb(15 23 42)"),
    edgeLabelBackground: resolveColor(container, "--poyraz-surface", "rgb(255 255 255)"),
    nodeTextColor: resolveColor(container, "--poyraz-foreground", "rgb(15 23 42)"),
    fontFamily: "var(--poyraz-font-primary), ui-sans-serif, system-ui, sans-serif",
    fontSize: "13px",
  };
}

let idCounter = 0;

const Mermaid = React.forwardRef<HTMLDivElement, MermaidProps>(
  ({ className, code, chartId, children, diagramStyle = "soft", errorContent, loadingContent, radius = "lg", surface = "solid", ...props }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [svg, setSvg] = React.useState<string>("");
    const [error, setError] = React.useState<string>("");
    const [loading, setLoading] = React.useState(true);
    const [themeRevision, setThemeRevision] = React.useState(0);

    // Resolve mermaid code from children or code prop
    const mermaidCode = React.useMemo(() => {
      if (code) return code.trim();
      if (typeof children === "string") return children.trim();
      return "";
    }, [code, children]);

    React.useEffect(() => {
      const update = () => setThemeRevision((revision) => revision + 1);
      const observer = new MutationObserver(update);
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "data-poyraz-theme", "style"] });
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      media.addEventListener("change", update);
      return () => {
        observer.disconnect();
        media.removeEventListener("change", update);
      };
    }, []);

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
            const container = containerRef.current;
            if (!container) return;
            mod.default.initialize({
              startOnLoad: false,
              securityLevel: "strict",
              theme: "base",
              themeVariables: resolveMermaidTheme(container),
              flowchart: { htmlLabels: true, curve: diagramStyle === "technical" ? "linear" : "basis", padding: 12 },
              sequence: { actorMargin: 60, boxMargin: 8, noteMargin: 10, messageMargin: 30 },
            });
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
    }, [mermaidCode, chartId, diagramStyle, themeRevision]);

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
          "relative overflow-x-auto border p-4 transition-[background-color,border-color] duration-[var(--poyraz-motion-duration-base)]",
          surface === "solid" && "border-border bg-surface",
          surface === "soft" && "border-transparent bg-surface-subtle",
          surface === "glass" && "border-glass-border-outer bg-glass shadow-md backdrop-blur-glass",
          radius === "none" && "rounded-none",
          radius === "sm" && "rounded-sm",
          radius === "md" && "rounded-md",
          radius === "lg" && "rounded-lg",
          radius === "xl" && "rounded-xl",
          className,
        )}
        {...props}
      >
        {loading && (
          <div role="status" className="flex items-center justify-center py-8 gap-3 text-sm text-muted-foreground animate-poyraz-fade-in">
            {loadingContent ?? <><div className="size-4 rounded-full border-2 border-primary/25 border-t-primary animate-poyraz-spin" />Rendering diagram…</>}
          </div>
        )}

        {error && !loading && (
          <div className="py-6 text-center animate-poyraz-fade-in">
            <div role="alert" className="inline-block rounded-md border border-invalid-border bg-invalid-muted px-3 py-2 text-xs text-destructive-muted-foreground font-mono">
              {errorContent ? errorContent(error) : error}
            </div>
          </div>
        )}

        {svg && !loading && (
          <div
            className="mermaid-output flex justify-center animate-poyraz-scale-in motion-reduce:animate-none [&_svg]:max-w-full"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        )}

        {/* Override some SVG styles to match brutalist theme */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
${diagramStyle === "technical" ? `.mermaid-output .node rect,
.mermaid-output .node circle,
.mermaid-output .node ellipse,
.mermaid-output .node polygon {
  stroke-dasharray: 6, 3;
  stroke-width: 2px;
}` : ""}
.mermaid-output .cluster rect {
  ${diagramStyle === "technical" ? "stroke-dasharray: 8, 4;" : ""}
  stroke-width: 1.5px;
  rx: ${diagramStyle === "minimal" ? "2" : "10"};
  ry: ${diagramStyle === "minimal" ? "2" : "10"};
}
.mermaid-output .edgePath .path {
  stroke-width: 1.5px;
}
.mermaid-output text, .mermaid-output .label { font-family: var(--poyraz-font-primary), ui-sans-serif, system-ui, sans-serif !important; }
`,
          }}
        />
      </div>
    );
  },
);
Mermaid.displayName = "Mermaid";

export { Mermaid };
