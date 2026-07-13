"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  Copy,
  Eye,
  EyeOff,
  Github,
  Lock,
  Mail,
  MessageCircle,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { toast } from "poyraz-ui/molecules";

import { Avatar, AvatarFallback, AvatarImage } from "poyraz-ui/atoms";
import { Badge } from "poyraz-ui/atoms";
import { Button } from "poyraz-ui/atoms";
import { Checkbox } from "poyraz-ui/atoms";
import { MaskedInput, PhoneInput, UrlInput } from "poyraz-ui/atoms";
import { Input } from "poyraz-ui/atoms";
import { Label } from "poyraz-ui/atoms";
import { Logo } from "poyraz-ui/atoms";
import { RadioGroup, RadioGroupItem } from "poyraz-ui/atoms";
import { ScrollArea } from "poyraz-ui/atoms";
import { Separator } from "poyraz-ui/atoms";
import { Switch } from "poyraz-ui/atoms";
import { Textarea } from "poyraz-ui/atoms";
import { Typography } from "poyraz-ui/atoms";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Autocomplete,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "poyraz-ui/molecules";
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
    <TooltipProvider>
      <div className="pointer-events-none absolute right-6 top-[9%] hidden h-[84vh] w-[min(58vw,920px)] lg:block 2xl:right-12">
        <div className="absolute inset-0 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute left-[10%] top-[8%] h-48 w-48 rounded-full bg-white/15 blur-2xl" />
        <div className="absolute right-[12%] bottom-[10%] h-56 w-56 rounded-full bg-primary/30 blur-3xl" />
        <Breadcrumb className="pointer-events-auto absolute left-[35%] top-[2%] rotate-1 rounded-full border border-white/20 bg-white/88 px-4 py-2 text-foreground shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl dark:bg-surface/90">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Components</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="pointer-events-auto absolute right-[9%] top-[8%] flex -space-x-3">
          {[1, 2, 3, 4].map((id) => (
            <Avatar key={id} className="size-11 border-2 border-white/70 shadow-xl">
              <AvatarImage src={`https://i.pravatar.cc/80?img=${id}`} />
              <AvatarFallback>U{id}</AvatarFallback>
            </Avatar>
          ))}
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon-lg"
              radius="full"
              effect="shine"
              className="pointer-events-auto absolute right-[1%] top-[17%] rotate-6 shadow-[0_18px_48px_rgba(0,0,0,0.22)]"
              aria-label="Notifications"
              onClick={() => toast.info("Notification button is alive.")}
            >
              <Bell className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent surface="glass">Tooltip component</TooltipContent>
        </Tooltip>

        <div className="pointer-events-auto absolute left-[5%] top-[16%] w-72 -rotate-2 rounded-2xl border border-white/20 bg-white/90 p-4 text-foreground shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl dark:bg-surface/90">
          <Label htmlFor="hero-cloud-email">Input + Label</Label>
          <div className="relative mt-2">
            <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-placeholder" />
            <Input
              id="hero-cloud-email"
              type="email"
              placeholder="poyraz@example.com"
              className="pl-9"
            />
          </div>
        </div>

        <div className="pointer-events-auto absolute left-[38%] top-[18%] w-64 rotate-2 rounded-2xl border border-white/20 bg-white/90 p-4 text-foreground shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl dark:bg-surface/90">
          <Label htmlFor="hero-cloud-password">Password</Label>
          <div className="relative mt-2">
            <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-placeholder" />
            <Input
              id="hero-cloud-password"
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

        <div className="pointer-events-auto absolute right-[1%] top-[30%] w-64 -rotate-1 rounded-2xl border border-white/20 bg-white/90 p-4 text-foreground shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl dark:bg-surface/90">
          <Label>Autocomplete</Label>
          <Autocomplete
            className="mt-2"
            variant="glass"
            radius="xl"
            placeholder="Find component..."
            defaultValue="button"
            options={[
              { value: "button", label: "Button", description: "Atoms" },
              { value: "tabs", label: "Tabs", description: "Molecules" },
              { value: "toast", label: "Sonner", description: "Molecules" },
            ]}
          />
        </div>

        <div className="pointer-events-auto absolute left-[0%] top-[39%] w-56 rotate-1 rounded-2xl border border-white/20 bg-white/90 p-4 text-foreground shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl dark:bg-surface/90">
          <Label>Select</Label>
          <Select defaultValue="glass">
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Choose style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="glass">Glass</SelectItem>
              <SelectItem value="soft">Soft</SelectItem>
              <SelectItem value="outline">Outline</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          effect="swap"
          radius="full"
          className="pointer-events-auto absolute left-[31%] top-[35%] -rotate-6 shadow-[0_18px_48px_rgba(0,0,0,0.2)]"
          onClick={() => toast.success("Primary action from Poyraz UI.")}
        >
          Save <Check className="size-4" />
        </Button>
        <Button
          variant="outline"
          effect="shine"
          radius="xl"
          className="pointer-events-auto absolute left-[53%] top-[37%] rotate-3 bg-white/90 shadow-[0_18px_48px_rgba(0,0,0,0.18)]"
          onClick={() => toast.info("Outline button clicked.")}
        >
          Preview
        </Button>
        <Tabs
          defaultValue="atoms"
          className="pointer-events-auto absolute left-[29%] top-[48%] w-80 -rotate-1 rounded-2xl border border-white/20 bg-white/88 p-3 text-foreground shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl dark:bg-surface/90"
        >
          <TabsList variant="glass" radius="full" className="w-full justify-start">
            <TabsTrigger value="atoms" radius="full" size="sm">
              Atoms
            </TabsTrigger>
            <TabsTrigger value="molecules" radius="full" size="sm">
              Molecules
            </TabsTrigger>
            <TabsTrigger value="blocks" radius="full" size="sm">
              Blocks
            </TabsTrigger>
          </TabsList>
          <TabsContent value="atoms" className="mt-3 text-sm text-muted-foreground">
            Button, Input, Card, Logo, Form Fields.
          </TabsContent>
          <TabsContent value="molecules" className="mt-3 text-sm text-muted-foreground">
            Dialog, Dropdown, Select, Tabs, Toast.
          </TabsContent>
          <TabsContent value="blocks" className="mt-3 text-sm text-muted-foreground">
            Copy source, customize every layer.
          </TabsContent>
        </Tabs>

        <div className="pointer-events-auto absolute right-[2%] top-[61%] w-64 rotate-1 rounded-2xl border border-white/20 bg-white/90 p-4 text-foreground shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl dark:bg-surface/90">
          <div className="flex items-center justify-between gap-3">
            <Label htmlFor="hero-cloud-switch" className="normal-case">
              Animated states
            </Label>
            <Switch id="hero-cloud-switch" defaultChecked />
          </div>
          <Separator className="my-3" />
          <RadioGroup defaultValue="registry" className="grid gap-2">
            <Label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border/70 bg-background/70 p-2.5">
              <RadioGroupItem value="registry" className="mt-0.5" />
              <span>
                <span className="block text-sm font-semibold">Source registry</span>
                <span className="text-xs text-muted-foreground">Own component files.</span>
              </span>
            </Label>
            <Label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border/70 bg-background/70 p-2.5">
              <RadioGroupItem value="package" className="mt-0.5" />
              <span>
                <span className="block text-sm font-semibold">Npm package</span>
                <span className="text-xs text-muted-foreground">Update with semver.</span>
              </span>
            </Label>
          </RadioGroup>
        </div>

        <div className="pointer-events-auto absolute left-[2%] top-[61%] w-64 -rotate-2 rounded-2xl border border-white/20 bg-white/90 p-4 text-foreground shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl dark:bg-surface/90">
          <div className="flex items-center gap-3">
            <Checkbox id="hero-cloud-terms" defaultChecked />
            <Label htmlFor="hero-cloud-terms" className="text-sm font-normal normal-case">
              Accessible defaults
            </Label>
          </div>
          <Textarea
            className="mt-3 min-h-20"
            variant="glass"
            placeholder="Write component notes..."
          />
        </div>

        <div className="pointer-events-auto absolute left-[35%] top-[66%] grid w-60 rotate-2 gap-2">
          <Alert
            variant="success"
            appearance="glass"
            radius="xl"
            className="border-white/25 bg-white/85 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.22)] dark:bg-surface/90"
          >
            <AlertTitle>Saved</AlertTitle>
            <AlertDescription>Component synced.</AlertDescription>
          </Alert>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="glass"
              size="icon"
              radius="full"
              className="pointer-events-auto absolute right-[5%] bottom-[28%] rotate-6 bg-white/70 shadow-[0_18px_48px_rgba(0,0,0,0.16)]"
              aria-label="Open calendar popover"
            >
              <CalendarDays className="size-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent surface="glass" radius="xl" className="w-64">
            <p className="text-sm font-semibold">Popover</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Floating surfaces keep the same glass language.
            </p>
          </PopoverContent>
        </Popover>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant="soft"
              size="icon"
              radius="full"
              className="pointer-events-auto absolute left-[19%] bottom-[14%] rotate-3 shadow-[0_18px_48px_rgba(0,0,0,0.16)]"
              aria-label="Hover card"
            >
              <MessageCircle className="size-4" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent surface="glass" radius="xl" size="sm">
            <p className="text-sm font-semibold">Hover Card</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Rich previews without leaving the hero.
            </p>
          </HoverCardContent>
        </HoverCard>

        <div className="pointer-events-auto absolute right-[1%] bottom-[2%] w-64 -rotate-2 rounded-2xl border border-white/20 bg-white/90 p-3 text-foreground shadow-[0_18px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl dark:bg-surface/90">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-placeholder" />
            <Input placeholder="Search components..." className="pl-9" />
          </div>
          <Pagination className="mt-3 justify-start">
            <PaginationContent className="justify-start">
              <PaginationItem>
                <PaginationLink href="#" size="icon-sm">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive size="icon-sm">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <div className="pointer-events-auto absolute left-[1%] bottom-[2%] flex rotate-2 items-center gap-3 rounded-2xl border border-white/20 bg-white/90 p-3 text-foreground shadow-[0_18px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl dark:bg-surface/90">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary-muted text-primary">
            <Users className="size-5" />
          </div>
          <div>
            <p className="text-sm font-semibold">Atoms → blocks</p>
            <p className="text-xs text-muted-foreground">Composable surfaces.</p>
          </div>
          <Button variant="ghost" size="icon" aria-label="Open settings">
            <SlidersHorizontal className="size-4" />
          </Button>
        </div>

        <div className="pointer-events-auto absolute left-[34%] bottom-[2%] w-52 rotate-1 rounded-2xl border border-white/20 bg-white/90 p-3 text-foreground shadow-[0_18px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl dark:bg-surface/90">
          <ScrollArea maxHeight={112} scrollbarSize="sm">
            <div className="space-y-2 pr-2">
              {["Button", "Card", "Form", "Tabs", "Sonner"].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl bg-background/70 px-3 py-2 text-sm"
                >
                  <span>{item}</span>
                  <Star className="size-3.5 fill-primary text-primary" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="pointer-events-auto absolute left-[72%] top-[44%] w-52 rotate-3 space-y-2 rounded-2xl border border-white/20 bg-white/90 p-3 text-foreground shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl dark:bg-surface/90">
          <MaskedInput mask="AA-###" defaultValue="UI300" placeholder="UI-300" />
          <PhoneInput defaultValue="5551234567" />
          <UrlInput defaultValue="poyraz-ui.dev" />
        </div>
      </div>
    </TooltipProvider>
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
        <InteractiveComponentPanel />

        <div className="mx-auto flex w-full max-w-5xl items-center">
          <div className="flex max-w-[34rem] flex-col items-start space-y-7 text-left">
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
              className="max-w-3xl text-[clamp(2.5rem,8vw,3rem)] leading-[0.9] text-white"
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
        </div>
      </section>
    </main>
  );
}
