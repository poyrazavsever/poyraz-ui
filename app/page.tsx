"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Github,
  Copy,
  Check,
  BookOpen,
  Shield,
  CheckCircle,
  ChevronRight,
  Loader2,
  SlidersHorizontal,
  Users,
  BarChart3,
  TrendingUp,
  Activity,
  CircleDot,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { toast } from "poyraz-ui/molecules";

import { Button } from "poyraz-ui/atoms";
import { Typography } from "poyraz-ui/atoms";
import { Badge } from "poyraz-ui/atoms";
import { Logo } from "poyraz-ui/atoms";
import { Input } from "poyraz-ui/atoms";
import { Checkbox } from "poyraz-ui/atoms";
import { Label } from "poyraz-ui/atoms";
import { Separator } from "poyraz-ui/atoms";
import { RadioGroup, RadioGroupItem } from "poyraz-ui/atoms";
import { Avatar, AvatarFallback, AvatarImage } from "poyraz-ui/atoms";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "poyraz-ui/atoms";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "poyraz-ui/molecules";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "poyraz-ui/molecules";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "poyraz-ui/molecules";
import {
  Navbar,
  NavbarMain,
  NavbarBrand,
  NavbarLinks,
  NavbarLink,
  NavbarSearch,
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
import { ThemeToggle } from "@/components/theme-toggle";

/* ── Copy Install Command ───────────────────────────────────────── */

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

/* ── Showcase Cards (shadcn-style) ──────────────────────────────── */

function PaymentMethodCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-base">Payment Method</CardTitle>
        <CardDescription>All transactions are secure and encrypted</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Name on Card</Label>
          <Input placeholder="John Doe" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2 space-y-2">
            <Label>Card Number</Label>
            <Input placeholder="1234 5678 9012 3456" />
          </div>
          <div className="space-y-2">
            <Label>CVV</Label>
            <Input placeholder="123" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label>Month</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="MM" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="01">01</SelectItem>
                <SelectItem value="02">02</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Year</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="YYYY" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2026">2026</SelectItem>
                <SelectItem value="2027">2027</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TeamMembersCard() {
  return (
    <Card className="w-full">
      <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
        <div className="flex -space-x-2">
          <Avatar className="h-8 w-8 border-2 border-background">
            <AvatarImage src="https://i.pravatar.cc/40?img=1" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Avatar className="h-8 w-8 border-2 border-background">
            <AvatarImage src="https://i.pravatar.cc/40?img=2" />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Avatar className="h-8 w-8 border-2 border-background">
            <AvatarImage src="https://i.pravatar.cc/40?img=3" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <p className="font-semibold text-sm">No Team Members</p>
          <p className="text-xs text-muted-foreground mt-1">
            Invite your team to collaborate on this project.
          </p>
        </div>
        <Button variant="outline" size="sm">
          <Users className="mr-1.5 h-3.5 w-3.5" /> Invite Members
        </Button>
      </CardContent>
    </Card>
  );
}

function SecurityCard() {
  return (
    <Card className="w-full">
      <CardContent className="pt-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-semibold">Two-factor authentication</p>
              <p className="text-xs text-muted-foreground">Verify via email or phone number.</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Enable
          </Button>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-success-solid" />
            <p className="text-sm">Your profile has been verified.</p>
          </div>
          <ChevronRight className="h-4 w-4 text-placeholder" />
        </div>
      </CardContent>
    </Card>
  );
}

function AppearanceCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-sm">Appearance Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Compute Environment</Label>
          <RadioGroup defaultValue="kubernetes" className="space-y-2">
            <div className="flex items-start gap-3 rounded-sm border border-border p-3">
              <RadioGroupItem value="kubernetes" id="k8s" className="mt-0.5" />
              <div>
                <Label htmlFor="k8s" className="normal-case font-medium text-sm">
                  Kubernetes
                </Label>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Run GPU workloads on a K8s configured cluster.
                </p>
              </div>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
}

function StatusBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="gap-1.5">
        <Loader2 className="h-3 w-3 animate-spin" /> Syncing
      </Badge>
      <Badge variant="outline" className="gap-1.5">
        <Loader2 className="h-3 w-3 animate-spin" /> Updating
      </Badge>
      <Badge variant="outline" className="gap-1.5">
        <Loader2 className="h-3 w-3 animate-spin" /> Loading
      </Badge>
    </div>
  );
}

function ChatInput() {
  return (
    <div className="flex items-center gap-2 rounded-sm border border-border px-3 py-2">
      <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
        <span className="text-lg">+</span>
      </Button>
      <input
        className="flex-1 text-sm border-0 outline-none bg-transparent placeholder:text-placeholder"
        placeholder="Send a message..."
      />
      <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
        <SlidersHorizontal className="h-4 w-4" />
      </Button>
    </div>
  );
}

function CheckboxCard() {
  return (
    <div className="flex items-center gap-2.5 rounded-sm border border-border px-4 py-3">
      <Checkbox id="terms-home" defaultChecked />
      <Label htmlFor="terms-home" className="normal-case font-normal text-sm">
        I agree to the terms and conditions
      </Label>
    </div>
  );
}

function PaginationDemo() {
  return (
    <div className="flex items-center gap-3">
      <Pagination className="w-auto mx-0">
        <PaginationContent className="gap-1">
          <PaginationItem>
            <PaginationPrevious href="#" className="h-9 px-2" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive className="h-9 w-9">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="h-9 w-9">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="h-9 w-9">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="h-9 px-2" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

/* ── Dashboard Showcase ─────────────────────────────────────────── */

function DashboardShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Stats row */}
      <Card className="w-full">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Total Revenue</p>
              <p className="text-xl font-bold mt-1">$45,231</p>
              <p className="text-xs text-success-solid mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> +20.1%
              </p>
            </div>
            <div className="h-8 w-8 rounded-sm bg-primary-muted flex items-center justify-center">
              <BarChart3 className="h-4 w-4 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Subscriptions</p>
              <p className="text-xl font-bold mt-1">+2,350</p>
              <p className="text-xs text-success-solid mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> +180.1%
              </p>
            </div>
            <div className="h-8 w-8 rounded-sm bg-accent flex items-center justify-center">
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Active Now</p>
              <p className="text-xl font-bold mt-1">+573</p>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <Activity className="h-3 w-3" /> +201 since last hour
              </p>
            </div>
            <div className="h-8 w-8 rounded-sm bg-success flex items-center justify-center">
              <Activity className="h-4 w-4 text-success-solid" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent sales */}
      <Card className="w-full lg:row-span-2">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Recent Sales</CardTitle>
          <CardDescription>You made 265 sales this month.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              name: "Olivia Martin",
              email: "olivia@email.com",
              amount: "+$1,999",
            },
            { name: "Jackson Lee", email: "jackson@email.com", amount: "+$39" },
            {
              name: "Isabella Nguyen",
              email: "isabella@email.com",
              amount: "+$299",
            },
            { name: "William Kim", email: "will@email.com", amount: "+$99" },
          ].map((sale) => (
            <div key={sale.email} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-[10px]">
                    {sale.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{sale.name}</p>
                  <p className="text-xs text-muted-foreground">{sale.email}</p>
                </div>
              </div>
              <span className="text-sm font-semibold">{sale.amount}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Chart placeholder */}
      <Card className="w-full lg:col-span-3">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-1.5 h-32">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 50].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-primary/80 rounded-t-sm transition-all hover:bg-primary"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-placeholder">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ── Tasks Showcase ─────────────────────────────────────────────── */

function TasksShowcase() {
  const tasks = [
    {
      id: 1,
      label: "TASK-8782",
      title: "You can't compress the program without quantifying the open-source SSD.",
      status: "In Progress",
      priority: "Medium",
      checked: false,
    },
    {
      id: 2,
      label: "TASK-7878",
      title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
      status: "Backlog",
      priority: "High",
      checked: false,
    },
    {
      id: 3,
      label: "TASK-7839",
      title: "We need to bypass the neural TCP card!",
      status: "Todo",
      priority: "High",
      checked: true,
    },
    {
      id: 4,
      label: "TASK-5562",
      title: "The SAS interface is down, bypass the open-source pixel so we can program.",
      status: "Backlog",
      priority: "Medium",
      checked: false,
    },
    {
      id: 5,
      label: "TASK-8686",
      title: "I'll parse the wireless SSL protocol, that should driver the API panel!",
      status: "Canceled",
      priority: "Low",
      checked: false,
    },
    {
      id: 6,
      label: "TASK-1280",
      title: "Use the digital TLS panel, then you can transmit the haptic system!",
      status: "Done",
      priority: "High",
      checked: true,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold">Welcome back!</h3>
          <p className="text-sm text-muted-foreground">
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Filter tasks..." className="w-48 h-9" />
          <Button variant="outline" size="sm">
            View
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card className="w-full overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-3 text-left w-10">
                  <Checkbox />
                </th>
                <th className="p-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                  Task
                </th>
                <th className="p-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                  Title
                </th>
                <th className="p-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                  Status
                </th>
                <th className="p-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                  Priority
                </th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="border-b border-border last:border-0">
                  <td className="p-3">
                    <Checkbox defaultChecked={task.checked} />
                  </td>
                  <td className="p-3 font-mono text-xs text-muted-foreground">{task.label}</td>
                  <td className="p-3 max-w-xs truncate">{task.title}</td>
                  <td className="p-3">
                    <Badge variant="outline" className="text-[10px] gap-1">
                      <CircleDot className="h-3 w-3" />
                      {task.status}
                    </Badge>
                  </td>
                  <td className="p-3">
                    <span
                      className={`text-xs font-medium ${
                        task.priority === "High"
                          ? "text-primary"
                          : task.priority === "Medium"
                            ? "text-warning-solid"
                            : "text-placeholder"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-4 py-3 border-t border-border">
          <p className="text-xs text-muted-foreground">0 of {tasks.length} row(s) selected.</p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 text-xs">
              Previous
            </Button>
            <Button variant="outline" size="sm" className="h-8 text-xs">
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

/* ── Auth Showcase ──────────────────────────────────────────────── */

function AuthShowcase() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Login Card */}
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-lg">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-placeholder" />
              <Input placeholder="m@example.com" className="pl-9" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Password</Label>
              <button className="text-xs text-primary hover:underline cursor-pointer">
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-placeholder" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pl-9 pr-9"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-placeholder hover:text-muted-foreground cursor-pointer"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="normal-case font-normal text-sm">
              Remember me
            </Label>
          </div>
          <Button className="w-full">Login</Button>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-xs text-muted-foreground">
            Don&apos;t have an account?{" "}
            <span className="text-primary font-medium cursor-pointer hover:underline">Sign up</span>
          </p>
        </CardFooter>
      </Card>

      {/* Create Account Card */}
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-lg">Create Account</CardTitle>
          <CardDescription>Enter your information to create an account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label>First Name</Label>
              <Input placeholder="Poyraz" />
            </div>
            <div className="space-y-2">
              <Label>Last Name</Label>
              <Input placeholder="Avsever" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input placeholder="m@example.com" />
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full">Create Account</Button>
          <div className="relative">
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-placeholder">
              OR
            </span>
          </div>
          <Button variant="outline" className="w-full">
            <Github className="mr-2 h-4 w-4" /> Sign up with GitHub
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

/* ── Main Page ──────────────────────────────────────────────────── */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ─── NAVBAR ──────────────────────────────────────── */}
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

      {/* ─── HERO ────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden px-6 pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full dark:hidden"
          preserveAspectRatio="none"
          viewBox="0 0 1920 1080"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1920" height="1080" fill="rgb(150, 0, 0)" />
          <g>
            <path
              fill="rgb(179, 23, 23)"
              d="M0,294.371L40,294.641C80,294.911,160,295.452,240,261.866C320,228.281,400,160.57,480,157.048C560,153.526,640,214.192,720,256.716C800,299.24,880,323.621,960,297.815C1040,272.009,1120,196.015,1200,164.517C1280,133.02,1360,146.018,1440,155.868C1520,165.718,1600,172.42,1680,199.488C1760,226.557,1840,273.991,1880,297.709L1920,321.426L1920,1080L0,1080Z"
            />
          </g>
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
          <g>
            <path
              fill="rgb(62, 8, 8)"
              d="M0,294.371L40,294.641C80,294.911,160,295.452,240,261.866C320,228.281,400,160.57,480,157.048C560,153.526,640,214.192,720,256.716C800,299.24,880,323.621,960,297.815C1040,272.009,1120,196.015,1200,164.517C1280,133.02,1360,146.018,1440,155.868C1520,165.718,1600,172.42,1680,199.488C1760,226.557,1840,273.991,1880,297.709L1920,321.426L1920,1080L0,1080Z"
            />
          </g>
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
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.24),transparent_38%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.2))]" />
        <div className="mx-auto flex max-w-5xl flex-col items-center space-y-8 text-center">
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
            className="max-w-4xl text-[clamp(3.75rem,10vw,8.5rem)] leading-[0.9] text-white"
          >
            <span className="font-secondary text-white">UI Kit</span> for Poyraz
          </Typography>

          <Typography variant="lead" className="max-w-2xl text-white/82">
            Minimal design system for modern web applications.
            <span className="mt-2 block font-medium text-white">
              Clean borders. Subtle rounding. Modern, functional design.
            </span>
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center">
            <Link href="/docs">
              <Button
                size="lg"
                effect="swap"
                className="w-full border-white bg-white text-primary shadow-[0_16px_50px_rgba(0,0,0,0.22)] hover:border-white hover:bg-white/90 sm:w-auto"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href={socialLinks.repo} target="_blank">
              <Button
                variant="outline"
                size="lg"
                effect="swap"
                className="w-full border-white/35 bg-white/10 text-white backdrop-blur-md hover:border-white/60 hover:bg-white/15 sm:w-auto"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </Link>
          </div>

          <CopyInstallCommand />
        </div>
      </section>

      {/* ─── COMPONENT SHOWCASE ──────────────────────────── */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="examples">
            <TabsList className="mb-6">
              <TabsTrigger value="examples">Examples</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="auth">Authentication</TabsTrigger>
            </TabsList>

            <TabsContent value="examples">
              {/* Component grid — shadcn-style */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Col 1 — Payment */}
                <div className="space-y-6 lg:col-span-1">
                  <PaymentMethodCard />
                  <CheckboxCard />
                </div>
                {/* Col 2 — Team + badges + chat */}
                <div className="space-y-6 lg:col-span-1">
                  <TeamMembersCard />
                  <StatusBadges />
                  <ChatInput />
                </div>
                {/* Col 3 — Security + Appearance + Actions */}
                <div className="space-y-6 lg:col-span-1">
                  <SecurityCard />
                  <AppearanceCard />
                  <PaginationDemo />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="dashboard">
              <DashboardShowcase />
            </TabsContent>

            <TabsContent value="tasks">
              <TasksShowcase />
            </TabsContent>

            <TabsContent value="auth">
              <AuthShowcase />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="px-6 py-20 bg-muted/80 border-y border-border">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <Typography variant="h2">Ready to Build?</Typography>
          <Typography variant="muted" className="max-w-lg mx-auto">
            Start using Poyraz UI in your projects today. Free, open-source, and built with care.
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

      {/* ─── FOOTER ──────────────────────────────────────── */}
      <Footer variant="branded" className="mt-auto border-t border-border">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <FooterBrand>
            <div className="flex items-center gap-3">
              <Logo width={40} height={40} />
              <span className="text-lg font-bold tracking-tight">Poyraz UI</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              An open-source minimal UI component library for modern web applications.
            </p>
          </FooterBrand>
          <FooterGrid className="flex-1 grid-cols-1 gap-10 sm:grid-cols-2 lg:max-w-xl lg:gap-14">
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
          <span>&copy; {new Date().getFullYear()} Poyraz Avsever. MIT License.</span>
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
