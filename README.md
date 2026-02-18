# Poyraz UI

<div align="center">
  <img src="public/logo/logo.png" alt="Poyraz UI" width="80" height="80">

**Brutalist UI component library for React**

No rounding. No shadows. Dashed borders. Bold, functional design.

[![npm](https://img.shields.io/npm/v/poyraz-ui)](https://www.npmjs.com/package/poyraz-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC)](https://tailwindcss.com/)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Architecture](#architecture)
- [Components](#components)
  - [Atoms](#atoms)
  - [Molecules](#molecules)
  - [Organisms](#organisms)
- [Navigation Config Pattern](#navigation-config-pattern)
- [Theming and Design Tokens](#theming-and-design-tokens)
- [Development](#development)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Browser Support](#browser-support)
- [License](#license)

---

## Overview

Poyraz UI is an open-source component library built around a **brutalist design language**: dashed borders, zero border-radius, zero box-shadow, monospaced accents, and a red-600 primary palette. Every component is built on top of Radix UI primitives for accessibility, styled with Tailwind CSS v4, and managed with `class-variance-authority` for variant control.

The library follows **Atomic Design** methodology, organizing 43+ components into three tiers:

| Tier      | Count | Purpose                         |
| --------- | ----- | ------------------------------- |
| Atoms     | 17    | Primitive building blocks       |
| Molecules | 21    | Composed groups of atoms        |
| Organisms | 5     | Complex, page-level UI sections |

All components are fully typed with TypeScript, tree-shakeable, and published as both ESM and CJS bundles.

---

## Installation

```bash
# pnpm (recommended)
pnpm add poyraz-ui

# npm
npm install poyraz-ui

# yarn
yarn add poyraz-ui
```

### Peer Dependencies

Poyraz UI requires the following peer dependencies:

```json
{
  "react": ">=18",
  "react-dom": ">=18",
  "tailwindcss": ">=4"
}
```

`next` (>=14) is an optional peer dependency -- only required if you use the `Logo` or `NavbarBrand` components that depend on `next/link` and `next/image`.

### CSS Setup

Import the preset stylesheet in your root layout or global CSS file:

```css
@import "poyraz-ui/preset.css";
```

This provides the base design tokens (colors, fonts, spacing) and the brutalist defaults (no rounding, dashed borders, no shadows).

---

## Quick Start

```tsx
import { Button, Badge, Input } from "poyraz-ui/atoms";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "poyraz-ui/molecules";
import {
  Navbar,
  NavbarMain,
  NavbarBrand,
  NavbarLinks,
  NavbarLink,
} from "poyraz-ui/organisms";

function App() {
  return (
    <>
      <Navbar sticky>
        <NavbarMain>
          <NavbarBrand href="/">My App</NavbarBrand>
          <NavbarLinks>
            <NavbarLink href="/docs">Docs</NavbarLink>
            <NavbarLink href="/components">Components</NavbarLink>
          </NavbarLinks>
        </NavbarMain>
      </Navbar>

      <main className="p-8 space-y-4">
        <Badge variant="outline">v0.1.0</Badge>
        <Input placeholder="Search components..." />

        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Hello from Poyraz UI</DialogTitle>
            <p>Brutalist design, accessible by default.</p>
          </DialogContent>
        </Dialog>
      </main>
    </>
  );
}
```

---

## Architecture

### Import Paths

The library exposes four entry points to enable tree-shaking at the tier level:

```ts
// Everything
import { Button, Dialog, Navbar } from "poyraz-ui";

// Tier-specific (recommended for smaller bundles)
import { Button, Badge, Input } from "poyraz-ui/atoms";
import { Dialog, Tabs, Select } from "poyraz-ui/molecules";
import { Navbar, Footer, Sidebar } from "poyraz-ui/organisms";
```

### Build Output

The library is built with `tsup` and outputs:

- **ESM** (`dist/*.js`) -- for modern bundlers
- **CJS** (`dist/*.cjs`) -- for Node.js / legacy tooling
- **Type declarations** (`dist/*.d.ts`) -- full TypeScript support

Tree-shaking and code-splitting are enabled by default.

### Design Principles

1. **Brutalist Aesthetic** -- `rounded-none shadow-none border-2 border-dashed` on every component
2. **Accessibility First** -- Radix UI primitives provide WCAG-compliant keyboard navigation, focus management, and ARIA attributes out of the box
3. **Variant-Driven** -- `class-variance-authority` (cva) manages every visual variant, making customization predictable
4. **Composition over Configuration** -- Components are small, composable pieces. A `Navbar` is assembled from `NavbarMain`, `NavbarBrand`, `NavbarLinks`, etc.

---

## Components

### Atoms

Fundamental building blocks -- single-responsibility UI elements.

| Component       | Description                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Button**      | Primary, outline, ghost, link variants. Multiple sizes.                                                          |
| **Input**       | Text input with dashed-border brutalist styling.                                                                 |
| **Textarea**    | Multi-line text input.                                                                                           |
| **Checkbox**    | Radix-based checkbox with indicator.                                                                             |
| **Radio Group** | Radix-based radio buttons.                                                                                       |
| **Switch**      | Toggle switch component.                                                                                         |
| **Badge**       | Inline label with default, outline, destructive variants.                                                        |
| **Avatar**      | Image + fallback avatar component.                                                                               |
| **Card**        | Container with header, content, footer sections.                                                                 |
| **Typography**  | Semantic heading and body text component (h1-h4, p, lead, blockquote, code, list).                               |
| **Label**       | Form label with required indicator support.                                                                      |
| **Separator**   | Horizontal or vertical divider.                                                                                  |
| **Skeleton**    | Loading placeholder with pulse animation.                                                                        |
| **Scroll Area** | Custom scrollbar viewport.                                                                                       |
| **Form Fields** | Specialized inputs: NumberInput, SearchInput, PhoneInput, PasswordInput, UrlInput.                               |
| **Logo**        | Brand logo component using next/image.                                                                           |
| **BG Patterns** | SVG background patterns: dots, grid, lines, diagonal, cross, checkerboard, diamond, zigzag, dashed grid, radial. |

**Example:**

```tsx
import { Button } from "poyraz-ui/atoms";

<Button variant="outline" size="lg">
  View Documentation
</Button>;
```

### Molecules

Composed groups of atoms that form discrete UI patterns.

| Component           | Description                                           |
| ------------------- | ----------------------------------------------------- |
| **Accordion**       | Collapsible content sections.                         |
| **Alert**           | Contextual feedback messages.                         |
| **Autocomplete**    | Searchable input with filtered dropdown suggestions.  |
| **Breadcrumb**      | Navigation trail with separator support.              |
| **Calendar**        | Month/year grid calendar with navigation.             |
| **Command Palette** | Searchable command menu (Cmd+K pattern).              |
| **Date Picker**     | Calendar-based date selection with popover.           |
| **Dialog**          | Modal dialog with overlay.                            |
| **Drawer**          | Slide-in panel from screen edge (vaul-based).         |
| **Dropdown Menu**   | Context / action menu with keyboard navigation.       |
| **Form**            | react-hook-form integration with validation messages. |
| **Hover Card**      | Popover card that appears on hover.                   |
| **Mermaid**         | Render Mermaid diagrams inline.                       |
| **Modal**           | Centered/drawer modal with size variants.             |
| **Pagination**      | Page navigation with previous/next and ellipsis.      |
| **Popover**         | Floating content anchored to a trigger.               |
| **Select**          | Radix-based dropdown select with groups.              |
| **Sheet**           | Slide-in side panel (top, right, bottom, left).       |
| **Sonner**          | Toast notification system.                            |
| **Tabs**            | Tabbed content with keyboard support.                 |
| **Tooltip**         | Small informational popover on hover/focus.           |

**Example:**

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "poyraz-ui/molecules";

<Tabs defaultValue="preview">
  <TabsList>
    <TabsTrigger value="preview">Preview</TabsTrigger>
    <TabsTrigger value="code">Code</TabsTrigger>
  </TabsList>
  <TabsContent value="preview">...</TabsContent>
  <TabsContent value="code">...</TabsContent>
</Tabs>;
```

### Organisms

Complex, page-level sections composed of multiple atoms and molecules.

| Component            | Variants                                             | Description                                                                                              |
| -------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Navbar**           | default, minimal, transparent, bordered              | Responsive navigation bar with brand, links, search, mega menu, mobile slide-in panel, sticky auto-hide. |
| **Sidebar**          | default, collapsible, floating, mini, dark, bordered | Vertical navigation with search, sub-menus, user profile, collapsible groups.                            |
| **Footer**           | full, compact, branded, centered, dark               | Page footer with grid sections, newsletter, social links, bottom bar.                                    |
| **Announcement Bar** | default + custom variants                            | Dismissible top-of-page notification bar.                                                                |
| **Data Table**       | --                                                   | Sortable, filterable table with column definitions.                                                      |

**Example:**

```tsx
import {
  Navbar,
  NavbarMain,
  NavbarBrand,
  NavbarLinks,
  NavbarLink,
  NavbarActions,
  NavbarMobileToggle,
  NavbarMobileMenu,
  NavbarMobileLink,
} from "poyraz-ui/organisms";
import { Button } from "poyraz-ui/atoms";

<Navbar variant="bordered" sticky>
  <NavbarMain>
    <NavbarBrand href="/">
      <img src="/logo.png" alt="Logo" width={28} height={28} />
    </NavbarBrand>
    <NavbarLinks>
      <NavbarLink href="/docs">Docs</NavbarLink>
      <NavbarLink href="/components">Components</NavbarLink>
    </NavbarLinks>
    <NavbarActions>
      <Button size="sm">Get Started</Button>
    </NavbarActions>
    <NavbarMobileToggle />
  </NavbarMain>
  <NavbarMobileMenu>
    <NavbarMobileLink href="/docs">Docs</NavbarMobileLink>
    <NavbarMobileLink href="/components">Components</NavbarMobileLink>
  </NavbarMobileMenu>
</Navbar>;
```

---

## Navigation Config Pattern

Poyraz UI encourages a **centralized navigation config** so Navbar, Sidebar, and Footer all read from a single source of truth. Create a `lib/navigation.ts` file:

```ts
// lib/navigation.ts

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

// Top-level navbar links
export const mainNav: NavItem[] = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs/atoms" },
  { label: "GitHub", href: "https://github.com/...", external: true },
];

// Footer grouped sections
export const footerNav: FooterSection[] = [
  {
    heading: "Documentation",
    links: [
      { label: "Getting Started", href: "/docs" },
      { label: "Installation", href: "/docs/installation" },
    ],
  },
  {
    heading: "Links",
    links: [
      { label: "GitHub", href: "https://github.com/...", external: true },
      { label: "npm", href: "https://npmjs.com/package/...", external: true },
    ],
  },
];

// Sidebar component registry
export const componentRegistry: ComponentGroup[] = [
  {
    label: "Atoms",
    basePath: "/docs/atoms",
    items: ["Button", "Input", "Badge", "Card"],
  },
  {
    label: "Molecules",
    basePath: "/docs/molecules",
    items: ["Dialog", "Tabs", "Select"],
  },
];

// Reusable external URLs
export const socialLinks = {
  github: "https://github.com/yourname",
  repo: "https://github.com/yourname/your-repo",
  website: "https://yoursite.com",
};

// Helper
export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}
```

Then consume it in your pages:

```tsx
import { mainNav, footerNav } from "@/lib/navigation";

// Navbar
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
</NavbarLinks>

// Footer
<FooterGrid>
  {footerNav.map((section) => (
    <FooterSection key={section.heading}>
      <FooterHeading>{section.heading}</FooterHeading>
      {section.links.map((link) => (
        <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
      ))}
    </FooterSection>
  ))}
</FooterGrid>
```

This pattern keeps navigation DRY across Navbar, Sidebar, Footer, and mobile menus.

---

## Theming and Design Tokens

Poyraz UI uses Tailwind CSS v4 with `@theme` tokens. The brutalist defaults are:

```css
/* Core design language */
border-radius: 0; /* rounded-none on all components */
box-shadow: none; /* shadow-none everywhere */
border: 2px dashed; /* border-2 border-dashed */

/* Primary palette */
--color-primary: #dc2626; /* red-600 */
--color-background: #ffffff;
--color-foreground: #0f172a; /* slate-950 */

/* Typography */
--font-primary: system-ui, sans-serif;
--font-secondary: serif; /* Used for accent headings */
--font-mono: monospace; /* Code blocks */
```

To customize, override Tailwind theme tokens in your own CSS or `tailwind.config`:

```css
@theme {
  --color-primary: #2563eb; /* Switch to blue-600 */
}
```

---

## Development

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Setup

```bash
git clone https://github.com/poyrazavsever/poyraz-ui.git
cd poyraz-ui
pnpm install
```

### Scripts

| Command          | Description                                      |
| ---------------- | ------------------------------------------------ |
| `pnpm dev`       | Start Next.js dev server (documentation site)    |
| `pnpm build`     | Build the documentation site for production      |
| `pnpm build:lib` | Build the npm package (ESM + CJS + DTS via tsup) |
| `pnpm start`     | Serve the production build locally               |

### Adding a New Component

1. Create the component in `components/ui/atoms/`, `molecules/`, or `organisms/`
2. Export it from the corresponding barrel file in `src/atoms/index.ts`, `src/molecules/index.ts`, or `src/organisms/index.ts`
3. Create a documentation page in `app/docs/<tier>/<component-name>/page.tsx`
4. Add the component name to `lib/navigation.ts` in the `componentRegistry` array
5. Run `pnpm build:lib` to verify the build passes

---

## Project Structure

```
poyraz-ui/
  app/                        # Next.js documentation site
    page.tsx                  # Homepage
    docs/
      layout.tsx              # Docs layout (navbar + sidebar + footer)
      page.tsx                # Introduction page
      installation/           # Installation guide
      atoms/                  # Atom component doc pages
      molecules/              # Molecule component doc pages
      organisms/              # Organism component doc pages
  components/
    ui/
      atoms/                  # 17 atom components
      molecules/              # 21 molecule components
      organisms/              # 5 organism components
    docs/
      code-block.tsx          # Documentation page helpers
  lib/
    navigation.ts             # Centralized navigation config
  src/
    index.ts                  # Main package entry point
    utils.ts                  # cn() utility (clsx + tailwind-merge)
    preset.css                # Base design tokens and brutalist defaults
    atoms/index.ts            # Atom barrel exports
    molecules/index.ts        # Molecule barrel exports
    organisms/index.ts        # Organism barrel exports
  dist/                       # Built package output (ESM + CJS + DTS)
  tsup.config.ts              # Library build configuration
  tsconfig.lib.json           # TypeScript config for library build
```

---

## Tech Stack

| Technology                   | Purpose                                        |
| ---------------------------- | ---------------------------------------------- |
| **Next.js 16**               | Documentation site framework (App Router)      |
| **React 19**                 | UI rendering                                   |
| **TypeScript 5**             | Type safety across all components              |
| **Tailwind CSS 4**           | Utility-first styling with `@theme` tokens     |
| **Radix UI**                 | Accessible, unstyled primitives (12+ packages) |
| **class-variance-authority** | Type-safe component variant management         |
| **tailwind-merge**           | Intelligent Tailwind class merging             |
| **Lucide React**             | Icon library                                   |
| **Vaul**                     | Drawer component primitive                     |
| **Sonner**                   | Toast notification system                      |
| **Mermaid**                  | Diagram rendering                              |
| **tsup**                     | Library bundler (ESM + CJS + DTS)              |

---

## Browser Support

| Browser | Minimum Version |
| ------- | --------------- |
| Chrome  | 90+             |
| Firefox | 88+             |
| Safari  | 14+             |
| Edge    | 90+             |

---

## License

MIT License -- see [LICENSE](LICENSE) for details.

---

## Author

**Poyraz Avsever**

- Website: [poyrazavsever.com](https://poyrazavsever.com)
- GitHub: [github.com/poyrazavsever](https://github.com/poyrazavsever)
- LinkedIn: [linkedin.com/in/poyrazavsever](https://linkedin.com/in/poyrazavsever)
