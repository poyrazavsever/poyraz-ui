import { BrandHeroBlock } from "@/components/ui/blocks/phase8/brand-hero-block";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";
import { BlockPreview } from "@/components/docs/block-preview";

const code = `import { BrandHeroBlock } from "@/components/ui/blocks/brand-hero-block";

export default function HomePage() {
  return <BrandHeroBlock />;
}`;

export default function HeroTemplatePage() {
  return (
    <ComponentPage name="Brand Hero" description="A restrained product hero that uses brand red as a controlled accent and remains compact in embedded previews." importCode={`import { BrandHeroBlock } from "@/components/ui/blocks/brand-hero-block";`}>
      <DemoSection title="Registry-First Hero" description="Actions and feature anatomy reflow using container queries, without viewport-specific assumptions." code={code}><BlockPreview><BrandHeroBlock /></BlockPreview></DemoSection>
    </ComponentPage>
  );
}
