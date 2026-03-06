"use client";

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
  BookOpen,
  Layers,
  Zap,
  Globe,
  Package,
  Code,
  FileText,
  Users,
} from "lucide-react";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function NavbarPage() {
  return (
    <ComponentPage
      name="Navbar"
      description="Responsive navigation bar with brand, links, mega menu, popover & panel dropdowns, search, mobile accordion & drill-down, top bar variants, and sticky auto-hide. Supports default, minimal, transparent, and bordered variants."
      importCode={`import {
  Navbar, NavbarTopBar, NavbarTopBarSection,
  NavbarMain, NavbarBrand, NavbarLinks, NavbarLink,
  NavbarDropdown, NavbarMegaMenu, NavbarMegaMenuItem,
  NavbarMegaMenuLinks, NavbarMegaMenuFeatured,
  NavbarPopoverDropdown, NavbarPopoverDropdownItem,
  NavbarPanelDropdown, NavbarPanelDropdownItem,
  NavbarActions, NavbarMobileToggle,
  NavbarMobileMenu, NavbarMobileLink,
  NavbarMobileGroup, NavbarMobileActions,
  NavbarMobileDropdown, NavbarMobileDrillMenu,
  NavbarMobileDrillTrigger, NavbarMobileDrillPanel,
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
        <div className="border border-border rounded-sm">
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
        <div className="border border-border rounded-sm">
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
        description="Navbar with prominent borders — a boxed feel."
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
        <div className="border border-border rounded-sm p-3 bg-muted">
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
        <div className="border border-border rounded-sm">
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
        <div className="border border-border rounded-sm">
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
        <div className="border border-border rounded-sm">
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
                      <p className="text-xs font-bold uppercase tracking-wide text-placeholder mb-2">
                        What&apos;s New
                      </p>
                      <p className="text-sm font-medium">v2.0 Released</p>
                      <p className="text-xs text-muted-foreground mt-1">
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
        <div className="border border-border rounded-sm">
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
        <div className="border border-border rounded-sm bg-gradient-to-r from-accent to-border">
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
        <div className="border border-border rounded-sm">
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

      {/* ─── 7. Popover Dropdown ────────────────── */}
      <DemoSection
        title="Popover Dropdown"
        description="Small link-anchored dropdown for simple navigation lists. Uses Radix Popover."
        code={`<NavbarPopoverDropdown label="Resources" align="start">
  <NavbarPopoverDropdownItem href="#">Documentation</NavbarPopoverDropdownItem>
  <NavbarPopoverDropdownItem href="#">Blog</NavbarPopoverDropdownItem>
  <NavbarPopoverDropdownItem href="#">Changelog</NavbarPopoverDropdownItem>
  <NavbarPopoverDropdownItem href="#">Status</NavbarPopoverDropdownItem>
</NavbarPopoverDropdown>`}
      >
        <div className="border border-border rounded-sm overflow-visible">
          <Navbar>
            <NavbarMain>
              <NavbarBrand>
                <Logo width={28} height={28} />
              </NavbarBrand>
              <NavbarLinks>
                <NavbarLink href="#">Home</NavbarLink>
                <NavbarPopoverDropdown label="Resources" align="start">
                  <NavbarPopoverDropdownItem href="#">
                    Documentation
                  </NavbarPopoverDropdownItem>
                  <NavbarPopoverDropdownItem href="#">
                    Blog
                  </NavbarPopoverDropdownItem>
                  <NavbarPopoverDropdownItem href="#">
                    Changelog
                  </NavbarPopoverDropdownItem>
                  <NavbarPopoverDropdownItem href="#">
                    Status
                  </NavbarPopoverDropdownItem>
                </NavbarPopoverDropdown>
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

      {/* ─── 8. Panel Dropdown ─────────────────────── */}
      <DemoSection
        title="Panel Dropdown"
        description="Medium panel dropdown with icon, title, and description for each item."
        code={`<NavbarPanelDropdown label="Products" width="380px" align="start">
  <NavbarPanelDropdownItem
    href="#" title="Analytics"
    description="Real-time data dashboards"
    icon={<BarChart />}
  />
  <NavbarPanelDropdownItem
    href="#" title="Automation"
    description="Workflow automation tools"
    icon={<Zap />}
  />
</NavbarPanelDropdown>`}
      >
        <div className="border border-border rounded-sm overflow-visible">
          <Navbar>
            <NavbarMain>
              <NavbarBrand>
                <Logo width={28} height={28} />
              </NavbarBrand>
              <NavbarLinks>
                <NavbarLink href="#">Home</NavbarLink>
                <NavbarPanelDropdown
                  label="Products"
                  width="380px"
                  align="start"
                >
                  <NavbarPanelDropdownItem
                    href="#"
                    title="Analytics"
                    description="Real-time data dashboards and insights"
                    icon={<Layers className="h-4 w-4" />}
                  />
                  <NavbarPanelDropdownItem
                    href="#"
                    title="Automation"
                    description="Workflow automation tools"
                    icon={<Zap className="h-4 w-4" />}
                  />
                  <NavbarPanelDropdownItem
                    href="#"
                    title="Integrations"
                    description="Connect all your favorite tools"
                    icon={<Globe className="h-4 w-4" />}
                  />
                </NavbarPanelDropdown>
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

      {/* ─── 9. Top Bar — Announcement ─────────────── */}
      <DemoSection
        title="Top Bar — Announcement"
        description="Red announcement bar with dismissible option. Great for launches, updates, or promotions."
        code={`<NavbarTopBar variant="announcement" dismissible>
  <span>🎉 v2.0 is live — check the changelog!</span>
  <a href="#" className="underline">Learn more →</a>
</NavbarTopBar>`}
      >
        <div className="border border-border rounded-sm">
          <Navbar>
            <NavbarTopBar variant="announcement" dismissible>
              <span>🎉 v2.0 is live — check the changelog!</span>
              <a href="#" className="underline ml-2">
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
        </div>
      </DemoSection>

      {/* ─── 10. Top Bar — Secondary ───────────────── */}
      <DemoSection
        title="Top Bar — Secondary"
        description="Subtle secondary bar with sections for contact info, language, or utility links."
        code={`<NavbarTopBar variant="secondary">
  <NavbarTopBarSection>
    <span>📞 +1 (555) 000-0000</span>
    <span>✉️ hello@example.com</span>
  </NavbarTopBarSection>
  <NavbarTopBarSection align="end">
    <a href="#">Help</a>
    <a href="#">Account</a>
  </NavbarTopBarSection>
</NavbarTopBar>`}
      >
        <div className="border border-border rounded-sm">
          <Navbar>
            <NavbarTopBar variant="secondary">
              <NavbarTopBarSection>
                <span>📞 +1 (555) 000-0000</span>
                <span>✉️ hello@example.com</span>
              </NavbarTopBarSection>
              <NavbarTopBarSection align="end">
                <a href="#" className="hover:underline">
                  Help
                </a>
                <a href="#" className="hover:underline">
                  Account
                </a>
              </NavbarTopBarSection>
            </NavbarTopBar>
            <NavbarMain>
              <NavbarBrand>
                <Logo width={28} height={28} />
              </NavbarBrand>
              <NavbarLinks>
                <NavbarLink href="#">Home</NavbarLink>
                <NavbarLink href="#">Shop</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
              </NavbarLinks>
              <NavbarActions>
                <Button size="sm">Sign In</Button>
              </NavbarActions>
              <NavbarMobileToggle />
            </NavbarMain>
          </Navbar>
        </div>
      </DemoSection>

      {/* ─── 11. Mobile Accordion Dropdown ─────────── */}
      <DemoSection
        title="Mobile Accordion Dropdown"
        description="Accordion-style nested navigation for mobile menus with animated expand/collapse."
        code={`<NavbarMobileMenu>
  <NavbarMobileLink href="#" active>Home</NavbarMobileLink>
  <NavbarMobileDropdown label="Products">
    <NavbarMobileLink href="#">Analytics</NavbarMobileLink>
    <NavbarMobileLink href="#">Automation</NavbarMobileLink>
    <NavbarMobileLink href="#">Integrations</NavbarMobileLink>
  </NavbarMobileDropdown>
  <NavbarMobileDropdown label="Resources">
    <NavbarMobileLink href="#">Blog</NavbarMobileLink>
    <NavbarMobileLink href="#">Docs</NavbarMobileLink>
  </NavbarMobileDropdown>
  <NavbarMobileActions>
    <Button className="w-full">Sign Up</Button>
  </NavbarMobileActions>
</NavbarMobileMenu>`}
      >
        <div className="border border-border rounded-sm max-w-xs mx-auto">
          <div className="border-b border-border px-4 py-3 flex items-center justify-between">
            <span className="text-xs font-bold tracking-widest uppercase text-placeholder">
              Mobile Menu Preview
            </span>
          </div>
          <div className="px-2 py-3">
            <NavbarMobileLink href="#" active>
              Home
            </NavbarMobileLink>
            <NavbarMobileDropdown label="Products">
              <NavbarMobileLink href="#">Analytics</NavbarMobileLink>
              <NavbarMobileLink href="#">Automation</NavbarMobileLink>
              <NavbarMobileLink href="#">Integrations</NavbarMobileLink>
            </NavbarMobileDropdown>
            <NavbarMobileDropdown label="Resources">
              <NavbarMobileLink href="#">Blog</NavbarMobileLink>
              <NavbarMobileLink href="#">Documentation</NavbarMobileLink>
              <NavbarMobileLink href="#">Changelog</NavbarMobileLink>
            </NavbarMobileDropdown>
            <NavbarMobileLink href="#">Pricing</NavbarMobileLink>
          </div>
          <div className="border-t border-border px-4 py-3 flex flex-col gap-2">
            <Button variant="outline" className="w-full" size="sm">
              Sign In
            </Button>
            <Button className="w-full" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </DemoSection>

      {/* ─── 12. Mobile Drill-Down ─────────────────── */}
      <DemoSection
        title="Mobile Drill-Down"
        description="Multi-level drill-down navigation with animated panel transitions. Ideal for deep navigation hierarchies."
        code={`<NavbarMobileDrillMenu>
  <NavbarMobileLink href="#">Home</NavbarMobileLink>
  <NavbarMobileDrillTrigger panelId="products">
    Products
  </NavbarMobileDrillTrigger>
  <NavbarMobileDrillPanel panelId="products" backLabel="Back">
    <NavbarMobileLink href="#">Analytics</NavbarMobileLink>
    <NavbarMobileLink href="#">Automation</NavbarMobileLink>
    <NavbarMobileLink href="#">API</NavbarMobileLink>
  </NavbarMobileDrillPanel>
</NavbarMobileDrillMenu>`}
      >
        <div className="border border-border rounded-sm max-w-xs mx-auto">
          <div className="border-b border-border px-4 py-3 flex items-center justify-between">
            <span className="text-xs font-bold tracking-widest uppercase text-placeholder">
              Drill-Down Preview
            </span>
          </div>
          <div className="h-56 overflow-hidden">
            <NavbarMobileDrillMenu className="h-full">
              <div className="px-2 py-3 flex flex-col gap-0.5">
                <NavbarMobileLink href="#" active>
                  Home
                </NavbarMobileLink>
                <NavbarMobileDrillTrigger panelId="drill-products">
                  Products
                </NavbarMobileDrillTrigger>
                <NavbarMobileDrillTrigger panelId="drill-resources">
                  Resources
                </NavbarMobileDrillTrigger>
                <NavbarMobileLink href="#">Pricing</NavbarMobileLink>
              </div>
              <NavbarMobileDrillPanel panelId="drill-products" backLabel="Back">
                <NavbarMobileLink href="#">Analytics</NavbarMobileLink>
                <NavbarMobileLink href="#">Automation</NavbarMobileLink>
                <NavbarMobileLink href="#">Integrations</NavbarMobileLink>
                <NavbarMobileLink href="#">API</NavbarMobileLink>
              </NavbarMobileDrillPanel>
              <NavbarMobileDrillPanel
                panelId="drill-resources"
                backLabel="Back"
              >
                <NavbarMobileLink href="#">Blog</NavbarMobileLink>
                <NavbarMobileLink href="#">Documentation</NavbarMobileLink>
                <NavbarMobileLink href="#">Changelog</NavbarMobileLink>
              </NavbarMobileDrillPanel>
            </NavbarMobileDrillMenu>
          </div>
        </div>
      </DemoSection>

      {/* ─── 13. Navigation Config Pattern ─────────────── */}
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
        <div className="border border-border rounded-sm p-6 bg-muted">
          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">
              Place your navigation config in{" "}
              <code className="px-1.5 py-0.5 bg-background border border-border rounded-sm text-xs font-mono">
                lib/navigation.ts
              </code>
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
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
