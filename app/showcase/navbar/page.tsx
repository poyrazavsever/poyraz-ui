"use client";

import Link from "next/link";
import {
  Navbar,
  NavbarTopBar,
  NavbarTopBarSection,
  NavbarMain,
  NavbarBrand,
  NavbarLinks,
  NavbarLink,
  NavbarDropdown,
  NavbarMegaMenu,
  NavbarMegaMenuLinks,
  NavbarMegaMenuFeatured,
  NavbarMegaMenuItem,
  NavbarPopoverDropdown,
  NavbarPopoverDropdownItem,
  NavbarPanelDropdown,
  NavbarPanelDropdownItem,
  NavbarActions,
  NavbarMobileToggle,
  NavbarMobileMenu,
  NavbarMobileLink,
  NavbarMobileGroup,
  NavbarMobileActions,
  NavbarMobileDropdown,
  NavbarMobileDrillMenu,
  NavbarMobileDrillTrigger,
  NavbarMobileDrillPanel,
  NavbarSearch,
  NavbarDivider,
} from "poyraz-ui/organisms";
import { Button } from "poyraz-ui/atoms";
import { Logo } from "poyraz-ui/atoms";
import {
  CreditCard,
  Shield,
  Wallet,
  FileText,
  Smartphone,
  ShoppingCart,
  BarChart3,
  Zap,
  Link2,
  Code,
  Globe,
  Phone,
  Mail,
  ArrowLeft,
} from "lucide-react";

/* ================================================================== */
/*  SECTION WRAPPER                                                    */
/* ================================================================== */

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="text-sm text-slate-500 mt-1">{description}</p>
      </div>
      {children}
    </section>
  );
}

