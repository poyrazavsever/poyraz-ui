"use client";

import { Separator } from "@/components/ui/atoms/separator";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function SeparatorPage() {
  return (
    <ComponentPage
      name="Separator"
      description="Visual divider between content sections. Supports horizontal and vertical orientation."
      importCode={`import { Separator } from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="Horizontal"
        description="Default horizontal separator."
        code={`<p>Content above</p>
<Separator />
<p>Content below</p>`}
      >
        <div className="space-y-3">
          <p className="text-sm">Content above</p>
          <Separator />
          <p className="text-sm">Content below</p>
        </div>
      </DemoSection>

      <DemoSection
        title="Vertical"
        description="Use orientation='vertical' for side-by-side layouts."
        code={`<div className="flex items-center gap-4 h-6">
  <span>Home</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
  <Separator orientation="vertical" />
  <span>Blog</span>
</div>`}
      >
        <div className="flex items-center gap-4 h-6">
          <span className="text-sm">Home</span>
          <Separator orientation="vertical" />
          <span className="text-sm">Docs</span>
          <Separator orientation="vertical" />
          <span className="text-sm">Blog</span>
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
