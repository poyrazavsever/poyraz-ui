# Phase 8 Organisms and Blocks

Phase 8 moves product-level compositions out of documentation-only examples and into installable registry blocks. Organism primitives remain reusable UI items; navigation data, sample content and page layout live in block items owned by the consumer.

## Responsive policy

Every Phase 8 organism or block establishes a named Tailwind container and responds with `@sm`, `@md`, `@lg` or `@xl` variants. Viewport breakpoints are reserved for true viewport behavior such as a fixed overlay. This keeps previews usable inside the narrow documentation canvas and preserves the same source when installed on a full page.

## Registry blocks

| Item                      | Main dependencies                           | Responsive behavior                                                                  | Accessibility notes                                                                                    |
| ------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `navigation-block`        | Button, Navbar                              | Desktop links switch to mobile navigation from the navbar container width.           | Native links, `aria-current`, labelled mobile trigger. Active route is supplied as plain `activeHref`. |
| `mobile-navigation-block` | Button, Sheet, Navigation Block             | Dedicated compact navigation opens a capped mobile sheet.                            | Dialog focus management, labelled navigation and framework-neutral `aria-current`.                     |
| `mega-menu-block`         | Navbar                                      | Mega menu columns and mobile disclosure follow the navbar container.                 | Radix Navigation Menu keyboard behavior and labelled product navigation.                               |
| `mobile-sidebar-block`    | Button, Sheet, Sidebar                      | Uses a viewport sheet by intent; panel width is capped.                              | Dialog focus management, hidden title, labelled trigger.                                               |
| `footer-blocks`           | Button, Footer, Footer Newsletter           | Footer columns and newsletter form use the footer container.                         | Landmark footer, labelled social links and native form controls.                                       |
| `dashboard-shell-block`   | Avatar, Badge, Button, Card, Input, Sidebar | Sidebar appears only when the shell container has room.                              | Search label, notification label and semantic navigation parts.                                        |
| `glass-app-shell-block`   | Navigation Block, Sidebar                   | Navbar and sidebar react independently to their named containers.                    | Preserves native navigation and main landmarks.                                                        |
| `auth-card-block`         | Button, Card, Input, Label                  | Form padding and card width adapt to the auth container.                             | Associated labels, autocomplete hints and native submit behavior.                                      |
| `pricing-block`           | Badge, Button, Card                         | Plans stack until the pricing container reaches large width.                         | Ordered feature content and descriptive action labels.                                                 |
| `brand-hero-block`        | Badge, Button                               | Actions and feature anatomy reflow from the hero container.                          | Literal heading, clear actions and decorative icons excluded from navigation.                          |
| `smart-dashboard-block`   | Badge, Button, Card                         | Stats progress from one to two to four columns; content panels split at large width. | Text equivalents for chart bars, labelled options control and semantic activity list.                  |

## Behavior boundaries

- `use-navbar-auto-hide` owns scroll observation. Navbar markup only consumes its boolean result and disables transform motion under reduced motion.
- `sidebar-provider` owns collapse and mobile state. `SidebarPanel`, `SidebarRail`, trigger, group, menu, submenu and footer remain independently targetable slots.
- `use-persistent-announcement` is optional. Announcement Bar visibility works without storage and persistence never runs inside the core component.
- `footer-newsletter` is a separate client composition. The Footer anatomy remains server-safe.
- Dashboard, navigation and pricing mock data are exported constants or props. Blocks contain no routing, authentication, billing or analytics business logic.

## Installation

Install a complete layout or a focused block through the Poyraz namespace:

```bash
pnpm dlx shadcn@latest add @poyraz/dashboard-shell-block
pnpm dlx shadcn@latest add @poyraz/auth-card-block
```

The registry metadata declares npm dependencies, transitive Poyraz items, container responsiveness and accessibility review status for every block.
