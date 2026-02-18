"use client";

import { Input } from "poyraz-ui/atoms";
import { Label } from "poyraz-ui/atoms";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function InputPage() {
  return (
    <ComponentPage
      name="Input"
      description="Standard text input with the signature dashed-border brutalist styling. Extends all native input attributes."
      importCode={`import { Input } from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="Default"
        description="Basic text input with placeholder."
        code={`<Input placeholder="hello@example.com" />`}
      >
        <div className="max-w-sm">
          <Input placeholder="hello@example.com" />
        </div>
      </DemoSection>

      <DemoSection
        title="With Label"
        description="Pair with the Label component for accessible forms."
        code={`<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="hello@example.com" />`}
      >
        <div className="max-w-sm space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="hello@example.com" />
        </div>
      </DemoSection>

      <DemoSection
        title="Types"
        description="Supports all native HTML input types."
        code={`<Input type="text" placeholder="Text" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Number" />
<Input type="date" />`}
      >
        <div className="max-w-sm space-y-3">
          <Input type="text" placeholder="Text" />
          <Input type="password" placeholder="Password" />
          <Input type="number" placeholder="Number" />
          <Input type="date" />
        </div>
      </DemoSection>

      <DemoSection
        title="Disabled"
        description="Disabled state prevents interaction."
        code={`<Input placeholder="Cannot type here" disabled />`}
      >
        <div className="max-w-sm">
          <Input placeholder="Cannot type here" disabled />
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