function DemoBox({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-slate-200 rounded-sm bg-white overflow-visible ${className ?? ""}`}>
      {children}
    </div>
  );
}

/* ================================================================== */
/*  MOBILE PREVIEW FRAME                                               */
/* ================================================================== */

function MobileFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-[320px] h-[568px] border border-slate-300 rounded-lg bg-white overflow-hidden relative shadow-sm">
      {/* Status bar */}
      <div className="bg-slate-100 h-6 flex items-center justify-center">
        <span className="text-[10px] text-slate-400 font-medium">9:41</span>
      </div>
      <div className="h-[calc(100%-24px)] overflow-hidden relative">
        {children}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TABLE OF CONTENTS                                                  */
/* ================================================================== */

const sections = [
  { id: "basic-variants", label: "Basic Variants" },
  { id: "mega-menu", label: "Full-Width Mega Menu" },
  { id: "popover-dropdown", label: "Popover Dropdown" },
  { id: "panel-dropdown", label: "Panel Dropdown" },
  { id: "mixed-dropdowns", label: "Mixed Dropdowns" },
  { id: "topbar-announcement", label: "Top Bar: Announcement" },
  { id: "topbar-secondary", label: "Top Bar: Secondary Nav" },
  { id: "topbar-combined", label: "Top Bar + Main Nav" },
  { id: "mobile-accordion", label: "Mobile: Accordion" },
  { id: "mobile-drill-down", label: "Mobile: Drill-Down" },
  { id: "sticky-autohide", label: "Sticky + Auto-Hide" },
];

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */

export default function NavbarShowcasePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link
          href="/docs/organisms/navbar"
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 mb-4"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Docs
        </Link>
        <h1 className="text-2xl font-bold text-slate-900">Navbar Showcase</h1>
        <p className="text-sm text-slate-500 mt-2 max-w-2xl">
          Interactive showcase of all navbar variants: dropdown systems (full-width mega menu,
          popover, panel), top bar variants, and mobile navigation patterns (accordion, drill-down).
        </p>

        {/* TOC */}
        <nav className="mt-6 flex flex-wrap gap-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs font-medium px-2.5 py-1 border border-slate-200 rounded-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="space-y-16">
        {/* ─── 1. Basic Variants ─────────────────────────── */}
        <Section
          id="basic-variants"
          title="1. Basic Variants"
          description="Four navbar variants: default, minimal, transparent, and bordered."
        >
          <div className="space-y-4">
            {(["default", "minimal", "transparent", "bordered"] as const).map(
              (v) => (
                <div key={v}>
                  <p className="text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
                    {v}
                  </p>
                  <DemoBox
                    className={
                      v === "transparent"
                        ? "bg-gradient-to-r from-slate-100 to-slate-200"
                        : ""
                    }
                  >
                    <Navbar variant={v}>
                      <NavbarMain>
                        <NavbarBrand>
                          <Logo width={28} height={28} />
                        </NavbarBrand>
                        <NavbarLinks>
                          <NavbarLink href="#">Home</NavbarLink>
                          <NavbarLink href="#">Components</NavbarLink>
                          <NavbarLink href="#">Docs</NavbarLink>
                        </NavbarLinks>
                        <NavbarDivider />
                        <NavbarActions>
                          <Button variant="outline" size="sm">
                            Sign In
                          </Button>
                          <Button size="sm">Get Started</Button>
                        </NavbarActions>
                        <NavbarMobileToggle />
                      </NavbarMain>
                    </Navbar>
                  </DemoBox>
                </div>
              ),
            )}
          </div>
        </Section>

        {/* ─── 2. Full-Width Mega Menu ───────────────────── */}
        <Section
          id="mega-menu"
          title="2. Full-Width Mega Menu"
          description="Dropdown opens a full-width panel below the navbar. Supports full, columns, featured, and list layouts."
        >
          <div className="space-y-4">
            {/* Full layout */}
            <div>
              <p className="text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
                layout=&quot;full&quot;
              </p>
              <DemoBox>
                <Navbar>
                  <NavbarMain>
                    <NavbarBrand>
                      <Logo width={28} height={28} />
                    </NavbarBrand>
                    <NavbarLinks>
                      <NavbarLink href="#">Home</NavbarLink>
                      <NavbarDropdown label="Products">
                        <NavbarMegaMenu layout="full">
                          <NavbarMegaMenuItem
                            href="#"
                            title="Analytics"
                            description="Real-time data dashboards"
                          />
                          <NavbarMegaMenuItem
                            href="#"
                            title="Automation"
                            description="Workflow automation tools"
                          />
                          <NavbarMegaMenuItem
                            href="#"
                            title="Integrations"
                            description="Connect your favorite tools"
                          />
                          <NavbarMegaMenuItem
                            href="#"
                            title="API"
                            description="Build custom solutions"
                          />
                        </NavbarMegaMenu>
                      </NavbarDropdown>
                      <NavbarLink href="#">Pricing</NavbarLink>
                    </NavbarLinks>
                    <NavbarActions>
                      <Button size="sm">Get Started</Button>
                    </NavbarActions>
                    <NavbarMobileToggle />
                  </NavbarMain>
                </Navbar>
              </DemoBox>
            </div>

            {/* Featured layout */}
            <div>
              <p className="text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
                layout=&quot;featured&quot;
              </p>
              <DemoBox>
                <Navbar>
                  <NavbarMain>
                    <NavbarBrand>
                      <Logo width={28} height={28} />
                    </NavbarBrand>
                    <NavbarLinks>
                      <NavbarLink href="#">Home</NavbarLink>
                      <NavbarDropdown label="Products">
                        <NavbarMegaMenu layout="featured">
                          <NavbarMegaMenuLinks>
                            <NavbarMegaMenuItem
                              href="#"
                              title="Analytics"
                              description="Real-time data dashboards"
                            />
                            <NavbarMegaMenuItem
                              href="#"
                              title="Automation"
                              description="Workflow automation tools"
                            />
                            <NavbarMegaMenuItem
                              href="#"
                              title="Integrations"
                              description="Connect your favorite tools"
                            />
                            <NavbarMegaMenuItem
                              href="#"
                              title="API"
                              description="Build custom solutions"
                            />
                          </NavbarMegaMenuLinks>
                          <NavbarMegaMenuFeatured>
                            <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">
                              What&apos;s New
                            </p>
                            <p className="text-sm font-medium">v2.0 Released</p>
                            <p className="text-xs text-slate-500 mt-1">
                              New dashboard, faster builds, and 20+ new components.
                            </p>
                            <Button size="sm" className="mt-3">
                              Learn More
                            </Button>
                          </NavbarMegaMenuFeatured>
                        </NavbarMegaMenu>
                      </NavbarDropdown>
                      <NavbarLink href="#">Pricing</NavbarLink>
                    </NavbarLinks>
                    <NavbarActions>
                      <Button size="sm">Get Started</Button>
                    </NavbarActions>
                    <NavbarMobileToggle />
                  </NavbarMain>
                </Navbar>
              </DemoBox>
            </div>

            {/* Columns layout */}
            <div>
              <p className="text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
                layout=&quot;columns&quot;
              </p>
              <DemoBox>
                <Navbar>
                  <NavbarMain>
                    <NavbarBrand>
                      <Logo width={28} height={28} />
                    </NavbarBrand>
                    <NavbarLinks>
                      <NavbarLink href="#">Home</NavbarLink>
                      <NavbarDropdown label="Resources">
                        <NavbarMegaMenu layout="columns">
                          <NavbarMegaMenuItem
                            href="#"
                            title="Documentation"
                            description="Guides and references"
                          />
                          <NavbarMegaMenuItem
                            href="#"
                            title="Tutorials"
                            description="Step-by-step walkthroughs"
                          />
                          <NavbarMegaMenuItem
                            href="#"
                            title="Blog"
                            description="Latest updates"
                          />
                          <NavbarMegaMenuItem
                            href="#"
                            title="Changelog"
                            description="What's new"
                          />
                        </NavbarMegaMenu>
                      </NavbarDropdown>
                      <NavbarLink href="#">Pricing</NavbarLink>
                    </NavbarLinks>
                    <NavbarActions>
                      <Button size="sm">Get Started</Button>
                    </NavbarActions>
                    <NavbarMobileToggle />
                  </NavbarMain>
                </Navbar>
              </DemoBox>
            </div>

            {/* List layout */}
            <div>
              <p className="text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
                layout=&quot;list&quot;
              </p>
              <DemoBox>
                <Navbar>
                  <NavbarMain>
                    <NavbarBrand>
                      <Logo width={28} height={28} />
                    </NavbarBrand>
                    <NavbarLinks>
                      <NavbarLink href="#">Home</NavbarLink>
                      <NavbarLink href="#">Docs</NavbarLink>
                      <NavbarDropdown label="More">
                        <NavbarMegaMenu layout="list">
                          <NavbarMegaMenuItem href="#" title="Help Center" />
                          <NavbarMegaMenuItem href="#" title="Community" />
                          <NavbarMegaMenuItem href="#" title="Status" />
                          <NavbarMegaMenuItem href="#" title="Contact" />
                        </NavbarMegaMenu>
                      </NavbarDropdown>
                    </NavbarLinks>
                    <NavbarActions>
                      <Button size="sm">Get Started</Button>
                    </NavbarActions>
                    <NavbarMobileToggle />
                  </NavbarMain>
                </Navbar>
              </DemoBox>
            </div>
          </div>
        </Section>

        {/* ─── 3. Popover Dropdown ───────────────────────── */}
        <Section
          id="popover-dropdown"
          title="3. Popover Dropdown"
          description="A small, link-specific dropdown. Opens a narrow panel directly below the trigger — not full-width."
        >
          <DemoBox>
            <Navbar>
              <NavbarMain>
                <NavbarBrand>
                  <Logo width={28} height={28} />
                </NavbarBrand>
                <NavbarLinks>
                  <NavbarLink href="#">Home</NavbarLink>
                  <NavbarPopoverDropdown label="Company">
                    <NavbarPopoverDropdownItem href="#">About</NavbarPopoverDropdownItem>
                    <NavbarPopoverDropdownItem href="#">Careers</NavbarPopoverDropdownItem>
                    <NavbarPopoverDropdownItem href="#">Blog</NavbarPopoverDropdownItem>
                    <NavbarPopoverDropdownItem href="#">Press</NavbarPopoverDropdownItem>
                  </NavbarPopoverDropdown>
                  <NavbarPopoverDropdown label="Support" align="center">
                    <NavbarPopoverDropdownItem href="#">Help Center</NavbarPopoverDropdownItem>
                    <NavbarPopoverDropdownItem href="#">Documentation</NavbarPopoverDropdownItem>
                    <NavbarPopoverDropdownItem href="#">Contact Us</NavbarPopoverDropdownItem>
                  </NavbarPopoverDropdown>
                  <NavbarLink href="#">Pricing</NavbarLink>
                </NavbarLinks>
                <NavbarActions>
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                  <Button size="sm">Get Started</Button>
                </NavbarActions>
                <NavbarMobileToggle />
              </NavbarMain>
            </Navbar>
          </DemoBox>
        </Section>

        {/* ─── 4. Panel Dropdown ─────────────────────────── */}
        <Section
          id="panel-dropdown"
          title="4. Panel Dropdown"
          description="Medium-width panel with icon, title, and description for each item. Opens under the specific link."
        >
          <DemoBox>
            <Navbar>
              <NavbarMain>
                <NavbarBrand>
                  <Logo width={28} height={28} />
                </NavbarBrand>
                <NavbarLinks>
                  <NavbarLink href="#">Home</NavbarLink>
                  <NavbarPanelDropdown label="Features" width="380px">
                    <NavbarPanelDropdownItem
                      href="#"
                      title="Payment"
                      description="Securely manage your payments with our convenient options."
                      icon={<CreditCard className="h-4 w-4" />}
                    />
                    <NavbarPanelDropdownItem
                      href="#"
                      title="Security"
                      description="Protect your transactions with our advanced security features."
                      icon={<Shield className="h-4 w-4" />}
                    />
                    <NavbarPanelDropdownItem
                      href="#"
                      title="Wallet"
                      description="Effortlessly store and access your funds anytime, anywhere."
                      icon={<Wallet className="h-4 w-4" />}
                    />
                    <NavbarPanelDropdownItem
                      href="#"
                      title="Invoice"
                      description="Simplify your billing process with our invoicing tools."
                      icon={<FileText className="h-4 w-4" />}
                    />
                  </NavbarPanelDropdown>
                  <NavbarPanelDropdown label="Solutions" width="340px">
                    <NavbarPanelDropdownItem
                      href="#"
                      title="Contactless"
                      description="Experience fast and easy payments with contactless technology."
                      icon={<Smartphone className="h-4 w-4" />}
                    />
                    <NavbarPanelDropdownItem
                      href="#"
                      title="Checkout"
                      description="Streamline your purchase process with our seamless checkout."
                      icon={<ShoppingCart className="h-4 w-4" />}
                    />
                  </NavbarPanelDropdown>
                  <NavbarLink href="#">Pricing</NavbarLink>
                </NavbarLinks>
                <NavbarActions>
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                  <Button size="sm">Register</Button>
                </NavbarActions>
                <NavbarMobileToggle />
              </NavbarMain>
            </Navbar>
          </DemoBox>
        </Section>

        {/* ─── 5. Mixed Dropdowns ────────────────────────── */}
        <Section
          id="mixed-dropdowns"
          title="5. Mixed Dropdowns"
          description="Combining all three dropdown types in a single navbar: mega menu (full-width), panel (medium), and popover (small)."
        >
          <DemoBox>
            <Navbar>
              <NavbarMain>
                <NavbarBrand>
                  <Logo width={28} height={28} />
                  <span className="font-semibold text-sm hidden sm:inline">
                    Acme Inc
                  </span>
                </NavbarBrand>
                <NavbarLinks>
                  {/* Mega menu dropdown */}
                  <NavbarDropdown label="Products">
                    <NavbarMegaMenu layout="full">
                      <NavbarMegaMenuItem
                        href="#"
                        title="Analytics"
                        description="Real-time data dashboards"
                      />
                      <NavbarMegaMenuItem
                        href="#"
                        title="Automation"
                        description="Workflow automation tools"
                      />
                      <NavbarMegaMenuItem
                        href="#"
                        title="Integrations"
                        description="Connect your favorite tools"
                      />
                      <NavbarMegaMenuItem
                        href="#"
                        title="API"
                        description="Build custom solutions"
                      />
                    </NavbarMegaMenu>
                  </NavbarDropdown>

                  {/* Panel dropdown */}
                  <NavbarPanelDropdown label="Features">
                    <NavbarPanelDropdownItem
                      href="#"
                      title="Analytics"
                      description="Real-time dashboards and reporting"
                      icon={<BarChart3 className="h-4 w-4" />}
                    />
                    <NavbarPanelDropdownItem
                      href="#"
                      title="Automation"
                      description="Build powerful workflows"
                      icon={<Zap className="h-4 w-4" />}
                    />
                    <NavbarPanelDropdownItem
                      href="#"
                      title="Integrations"
                      description="Connect your stack"
                      icon={<Link2 className="h-4 w-4" />}
                    />
                  </NavbarPanelDropdown>

                  {/* Popover dropdown */}
                  <NavbarPopoverDropdown label="More">
                    <NavbarPopoverDropdownItem href="#">
                      Help Center
                    </NavbarPopoverDropdownItem>
                    <NavbarPopoverDropdownItem href="#">
                      Community
                    </NavbarPopoverDropdownItem>
                    <NavbarPopoverDropdownItem href="#">
                      Status
                    </NavbarPopoverDropdownItem>
                    <NavbarPopoverDropdownItem href="#">
                      Contact
                    </NavbarPopoverDropdownItem>
                  </NavbarPopoverDropdown>

                  <NavbarLink href="#">Pricing</NavbarLink>
                </NavbarLinks>
                <NavbarSearch />
                <NavbarDivider />
                <NavbarActions>
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                  <Button size="sm">Get Started</Button>
                </NavbarActions>
                <NavbarMobileToggle />
              </NavbarMain>
            </Navbar>
          </DemoBox>
        </Section>

        {/* ─── 6. Top Bar: Announcement ──────────────────── */}
        <Section
          id="topbar-announcement"
          title="6. Top Bar: Announcement"
          description="Dismissible announcement and info bars with variant prop."
        >
          <div className="space-y-4">
            {/* Announcement (red) */}
            <div>
              <p className="text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
                variant=&quot;announcement&quot; (dismissible)
              </p>
              <DemoBox>
                <Navbar>
                  <NavbarTopBar variant="announcement" dismissible>
                    <span className="text-xs">
                      🎉 v2.0 is live — check the changelog!
                    </span>
                    <a href="#" className="text-xs underline ml-auto mr-2">
                      Learn more →
                    </a>
                  </NavbarTopBar>
                  <NavbarMain>
                    <NavbarBrand>
                      <Logo width={28} height={28} />
                    </NavbarBrand>
                    <NavbarLinks>
                      <NavbarLink href="#">Home</NavbarLink>
                      <NavbarLink href="#">Docs</NavbarLink>
                    </NavbarLinks>
                    <NavbarActions>
                      <Button size="sm">Get Started</Button>
                    </NavbarActions>
                    <NavbarMobileToggle />
                  </NavbarMain>
                </Navbar>
              </DemoBox>
            </div>

            {/* Info (neutral) */}
            <div>
              <p className="text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
                variant=&quot;info&quot; (dismissible)
              </p>
              <DemoBox>
                <Navbar>
                  <NavbarTopBar variant="info" dismissible>
                    <span className="text-xs">
                      ⚠️ Scheduled maintenance on March 15, 2026 from 2:00 AM to 4:00 AM UTC.
                    </span>
                  </NavbarTopBar>
                  <NavbarMain>
                    <NavbarBrand>
                      <Logo width={28} height={28} />
                    </NavbarBrand>
                    <NavbarLinks>
                      <NavbarLink href="#">Home</NavbarLink>
                      <NavbarLink href="#">Status</NavbarLink>
                    </NavbarLinks>
                    <NavbarActions>
                      <Button size="sm">Dashboard</Button>
                    </NavbarActions>
                    <NavbarMobileToggle />
                  </NavbarMain>
                </Navbar>
              </DemoBox>
            </div>
          </div>
        </Section>

        {/* ─── 7. Top Bar: Secondary Navigation ──────────── */}
        <Section
          id="topbar-secondary"
          title="7. Top Bar: Secondary Navigation"
          description="Utility bar with contact info, language selector, and auth links."
        >
          <DemoBox>
            <Navbar>
              <NavbarTopBar variant="secondary">
                <NavbarTopBarSection>
                  <span className="inline-flex items-center gap-1">
                    <Phone className="h-3 w-3" /> +1 (555) 123-4567
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Mail className="h-3 w-3" /> info@example.com
                  </span>
                </NavbarTopBarSection>
                <NavbarTopBarSection align="end">
                  <span className="inline-flex items-center gap-1">
                    <Globe className="h-3 w-3" /> EN
                  </span>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Sign In
                  </a>
                  <a href="#" className="hover:text-slate-900 transition-colors font-semibold">
                    Register
                  </a>
                </NavbarTopBarSection>
              </NavbarTopBar>
              <NavbarMain>
                <NavbarBrand>
                  <Logo width={28} height={28} />
                  <span className="font-semibold text-sm hidden sm:inline">
                    Enterprise Co
                  </span>
                </NavbarBrand>
                <NavbarLinks>
                  <NavbarLink href="#">Home</NavbarLink>
                  <NavbarLink href="#">Products</NavbarLink>
                  <NavbarLink href="#">Services</NavbarLink>
                  <NavbarLink href="#">About</NavbarLink>
                  <NavbarLink href="#">Contact</NavbarLink>
                </NavbarLinks>
                <NavbarMobileToggle />
              </NavbarMain>
            </Navbar>
          </DemoBox>
        </Section>

        {/* ─── 8. Top Bar + Main Nav Combined ────────────── */}
        <Section
          id="topbar-combined"
          title="8. Top Bar + Main Nav Combined"
          description="Announcement bar + secondary bar + main navbar stacked together."
        >
          <DemoBox>
            <Navbar>
              <NavbarTopBar variant="announcement" dismissible>
                <span className="text-xs">
                  🚀 New feature: AI-powered search is now available!
                </span>
                <a href="#" className="text-xs underline ml-auto mr-2">
                  Try it now →
                </a>
              </NavbarTopBar>
              <NavbarTopBar variant="secondary">
                <NavbarTopBarSection>
                  <span className="inline-flex items-center gap-1">
                    <Phone className="h-3 w-3" /> +1 (555) 999-0000
                  </span>
                </NavbarTopBarSection>
                <NavbarTopBarSection align="end">
                  <span className="inline-flex items-center gap-1">
                    <Globe className="h-3 w-3" /> EN
                  </span>
                  <a href="#" className="hover:text-slate-900 transition-colors">
                    Help
                  </a>
                </NavbarTopBarSection>
              </NavbarTopBar>
              <NavbarMain>
                <NavbarBrand>
                  <Logo width={28} height={28} />
                  <span className="font-semibold text-sm hidden sm:inline">
                    Full Stack Co
                  </span>
                </NavbarBrand>
                <NavbarLinks>
                  <NavbarLink href="#">Home</NavbarLink>
                  <NavbarPanelDropdown label="Products">
                    <NavbarPanelDropdownItem
                      href="#"
                      title="Analytics"
                      description="Data insights"
                      icon={<BarChart3 className="h-4 w-4" />}
                    />
                    <NavbarPanelDropdownItem
                      href="#"
                      title="Developer Tools"
                      description="APIs and SDKs"
                      icon={<Code className="h-4 w-4" />}
                    />
                  </NavbarPanelDropdown>
                  <NavbarLink href="#">Pricing</NavbarLink>
                  <NavbarLink href="#">About</NavbarLink>
                </NavbarLinks>
                <NavbarSearch />
                <NavbarDivider />
                <NavbarActions>
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                  <Button size="sm">Get Started</Button>
                </NavbarActions>
                <NavbarMobileToggle />
              </NavbarMain>
            </Navbar>
          </DemoBox>
        </Section>

        {/* ─── 9. Mobile: Accordion ──────────────────────── */}
        <Section
          id="mobile-accordion"
          title="9. Mobile: Accordion"
          description="Collapsible accordion inside the mobile menu. Dropdown items expand/collapse with smooth animation."
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Live preview in mobile frame */}
            <MobileFrame>
              {/* Simulated mobile menu (always open for demo) */}
              <div className="h-full bg-white flex flex-col">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 shrink-0">
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-400">
                    Menu
                  </span>
                  <div className="h-7 w-7 border border-slate-300 rounded-sm flex items-center justify-center">
                    <span className="text-xs text-slate-400">✕</span>
                  </div>
                </div>
                <div className="px-3 py-3 flex flex-col gap-0.5 overflow-y-auto flex-1 min-h-0">
                  <NavbarMobileLink href="#">Home</NavbarMobileLink>

                  <NavbarMobileDropdown label="Products" defaultOpen>
                    <NavbarMobileLink href="#">Analytics</NavbarMobileLink>
                    <NavbarMobileLink href="#">Automation</NavbarMobileLink>
                    <NavbarMobileLink href="#">Integrations</NavbarMobileLink>
                    <NavbarMobileLink href="#">API</NavbarMobileLink>
                  </NavbarMobileDropdown>

                  <NavbarMobileDropdown label="Resources">
                    <NavbarMobileLink href="#">Documentation</NavbarMobileLink>
                    <NavbarMobileLink href="#">Blog</NavbarMobileLink>
                    <NavbarMobileLink href="#">Community</NavbarMobileLink>
                  </NavbarMobileDropdown>

                  <NavbarMobileLink href="#">Pricing</NavbarMobileLink>
                  <NavbarMobileLink href="#">Contact</NavbarMobileLink>
                </div>
                <div className="shrink-0 px-4 py-4 border-t border-slate-200">
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" className="w-full" size="sm">
                      Sign In
                    </Button>
                    <Button className="w-full" size="sm">
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </MobileFrame>

            {/* Usage code hint */}
            <div className="flex-1">
              <div className="bg-slate-900 text-slate-100 p-4 rounded-sm text-xs font-mono leading-relaxed overflow-x-auto">
                <pre>{`<NavbarMobileMenu>
  <NavbarMobileLink href="#">Home</NavbarMobileLink>

  <NavbarMobileDropdown label="Products" defaultOpen>
    <NavbarMobileLink href="#">Analytics</NavbarMobileLink>
    <NavbarMobileLink href="#">Automation</NavbarMobileLink>
    <NavbarMobileLink href="#">Integrations</NavbarMobileLink>
    <NavbarMobileLink href="#">API</NavbarMobileLink>
  </NavbarMobileDropdown>

  <NavbarMobileDropdown label="Resources">
    <NavbarMobileLink href="#">Docs</NavbarMobileLink>
    <NavbarMobileLink href="#">Blog</NavbarMobileLink>
  </NavbarMobileDropdown>

  <NavbarMobileLink href="#">Pricing</NavbarMobileLink>

  <NavbarMobileActions>
    <Button variant="outline" className="w-full">
      Sign In
    </Button>
    <Button className="w-full">Get Started</Button>
  </NavbarMobileActions>
</NavbarMobileMenu>`}</pre>
              </div>
            </div>
          </div>
        </Section>

        {/* ─── 10. Mobile: Drill-Down ────────────────────── */}
        <Section
          id="mobile-drill-down"
          title="10. Mobile: Drill-Down"
          description="Sub-page navigation pattern. Tapping a category slides the current panel left and reveals a sub-panel with a back button."
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Live preview in mobile frame */}
            <MobileFrame>
              <div className="h-full bg-white">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-400">
                    Menu
                  </span>
                  <div className="h-7 w-7 border border-slate-300 rounded-sm flex items-center justify-center">
                    <span className="text-xs text-slate-400">✕</span>
                  </div>
                </div>
                <NavbarMobileDrillMenu className="px-3 py-3 h-[calc(100%-49px)]">
                  <div className="flex flex-col gap-0.5">
                    <NavbarMobileLink href="#">Home</NavbarMobileLink>
                    <NavbarMobileDrillTrigger panelId="products">
                      Products
                    </NavbarMobileDrillTrigger>
                    <NavbarMobileDrillTrigger panelId="resources">
                      Resources
                    </NavbarMobileDrillTrigger>
                    <NavbarMobileLink href="#">Pricing</NavbarMobileLink>
                    <NavbarMobileLink href="#">Contact</NavbarMobileLink>
                  </div>

                  <NavbarMobileDrillPanel panelId="products" backLabel="Back to Menu">
                    <NavbarMobileLink href="#">Analytics</NavbarMobileLink>
                    <NavbarMobileLink href="#">Automation</NavbarMobileLink>
                    <NavbarMobileLink href="#">Integrations</NavbarMobileLink>
                    <NavbarMobileLink href="#">API</NavbarMobileLink>
                    <NavbarMobileLink href="#">Enterprise</NavbarMobileLink>
                  </NavbarMobileDrillPanel>

                  <NavbarMobileDrillPanel panelId="resources" backLabel="Back to Menu">
                    <NavbarMobileLink href="#">Documentation</NavbarMobileLink>
                    <NavbarMobileLink href="#">Blog</NavbarMobileLink>
                    <NavbarMobileLink href="#">Community</NavbarMobileLink>
                    <NavbarMobileLink href="#">Changelog</NavbarMobileLink>
                  </NavbarMobileDrillPanel>
                </NavbarMobileDrillMenu>
              </div>
            </MobileFrame>

            {/* Usage code hint */}
            <div className="flex-1">
              <div className="bg-slate-900 text-slate-100 p-4 rounded-sm text-xs font-mono leading-relaxed overflow-x-auto">
                <pre>{`<NavbarMobileMenu>
  <NavbarMobileDrillMenu>
    <NavbarMobileLink href="#">Home</NavbarMobileLink>
    <NavbarMobileDrillTrigger panelId="products">
      Products
    </NavbarMobileDrillTrigger>
    <NavbarMobileDrillTrigger panelId="resources">
      Resources
    </NavbarMobileDrillTrigger>
    <NavbarMobileLink href="#">Pricing</NavbarMobileLink>

    <NavbarMobileDrillPanel
      panelId="products"
      backLabel="Back to Menu"
    >
      <NavbarMobileLink href="#">Analytics</NavbarMobileLink>
      <NavbarMobileLink href="#">Automation</NavbarMobileLink>
      <NavbarMobileLink href="#">Integrations</NavbarMobileLink>
    </NavbarMobileDrillPanel>

    <NavbarMobileDrillPanel
      panelId="resources"
      backLabel="Back to Menu"
    >
      <NavbarMobileLink href="#">Documentation</NavbarMobileLink>
      <NavbarMobileLink href="#">Blog</NavbarMobileLink>
    </NavbarMobileDrillPanel>
  </NavbarMobileDrillMenu>
</NavbarMobileMenu>`}</pre>
              </div>
            </div>
          </div>
        </Section>

        {/* ─── 11. Sticky + Auto-Hide ────────────────────── */}
        <Section
          id="sticky-autohide"
          title="11. Sticky + Auto-Hide"
          description="Scroll down to hide, scroll up to reveal. Enable with sticky and autoHide props."
        >
          <div className="border border-slate-200 rounded-sm overflow-hidden">
            <div className="h-[300px] overflow-y-auto relative">
              <Navbar sticky autoHide>
                <NavbarMain>
                  <NavbarBrand>
                    <Logo width={28} height={28} />
                  </NavbarBrand>
                  <NavbarLinks>
                    <NavbarLink href="#">Home</NavbarLink>
                    <NavbarLink href="#">About</NavbarLink>
                    <NavbarLink href="#">Contact</NavbarLink>
                  </NavbarLinks>
                  <NavbarActions>
                    <Button size="sm">CTA</Button>
                  </NavbarActions>
                  <NavbarMobileToggle />
                </NavbarMain>
              </Navbar>

              {/* Filler content to enable scrolling */}
              <div className="p-6 space-y-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-sm">
                    <div className="w-8 h-8 bg-slate-200 rounded-sm shrink-0" />
                    <div className="space-y-1 flex-1">
                      <div className="h-3 bg-slate-200 rounded-sm w-1/3" />
                      <div className="h-2 bg-slate-100 rounded-sm w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            ↕ Scroll inside the container above to see the navbar hide and reveal.
          </p>
        </Section>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Navbar Showcase — <Link href="/docs/organisms/navbar" className="text-red-600 hover:underline">View Docs</Link>
          </p>
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-700">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
