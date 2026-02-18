"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Github,
  Copy,
  Check,
  Layers,
  Paintbrush,
  Zap,
  Component,
  BookOpen,
} from "lucide-react";
import { toast } from "@/components/ui/molecules/sonner";

import { Button } from "@/components/ui/atoms/button";
import { Typography } from "@/components/ui/atoms/typography";
import { Badge } from "@/components/ui/atoms/badge";
import { Separator } from "@/components/ui/atoms/separator";
import { Logo } from "@/components/ui/atoms/logo";
import {
  Navbar,
  NavbarMain,
  NavbarBrand,
  NavbarLinks,
  NavbarLink,
  NavbarActions,
  NavbarMobileToggle,
  NavbarMobileMenu,
  NavbarMobileLink,
} from "@/components/ui/organisms/navbar";
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

function CopyInstallCommand() {
  const [copied, setCopied] = useState(false);
  const command = "pnpm add poyraz-ui";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    toast.success("Copied to clipboard!", {
      description: command,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 p-4 bg-slate-950 text-slate-50 border-2 border-dashed border-red-600 font-mono text-sm md:text-base flex items-center gap-4 w-full max-w-md">
      <span className="text-red-500">$</span>
      <span>{command}</span>
      <button
        onClick={handleCopy}
        className="ml-auto text-slate-500 hover:text-white cursor-pointer transition-colors"
        aria-label="Copy install command"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ─── NAVBAR ─────────────────────────────────────────── */}
      <Navbar variant="default" sticky>
        <NavbarMain>
          <NavbarBrand href="/">
            <Logo width={32} height={32} />
          </NavbarBrand>

          <NavbarLinks>
            <NavbarLink href="/docs">Docs</NavbarLink>
            <NavbarLink href="/docs/atoms">Components</NavbarLink>
            <NavbarLink
              href="https://github.com/poyrazavsever/poyraz-ui"
              target="_blank"
            >
              GitHub
            </NavbarLink>
          </NavbarLinks>

          <NavbarActions>
            <Link href="https://poyrazavsever.com" target="_blank">
              <Button size="sm">Return Back</Button>
            </Link>
          </NavbarActions>

          <NavbarMobileToggle />
        </NavbarMain>

        <NavbarMobileMenu>
          <NavbarMobileLink href="/docs">Documentation</NavbarMobileLink>
          <NavbarMobileLink href="/docs/atoms">Components</NavbarMobileLink>
          <NavbarMobileLink href="https://poyrazavsever.com">
            Return Back
          </NavbarMobileLink>
        </NavbarMobileMenu>
      </Navbar>

      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative px-6 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
        <div className="max-w-5xl mx-auto space-y-8 flex flex-col items-center">
          <Badge
            variant="outline"
            className="bg-white px-4 py-1.5 text-sm uppercase tracking-widest"
          >
            v0.1.0 — Open Source
          </Badge>

          <Typography variant="h1">
            <span className="font-secondary text-red-600">UI Kit</span> for
            Poyraz
          </Typography>

          <Typography variant="lead" className="max-w-2xl">
            Brutalist design system for modern web applications.
            <span className="block mt-2 font-medium text-slate-900">
              No rounding. No shadows. Just bold, functional design.
            </span>
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center">
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

          <CopyInstallCommand />
        </div>
      </section>

      {/* ─── DESIGN PRINCIPLES ──────────────────────────────── */}
      <section className="px-6 py-20 bg-slate-50/80 border-y-2 border-dashed border-slate-200">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <Typography variant="h2">Design Principles</Typography>
            <Typography variant="muted" className="max-w-xl mx-auto">
              Every component follows a strict brutalist design language.
            </Typography>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Paintbrush className="h-6 w-6" />,
                title: "Dashed Borders",
                desc: "Border-dashed is the DNA. Every interactive element uses dashed borders.",
              },
              {
                icon: <Component className="h-6 w-6" />,
                title: "No Rounding",
                desc: "rounded-none everywhere. Sharp, intentional corners for a raw aesthetic.",
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "No Shadows",
                desc: "shadow-none by default. Red offset boxes replace traditional elevation.",
              },
              {
                icon: <Layers className="h-6 w-6" />,
                title: "High Contrast",
                desc: "Red-600 primary with slate palette. Bold typography and clear hierarchy.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white border-2 border-dashed border-slate-200 space-y-3 hover:border-slate-900 transition-colors"
              >
                <div className="text-red-600">{item.icon}</div>
                <h3 className="font-bold text-sm uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPONENT OVERVIEW ─────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <Typography variant="h2">Component Library</Typography>
            <Typography variant="muted" className="max-w-xl mx-auto">
              40+ components across three layers of abstraction.
            </Typography>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Atoms",
                count: 19,
                href: "/docs/atoms",
                items: [
                  "Button",
                  "Input",
                  "Badge",
                  "Avatar",
                  "Card",
                  "Form Fields",
                ],
                color: "border-red-600",
              },
              {
                title: "Molecules",
                count: 16,
                href: "/docs/molecules",
                items: [
                  "Accordion",
                  "Dialog",
                  "Modal",
                  "Drawer",
                  "DatePicker",
                  "HoverCard",
                ],
                color: "border-slate-900",
              },
              {
                title: "Organisms",
                count: 3,
                href: "/docs/organisms",
                items: ["Navbar", "Sidebar", "Footer"],
                color: "border-slate-400",
              },
            ].map((layer) => (
              <Link key={layer.title} href={layer.href}>
                <div
                  className={`p-6 bg-white border-2 border-dashed ${layer.color} space-y-4 hover:bg-slate-50 transition-colors h-full`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-black uppercase tracking-wide">
                      {layer.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {layer.count}
                    </Badge>
                  </div>
                  <Separator />
                  <ul className="space-y-1.5">
                    {layer.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-slate-600 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-red-600 inline-block" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 text-xs font-semibold text-red-600 uppercase tracking-wide flex items-center gap-1">
                    Explore <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────── */}
      <section className="px-6 py-20 bg-slate-50/80 border-y-2 border-dashed border-slate-200">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <Typography variant="h2">Ready to Build?</Typography>
          <Typography variant="muted" className="max-w-lg mx-auto">
            Start using Poyraz UI in your projects today. Free, open-source, and
            built with care.
          </Typography>
          <div className="flex justify-center gap-4 pt-4">
            <Link href="/docs">
              <Button size="lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Read the Docs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────── */}
      <Footer
        variant="branded"
        className="mt-auto border-t-2 border-dashed border-slate-200"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <FooterBrand>
            <div className="flex items-center gap-3">
              <Logo width={40} height={40} />
              <span className="text-xl font-bold tracking-tight">
                Poyraz UI
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              An open-source brutalist UI component library for modern web
              applications.
            </p>
          </FooterBrand>
          <FooterGrid className="flex-1 max-w-lg grid-cols-2">
            <FooterSection>
              <FooterHeading>Documentation</FooterHeading>
              <FooterLink href="/docs">Getting Started</FooterLink>
              <FooterLink href="/docs/installation">Installation</FooterLink>
              <FooterLink href="/docs/atoms">Components</FooterLink>
            </FooterSection>
            <FooterSection>
              <FooterHeading>Links</FooterHeading>
              <FooterLink href="https://github.com/poyrazavsever/poyraz-ui">
                GitHub
              </FooterLink>
              <FooterLink href="https://npmjs.com/package/poyraz-ui">
                npm
              </FooterLink>
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
