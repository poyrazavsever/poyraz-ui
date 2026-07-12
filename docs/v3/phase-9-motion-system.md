# Phase 9 Motion System

## Scope

Phase 9 makes motion a documented design-system contract. Core components use CSS keyframes, transforms, opacity and Radix state attributes. Motion never owns semantic state.

## Token mapping

| Previous usage | Native token or utility | Policy |
| --- | --- | --- |
| `duration-150` | `--poyraz-motion-duration-fast` (120ms) | Hover, focus and press feedback |
| `duration-200` | `--poyraz-motion-duration-base` (180ms) | Component entrance and content change |
| `duration-300` | `--poyraz-motion-duration-slow` (260ms) | Large panel movement |
| `ease-out` | `--poyraz-motion-ease-out` | Entrances and direct feedback |
| `ease-in` | `--poyraz-motion-ease-in` | Shorter exits |
| `translate-x-0.5` | `--poyraz-motion-distance-micro` (2px) | Icon and item hover |
| `zoom-in-95` | `--poyraz-motion-scale-enter` (0.98) | Floating surfaces |

Compatibility classes such as `animate-in`, `fade-in-0`, `zoom-in-95` and directional `slide-*` remain in `preset.css` for existing registry consumers. New Poyraz source must use `animate-poyraz-*` utilities or recipes. Run `pnpm motion:audit-aliases` for the current migration inventory.

## Recipes

- Presence: normalized fade and scale entrance/exit pairs.
- Floating: `data-side` aware opacity, translation and scale without React state.
- Overlay: opacity only; backdrop blur is static throughout the animation.
- Accordion: Radix measured height plus opacity, with a shorter close duration.
- Toast: Sonner swipe state timing with transform/opacity transitions. Current Sonner `data-swipe-out` is supported alongside the previous `data-swiped` compatibility state.
- Progress: a 700ms spinner and 1800ms pulse with one reduced-motion iteration.
- Controls: 120ms color/opacity/transform feedback, 2px icon travel and size-aware button press scale.

## Performance audit

`pnpm motion:audit-performance` inventories broad transitions and paint-heavy border/shadow transitions. The release guard fails if a keyframe animates `filter` or `backdrop-filter`. Blur may be present on a surface, but only opacity and transform may animate around it.

Border color transitions remain acceptable for focus and selected state because geometry does not change. Border width and large shadow interpolation are prohibited. New code should avoid `transition-all`.

## Reduced motion and exits

Both `prefers-reduced-motion: reduce` and `data-poyraz-motion="reduced"` collapse native animations to 1ms and one iteration. Essential content remains rendered. Radix components keep closed-state keyframes on mounted presence nodes, allowing exits to complete before unmount.

Automated coverage:

- `pnpm test:phase9` validates tokens, keyframes, recipes, exit classes and reduced-motion CSS.
- `pnpm test:phase9:browser` checks computed animation behavior in a reduced-motion CDP context.

## Do and don't

| Family | Do | Don't |
| --- | --- | --- |
| Fade | Use for presence without spatial change | Fade essential status without a persistent label |
| Scale | Keep the range between 0.98 and 1 | Scale full-page layouts or text-heavy panels |
| Floating | Derive direction from `data-side` | Add React state just to choose a direction |
| Overlay | Animate opacity around a static blur | Animate `filter` or `backdrop-filter` |
| Accordion | Animate measured Radix height and opacity | Animate an arbitrary `max-height` or remove content before exit |
| Toast | Preserve direct swipe tracking and shorten dismissal | Override Sonner gesture transforms during a swipe |
| Progress | Pair motion with status text or an accessible label | Leave decorative loops running in reduced-motion mode |
| Controls | Keep feedback under 200ms and hover travel at 1-2px | Animate border width, large shadows or layout coordinates |

## Advanced dependency decision

No advanced animation dependency is added in V3 core or Phase 9 blocks. Current requirements are presence, directional floating surfaces, disclosures, overlays, toast gestures and micro-interactions; CSS and library state attributes cover all of them without runtime weight.

An optional dependency may be reconsidered only for a future block that needs measured cross-element layout choreography, interruption-aware spring physics or shared-layout transitions. Such a dependency must stay block-local, optional and absent from registry core items.
