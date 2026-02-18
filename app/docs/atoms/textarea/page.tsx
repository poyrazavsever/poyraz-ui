"use client";

import { Textarea } from "poyraz-ui/atoms";
import { Label } from "poyraz-ui/atoms";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function TextareaPage() {
  return (
    <ComponentPage
      name="Textarea"
      description="Multi-line text input with the brutalist dashed-border style. Extends all native textarea attributes."
      importCode={`import { Textarea } from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="Default"
        description="Basic textarea with placeholder."
        code={`<Textarea placeholder="Write something bold..." />`}
      >
        <div className="max-w-sm">
          <Textarea placeholder="Write something bold..." />
        </div>
      </DemoSection>

      <DemoSection
        title="With Label"
        description="Pair with Label for accessible forms."
        code={`<Label htmlFor="message">Message</Label>
<Textarea id="message" placeholder="Write your message..." rows={4} />`}
      >
        <div className="max-w-sm space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Write your message..." rows={4} />
        </div>
      </DemoSection>

      <DemoSection
        title="Disabled"
        code={`<Textarea placeholder="Cannot type here" disabled />`}
      >
        <div className="max-w-sm">
          <Textarea placeholder="Cannot type here" disabled />
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
