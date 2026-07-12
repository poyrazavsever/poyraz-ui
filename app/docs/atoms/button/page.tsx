"use client";

import { ArrowRight, Bell, Download, Heart, Sparkles } from "lucide-react";

import { ComponentPage, DemoSection } from "@/components/docs/code-block";
import {
  Button,
  ButtonIcon,
  ButtonLabel,
} from "@/components/ui/atoms/button";

const variants = [
  "default",
  "secondary",
  "soft",
  "outline",
  "glass",
  "ghost",
  "destructive",
  "link",
] as const;

export default function ButtonPage() {
  return (
    <ComponentPage
      name="Button"
      description="A soft, rounded action primitive with composable anatomy, eight visual variants, seven sizes, loading behavior and optional hover motion recipes."
      importCode={`import {
  Button,
  ButtonIcon,
  ButtonLabel,
  buttonVariants,
} from "@/components/ui/button";`}
    >
      <DemoSection
        title="Variants"
        description="Brand red remains the primary action; neutral, tinted, outline and translucent treatments provide quieter hierarchy."
        code={variants.map((variant) => `<Button variant="${variant}">${variant}</Button>`).join("\n")}
      >
        <div className="flex flex-wrap items-center gap-3">
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          ))}
        </div>
      </DemoSection>

      <DemoSection
        title="Sizes and radius"
        description="Size and corner radius are independent. Choose none through full; icon controls always need an accessible name."
        code={`<Button size="xs">Extra small</Button>
<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg" radius="full">Large pill</Button>
<Button size="icon-sm" aria-label="Favorite"><Heart /></Button>
<Button size="icon" radius="full" aria-label="Notifications"><Bell /></Button>
<Button size="icon-lg" aria-label="Download"><Download /></Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg" radius="full">Large pill</Button>
          <Button size="icon-sm" aria-label="Favorite"><Heart /></Button>
          <Button size="icon" radius="full" aria-label="Notifications"><Bell /></Button>
          <Button size="icon-lg" aria-label="Download"><Download /></Button>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {(["none", "xs", "sm", "md", "lg", "xl", "2xl", "full"] as const).map((radius) => (
            <Button key={radius} radius={radius} variant="outline">
              {radius}
            </Button>
          ))}
        </div>
      </DemoSection>

      <DemoSection
        title="Hover effects"
        description="Motion is opt-in and independent from visual variant. Fill can travel in four directions; swap can target icon, label or both."
        code={`<Button effect="shine">Shine sweep</Button>
<Button effect="fill">Fill right</Button>
<Button effect="fill" fillDirection="left">Fill left</Button>
<Button effect="fill" fillDirection="up">Fill up</Button>
<Button effect="fill" fillDirection="down">Fill down</Button>
<Button effect="swap" swapTarget="both">
  <ButtonLabel>Swap content</ButtonLabel>
  <ButtonIcon><ArrowRight /></ButtonIcon>
</Button>
<Button effect="border-draw">Border draw</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button effect="shine">Shine sweep</Button>
          {(["right", "left", "up", "down"] as const).map((direction) => (
            <Button key={direction} effect="fill" fillDirection={direction} variant="soft">
              Fill {direction}
            </Button>
          ))}
          <Button effect="swap" swapTarget="both">
            <ButtonLabel>Swap content</ButtonLabel>
            <ButtonIcon><ArrowRight /></ButtonIcon>
          </Button>
          <Button effect="border-draw" variant="outline">Border draw</Button>
          <Button effect="swap" swapTarget="icon" variant="secondary">
            Icon only swap
            <ButtonIcon><ArrowRight /></ButtonIcon>
          </Button>
          <Button effect="swap" swapTarget="label" variant="ghost">
            <ButtonLabel>Label only swap</ButtonLabel>
            <ArrowRight />
          </Button>
        </div>
      </DemoSection>

      <DemoSection
        title="Glass on light and dark surfaces"
        description="The same glass recipe uses semantic transparency and a solid fallback when backdrop filtering is unavailable or reduced."
        code={`<Button variant="glass"><Sparkles /> AI Generate</Button>`}
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-[linear-gradient(135deg,var(--poyraz-primary-muted),var(--poyraz-background),var(--poyraz-surface-200))] p-8">
            <Button variant="glass" effect="shine" radius="full">
              <Sparkles /> AI Generate
            </Button>
          </div>
          <div className="rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_20%_20%,#7f1d1d_0%,#251719_36%,#0b0e12_100%)] p-8 text-white">
            <Button variant="glass" effect="shine" radius="full" className="text-white">
              <Sparkles /> AI Generate
            </Button>
          </div>
        </div>
      </DemoSection>

      <DemoSection
        title="States"
        description="Loading keeps the label in flow to prevent width shift, exposes aria-busy and blocks repeated actions."
        code={`<Button loading>Saving changes</Button>
<Button disabled>Disabled</Button>
<Button variant="outline" className="w-full sm:w-auto">Consumer override</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button loading>Saving changes</Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline" className="w-full sm:w-auto">Consumer override</Button>
        </div>
      </DemoSection>

      <DemoSection
        title="As child"
        description="Use asChild when link navigation needs Button styling while preserving anchor semantics."
        code={`<Button asChild effect="swap" radius="full">
  <a href="/docs">
    <ButtonLabel>Explore docs</ButtonLabel>
    <ButtonIcon><ArrowRight /></ButtonIcon>
  </a>
</Button>`}
      >
        <Button asChild effect="swap" radius="full">
          <a href="/docs">
            <ButtonLabel>Explore docs</ButtonLabel>
            <ButtonIcon><ArrowRight /></ButtonIcon>
          </a>
        </Button>
      </DemoSection>
    </ComponentPage>
  );
}
