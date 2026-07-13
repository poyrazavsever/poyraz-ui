"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, Copy, Github } from "lucide-react";
import { Badge, Button, Typography } from "poyraz-ui/atoms";
import { toast } from "poyraz-ui/molecules";

import { HeroComponentShowcase } from "@/components/hero-component-showcase";
import { SiteNavbar } from "@/components/site-navbar";
import { socialLinks } from "@/lib/navigation";

function CopyInstallCommand() {
  const [copied, setCopied] = useState(false);
  const command = "pnpm add poyraz-ui";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    toast.success("Copied to clipboard!", { description: command });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="poyraz-glass flex w-full max-w-md items-center gap-3 rounded-sm px-4 py-2.5 font-mono text-sm text-foreground">
      <span className="text-muted-foreground">$</span>
      <span className="flex-1">{command}</span>
      <button
        onClick={handleCopy}
        className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Copy install command"
      >
        {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}

function HeroWaveBackground() {
  return (
    <>
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1920 1080"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1920" height="1080" fill="var(--poyraz-hero-wave-base)" />
        <path
          fill="var(--poyraz-hero-wave-soft)"
          d="M0,294.371L40,294.641C80,294.911,160,295.452,240,261.866C320,228.281,400,160.57,480,157.048C560,153.526,640,214.192,720,256.716C800,299.24,880,323.621,960,297.815C1040,272.009,1120,196.015,1200,164.517C1280,133.02,1360,146.018,1440,155.868C1520,165.718,1600,172.42,1680,199.488C1760,226.557,1840,273.991,1880,297.709L1920,321.426L1920,1080L0,1080Z"
        />
        <g transform="translate(0, 360)">
          <path
            fill="var(--poyraz-hero-wave-mid)"
            d="M0,76.208L40,105.443C80,134.679,160,193.15,240,184.819C320,176.489,400,101.358,480,115.361C560,129.364,640,232.502,720,247.573C800,262.645,880,189.649,960,190.045C1040,190.44,1120,264.226,1200,287.706C1280,311.187,1360,284.362,1440,242.633C1520,200.905,1600,144.273,1680,121.653C1760,99.032,1840,110.423,1880,116.118L1920,121.814L1920,720L0,720Z"
          />
        </g>
        <g transform="translate(0, 720)">
          <path
            fill="var(--poyraz-hero-wave-strong)"
            d="M0,103.61L40,91.931C80,80.252,160,56.894,240,60.883C320,64.872,400,96.208,480,125.898C560,155.588,640,183.632,720,163.746C800,143.859,880,76.041,960,54.177C1040,32.313,1120,56.402,1200,74.791C1280,93.18,1360,105.87,1440,125.973C1520,146.075,1600,173.592,1680,189.127C1760,204.662,1840,208.216,1880,209.993L1920,211.77L1920,360L0,360Z"
          />
        </g>
      </svg>
      <div className="poyraz-hero-wave-overlay absolute inset-0 -z-10" />
    </>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNavbar />

      <section className="relative isolate flex min-h-screen overflow-hidden pb-16 pt-28 text-foreground md:pt-36">
        <HeroWaveBackground />
        <div className="pointer-events-none absolute inset-0">
          <HeroComponentShowcase />
        </div>

        <div className="mx-auto flex w-full max-w-[1440px] items-center px-5 lg:px-8">
          <div className="flex max-w-[34rem] flex-col items-start space-y-7 text-left">
            <Link href={socialLinks.repo} target="_blank">
              <Badge variant="glass" className="px-4 py-1.5 text-sm uppercase tracking-widest">
                v3.0.0 - Open Source
              </Badge>
            </Link>

            <Typography
              variant="h1"
              className="max-w-3xl text-[clamp(2.5rem,8vw,3rem)] leading-[0.9]"
            >
              <span className="font-secondary text-primary">UI Kit</span> for Poyraz
            </Typography>

            <Typography variant="lead" className="max-w-xl text-left text-xl text-muted-foreground">
              Minimal, glassy and source-owned components for modern React applications.
              <span className="mt-2 block font-medium text-foreground">
                Install as npm package or copy the source into your app.
              </span>
            </Typography>

            <div className="flex w-full flex-col gap-4 pt-2 sm:w-auto sm:flex-row">
              <Link href="/docs">
                <Button size="lg" effect="swap" className="w-full shadow-lg sm:w-auto">
                  Get Started <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Link href={socialLinks.repo} target="_blank">
                <Button variant="glass" size="lg" effect="swap" className="w-full sm:w-auto">
                  <Github className="size-4" /> GitHub
                </Button>
              </Link>
            </div>

            <CopyInstallCommand />
          </div>
        </div>
      </section>
    </main>
  );
}
