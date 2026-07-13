"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Github, Search } from "lucide-react";

import { Button, Logo } from "poyraz-ui/atoms";
import {
  CommandPalette,
  CommandPaletteContent,
  CommandPaletteEmpty,
  CommandPaletteFooter,
  CommandPaletteGroup,
  CommandPaletteInput,
  CommandPaletteItem,
  CommandPaletteList,
  CommandPaletteSeparator,
} from "poyraz-ui/molecules";
import {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarLink,
  NavbarLinks,
  NavbarMain,
  NavbarMobileLink,
  NavbarMobileMenu,
  NavbarMobileToggle,
  NavbarSearch,
} from "poyraz-ui/organisms";

import { mainNav, mobileNav, socialLinks } from "@/lib/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const searchItems = [
  {
    title: "Button",
    href: "/docs/atoms/button",
    group: "Atoms",
    description: "Variants, sizes and hover effects",
  },
  {
    title: "Card",
    href: "/docs/atoms/card",
    group: "Atoms",
    description: "Soft, glass and content surfaces",
  },
  {
    title: "Checkbox",
    href: "/docs/atoms/checkbox",
    group: "Atoms",
    description: "Accessible boolean controls",
  },
  {
    title: "Form Fields",
    href: "/docs/atoms/form-fields",
    group: "Atoms",
    description: "Masked, phone and URL inputs",
  },
  {
    title: "Input",
    href: "/docs/atoms/input",
    group: "Atoms",
    description: "Composable field primitives",
  },
  { title: "Logo", href: "/docs/atoms/logo", group: "Atoms", description: "Brand mark variants" },
  {
    title: "Typography",
    href: "/docs/atoms/typography",
    group: "Atoms",
    description: "Text scales and emphasis effects",
  },
  {
    title: "Alert",
    href: "/docs/molecules/alert",
    group: "Molecules",
    description: "Semantic feedback banners",
  },
  {
    title: "Autocomplete",
    href: "/docs/molecules/autocomplete",
    group: "Molecules",
    description: "Searchable combobox patterns",
  },
  {
    title: "Command Palette",
    href: "/docs/molecules/command-palette",
    group: "Molecules",
    description: "Global search and action overlay",
  },
  {
    title: "Dropdown Menu",
    href: "/docs/molecules/dropdown-menu",
    group: "Molecules",
    description: "Click and hover menu variants",
  },
  {
    title: "Pagination",
    href: "/docs/molecules/pagination",
    group: "Molecules",
    description: "Page navigation controls",
  },
  {
    title: "Select",
    href: "/docs/molecules/select",
    group: "Molecules",
    description: "Styled select menus",
  },
  {
    title: "Sonner",
    href: "/docs/molecules/sonner",
    group: "Molecules",
    description: "Toast notifications",
  },
  {
    title: "Tabs",
    href: "/docs/molecules/tabs",
    group: "Molecules",
    description: "Animated tab navigation",
  },
  {
    title: "Navbar",
    href: "/docs/organisms/navbar",
    group: "Organisms",
    description: "Responsive navigation systems",
  },
  {
    title: "Data Table",
    href: "/docs/organisms/data-table",
    group: "Organisms",
    description: "Interactive table patterns",
  },
  {
    title: "Blocks",
    href: "/docs/blocks",
    group: "Templates",
    description: "Copy-ready UI sections",
  },
] as const;

function GlobalSearchPalette({
  onOpenChange,
  open,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredItems = searchItems.filter((item) => {
    if (!normalizedQuery) return true;
    return [item.title, item.group, item.description]
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery);
  });
  const groupedItems = filteredItems.reduce<Record<string, (typeof searchItems)[number][]>>(
    (groups, item) => {
      groups[item.group] ??= [];
      groups[item.group].push(item);
      return groups;
    },
    {},
  );

  const closeAndNavigate = (href: string) => {
    onOpenChange(false);
    router.push(href);
  };

  return (
    <CommandPalette
      open={open}
      onOpenChange={(nextOpen) => {
        onOpenChange(nextOpen);
        if (!nextOpen) setQuery("");
      }}
    >
      <CommandPaletteContent surface="glass" radius="xl" overlayTone="glass">
        <CommandPaletteInput
          autoFocus
          placeholder="Search components, docs, blocks..."
          onValueChange={setQuery}
        />
        <CommandPaletteList>
          {filteredItems.length === 0 ? (
            <CommandPaletteEmpty>No results found.</CommandPaletteEmpty>
          ) : (
            Object.entries(groupedItems).map(([group, items], groupIndex) => (
              <div key={group}>
                {groupIndex > 0 && <CommandPaletteSeparator />}
                <CommandPaletteGroup heading={group}>
                  {items.map((item) => (
                    <CommandPaletteItem
                      key={item.href}
                      icon={<Search className="size-4" />}
                      description={item.description}
                      shortcut="↵"
                      onClick={() => closeAndNavigate(item.href)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") closeAndNavigate(item.href);
                      }}
                    >
                      {item.title}
                    </CommandPaletteItem>
                  ))}
                </CommandPaletteGroup>
              </div>
            ))
          )}
        </CommandPaletteList>
        <CommandPaletteFooter>
          <span>Type to search</span>
          <span>Enter to open</span>
          <span>Esc to close</span>
        </CommandPaletteFooter>
      </CommandPaletteContent>
    </CommandPalette>
  );
}

