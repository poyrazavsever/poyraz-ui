"use client";

import {
  Navbar,
  NavbarTopBar,
  NavbarMain,
  NavbarBrand,
  NavbarLinks,
  NavbarLink,
  NavbarActions,
  NavbarMobileToggle,
  NavbarMobileMenu,
  NavbarMobileLink,
} from "@/components/ui/organisms/navbar";
import { Button } from "@/components/ui/atoms/button";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function NavbarPage() {
  return (
    <ComponentPage
      name="Navbar"
      description="Responsive navigation bar with brand, links, actions, mobile menu, and top bar slot. Supports default, minimal, and transparent variants."
      importCode={`import {
  Navbar,
  NavbarTopBar,
  NavbarMain,
  NavbarBrand,
  NavbarLinks,
  NavbarLink,
  NavbarActions,
  NavbarMobileToggle,
  NavbarMobileMenu,
  NavbarMobileLink,
} from "poyraz-ui/organisms";`}
    >
      <DemoSection
        title="Default"
        description="Standard navbar with brand, links, and action buttons."
        code={`<Navbar>
  <NavbarMain>
    <NavbarBrand>Poyraz UI</NavbarBrand>
    <NavbarLinks>
      <NavbarLink href="#">Home</NavbarLink>
      <NavbarLink href="#">Components</NavbarLink>
      <NavbarLink href="#">Docs</NavbarLink>
    </NavbarLinks>
    <NavbarActions>
      <Button variant="outline" size="sm">Sign In</Button>
      <Button size="sm">Get Started</Button>
    </NavbarActions>
    <NavbarMobileToggle />
  </NavbarMain>
  <NavbarMobileMenu>
    <NavbarMobileLink href="#">Home</NavbarMobileLink>
    <NavbarMobileLink href="#">Components</NavbarMobileLink>
    <NavbarMobileLink href="#">Docs</NavbarMobileLink>
  </NavbarMobileMenu>
</Navbar>`}
      >
        <div className="border-2 border-dashed border-slate-200">
          <Navbar>
            <NavbarMain>
              <NavbarBrand>Poyraz UI</NavbarBrand>
              <NavbarLinks>
                <NavbarLink href="#">Home</NavbarLink>
                <NavbarLink href="#">Components</NavbarLink>
                <NavbarLink href="#">Docs</NavbarLink>
              </NavbarLinks>
              <NavbarActions>
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
                <Button size="sm">Get Started</Button>
              </NavbarActions>
              <NavbarMobileToggle />
            </NavbarMain>
            <NavbarMobileMenu>
              <NavbarMobileLink href="#">Home</NavbarMobileLink>
              <NavbarMobileLink href="#">Components</NavbarMobileLink>
              <NavbarMobileLink href="#">Docs</NavbarMobileLink>
            </NavbarMobileMenu>
          </Navbar>
        </div>
      </DemoSection>

      <DemoSection
        title="With Top Bar"
        description="Navbar with an announcement top bar."
        code={`<Navbar>
  <NavbarTopBar>
    <span className="text-xs">🎉 v1.0 is live!</span>
  </NavbarTopBar>
  <NavbarMain>
    <NavbarBrand>Poyraz</NavbarBrand>
    <NavbarLinks>
      <NavbarLink href="#">Features</NavbarLink>
      <NavbarLink href="#">Pricing</NavbarLink>
    </NavbarLinks>
    <NavbarActions>
      <Button size="sm">Sign Up</Button>
    </NavbarActions>
    <NavbarMobileToggle />
  </NavbarMain>
</Navbar>`}
      >
        <div className="border-2 border-dashed border-slate-200">
          <Navbar>
            <NavbarTopBar>
              <span className="text-xs">🎉 v1.0 is live!</span>
            </NavbarTopBar>
            <NavbarMain>
              <NavbarBrand>Poyraz</NavbarBrand>
              <NavbarLinks>
                <NavbarLink href="#">Features</NavbarLink>
                <NavbarLink href="#">Pricing</NavbarLink>
              </NavbarLinks>
              <NavbarActions>
                <Button size="sm">Sign Up</Button>
              </NavbarActions>
              <NavbarMobileToggle />
            </NavbarMain>
          </Navbar>
        </div>
      </DemoSection>

      <DemoSection
        title="Transparent Variant"
        description="Transparent background navbar, ideal for hero sections."
        code={`<Navbar variant="transparent">
  <NavbarMain>
    <NavbarBrand>Poyraz</NavbarBrand>
    <NavbarLinks>
      <NavbarLink href="#">Home</NavbarLink>
      <NavbarLink href="#">About</NavbarLink>
    </NavbarLinks>
  </NavbarMain>
</Navbar>`}
      >
        <div className="border-2 border-dashed border-slate-200 bg-slate-50">
          <Navbar variant="transparent">
            <NavbarMain>
              <NavbarBrand>Poyraz</NavbarBrand>
              <NavbarLinks>
                <NavbarLink href="#">Home</NavbarLink>
                <NavbarLink href="#">About</NavbarLink>
              </NavbarLinks>
            </NavbarMain>
          </Navbar>
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
