# Changelog

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
