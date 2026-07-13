"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Copy,
  Eye,
  EyeOff,
  Github,
  Lock,
  Mail,
  Search,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import { toast } from "poyraz-ui/molecules";

import { Avatar, AvatarFallback, AvatarImage } from "poyraz-ui/atoms";
import { Badge } from "poyraz-ui/atoms";
import { Button } from "poyraz-ui/atoms";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "poyraz-ui/atoms";
import { Checkbox } from "poyraz-ui/atoms";
import { Input } from "poyraz-ui/atoms";
import { Label } from "poyraz-ui/atoms";
import { Logo } from "poyraz-ui/atoms";
import { RadioGroup, RadioGroupItem } from "poyraz-ui/atoms";
import { Separator } from "poyraz-ui/atoms";
import { Typography } from "poyraz-ui/atoms";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "poyraz-ui/molecules";
import {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarLink,
  NavbarLinks,
  NavbarMain,
  NavbarMobileLink,
  NavbarMobileMenu,
  NavbarMobileToggle,
  NavbarSearch,
} from "poyraz-ui/organisms";

import { ThemeToggle } from "@/components/theme-toggle";
import { mainNav, mobileNav, socialLinks } from "@/lib/navigation";

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
    <div className="flex w-full max-w-md items-center gap-3 rounded-sm border border-white/20 bg-white/10 px-4 py-2.5 font-mono text-sm text-white shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-md">
      <span className="text-white/55">$</span>
      <span className="flex-1">{command}</span>
      <button
        onClick={handleCopy}
        className="cursor-pointer text-white/70 transition-colors hover:text-white"
        aria-label="Copy install command"
      >
        {copied ? <Check className="h-4 w-4 text-white" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}

function HeroWaveBackground() {
  return (
    <>
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full dark:hidden"
        preserveAspectRatio="none"
        viewBox="0 0 1920 1080"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1920" height="1080" fill="rgb(150, 0, 0)" />
        <path
          fill="rgb(179, 23, 23)"
          d="M0,294.371L40,294.641C80,294.911,160,295.452,240,261.866C320,228.281,400,160.57,480,157.048C560,153.526,640,214.192,720,256.716C800,299.24,880,323.621,960,297.815C1040,272.009,1120,196.015,1200,164.517C1280,133.02,1360,146.018,1440,155.868C1520,165.718,1600,172.42,1680,199.488C1760,226.557,1840,273.991,1880,297.709L1920,321.426L1920,1080L0,1080Z"
        />
        <g transform="translate(0, 360)">
          <path
            fill="rgb(207, 45, 45)"
            d="M0,76.208L40,105.443C80,134.679,160,193.15,240,184.819C320,176.489,400,101.358,480,115.361C560,129.364,640,232.502,720,247.573C800,262.645,880,189.649,960,190.045C1040,190.44,1120,264.226,1200,287.706C1280,311.187,1360,284.362,1440,242.633C1520,200.905,1600,144.273,1680,121.653C1760,99.032,1840,110.423,1880,116.118L1920,121.814L1920,720L0,720Z"
          />
        </g>
        <g transform="translate(0, 720)">
          <path
            fill="rgb(236, 68, 68)"
            d="M0,103.61L40,91.931C80,80.252,160,56.894,240,60.883C320,64.872,400,96.208,480,125.898C560,155.588,640,183.632,720,163.746C800,143.859,880,76.041,960,54.177C1040,32.313,1120,56.402,1200,74.791C1280,93.18,1360,105.87,1440,125.973C1520,146.075,1600,173.592,1680,189.127C1760,204.662,1840,208.216,1880,209.993L1920,211.77L1920,360L0,360Z"
          />
        </g>
      </svg>
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-20 hidden h-full w-full dark:block"
        preserveAspectRatio="none"
        viewBox="0 0 1920 1080"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1920" height="1080" fill="rgb(23, 2, 2)" />
        <path
          fill="rgb(62, 8, 8)"
          d="M0,294.371L40,294.641C80,294.911,160,295.452,240,261.866C320,228.281,400,160.57,480,157.048C560,153.526,640,214.192,720,256.716C800,299.24,880,323.621,960,297.815C1040,272.009,1120,196.015,1200,164.517C1280,133.02,1360,146.018,1440,155.868C1520,165.718,1600,172.42,1680,199.488C1760,226.557,1840,273.991,1880,297.709L1920,321.426L1920,1080L0,1080Z"
        />
        <g transform="translate(0, 360)">
          <path
            fill="rgb(101, 14, 14)"
            d="M0,76.208L40,105.443C80,134.679,160,193.15,240,184.819C320,176.489,400,101.358,480,115.361C560,129.364,640,232.502,720,247.573C800,262.645,880,189.649,960,190.045C1040,190.44,1120,264.226,1200,287.706C1280,311.187,1360,284.362,1440,242.633C1520,200.905,1600,144.273,1680,121.653C1760,99.032,1840,110.423,1880,116.118L1920,121.814L1920,720L0,720Z"
          />
        </g>
        <g transform="translate(0, 720)">
          <path
            fill="rgb(140, 20, 20)"
            d="M0,103.61L40,91.931C80,80.252,160,56.894,240,60.883C320,64.872,400,96.208,480,125.898C560,155.588,640,183.632,720,163.746C800,143.859,880,76.041,960,54.177C1040,32.313,1120,56.402,1200,74.791C1280,93.18,1360,105.87,1440,125.973C1520,146.075,1600,173.592,1680,189.127C1760,204.662,1840,208.216,1880,209.993L1920,211.77L1920,360L0,360Z"
          />
        </g>
      </svg>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.24),transparent_38%),linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.28))]" />
    </>
  );
}

