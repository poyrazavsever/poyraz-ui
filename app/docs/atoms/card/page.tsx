"use client";

import { BarChart3, Github, Heart, Linkedin, Sparkles, Zap } from "lucide-react";

import { ComponentPage, DemoSection } from "@/components/docs/code-block";
import { Button } from "@/components/ui/atoms/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card";
import {
  BasicContentCard,
  ExpandableCard,
  FeatureCard,
  GlassCard,
  HorizontalCard,
  ImageContentCard,
  InteractiveCard,
  PricingPlanCard,
  ProfileCard,
  StatisticCard,
} from "@/components/ui/atoms/card-variants";

const chart = (
  <svg
    viewBox="0 0 180 48"
    className="size-full"
    preserveAspectRatio="none"
    aria-label="Increasing trend"
  >
    <path
      d="M0 40 C20 38 28 20 48 28 S78 42 98 20 S132 26 180 4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M0 40 C20 38 28 20 48 28 S78 42 98 20 S132 26 180 4 V48 H0Z"
      fill="currentColor"
      opacity=".08"
    />
  </svg>
);

export default function CardPage() {
  return (
    <ComponentPage
      name="Card"
      description="Soft, semantic Card anatomy plus reusable content compositions. Surface, radius and consumer className overrides stay independent."
      importCode={`import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/atoms/card";`}
    >
      <DemoSection
        title="Surface variants"
        code={`<Card variant="default" />\n<Card variant="soft" />\n<Card variant="outline" />\n<Card variant="glass" />\n<Card variant="elevated" />\n<Card variant="interactive" />`}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(["default", "soft", "outline", "glass", "elevated", "interactive"] as const).map(
            (variant) => (
              <Card key={variant} variant={variant}>
                <CardHeader>
                  <CardTitle>{variant}</CardTitle>
                  <CardDescription>Semantic surface and elevation treatment.</CardDescription>
                </CardHeader>
              </Card>
            ),
          )}
        </div>
      </DemoSection>

      <DemoSection
        title="Basic and image cards"
        code={`<BasicContentCard title="Workspace" description="..." action={<Button />} />\n<ImageContentCard src="..." title="Design systems" category="Guide" />`}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <BasicContentCard
            title="Workspace activity"
            description="A standard content card with a compact action."
            action={
              <Button variant="ghost" size="sm">
                Details
              </Button>
            }
          >
            <p className="text-sm text-muted-foreground">12 members collaborated this week.</p>
          </BasicContentCard>
          <ImageContentCard
            src="/logo/logo.jpeg"
            alt="Poyraz UI mark"
            title="Building a soft glass system"
            description="Composable surfaces, semantic tokens and accessible states."
            category="Design guide"
            action={<Button size="sm">Read article</Button>}
          />
        </div>
      </DemoSection>

      <DemoSection
        title="Horizontal and profile cards"
        code={`<HorizontalCard ... />\n<ProfileCard ... />`}
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <HorizontalCard
            src="/logo/logo.jpeg"
            alt="Poyraz UI"
            title="Registry-first UI"
            description="Copy the source, own the component and customize every layer."
            category="Architecture"
            action={
              <Button variant="soft" size="sm">
                Explore
              </Button>
            }
          />
          <ProfileCard
            avatar="/logo/logo.jpeg"
            name="Poyraz Avsever"
            role="Product Designer"
            bio="Designing flexible interfaces with a clear visual voice."
            socialActions={
              <>
                <Button size="icon-sm" variant="ghost" aria-label="GitHub">
                  <Github />
                </Button>
                <Button size="icon-sm" variant="ghost" aria-label="LinkedIn">
                  <Linkedin />
                </Button>
              </>
            }
          />
        </div>
      </DemoSection>

      <DemoSection
        title="Statistic and feature cards"
        code={`<StatisticCard label="Revenue" value="$56,000" change="+12.5%" chart={chart} />\n<FeatureCard icon={<Zap />} title="Fast" description="..." />`}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatisticCard
            label="Total revenue"
            value="$56,000"
            change="↑ 12.5% from last month"
            trend="up"
            chart={chart}
            icon={<BarChart3 className="size-5 text-primary" />}
          />
          <FeatureCard
            icon={<Zap />}
            title="Registry-first"
            description="Install source directly into your project and keep full ownership."
          />
          <FeatureCard
            icon={<Sparkles />}
            title="Soft glass"
            description="Semantic transparency, fallback and reduced-transparency support."
          />
        </div>
      </DemoSection>

      <DemoSection
        title="Pricing card"
        code={`<PricingPlanCard name="Pro" price="$19" period="month" features={[...]} action={<Button />} popular />`}
      >
        <div className="max-w-sm">
          <PricingPlanCard
            name="Pro"
            price="$19"
            period="month"
            description="For teams building polished products."
            features={["Unlimited projects", "Advanced analytics", "Priority support"]}
            popular
            action={<Button className="w-full">Choose plan</Button>}
          />
        </div>
      </DemoSection>

      <DemoSection
        title="Glass and interactive cards"
        code={`<GlassCard>...</GlassCard>\n<InteractiveCard actions={<Button />}>...</InteractiveCard>`}
      >
        <div className="grid gap-4 rounded-2xl bg-[radial-gradient(circle_at_15%_15%,#7f1d1d_0%,#251719_38%,#0b0e12_100%)] p-6 md:grid-cols-2">
          <GlassCard className="text-white">
            <CardHeader>
              <CardTitle className="text-white">Glass surface</CardTitle>
              <CardDescription className="text-white/70">
                Blur, translucent border and soft inset highlight.
              </CardDescription>
            </CardHeader>
          </GlassCard>
          <InteractiveCard
            className="min-h-40"
            actions={
              <Button size="sm">
                <Heart /> Save card
              </Button>
            }
          >
            <CardHeader>
              <CardTitle>Hover for actions</CardTitle>
              <CardDescription>Actions also appear with keyboard focus.</CardDescription>
            </CardHeader>
          </InteractiveCard>
        </div>
      </DemoSection>

      <DemoSection
        title="Expandable card"
        code={`<ExpandableCard summary="Release notes">Full details...</ExpandableCard>`}
      >
        <div className="max-w-xl">
          <ExpandableCard
            summary={
              <>
                <CardTitle>Release notes</CardTitle>
                <CardDescription className="mt-1">
                  A controlled or uncontrolled disclosure composition.
                </CardDescription>
              </>
            }
          >
            Detailed content is mounted in a semantic region and the trigger exposes aria-expanded.
          </ExpandableCard>
        </div>
      </DemoSection>

      <DemoSection
        title="CardAction anatomy"
        code={`<CardHeader>\n  <CardTitle>Title</CardTitle>\n  <CardDescription>Description</CardDescription>\n  <CardAction><Button /></CardAction>\n</CardHeader>`}
      >
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Team plan</CardTitle>
            <CardDescription>
              CardAction occupies the stable top-right anatomy slot.
            </CardDescription>
            <CardAction>
              <Button size="icon-sm" variant="ghost" aria-label="Favorite">
                <Heart />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Nested cards use a smaller radius than their parent.
          </CardContent>
        </Card>
      </DemoSection>
    </ComponentPage>
  );
}
