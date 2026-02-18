"use client";

import { Skeleton } from "@/components/ui/atoms/skeleton";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function SkeletonPage() {
  return (
    <ComponentPage
      name="Skeleton"
      description="Loading placeholder with pulsing animation. Use to indicate content is being loaded."
      importCode={`import { Skeleton } from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="Basic"
        description="Simple skeleton shapes."
        code={`<Skeleton className="h-4 w-3/4" />
<Skeleton className="h-4 w-1/2" />
<Skeleton className="h-12 w-12" />`}
      >
        <div className="space-y-3">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </DemoSection>

      <DemoSection
        title="Card Placeholder"
        description="Composing skeletons to mimic a card layout."
        code={`<div className="flex items-center gap-4">
  <Skeleton className="h-12 w-12" />
  <div className="space-y-2 flex-1">
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-1/2" />
  </div>
</div>`}
      >
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </DemoSection>

      <DemoSection
        title="Full Card Skeleton"
        description="A complete card loading state."
        code={`<div className="border-2 border-dashed border-slate-200 p-6 space-y-4 max-w-sm">
  <Skeleton className="h-40 w-full" />
  <Skeleton className="h-5 w-2/3" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-4/5" />
  <Skeleton className="h-9 w-24" />
</div>`}
      >
        <div className="border-2 border-dashed border-slate-200 p-6 space-y-4 max-w-sm bg-white">
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-9 w-24" />
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
