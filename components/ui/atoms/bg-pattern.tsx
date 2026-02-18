import * as React from "react";
import { cn } from "@/components/ui/atoms/typography";

/* ================================================================== */
/*  BG PATTERNS — Soft, minimal, customizable background patterns      */
/* ================================================================== */

export interface BgPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Pattern color — any valid CSS color */
  color?: string;
  /** Pattern opacity (0-1) */
  opacity?: number;
  /** Pattern size / spacing in px */
  size?: number;
  /** Whether the pattern covers its parent absolutely */
  overlay?: boolean;
}

const baseClass = "pointer-events-none select-none";
const overlayClass = "absolute inset-0 z-0";

function patternWrapper(
  overlay: boolean | undefined,
  className: string | undefined,
) {
  return cn(baseClass, overlay && overlayClass, className);
}

/* ── 1. Dots ──────────────────────────────────────────────────────── */

export const PatternDots = React.forwardRef<HTMLDivElement, BgPatternProps>(
  (
    {
      color = "currentColor",
      opacity = 0.08,
      size = 24,
      overlay,
      className,
      style,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={patternWrapper(overlay, className)}
      style={{
        backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
        opacity,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  ),
);
PatternDots.displayName = "PatternDots";

/* ── 2. Grid / Boxes ──────────────────────────────────────────────── */

export const PatternGrid = React.forwardRef<HTMLDivElement, BgPatternProps>(
  (
    {
      color = "currentColor",
      opacity = 0.06,
      size = 40,
      overlay,
      className,
      style,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={patternWrapper(overlay, className)}
      style={{
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
        opacity,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  ),
);
PatternGrid.displayName = "PatternGrid";

/* ── 3. Lines (Horizontal) ────────────────────────────────────────── */

export const PatternLines = React.forwardRef<HTMLDivElement, BgPatternProps>(
  (
    {
      color = "currentColor",
      opacity = 0.06,
      size = 20,
      overlay,
      className,
      style,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={patternWrapper(overlay, className)}
      style={{
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px)`,
        backgroundSize: `100% ${size}px`,
        opacity,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  ),
);
PatternLines.displayName = "PatternLines";

/* ── 4. Diagonal Lines ────────────────────────────────────────────── */

export const PatternDiagonal = React.forwardRef<HTMLDivElement, BgPatternProps>(
  (
    {
      color = "currentColor",
      opacity = 0.06,
      size = 16,
      overlay,
      className,
      style,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={patternWrapper(overlay, className)}
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent ${size - 1}px,
          ${color} ${size - 1}px,
          ${color} ${size}px
        )`,
        opacity,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  ),
);
PatternDiagonal.displayName = "PatternDiagonal";

/* ── 5. Cross / Plus ──────────────────────────────────────────────── */

export const PatternCross = React.forwardRef<HTMLDivElement, BgPatternProps>(
  (
    {
      color = "currentColor",
      opacity = 0.07,
      size = 32,
      overlay,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const half = size / 2;
    return (
      <div
        ref={ref}
        className={patternWrapper(overlay, className)}
        style={{
          backgroundImage: `
            linear-gradient(${color} 1px, transparent 1px),
            linear-gradient(90deg, ${color} 1px, transparent 1px)
          `,
          backgroundSize: `${size}px ${size}px`,
          backgroundPosition: `${half}px ${half}px`,
          opacity,
          ...style,
        }}
        aria-hidden="true"
        {...props}
      />
    );
  },
);
PatternCross.displayName = "PatternCross";

/* ── 6. Checkerboard ──────────────────────────────────────────────── */

export const PatternCheckerboard = React.forwardRef<
  HTMLDivElement,
  BgPatternProps
>(
  (
    {
      color = "currentColor",
      opacity = 0.04,
      size = 32,
      overlay,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const half = size / 2;
    return (
      <div
        ref={ref}
        className={patternWrapper(overlay, className)}
        style={{
          backgroundImage: `
            linear-gradient(45deg, ${color} 25%, transparent 25%, transparent 75%, ${color} 75%),
            linear-gradient(45deg, ${color} 25%, transparent 25%, transparent 75%, ${color} 75%)
          `,
          backgroundSize: `${size}px ${size}px`,
          backgroundPosition: `0 0, ${half}px ${half}px`,
          opacity,
          ...style,
        }}
        aria-hidden="true"
        {...props}
      />
    );
  },
);
PatternCheckerboard.displayName = "PatternCheckerboard";

/* ── 7. Diamond ───────────────────────────────────────────────────── */

export const PatternDiamond = React.forwardRef<HTMLDivElement, BgPatternProps>(
  (
    {
      color = "currentColor",
      opacity = 0.05,
      size = 28,
      overlay,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const half = size / 2;
    return (
      <div
        ref={ref}
        className={patternWrapper(overlay, className)}
        style={{
          backgroundImage: `
            linear-gradient(45deg, ${color} 12.5%, transparent 12.5%, transparent 87.5%, ${color} 87.5%),
            linear-gradient(135deg, ${color} 12.5%, transparent 12.5%, transparent 87.5%, ${color} 87.5%)
          `,
          backgroundSize: `${size}px ${size}px`,
          backgroundPosition: `0 0, ${half}px 0`,
          opacity,
          ...style,
        }}
        aria-hidden="true"
        {...props}
      />
    );
  },
);
PatternDiamond.displayName = "PatternDiamond";

/* ── 8. Zigzag ────────────────────────────────────────────────────── */

export const PatternZigzag = React.forwardRef<HTMLDivElement, BgPatternProps>(
  (
    {
      color = "currentColor",
      opacity = 0.06,
      size = 20,
      overlay,
      className,
      style,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={patternWrapper(overlay, className)}
      style={{
        backgroundImage: `
          linear-gradient(135deg, ${color} 25%, transparent 25%),
          linear-gradient(225deg, ${color} 25%, transparent 25%),
          linear-gradient(315deg, ${color} 25%, transparent 25%),
          linear-gradient(45deg, ${color} 25%, transparent 25%)
        `,
        backgroundSize: `${size}px ${size / 2}px`,
        backgroundPosition: `0 0, ${size / 2}px 0, ${size / 2}px -${size / 4}px, 0 ${size / 4}px`,
        opacity,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  ),
);
PatternZigzag.displayName = "PatternZigzag";

/* ── 9. Dashed Grid ───────────────────────────────────────────────── */

export const PatternDashedGrid = React.forwardRef<
  HTMLDivElement,
  BgPatternProps
>(
  (
    {
      color = "currentColor",
      opacity = 0.08,
      size = 48,
      overlay,
      className,
      style,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={patternWrapper(overlay, className)}
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 4px,
            ${color} 4px,
            ${color} 5px,
            transparent 5px,
            transparent ${size}px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 4px,
            ${color} 4px,
            ${color} 5px,
            transparent 5px,
            transparent ${size}px
          )
        `,
        opacity,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  ),
);
PatternDashedGrid.displayName = "PatternDashedGrid";

/* ── 10. Radial Gradient ──────────────────────────────────────────── */

export interface PatternRadialProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Center color */
  from?: string;
  /** Edge color */
  to?: string;
  /** Overall opacity */
  opacity?: number;
  /** Cover parent absolutely */
  overlay?: boolean;
}

export const PatternRadial = React.forwardRef<
  HTMLDivElement,
  PatternRadialProps
>(
  (
    {
      from = "rgba(220,38,38,0.08)",
      to = "transparent",
      opacity = 1,
      overlay,
      className,
      style,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={patternWrapper(overlay, className)}
      style={{
        backgroundImage: `radial-gradient(ellipse at center, ${from}, ${to})`,
        opacity,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  ),
);
PatternRadial.displayName = "PatternRadial";