export function SiteNavbar({ hero = false }: { hero?: boolean }) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const transparent = hero && !isScrolled;

  React.useEffect(() => {
    if (!hero) return;
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, [hero]);

  React.useEffect(() => {
    const openSearchFromShortcut = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTypingTarget =
        target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.isContentEditable;

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsSearchOpen(true);
        return;
      }

      if (!isTypingTarget && event.key === "/") {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener("keydown", openSearchFromShortcut);
    return () => window.removeEventListener("keydown", openSearchFromShortcut);
  }, []);

  return (
    <>
      <GlobalSearchPalette open={isSearchOpen} onOpenChange={setIsSearchOpen} />

      <Navbar
        variant={transparent ? "transparent" : hero ? "glass" : "minimal"}
        sticky={!hero}
        containerClassName={hero ? undefined : "mx-auto max-w-[1440px] px-5 lg:px-8"}
        className={
          hero
            ? "fixed left-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300"
            : "border-b border-border/80 bg-background/90 backdrop-blur-lg"
        }
      >
        <NavbarMain className={transparent ? "border-white/10" : undefined}>
          <NavbarBrand href="/">
            <Logo width={hero ? 32 : 30} height={hero ? 32 : 30} />
          </NavbarBrand>

          <NavbarLinks className="mr-auto">
            {mainNav.map((item) => (
              <NavbarLink
                key={item.href}
                href={item.href}
                className={
                  transparent
                    ? "text-white/85 hover:bg-white/10 hover:text-white focus-visible:ring-white/70"
                    : undefined
                }
                {...(item.external ? { target: "_blank" } : {})}
              >
                {item.label}
              </NavbarLink>
            ))}
          </NavbarLinks>

          <NavbarActions>
            <NavbarSearch
              placeholder="Search docs..."
              aria-label="Search documentation"
              aria-haspopup="dialog"
              aria-expanded={isSearchOpen}
              readOnly
              wrapperClassName="hidden xl:flex"
              className={
                transparent
                  ? "border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:ring-white/35"
                  : undefined
              }
              onClick={() => setIsSearchOpen(true)}
              onFocus={() => setIsSearchOpen(true)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setIsSearchOpen(true);
                }
              }}
            />
            <ThemeToggle
              className={
                transparent ? "border-white/20 bg-white/10 text-white backdrop-blur-md" : undefined
              }
              buttonClassName={
                transparent
                  ? "text-white/70 hover:bg-white/10 hover:text-white focus-visible:ring-white/70"
                  : undefined
              }
              activeClassName={transparent ? "bg-white/20 text-white" : undefined}
            />
            <Link href={socialLinks.website} target="_blank">
              <Button
                size="sm"
                effect="swap"
                variant={transparent ? "outline" : "default"}
                className={
                  transparent
                    ? "border-white/30 bg-white/10 text-white backdrop-blur-md hover:border-white/60 hover:bg-white/15"
                    : undefined
                }
              >
                Return Back
              </Button>
            </Link>
            {!hero && (
              <Button asChild size="icon" variant="ghost">
                <Link href={socialLinks.repo} target="_blank" aria-label="GitHub repository">
                  <Github className="size-4" />
                </Link>
              </Button>
            )}
          </NavbarActions>

          <NavbarMobileToggle
            className={
              transparent
                ? "border-white/25 text-white hover:border-white/50 hover:bg-white/10"
                : undefined
            }
          />
        </NavbarMain>

        <NavbarMobileMenu>
          {mobileNav.map((item) => (
            <NavbarMobileLink key={item.href} href={item.href}>
              {item.label}
            </NavbarMobileLink>
          ))}
        </NavbarMobileMenu>
      </Navbar>
    </>
  );
}
