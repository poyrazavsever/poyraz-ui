"use client";

import { Check, Mail, Search } from "lucide-react";

import { ComponentPage, DemoSection } from "@/components/docs/code-block";
import { Input, InputGroup, InputGroupAddon } from "@/components/ui/atoms/input";
import { Label } from "@/components/ui/atoms/label";

export default function InputPage() {
  return (
    <ComponentPage
      name="Input"
      description="A semantic field primitive with default, soft and glass surfaces. InputGroup gives icons, prefixes and actions one shared focus ring."
      importCode={`import { Input, InputGroup, InputGroupAddon } from "@/components/ui/atoms/input";`}
    >
      <DemoSection
        title="Surface variants"
        description="Variant and radius are independent and consumer className remains the final override."
        code={`<Input variant="default" placeholder="Default" />
<Input variant="soft" radius="lg" placeholder="Soft" />
<Input variant="glass" radius="xl" placeholder="Glass" />`}
      >
        <div className="grid max-w-xl gap-3 rounded-2xl bg-gradient-to-br from-red-100/80 via-white to-slate-200 p-6 dark:from-red-950/50 dark:via-slate-950 dark:to-slate-900">
          <Input variant="default" placeholder="Default field" />
          <Input variant="soft" radius="lg" placeholder="Soft field" />
          <Input variant="glass" radius="xl" placeholder="Glass field" />
        </div>
      </DemoSection>

      <DemoSection
        title="Single-focus InputGroup"
        description="The icon and suffix belong to the same field surface. Only the group draws focus; the editable input never creates a second ring."
        code={`<InputGroup variant="glass" radius="xl">
  <InputGroupAddon position="start"><Search /></InputGroupAddon>
  <Input placeholder="Search everything..." />
  <InputGroupAddon position="end">⌘K</InputGroupAddon>
</InputGroup>`}
      >
        <div className="max-w-md space-y-4">
          <InputGroup variant="glass" radius="xl">
            <InputGroupAddon position="start" className="border-0 pr-0"><Search /></InputGroupAddon>
            <Input aria-label="Search" placeholder="Search everything..." />
            <InputGroupAddon position="end">⌘K</InputGroupAddon>
          </InputGroup>
          <InputGroup variant="soft" radius="lg">
            <InputGroupAddon position="start" className="border-0 pr-0"><Mail /></InputGroupAddon>
            <Input aria-label="Email" type="email" placeholder="name@example.com" />
            <InputGroupAddon position="end" className="text-success-icon"><Check /></InputGroupAddon>
          </InputGroup>
        </div>
      </DemoSection>

      <DemoSection title="Invalid and disabled" code={`<Input aria-invalid placeholder="Invalid value" />\n<Input disabled value="Disabled" readOnly />`}>
        <div className="max-w-sm space-y-4">
          <div className="space-y-2"><Label htmlFor="invalid-email">Email</Label><Input id="invalid-email" aria-invalid placeholder="Invalid value" /><p className="text-xs text-destructive">Enter a valid email address.</p></div>
          <Input disabled value="Disabled" readOnly />
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
