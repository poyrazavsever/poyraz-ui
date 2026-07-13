# Phase 10 Documentation and Playground

## Information architecture

The documentation shell is organized as `Getting Started / Theme / Components / Blocks / Migration`. Component and block links are generated from the public registry by `pnpm docs:sync`; manually maintained navigation arrays are not part of the docs runtime.

`src/docs-registry.json` is the compact generated catalog used by the App Router UI. It contains install names, routes, files, runtime dependencies, registry dependencies and metadata without embedding component source. Source is fetched from `/r/{name}.json` only when a component page needs it.

## Component pages

Every atom, molecule and organism page composes the shared `ComponentPage` boundary. That boundary provides:

- namespaced shadcn install command and copy action;
- registry and runtime dependency lists;
- installed file targets;
- on-demand source view and copy action;
- detected variant, size, radius and state families;
- common keyboard, focus, semantic state and reduced-motion notes.

Page-specific demos remain source-authored. Registry metadata owns discovery and installation data; component source owns behavior; docs pages own explanatory copy.

## Preview controls

The shared preview toolbar changes only docs demo descendants. It never mutates the published component defaults.

- Background: solid, semantic gradient, image-like dark.
- Radius: sharp, soft, round.
- Density: compact, default, spacious.
- Motion: full, reduced.

Button has a dedicated prop playground. Template pages use a desktop, tablet and mobile container-width switcher so container-query behavior can be inspected inside the docs canvas.

## Sidebar overflow contract

`SidebarContent` exposes `scrollMode`:

| Value    | Behavior                                                              |
| -------- | --------------------------------------------------------------------- |
| `auto`   | Native vertical scrollbar with stable gutter.                         |
| `hidden` | Wheel, touch and keyboard scrolling with the scrollbar hidden.        |
| `fade`   | Hidden scrollbar plus top and bottom mask fades that signal overflow. |

The docs shell uses `fade`. The sidebar is sticky inside the centered 1440px shell rather than fixed to the viewport edge.

## Stable routes

- `/docs/blocks`: registry block catalog and install commands.
- `/docs/troubleshooting`: registry, alias, theme and overwrite diagnostics.
- `/docs/migration`: incremental V2 to V3 migration.
- `/docs/legacy/v2`: stable V2 package reference.

## Synchronization and checks

Run:

```bash
pnpm registry:build
pnpm test:phase10
pnpm test:phase10:browser
```

`registry:build` refreshes public registry documents, then `docs:sync` refreshes both the compact docs catalog and `COMPONENTS.md`.
