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
  NavbarMegaMenuLinks,
  NavbarMegaMenuFeatured,
  NavbarMegaMenuItem,
  NavbarActions,
  NavbarMobileToggle,
  NavbarMobileMenu,
  NavbarMobileLink,
  NavbarMobileGroup,
  NavbarMobileActions,
  NavbarSearch,
  NavbarDivider,
} from "poyraz-ui/organisms";
import { Button } from "poyraz-ui/atoms";
import { Logo } from "poyraz-ui/atoms";
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

      {/* ─── 4. Dropdown — Full Layout ───────────────── */}
      <DemoSection
        title="Dropdown — Full Layout"
        description="Links spread across 4 columns using layout='full'. Items fill the entire dropdown width."
        code={`<NavbarDropdown label="Products">
  <NavbarMegaMenu layout="full">
    <NavbarMegaMenuItem href="#" title="Analytics"
      description="Real-time dashboards" />
    <NavbarMegaMenuItem href="#" title="Automation"
      description="Workflow tools" />
    <NavbarMegaMenuItem href="#" title="Integrations"
      description="Connect everything" />
    <NavbarMegaMenuItem href="#" title="API"
      description="Build custom solutions" />
  </NavbarMegaMenu>
</NavbarDropdown>`}
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
        </div>
      </DemoSection>

      {/* ─── 4b. Dropdown — Columns Layout ──────────── */}
      <DemoSection
        title="Dropdown — Columns Layout"
        description="Two-column link list on the left, compact and organized. Use layout='columns'."
        code={`<NavbarDropdown label="Resources">
  <NavbarMegaMenu layout="columns">
    <NavbarMegaMenuItem href="#" title="Documentation"
      description="Guides and references" />
    <NavbarMegaMenuItem href="#" title="Tutorials"
      description="Step-by-step walkthroughs" />
    <NavbarMegaMenuItem href="#" title="Blog"
      description="Latest updates" />
    <NavbarMegaMenuItem href="#" title="Changelog"
      description="What's new" />
  </NavbarMegaMenu>
</NavbarDropdown>`}
      >
        <div className="border-2 border-dashed border-slate-200">
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
                      description="Latest updates and articles"
                    />
                    <NavbarMegaMenuItem
                      href="#"
                      title="Changelog"
                      description="What's new in each release"
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
        </div>
      </DemoSection>

      {/* ─── 4c. Dropdown — Featured Layout ─────────── */}
      <DemoSection
        title="Dropdown — Featured Layout"
        description="Links on the left, featured card/content on the right. Use layout='featured' with NavbarMegaMenuLinks and NavbarMegaMenuFeatured."
        code={`<NavbarDropdown label="Products">
  <NavbarMegaMenu layout="featured">
    <NavbarMegaMenuLinks>
      <NavbarMegaMenuItem href="#" title="Analytics"
        description="Real-time dashboards" />
      <NavbarMegaMenuItem href="#" title="Automation"
        description="Workflow tools" />
      <NavbarMegaMenuItem href="#" title="Integrations"
        description="Connect everything" />
      <NavbarMegaMenuItem href="#" title="API"
        description="Build custom solutions" />
    </NavbarMegaMenuLinks>
    <NavbarMegaMenuFeatured>
      <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">
        What's New
      </p>
      <p className="text-sm font-medium">v2.0 Released</p>
      <p className="text-xs text-slate-500 mt-1">
        New dashboard, faster builds, and more.
      </p>
      <Button size="sm" className="mt-3">Learn More</Button>
    </NavbarMegaMenuFeatured>
  </NavbarMegaMenu>
</NavbarDropdown>`}
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
        </div>
      </DemoSection>

      {/* ─── 4d. Dropdown — List Layout ─────────────── */}
      <DemoSection
        title="Dropdown — List Layout"
        description="Simple single-column list for minimal dropdowns. Use layout='list'."
        code={`<NavbarDropdown label="More">
  <NavbarMegaMenu layout="list">
    <NavbarMegaMenuItem href="#" title="Help Center" />
    <NavbarMegaMenuItem href="#" title="Community" />
    <NavbarMegaMenuItem href="#" title="Status" />
    <NavbarMegaMenuItem href="#" title="Contact" />
  </NavbarMegaMenu>
</NavbarDropdown>`}
      >
        <div className="border-2 border-dashed border-slate-200">
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
