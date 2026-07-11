# Phase 5 — Foundation component contract

Phase 5 replaces the v2 brutalist surface language with semantic, soft and optionally glass recipes. Runtime package exports remain available during migration; registry source is the v3 distribution contract.

## V2 API inventory and migration

| Component | V2 contract | V3 migration |
| --- | --- | --- |
| Label | Native label props | Typography is no longer forced uppercase; `data-slot="label"` added |
| Separator | Radix orientation/decorative | Same behavior; semantic border and `data-slot` |
| Skeleton | Native div props | Border removed; soft semantic fill and radius |
| Input/Textarea | Native props | `variant=default|soft|glass`, independent radius, invalid data styling |
| Form Fields | Input-based convenience wrappers | All wrappers use `InputGroup`; one focus ring surrounds input, icons and actions |
| Checkbox/Radio/Switch | Radix controlled/uncontrolled props | `data-state` is the styling source; larger touch hit area and indicator motion |
| Badge | Four variants | Semantic status and glass variants; size and radius recipes |
| Avatar | Radix image/fallback | Size and radius recipes replace ad-hoc class overrides |
| Card | `default/bordered/elevated/highlight/ghost/interactive` | Preferred variants are `default/soft/outline/glass/elevated/interactive`; legacy names remain as compatibility aliases |
| Typography | Heading/body map and `secondaryFont` | Fixed semantic scale, `font=primary|secondary|inherit`; `secondaryFont` remains deprecated compatibility |
| ScrollArea | Custom CSS scrollbar | Same API with semantic colors, rounded scrollbar and no hard-coded fallback palette |
| Logo | Image/link wrapper | Shine effect, radius and interaction recipes |
| Background patterns | Color/opacity/size props | API preserved; patterns remain decorative and consumer-controlled |

## Field anatomy and focus

- Standalone fields use `input` or `textarea` root slots.
- Composite fields use `input-group`, `input-group-addon` and an inner `input`.
- The group owns `focus-within` border/ring. Inner input border, outline, ring and ring-offset are suppressed with a higher-specificity child recipe.
- Prefix/suffix and action controls remain inside the same surface. `variant` and `radius` are selected at group level.
- `aria-invalid` drives both standalone and grouped invalid styling. Disabled colors use semantic disabled tokens.
- WebKit autofill is normalized to semantic foreground/surface colors.

## Typography standard

- Scale: `display`, `h1`, `h2`, `h3`, `h4`, `body`, `lead`, `large`, `small`, `caption`, `muted`, `blockquote`, `list`.
- Primary and secondary families are overridden with `--poyraz-font-primary` and `--poyraz-font-secondary`.
- Secondary/decorative font is opt-in and is never applied to controls or default body text.
- Inline `TextEffect` recipes: `hand-drawn`, `contrast`, `shimmer`, `marker`, `outline`.
- Shimmer and logo shine stop under reduced-motion.

## Card anatomy and compositions

Core anatomy remains `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`; `CardAction` is the stable top-right convenience slot. Nested cards use a smaller radius. The old offset red elevated treatment maps to semantic `elevated`; legacy aliases stay available only for migration.

Phase 5 compositions are distributed separately as `card-variants`: BasicContent, ImageContent, Horizontal, Profile, Statistic, PricingPlan, Feature, Glass, Interactive and Expandable cards. Interactive Card is a visual container; navigation/click semantics must be supplied by a real link or button child. Expandable Card supports controlled and uncontrolled open state and exposes `aria-expanded`.

## Verification matrix

- Light/dark docs pages cover surfaces, radii and state contrast.
- Glass fields and cards are rendered on both light and dark gradients.
- Icon-only actions have accessible names; selection primitives retain Radix keyboard behavior.
- Forced-colors rules cover checked selection controls.
- Registry graph, generated item schema and clean fixture TypeScript installation are required before release.

