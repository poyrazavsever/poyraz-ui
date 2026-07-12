"use client";

import { Textarea } from "@/components/ui/atoms/textarea";
import { Label } from "@/components/ui/atoms/label";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function TextareaPage() {
  return (
    <ComponentPage
      name="Textarea"
      description="Multi-line field with default, soft and glass surfaces, semantic invalid state and customizable radius."
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
        title="Variants"
        code={`<Textarea variant="soft" />\n<Textarea variant="glass" radius="xl" />`}
      >
        <div className="grid max-w-lg gap-3 rounded-2xl bg-gradient-to-br from-red-100 to-slate-200 p-5 dark:from-red-950 dark:to-slate-900">
          <Textarea variant="soft" placeholder="Soft textarea" />
          <Textarea variant="glass" radius="xl" placeholder="Glass textarea" />
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

      <DemoSection title="Disabled" code={`<Textarea placeholder="Cannot type here" disabled />`}>
        <div className="max-w-sm">
          <Textarea placeholder="Cannot type here" disabled />
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
