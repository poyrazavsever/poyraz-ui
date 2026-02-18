"use client";

import * as React from "react";
import { ScrollArea } from "@/components/ui/atoms/scroll-area";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

function VerticalDemo() {
  return (
    <ScrollArea
      maxHeight={200}
      className="w-full max-w-sm border-2 border-dashed border-slate-200 bg-white p-4"
    >
      {Array.from({ length: 30 }, (_, i) => (
        <div
          key={i}
          className="py-2 border-b border-dashed border-slate-100 text-sm text-slate-700"
        >
          Item {i + 1} — Scrollable content line
        </div>
      ))}
    </ScrollArea>
  );
}

function HorizontalDemo() {
  return (
    <ScrollArea
      maxHeight="auto"
      orientation="horizontal"
      className="w-full max-w-sm border-2 border-dashed border-slate-200 bg-white p-4"
    >
      <div className="flex gap-3" style={{ width: "800px" }}>
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="shrink-0 w-24 h-24 border-2 border-dashed border-slate-300 flex items-center justify-center text-xs font-bold text-slate-500"
          >
            {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

function SizeDemo() {
  const sizes = ["sm", "md", "lg"] as const;
  return (
    <div className="flex gap-4 flex-wrap">
      {sizes.map((size) => (
        <ScrollArea
          key={size}
          maxHeight={150}
          scrollbarSize={size}
          className="w-48 border-2 border-dashed border-slate-200 bg-white p-3"
        >
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">
            {size}
          </div>
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="py-1 text-xs text-slate-600">
              Line {i + 1}
            </div>
          ))}
        </ScrollArea>
      ))}
    </div>
  );
}

export default function ScrollAreaPage() {
  return (
    <ComponentPage
      name="Scroll Area"
      description="A styled scroll container with a brutalist dashed scrollbar. Supports vertical, horizontal, and both orientations with three size presets."
      importCode={`import { ScrollArea } from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="Vertical"
        description="Vertical scrollbar with dashed track."
        code={`<ScrollArea maxHeight={200} className="border-2 border-dashed border-slate-200 p-4">
  {items.map((item) => (
    <div key={item}>{item}</div>
  ))}
</ScrollArea>`}
      >
        <VerticalDemo />
      </DemoSection>

      <DemoSection
        title="Horizontal"
        description="Horizontal scrollbar for wide content."
        code={`<ScrollArea orientation="horizontal" className="border-2 border-dashed border-slate-200 p-4">
  <div className="flex gap-3" style={{ width: "800px" }}>
    {boxes.map((box) => (
      <div key={box} className="w-24 h-24" />
    ))}
  </div>
</ScrollArea>`}
      >
        <HorizontalDemo />
      </DemoSection>

      <DemoSection
        title="Scrollbar Sizes"
        description="Three size variants: sm (6px), md (10px), lg (14px)."
        code={`<ScrollArea scrollbarSize="sm" maxHeight={150}>…</ScrollArea>
<ScrollArea scrollbarSize="md" maxHeight={150}>…</ScrollArea>
<ScrollArea scrollbarSize="lg" maxHeight={150}>…</ScrollArea>`}
      >
        <SizeDemo />
      </DemoSection>
    </ComponentPage>
  );
}
