"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Home, Download, ChevronDown, Github } from "lucide-react";

import { cn } from "poyraz-ui";
import { Logo } from "poyraz-ui/atoms";
import { Button } from "poyraz-ui/atoms";
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
} from "poyraz-ui/organisms";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "poyraz-ui/organisms";
import {
  Footer,
  FooterBottom,
  FooterSocials,
  FooterSocialLink,
} from "poyraz-ui/organisms";
import {
  componentRegistry,
  docsMobileNav,
  socialLinks,
  toSlug,
} from "@/lib/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

/* ── Collapsible sidebar group ────────────────────────────────────── */

function SidebarSection({
  label,
  basePath,
  items,
  pathname,
  isOpen,
  onToggle,
}: {
  label: string;
  basePath: string;
  items: string[];
  pathname: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="space-y-0.5">
      <div
        className={cn(
          "flex items-center justify-between w-full px-3 py-2 text-[11px] font-bold uppercase tracking-widest",
          "text-placeholder hover:text-muted-foreground transition-colors",
        )}
      >
        <Link
          href={basePath}
          className={cn(
            "flex-1 no-underline cursor-pointer transition-colors",
            pathname === basePath || pathname.startsWith(basePath + "/")
              ? "text-foreground"
              : "text-placeholder hover:text-muted-foreground",
          )}
        >
          {label}
        </Link>
        <button
          onClick={onToggle}
          className="cursor-pointer p-0.5 text-placeholder hover:text-muted-foreground transition-colors"
          aria-label={isOpen ? "Collapse section" : "Expand section"}
        >
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-200",
              isOpen && "rotate-180",
            )}
          />
        </button>
      </div>
      {isOpen && (
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
                      ? "border-primary bg-primary-muted text-primary-muted-foreground font-semibold"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent",
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

  // Determine which section should be open based on the current path
  const getActiveSection = React.useCallback(() => {
    for (const group of componentRegistry) {
      // Match both category page (/docs/atoms) and individual items (/docs/atoms/button)
      if (
        pathname === group.basePath ||
        pathname.startsWith(group.basePath + "/")
      ) {
        return group.label;
      }
    }
    return null;
  }, [pathname]);

  const [openSection, setOpenSection] = React.useState<string | null>(
    () => getActiveSection() ?? componentRegistry[0]?.label ?? null,
  );

  // Sync when navigating to a different section
  React.useEffect(() => {
    const active = getActiveSection();
    if (active) {
      setOpenSection(active);
    }
  }, [getActiveSection]);

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
            isOpen={openSection === group.label}
            onToggle={() =>
              setOpenSection((prev) =>
                prev === group.label ? null : group.label,
              )
            }
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
            <ThemeToggle />
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
        <div className="hidden lg:block w-56 shrink-0">
          <Sidebar
            variant="default"
            className="fixed top-[57px] left-0 w-56 h-[calc(100vh-57px)] border-r border-border overflow-y-auto"
          >
            <SidebarHeader className="h-12">
              <span className="text-xs font-bold tracking-widest uppercase text-placeholder">
                Docs
              </span>
            </SidebarHeader>
            <SidebarContent>
              <DocsSidebarContent />
            </SidebarContent>
          </Sidebar>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-muted/50">
          <div className="max-w-4xl mx-auto py-10 px-6 md:px-10">
            {children}
          </div>

          {/* Docs Footer (compact) */}
          <Footer variant="compact" containerClassName="max-w-4xl mx-auto">
            <FooterBottom className="mt-0 pt-0 border-t-0">
              <span className="text-xs text-placeholder">
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
