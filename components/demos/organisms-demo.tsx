"use client";

import * as React from "react";
import {
  MapPin,
  Rss,
  Activity,
  Settings,
  Globe,
  Home,
  FileText,
  CreditCard,
  BarChart3,
  Users,
  Package,
  HelpCircle,
  LogOut,
  Github,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

import { Button } from "@/components/ui/atoms/button";
import { Logo } from "@/components/ui/atoms/logo";
import {
  Navbar,
  NavbarTopBar,
  NavbarMain,
  NavbarBrand,
  NavbarLinks,
  NavbarLink,
  NavbarDropdown,
  NavbarMegaMenu,
  NavbarMegaMenuItem,
  NavbarActions,
  NavbarMobileToggle,
  NavbarMobileMenu,
  NavbarMobileLink,
} from "@/components/ui/organisms/navbar";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/organisms/sidebar";
import {
  Footer,
  FooterGrid,
  FooterSection,
  FooterHeading,
  FooterLink,
  FooterBrand,
  FooterSocials,
  FooterSocialLink,
  FooterBottom,
  FooterBottomLinks,
} from "@/components/ui/organisms/footer";

/* ================================================================== */
/*  NAVBAR DEMOS                                                       */
/* ================================================================== */

function TopBarContent() {
  return (
    <>
      <div className="flex items-center gap-2">
        <MapPin className="h-3 w-3" />
        <span>
          Based in <strong>Ankara</strong>,{" "}
          {new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <a href="#" className="flex items-center gap-1 hover:underline">
          <Globe className="h-3 w-3" /> Social Links
        </a>
        <span className="opacity-50">|</span>
        <a href="#" className="flex items-center gap-1 hover:underline">
          <Rss className="h-3 w-3" /> RSS
        </a>
        <span className="opacity-50">|</span>
        <a href="#" className="flex items-center gap-1 hover:underline">
          <Activity className="h-3 w-3" /> Status
        </a>
        <span className="opacity-50">|</span>
        <a href="#" className="flex items-center gap-1 hover:underline">
          <Settings className="h-3 w-3" /> Settings
        </a>
      </div>
    </>
  );
}

function SharedNavLinks() {
  return (
    <>
      <NavbarDropdown label="Showcase">
        <NavbarMegaMenu className="grid-cols-[200px_1fr_1fr]">
          <div className="flex flex-col gap-1">
            <NavbarMegaMenuItem
              href="#"
              title="Portfolio"
              description="Our latest projects"
            />
            <NavbarMegaMenuItem
              href="#"
              title="Case Studies"
              description="In-depth project analysis"
            />
            <NavbarMegaMenuItem
              href="#"
              title="Tech Stack"
              description="Tools we use daily"
            />
            <NavbarMegaMenuItem
              href="#"
              title="Open Source"
              description="Community contributions"
            />
          </div>
          <div className="bg-slate-100 border-2 border-dashed border-slate-200 p-4 flex items-center justify-center min-h-[150px]">
            <span className="text-xs text-slate-400 uppercase tracking-wider">
              Featured Project
            </span>
          </div>
          <div className="bg-slate-100 border-2 border-dashed border-slate-200 p-4 flex items-center justify-center min-h-[150px]">
            <span className="text-xs text-slate-400 uppercase tracking-wider">
              Latest Work
            </span>
          </div>
        </NavbarMegaMenu>
      </NavbarDropdown>
      <NavbarDropdown label="Products">
        <NavbarMegaMenu className="grid-cols-2">
          <NavbarMegaMenuItem
            href="#"
            title="Poyraz UI"
            description="Brutalist component library"
          />
          <NavbarMegaMenuItem
            href="#"
            title="Design System"
            description="Complete design tokens"
          />
          <NavbarMegaMenuItem
            href="#"
            title="CLI Tool"
            description="Scaffold projects fast"
          />
          <NavbarMegaMenuItem
            href="#"
            title="Templates"
            description="Ready-to-use page templates"
          />
        </NavbarMegaMenu>
      </NavbarDropdown>
      <NavbarDropdown label="Resources">
        <NavbarMegaMenu className="grid-cols-2">
          <NavbarMegaMenuItem
            href="#"
            title="Documentation"
            description="Guides and references"
          />
          <NavbarMegaMenuItem
            href="#"
            title="Blog"
            description="Articles and tutorials"
          />
        </NavbarMegaMenu>
      </NavbarDropdown>
      <NavbarLink href="#">Pricing</NavbarLink>
      <NavbarLink href="#">Contact</NavbarLink>
    </>
  );
}

/* ================================================================== */
/*  SIDEBAR CONTENT SHARED                                             */
/* ================================================================== */

function DashboardSidebarContent({
  showLabels = true,
}: {
  showLabels?: boolean;
}) {
  return (
    <>
      <SidebarGroup>
        {showLabels && <SidebarGroupLabel>Main</SidebarGroupLabel>}
        <SidebarMenu>
          <SidebarMenuItem icon={<Home className="h-4 w-4" />} active>
            Dashboard
          </SidebarMenuItem>
          <SidebarMenuItem icon={<FileText className="h-4 w-4" />} badge="3">
            Invoices
          </SidebarMenuItem>
          <SidebarMenuItem icon={<CreditCard className="h-4 w-4" />}>
            Payments
          </SidebarMenuItem>
          <SidebarMenuItem icon={<Users className="h-4 w-4" />}>
            Clients
          </SidebarMenuItem>
          <SidebarMenuItem icon={<Package className="h-4 w-4" />}>
            Products
          </SidebarMenuItem>
          <SidebarMenuItem icon={<BarChart3 className="h-4 w-4" />} badge="New">
            Analytics
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
      <SidebarSeparator />
      <SidebarGroup>
        {showLabels && <SidebarGroupLabel>Support</SidebarGroupLabel>}
        <SidebarMenu>
          <SidebarMenuItem icon={<Settings className="h-4 w-4" />}>
            Settings
          </SidebarMenuItem>
          <SidebarMenuItem icon={<HelpCircle className="h-4 w-4" />}>
            Help
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}

/* ================================================================== */
/*  DEMO COMPONENT                                                     */
/* ================================================================== */

export function OrganismsDemo() {
  return (
    <div className="space-y-16 w-full">
      {/* ──────────────────────────────────────────── */}
      {/* NAVBAR SECTION                               */}
      {/* ──────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold border-b-2 border-dashed border-slate-200 pb-3">
        Navbar
      </h2>

      {/* DEFAULT */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Navbar — Default</h3>
        <p className="text-sm text-slate-500 mb-4">
          Full navbar with top bar, mega-menu dropdowns and CTA buttons.
        </p>
        <div className="border-2 border-dashed border-slate-200 overflow-visible">
          <Navbar variant="default">
            <NavbarTopBar>
              <TopBarContent />
            </NavbarTopBar>
            <NavbarMain>
              <NavbarBrand>
                <Logo width={40} height={40} />
              </NavbarBrand>
              <NavbarLinks>
                <SharedNavLinks />
              </NavbarLinks>
              <NavbarActions>
                <Button variant="outline" size="sm">
                  Login
                </Button>
                <Button size="sm">Let&apos;s Start</Button>
              </NavbarActions>
              <NavbarMobileToggle />
            </NavbarMain>
            <NavbarMobileMenu>
              <NavbarMobileLink href="#">Showcase</NavbarMobileLink>
              <NavbarMobileLink href="#">Products</NavbarMobileLink>
              <NavbarMobileLink href="#">Resources</NavbarMobileLink>
              <NavbarMobileLink href="#">Pricing</NavbarMobileLink>
              <NavbarMobileLink href="#">Contact</NavbarMobileLink>
            </NavbarMobileMenu>
          </Navbar>
        </div>
      </section>

      {/* MINIMAL */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Navbar — Minimal</h3>
        <p className="text-sm text-slate-500 mb-4">
          No top bar. Ideal for SaaS dashboards and internal tools.
        </p>
        <div className="border-2 border-dashed border-slate-200 overflow-visible">
          <Navbar variant="minimal">
            <NavbarMain>
              <NavbarBrand>
                <Logo width={40} height={40} />
              </NavbarBrand>
              <NavbarLinks>
                <SharedNavLinks />
              </NavbarLinks>
              <NavbarActions>
                <Button variant="outline" size="sm">
                  Login
                </Button>
                <Button size="sm">Let&apos;s Start</Button>
              </NavbarActions>
              <NavbarMobileToggle />
            </NavbarMain>
          </Navbar>
        </div>
      </section>

      {/* TRANSPARENT */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Navbar — Transparent</h3>
        <p className="text-sm text-slate-500 mb-4">
          For overlaying on hero sections and colored backgrounds.
        </p>
        <div className="border-2 border-dashed border-slate-200 overflow-visible bg-gradient-to-r from-red-600 to-red-700">
          <Navbar variant="transparent">
            <NavbarMain className="text-white">
              <NavbarBrand>
                <Logo width={40} height={40} />
              </NavbarBrand>
              <NavbarLinks>
                <NavbarLink
                  href="#"
                  className="text-white/90 hover:text-white hover:bg-white/10"
                >
                  Home
                </NavbarLink>
                <NavbarLink
                  href="#"
                  className="text-white/90 hover:text-white hover:bg-white/10"
                >
                  About
                </NavbarLink>
                <NavbarLink
                  href="#"
                  className="text-white/90 hover:text-white hover:bg-white/10"
                >
                  Services
                </NavbarLink>
                <NavbarLink
                  href="#"
                  className="text-white/90 hover:text-white hover:bg-white/10"
                >
                  Contact
                </NavbarLink>
              </NavbarLinks>
              <NavbarActions>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/50 text-white hover:bg-white hover:text-red-600"
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  className="bg-white text-red-600 border-white hover:bg-white/90"
                >
                  Get Started
                </Button>
              </NavbarActions>
              <NavbarMobileToggle className="border-white/50 text-white hover:bg-white/10" />
            </NavbarMain>
          </Navbar>
        </div>
      </section>

      {/* ──────────────────────────────────────────── */}
      {/* SIDEBAR SECTION                              */}
      {/* ──────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold border-b-2 border-dashed border-slate-200 pb-3">
        Sidebar
      </h2>

      {/* DEFAULT */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Sidebar — Default</h3>
        <p className="text-sm text-slate-500 mb-4">
          Fixed full-width sidebar for SaaS dashboards and admin panels.
        </p>
        <div className="border-2 border-dashed border-slate-200 h-[420px] flex">
          <Sidebar variant="default">
            <SidebarHeader>
              <Logo width={32} height={32} />
              <span className="text-sm font-bold tracking-tight">
                Invoice App
              </span>
            </SidebarHeader>
            <SidebarContent>
              <DashboardSidebarContent />
            </SidebarContent>
            <SidebarFooter>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-red-600 border-2 border-dashed border-red-800 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">PA</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">Poyraz A.</p>
                  <p className="text-[10px] text-slate-400 truncate">
                    admin@poyraz.dev
                  </p>
                </div>
                <LogOut className="h-4 w-4 text-slate-400 hover:text-red-600 cursor-pointer transition-colors" />
              </div>
            </SidebarFooter>
          </Sidebar>
          <div className="flex-1 p-6 bg-slate-50 flex items-center justify-center">
            <span className="text-sm text-slate-400">Main Content Area</span>
          </div>
        </div>
      </section>

      {/* COLLAPSIBLE */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Sidebar — Collapsible</h3>
        <p className="text-sm text-slate-500 mb-4">
          Collapses to icon-only rail. Click the trigger to toggle. Tooltips on
          hover when collapsed.
        </p>
        <div className="border-2 border-dashed border-slate-200 h-[420px] flex">
          <Sidebar variant="collapsible" defaultCollapsed={false}>
            <SidebarHeader>
              <Logo width={32} height={32} />
              <SidebarTrigger className="ml-auto" />
            </SidebarHeader>
            <SidebarContent>
              <DashboardSidebarContent />
            </SidebarContent>
            <SidebarFooter>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 shrink-0 bg-red-600 border-2 border-dashed border-red-800 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">PA</span>
                </div>
              </div>
            </SidebarFooter>
          </Sidebar>
          <div className="flex-1 p-6 bg-slate-50 flex items-center justify-center">
            <span className="text-sm text-slate-400">
              Main Content — Click the toggle to collapse
            </span>
          </div>
        </div>
      </section>

      {/* MINI */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Sidebar — Mini</h3>
        <p className="text-sm text-slate-500 mb-4">
          Always icon-only rail. Hover on items to see tooltip labels.
        </p>
        <div className="border-2 border-dashed border-slate-200 h-[420px] flex">
          <Sidebar variant="mini">
            <SidebarHeader>
              <div className="h-8 w-8 bg-red-600 border-2 border-dashed border-red-800 flex items-center justify-center">
                <span className="text-white text-xs font-bold">P</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <DashboardSidebarContent showLabels={false} />
            </SidebarContent>
            <SidebarFooter>
              <Settings className="h-4 w-4 text-slate-400 mx-auto cursor-pointer hover:text-red-600 transition-colors" />
            </SidebarFooter>
          </Sidebar>
          <div className="flex-1 p-6 bg-slate-50 flex items-center justify-center">
            <span className="text-sm text-slate-400">
              Main Content — Hover sidebar icons for tooltips
            </span>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────── */}
      {/* FOOTER SECTION                               */}
      {/* ──────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold border-b-2 border-dashed border-slate-200 pb-3">
        Footer
      </h2>

      {/* FULL */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Footer — Full</h3>
        <p className="text-sm text-slate-500 mb-4">
          Multi-column layout for portfolio, hub, and public-facing projects.
        </p>
        <div className="border-2 border-dashed border-slate-200">
          <Footer variant="full">
            <FooterGrid>
              <FooterSection>
                <FooterHeading>Product</FooterHeading>
                <FooterLink href="#">Features</FooterLink>
                <FooterLink href="#">Pricing</FooterLink>
                <FooterLink href="#">Changelog</FooterLink>
                <FooterLink href="#">Roadmap</FooterLink>
              </FooterSection>
              <FooterSection>
                <FooterHeading>Resources</FooterHeading>
                <FooterLink href="#">Documentation</FooterLink>
                <FooterLink href="#">API Reference</FooterLink>
                <FooterLink href="#">Guides</FooterLink>
                <FooterLink href="#">Blog</FooterLink>
              </FooterSection>
              <FooterSection>
                <FooterHeading>Company</FooterHeading>
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Careers</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
                <FooterLink href="#">Press</FooterLink>
              </FooterSection>
              <FooterSection>
                <FooterHeading>Connect</FooterHeading>
                <FooterSocials>
                  <FooterSocialLink href="#" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </FooterSocialLink>
                  <FooterSocialLink href="#" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </FooterSocialLink>
                  <FooterSocialLink href="#" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </FooterSocialLink>
                  <FooterSocialLink href="#" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </FooterSocialLink>
                </FooterSocials>
              </FooterSection>
            </FooterGrid>
            <FooterBottom>
              <span>
                &copy; {new Date().getFullYear()} Poyraz. All rights reserved.
              </span>
              <FooterBottomLinks>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms of Service</FooterLink>
                <FooterLink href="#">Cookie Policy</FooterLink>
              </FooterBottomLinks>
            </FooterBottom>
          </Footer>
        </div>
      </section>

      {/* COMPACT */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Footer — Compact</h3>
        <p className="text-sm text-slate-500 mb-4">
          Single-line footer for SaaS dashboards and internal tools.
        </p>
        <div className="border-2 border-dashed border-slate-200">
          <Footer
            variant="compact"
            className="flex items-center justify-between"
          >
            <span className="text-xs text-slate-400">
              &copy; {new Date().getFullYear()} Poyraz. All rights reserved.
            </span>
            <FooterBottomLinks>
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Terms</FooterLink>
              <FooterLink href="#">Status</FooterLink>
            </FooterBottomLinks>
          </Footer>
        </div>
      </section>

      {/* BRANDED */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Footer — Branded</h3>
        <p className="text-sm text-slate-500 mb-4">
          Logo + tagline + CTA for landing pages and marketing sites.
        </p>
        <div className="border-2 border-dashed border-slate-200">
          <Footer variant="branded">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <FooterBrand>
                <div className="flex items-center gap-3">
                  <Logo width={40} height={40} />
                  <span className="text-xl font-bold tracking-tight">
                    Poyraz
                  </span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Brutalist UI components for modern web applications. No
                  rounding, no shadows — just bold design.
                </p>
                <Button size="sm">Get Started Free</Button>
              </FooterBrand>
              <FooterGrid className="flex-1 max-w-lg grid-cols-2">
                <FooterSection>
                  <FooterHeading>Product</FooterHeading>
                  <FooterLink href="#">Components</FooterLink>
                  <FooterLink href="#">Templates</FooterLink>
                  <FooterLink href="#">Pricing</FooterLink>
                </FooterSection>
                <FooterSection>
                  <FooterHeading>Support</FooterHeading>
                  <FooterLink href="#">Documentation</FooterLink>
                  <FooterLink href="#">Discord</FooterLink>
                  <FooterLink href="#">GitHub</FooterLink>
                </FooterSection>
              </FooterGrid>
            </div>
            <FooterBottom>
              <span>
                &copy; {new Date().getFullYear()} Poyraz. Built with ❤️ in
                Ankara.
              </span>
              <FooterSocials>
                <FooterSocialLink href="#" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </FooterSocialLink>
                <FooterSocialLink href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </FooterSocialLink>
                <FooterSocialLink href="#" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </FooterSocialLink>
              </FooterSocials>
            </FooterBottom>
          </Footer>
        </div>
      </section>
    </div>
  );
}
