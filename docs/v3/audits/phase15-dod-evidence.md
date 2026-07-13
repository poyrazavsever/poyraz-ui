# Faz 15 Definition of Done kanıt matrisi

Kayıt tarihi: 2026-07-13. Bu dosya `pnpm evidence:generate` ile üretilir ve
`pnpm evidence:check` ile package export, registry item, docs metadata ve source isim drift'i
release öncesinde engellenir.

Global coverage tek başına release kanıtı değildir. Baseline
`docs/v3/audits/phase15-coverage-baseline.json` içinde tutulur; kritik davranış kanıtı
aşağıdaki component satırlarında bağlanır.

## Npm public exportları

| Export                 | ESM/CSS                     | CJS                          | Types                         | Kanıt                  |
| ---------------------- | --------------------------- | ---------------------------- | ----------------------------- | ---------------------- |
| `poyraz-ui`            | `./dist/index.js`           | `./dist/index.cjs`           | `./dist/index.d.ts`           | `test:package-exports` |
| `poyraz-ui/atoms`      | `./dist/atoms/index.js`     | `./dist/atoms/index.cjs`     | `./dist/atoms/index.d.ts`     | `test:package-exports` |
| `poyraz-ui/molecules`  | `./dist/molecules/index.js` | `./dist/molecules/index.cjs` | `./dist/molecules/index.d.ts` | `test:package-exports` |
| `poyraz-ui/organisms`  | `./dist/organisms/index.js` | `./dist/organisms/index.cjs` | `./dist/organisms/index.d.ts` | `test:package-exports` |
| `poyraz-ui/preset.css` | CSS asset                   | CSS asset                    | N/A                           | `test:package-exports` |
| `poyraz-ui/themes`     | `./dist/themes/index.js`    | `./dist/themes/index.cjs`    | `./dist/themes/index.d.ts`    | `test:package-exports` |

Registry-only maddeler package subpath satırları için `N/A` kabul edilir; npm exportları
source-copy registry item'ı değil, merkezi runtime entry point'leridir.

## Registry itemları

