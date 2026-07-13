# V2 to V3 Migration Guide

V3 supports two official migration targets. Choose one per component/application boundary:

1. **Npm package upgrade:** keep supported `poyraz-ui` imports and move to the V3 runtime package.
2. **Own the source:** install selected components from `@poyraz/*` and import the local files.

The npm path is the shortest upgrade for applications that want centralized semver updates.
The registry path is intentionally incremental and is intended for source-level customization.
Both may coexist during migration because they are generated from the same canonical V3
component source.

## Support Timeline

- V3 package: `poyraz-ui@3.x`; stable is published under `latest`.
- V2 line: `2.1.x`, available under `legacy-v2` after V3 stable.
- Security and release-blocking fixes: through **2027-03-31**.
- End of maintenance: **2027-06-30**.
- V2 source remains available after EOL, but no response or patch SLA applies.

## Before Starting

1. Create a migration branch and record current visual/browser baselines.
2. Pin the existing V2 package version while preparing; choose npm-upgrade or source-registry scope before changing imports.
3. Run `pnpm migration:audit <source-directories>` and keep the report.
4. Back up customized local UI files. Registry installation must never overwrite a consumer-owned customized component without review.

## Route A: Upgrade the npm runtime package

Review the V3 release notes and then update on a migration branch:

```bash
pnpm add poyraz-ui@3
```

Keep supported imports:

```tsx
import { Button, Input, Card } from "poyraz-ui/atoms";
import { Dialog } from "poyraz-ui/molecules";
import "poyraz-ui/preset.css";
```

Run typecheck, production build and visual/interaction regression tests. V3 is a major visual
and API release: a compiling import does not prove variant, sizing or layout parity. Apply the
prop/variant and token mappings below where needed.

Use the source route only for components that need local markup, CVA or Radix composition
ownership. Moving every package import to a registry file is not required.

## Route B: Own component source through the registry

### Step 1: Foundation

```bash
pnpm dlx shadcn@latest add @poyraz/poyraz-theme @poyraz/poyraz-utils @poyraz/poyraz-recipes
```

Import the installed theme CSS once after Tailwind. Keep the V2 preset during coexistence only if an unmigrated V2 component still needs it. Do not import both files indefinitely.

### Step 2: Button, Input and Card

```bash
pnpm dlx shadcn@latest add @poyraz/button @poyraz/input @poyraz/card
```

Replace imports one component at a time:

```tsx
// Before
import { Button, Input, Card } from "poyraz-ui/atoms";

// After
import { Button } from "@/components/ui/atoms/button";
import { Input } from "@/components/ui/atoms/input";
import { Card } from "@/components/ui/atoms/card";
```

Button prop names remain compatible, but dimensions changed. V2 `default` was approximately 32px; use V3 `sm` for that height. V2 `sm` maps approximately to V3 `xs`. Card legacy variants remain as compatibility variants, while V3 adds semantic surface and radius controls.

### Step 3: Radix-backed Molecules

Install and migrate one interaction family at a time:

```bash
pnpm dlx shadcn@latest add @poyraz/dialog @poyraz/select @poyraz/dropdown-menu @poyraz/tabs
```

After each family, verify controlled state, keyboard navigation, Escape behavior, focus trap/return focus, portal theme inheritance and reduced motion. Do not treat an import-only compile as migration completion.

### Step 4: Organisms and Blocks

```bash
pnpm dlx shadcn@latest add @poyraz/navbar @poyraz/sidebar @poyraz/footer
pnpm dlx shadcn@latest add @poyraz/dashboard-shell-block
```

Navbar, Sidebar and blocks are composition migrations. Install dependencies first, move application data and routing adapters second, and re-apply consumer layout overrides last. The codemod deliberately does not rewrite composition or props.

## Theme Object Migration

V2 generated CSS variables at runtime from `poyrazLightTheme` and `poyrazDarkTheme`. V3 ships those values through `@poyraz/poyraz-theme`; the consumer should switch a stable selector instead of recreating the theme object.

```tsx
// V2
import { ThemeProvider } from "reactive-switcher";
import { poyrazLightTheme, poyrazDarkTheme } from "poyraz-ui/themes";

// Keep the adapter/configuration already used by the pinned V2 application.
const legacyThemeConfig = createExistingV2ThemeConfig(poyrazLightTheme, poyrazDarkTheme);

<ThemeProvider themes={legacyThemeConfig}>
  <App />
</ThemeProvider>;
```

`poyraz-ui/themes` exposes `{ name, variables }` objects. `reactive-switcher` configuration shapes differ across versions; version `1.0.3`, for example, expects a keyed `ThemesConfig` with `colors`. Do not introduce a new runtime adapter during migration. Preserve the pinned application's working adapter until CSS selector parity is verified, then remove the provider and adapter together.

Provider-independent V3 example:

```ts
export function setColorTheme(theme: "light" | "dark") {
  document.documentElement.dataset.poyrazTheme = theme;
  localStorage.setItem("color-theme", theme);
}
```

```html
<html data-poyraz-theme="dark"></html>
```

The theme registry supports `:root`, `.dark` and `[data-poyraz-theme="dark"]`. This approach has no React provider dependency. Add an inline bootstrap script in SSR applications if first-paint flashing matters.

## Next.js Recipe with next-themes

This is framework-specific and optional. Keep it outside the registry component contract.

```tsx
// app/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-poyraz-theme" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
```

```tsx
// app/layout.tsx
<html lang="en" suppressHydrationWarning>
  <body>
    <Providers>{children}</Providers>
  </body>
</html>
```

Render theme-dependent controls only after client mount or use a client-only boundary to avoid hydration mismatch.

## Discovery and Audits

```bash
rg "from [\\\"']poyraz-ui(?:/atoms|/molecules|/organisms|/themes)?[\\\"']" src app components
rg 'reactive-switcher|poyrazLightTheme|poyrazDarkTheme|poyrazThemes' src app components
rg -- '--poyraz-|poyraz-ui/preset.css' src app components

pnpm migration:audit src app components
pnpm migration:tokens src app components
pnpm migration:codemod -- src app components
pnpm migration:codemod --write -- src app components
```

The codemod only rewrites named imports that have an unambiguous item mapping and an already installed target file. Namespace/default imports, unknown exports, prop changes and composition changes remain manual.

### Codemod feasibility decision

Safe and implemented: splitting named V2 barrel imports into known local item imports while preserving aliases and type-only specifiers. Deliberately rejected: automatic prop/variant conversion, default or namespace imports, JSX composition changes, theme provider removal and file overwrite. Those transformations depend on consumer intent and cannot be made reliably from syntax alone.

## Overwrite Policy

- Commit before every registry install.
- Never pass an overwrite flag globally.
- If a target file already exists, compare source and installed revision first.
- Keep consumer customization in a separate commit from the upstream registry update.
- Prefer a three-way merge; do not delete a customized file and reinstall it blindly.
- The migration codemod checks target existence and never creates or replaces component files.

## Rollback

1. Revert the component-specific migration commit, not the entire migration branch.
2. Restore the V2 import for that component and keep the pinned V2 package.
3. Restore the previous preset/theme provider only if the reverted component needs it.
4. Remove newly installed registry files only after confirming no migrated component depends on them.
5. Run typecheck, production build, keyboard tests and visual comparison.
6. Record why the component rolled back before attempting migration again.

Do not mix rollback with generated formatting changes or unrelated refactors. For the source
route, a component migration is complete only when its V2 import, V2 runtime theme dependency
and obsolete local token overrides are removed. For the npm route, the `poyraz-ui` dependency
remains and is upgraded to V3; only obsolete V2 adapters and contracts are removed.
