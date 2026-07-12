# Changelog

## [3.0.0] - Unreleased

### Added

- Added the production `@poyraz` source registry with theme, utility, recipe, hook, UI and block items.
- Added semantic light, dark and glass foundations with reduced-motion and transparency fallbacks.
- Added responsive component documentation, playgrounds and install metadata generated from registry sources.
- Added static, DOM, accessibility, browser, visual, performance and clean-consumer quality gates.
- Added incremental V2 migration mappings, audits, a safe import codemod and Next/Vite migration fixtures.
- Added guarded release preflight, checksum artifacts, production endpoint smoke tests and a protected manual release workflow.

### Changed

- V3 distribution is registry-first: installed source belongs to the consumer and no V3 runtime component barrel is published.
- `poyraz-ui@2.1.x` remains the legacy V2 runtime line and can be promoted to `legacy-v2` without moving npm `latest`.

### Migration

- Follow `docs/v3/migration-v2-to-v3.md` before removing V2 package imports or theme integration.
- V2 blocker fixes are planned through 2027-03-31; end of maintenance is 2027-06-30.

## 2.1.0 - 2026-06-03

### Added

- Added a centralized motion system in `poyraz-ui/preset.css`.
- Added shared motion tokens, keyframes, utilities and reduced motion support.
- Added compatibility aliases for existing animation utility names used by molecule components.

### Improved

- Improved motion for Accordion, Dropdown Menu, Select, Popover, Tooltip, Hover Card, Dialog, Modal, Sheet, Command Palette, Date Picker, Autocomplete, Tabs, Calendar, Pagination, Breadcrumb, Alert, Form and Card Templates.
- Standardized overlay, floating panel, trigger icon and item hover/focus transitions.
- Documented that `@import "poyraz-ui/preset.css";` is required for molecule animations.

### Compatibility

- No component API changes are required.
- Existing component imports, props and JSX usage continue to work after updating the package.
