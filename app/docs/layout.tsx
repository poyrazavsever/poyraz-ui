"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Home, Download, ChevronDown, Github } from "lucide-react";

import { cn } from "@/components/ui/atoms/typography";
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
import {
  componentRegistry,
  docsMobileNav,
  socialLinks,
  toSlug,
} from "@/lib/navigation";

/* ── Collapsible sidebar group ────────────────────────────────────── */

function SidebarSection({
  label,
  basePath,
  items,
  pathname,
  defaultOpen = false,
}: {
  label: string;
  basePath: string;
  items: string[];
  pathname: string;
  defaultOpen?: boolean;
}) {
  const isAnyActive = items.some(
    (item) => pathname === `${basePath}/${toSlug(item)}`,
  );
  const [open, setOpen] = React.useState(defaultOpen || isAnyActive);

  return (
    <div className="space-y-0.5">
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center justify-between w-full px-3 py-2 text-[11px] font-bold uppercase tracking-widest cursor-pointer",
          "text-slate-400 hover:text-slate-600 transition-colors",
        )}
      >
        <span>{label}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      {open && (
        <ul className="space-y-0.5">
          {items.map((item) => {
            const href = `${basePath}/${toSlug(item)}`;
            const active = pathname === href;
            return (
              <li key={item}>
                <Link
                  href={href}
                  className={cn(
                    "block px-4 py-1.5 text-[13px] transition-colors no-underline",
                    "border-l-[3px] border-solid",
                    active
                      ? "border-red-600 bg-red-50 text-red-700 font-semibold"
                      : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50",
                  )}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

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

      <div className="px-2 space-y-2 mt-2">
        {componentRegistry.map((group) => (
          <SidebarSection
            key={group.label}
            label={`${group.label} (${group.items.length})`}
            basePath={group.basePath}
            items={group.items}
            pathname={pathname}
          />
        ))}
      </div>
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
            <Link href={socialLinks.repo} target="_blank">
              <Button size="icon" variant="ghost">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
          </NavbarActions>

          <NavbarMobileToggle />
        </NavbarMain>

        <NavbarMobileMenu>
          {docsMobileNav.map((item) => (
            <NavbarMobileLink key={item.href} href={item.href}>
              {item.label}
            </NavbarMobileLink>
          ))}
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
                  href={socialLinks.github}
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
