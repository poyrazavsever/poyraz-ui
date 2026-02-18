"use client";

import { Button } from "@/components/ui/atoms/button";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function ButtonPage() {
  return (
    <ComponentPage
      name="Button"
      description="The primary interactive element. Supports 6 variants and 4 sizes with the signature brutalist dashed-border style."
      importCode={`import { Button } from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="Variants"
        description="Six visual variants for different contexts."
        code={`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
      >
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </DemoSection>

      <DemoSection
        title="Sizes"
        description="Four sizes: sm, default, lg, and icon."
        code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔔</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">🔔</Button>
        </div>
      </DemoSection>

      <DemoSection
        title="Disabled"
        description="Buttons can be disabled to prevent interaction."
        code={`<Button disabled>Disabled</Button>
<Button variant="outline" disabled>Disabled Outline</Button>`}
      >
        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
        </div>
      </DemoSection>

      <DemoSection
        title="As Child"
        description="Use asChild to render as a different element (e.g. a link)."
        code={`<Button asChild>
  <a href="/docs">Go to Docs</a>
</Button>`}
      >
        <Button asChild>
          <a href="/docs">Go to Docs</a>
        </Button>
      </DemoSection>
    </ComponentPage>
  );
}
