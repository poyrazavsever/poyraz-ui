"use client";

import { Switch } from "@/components/ui/atoms/switch";
import { Label } from "@/components/ui/atoms/label";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function SwitchPage() {
  return (
    <ComponentPage
      name="Switch"
      description="An on/off toggle control built on Radix Switch. Perfect for boolean settings."
      importCode={`import { Switch } from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="Default"
        description="Basic switch with label."
        code={`<div className="flex items-center gap-3">
  <Switch id="airplane" />
  <Label htmlFor="airplane">Airplane Mode</Label>
</div>`}
      >
        <div className="flex items-center gap-3">
          <Switch id="airplane-demo" />
          <Label htmlFor="airplane-demo">Airplane Mode</Label>
        </div>
      </DemoSection>

      <DemoSection
        title="Checked by Default"
        code={`<Switch id="notifications" defaultChecked />`}
      >
        <div className="flex items-center gap-3">
          <Switch id="notif-demo" defaultChecked />
          <Label htmlFor="notif-demo">Notifications</Label>
        </div>
      </DemoSection>

      <DemoSection
        title="Disabled"
        code={`<Switch disabled />
<Switch disabled defaultChecked />`}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Switch id="sw-d1" disabled />
            <Label htmlFor="sw-d1" className="opacity-50">
              Disabled off
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="sw-d2" disabled defaultChecked />
            <Label htmlFor="sw-d2" className="opacity-50">
              Disabled on
            </Label>
          </div>
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
