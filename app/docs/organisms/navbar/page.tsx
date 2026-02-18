"use client";

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
  NavbarMobileGroup,
  NavbarMobileActions,
  NavbarSearch,
  NavbarDivider,
} from "@/components/ui/organisms/navbar";
import { Button } from "@/components/ui/atoms/button";
import { Logo } from "@/components/ui/atoms/logo";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function NavbarPage() {
  return (
    <ComponentPage
      name="Navbar"
      description="Responsive navigation bar with brand, links, actions, search, mobile menu with groups and CTA, and sticky auto-hide. Supports default, minimal, transparent, and bordered variants."
      importCode={`import {
  Navbar, NavbarTopBar, NavbarMain, NavbarBrand,
  NavbarLinks, NavbarLink, NavbarDropdown,
  NavbarMegaMenu, NavbarMegaMenuItem,
  NavbarActions, NavbarMobileToggle,
  NavbarMobileMenu, NavbarMobileLink,
  NavbarMobileGroup, NavbarMobileActions,
  NavbarSearch, NavbarDivider,
} from "poyraz-ui/organisms";`}
    >
      {/* ─── 1. Default ─────────────────────────────── */}
      <DemoSection
        title="Default"
        description="Standard navbar with brand, links, search, divider and action buttons."
        code={`<Navbar>
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
      <Button variant="outline" size="sm">Sign In</Button>
      <Button size="sm">Get Started</Button>
    </NavbarActions>
    <NavbarMobileToggle />
  </NavbarMain>
  <NavbarMobileMenu>
    <NavbarMobileGroup label="Navigation">
      <NavbarMobileLink href="#" active>Home</NavbarMobileLink>
      <NavbarMobileLink href="#">Components</NavbarMobileLink>
      <NavbarMobileLink href="#">Docs</NavbarMobileLink>
    </NavbarMobileGroup>
    <NavbarMobileActions>
      <Button variant="outline" className="w-full">Sign In</Button>
      <Button className="w-full">Get Started</Button>
    </NavbarMobileActions>
  </NavbarMobileMenu>
</Navbar>`}
      >
        <div className="border-2 border-dashed border-slate-200">
          <Navbar>
            <NavbarMain>
              <NavbarBrand>
                <Logo width={48} height={48} />
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
            <NavbarMobileMenu>
              <NavbarMobileGroup label="Navigation">
                <NavbarMobileLink href="#" active>
                  Home
                </NavbarMobileLink>
                <NavbarMobileLink href="#">Components</NavbarMobileLink>
                <NavbarMobileLink href="#">Docs</NavbarMobileLink>
              </NavbarMobileGroup>
              <NavbarMobileActions>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
                <Button className="w-full">Get Started</Button>
              </NavbarMobileActions>
            </NavbarMobileMenu>
          </Navbar>
        </div>
      </DemoSection>

      {/* ─── 2. With Top Bar ─────────────────────────── */}
      <DemoSection
        title="With Top Bar"
        description="Navbar with an announcement top bar and full mobile menu with grouped links."
        code={`<Navbar>
  <NavbarTopBar>
    <span className="text-xs">🎉 v1.0 is live — check the changelog!</span>
    <a href="#" className="text-xs underline">Learn more →</a>
  </NavbarTopBar>
  <NavbarMain>
    <NavbarBrand>
      <Logo width={28} height={28} />
    </NavbarBrand>
    <NavbarLinks>
      <NavbarLink href="#">Features</NavbarLink>
      <NavbarLink href="#">Pricing</NavbarLink>
      <NavbarLink href="#">Blog</NavbarLink>
    </NavbarLinks>
    <NavbarActions>
      <Button size="sm">Sign Up</Button>
    </NavbarActions>
    <NavbarMobileToggle />
  </NavbarMain>
  <NavbarMobileMenu>
    <NavbarMobileGroup label="Product">
      <NavbarMobileLink href="#">Features</NavbarMobileLink>
      <NavbarMobileLink href="#">Pricing</NavbarMobileLink>
    </NavbarMobileGroup>
    <NavbarMobileGroup label="Resources">
      <NavbarMobileLink href="#">Blog</NavbarMobileLink>
      <NavbarMobileLink href="#">Changelog</NavbarMobileLink>
    </NavbarMobileGroup>
    <NavbarMobileActions>
      <Button className="w-full">Sign Up</Button>
    </NavbarMobileActions>
  </NavbarMobileMenu>
</Navbar>`}
      >
        <div className="border-2 border-dashed border-slate-200">
          <Navbar>
            <NavbarTopBar>
              <span className="text-xs">
                🎉 v1.0 is live — check the changelog!
              </span>
              <a href="#" className="text-xs underline">
                Learn more →
              </a>
            </NavbarTopBar>
            <NavbarMain>
              <NavbarBrand>
                <Logo width={28} height={28} />
              </NavbarBrand>
              <NavbarLinks>
                <NavbarLink href="#">Features</NavbarLink>
                <NavbarLink href="#">Pricing</NavbarLink>
                <NavbarLink href="#">Blog</NavbarLink>
              </NavbarLinks>
              <NavbarActions>
                <Button size="sm">Sign Up</Button>
              </NavbarActions>
              <NavbarMobileToggle />
            </NavbarMain>
            <NavbarMobileMenu>
              <NavbarMobileGroup label="Product">
                <NavbarMobileLink href="#">Features</NavbarMobileLink>
                <NavbarMobileLink href="#">Pricing</NavbarMobileLink>
              </NavbarMobileGroup>
              <NavbarMobileGroup label="Resources">
                <NavbarMobileLink href="#">Blog</NavbarMobileLink>
                <NavbarMobileLink href="#">Changelog</NavbarMobileLink>
              </NavbarMobileGroup>
              <NavbarMobileActions>
                <Button className="w-full">Sign Up</Button>
              </NavbarMobileActions>
            </NavbarMobileMenu>
          </Navbar>
        </div>
      </DemoSection>

      {/* ─── 3. Bordered Variant ─────────────────────── */}
      <DemoSection
        title="Bordered Variant"
        description="Navbar with prominent dashed borders — a boxed, brutalist feel."
        code={`<Navbar variant="bordered">
  <NavbarMain>
    <NavbarBrand>
      <Logo width={28} height={28} />
    </NavbarBrand>
    <NavbarLinks>
      <NavbarLink href="#">Work</NavbarLink>
      <NavbarLink href="#">About</NavbarLink>
      <NavbarLink href="#">Contact</NavbarLink>
    </NavbarLinks>
    <NavbarActions>
      <Button variant="outline" size="sm">Let's Talk</Button>
    </NavbarActions>
    <NavbarMobileToggle />
  </NavbarMain>
  <NavbarMobileMenu>
    <NavbarMobileLink href="#">Work</NavbarMobileLink>
    <NavbarMobileLink href="#">About</NavbarMobileLink>
    <NavbarMobileLink href="#">Contact</NavbarMobileLink>
  </NavbarMobileMenu>
</Navbar>`}
      >
        <div className="border-2 border-dashed border-slate-200 p-3 bg-slate-50">
          <Navbar variant="bordered">
            <NavbarMain>
              <NavbarBrand>
                <Logo width={28} height={28} />
              </NavbarBrand>
              <NavbarLinks>
                <NavbarLink href="#">Work</NavbarLink>
                <NavbarLink href="#">About</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
              </NavbarLinks>
              <NavbarActions>
                <Button variant="outline" size="sm">
                  Let&apos;s Talk
                </Button>
              </NavbarActions>
              <NavbarMobileToggle />
            </NavbarMain>
            <NavbarMobileMenu>
              <NavbarMobileLink href="#">Work</NavbarMobileLink>
              <NavbarMobileLink href="#">About</NavbarMobileLink>
              <NavbarMobileLink href="#">Contact</NavbarMobileLink>
            </NavbarMobileMenu>
          </Navbar>
        </div>
      </DemoSection>

      {/* ─── 4. With Mega Menu ───────────────────────── */}
      <DemoSection
        title="With Dropdown / Mega Menu"
        description="Desktop dropdown with mega menu items. Falls back to flat links on mobile."
        code={`<Navbar>
  <NavbarMain>
    <NavbarBrand>
      <Logo width={28} height={28} />
    </NavbarBrand>
    <NavbarLinks>
      <NavbarLink href="#">Home</NavbarLink>
      <NavbarDropdown label="Products">
        <NavbarMegaMenu className="grid-cols-2">
          <NavbarMegaMenuItem href="#" title="Analytics"
            description="Real-time data dashboards" />
          <NavbarMegaMenuItem href="#" title="Automation"
            description="Workflow automations" />
          <NavbarMegaMenuItem href="#" title="Integrations"
            description="Connect your tools" />
          <NavbarMegaMenuItem href="#" title="API"
            description="Build custom solutions" />
        </NavbarMegaMenu>
      </NavbarDropdown>
      <NavbarLink href="#">Pricing</NavbarLink>
    </NavbarLinks>
    <NavbarActions>
      <Button size="sm">Get Started</Button>
    </NavbarActions>
    <NavbarMobileToggle />
  </NavbarMain>
  <NavbarMobileMenu>
    <NavbarMobileGroup label="Pages">
      <NavbarMobileLink href="#">Home</NavbarMobileLink>
      <NavbarMobileLink href="#">Pricing</NavbarMobileLink>
    </NavbarMobileGroup>
    <NavbarMobileGroup label="Products">
      <NavbarMobileLink href="#">Analytics</NavbarMobileLink>
      <NavbarMobileLink href="#">Automation</NavbarMobileLink>
      <NavbarMobileLink href="#">Integrations</NavbarMobileLink>
      <NavbarMobileLink href="#">API</NavbarMobileLink>
    </NavbarMobileGroup>
  </NavbarMobileMenu>
</Navbar>`}
      >
        <div className="border-2 border-dashed border-slate-200">
          <Navbar>
            <NavbarMain>
              <NavbarBrand>
                <Logo width={28} height={28} />
              </NavbarBrand>
              <NavbarLinks>
                <NavbarLink href="#">Home</NavbarLink>
                <NavbarDropdown label="Products">
                  <NavbarMegaMenu className="grid-cols-2">
                    <NavbarMegaMenuItem
                      href="#"
                      title="Analytics"
                      description="Real-time data dashboards"
                    />
                    <NavbarMegaMenuItem
                      href="#"
                      title="Automation"
                      description="Workflow automations"
                    />
                    <NavbarMegaMenuItem
                      href="#"
                      title="Integrations"
                      description="Connect your tools"
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
            <NavbarMobileMenu>
              <NavbarMobileGroup label="Pages">
                <NavbarMobileLink href="#">Home</NavbarMobileLink>
                <NavbarMobileLink href="#">Pricing</NavbarMobileLink>
              </NavbarMobileGroup>
              <NavbarMobileGroup label="Products">
                <NavbarMobileLink href="#">Analytics</NavbarMobileLink>
                <NavbarMobileLink href="#">Automation</NavbarMobileLink>
                <NavbarMobileLink href="#">Integrations</NavbarMobileLink>
                <NavbarMobileLink href="#">API</NavbarMobileLink>
              </NavbarMobileGroup>
            </NavbarMobileMenu>
          </Navbar>
        </div>
      </DemoSection>

      {/* ─── 5. Transparent ──────────────────────────── */}
      <DemoSection
        title="Transparent Variant"
        description="Transparent background, ideal for overlaying hero sections."
        code={`<Navbar variant="transparent">
  <NavbarMain>
    <NavbarBrand>
      <Logo width={28} height={28} />
    </NavbarBrand>
    <NavbarLinks>
      <NavbarLink href="#">Home</NavbarLink>
      <NavbarLink href="#">About</NavbarLink>
    </NavbarLinks>
  </NavbarMain>
</Navbar>`}
      >
        <div className="border-2 border-dashed border-slate-200 bg-gradient-to-r from-slate-100 to-slate-200">
          <Navbar variant="transparent">
            <NavbarMain>
              <NavbarBrand>
                <Logo width={28} height={28} />
              </NavbarBrand>
              <NavbarLinks>
                <NavbarLink href="#">Home</NavbarLink>
                <NavbarLink href="#">About</NavbarLink>
              </NavbarLinks>
            </NavbarMain>
          </Navbar>
        </div>
      </DemoSection>

      {/* ─── 6. Minimal ──────────────────────────────── */}
      <DemoSection
        title="Minimal"
        description="Clean, stripped-down navbar with just brand and links."
        code={`<Navbar variant="minimal">
  <NavbarMain>
    <NavbarBrand href="#">
      <Logo width={24} height={24} />
    </NavbarBrand>
    <NavbarLinks>
      <NavbarLink href="#">Docs</NavbarLink>
      <NavbarLink href="#">GitHub</NavbarLink>
    </NavbarLinks>
  </NavbarMain>
</Navbar>`}
      >
        <div className="border-2 border-dashed border-slate-200">
          <Navbar variant="minimal">
            <NavbarMain>
              <NavbarBrand href="#">
                <Logo width={24} height={24} />
              </NavbarBrand>
              <NavbarLinks>
                <NavbarLink href="#">Docs</NavbarLink>
                <NavbarLink href="#">GitHub</NavbarLink>
              </NavbarLinks>
            </NavbarMain>
          </Navbar>
        </div>
      </DemoSection>

      {/* ─── 7. Navigation Config Pattern ─────────────── */}
      <DemoSection
        title="Navigation Config Pattern"
        description="Create a centralized navigation.ts file to manage all links in one place. Navbar, Sidebar, and Footer all read from the same config."
        code={`// lib/navigation.ts
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export interface FooterSection {
  heading: string;
  links: NavItem[];
}

export interface ComponentGroup {
  label: string;
  basePath: string;
  items: string[];
}

export const mainNav: NavItem[] = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs/atoms" },
  { label: "GitHub", href: "https://github.com/...", external: true },
];

export const footerNav: FooterSection[] = [
  {
    heading: "Documentation",
    links: [
      { label: "Getting Started", href: "/docs" },
      { label: "Installation", href: "/docs/installation" },
    ],
  },
];

export const componentRegistry: ComponentGroup[] = [
  {
    label: "Atoms",
    basePath: "/docs/atoms",
    items: ["Button", "Input", "Badge"],
  },
];

// Usage in page.tsx
import { mainNav } from "@/lib/navigation";

<NavbarLinks>
  {mainNav.map((item) => (
    <NavbarLink
      key={item.href}
      href={item.href}
      {...(item.external ? { target: "_blank" } : {})}
    >
      {item.label}
    </NavbarLink>
  ))}
</NavbarLinks>`}
      >
        <div className="border-2 border-dashed border-slate-200 p-6 bg-slate-50">
          <div className="space-y-3">
            <p className="text-sm font-medium text-slate-700">
              Place your navigation config in{" "}
              <code className="px-1.5 py-0.5 bg-white border-2 border-dashed border-slate-200 text-xs font-mono">
                lib/navigation.ts
              </code>
            </p>
            <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
              <li>
                <strong>mainNav</strong> — Top-level links rendered by Navbar
              </li>
              <li>
                <strong>mobileNav</strong> — Links for the mobile slide-in panel
              </li>
              <li>
                <strong>footerNav</strong> — Grouped sections for Footer
              </li>
              <li>
                <strong>componentRegistry</strong> — Sidebar component groups
                with basePath
              </li>
              <li>
                <strong>socialLinks</strong> — Centralized social/external URLs
              </li>
            </ul>
          </div>
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
