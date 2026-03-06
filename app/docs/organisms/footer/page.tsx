"use client";

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
  Apple,
  Smartphone,
} from "lucide-react";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function FooterPage() {
  return (
    <ComponentPage
      name="Footer"
      description="Page footer with grid layout, brand section, social links, newsletter, CTA banner, app download badges, inline link groups, and bottom bar. Supports full, compact, branded, centered, dark, and minimal variants."
      importCode={`import {
  Footer, FooterGrid, FooterSection, FooterHeading,
  FooterLink, FooterBrand, FooterSocials, FooterSocialLink,
  FooterBottom, FooterBottomLinks, FooterNewsletter,
  FooterDivider, FooterDescription, FooterBadge,
  FooterLinkGroup, FooterCTA, FooterApp, FooterAppLink,
} from "poyraz-ui/organisms";`}
    >
      <DemoSection
        title="Full Footer"
        description="Multi-column footer with brand, links, socials, and bottom bar."
        code={`<Footer>
  <FooterGrid>
    <FooterSection>
      <FooterBrand>Poyraz UI</FooterBrand>
      <p className="text-sm text-slate-500">
        A minimal component library for modern web apps.
      </p>
      <FooterSocials>
        <FooterSocialLink href="#" aria-label="GitHub">
          <Github className="h-4 w-4" />
        </FooterSocialLink>
        <FooterSocialLink href="#" aria-label="Twitter">
          <Twitter className="h-4 w-4" />
        </FooterSocialLink>
      </FooterSocials>
    </FooterSection>
    ...columns
  </FooterGrid>
  <FooterBottom>
    <span>© 2026 Poyraz UI.</span>
    <FooterBottomLinks>
      <FooterLink href="#">Privacy</FooterLink>
      <FooterLink href="#">Terms</FooterLink>
    </FooterBottomLinks>
  </FooterBottom>
</Footer>`}
      >
        <Footer>
          <FooterGrid>
            <FooterSection>
              <FooterBrand>
                <span className="text-lg font-bold">Poyraz UI</span>
              </FooterBrand>
              <FooterDescription>
                A minimal component library for modern web apps.
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
            <span>© 2026 Poyraz UI. All rights reserved.</span>
            <FooterBottomLinks>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
            </FooterBottomLinks>
          </FooterBottom>
        </Footer>
      </DemoSection>

      <DemoSection
        title="With Newsletter"
        description="Footer with an embedded newsletter subscription form."
        code={`<Footer>
  <FooterNewsletter
    heading="Stay in the loop"
    description="Subscribe for updates, tips, and new releases."
    onSubscribe={(email) => console.log(email)}
  />
  <FooterDivider />
  <FooterGrid>…</FooterGrid>
  <FooterBottom>…</FooterBottom>
</Footer>`}
      >
        <Footer>
          <FooterNewsletter
            heading="Stay in the loop"
            description="Subscribe for updates, tips, and new component releases."
            onSubscribe={(email) => alert(`Subscribed: ${email}`)}
          />
          <FooterDivider />
          <FooterGrid>
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
            <span>© 2026 Poyraz UI</span>
          </FooterBottom>
        </Footer>
      </DemoSection>

      <DemoSection
        title="Dark Variant"
        description="Dark-themed footer for contrast sections."
        code={`<Footer variant="dark">
  <FooterGrid>…</FooterGrid>
  <FooterBottom>…</FooterBottom>
</Footer>`}
      >
        <Footer variant="dark">
          <FooterGrid>
            <FooterSection>
              <FooterBrand>
                <span className="text-lg font-bold text-white">Poyraz UI</span>
              </FooterBrand>
              <p className="text-sm text-slate-400">
                Minimal design for the modern web.
              </p>
            </FooterSection>
            <FooterSection>
              <FooterHeading className="text-slate-300 border-slate-700">
                Links
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
                Social
              </FooterHeading>
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
              </FooterSocials>
            </FooterSection>
          </FooterGrid>
          <FooterBottom className="border-slate-800 text-slate-500">
            <span>© 2026 Poyraz UI. All rights reserved.</span>
          </FooterBottom>
        </Footer>
      </DemoSection>

      <DemoSection
        title="Centered Variant"
        description="Centered footer for minimal pages."
        code={`<Footer variant="centered">
  <div className="space-y-4">
    <span className="text-lg font-bold">Poyraz UI</span>
    <p>Minimal components for React.</p>
    <FooterSocials className="justify-center">…</FooterSocials>
  </div>
  <FooterBottom className="justify-center">…</FooterBottom>
</Footer>`}
      >
        <Footer variant="centered">
          <div className="space-y-4 flex flex-col items-center">
            <span className="text-lg font-bold">Poyraz UI</span>
            <p className="text-sm text-slate-500 max-w-md">
              A minimal component library for React and Next.js applications.
            </p>
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
            </FooterSocials>
          </div>
          <FooterBottom className="justify-center">
            <span>© 2026 Poyraz UI. All rights reserved.</span>
          </FooterBottom>
        </Footer>
      </DemoSection>

      <DemoSection
        title="Compact Footer"
        description="Minimal single-line footer."
        code={`<Footer variant="compact">
  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
    <span className="text-sm text-slate-500">© 2026 Poyraz UI</span>
    <FooterBottomLinks>
      <FooterLink href="#">Privacy</FooterLink>
      <FooterLink href="#">Terms</FooterLink>
    </FooterBottomLinks>
  </div>
</Footer>`}
      >
        <Footer variant="compact">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-sm text-slate-500">© 2026 Poyraz UI</span>
            <FooterBottomLinks>
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Terms</FooterLink>
            </FooterBottomLinks>
          </div>
        </Footer>
      </DemoSection>

      {/* ─── Minimal Variant ─────────────────────────── */}
      <DemoSection
        title="Minimal Variant"
        description="Clean single-row footer with brand, inline links, and socials."
        code={`<Footer variant="minimal">
  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <Logo width={20} height={20} />
      <span className="text-sm font-semibold">Poyraz UI</span>
    </div>
    <FooterLinkGroup>
      <FooterLink href="#">Docs</FooterLink>
      <FooterLink href="#">Components</FooterLink>
      <FooterLink href="#">GitHub</FooterLink>
    </FooterLinkGroup>
    <FooterSocials>
      <FooterSocialLink href="#" aria-label="GitHub">
        <Github className="h-4 w-4" />
      </FooterSocialLink>
    </FooterSocials>
  </div>
</Footer>`}
      >
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
      </DemoSection>

      {/* ─── With CTA Banner ─────────────────────────── */}
      <DemoSection
        title="With CTA Banner"
        description="Footer with a call-to-action banner including heading, description, and action buttons."
        code={`<Footer>
  <FooterCTA
    heading="Ready to get started?"
    description="Take the first step towards building beautiful interfaces."
  >
    <Button variant="outline" size="sm">View Docs</Button>
    <Button size="sm">Get Started</Button>
  </FooterCTA>
  <FooterDivider />
  <FooterGrid>…</FooterGrid>
  <FooterBottom>…</FooterBottom>
</Footer>`}
      >
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
                <span className="text-lg font-bold">Poyraz UI</span>
              </FooterBrand>
              <FooterDescription>
                Open source, accessible, and customizable.
              </FooterDescription>
            </FooterSection>
            <FooterSection>
              <FooterHeading>Product</FooterHeading>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
            </FooterSection>
            <FooterSection>
              <FooterHeading>Resources</FooterHeading>
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </FooterSection>
          </FooterGrid>
          <FooterBottom>
            <span>© 2026 Poyraz UI. All rights reserved.</span>
          </FooterBottom>
        </Footer>
      </DemoSection>

      {/* ─── With App Download ───────────────────────── */}
      <DemoSection
        title="With App Download"
        description="Footer with app store download badges for mobile-first products."
        code={`<FooterApp>
  <FooterAppLink href="#">
    <Apple className="h-4 w-4" />
    <div>
      <div className="text-[9px] text-slate-400">Download on the</div>
      <div className="text-xs font-semibold">App Store</div>
    </div>
  </FooterAppLink>
  <FooterAppLink href="#">
    <Smartphone className="h-4 w-4" />
    <div>
      <div className="text-[9px] text-slate-400">Get it on</div>
      <div className="text-xs font-semibold">Google Play</div>
    </div>
  </FooterAppLink>
</FooterApp>`}
      >
        <Footer variant="branded">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <FooterBrand>
              <div className="flex items-center gap-2 mb-2">
                <Logo width={24} height={24} />
                <span className="text-lg font-bold">Poyraz App</span>
                <FooterBadge>v1.0</FooterBadge>
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
            <FooterGrid className="flex-1 grid-cols-2">
              <FooterSection>
                <FooterHeading>Product</FooterHeading>
                <FooterLink href="#">Features</FooterLink>
                <FooterLink href="#">Download</FooterLink>
              </FooterSection>
              <FooterSection>
                <FooterHeading>Support</FooterHeading>
                <FooterLink href="#">Help Center</FooterLink>
                <FooterLink href="#">Community</FooterLink>
              </FooterSection>
            </FooterGrid>
          </div>
          <FooterBottom>
            <span>© 2026 Poyraz App. All rights reserved.</span>
          </FooterBottom>
        </Footer>
      </DemoSection>

      {/* ─── Branded with Badge ──────────────────────── */}
      <DemoSection
        title="Branded with Badge & Description"
        description="Branded footer with FooterDescription and FooterBadge for version tags."
        code={`<FooterBrand>
  <div className="flex items-center gap-2">
    <Logo width={24} height={24} />
    <span className="text-lg font-bold">Poyraz UI</span>
    <FooterBadge>v1.0</FooterBadge>
  </div>
  <FooterDescription>
    Build beautiful, accessible interfaces.
  </FooterDescription>
</FooterBrand>`}
      >
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
            <span>© 2026 Poyraz UI</span>
            <FooterBottomLinks>
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Terms</FooterLink>
            </FooterBottomLinks>
          </FooterBottom>
        </Footer>
      </DemoSection>

      {/* ─── Horizontal Link Group ───────────────────── */}
      <DemoSection
        title="Horizontal Link Group"
        description="Footer with FooterLinkGroup for inline horizontal links instead of grid columns."
        code={`<Footer variant="minimal">
  <FooterLinkGroup>
    <FooterLink href="#">Home</FooterLink>
    <FooterLink href="#">Docs</FooterLink>
    <FooterLink href="#">Components</FooterLink>
    <FooterLink href="#">Blog</FooterLink>
    <FooterLink href="#">GitHub</FooterLink>
  </FooterLinkGroup>
</Footer>`}
      >
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
              <span className="text-xs text-slate-400">© 2026 Poyraz UI</span>
            </div>
          </div>
        </Footer>
      </DemoSection>
    </ComponentPage>
  );
}
