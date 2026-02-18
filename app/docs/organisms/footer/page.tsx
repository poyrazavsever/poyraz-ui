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
} from "@/components/ui/organisms/footer";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function FooterPage() {
  return (
    <ComponentPage
      name="Footer"
      description="Page footer with grid layout, brand section, social links, newsletter, and bottom bar. Supports full, compact, branded, centered, and dark variants."
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
  FooterNewsletter,
  FooterDivider,
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
    ...columns
  </FooterGrid>
  <FooterBottom>
    <span>© 2025 Poyraz UI.</span>
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
            <span>© 2025 Poyraz UI. All rights reserved.</span>
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
            <span>© 2025 Poyraz UI</span>
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
                Brutalist design for the modern web.
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
            <span>© 2025 Poyraz UI. All rights reserved.</span>
          </FooterBottom>
        </Footer>
      </DemoSection>

      <DemoSection
        title="Centered Variant"
        description="Centered footer for minimal pages."
        code={`<Footer variant="centered">
  <div className="space-y-4">
    <span className="text-lg font-bold">Poyraz UI</span>
    <p>Brutalist components for React.</p>
    <FooterSocials className="justify-center">…</FooterSocials>
  </div>
  <FooterBottom className="justify-center">…</FooterBottom>
</Footer>`}
      >
        <Footer variant="centered">
          <div className="space-y-4 flex flex-col items-center">
            <span className="text-lg font-bold">Poyraz UI</span>
            <p className="text-sm text-slate-500 max-w-md">
              A brutalist, dashed-border component library for React and Next.js
              applications.
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
            <span>© 2025 Poyraz UI. All rights reserved.</span>
          </FooterBottom>
        </Footer>
      </DemoSection>

      <DemoSection
        title="Compact Footer"
        description="Minimal single-line footer."
        code={`<Footer variant="compact">
  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
    <span className="text-sm text-slate-500">© 2025 Poyraz UI</span>
    <FooterBottomLinks>
      <FooterLink href="#">Privacy</FooterLink>
      <FooterLink href="#">Terms</FooterLink>
    </FooterBottomLinks>
  </div>
</Footer>`}
      >
        <Footer variant="compact">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
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
