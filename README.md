# Poyraz UI

<div align="center">
  <img src="https://raw.githubusercontent.com/poyrazavsever/poyraz-ui/refs/heads/master/public/logo/logo.jpeg" alt="Poyraz UI" width="80" height="80">

**Compact, minimal UI component library for React**

Clean borders · No shadows · Subtle rounding · Dual font system · Atomic Design · Dark mode

[![npm version](https://img.shields.io/npm/v/poyraz-ui?color=dc2626&label=npm)](https://www.npmjs.com/package/poyraz-ui)
[![npm downloads](https://img.shields.io/npm/dm/poyraz-ui?color=dc2626)](https://www.npmjs.com/package/poyraz-ui)
[![bundle size](https://img.shields.io/bundlephobia/minzip/poyraz-ui?color=dc2626)](https://bundlephobia.com/package/poyraz-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC)](https://tailwindcss.com/)

[Documentation](https://ui.poyrazavsever.com) · [npm](https://www.npmjs.com/package/poyraz-ui) · [GitHub](https://github.com/poyrazavsever/poyraz-ui)

</div>

---

## Highlights

- **50+ Components** — 17 atoms, 21 molecules, 5 organisms
- **Semantic Token System** — 40+ CSS custom properties (`var(--poyraz-*)`) with sensible fallbacks
- **Dark Mode Ready** — All components respond to theme changes via CSS variables
- **Theming Support** — Optional `reactive-switcher` integration with pre-built light/dark themes
- **CLI Setup Wizard** — `npx poyraz-ui init` scaffolds CSS imports and theme configuration
- **Compact by Design** — Max heading 32px, tight spacing, small footprint
- **Dual Font System** — Inter (primary) + Agbalumo (decorative)
- **Accessible** — Built on Radix UI primitives with full keyboard & screen reader support
- **Tree-Shakeable** — 5 entry points: `poyraz-ui`, `/atoms`, `/molecules`, `/organisms`, `/themes`
- **Fully Typed** — TypeScript declarations for every component and prop
- **7 Card Templates** — Article, Image, News, Stats, Testimonial, Pricing, Product
- **4 Page Templates** — Hero, Pricing, Dashboard, Auth — ready to copy & customize
- **ESM + CJS** — Works in every bundler and environment

---

## Installation

```bash
pnpm add poyraz-ui        # recommended
npm install poyraz-ui     # or npm
yarn add poyraz-ui        # or yarn
```

### Peer Dependencies

```json
{
  "react": ">=18",
  "react-dom": ">=18",
  "tailwindcss": ">=4"
}
```

> `next` (>=14) is optional — only required for `Logo` and `NavbarBrand` components.  
> `reactive-switcher` (>=1) is optional — only needed for dynamic theme switching.

### CSS Setup

Import the preset in your root layout or global CSS:

```css
@import "poyraz-ui/preset.css";
```

This loads the semantic token system (40+ CSS custom properties) and the minimal defaults.

### Quick Setup via CLI

```bash
npx poyraz-ui init
```

The interactive wizard will:

1. Add the CSS import to your `globals.css`
2. Optionally scaffold `reactive-switcher` theme configuration

---

## Quick Start

```tsx
import { Button, Badge, Input, Card, CardContent } from "poyraz-ui/atoms";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "poyraz-ui/molecules";

function App() {
  return (
    <main className="p-6 space-y-4">
      <Badge variant="outline">v1.1</Badge>
      <Input placeholder="Search components..." />

      <Card variant="interactive">
        <CardContent>
          <p>Hover me — I lift up slightly.</p>
        </CardContent>
      </Card>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Hello from Poyraz UI</DialogTitle>
          <p>Minimal design, accessible by default.</p>
        </DialogContent>
      </Dialog>
    </main>
  );
}
```

---

## Import Paths

```ts
// Everything (barrel)
import { Button, Dialog, Navbar } from "poyraz-ui";

// Tier-specific — recommended for smaller bundles
import { Button, Badge, Input } from "poyraz-ui/atoms";
import { Dialog, Tabs, PricingCard } from "poyraz-ui/molecules";
import { Navbar, Footer, Sidebar } from "poyraz-ui/organisms";

// Themes (for reactive-switcher integration)
import { poyrazLightTheme, poyrazDarkTheme } from "poyraz-ui/themes";

// Preset CSS
import "poyraz-ui/preset.css";
```

---

## Components

### Atoms (17)

Primitive building blocks — single-responsibility UI elements.

| Component       | Description                                                                                              |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Button**      | Primary, outline, ghost, link variants. Sizes: sm, default, lg.                                          |
| **Input**       | Clean minimal text input.                                                                                |
| **Textarea**    | Multi-line text input.                                                                                   |
| **Checkbox**    | Radix-based checkbox with check indicator.                                                               |
| **Radio Group** | Radix-based radio buttons.                                                                               |
| **Switch**      | Toggle switch.                                                                                           |
| **Badge**       | Inline label — default, outline, destructive, secondary.                                                 |
| **Avatar**      | Image + fallback avatar.                                                                                 |
| **Card**        | 6 variants: default, bordered, elevated, highlight, ghost, **interactive**.                              |
| **Typography**  | Semantic text: h1–h4, p, lead, blockquote, code, list.                                                   |
| **Label**       | Form label with required indicator.                                                                      |
| **Separator**   | Horizontal / vertical divider.                                                                           |
| **Skeleton**    | Loading placeholder with pulse.                                                                          |
| **Scroll Area** | Custom scrollbar viewport.                                                                               |
| **Form Fields** | NumberInput, SearchInput, PhoneInput, PasswordInput, UrlInput.                                           |
| **Logo**        | Brand logo with minimal hover opacity.                                                                   |
| **BG Patterns** | 10 SVG patterns: dots, grid, lines, diagonal, cross, checkerboard, diamond, zigzag, dashed grid, radial. |

### Molecules (28)

Composed groups of atoms forming discrete UI patterns.

| Component           | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| **Accordion**       | Collapsible content sections.                                 |
| **Alert**           | Contextual feedback messages (info, success, warning, error). |
| **Autocomplete**    | Searchable input with filtered dropdown.                      |
| **Breadcrumb**      | Navigation trail with separator support.                      |
| **Calendar**        | Month/year grid with navigation.                              |
| **Command Palette** | Searchable command menu (⌘K pattern).                         |
| **Date Picker**     | Calendar-based date selection in popover.                     |
| **Dialog**          | Modal dialog with overlay and close.                          |
| **Drawer**          | Slide-in panel from screen edge (vaul).                       |
| **Dropdown Menu**   | Context menu with keyboard navigation.                        |
| **Form**            | react-hook-form integration + validation.                     |
| **Hover Card**      | Popover card on hover.                                        |
| **Mermaid**         | Mermaid diagram renderer.                                     |
| **Modal**           | Centered/drawer modal — sm, md, lg sizes.                     |
| **Pagination**      | Page navigation with ellipsis.                                |
| **Popover**         | Floating content anchored to trigger.                         |
| **Select**          | Dropdown select with groups.                                  |
| **Sheet**           | Side panel (top, right, bottom, left).                        |
| **Sonner**          | Toast notification system.                                    |
| **Tabs**            | Tabbed content with keyboard support.                         |
| **Tooltip**         | Informational popover on hover/focus.                         |

**Card Templates** — 7 pre-built, composable card molecules:

| Template            | Use Case                                              |
| ------------------- | ----------------------------------------------------- |
| **ArticleCard**     | Blog posts, articles — image, category, author, date. |
| **ImageCard**       | Image-dominant card with gradient overlay text.       |
| **NewsCard**        | Compact horizontal news items for feed layouts.       |
| **StatsCard**       | Metric/KPI display with trend indicator (↑/↓).        |
| **TestimonialCard** | Customer quotes with avatar and star rating.          |
| **PricingCard**     | Pricing tier with features list and CTA button.       |
| **ProductCard**     | E-commerce product with price, rating, cart button.   |

### Organisms (5)

Complex, page-level sections built from atoms and molecules.

| Component            | Variants                                              | Description                                                                  |
| -------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Navbar**           | default, minimal, transparent, bordered               | Responsive nav with brand, links, mega menu, mobile panel, sticky auto-hide. |
| **Sidebar**          | default, collapsible, floating, mini, bordered, inset | Vertical nav with search, sub-menus, user profile, collapsible groups.       |
| **Footer**           | full, compact, branded, centered, minimal             | Footer with grid sections, newsletter, social links, bottom bar.             |
| **Announcement Bar** | default + custom                                      | Dismissible top-of-page notification.                                        |
| **Data Table**       | —                                                     | Sortable, filterable table with column definitions.                          |

### Page Templates

Ready-to-use page sections in the documentation — copy and customize:

| Template      | Description                                                            |
| ------------- | ---------------------------------------------------------------------- |
| **Hero**      | Landing page hero with gradient background, stats grid, feature cards. |
| **Pricing**   | 3-tier pricing layout using PricingCard molecule.                      |
| **Dashboard** | Stats overview, bar chart, activity feed, orders table.                |
| **Auth**      | Login + Signup forms with social auth (Google/GitHub).                 |

---

## Design Language

```
rounded-sm  ·  shadow-none  ·  border  ·  red-600 primary
max heading: 32px  ·  compact spacing  ·  Inter + Agbalumo fonts
```

### Dual Font System

| Token            | Font         | Usage                                       |
| ---------------- | ------------ | ------------------------------------------- |
| `font-sans`      | **Inter**    | Body text, UI elements, headings            |
| `font-secondary` | **Agbalumo** | Decorative accents, hero sections, branding |

```tsx
<h1 className="font-secondary text-2xl">Welcome</h1>
<p className="font-sans text-sm">Body text in Inter.</p>
```

### Semantic Token System (v2.0.0)

All components use `var(--poyraz-*, fallback)` CSS custom properties. Override them to customize the entire design system:

```css
:root {
  --poyraz-background: #ffffff;
  --poyraz-foreground: #0f172a;
  --poyraz-primary: #dc2626;
  --poyraz-border: #e2e8f0;
  --poyraz-muted: #f8fafc;
  --poyraz-accent: #f1f5f9;
  /* ... 40+ tokens available */
}

/* Dark theme — applied via class="dark" on <html> */
.dark {
  --poyraz-background: #020617;
  --poyraz-foreground: #f8fafc;
  --poyraz-primary: #ef4444;
  --poyraz-border: #1e293b;
  --poyraz-muted: #0f172a;
  --poyraz-accent: #1e293b;
}
```

### Theming with reactive-switcher

```tsx
import { ThemeSwitcher } from "reactive-switcher";
import { poyrazLightTheme, poyrazDarkTheme } from "poyraz-ui/themes";

<ThemeSwitcher themes={[poyrazLightTheme, poyrazDarkTheme]} />;
```

### Legacy Tokens

Tailwind `@theme` tokens are still available for font and basic color overrides:

| Token                | Value                                           |
| -------------------- | ----------------------------------------------- |
| `--color-primary`    | `#dc2626` (red-600)                             |
| `--color-background` | `#ffffff`                                       |
| `--color-foreground` | `#0f172a` (slate-950)                           |
| `--font-sans`        | `"Inter", ui-sans-serif, system-ui, sans-serif` |
| `--font-secondary`   | `"Agbalumo", cursive`                           |

---

## Development

### Prerequisites

- Node.js 18+
- pnpm

### Setup

```bash
git clone https://github.com/poyrazavsever/poyraz-ui.git
cd poyraz-ui
pnpm install
```

### Scripts

| Command          | Description                         |
| ---------------- | ----------------------------------- |
| `pnpm dev`       | Start dev server (docs site)        |
| `pnpm build`     | Build docs site for production      |
| `pnpm build:lib` | Build npm package (ESM + CJS + DTS) |
| `pnpm start`     | Serve production build locally      |

### Adding a Component

1. Create the component in `components/ui/{atoms,molecules,organisms}/`
2. Export from `src/{atoms,molecules,organisms}/index.ts`
3. Add doc page at `app/docs/<tier>/<name>/page.tsx`
4. Register in `lib/navigation.ts`
5. Run `pnpm build:lib` to verify

---

## Project Structure

```
poyraz-ui/
├── app/                      # Next.js documentation site
│   ├── page.tsx              # Homepage
│   ├── globals.css           # Global CSS + dark mode token overrides
│   └── docs/
│       ├── atoms/            # Atom doc pages
│       ├── molecules/        # Molecule doc pages
│       ├── organisms/        # Organism doc pages
│       └── templates/        # Page template demos
├── components/
│   ├── ui/
│   │   ├── atoms/            # 17 atom components
│   │   ├── molecules/        # 21 molecule components
│   │   └── organisms/        # 5 organism components
│   ├── theme-provider.tsx    # next-themes ThemeProvider wrapper
│   └── theme-toggle.tsx      # Dark/light mode toggle button
├── bin/
│   └── cli.mjs               # Interactive setup wizard (npx poyraz-ui init)
├── src/
│   ├── index.ts              # Main entry point
│   ├── utils.ts              # cn() utility
│   ├── preset.css            # Semantic token definitions (40+ CSS vars)
│   ├── themes/index.ts       # Light + Dark theme configs for reactive-switcher
│   ├── atoms/index.ts        # Atom exports
│   ├── molecules/index.ts    # Molecule exports
│   └── organisms/index.ts    # Organism exports
├── dist/                     # Built output (ESM + CJS + DTS)
├── lib/navigation.ts         # Centralized nav config
├── tsup.config.ts            # Build config (5 entry points)
└── tsconfig.lib.json         # Library TS config
```

---

## Tech Stack

| Technology                   | Purpose                                 |
| ---------------------------- | --------------------------------------- |
| **React 19**                 | UI rendering                            |
| **Next.js 16**               | Documentation site (App Router)         |
| **TypeScript 5**             | Type safety                             |
| **Tailwind CSS 4**           | Utility-first styling + `@theme` tokens |
| **Radix UI**                 | Accessible headless primitives          |
| **class-variance-authority** | Type-safe variant management            |
| **tailwind-merge**           | Intelligent class merging               |
| **Lucide React**             | Icons                                   |
| **tsup**                     | Library bundler                         |

---

## Browser Support

| Browser | Version |
| ------- | ------- |
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

---

## License

MIT — see [LICENSE](LICENSE) for details.

---

<div align="center">

**Built by [Poyraz Avsever](https://poyrazavsever.com)**

[Website](https://poyrazavsever.com) · [GitHub](https://github.com/poyrazavsever) · [LinkedIn](https://linkedin.com/in/poyrazavsever)

</div>
