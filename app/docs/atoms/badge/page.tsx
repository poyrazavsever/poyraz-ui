"use client";

import { Badge } from "@/components/ui/atoms/badge";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function BadgePage() {
  return (
    <ComponentPage
      name="Badge"
      description="Small status indicators and labels. Supports 4 variants with the brutalist square, no-rounded design."
      importCode={`import { Badge } from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="Variants"
        description="Four visual variants for different contexts."
        code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}
      >
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </DemoSection>

      <DemoSection
        title="Use Cases"
        description="Badges for status indicators, counts, and labels."
        code={`<Badge variant="outline" className="text-xs">19 components</Badge>
<Badge variant="secondary">New</Badge>
<Badge variant="destructive">Deprecated</Badge>`}
      >
        <div className="flex flex-wrap gap-3 items-center">
          <Badge variant="outline" className="text-xs">
            19 components
          </Badge>
          <Badge variant="secondary">New</Badge>
          <Badge variant="destructive">Deprecated</Badge>
          <Badge>v2.0</Badge>
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