| Item                      | Metadata/source            | Clean consumer                   | Docs                                           | Keyboard/focus/reduced motion                         | Glass                                                  |
| ------------------------- | -------------------------- | -------------------------------- | ---------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------ |
| `accordion`               | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/accordion`                    | Phase 6 contract + browser accessibility suite        | N/A                                                    |
| `alert`                   | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/alert`                        | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `announcement-bar`        | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/organisms/announcement-bar`             | announcement-bar DOM exit/focus contract              | N/A                                                    |
| `article-card`            | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/article-card`                    | N/A (non-interactive/composite)                       | N/A                                                    |
| `auth-card-block`         | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/auth-card-block`                 | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `autocomplete`            | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/autocomplete`                 | Phase 6/7 contract + browser accessibility suite      | light/dark visual + glass fallback/background contexts |
| `avatar`                  | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/avatar`                           | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `badge`                   | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/badge`                            | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `bg-pattern`              | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/bg-patterns`                      | N/A (non-interactive/composite)                       | N/A                                                    |
| `brand-hero-block`        | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/brand-hero-block`                | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `breadcrumb`              | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/breadcrumb`                   | N/A (non-interactive/composite)                       | N/A                                                    |
| `button`                  | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/button`                           | button unit/a11y + browser interaction/reduced-motion | light/dark visual + glass fallback/background contexts |
| `calendar`                | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/calendar`                     | Phase 6/7 contract + browser accessibility suite      | light/dark visual + glass fallback/background contexts |
| `card`                    | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/card`                             | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `card-variants`           | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/card` (supporting item)           | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `checkbox`                | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/checkbox`                         | Phase 5 contract + browser accessibility suite        | N/A                                                    |
| `command-palette`         | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/command-palette`              | command-palette a11y keyboard selection test          | N/A                                                    |
| `dashboard-shell-block`   | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/dashboard-shell-block`           | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `data-table`              | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/organisms/data-table`                   | Phase 7 contract + browser accessibility suite        | light/dark visual + glass fallback/background contexts |
| `data-table-core`         | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/organisms/data-table` (supporting item) | Phase 7 contract + browser accessibility suite        | light/dark visual + glass fallback/background contexts |
| `date-picker`             | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/date-picker`                  | Phase 6/7 contract + browser accessibility suite      | light/dark visual + glass fallback/background contexts |
| `dialog`                  | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/dialog`                       | dialog focus-trap browser test + Phase 6 contract     | N/A                                                    |
| `drawer`                  | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/drawer`                       | Phase 6 contract + browser accessibility suite        | N/A                                                    |
| `dropdown-menu`           | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/dropdown-menu`                | Phase 6 contract + browser accessibility suite        | N/A                                                    |
| `footer`                  | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/organisms/footer`                       | N/A (non-interactive/composite)                       | N/A                                                    |
| `footer-blocks`           | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/footer-blocks`                   | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `footer-newsletter`       | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/organisms/footer` (supporting item)     | Phase 8 contract + browser accessibility suite        | N/A                                                    |
| `form`                    | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/form`                         | Phase 7 contract + browser accessibility suite        | N/A                                                    |
| `form-fields`             | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/form-fields`                      | Phase 5 contract + autofill engine matrix             | N/A                                                    |
| `glass-app-shell-block`   | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/glass-app-shell-block`           | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `hover-card`              | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/hover-card`                   | Phase 6 contract + reduced-motion context             | N/A                                                    |
| `image-card`              | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/image-card`                      | N/A (non-interactive/composite)                       | N/A                                                    |
| `input`                   | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/input`                            | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `label`                   | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/label`                            | N/A (non-interactive/composite)                       | N/A                                                    |
| `logo`                    | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/logo`                             | N/A (non-interactive/composite)                       | N/A                                                    |
| `mega-menu-block`         | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/mega-menu-block`                 | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `mermaid`                 | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/mermaid`                      | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `mobile-navigation-block` | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/mobile-navigation-block`         | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `mobile-sidebar-block`    | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/mobile-sidebar-block`            | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `modal`                   | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/modal`                        | Phase 6 contract + browser accessibility suite        | N/A                                                    |
| `navbar`                  | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/organisms/navbar`                       | navbar drill DOM test + navbar browser/a11y suites    | light/dark visual + glass fallback/background contexts |
| `navbar-auto-hide`        | registry file/graph checks | all-item clean Next/Vite fixture | N/A (foundation/hook)                          | N/A (non-interactive/composite)                       | N/A                                                    |
| `navigation-block`        | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/navigation-block`                | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `news-card`               | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/news-card`                       | N/A (non-interactive/composite)                       | N/A                                                    |
| `pagination`              | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/pagination`                   | Phase 6 contract + browser accessibility suite        | N/A                                                    |
| `persistent-announcement` | registry file/graph checks | all-item clean Next/Vite fixture | N/A (foundation/hook)                          | N/A (non-interactive/composite)                       | N/A                                                    |
| `popover`                 | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/popover`                      | Phase 6 contract + browser accessibility suite        | N/A                                                    |
| `poyraz-recipes`          | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/theme` (supporting item)                | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `poyraz-theme`            | schema metadata            | all-item clean Next/Vite fixture | N/A (foundation/hook)                          | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `poyraz-utils`            | registry file/graph checks | all-item clean Next/Vite fixture | N/A (foundation/hook)                          | N/A (non-interactive/composite)                       | N/A                                                    |
| `pricing-block`           | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/pricing-block`                   | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `pricing-card`            | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/pricing-card`                    | N/A (non-interactive/composite)                       | N/A                                                    |
| `product-card`            | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/product-card`                    | N/A (non-interactive/composite)                       | N/A                                                    |
| `radio-group`             | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/radio-group`                      | Phase 5 contract + browser accessibility suite        | N/A                                                    |
| `scroll-area`             | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/scroll-area`                      | N/A (non-interactive/composite)                       | N/A                                                    |
| `select`                  | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/select`                       | Phase 6 contract + browser accessibility suite        | light/dark visual + glass fallback/background contexts |
| `separator`               | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/separator`                        | N/A (non-interactive/composite)                       | N/A                                                    |
| `sheet`                   | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/sheet`                        | Phase 6 contract + browser accessibility suite        | N/A                                                    |
| `sidebar`                 | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/organisms/sidebar`                      | Phase 8 contract + browser accessibility suite        | light/dark visual + glass fallback/background contexts |
| `sidebar-provider`        | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/organisms/sidebar` (supporting item)    | N/A (non-interactive/composite)                       | N/A                                                    |
| `skeleton`                | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/skeleton`                         | N/A (non-interactive/composite)                       | N/A                                                    |
| `smart-dashboard-block`   | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/smart-dashboard-block`           | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `sonner`                  | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/sonner`                       | N/A (non-interactive/composite)                       | light/dark visual + glass fallback/background contexts |
| `star-rating`             | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/card-templates`               | N/A (non-interactive/composite)                       | N/A                                                    |
| `stats-card`              | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/stats-card`                      | N/A (non-interactive/composite)                       | N/A                                                    |
| `switch`                  | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/switch`                           | Phase 5 contract + browser accessibility suite        | N/A                                                    |
| `tabs`                    | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/tabs`                         | tabs keyboard browser test + Phase 6 contract         | light/dark visual + glass fallback/background contexts |
| `testimonial-card`        | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/blocks/testimonial-card`                | N/A (non-interactive/composite)                       | N/A                                                    |
| `textarea`                | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/textarea`                         | N/A (non-interactive/composite)                       | N/A                                                    |
| `tooltip`                 | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/molecules/tooltip`                      | Phase 6 contract + browser accessibility suite        | N/A                                                    |
| `typography`              | registry file/graph checks | all-item clean Next/Vite fixture | `/docs/atoms/typography`                       | N/A (non-interactive/composite)                       | N/A                                                    |

## Kanıt komutları

- `pnpm test:package-exports`: ESM, CJS ve TypeScript resolution.
- `pnpm registry:check && pnpm registry:smoke`: metadata, graph ve tüm item materialization.
- `pnpm fixture:clean-install`: tüm registry itemlarıyla izole Next/Vite typecheck ve build.
- `pnpm registry:consumer-smoke`: gerçek shadcn local/GitHub Button install ve CLI davranışları.
- `pnpm test && pnpm test:browser`: release-critical DOM, a11y, keyboard, focus ve motion akışları.
- `pnpm test:coverage`: baseline regression floor; component readiness yerine geçmez.
