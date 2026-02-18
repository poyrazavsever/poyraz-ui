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
import { toast } from "poyraz-ui/molecules";

import { Button } from "poyraz-ui/atoms";
import { Typography } from "poyraz-ui/atoms";
import { Badge } from "poyraz-ui/atoms";
import { Separator } from "poyraz-ui/atoms";
import { Logo } from "poyraz-ui/atoms";
import { PatternDots } from "poyraz-ui/atoms";
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
} from "poyraz-ui/organisms";
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
} from "poyraz-ui/organisms";
import { mainNav, mobileNav, footerNav, socialLinks } from "@/lib/navigation";

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
            {mainNav.map((item) => (
              <NavbarLink
                key={item.href}
                href={item.href}
                {...(item.external ? { target: "_blank" } : {})}
              >
                {item.label}
              </NavbarLink>
            ))}
          </NavbarLinks>

          <NavbarActions>
            <Link href={socialLinks.website} target="_blank">
              <Button size="sm">Return Back</Button>
            </Link>
          </NavbarActions>

          <NavbarMobileToggle />
        </NavbarMain>

        <NavbarMobileMenu>
          {mobileNav.map((item) => (
            <NavbarMobileLink key={item.href} href={item.href}>
              {item.label}
            </NavbarMobileLink>
          ))}
        </NavbarMobileMenu>
      </Navbar>

      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative px-6 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center overflow-hidden">
        <PatternDots
          overlay
          size={28}
          opacity={0.12}
          color="#334155"
          className="w-full h-full"
        />
        <div className="relative z-10 max-w-5xl mx-auto space-y-8 flex flex-col items-center">
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
            <Link href={socialLinks.repo} target="_blank">
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

      {/* ─── SHOWCASE ─────────────────────────────────────── */}
      <section className="w-full overflow-hidden mt-36">
        <div className="flex items-end justify-center">
          {/* Image 2 — person with success alert (left) */}
          <div className="shrink-0">
            <img
              src="/images/image 2.png"
              alt="Poyraz UI success alert showcase"
              className="h-52 sm:h-64 md:h-72 lg:h-80 w-auto object-contain object-bottom"
              draggable={false}
            />
          </div>

          {/* Image 1 — person with button (right, cut off) + red box */}
          <div className="flex items-end flex-1 min-w-0">
            <img
              src="/images/image 1.png"
              alt="Poyraz UI button showcase"
              className="h-52 sm:h-64 md:h-72 lg:h-80 w-auto object-contain object-bottom shrink-0"
              draggable={false}
            />
            {/* Red-600 box — starts at 0 from image 1's cut edge */}
            <div className="self-stretch bg-red-600 flex-1 flex items-center overflow-hidden px-6 sm:px-10">
              <p className="text-red-200 font-secondary text-lg sm:text-2xl md:text-3xl lg:text-4xl  tracking-wide leading-tight whitespace-nowrap">
                I love building things...
              </p>
            </div>
          </div>
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
              45+ components across three layers of abstraction.
            </Typography>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Atoms",
                count: 17,
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
                count: 21,
                href: "/docs/molecules",
                items: [
                  "Accordion",
                  "Dialog",
                  "Command Palette",
                  "Sheet",
                  "Drawer",
                  "DatePicker",
                ],
                color: "border-slate-900",
              },
              {
                title: "Organisms",
                count: 5,
                href: "/docs/organisms",
                items: [
                  "Navbar",
                  "Data Table",
                  "Announcement Bar",
                  "Sidebar",
                  "Footer",
                ],
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
            {footerNav.map((section) => (
              <FooterSection key={section.heading}>
                <FooterHeading>{section.heading}</FooterHeading>
                {section.links.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </FooterSection>
            ))}
          </FooterGrid>
        </div>
        <FooterBottom>
          <span>
            &copy; {new Date().getFullYear()} Poyraz Avsever. MIT License.
          </span>
          <FooterSocials>
            <FooterSocialLink href={socialLinks.github} aria-label="GitHub">
              <Github className="h-4 w-4" />
            </FooterSocialLink>
          </FooterSocials>
        </FooterBottom>
      </Footer>
    </div>
  );
}
