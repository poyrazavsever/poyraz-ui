"use client";

import { Checkbox } from "@/components/ui/atoms/checkbox";
import { Label } from "@/components/ui/atoms/label";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function CheckboxPage() {
  return (
    <ComponentPage
      name="Checkbox"
      description="A boolean toggle control built on Radix Checkbox with the brutalist dashed-border square style."
      importCode={`import { Checkbox } from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="Default"
        description="Basic checkbox with a label."
        code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
      >
        <div className="flex items-center gap-2">
          <Checkbox id="terms-demo" />
          <Label htmlFor="terms-demo">Accept terms and conditions</Label>
        </div>
      </DemoSection>

      <DemoSection
        title="Checked by Default"
        code={`<Checkbox id="newsletter" defaultChecked />`}
      >
        <div className="flex items-center gap-2">
          <Checkbox id="newsletter-demo" defaultChecked />
          <Label htmlFor="newsletter-demo">Subscribe to newsletter</Label>
        </div>
      </DemoSection>

      <DemoSection
        title="Disabled"
        code={`<Checkbox disabled />
<Checkbox disabled defaultChecked />`}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox id="d1" disabled />
            <Label htmlFor="d1" className="opacity-50">
              Disabled unchecked
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="d2" disabled defaultChecked />
            <Label htmlFor="d2" className="opacity-50">
              Disabled checked
            </Label>
          </div>
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
