import { Github, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/atoms/button";
import {
  Footer,
  FooterBottom,
  FooterBrand,
  FooterGrid,
  FooterHeading,
  FooterLink,
  FooterSection,
  FooterSocialLink,
  FooterSocials,
} from "@/components/ui/organisms/footer";
import { FooterNewsletter } from "@/components/ui/organisms/footer-newsletter";

function CompactFooterBlock() {
  return <div data-slot="compact-footer-block" className="@container/footer-block"><Footer variant="compact"><FooterBottom className="m-0 border-0 pt-0"><span>Poyraz UI</span><span>Open source under MIT.</span></FooterBottom></Footer></div>;
}

function CenteredFooterBlock() {
  return <div data-slot="centered-footer-block" className="@container/footer-block"><Footer variant="centered"><FooterBrand className="mx-auto items-center"><Sparkles className="size-5 text-primary" /><p className="text-sm font-semibold">Poyraz UI</p></FooterBrand><div className="mt-4 flex flex-wrap justify-center gap-4"><FooterLink href="#">Components</FooterLink><FooterLink href="#">Blocks</FooterLink><FooterLink href="#">Docs</FooterLink></div></Footer></div>;
}

function BrandedFooterBlock() {
  return <div data-slot="branded-footer-block" className="@container/footer-block"><Footer variant="branded"><div className="grid gap-8 @lg/footer:grid-cols-[1.3fr_2fr]"><div><FooterBrand><p className="text-lg font-semibold">Poyraz UI</p><p className="text-sm text-muted-foreground">Open React components with a restrained soft glass language.</p><FooterSocials><FooterSocialLink href="#" aria-label="GitHub"><Github className="size-4" /></FooterSocialLink></FooterSocials></FooterBrand><FooterNewsletter className="mt-5" /></div><FooterGrid className="@lg/footer:grid-cols-2"><FooterSection><FooterHeading>Product</FooterHeading><FooterLink href="#">Components</FooterLink><FooterLink href="#">Blocks</FooterLink></FooterSection><FooterSection><FooterHeading>Start</FooterHeading><Button size="sm">Open registry</Button></FooterSection></FooterGrid></div></Footer></div>;
}

export { BrandedFooterBlock, CenteredFooterBlock, CompactFooterBlock };