function InteractiveComponentPanel() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[36rem] lg:mx-0 lg:ml-auto">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-white/10 blur-3xl" />
      <Card className="border-white/20 bg-white/92 text-foreground shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl dark:bg-surface/92">
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <Badge className="bg-primary text-primary-foreground">Live components</Badge>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((id) => (
                <Avatar key={id} className="size-8 border-2 border-background">
                  <AvatarImage src={`https://i.pravatar.cc/64?img=${id}`} />
                  <AvatarFallback>U{id}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
          <CardTitle>Build with the real kit</CardTitle>
          <CardDescription>
            These are focusable, selectable and clickable Poyraz UI components — not flat mockups.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="hero-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-placeholder" />
                <Input
                  id="hero-email"
                  type="email"
                  placeholder="poyraz@example.com"
                  className="pl-9"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="hero-password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-placeholder" />
                <Input
                  id="hero-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-9 pr-9"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-placeholder transition-colors hover:text-foreground"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <div className="space-y-2">
              <Label>Component style</Label>
              <Select defaultValue="glass">
                <SelectTrigger>
                  <SelectValue placeholder="Choose style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="glass">Glass</SelectItem>
                  <SelectItem value="soft">Soft</SelectItem>
                  <SelectItem value="outline">Outline</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button
                effect="swap"
                onClick={() => toast.success("This button is interactive.")}
                className="w-full sm:w-auto"
              >
                Try it <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          <Separator />

          <RadioGroup defaultValue="registry" className="grid gap-3 sm:grid-cols-2">
            <Label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-background/70 p-3">
              <RadioGroupItem value="registry" className="mt-0.5" />
              <span>
                <span className="block text-sm font-semibold">Source registry</span>
                <span className="text-xs text-muted-foreground">Own and customize files.</span>
              </span>
            </Label>
            <Label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-background/70 p-3">
              <RadioGroupItem value="package" className="mt-0.5" />
              <span>
                <span className="block text-sm font-semibold">Npm package</span>
                <span className="text-xs text-muted-foreground">Install and update fast.</span>
              </span>
            </Label>
          </RadioGroup>

          <div className="flex flex-col gap-3 rounded-xl border border-border bg-background/70 p-3 sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-2.5">
              <Checkbox id="hero-terms" defaultChecked />
              <Label htmlFor="hero-terms" className="text-sm font-normal normal-case">
                Use accessible defaults
              </Label>
            </div>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-placeholder" />
              <Input placeholder="Search components..." className="pl-9" />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border bg-background/70 p-3">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary-muted text-primary">
                <Users className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">71 registry items</p>
                <p className="text-xs text-muted-foreground">
                  Atoms, molecules, organisms and blocks.
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" aria-label="Open settings">
              <SlidersHorizontal className="size-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar
        variant={isScrolled ? "glass" : "transparent"}
        className="fixed left-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300"
      >
        <NavbarMain className={isScrolled ? undefined : "border-white/10"}>
          <NavbarBrand href="/">
            <Logo width={32} height={32} />
          </NavbarBrand>

          <NavbarLinks className="mr-auto">
            {mainNav.map((item) => (
              <NavbarLink
                key={item.href}
                href={item.href}
                className={
                  isScrolled
                    ? undefined
                    : "text-white/85 hover:bg-white/10 hover:text-white focus-visible:ring-white/70"
                }
                {...(item.external ? { target: "_blank" } : {})}
              >
                {item.label}
              </NavbarLink>
            ))}
          </NavbarLinks>

          <NavbarActions>
            <NavbarSearch
              placeholder="Search docs..."
              aria-label="Search documentation"
              wrapperClassName="hidden xl:flex"
              className={
                isScrolled
                  ? undefined
                  : "border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:ring-white/35"
              }
            />
            <ThemeToggle
              className={
                isScrolled ? undefined : "border-white/20 bg-white/10 text-white backdrop-blur-md"
              }
              buttonClassName={
                isScrolled
                  ? undefined
                  : "text-white/70 hover:bg-white/10 hover:text-white focus-visible:ring-white/70"
              }
              activeClassName={isScrolled ? undefined : "bg-white/20 text-white"}
            />
            <Link href={socialLinks.website} target="_blank">
              <Button
                size="sm"
                effect="swap"
                variant={isScrolled ? "default" : "outline"}
                className={
                  isScrolled
                    ? undefined
                    : "border-white/30 bg-white/10 text-white backdrop-blur-md hover:border-white/60 hover:bg-white/15"
                }
              >
                Return Back
              </Button>
            </Link>
          </NavbarActions>

          <NavbarMobileToggle
            className={
              isScrolled
                ? undefined
                : "border-white/25 text-white hover:border-white/50 hover:bg-white/10"
            }
          />
        </NavbarMain>

        <NavbarMobileMenu>
          {mobileNav.map((item) => (
            <NavbarMobileLink key={item.href} href={item.href}>
              {item.label}
            </NavbarMobileLink>
          ))}
        </NavbarMobileMenu>
      </Navbar>

      <section className="relative isolate flex min-h-screen overflow-hidden px-6 pb-16 pt-28 text-white md:pt-36">
        <HeroWaveBackground />

        <div className="mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(28rem,1.1fr)]">
          <div className="flex max-w-2xl flex-col items-start space-y-7 text-left">
            <Link href={socialLinks.repo} target="_blank">
              <Badge
                variant="outline"
                className="border-white/25 bg-white/10 px-4 py-1.5 text-sm uppercase tracking-widest text-white backdrop-blur-md transition-colors hover:bg-white/15"
              >
                v3.0.0 - Open Source
              </Badge>
            </Link>

            <Typography
              variant="h1"
              className="max-w-3xl text-[clamp(3.5rem,8vw,2.75rem)] leading-[0.9] text-white"
            >
              <span className="font-secondary text-white">UI Kit</span> for Poyraz
            </Typography>

            <Typography variant="lead" className="max-w-xl text-left text-xl text-white/82">
              Minimal, glassy and source-owned components for modern React applications.
              <span className="mt-2 block font-medium text-white">
                Install as npm package or copy the source into your app.
              </span>
            </Typography>

            <div className="flex w-full flex-col gap-4 pt-2 sm:w-auto sm:flex-row">
              <Link href="/docs">
                <Button
                  size="lg"
                  effect="swap"
                  className="w-full border-white bg-white text-primary shadow-[0_16px_50px_rgba(0,0,0,0.22)] hover:border-white hover:bg-white/90 sm:w-auto"
                >
                  Get Started <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Link href={socialLinks.repo} target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  effect="swap"
                  className="w-full border-white/35 bg-white/10 text-white backdrop-blur-md hover:border-white/60 hover:bg-white/15 sm:w-auto"
                >
                  <Github className="size-4" /> GitHub
                </Button>
              </Link>
            </div>

            <CopyInstallCommand />
          </div>

          <InteractiveComponentPanel />
        </div>
      </section>
    </main>
  );
}
