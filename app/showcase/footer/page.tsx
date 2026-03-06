"use client";

import Link from "next/link";
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
  FooterNewsletter,
  FooterDivider,
  FooterDescription,
  FooterBadge,
  FooterLinkGroup,
  FooterCTA,
  FooterApp,
  FooterAppLink,
} from "poyraz-ui/organisms";
import { Button } from "poyraz-ui/atoms";
import { Logo } from "poyraz-ui/atoms";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowLeft,
  Apple,
  Smartphone,
  Heart,
  ExternalLink,
  Rss,
  Youtube,
} from "lucide-react";

/* ================================================================== */
/*  HELPERS                                                            */
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

function DemoBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-slate-200 rounded-sm bg-white overflow-hidden ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

/* ================================================================== */
/*  TOC                                                                */
/* ================================================================== */

const sections = [
  { id: "full", label: "Full Footer" },
  { id: "branded", label: "Branded" },
  { id: "compact", label: "Compact" },
  { id: "minimal", label: "Minimal" },
  { id: "centered", label: "Centered" },
  { id: "dark", label: "Dark" },
  { id: "newsletter", label: "With Newsletter" },
  { id: "cta", label: "With CTA Banner" },
  { id: "app-download", label: "With App Download" },
  { id: "mega", label: "Mega Footer" },
  { id: "inline-links", label: "Horizontal Links" },
];

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */

