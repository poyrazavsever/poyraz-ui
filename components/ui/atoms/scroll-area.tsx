"use client";

import * as React from "react";
import { cn } from "@/components/ui/atoms/typography";

/* ================================================================== */
/*  SCROLL AREA — Custom dashed scrollbar wrapper                      */
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
 * Brutalist-themed scroll area with a dashed-border scrollbar track
 * and a dashed-outline thumb.
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
  scrollbar-color: #94a3b8 transparent;
}

/* ── Webkit (Chrome, Safari, Edge) ───────────────── */
.poyraz-scroll-area::-webkit-scrollbar {
  width: var(--sb-size, 10px);
  height: var(--sb-size, 10px);
}

.poyraz-scroll-area::-webkit-scrollbar-track {
  background: repeating-linear-gradient(
    180deg,
    transparent 0px,
    transparent 3px,
    #e2e8f0 3px,
    #e2e8f0 4px
  );
  border-left: 1px dashed #cbd5e1;
}

.poyraz-scroll-area::-webkit-scrollbar-track:horizontal {
  background: repeating-linear-gradient(
    90deg,
    transparent 0px,
    transparent 3px,
    #e2e8f0 3px,
    #e2e8f0 4px
  );
  border-left: none;
  border-top: 1px dashed #cbd5e1;
}

.poyraz-scroll-area::-webkit-scrollbar-thumb {
  background: #94a3b8;
  border: 1px dashed #475569;
  min-height: 32px;
}

.poyraz-scroll-area::-webkit-scrollbar-thumb:hover {
  background: #64748b;
  border-color: #334155;
}

.poyraz-scroll-area::-webkit-scrollbar-thumb:active {
  background: #475569;
}

.poyraz-scroll-area::-webkit-scrollbar-corner {
  background: transparent;
  border: 1px dashed #e2e8f0;
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
