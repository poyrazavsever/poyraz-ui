"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/atoms/radio-group";
import { Label } from "@/components/ui/atoms/label";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function RadioGroupPage() {
  return (
    <ComponentPage
      name="Radio Group"
      description="A set of mutually exclusive options built on Radix Radio Group. Only one option can be selected at a time."
      importCode={`import { RadioGroup, RadioGroupItem } from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="Default"
        description="Basic radio group with three options."
        code={`<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="r1" />
    <Label htmlFor="r1">Option One</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-2" id="r2" />
    <Label htmlFor="r2">Option Two</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-3" id="r3" />
    <Label htmlFor="r3">Option Three</Label>
  </div>
</RadioGroup>`}
      >
        <div className="max-w-sm">
          <RadioGroup defaultValue="option-1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-1" id="rg1" />
              <Label htmlFor="rg1">Option One</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="rg2" />
              <Label htmlFor="rg2">Option Two</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-3" id="rg3" />
              <Label htmlFor="rg3">Option Three</Label>
            </div>
          </RadioGroup>
        </div>
      </DemoSection>

      <DemoSection
        title="Horizontal"
        description="Radio group items laid out horizontally."
        code={`<RadioGroup defaultValue="sm" className="flex gap-4">
  <div className="flex items-center gap-1.5">
    <RadioGroupItem value="sm" id="sm" />
    <Label htmlFor="sm">Small</Label>
  </div>
  <div className="flex items-center gap-1.5">
    <RadioGroupItem value="md" id="md" />
    <Label htmlFor="md">Medium</Label>
  </div>
  <div className="flex items-center gap-1.5">
    <RadioGroupItem value="lg" id="lg" />
    <Label htmlFor="lg">Large</Label>
  </div>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="sm" className="flex gap-4">
          <div className="flex items-center gap-1.5">
            <RadioGroupItem value="sm" id="sz-sm" />
            <Label htmlFor="sz-sm">Small</Label>
          </div>
          <div className="flex items-center gap-1.5">
            <RadioGroupItem value="md" id="sz-md" />
            <Label htmlFor="sz-md">Medium</Label>
          </div>
          <div className="flex items-center gap-1.5">
            <RadioGroupItem value="lg" id="sz-lg" />
            <Label htmlFor="sz-lg">Large</Label>
          </div>
        </RadioGroup>
      </DemoSection>
    </ComponentPage>
  );
}
