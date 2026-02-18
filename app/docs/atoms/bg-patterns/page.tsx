"use client";

import {
  PatternDots,
  PatternGrid,
  PatternLines,
  PatternDiagonal,
  PatternCross,
  PatternCheckerboard,
  PatternDiamond,
  PatternZigzag,
  PatternDashedGrid,
  PatternRadial,
} from "@/components/ui/atoms/bg-pattern";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

function PatternPreview({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="relative h-48 border-2 border-dashed border-slate-200 bg-white overflow-hidden">
      {children}
      <div className="absolute bottom-3 left-3 z-10 text-xs font-semibold uppercase tracking-wide text-slate-500 bg-white/80 px-2 py-1">
        {label}
      </div>
    </div>
  );
}

export default function BgPatternsPage() {
  return (
    <ComponentPage
      name="BG Patterns"
      description="Soft, minimal, customizable background patterns. Use as absolute overlays or inline background elements. All patterns accept color, opacity, and size props."
      importCode={`import {
  PatternDots,
  PatternGrid,
  PatternLines,
  PatternDiagonal,
  PatternCross,
  PatternCheckerboard,
  PatternDiamond,
  PatternZigzag,
  PatternDashedGrid,
  PatternRadial,
} from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="All Patterns"
        description="10 pattern variants — each rendered as an overlay on a container. Customize color, opacity, and size."
        code={`{/* Overlay usage */}
<div className="relative h-48 overflow-hidden">
  <PatternDots overlay size={24} opacity={0.1} color="#334155" className="w-full h-full" />
  <div className="relative z-10">Your content</div>
</div>

{/* Props — shared across all patterns */}
// color: string    — any CSS color (default: "currentColor")
// opacity: number  — 0-1 (default varies per pattern)
// size: number     — spacing in px (default varies per pattern)
// overlay: boolean — position absolute inset-0`}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PatternPreview label="Dots">
            <PatternDots
              overlay
              size={24}
              opacity={0.12}
              color="#334155"
              className="w-full h-full"
            />
          </PatternPreview>

          <PatternPreview label="Grid">
            <PatternGrid
              overlay
              size={36}
              opacity={0.1}
              color="#334155"
              className="w-full h-full"
            />
          </PatternPreview>

          <PatternPreview label="Lines">
            <PatternLines
              overlay
              size={18}
              opacity={0.1}
              color="#334155"
              className="w-full h-full"
            />
          </PatternPreview>

          <PatternPreview label="Diagonal">
            <PatternDiagonal
              overlay
              size={14}
              opacity={0.1}
              color="#334155"
              className="w-full h-full"
            />
          </PatternPreview>

          <PatternPreview label="Cross">
            <PatternCross
              overlay
              size={28}
              opacity={0.1}
              color="#334155"
              className="w-full h-full"
            />
          </PatternPreview>

          <PatternPreview label="Checkerboard">
            <PatternCheckerboard
              overlay
              size={28}
              opacity={0.08}
              color="#334155"
              className="w-full h-full"
            />
          </PatternPreview>

          <PatternPreview label="Diamond">
            <PatternDiamond
              overlay
              size={24}
              opacity={0.08}
              color="#334155"
              className="w-full h-full"
            />
          </PatternPreview>

          <PatternPreview label="Zigzag">
            <PatternZigzag
              overlay
              size={18}
              opacity={0.1}
              color="#334155"
              className="w-full h-full"
            />
          </PatternPreview>

          <PatternPreview label="Dashed Grid">
            <PatternDashedGrid
              overlay
              size={40}
              opacity={0.1}
              color="#334155"
              className="w-full h-full"
            />
          </PatternPreview>

          <PatternPreview label="Radial">
            <PatternRadial
              overlay
              from="rgba(220,38,38,0.12)"
              to="transparent"
              className="w-full h-full"
            />
          </PatternPreview>
        </div>
      </DemoSection>

      <DemoSection
        title="Custom Colors"
        description="Patterns work with any CSS color — match your brand or theme."
        code={`<PatternDots overlay size={20} opacity={0.15} color="#dc2626" className="w-full h-full" />
<PatternGrid overlay size={32} opacity={0.1} color="#2563eb" className="w-full h-full" />
<PatternDiagonal overlay size={12} opacity={0.12} color="#16a34a" className="w-full h-full" />`}
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <PatternPreview label="Red Dots">
            <PatternDots
              overlay
              size={20}
              opacity={0.15}
              color="#dc2626"
              className="w-full h-full"
            />
          </PatternPreview>
          <PatternPreview label="Blue Grid">
            <PatternGrid
              overlay
              size={32}
              opacity={0.1}
              color="#2563eb"
              className="w-full h-full"
            />
          </PatternPreview>
          <PatternPreview label="Green Diagonal">
            <PatternDiagonal
              overlay
              size={12}
              opacity={0.12}
              color="#16a34a"
              className="w-full h-full"
            />
          </PatternPreview>
        </div>
      </DemoSection>

      <DemoSection
        title="Usage Example"
        description="Overlay a pattern on a hero section."
        code={`<section className="relative py-20 overflow-hidden">
  <PatternDots
    overlay
    size={28}
    opacity={0.12}
    color="#334155"
    className="w-full h-full"
  />
  <div className="relative z-10 text-center">
    <h1>Your Hero Title</h1>
    <p>Content sits above the pattern.</p>
  </div>
</section>`}
      >
        <div className="relative h-48 bg-white border-2 border-dashed border-slate-200 overflow-hidden flex items-center justify-center">
          <PatternDots
            overlay
            size={28}
            opacity={0.12}
            color="#334155"
            className="w-full h-full"
          />
          <div className="relative z-10 text-center">
            <h2 className="text-lg font-bold">Hero Title</h2>
            <p className="text-sm text-slate-500">Content above the pattern</p>
          </div>
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
