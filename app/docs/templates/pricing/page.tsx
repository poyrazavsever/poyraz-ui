import { PricingBlock } from "@/components/ui/blocks/phase8/pricing-block";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";
import { BlockPreview } from "@/components/docs/block-preview";

const code = `import { PricingBlock, pricingPlans } from "@/components/ui/blocks/pricing-block";

export default function PricingPage() {
  return <PricingBlock plans={pricingPlans} />;
}`;

export default function PricingTemplatePage() {
  return (
    <ComponentPage name="Pricing" description="A three-tier pricing block with semantic accents and data separated from rendering." importCode={`import { PricingBlock } from "@/components/ui/blocks/pricing-block";`}>
      <DemoSection title="Responsive Plans" description="Cards stack in a narrow docs panel and become three columns only when their own container has enough room." code={code}><BlockPreview><PricingBlock /></BlockPreview></DemoSection>
    </ComponentPage>
  );
}
