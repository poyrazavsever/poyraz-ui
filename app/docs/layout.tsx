"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileText,
  Home,
  Download,
  Atom,
  TestTube2,
  Component,
  Github,
} from "lucide-react";

import { Logo } from "@/components/ui/atoms/logo";
import { Button } from "@/components/ui/atoms/button";
import {
  Navbar,
  NavbarBrand,
  NavbarMain,
  NavbarLinks,
  NavbarLink,
  NavbarActions,
  NavbarMobileToggle,
  NavbarMobileMenu,
  NavbarMobileLink,
} from "@/components/ui/organisms/navbar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/organisms/sidebar";
import {
  Footer,
  FooterBottom,
  FooterSocials,
  FooterSocialLink,
} from "@/components/ui/organisms/footer";

function DocsSidebarContent() {
  const pathname = usePathname();

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Getting Started</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem
            href="/docs"
            icon={<Home className="h-4 w-4" />}
            active={pathname === "/docs"}
          >
            Introduction
          </SidebarMenuItem>
          <SidebarMenuItem
            href="/docs/installation"
            icon={<Download className="h-4 w-4" />}
            active={pathname === "/docs/installation"}
          >
            Installation
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Components</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem
            href="/docs/atoms"
            icon={<Atom className="h-4 w-4" />}
            active={pathname === "/docs/atoms"}
          >
            Atoms
          </SidebarMenuItem>
          <SidebarMenuItem
            href="/docs/molecules"
            icon={<TestTube2 className="h-4 w-4" />}
            active={pathname === "/docs/molecules"}
          >
            Molecules
          </SidebarMenuItem>
          <SidebarMenuItem
            href="/docs/organisms"
            icon={<Component className="h-4 w-4" />}
            active={pathname === "/docs/organisms"}
          >
            Organisms
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ─── TOP NAVBAR ───────────────────────────────────── */}
      <Navbar variant="minimal" sticky>
        <NavbarMain>
          <NavbarBrand href="/">
            <Logo width={32} height={32} />
          </NavbarBrand>

          <NavbarLinks>
            <NavbarLink href="/docs">Docs</NavbarLink>
            <NavbarLink href="/docs/atoms">Components</NavbarLink>
          </NavbarLinks>

          <NavbarActions>
            <Link
              href="https://github.com/poyrazavsever/poyraz-ui"
              target="_blank"
            >
              <Button size="icon" variant="ghost">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
          </NavbarActions>

          <NavbarMobileToggle />
        </NavbarMain>

        <NavbarMobileMenu>
          <NavbarMobileLink href="/docs">Introduction</NavbarMobileLink>
          <NavbarMobileLink href="/docs/installation">
            Installation
          </NavbarMobileLink>
          <NavbarMobileLink href="/docs/atoms">Atoms</NavbarMobileLink>
          <NavbarMobileLink href="/docs/molecules">Molecules</NavbarMobileLink>
          <NavbarMobileLink href="/docs/organisms">Organisms</NavbarMobileLink>
        </NavbarMobileMenu>
      </Navbar>

      {/* ─── BODY ─────────────────────────────────────────── */}
      <div className="flex flex-1">
        {/* Desktop Sidebar — fixed */}
        <div className="hidden lg:block w-64 shrink-0">
          <Sidebar
            variant="default"
            className="fixed top-[57px] left-0 w-64 h-[calc(100vh-57px)] border-r-2 border-dashed border-slate-200 overflow-y-auto"
          >
            <SidebarHeader className="h-14">
              <span className="text-xs font-bold tracking-widest uppercase text-slate-400">
                Docs
              </span>
            </SidebarHeader>
            <SidebarContent>
              <DocsSidebarContent />
            </SidebarContent>
          </Sidebar>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-slate-50/50">
          <div className="max-w-4xl mx-auto py-10 px-6 md:px-10">
            {children}
          </div>

          {/* Docs Footer (compact) */}
          <Footer variant="compact" containerClassName="max-w-4xl mx-auto">
            <FooterBottom className="mt-0 pt-0 border-t-0">
              <span className="text-xs text-slate-400">
                &copy; {new Date().getFullYear()} Poyraz Avsever. MIT License.
              </span>
              <FooterSocials>
                <FooterSocialLink
                  href="https://github.com/poyrazavsever"
                  aria-label="GitHub"
                  className="h-7 w-7"
                >
                  <Github className="h-3 w-3" />
                </FooterSocialLink>
              </FooterSocials>
            </FooterBottom>
          </Footer>
        </main>
      </div>
    </div>
  );
}
