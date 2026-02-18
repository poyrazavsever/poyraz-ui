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
} from "@/components/ui/organisms/footer";
import { Github, Twitter, Linkedin } from "lucide-react";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function FooterPage() {
  return (
    <ComponentPage
      name="Footer"
      description="Page footer with grid layout, brand section, social links, and bottom bar. Supports full, compact, and branded variants."
      importCode={`import {
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
        A brutalist component library for modern web apps.
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
    <FooterSection>
      <FooterHeading>Product</FooterHeading>
      <FooterLink href="#">Features</FooterLink>
      <FooterLink href="#">Pricing</FooterLink>
      <FooterLink href="#">Changelog</FooterLink>
    </FooterSection>
    <FooterSection>
      <FooterHeading>Resources</FooterHeading>
      <FooterLink href="#">Documentation</FooterLink>
      <FooterLink href="#">Components</FooterLink>
      <FooterLink href="#">Templates</FooterLink>
    </FooterSection>
    <FooterSection>
      <FooterHeading>Company</FooterHeading>
      <FooterLink href="#">About</FooterLink>
      <FooterLink href="#">Blog</FooterLink>
      <FooterLink href="#">Contact</FooterLink>
    </FooterSection>
  </FooterGrid>
  <FooterBottom>
    <span>© 2025 Poyraz UI. All rights reserved.</span>
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
              <FooterBrand>Poyraz UI</FooterBrand>
              <p className="text-sm text-slate-500">
                A brutalist component library for modern web apps.
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
            <FooterSection>
              <FooterHeading>Product</FooterHeading>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Changelog</FooterLink>
            </FooterSection>
            <FooterSection>
              <FooterHeading>Resources</FooterHeading>
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Components</FooterLink>
              <FooterLink href="#">Templates</FooterLink>
            </FooterSection>
            <FooterSection>
              <FooterHeading>Company</FooterHeading>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </FooterSection>
          </FooterGrid>
          <FooterBottom>
            <span>© 2025 Poyraz UI. All rights reserved.</span>
            <FooterBottomLinks>
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Terms</FooterLink>
            </FooterBottomLinks>
          </FooterBottom>
        </Footer>
      </DemoSection>

      <DemoSection
        title="Compact Footer"
        description="Minimal single-line footer."
        code={`<Footer variant="compact">
  <div className="flex items-center justify-between">
    <span className="text-sm text-slate-500">© 2025 Poyraz UI</span>
    <FooterBottomLinks>
      <FooterLink href="#">Privacy</FooterLink>
      <FooterLink href="#">Terms</FooterLink>
    </FooterBottomLinks>
  </div>
</Footer>`}
      >
        <Footer variant="compact">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">© 2025 Poyraz UI</span>
            <FooterBottomLinks>
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Terms</FooterLink>
            </FooterBottomLinks>
          </div>
        </Footer>
      </DemoSection>
    </ComponentPage>
  );
}
