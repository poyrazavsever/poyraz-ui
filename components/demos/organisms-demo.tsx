"use client";

import * as React from "react";
import { MapPin, Rss, Activity, Settings, Globe } from "lucide-react";

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

/* ------------------------------------------------------------------ */
/*  Shared nav items                                                   */
/* ------------------------------------------------------------------ */

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

function SharedActions() {
  return (
    <>
      <Button variant="outline" size="sm">
        Login
      </Button>
      <Button size="sm">Let&apos;s Start</Button>
    </>
  );
}

function SharedMobileMenu() {
  return (
    <>
      <NavbarMobileLink href="#">Showcase</NavbarMobileLink>
      <NavbarMobileLink href="#">Products</NavbarMobileLink>
      <NavbarMobileLink href="#">Resources</NavbarMobileLink>
      <NavbarMobileLink href="#">Pricing</NavbarMobileLink>
      <NavbarMobileLink href="#">Contact</NavbarMobileLink>
      <div className="flex gap-2 mt-3 pt-3 border-t-2 border-dashed border-slate-200">
        <Button variant="outline" size="sm" className="flex-1">
          Login
        </Button>
        <Button size="sm" className="flex-1">
          Let&apos;s Start
        </Button>
      </div>
    </>
  );
}

/* ================================================================== */
/*  DEMO COMPONENT                                                     */
/* ================================================================== */

export function OrganismsDemo() {
  return (
    <div className="space-y-16 w-full">
      {/* VARIANT: DEFAULT */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Navbar — Default</h3>
        <p className="text-sm text-slate-500 mb-4">
          Full navbar with top bar, navigation links, mega-menu dropdowns and
          action buttons.
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
                <SharedActions />
              </NavbarActions>
              <NavbarMobileToggle />
            </NavbarMain>
            <NavbarMobileMenu>
              <SharedMobileMenu />
            </NavbarMobileMenu>
          </Navbar>
        </div>
      </section>

      {/* VARIANT: MINIMAL */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Navbar — Minimal</h3>
        <p className="text-sm text-slate-500 mb-4">
          Clean navigation without the top bar. Ideal for dashboards and
          internal apps.
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
                <SharedActions />
              </NavbarActions>
              <NavbarMobileToggle />
            </NavbarMain>
            <NavbarMobileMenu>
              <SharedMobileMenu />
            </NavbarMobileMenu>
          </Navbar>
        </div>
      </section>

      {/* VARIANT: TRANSPARENT */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Navbar — Transparent</h3>
        <p className="text-sm text-slate-500 mb-4">
          Transparent background for overlaying on hero sections or banners.
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
            <NavbarMobileMenu className="bg-red-700 border-white/20">
              <NavbarMobileLink
                href="#"
                className="text-white hover:bg-white/10 hover:border-white/20"
              >
                Home
              </NavbarMobileLink>
              <NavbarMobileLink
                href="#"
                className="text-white hover:bg-white/10 hover:border-white/20"
              >
                About
              </NavbarMobileLink>
              <NavbarMobileLink
                href="#"
                className="text-white hover:bg-white/10 hover:border-white/20"
              >
                Services
              </NavbarMobileLink>
              <NavbarMobileLink
                href="#"
                className="text-white hover:bg-white/10 hover:border-white/20"
              >
                Contact
              </NavbarMobileLink>
              <div className="flex gap-2 mt-3 pt-3 border-t-2 border-dashed border-white/20">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-white/50 text-white hover:bg-white hover:text-red-600"
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-white text-red-600 border-white hover:bg-white/90"
                >
                  Get Started
                </Button>
              </div>
            </NavbarMobileMenu>
          </Navbar>
        </div>
      </section>
    </div>
  );
}
