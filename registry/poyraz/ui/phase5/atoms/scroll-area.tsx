"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* ================================================================== */
/*  SCROLL AREA — Semantic, theme-aware scrollbar wrapper              */
/* ================================================================== */

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum height before scrolling kicks in */
  maxHeight?: string | number;
  /** Orientation of the scrollbar */
  orientation?: "vertical" | "horizontal" | "both";
  /** Scrollbar size: track + thumb width / height */
  scrollbarSize?: "sm" | "md" | "lg";
}

/**
 * Theme-aware scroll area with a soft scrollbar track and thumb.
 *
 * Uses pure CSS `scrollbar-*` properties (supported in Chrome 121+ / Firefox 64+)
 * with a fallback for webkit browsers.
 */
const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      className,
      children,
      maxHeight = 320,
      orientation = "vertical",
      scrollbarSize = "md",
      style,
      ...props
    },
    ref,
  ) => {
    const sizeMap = { sm: 6, md: 10, lg: 14 };
    const sz = sizeMap[scrollbarSize];

    const overflowClass =
      orientation === "horizontal"
        ? "overflow-x-auto overflow-y-hidden"
        : orientation === "both"
          ? "overflow-auto"
          : "overflow-y-auto overflow-x-hidden";

    return (
      <div
        ref={ref}
        data-slot="scroll-area"
        data-orientation={orientation}
        data-scrollbar-size={scrollbarSize}
        className={cn("poyraz-scroll-area relative", overflowClass, className)}
        style={
          {
            maxHeight:
              typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
            "--sb-size": `${sz}px`,
            ...style,
          } as React.CSSProperties
        }
        {...props}
      >
        {children}

        {/* Inline style block — scoped to this instance via the class name */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
/* ── Modern standard ─────────────────────────────── */
.poyraz-scroll-area {
  scrollbar-width: thin;
  scrollbar-color: var(--poyraz-input) transparent;
}

/* ── Webkit (Chrome, Safari, Edge) ───────────────── */
.poyraz-scroll-area::-webkit-scrollbar {
  width: var(--sb-size, 10px);
  height: var(--sb-size, 10px);
}

.poyraz-scroll-area::-webkit-scrollbar-track {
  background: var(--poyraz-surface-subtle);
}

.poyraz-scroll-area::-webkit-scrollbar-track:horizontal {
  background: var(--poyraz-surface-subtle);
}

.poyraz-scroll-area::-webkit-scrollbar-thumb {
  background: var(--poyraz-input);
  border: 2px solid var(--poyraz-surface-subtle);
  border-radius: var(--poyraz-radius-full);
  min-height: 32px;
}

.poyraz-scroll-area::-webkit-scrollbar-thumb:hover {
  background: var(--poyraz-muted-foreground);
}

.poyraz-scroll-area::-webkit-scrollbar-thumb:active {
  background: var(--poyraz-foreground);
}

.poyraz-scroll-area::-webkit-scrollbar-corner {
  background: transparent;
  border: 1px solid var(--poyraz-border);
}
`,
          }}
        />
      </div>
    );
  },
);
ScrollArea.displayName = "ScrollArea";

export { ScrollArea };
