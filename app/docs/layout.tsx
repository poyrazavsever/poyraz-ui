"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Github, Sparkles } from "lucide-react";

import { cn } from "poyraz-ui";
import { Button, Logo } from "poyraz-ui/atoms";
import {
  Footer,
  FooterBottom,
  FooterSocialLink,
  FooterSocials,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarLink,
  NavbarLinks,
  NavbarMain,
  NavbarMobileLink,
  NavbarMobileMenu,
  NavbarMobileToggle,
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "poyraz-ui/organisms";

import docsCatalog from "@/src/docs-registry.json";
import { socialLinks } from "@/lib/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { PreviewProvider } from "@/components/docs/preview-context";

type DocsLink = { title: string; href: string };

const primarySections = [
  {
    label: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Troubleshooting", href: "/docs/troubleshooting" },
    ],
  },
  {
    label: "Theme",
    items: [
      { title: "Theme and tokens", href: "/docs/theme" },
      { title: "Motion", href: "/docs/motion" },
    ],
  },
] as const;

const migrationLinks = [
  { title: "V2 to V3", href: "/docs/migration" },
  { title: "V2 legacy docs", href: "/docs/legacy/v2" },
] as const;

function DocsLinkList({ items, pathname }: { items: readonly DocsLink[]; pathname: string }) {
  return (
    <ul className="space-y-0.5">
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <li key={`${item.href}-${item.title}`}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "block rounded-sm px-3 py-1.5 text-[13px] no-underline transition-colors",
                active
                  ? "bg-primary-muted font-semibold text-primary-muted-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function DocsNavSection({
  label,
  items,
  pathname,
  defaultOpen = false,
}: {
  label: string;
  items: readonly DocsLink[];
  pathname: string;
  defaultOpen?: boolean;
}) {
  const containsActive = items.some(({ href }) => pathname === href || pathname.startsWith(`${href}/`));
  const [open, setOpen] = React.useState(defaultOpen || containsActive);

  React.useEffect(() => {
    if (containsActive) setOpen(true);
  }, [containsActive]);

  return (
    <section className="space-y-1.5">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-sm px-3 py-1.5 text-[10px] font-bold uppercase text-placeholder transition-colors hover:text-foreground"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{label}</span>
        <ChevronDown className={cn("size-3 transition-transform", open && "rotate-180")} />
      </button>
      {open && <DocsLinkList items={items} pathname={pathname} />}
    </section>
  );
}

function DocsSidebarNavigation() {
  const pathname = usePathname();
  const componentLinks = docsCatalog.navigation.flatMap((group) => group.items);

  return (
    <nav aria-label="Documentation" className="space-y-4">
      {primarySections.map((section) => (
        <DocsNavSection
          key={section.label}
          label={section.label}
          items={section.items}
          pathname={pathname}
          defaultOpen
        />
      ))}

      <DocsNavSection label="Components" items={componentLinks} pathname={pathname} />
      <DocsNavSection
        label={`Blocks (${docsCatalog.counts.blocks})`}
        items={[{ title: "Block catalog", href: "/docs/blocks" }, ...docsCatalog.blocks]}
        pathname={pathname}
      />
      <DocsNavSection label="Migration" items={migrationLinks} pathname={pathname} defaultOpen />
    </nav>
  );
}

const mobileLinks = [
  { title: "Getting started", href: "/docs" },
  { title: "Theme", href: "/docs/theme" },
  { title: "Components", href: "/docs/atoms" },
  { title: "Blocks", href: "/docs/blocks" },
  { title: "Migration", href: "/docs/migration" },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="minimal" sticky className="border-b border-border/80 bg-background/90 backdrop-blur-lg">
        <NavbarMain className="mx-auto max-w-[1440px] px-5 lg:px-8">
          <NavbarBrand href="/">
            <Logo width={30} height={30} />
          </NavbarBrand>
          <NavbarLinks>
            <NavbarLink href="/docs">Docs</NavbarLink>
            <NavbarLink href="/docs/atoms">Components</NavbarLink>
            <NavbarLink href="/docs/blocks">Blocks</NavbarLink>
          </NavbarLinks>
          <NavbarActions>
            <ThemeToggle />
            <Button asChild size="icon" variant="ghost">
              <Link href={socialLinks.repo} target="_blank" aria-label="GitHub repository">
                <Github className="size-4" />
              </Link>
            </Button>
          </NavbarActions>
          <NavbarMobileToggle />
        </NavbarMain>
        <NavbarMobileMenu>
          {mobileLinks.map((item) => (
            <NavbarMobileLink key={item.href} href={item.href}>{item.title}</NavbarMobileLink>
          ))}
        </NavbarMobileMenu>
      </Navbar>

      <PreviewProvider>
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-0 px-5 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-10 lg:px-8 xl:gap-14">
        <aside className="hidden lg:block">
          <div className="sticky top-[73px] h-[calc(100dvh-89px)] py-4">
            <Sidebar variant="default" className="h-full w-full rounded-lg border border-border bg-surface/95">
              <SidebarHeader className="h-auto border-b border-border px-5 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-foreground">Poyraz UI</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">V3 registry docs</p>
                  </div>
                  <Sparkles className="size-4 text-primary" aria-hidden="true" />
                </div>
              </SidebarHeader>
              <SidebarContent scrollMode="fade" className="px-3">
                <DocsSidebarNavigation />
              </SidebarContent>
            </Sidebar>
          </div>
        </aside>

        <main className="min-w-0">
          <div className="mx-auto min-h-[calc(100dvh-57px)] w-full max-w-[68rem] px-0 py-10 md:py-14">
            {children}
          </div>
          <Footer variant="compact" containerClassName="max-w-[68rem] px-0">
            <FooterBottom className="mt-0 border-t border-border py-6">
              <span className="text-xs text-placeholder">&copy; {new Date().getFullYear()} Poyraz Avsever. MIT License.</span>
              <FooterSocials>
                <FooterSocialLink href={socialLinks.github} aria-label="GitHub" className="size-7">
                  <Github className="size-3" />
                </FooterSocialLink>
              </FooterSocials>
            </FooterBottom>
          </Footer>
        </main>
      </div>
      </PreviewProvider>
    </div>
  );
}
