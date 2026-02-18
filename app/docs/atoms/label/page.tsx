"use client";

import { Label } from "@/components/ui/atoms/label";
import { Input } from "@/components/ui/atoms/input";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function LabelPage() {
  return (
    <ComponentPage
      name="Label"
      description="Accessible form label built on Radix Label. Automatically associates with inputs via htmlFor."
      importCode={`import { Label } from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="Default"
        description="Basic label paired with an input."
        code={`<Label htmlFor="username">Username</Label>
<Input id="username" placeholder="Enter username" />`}
      >
        <div className="max-w-sm space-y-2">
          <Label htmlFor="label-username">Username</Label>
          <Input id="label-username" placeholder="Enter username" />
        </div>
      </DemoSection>

      <DemoSection
        title="Required"
        description="Indicate required fields with a visual marker."
        code={`<Label htmlFor="email">
  Email <span className="text-red-600">*</span>
</Label>
<Input id="email" placeholder="hello@example.com" />`}
      >
        <div className="max-w-sm space-y-2">
          <Label htmlFor="label-email">
            Email <span className="text-red-600">*</span>
          </Label>
          <Input id="label-email" placeholder="hello@example.com" />
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
