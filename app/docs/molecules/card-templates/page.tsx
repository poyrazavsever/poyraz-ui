"use client";

import { BarChart3, ShoppingCart } from "lucide-react";
import { Button } from "poyraz-ui/atoms";
import { ArticleCard, ImageCard, NewsCard, PricingCard, ProductCard, StatsCard, TestimonialCard } from "poyraz-ui/molecules";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function CardTemplatesPage() {
  return (
    <ComponentPage
      name="Card Templates"
      description="Independent registry blocks built on the Card atom. Each template can be installed and customized without pulling the other templates."
      importCode={`import { ArticleCard, StatsCard, PricingCard } from "poyraz-ui/molecules";`}
    >
      <DemoSection title="Content Cards" description="Article, image and news blocks use semantic surfaces and animated media." code={`<ArticleCard title="..." />\n<ImageCard title="..." />\n<NewsCard title="..." />`}>
        <div className="grid gap-4 md:grid-cols-3">
          <ArticleCard image="/logo/logo.jpeg" category="Design systems" title="Building composable interfaces" excerpt="A registry-first approach to modern product UI." author={{ name: "Poyraz", avatar: "/logo/logo.jpeg" }} date="Today" readTime="6 min" />
          <ImageCard image="/logo/logo.jpeg" badge="Featured" title="Soft glass surfaces" description="Modern elevation without sacrificing contrast." />
          <NewsCard image="/logo/logo.jpeg" category="Release" title="Phase 7 feedback and data components are ready" date="July 2026" />
        </div>
      </DemoSection>

      <DemoSection title="Product and Social" description="Semantic warning/success roles replace fixed yellow and green palettes." code={`<ProductCard rating={4.8} />\n<TestimonialCard rating={5} />`}>
        <div className="grid gap-4 md:grid-cols-3">
          <ProductCard image="/logo/logo.jpeg" title="Poyraz UI Kit" price="$49" originalPrice="$69" rating={4.8} badge="New" action={<Button size="sm" className="w-full"><ShoppingCart /> Add to cart</Button>} />
          <TestimonialCard quote="The registry model made our design system dramatically easier to own." author="Jane Cooper" role="Product Designer" avatar="/logo/logo.jpeg" rating={5} variant="glass" />
          <StatsCard label="Active projects" value="1,248" trend="up" trendValue="12.5% this month" icon={<BarChart3 className="size-4" />} variant="glass" />
        </div>
      </DemoSection>

      <DemoSection title="Pricing Block" description="Pricing is an independent registry block with semantic feature icons and glass support." code={`<PricingCard title="Pro" price="$19" features={[...]} highlighted />`}>
        <div className="max-w-sm"><PricingCard title="Pro" price="$19" period="month" description="For teams shipping polished interfaces." features={["Unlimited projects", "Advanced components", "Priority support"]} highlighted variant="glass" action={<Button className="w-full">Choose plan</Button>} /></div>
      </DemoSection>
    </ComponentPage>
  );
}
