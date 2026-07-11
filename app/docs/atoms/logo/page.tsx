"use client";

import { ComponentPage, DemoSection } from "@/components/docs/code-block";
import { Logo } from "@/components/ui/atoms/logo";

export default function LogoPage() {
  return (
    <ComponentPage name="Logo" description="A radius-aware logo primitive with optional hover or looping shine." importCode={`import { Logo } from "@/components/ui/atoms/logo";`}>
      <DemoSection title="Shine effects" code={`<Logo effect="none" />\n<Logo effect="shine" />\n<Logo effect="shine-loop" />`}>
        <div className="flex items-center gap-8 rounded-2xl bg-gradient-to-br from-red-100 via-white to-slate-200 p-8 dark:from-red-950 dark:via-slate-900 dark:to-slate-950">
          <Logo effect="none" width={56} height={56} />
          <Logo effect="shine" width={56} height={56} />
          <Logo effect="shine-loop" width={56} height={56} />
        </div>
      </DemoSection>
      <DemoSection title="Radius" code={`<Logo radius="none" />\n<Logo radius="md" />\n<Logo radius="full" />`}>
        <div className="flex items-center gap-6"><Logo radius="none" /><Logo radius="md" /><Logo radius="full" /></div>
      </DemoSection>
    </ComponentPage>
  );
}
