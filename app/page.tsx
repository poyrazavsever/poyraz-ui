import Link from "next/link";
import { ArrowRight, Github, Package, Copy, Check } from "lucide-react";

import { Button } from "@/components/ui/atoms/button";
import { Typography } from "@/components/ui/atoms/typography";
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
import { Logo } from "@/components/ui/atoms/logo";
import { Badge } from "@/components/ui/atoms/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      {/* HERO SECTION */}
      <section className="relative px-6 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
        <Badge
          variant="outline"
          className="bg-white px-4 py-1.5 text-sm uppercase tracking-widest mb-4"
        >
          v0.1.0 Released
        </Badge>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-950">
          POYRAZ{" "}
          <span className="text-red-600 decoration-dashed underline decoration-4 underline-offset-8">
            UI
          </span>
        </h1>

        <Typography
          variant="lead"
          className="max-w-2xl text-xl md:text-2xl text-slate-600"
        >
          A brutalist, unstyled-first component library built for modern web
          applications.
          <span className="block mt-2 font-medium text-slate-900">
            No rounding. No shadows. Just bold design.
          </span>
        </Typography>

        <div className="flex flex-col sm:flex-row gap-4 pt-8 w-full justify-center">
          <Link href="/docs">
            <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link
            href="https://github.com/poyrazavsever/poyraz-ui"
            target="_blank"
          >
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg bg-white w-full sm:w-auto"
            >
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Button>
          </Link>
        </div>

        {/* INSTALL COPY */}
        <div className="mt-12 p-4 bg-slate-950 text-slate-50 border-2 border-dashed border-red-600 font-mono text-sm md:text-base flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]">
          <span className="text-red-500">$</span>
          <span>pnpm add poyraz-ui</span>
          <Copy className="h-4 w-4 text-slate-500 hover:text-white cursor-pointer ml-auto" />
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="px-6 py-24 bg-white border-y-2 border-dashed border-slate-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <Card className="border-2 border-slate-950 bg-slate-50">
            <CardHeader>
              <Package className="h-10 w-10 text-red-600 mb-4" />
              <CardTitle className="text-2xl">Copy & Paste</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant="p" className="mt-0">
                Designed to be copied directly into your project. Own your code.
                No hidden npm abstractions required (unless you want them).
              </Typography>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-950 bg-slate-50">
            <CardHeader>
              <Check className="h-10 w-10 text-red-600 mb-4" />
              <CardTitle className="text-2xl">Accessible by Default</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant="p" className="mt-0">
                Built on top of Radix UI primitives. Fully keyboard navigable,
                screen reader friendly, and ARIA compliant.
              </Typography>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-950 bg-slate-50">
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-4 border-slate-950">
                Tailwind CSS v4
              </Badge>
              <CardTitle className="text-2xl">Modern Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant="p" className="mt-0">
                Leverages the latest Tailwind v4 features. Zero runtime styles.
                Typescript first.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <Footer variant="branded" className="mt-auto bg-white">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <FooterBrand>
            <div className="flex items-center gap-3">
              <Logo width={40} height={40} />
              <span className="text-xl font-bold tracking-tight">Poyraz</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              An open-source UI component library for building brutalist,
              high-performance web applications.
            </p>
          </FooterBrand>
          <FooterGrid className="flex-1 max-w-lg grid-cols-2">
            <FooterSection>
              <FooterHeading>Product</FooterHeading>
              <FooterLink href="/docs">Documentation</FooterLink>
              <FooterLink href="/atoms">Components</FooterLink>
              <FooterLink href="https://github.com/poyrazavsever/poyraz-ui">
                GitHub
              </FooterLink>
            </FooterSection>
            <FooterSection>
              <FooterHeading>Resources</FooterHeading>
              <FooterLink href="/molecules">Examples</FooterLink>
              <FooterLink href="/organisms">Templates</FooterLink>
            </FooterSection>
          </FooterGrid>
        </div>
        <FooterBottom>
          <span>
            &copy; {new Date().getFullYear()} Poyraz Avsever. MIT License.
          </span>
          <FooterSocials>
            <FooterSocialLink
              href="https://github.com/poyrazavsever"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </FooterSocialLink>
          </FooterSocials>
        </FooterBottom>
      </Footer>
    </div>
  );
}
