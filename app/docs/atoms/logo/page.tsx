"use client";

import { Logo } from "@/components/ui/atoms/logo";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function LogoPage() {
  return (
    <ComponentPage
      name="Logo"
      description="Branded logo component with the signature red offset shadow. Renders as a link when href is provided."
      importCode={`import { Logo } from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="Default"
        description="Logo with the brutalist red offset shadow."
        code={`<Logo width={40} height={40} />`}
      >
        <div className="flex items-center gap-6">
          <Logo width={40} height={40} />
        </div>
      </DemoSection>

      <DemoSection
        title="Sizes"
        description="Adjust dimensions via width and height props."
        code={`<Logo width={32} height={32} />
<Logo width={48} height={48} />
<Logo width={64} height={64} />`}
      >
        <div className="flex items-center gap-6">
          <Logo width={32} height={32} />
          <Logo width={48} height={48} />
          <Logo width={64} height={64} />
        </div>
      </DemoSection>

      <DemoSection
        title="As Link"
        description="Wrap with href to render as a clickable link."
        code={`<Logo width={40} height={40} href="/" />`}
      >
        <Logo width={40} height={40} href="/" />
      </DemoSection>
    </ComponentPage>
  );
}
