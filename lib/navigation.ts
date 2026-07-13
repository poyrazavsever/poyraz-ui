/* ─── Centralized Navigation Config ──────────────────────────────────
 *  Single source of truth for all navigation links across the app.
 *  Used by Navbar, Sidebar, and Footer organisms.
 *
 *  Usage:
 *    import { mainNav, footerNav } from "@/lib/navigation";
 * ─────────────────────────────────────────────────────────────────── */

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

/* ── Main Navigation (Navbar) ─────────────────────────────────────── */

export const mainNav: NavItem[] = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs/atoms" },
  {
    label: "GitHub",
    href: "https://github.com/poyrazavsever/poyraz-ui",
    external: true,
  },
];

/* ── Mobile Navigation ────────────────────────────────────────────── */

export const mobileNav: NavItem[] = [
  { label: "Documentation", href: "/docs" },
  { label: "Components", href: "/docs/atoms" },
  { label: "Return Back", href: "https://poyrazavsever.com", external: true },
];

/* ── Component Registry (Sidebar) ─────────────────────────────────── */

/* ── Footer Navigation ────────────────────────────────────────────── */

export const footerNav: FooterSection[] = [
  {
    heading: "Documentation",
    links: [
      { label: "Getting Started", href: "/docs" },
      { label: "Installation", href: "/docs/installation" },
      { label: "Theme", href: "/docs/theme" },
      { label: "Components", href: "/docs/atoms" },
    ],
  },
  {
    heading: "Links",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/poyrazavsever/poyraz-ui",
        external: true,
      },
      {
        label: "npm",
        href: "https://npmjs.com/package/poyraz-ui",
        external: true,
      },
    ],
  },
];

/* ── Social Links ─────────────────────────────────────────────────── */

export const socialLinks = {
  github: "https://github.com/poyrazavsever",
  repo: "https://github.com/poyrazavsever/poyraz-ui",
  website: "https://poyrazavsever.com",
};

/* ── Helpers ──────────────────────────────────────────────────────── */

/** Convert a component name to a URL-safe slug: "Radio Group" → "radio-group" */
export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}