export default function FooterShowcasePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link
          href="/docs/organisms/footer"
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 mb-4"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Docs
        </Link>
        <h1 className="text-2xl font-bold text-slate-900">Footer Showcase</h1>
        <p className="text-sm text-slate-500 mt-2 max-w-2xl">
          Interactive showcase of all footer variants and patterns: full grid, branded,
          compact, minimal, centered, dark, newsletter, CTA, app download, mega footer,
          and horizontal link layouts.
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
        {/* ─── 1. Full Footer ────────────────────────────── */}
        <Section
          id="full"
          title="1. Full Footer"
          description="Multi-column grid footer with brand, link sections, socials, and bottom bar."
        >
          <DemoBox>
            <Footer>
              <FooterGrid>
                <FooterSection>
                  <FooterBrand>
                    <div className="flex items-center gap-2">
                      <Logo width={24} height={24} />
                      <span className="text-lg font-bold">Poyraz UI</span>
                    </div>
                  </FooterBrand>
                  <FooterDescription>
                    A minimal component library for modern web applications built
                    with React, Next.js, and Tailwind CSS.
                  </FooterDescription>
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
                </FooterSection>
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
                  <FooterLink href="#">Components</FooterLink>
                  <FooterLink href="#">Templates</FooterLink>
                  <FooterLink href="#">Blog</FooterLink>
                </FooterSection>
                <FooterSection>
                  <FooterHeading>Company</FooterHeading>
                  <FooterLink href="#">About</FooterLink>
                  <FooterLink href="#">Careers</FooterLink>
                  <FooterLink href="#">Contact</FooterLink>
                  <FooterLink href="#">Press Kit</FooterLink>
                </FooterSection>
              </FooterGrid>
              <FooterBottom>
                <span>&copy; 2026 Poyraz UI. All rights reserved.</span>
                <FooterBottomLinks>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                  <FooterLink href="#">Terms of Service</FooterLink>
                  <FooterLink href="#">Cookie Policy</FooterLink>
                </FooterBottomLinks>
              </FooterBottom>
            </Footer>
          </DemoBox>
        </Section>

        {/* ─── 2. Branded Footer ─────────────────────────── */}
        <Section
          id="branded"
          title="2. Branded Footer"
          description="Brand section on the left with link columns on the right. Good for SaaS/product pages."
        >
          <DemoBox>
            <Footer variant="branded">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                <FooterBrand>
                  <div className="flex items-center gap-2 mb-2">
                    <Logo width={24} height={24} />
                    <span className="text-lg font-bold">Poyraz UI</span>
                    <FooterBadge>v1.0</FooterBadge>
                  </div>
                  <FooterDescription>
                    Build beautiful, accessible interfaces with our minimal
                    component library. Open source and free forever.
                  </FooterDescription>
                  <FooterSocials className="mt-2">
                    <FooterSocialLink href="#" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </FooterSocialLink>
                    <FooterSocialLink href="#" aria-label="Twitter">
                      <Twitter className="h-4 w-4" />
                    </FooterSocialLink>
                  </FooterSocials>
                </FooterBrand>
                <FooterGrid className="flex-1 grid-cols-2 lg:grid-cols-3">
                  <FooterSection>
                    <FooterHeading>Product</FooterHeading>
                    <FooterLink href="#">Features</FooterLink>
                    <FooterLink href="#">Pricing</FooterLink>
                    <FooterLink href="#">Integrations</FooterLink>
                  </FooterSection>
                  <FooterSection>
                    <FooterHeading>Developers</FooterHeading>
                    <FooterLink href="#">Documentation</FooterLink>
                    <FooterLink href="#">API Reference</FooterLink>
                    <FooterLink href="#">SDKs</FooterLink>
                  </FooterSection>
                  <FooterSection>
                    <FooterHeading>Company</FooterHeading>
                    <FooterLink href="#">About</FooterLink>
                    <FooterLink href="#">Blog</FooterLink>
                    <FooterLink href="#">Careers</FooterLink>
                  </FooterSection>
                </FooterGrid>
              </div>
              <FooterBottom>
                <span>&copy; 2026 Poyraz UI</span>
                <FooterBottomLinks>
                  <FooterLink href="#">Privacy</FooterLink>
                  <FooterLink href="#">Terms</FooterLink>
                </FooterBottomLinks>
              </FooterBottom>
            </Footer>
          </DemoBox>
        </Section>

        {/* ─── 3. Compact Footer ─────────────────────────── */}
        <Section
          id="compact"
          title="3. Compact Footer"
          description="Minimal single-line footer with copyright and essential links."
        >
          <DemoBox>
            <Footer variant="compact">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-sm text-slate-500">
                  &copy; 2026 Poyraz UI
                </span>
                <FooterBottomLinks>
                  <FooterLink href="#">Privacy</FooterLink>
                  <FooterLink href="#">Terms</FooterLink>
                  <FooterLink href="#">Contact</FooterLink>
                </FooterBottomLinks>
              </div>
            </Footer>
          </DemoBox>
        </Section>

        {/* ─── 4. Minimal Footer ─────────────────────────── */}
        <Section
          id="minimal"
          title="4. Minimal Footer"
          description="Clean footer with brand, inline links, and socials in a single row."
        >
          <DemoBox>
            <Footer variant="minimal">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Logo width={20} height={20} />
                  <span className="text-sm font-semibold">Poyraz UI</span>
                </div>
                <FooterLinkGroup>
                  <FooterLink href="#">Docs</FooterLink>
                  <FooterLink href="#">Components</FooterLink>
                  <FooterLink href="#">GitHub</FooterLink>
                  <FooterLink href="#">Blog</FooterLink>
                </FooterLinkGroup>
                <FooterSocials>
                  <FooterSocialLink href="#" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </FooterSocialLink>
                  <FooterSocialLink href="#" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </FooterSocialLink>
                </FooterSocials>
              </div>
            </Footer>
          </DemoBox>
        </Section>

        {/* ─── 5. Centered Footer ────────────────────────── */}
        <Section
          id="centered"
          title="5. Centered Footer"
          description="Centered layout for minimal or landing pages."
        >
          <DemoBox>
            <Footer variant="centered">
              <div className="space-y-4 flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <Logo width={24} height={24} />
                  <span className="text-lg font-bold">Poyraz UI</span>
                </div>
                <FooterDescription className="max-w-md text-center">
                  A minimal component library for React and Next.js applications.
                  Open source, accessible, and customizable.
                </FooterDescription>
                <FooterLinkGroup className="justify-center">
                  <FooterLink href="#">Features</FooterLink>
                  <FooterLink href="#">Docs</FooterLink>
                  <FooterLink href="#">Pricing</FooterLink>
                  <FooterLink href="#">Blog</FooterLink>
                </FooterLinkGroup>
                <FooterSocials className="justify-center">
                  <FooterSocialLink href="#" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </FooterSocialLink>
                  <FooterSocialLink href="#" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </FooterSocialLink>
                  <FooterSocialLink href="#" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </FooterSocialLink>
                  <FooterSocialLink href="#" aria-label="YouTube">
                    <Youtube className="h-4 w-4" />
                  </FooterSocialLink>
                </FooterSocials>
              </div>
              <FooterBottom className="justify-center">
                <span>&copy; 2026 Poyraz UI. All rights reserved.</span>
              </FooterBottom>
            </Footer>
          </DemoBox>
        </Section>

        {/* ─── 6. Dark Footer ────────────────────────────── */}
        <Section
          id="dark"
          title="6. Dark Footer"
          description="Dark-themed footer for contrast sections or dark mode."
        >
          <DemoBox>
            <Footer variant="dark">
              <FooterGrid>
                <FooterSection>
                  <FooterBrand>
                    <div className="flex items-center gap-2">
                      <Logo width={24} height={24} />
                      <span className="text-lg font-bold text-white">
                        Poyraz UI
                      </span>
                    </div>
                  </FooterBrand>
                  <FooterDescription className="text-slate-400">
                    Build beautiful interfaces with our minimal component system.
                  </FooterDescription>
                  <FooterSocials>
                    <FooterSocialLink
                      href="#"
                      aria-label="GitHub"
                      className="border-slate-700 text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-800"
                    >
                      <Github className="h-4 w-4" />
                    </FooterSocialLink>
                    <FooterSocialLink
                      href="#"
                      aria-label="Twitter"
                      className="border-slate-700 text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-800"
                    >
                      <Twitter className="h-4 w-4" />
                    </FooterSocialLink>
                    <FooterSocialLink
                      href="#"
                      aria-label="RSS"
                      className="border-slate-700 text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-800"
                    >
                      <Rss className="h-4 w-4" />
                    </FooterSocialLink>
                  </FooterSocials>
                </FooterSection>
                <FooterSection>
                  <FooterHeading className="text-slate-300 border-slate-700">
                    Product
                  </FooterHeading>
                  <FooterLink
                    className="text-slate-400 hover:text-red-400"
                    href="#"
                  >
                    Features
                  </FooterLink>
                  <FooterLink
                    className="text-slate-400 hover:text-red-400"
                    href="#"
                  >
                    Pricing
                  </FooterLink>
                  <FooterLink
                    className="text-slate-400 hover:text-red-400"
                    href="#"
                  >
                    Changelog
                  </FooterLink>
                </FooterSection>
                <FooterSection>
                  <FooterHeading className="text-slate-300 border-slate-700">
                    Resources
                  </FooterHeading>
                  <FooterLink
                    className="text-slate-400 hover:text-red-400"
                    href="#"
                  >
                    Documentation
                  </FooterLink>
                  <FooterLink
                    className="text-slate-400 hover:text-red-400"
                    href="#"
                  >
                    Components
                  </FooterLink>
                  <FooterLink
                    className="text-slate-400 hover:text-red-400"
                    href="#"
                  >
                    GitHub
                  </FooterLink>
                </FooterSection>
                <FooterSection>
                  <FooterHeading className="text-slate-300 border-slate-700">
                    Legal
                  </FooterHeading>
                  <FooterLink
                    className="text-slate-400 hover:text-red-400"
                    href="#"
                  >
                    Privacy Policy
                  </FooterLink>
                  <FooterLink
                    className="text-slate-400 hover:text-red-400"
                    href="#"
                  >
                    Terms of Service
                  </FooterLink>
                  <FooterLink
                    className="text-slate-400 hover:text-red-400"
                    href="#"
                  >
                    Cookie Policy
                  </FooterLink>
                </FooterSection>
              </FooterGrid>
              <FooterBottom className="border-slate-800 text-slate-500">
                <span>&copy; 2026 Poyraz UI. All rights reserved.</span>
                <span className="inline-flex items-center gap-1 text-xs">
                  Made with <Heart className="h-3 w-3 text-red-500" /> by Poyraz
                </span>
              </FooterBottom>
            </Footer>
          </DemoBox>
        </Section>

        {/* ─── 7. Newsletter Footer ──────────────────────── */}
        <Section
          id="newsletter"
          title="7. With Newsletter"
          description="Footer with an embedded newsletter subscription form above the link grid."
        >
          <DemoBox>
            <Footer>
              <FooterNewsletter
                heading="Stay in the loop"
                description="Subscribe for updates, tips, and new component releases."
                onSubscribe={(email) => alert(`Subscribed: ${email}`)}
              />
              <FooterDivider />
              <FooterGrid>
                <FooterSection>
                  <FooterBrand>
                    <span className="text-lg font-bold">Poyraz UI</span>
                  </FooterBrand>
                  <FooterDescription>
                    Minimal design system for modern apps.
                  </FooterDescription>
                </FooterSection>
                <FooterSection>
                  <FooterHeading>Product</FooterHeading>
                  <FooterLink href="#">Features</FooterLink>
                  <FooterLink href="#">Pricing</FooterLink>
                </FooterSection>
                <FooterSection>
                  <FooterHeading>Resources</FooterHeading>
                  <FooterLink href="#">Docs</FooterLink>
                  <FooterLink href="#">Blog</FooterLink>
                </FooterSection>
                <FooterSection>
                  <FooterHeading>Connect</FooterHeading>
                  <FooterSocials>
                    <FooterSocialLink href="#" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </FooterSocialLink>
                    <FooterSocialLink href="#" aria-label="Mail">
                      <Mail className="h-4 w-4" />
                    </FooterSocialLink>
                  </FooterSocials>
                </FooterSection>
              </FooterGrid>
              <FooterBottom>
                <span>&copy; 2026 Poyraz UI</span>
                <FooterBottomLinks>
                  <FooterLink href="#">Privacy</FooterLink>
                  <FooterLink href="#">Terms</FooterLink>
                </FooterBottomLinks>
              </FooterBottom>
            </Footer>
          </DemoBox>
        </Section>

        {/* ─── 8. CTA Banner Footer ──────────────────────── */}
        <Section
          id="cta"
          title="8. With CTA Banner"
          description="Footer with a call-to-action banner and action buttons."
        >
          <DemoBox>
            <Footer>
              <FooterCTA
                heading="Ready to get started?"
                description="Take the first step towards building beautiful interfaces."
              >
                <Button variant="outline" size="sm">
                  View Docs
                </Button>
                <Button size="sm">Get Started</Button>
              </FooterCTA>
              <FooterDivider />
              <FooterGrid>
                <FooterSection>
                  <FooterBrand>
                    <div className="flex items-center gap-2">
                      <Logo width={24} height={24} />
                      <span className="text-lg font-bold">Poyraz UI</span>
                    </div>
                  </FooterBrand>
                  <FooterDescription>
                    Open source, accessible, and customizable.
                  </FooterDescription>
                </FooterSection>
                <FooterSection>
                  <FooterHeading>Product</FooterHeading>
                  <FooterLink href="#">Features</FooterLink>
                  <FooterLink href="#">Pricing</FooterLink>
                  <FooterLink href="#">Templates</FooterLink>
                </FooterSection>
                <FooterSection>
                  <FooterHeading>Resources</FooterHeading>
                  <FooterLink href="#">Documentation</FooterLink>
                  <FooterLink href="#">Blog</FooterLink>
                  <FooterLink href="#">Community</FooterLink>
                </FooterSection>
                <FooterSection>
                  <FooterHeading>Social</FooterHeading>
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
                </FooterSection>
              </FooterGrid>
              <FooterBottom>
                <span>&copy; 2026 Poyraz UI. All rights reserved.</span>
                <FooterBottomLinks>
                  <FooterLink href="#">Privacy</FooterLink>
                  <FooterLink href="#">Terms</FooterLink>
                </FooterBottomLinks>
              </FooterBottom>
            </Footer>
          </DemoBox>
        </Section>

        {/* ─── 9. App Download Footer ────────────────────── */}
        <Section
          id="app-download"
          title="9. With App Download"
          description="Footer with app store download badges for mobile-first products."
        >
          <DemoBox>
            <Footer variant="branded">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                <FooterBrand>
                  <div className="flex items-center gap-2 mb-2">
                    <Logo width={24} height={24} />
                    <span className="text-lg font-bold">Poyraz App</span>
                  </div>
                  <FooterDescription>
                    Available on all platforms. Download now and start building.
                  </FooterDescription>
                  <FooterApp className="mt-2">
                    <FooterAppLink href="#">
                      <Apple className="h-4 w-4" />
                      <div>
                        <div className="text-[9px] text-slate-400 leading-none">
                          Download on the
                        </div>
                        <div className="text-xs font-semibold leading-tight">
                          App Store
                        </div>
                      </div>
                    </FooterAppLink>
                    <FooterAppLink href="#">
                      <Smartphone className="h-4 w-4" />
                      <div>
                        <div className="text-[9px] text-slate-400 leading-none">
                          Get it on
                        </div>
                        <div className="text-xs font-semibold leading-tight">
                          Google Play
                        </div>
                      </div>
                    </FooterAppLink>
                  </FooterApp>
                </FooterBrand>
                <FooterGrid className="flex-1 grid-cols-2 lg:grid-cols-3">
                  <FooterSection>
                    <FooterHeading>Product</FooterHeading>
                    <FooterLink href="#">Features</FooterLink>
                    <FooterLink href="#">Pricing</FooterLink>
                    <FooterLink href="#">Download</FooterLink>
                  </FooterSection>
                  <FooterSection>
                    <FooterHeading>Support</FooterHeading>
                    <FooterLink href="#">Help Center</FooterLink>
                    <FooterLink href="#">Community</FooterLink>
                    <FooterLink href="#">Status</FooterLink>
                  </FooterSection>
                  <FooterSection>
                    <FooterHeading>Company</FooterHeading>
                    <FooterLink href="#">About</FooterLink>
                    <FooterLink href="#">Blog</FooterLink>
                    <FooterLink href="#">Careers</FooterLink>
                  </FooterSection>
                </FooterGrid>
              </div>
              <FooterBottom>
                <span>&copy; 2026 Poyraz App. All rights reserved.</span>
                <FooterBottomLinks>
                  <FooterLink href="#">Privacy</FooterLink>
                  <FooterLink href="#">Terms</FooterLink>
                </FooterBottomLinks>
              </FooterBottom>
            </Footer>
          </DemoBox>
        </Section>

        {/* ─── 10. Mega Footer ───────────────────────────── */}
        <Section
          id="mega"
          title="10. Mega Footer"
          description="Enterprise-level footer with multiple sections, newsletter, CTA, socials, and all sub-components combined."
        >
          <DemoBox>
            <Footer>
              <FooterCTA
                heading="Join 10,000+ developers"
                description="Start building with Poyraz UI today — free and open source."
              >
                <Button size="sm">
                  Get Started <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </Button>
              </FooterCTA>
              <FooterDivider />
              <FooterGrid className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                <FooterSection>
                  <FooterHeading>Product</FooterHeading>
                  <FooterLink href="#">Features</FooterLink>
                  <FooterLink href="#">Pricing</FooterLink>
                  <FooterLink href="#">Templates</FooterLink>
                  <FooterLink href="#">Changelog</FooterLink>
                  <FooterLink href="#">Roadmap</FooterLink>
                </FooterSection>
                <FooterSection>
                  <FooterHeading>Developers</FooterHeading>
                  <FooterLink href="#">Documentation</FooterLink>
                  <FooterLink href="#">API Reference</FooterLink>
                  <FooterLink href="#">SDKs</FooterLink>
                  <FooterLink href="#">CLI Tools</FooterLink>
                  <FooterLink href="#">GitHub</FooterLink>
                </FooterSection>
                <FooterSection>
                  <FooterHeading>Resources</FooterHeading>
                  <FooterLink href="#">Blog</FooterLink>
                  <FooterLink href="#">Community</FooterLink>
                  <FooterLink href="#">Tutorials</FooterLink>
                  <FooterLink href="#">Showcase</FooterLink>
                  <FooterLink href="#">FAQ</FooterLink>
                </FooterSection>
                <FooterSection>
                  <FooterHeading>Company</FooterHeading>
                  <FooterLink href="#">About Us</FooterLink>
                  <FooterLink href="#">Careers</FooterLink>
                  <FooterLink href="#">Press Kit</FooterLink>
                  <FooterLink href="#">Contact</FooterLink>
                  <FooterLink href="#">Partners</FooterLink>
                </FooterSection>
                <FooterSection>
                  <FooterHeading>Legal</FooterHeading>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                  <FooterLink href="#">Terms of Service</FooterLink>
                  <FooterLink href="#">Cookie Policy</FooterLink>
                  <FooterLink href="#">Licenses</FooterLink>
                  <FooterLink href="#">Security</FooterLink>
                </FooterSection>
              </FooterGrid>
              <FooterDivider />
              <FooterNewsletter
                heading="Subscribe to updates"
                description="Get notified about new components, releases, and design tips."
                onSubscribe={(email) => alert(`Subscribed: ${email}`)}
              />
              <FooterBottom>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Logo width={20} height={20} />
                    <span className="text-sm font-semibold text-slate-700">
                      Poyraz UI
                    </span>
                    <FooterBadge>v1.0.0</FooterBadge>
                  </div>
                  <span>&copy; 2026 All rights reserved.</span>
                </div>
                <div className="flex items-center gap-4">
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
                    <FooterSocialLink href="#" aria-label="YouTube">
                      <Youtube className="h-4 w-4" />
                    </FooterSocialLink>
                  </FooterSocials>
                </div>
              </FooterBottom>
            </Footer>
          </DemoBox>
        </Section>

        {/* ─── 11. Horizontal Links Footer ───────────────── */}
        <Section
          id="inline-links"
          title="11. Horizontal Links"
          description="Footer with horizontal inline link groups instead of grid columns. Good for simple sites."
        >
          <DemoBox>
            <Footer variant="minimal">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Logo width={20} height={20} />
                    <span className="text-sm font-semibold">Poyraz UI</span>
                    <FooterBadge>Open Source</FooterBadge>
                  </div>
                  <FooterSocials>
                    <FooterSocialLink href="#" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </FooterSocialLink>
                    <FooterSocialLink href="#" aria-label="Twitter">
                      <Twitter className="h-4 w-4" />
                    </FooterSocialLink>
                  </FooterSocials>
                </div>
                <FooterDivider className="my-0" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <FooterLinkGroup>
                    <FooterLink href="#">Home</FooterLink>
                    <FooterLink href="#">Docs</FooterLink>
                    <FooterLink href="#">Components</FooterLink>
                    <FooterLink href="#">Templates</FooterLink>
                    <FooterLink href="#">Blog</FooterLink>
                    <FooterLink href="#">GitHub</FooterLink>
                  </FooterLinkGroup>
                  <span className="text-xs text-slate-400">
                    &copy; 2026 Poyraz UI
                  </span>
                </div>
              </div>
            </Footer>
          </DemoBox>
        </Section>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Footer Showcase —{" "}
            <Link
              href="/docs/organisms/footer"
              className="text-red-600 hover:underline"
            >
              View Docs
            </Link>
          </p>
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-slate-700"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
