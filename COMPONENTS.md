# Poyraz UI — Component Documentation

> **Minimal UI component library** — clean borders, subtle rounding, semantic design tokens with built-in dark mode.
>
> Version: `2.0.1` · License: MIT · [Live Docs](https://ui.poyrazavsever.com)

---

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Import Paths](#import-paths)
- [Utility: cn](#utility-cn)
- **Atoms**
  - [Button](#button)
  - [Badge](#badge)
  - [Input](#input)
  - [Label](#label)
  - [Checkbox](#checkbox)
  - [Switch](#switch)
  - [RadioGroup](#radiogroup)
  - [Textarea](#textarea)
  - [Card](#card)
  - [Avatar](#avatar)
  - [Skeleton](#skeleton)
  - [Separator](#separator)
  - [ScrollArea](#scrollarea)
  - [Typography](#typography)
  - [Logo](#logo)
  - [Form Fields](#form-fields)
  - [BgPattern](#bgpattern)
- **Molecules**
  - [Accordion](#accordion)
  - [Alert](#alert)
  - [Autocomplete](#autocomplete)
  - [Breadcrumb](#breadcrumb)
  - [Calendar](#calendar)
  - [Command Palette](#command-palette)
  - [Date Picker](#date-picker)
  - [Dialog](#dialog)
  - [Drawer](#drawer)
  - [Dropdown Menu](#dropdown-menu)
  - [Form](#form)
  - [Hover Card](#hover-card)
  - [Modal](#modal)
  - [Pagination](#pagination)
  - [Popover](#popover)
  - [Select](#select)
  - [Sheet](#sheet)
  - [Sonner (Toaster)](#sonner-toaster)
  - [Tabs](#tabs)
  - [Tooltip](#tooltip)
- **Organisms**
  - [Navbar](#navbar)
  - [Sidebar](#sidebar)
  - [Footer](#footer)
  - [DataTable](#datatable)
  - [AnnouncementBar](#announcementbar)

---

## Installation

```bash
# npm
npm install poyraz-ui

# pnpm
pnpm add poyraz-ui

# yarn
yarn add poyraz-ui
```

### Peer Dependencies

| Package               | Version | Required                |
| --------------------- | ------- | ----------------------- |
| `react`               | `>=18`  | Yes                     |
| `react-dom`           | `>=18`  | Yes                     |
| `tailwindcss`         | `>=4`   | Yes                     |
| `react-hook-form`     | `>=7`   | Optional (for Form)     |
| `@hookform/resolvers` | `>=3`   | Optional (for Form)     |
| `zod`                 | `>=3`   | Optional (for Form)     |
| `reactive-switcher`   | `>=1`   | Optional (theme toggle) |

---

## Setup

### Quick Start (CLI)

The fastest way to set up Poyraz UI in an existing project:

```bash
npx poyraz-ui init
```

The interactive wizard will:

1. Detect your package manager
2. Install `poyraz-ui` (+ optional `reactive-switcher`)
3. Inject preset CSS import into your global stylesheet
4. Optionally scaffold a `ThemeProvider` for dark/light mode

### Manual Setup

Import the Poyraz UI preset CSS in your project's global stylesheet:

```css
/* globals.css */
@import "tailwindcss";
@import "poyraz-ui/preset.css";
```

This applies the following design tokens:

| Token              | Value                                           |
| ------------------ | ----------------------------------------------- |
| `--font-sans`      | `"Inter", ui-sans-serif, system-ui, sans-serif` |
| `--font-secondary` | `"Agbalumo", cursive`                           |
| `--color-primary`  | `#dc2626` (red-600)                             |

Utility classes added: `font-secondary`, `decoration-dashed`.

### Dark Mode

Poyraz UI v2.0.1 ships with 40+ semantic CSS custom properties (`--poyraz-*`) that automatically adapt to dark mode.

Add the dark overrides after the preset import:

```css
@import "tailwindcss";
@import "poyraz-ui/preset.css";

.dark {
  --poyraz-background: #09090b;
  --poyraz-foreground: #fafafa;
  --poyraz-border: #27272a;
  /* … see preset.css for all tokens */
}
```

Toggle dark mode by adding `class="dark"` to `<html>`. Use `reactive-switcher` or any class-based theme provider (e.g. `next-themes`).

---

## Import Paths

Poyraz UI provides 5 import entry points:

```ts
// Everything
import { Button, Accordion, Navbar } from "poyraz-ui";

// Only atoms
import { Button, Badge, Input } from "poyraz-ui/atoms";

// Only molecules
import { Accordion, Dialog, Modal } from "poyraz-ui/molecules";

// Only organisms
import { Navbar, Sidebar, Footer } from "poyraz-ui/organisms";

// Theme presets
import { poyrazLightTheme, poyrazDarkTheme } from "poyraz-ui/themes";
```

Tree-shaking is fully supported. Use sub-path imports for smaller bundles.

---

## Utility: cn

A utility function that merges class names using `clsx` + `tailwind-merge`:

```ts
import { cn } from "poyraz-ui";

cn("px-4 py-2", isActive && "bg-red-600", className);
```

---

# Atoms

Fundamental, single-purpose building blocks.

---

## Button

A polymorphic button with 6 visual variants, 4 sizes, and a loading state.

```tsx
import { Button } from "poyraz-ui/atoms";
```

### Props

| Prop       | Type                                                                          | Default     | Description                                                                          |
| ---------- | ----------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------ |
| `variant`  | `"default" \| "secondary" \| "outline" \| "destructive" \| "ghost" \| "link"` | `"default"` | Visual style                                                                         |
| `size`     | `"default" \| "sm" \| "lg" \| "icon"`                                         | `"default"` | Size preset                                                                          |
| `asChild`  | `boolean`                                                                     | `false`     | Renders as child element via Radix `Slot` (for composing with `<a>`, `<Link>`, etc.) |
| `loading`  | `boolean`                                                                     | `false`     | Shows spinner, sets `aria-busy`, disables button                                     |
| `disabled` | `boolean`                                                                     | `false`     | Native disabled state                                                                |
| `...rest`  | `ButtonHTMLAttributes`                                                        | —           | All native button attributes                                                         |

### Variants

| Variant       | Description                                                |
| ------------- | ---------------------------------------------------------- |
| `default`     | Red-600 background, white text (primary CTA)               |
| `secondary`   | White background, slate border                             |
| `outline`     | Transparent background, slate-900 border; inverts on hover |
| `destructive` | Red-500 background (danger action)                         |
| `ghost`       | Transparent, border appears on hover                       |
| `link`        | Inline text link style with dashed underline               |

### Sizes

| Size      | Height      | Padding       |
| --------- | ----------- | ------------- |
| `default` | `h-11`      | `px-6 py-2`   |
| `sm`      | `h-9`       | `px-4 py-1.5` |
| `lg`      | `h-14`      | `px-10 py-3`  |
| `icon`    | `h-10 w-10` | `p-0`         |

### Examples

```tsx
// Basic
<Button>Click me</Button>

// Variants
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Learn more</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>

// Loading
<Button loading>Submitting...</Button>

// As link
<Button asChild>
  <a href="/page">Navigate</a>
</Button>
```

---

## Badge

Inline status indicator with 4 variants.

```tsx
import { Badge } from "poyraz-ui/atoms";
```

### Props

| Prop      | Type                                                     | Default     | Description          |
| --------- | -------------------------------------------------------- | ----------- | -------------------- |
| `variant` | `"default" \| "secondary" \| "destructive" \| "outline"` | `"default"` | Visual style         |
| `...rest` | `HTMLAttributes<HTMLDivElement>`                         | —           | All native div attrs |

### Variants

| Variant       | Description                              |
| ------------- | ---------------------------------------- |
| `default`     | Red-600 background, white text           |
| `secondary`   | Slate-100 background, slate-900 text     |
| `destructive` | Red-500 background                       |
| `outline`     | Transparent background, slate-900 border |

### Examples

```tsx
<Badge>New</Badge>
<Badge variant="secondary">Draft</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">v2.0</Badge>
```

---

## Input

Styled text input with dashed border and focus ring.

```tsx
import { Input } from "poyraz-ui/atoms";
```

### Props

| Prop      | Type                                    | Default  | Description            |
| --------- | --------------------------------------- | -------- | ---------------------- |
| `type`    | `string`                                | `"text"` | HTML input type        |
| `...rest` | `InputHTMLAttributes<HTMLInputElement>` | —        | All native input attrs |

### Examples

```tsx
<Input placeholder="Enter your name" />
<Input type="email" placeholder="email@example.com" />
<Input type="file" />
<Input disabled placeholder="Disabled" />
```

---

## Label

Form label with peer-disabled styling support.

```tsx
import { Label } from "poyraz-ui/atoms";
```

### Props

| Prop      | Type                                    | Default | Description            |
| --------- | --------------------------------------- | ------- | ---------------------- |
| `...rest` | `LabelHTMLAttributes<HTMLLabelElement>` | —       | All native label attrs |

### Examples

```tsx
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />
```

---

## Checkbox

Square checkbox (brutalist, no rounded corners) built on Radix UI.

```tsx
import { Checkbox } from "poyraz-ui/atoms";
```

### Props

| Prop              | Type                                            | Default | Description            |
| ----------------- | ----------------------------------------------- | ------- | ---------------------- |
| `checked`         | `boolean \| "indeterminate"`                    | —       | Controlled check state |
| `onCheckedChange` | `(checked: boolean \| "indeterminate") => void` | —       | Change handler         |
| `defaultChecked`  | `boolean`                                       | —       | Uncontrolled default   |
| `disabled`        | `boolean`                                       | `false` | Disabled state         |
| `required`        | `boolean`                                       | `false` | Required field         |
| `name`            | `string`                                        | —       | Form field name        |
| `value`           | `string`                                        | —       | Form field value       |

### Examples

```tsx
// Uncontrolled
<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>;

// Controlled
const [checked, setChecked] = useState(false);
<Checkbox checked={checked} onCheckedChange={setChecked} />;
```

---

## Switch

Toggle switch with square thumb (brutalist style) built on Radix UI.

```tsx
import { Switch } from "poyraz-ui/atoms";
```

### Props

| Prop              | Type                         | Default | Description          |
| ----------------- | ---------------------------- | ------- | -------------------- |
| `checked`         | `boolean`                    | —       | Controlled state     |
| `onCheckedChange` | `(checked: boolean) => void` | —       | Change handler       |
| `defaultChecked`  | `boolean`                    | —       | Uncontrolled default |
| `disabled`        | `boolean`                    | `false` | Disabled state       |
| `name`            | `string`                     | —       | Form field name      |

### Examples

```tsx
<div className="flex items-center gap-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>
```

---

## RadioGroup

Square radio buttons (not circles) built on Radix UI. Uses `RadioGroup` as wrapper and `RadioGroupItem` for each option.

```tsx
import { RadioGroup, RadioGroupItem } from "poyraz-ui/atoms";
```

### RadioGroup Props

| Prop            | Type                         | Default | Description               |
| --------------- | ---------------------------- | ------- | ------------------------- |
| `value`         | `string`                     | —       | Controlled selected value |
| `onValueChange` | `(value: string) => void`    | —       | Change handler            |
| `defaultValue`  | `string`                     | —       | Uncontrolled default      |
| `disabled`      | `boolean`                    | `false` | Disable all items         |
| `orientation`   | `"horizontal" \| "vertical"` | —       | Layout direction          |

### RadioGroupItem Props

| Prop       | Type      | Default | Description           |
| ---------- | --------- | ------- | --------------------- |
| `value`    | `string`  | —       | Item value (required) |
| `disabled` | `boolean` | `false` | Disable this item     |

### Examples

```tsx
<RadioGroup defaultValue="option1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option1" id="opt1" />
    <Label htmlFor="opt1">Option 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option2" id="opt2" />
    <Label htmlFor="opt2">Option 2</Label>
  </div>
</RadioGroup>
```

---

## Textarea

Multi-line text input with dashed border and minimum height.

```tsx
import { Textarea } from "poyraz-ui/atoms";
```

### Props

| Prop      | Type                                          | Default | Description               |
| --------- | --------------------------------------------- | ------- | ------------------------- |
| `...rest` | `TextareaHTMLAttributes<HTMLTextAreaElement>` | —       | All native textarea attrs |

### Examples

```tsx
<Textarea placeholder="Write your message..." />
<Textarea rows={6} defaultValue="Hello!" />
```

---

## Card

Container component with 5 variants and 6 sub-components.

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardImage,
} from "poyraz-ui/atoms";
```

### Card Props

| Prop      | Type                                                              | Default     | Description          |
| --------- | ----------------------------------------------------------------- | ----------- | -------------------- |
| `variant` | `"default" \| "bordered" \| "elevated" \| "highlight" \| "ghost"` | `"default"` | Visual style         |
| `...rest` | `HTMLAttributes<HTMLDivElement>`                                  | —           | All native div attrs |

### Variants

| Variant     | Description                                        |
| ----------- | -------------------------------------------------- |
| `default`   | White background, slate-300 dashed border          |
| `bordered`  | White background, slate-900 dashed border          |
| `elevated`  | Red-600 offset shadow box with hover animation     |
| `highlight` | Left red border accent (4px solid)                 |
| `ghost`     | Transparent, border and background appear on hover |

### Sub-components

| Component         | Renders | Description                                                    |
| ----------------- | ------- | -------------------------------------------------------------- |
| `CardImage`       | `<div>` | Image container with `aspect` prop (default: `"aspect-video"`) |
| `CardHeader`      | `<div>` | Header area with padding                                       |
| `CardTitle`       | `<h3>`  | Card title                                                     |
| `CardDescription` | `<p>`   | Card description text                                          |
| `CardContent`     | `<div>` | Main content area                                              |
| `CardFooter`      | `<div>` | Footer with dashed top border                                  |

### Examples

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Some description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Elevated variant with image
<Card variant="elevated">
  <CardImage>
    <img src="/image.jpg" alt="Preview" className="w-full h-full object-cover" />
  </CardImage>
  <CardHeader>
    <CardTitle>Featured</CardTitle>
  </CardHeader>
</Card>

// Highlight variant
<Card variant="highlight">
  <CardContent>
    <p>Important notice here.</p>
  </CardContent>
</Card>
```

---

## Avatar

Square avatar with image and fallback support, built on Radix UI.

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "poyraz-ui/atoms";
```

### Props

| Component        | Key Props    | Description                                   |
| ---------------- | ------------ | --------------------------------------------- |
| `Avatar`         | `className`  | Root wrapper (40×40px, square, dashed border) |
| `AvatarImage`    | `src`, `alt` | Image (object-cover)                          |
| `AvatarFallback` | `children`   | Text fallback (uppercase, centered)           |

### Examples

```tsx
<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>PA</AvatarFallback>
</Avatar>
```

---

## Skeleton

Loading placeholder with pulse animation and dashed border.

```tsx
import { Skeleton } from "poyraz-ui/atoms";
```

### Props

| Prop        | Type                             | Default | Description                |
| ----------- | -------------------------------- | ------- | -------------------------- |
| `className` | `string`                         | —       | Width/height/shape classes |
| `...rest`   | `HTMLAttributes<HTMLDivElement>` | —       | All native div attrs       |

### Examples

```tsx
<Skeleton className="h-4 w-48" />
<Skeleton className="h-10 w-10" />  {/* Avatar placeholder */}
<Skeleton className="h-24 w-full" /> {/* Card placeholder */}
```

---

## Separator

Horizontal or vertical dashed line built on Radix UI.

```tsx
import { Separator } from "poyraz-ui/atoms";
```

### Props

| Prop          | Type                         | Default        | Description                                |
| ------------- | ---------------------------- | -------------- | ------------------------------------------ |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direction                                  |
| `decorative`  | `boolean`                    | `true`         | If false, adds `role="separator"` for a11y |

### Examples

```tsx
<Separator />
<Separator orientation="vertical" className="h-6" />
```

---

## ScrollArea

Custom scrollable container with pure CSS-styled scrollbar.

```tsx
import { ScrollArea } from "poyraz-ui/atoms";
```

### Props

| Prop            | Type                                   | Default      | Description                                |
| --------------- | -------------------------------------- | ------------ | ------------------------------------------ |
| `maxHeight`     | `string \| number`                     | `320`        | Max height before scrolling (px if number) |
| `orientation`   | `"vertical" \| "horizontal" \| "both"` | `"vertical"` | Scrollable axis                            |
| `scrollbarSize` | `"sm" \| "md" \| "lg"`                 | `"md"`       | Scrollbar width: 6px / 10px / 14px         |
| `...rest`       | `HTMLAttributes<HTMLDivElement>`       | —            | All native div attrs                       |

### Examples

```tsx
<ScrollArea maxHeight={400}>
  <div>{/* Long content */}</div>
</ScrollArea>

<ScrollArea orientation="horizontal" maxHeight="auto">
  <div className="flex gap-4 w-[2000px]">{/* Wide content */}</div>
</ScrollArea>
```

---

## Typography

Polymorphic typography component with 11 variants. Automatically selects the correct HTML element based on variant.

```tsx
import { Typography } from "poyraz-ui/atoms";
```

### Props

| Prop            | Type                                                                                                       | Default             | Description                                |
| --------------- | ---------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------ |
| `variant`       | `"h1" \| "h2" \| "h3" \| "h4" \| "p" \| "blockquote" \| "list" \| "lead" \| "large" \| "small" \| "muted"` | `"p"`               | Style and default element                  |
| `component`     | `React.ElementType`                                                                                        | Auto (from variant) | Override rendered HTML element             |
| `secondaryFont` | `boolean`                                                                                                  | `false`             | Use decorative `font-secondary` (Agbalumo) |
| `...rest`       | `HTMLAttributes<HTMLElement>`                                                                              | —                   | All native element attrs                   |

### Variant → Default Element

| Variant      | Element        | Description                 |
| ------------ | -------------- | --------------------------- |
| `h1`         | `<h1>`         | 4xl/5xl extrabold heading   |
| `h2`         | `<h2>`         | 3xl semibold heading        |
| `h3`         | `<h3>`         | 2xl semibold heading        |
| `h4`         | `<h4>`         | xl semibold heading         |
| `p`          | `<p>`          | Body paragraph              |
| `blockquote` | `<blockquote>` | Italicized with left border |
| `list`       | `<ul>`         | Bulleted list               |
| `lead`       | `<p>`          | xl muted lead text          |
| `large`      | `<p>`          | lg semibold                 |
| `small`      | `<p>`          | sm medium                   |
| `muted`      | `<p>`          | sm muted text               |

### Examples

```tsx
<Typography variant="h1">Page Title</Typography>
<Typography variant="h2">Section Heading</Typography>
<Typography variant="p">Body text paragraph.</Typography>
<Typography variant="blockquote">A notable quote.</Typography>
<Typography variant="lead">Introductory lead text.</Typography>
<Typography variant="muted">Subtle helper text.</Typography>

// Override element
<Typography variant="h1" component="span">Styled as h1, renders as span</Typography>

// Secondary font
<Typography variant="h2" secondaryFont>Decorative Heading</Typography>
```

---

## Logo

Brand logo with a red offset shadow and optional link wrapper.

```tsx
import { Logo } from "poyraz-ui/atoms";
```

### Props

| Prop     | Type     | Default             | Description                                |
| -------- | -------- | ------------------- | ------------------------------------------ |
| `href`   | `string` | `undefined`         | If set, wraps in `<a>`; otherwise `<span>` |
| `src`    | `string` | `"/logo/logo.jpeg"` | Image source URL                           |
| `width`  | `number` | `48`                | Image width (px)                           |
| `height` | `number` | `48`                | Image height (px)                          |
| `alt`    | `string` | `"Poyraz Logo"`     | Alt text                                   |

### Examples

```tsx
<Logo />
<Logo href="/" src="/my-logo.png" alt="My App" />
<Logo width={64} height={64} />
```

---

## Form Fields

5 specialized input components built on top of `Input`. Each wraps the base input with icons, buttons, or formatting.

```tsx
import {
  NumberInput,
  SearchInput,
  PhoneInput,
  PasswordInput,
  UrlInput,
} from "poyraz-ui/atoms";
```

### NumberInput

Stepper input with `−` / `+` buttons.

| Prop       | Type                      | Default     | Description                         |
| ---------- | ------------------------- | ----------- | ----------------------------------- |
| `value`    | `number`                  | `0`         | Controlled value                    |
| `onChange` | `(value: number) => void` | —           | Change handler (clamped to min/max) |
| `min`      | `number`                  | `undefined` | Minimum                             |
| `max`      | `number`                  | `undefined` | Maximum                             |
| `step`     | `number`                  | `1`         | Increment step                      |

```tsx
const [qty, setQty] = useState(1);
<NumberInput value={qty} onChange={setQty} min={1} max={99} />;
```

### SearchInput

Input with search icon and Enter-key callback.

| Prop       | Type                      | Default | Description        |
| ---------- | ------------------------- | ------- | ------------------ |
| `onSearch` | `(value: string) => void` | —       | Fires on Enter key |

```tsx
<SearchInput placeholder="Search docs..." onSearch={(q) => console.log(q)} />
```

### PhoneInput

Input with country code prefix and phone icon.

| Prop          | Type     | Default | Description    |
| ------------- | -------- | ------- | -------------- |
| `countryCode` | `string` | `"+1"`  | Display prefix |

```tsx
<PhoneInput countryCode="+90" placeholder="555 123 4567" />
```

### PasswordInput

Input with eye toggle to show/hide password.

```tsx
<PasswordInput placeholder="Enter password" />
```

### UrlInput

Input with globe icon and "https://" prefix.

```tsx
<UrlInput placeholder="example.com" />
```

---

## BgPattern

10 decorative CSS background patterns and 1 radial gradient overlay.

```tsx
import {
  PatternDots,
  PatternGrid,
  PatternLines,
  PatternDiagonal,
  PatternCross,
  PatternCheckerboard,
  PatternDiamond,
  PatternZigzag,
  PatternDashedGrid,
  PatternRadial,
} from "poyraz-ui/atoms";
```

### Shared Props (`BgPatternProps`)

| Prop      | Type      | Default            | Description                                |
| --------- | --------- | ------------------ | ------------------------------------------ |
| `color`   | `string`  | `"currentColor"`   | CSS color for the pattern                  |
| `opacity` | `number`  | varies (0.04–0.08) | Pattern opacity                            |
| `size`    | `number`  | varies (16–48px)   | Pattern spacing                            |
| `overlay` | `boolean` | `false`            | If true, positioned `absolute inset-0 z-0` |

### Available Patterns

| Component             | Default Size | Default Opacity | Pattern                    |
| --------------------- | ------------ | --------------- | -------------------------- |
| `PatternDots`         | 24           | 0.08            | Dot grid (radial-gradient) |
| `PatternGrid`         | 40           | 0.06            | Square grid                |
| `PatternLines`        | 20           | 0.06            | Horizontal lines           |
| `PatternDiagonal`     | 16           | 0.06            | 45° diagonal stripes       |
| `PatternCross`        | 32           | 0.07            | Cross / plus pattern       |
| `PatternCheckerboard` | 32           | 0.04            | Checkerboard               |
| `PatternDiamond`      | 28           | 0.05            | Diamond shapes             |
| `PatternZigzag`       | 20           | 0.06            | Zigzag stripes             |
| `PatternDashedGrid`   | 48           | 0.08            | Dashed grid lines          |

### PatternRadial (different interface)

| Prop      | Type      | Default                  | Description          |
| --------- | --------- | ------------------------ | -------------------- |
| `from`    | `string`  | `"rgba(220,38,38,0.08)"` | Center color         |
| `to`      | `string`  | `"transparent"`          | Edge color           |
| `opacity` | `number`  | `1`                      | Overall opacity      |
| `overlay` | `boolean` | `false`                  | Absolute positioning |

### Examples

```tsx
{
  /* Background pattern behind content */
}
<div className="relative">
  <PatternDots overlay color="#dc2626" opacity={0.05} />
  <div className="relative z-10">Content on top</div>
</div>;

{
  /* Inline pattern section */
}
<PatternGrid className="w-full h-64" color="slate" size={32} />;

{
  /* Radial gradient */
}
<PatternRadial overlay from="rgba(220,38,38,0.1)" to="transparent" />;
```

---

# Molecules

Groups of atoms that work together to form reusable UI patterns.

---

## Accordion

Collapsible content panels built on Radix UI.

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "poyraz-ui/molecules";
```

### Accordion Props

| Prop            | Type                                  | Default | Description                           |
| --------------- | ------------------------------------- | ------- | ------------------------------------- |
| `type`          | `"single" \| "multiple"`              | —       | Single or multiple open items         |
| `collapsible`   | `boolean`                             | `false` | Allow closing all items (single mode) |
| `defaultValue`  | `string \| string[]`                  | —       | Default open item(s)                  |
| `value`         | `string \| string[]`                  | —       | Controlled open item(s)               |
| `onValueChange` | `(value: string \| string[]) => void` | —       | Change handler                        |

### Examples

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is Poyraz UI?</AccordionTrigger>
    <AccordionContent>A brutalist UI component library.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How to install?</AccordionTrigger>
    <AccordionContent>Run: pnpm add poyraz-ui</AccordionContent>
  </AccordionItem>
</Accordion>;

{
  /* Multiple open */
}
<Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
  {/* ... */}
</Accordion>;
```

---

## Alert

Notification banner with icon, title, and description. 5 variants with auto-selected icons.

```tsx
import { Alert, AlertTitle, AlertDescription } from "poyraz-ui/molecules";
```

### Props

| Prop      | Type                                                             | Default          | Description                   |
| --------- | ---------------------------------------------------------------- | ---------------- | ----------------------------- |
| `variant` | `"default" \| "info" \| "success" \| "warning" \| "destructive"` | `"default"`      | Visual style and default icon |
| `icon`    | `ReactNode`                                                      | Auto per variant | Override the default icon     |

### Default Icons per Variant

| Variant       | Icon            | Color |
| ------------- | --------------- | ----- |
| `default`     | `Terminal`      | Slate |
| `info`        | `Info`          | Blue  |
| `success`     | `CheckCircle2`  | Green |
| `warning`     | `AlertTriangle` | Amber |
| `destructive` | `AlertCircle`   | Red   |

### Examples

```tsx
<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>This is a default alert.</AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>

{/* Custom icon */}
<Alert variant="info" icon={<Rocket className="h-4 w-4" />}>
  <AlertTitle>New Feature</AlertTitle>
  <AlertDescription>Check out the latest update.</AlertDescription>
</Alert>
```

---

## Autocomplete

Searchable combobox with single/multi select, free-form input, grouped options, and full keyboard navigation.

```tsx
import { Autocomplete } from "poyraz-ui/molecules";
import type {
  AutocompleteOption,
  AutocompleteProps,
} from "poyraz-ui/molecules";
```

### AutocompleteOption

```ts
interface AutocompleteOption {
  value: string; // Unique identifier
  label: string; // Display text
  disabled?: boolean;
  group?: string; // Group heading
}
```

### Props

| Prop             | Type                                  | Default                   | Description                |
| ---------------- | ------------------------------------- | ------------------------- | -------------------------- |
| `options`        | `AutocompleteOption[]`                | **required**              | Available options          |
| `value`          | `string \| string[]`                  | —                         | Selected value(s)          |
| `onValueChange`  | `(value: string \| string[]) => void` | —                         | Selection handler          |
| `placeholder`    | `string`                              | `"Search…"`               | Input placeholder          |
| `multiple`       | `boolean`                             | `false`                   | Enable multi-select (tags) |
| `freeSolo`       | `boolean`                             | `false`                   | Allow free-form values     |
| `filterFn`       | `(option, query) => boolean`          | Case-insensitive includes | Custom filter function     |
| `onSearchChange` | `(query: string) => void`             | —                         | Query change callback      |
| `loading`        | `boolean`                             | `false`                   | Show loading spinner       |
| `disabled`       | `boolean`                             | `false`                   | Disabled state             |
| `emptyText`      | `string`                              | `"No results found."`     | Empty state message        |
| `className`      | `string`                              | —                         | Wrapper class              |

### Examples

```tsx
const countries = [
  { value: "tr", label: "Turkey" },
  { value: "us", label: "United States" },
  { value: "de", label: "Germany" },
];

// Single select
<Autocomplete
  options={countries}
  value={selected}
  onValueChange={setSelected}
  placeholder="Select country..."
/>

// Multi select
<Autocomplete
  options={countries}
  value={selectedList}
  onValueChange={setSelectedList}
  multiple
  placeholder="Select countries..."
/>

// Free-form input
<Autocomplete
  options={tags}
  value={selectedTags}
  onValueChange={setSelectedTags}
  multiple
  freeSolo
  placeholder="Add tags..."
/>

// Grouped options
const options = [
  { value: "react", label: "React", group: "Frontend" },
  { value: "vue", label: "Vue", group: "Frontend" },
  { value: "node", label: "Node.js", group: "Backend" },
];
<Autocomplete options={options} value={val} onValueChange={setVal} />
```

---

## Breadcrumb

Navigation breadcrumb trail with customizable separator.

```tsx
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "poyraz-ui/molecules";
```

### Props

| Component             | Key Props               | Description                                     |
| --------------------- | ----------------------- | ----------------------------------------------- |
| `Breadcrumb`          | `separator?: ReactNode` | Root `<nav>`                                    |
| `BreadcrumbLink`      | `href`, `asChild`       | Link (renders `<a>` or `<span>` with `asChild`) |
| `BreadcrumbPage`      | —                       | Current page (non-clickable)                    |
| `BreadcrumbSeparator` | `children`              | Default: `ChevronRight` icon                    |
| `BreadcrumbEllipsis`  | —                       | Ellipsis indicator (`...`)                      |

### Examples

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Button</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

## Calendar

Date selection calendar with day, month, and year drill-down views.

```tsx
import { Calendar } from "poyraz-ui/molecules";
```

### Props

| Prop        | Type                   | Default     | Description              |
| ----------- | ---------------------- | ----------- | ------------------------ |
| `selected`  | `Date`                 | `undefined` | Currently selected date  |
| `onSelect`  | `(date: Date) => void` | —           | Date pick handler        |
| `minDate`   | `Date`                 | `undefined` | Earliest selectable date |
| `maxDate`   | `Date`                 | `undefined` | Latest selectable date   |
| `className` | `string`               | —           | Wrapper class            |

### Examples

```tsx
const [date, setDate] = useState<Date>();

<Calendar selected={date} onSelect={setDate} />

// With date constraints
<Calendar
  selected={date}
  onSelect={setDate}
  minDate={new Date(2024, 0, 1)}
  maxDate={new Date(2024, 11, 31)}
/>
```

---

## Command Palette

Keyboard-driven command search dialog built on Radix Dialog.

```tsx
import {
  CommandPalette,
  CommandPaletteTrigger,
  CommandPaletteContent,
  CommandPaletteInput,
  CommandPaletteList,
  CommandPaletteGroup,
  CommandPaletteItem,
  CommandPaletteEmpty,
  CommandPaletteSeparator,
  CommandPaletteFooter,
  useCommandPalette,
} from "poyraz-ui/molecules";
```

### Sub-components

| Component                 | Key Props                      | Description                                            |
| ------------------------- | ------------------------------ | ------------------------------------------------------ |
| `CommandPalette`          | —                              | Root dialog wrapper                                    |
| `CommandPaletteTrigger`   | —                              | Trigger element                                        |
| `CommandPaletteContent`   | `className`                    | Dialog content                                         |
| `CommandPaletteInput`     | `onValueChange`                | Search input with clear button                         |
| `CommandPaletteList`      | —                              | Scrollable results container                           |
| `CommandPaletteGroup`     | `heading: string`              | Labeled section                                        |
| `CommandPaletteItem`      | `shortcut`, `disabled`, `icon` | Clickable item with optional keyboard shortcut display |
| `CommandPaletteEmpty`     | —                              | Empty state                                            |
| `CommandPaletteSeparator` | —                              | Divider                                                |
| `CommandPaletteFooter`    | —                              | Footer section                                         |

### Hook: `useCommandPalette()`

Returns `{ search: string, setSearch: Dispatch<SetStateAction<string>> }` for accessing the search state.

### Examples

```tsx
<CommandPalette>
  <CommandPaletteTrigger>
    <Button variant="outline">Open Command Palette</Button>
  </CommandPaletteTrigger>
  <CommandPaletteContent>
    <CommandPaletteInput placeholder="Type a command..." />
    <CommandPaletteList>
      <CommandPaletteGroup heading="Actions">
        <CommandPaletteItem icon={<Plus />} shortcut="⌘N">
          New File
        </CommandPaletteItem>
        <CommandPaletteItem icon={<Search />} shortcut="⌘F">
          Find
        </CommandPaletteItem>
      </CommandPaletteGroup>
      <CommandPaletteSeparator />
      <CommandPaletteGroup heading="Navigation">
        <CommandPaletteItem>Go to Dashboard</CommandPaletteItem>
        <CommandPaletteItem>Go to Settings</CommandPaletteItem>
      </CommandPaletteGroup>
      <CommandPaletteEmpty>No results found.</CommandPaletteEmpty>
    </CommandPaletteList>
    <CommandPaletteFooter>
      <span>Press Esc to close</span>
    </CommandPaletteFooter>
  </CommandPaletteContent>
</CommandPalette>
```

---

## Date Picker

Popover-based date picker combining `Popover`, `Calendar`, and `Button`.

```tsx
import { DatePicker } from "poyraz-ui/molecules";
```

### Props

| Prop          | Type                     | Default           | Description              |
| ------------- | ------------------------ | ----------------- | ------------------------ |
| `selected`    | `Date`                   | `undefined`       | Selected date            |
| `onSelect`    | `(date: Date) => void`   | —                 | Date selection handler   |
| `minDate`     | `Date`                   | `undefined`       | Earliest selectable      |
| `maxDate`     | `Date`                   | `undefined`       | Latest selectable        |
| `placeholder` | `string`                 | `"Pick a date"`   | Button placeholder text  |
| `formatDate`  | `(date: Date) => string` | en-US long format | Custom display formatter |
| `disabled`    | `boolean`                | `false`           | Disabled state           |
| `className`   | `string`                 | —                 | Trigger button class     |

### Examples

```tsx
const [date, setDate] = useState<Date>();

<DatePicker selected={date} onSelect={setDate} />

<DatePicker
  selected={date}
  onSelect={setDate}
  placeholder="Select birthday"
  minDate={new Date(1950, 0, 1)}
  maxDate={new Date()}
  formatDate={(d) => d.toLocaleDateString("tr-TR")}
/>
```

---

## Dialog

Generic modal dialog built on Radix UI.

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogOverlay,
  DialogPortal,
} from "poyraz-ui/molecules";
```

### Examples

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>This is the dialog description.</DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <p>Dialog body content</p>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## Drawer

Bottom sheet drawer built on `vaul`.

```tsx
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerOverlay,
  DrawerPortal,
} from "poyraz-ui/molecules";
```

### Drawer Props

| Prop                    | Type      | Default | Description                        |
| ----------------------- | --------- | ------- | ---------------------------------- |
| `shouldScaleBackground` | `boolean` | `true`  | Scale background content when open |

### Examples

```tsx
<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Drawer Title</DrawerTitle>
      <DrawerDescription>Swipe down to close.</DrawerDescription>
    </DrawerHeader>
    <div className="p-4">
      <p>Drawer content here.</p>
    </div>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

---

## Dropdown Menu

Context menu / dropdown built on Radix UI with sub-menus, checkbox items, and radio items.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "poyraz-ui/molecules";
```

### Key Props

| Component                  | Key Props                    | Description                           |
| -------------------------- | ---------------------------- | ------------------------------------- |
| `DropdownMenuContent`      | `sideOffset` (default: 4)    | Content container                     |
| `DropdownMenuItem`         | `inset`                      | Menu item (`inset` adds left padding) |
| `DropdownMenuCheckboxItem` | `checked`, `onCheckedChange` | Checkbox toggle                       |
| `DropdownMenuRadioItem`    | `value`                      | Radio selection                       |
| `DropdownMenuShortcut`     | —                            | Keyboard shortcut display             |
| `DropdownMenuSubTrigger`   | `inset`                      | Sub-menu trigger                      |

### Examples

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        Profile
        <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>Help</DropdownMenuItem>
        <DropdownMenuItem>Feedback</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

## Form

Full react-hook-form integration with auto-wired accessibility attributes.

```tsx
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  useFormField,
} from "poyraz-ui/molecules";
```

### Sub-components

| Component         | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `Form`            | Wraps `FormProvider` from react-hook-form                          |
| `FormField`       | Wraps `Controller` (generic: `<TFieldValues, TName>`)              |
| `FormItem`        | Field container (auto-generates unique ID)                         |
| `FormLabel`       | Label (turns red on validation error)                              |
| `FormControl`     | Slot wrapper (auto-wires `aria-invalid`, `aria-describedby`, `id`) |
| `FormDescription` | Helper text                                                        |
| `FormMessage`     | Error message (shows `error.message` from react-hook-form)         |

### Hook: `useFormField()`

Returns `{ id, name, formItemId, formDescriptionId, formMessageId, ...fieldState }`.

### Examples

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
  name: z.string().min(2, "Name is too short"),
});

function MyForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "", name: "" },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Your full name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

---

## Hover Card

Content preview card that appears on hover, built on Radix UI.

```tsx
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "poyraz-ui/molecules";
```

### Props

| Component          | Key Props                                                  | Description       |
| ------------------ | ---------------------------------------------------------- | ----------------- |
| `HoverCardContent` | `align` (default: `"center"`), `sideOffset` (default: `4`) | Card content area |

### Examples

```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <a href="/profile" className="underline">
      @poyraz
    </a>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="/avatar.jpg" />
        <AvatarFallback>PA</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-bold">Poyraz Avsever</p>
        <p className="text-sm text-slate-500">Developer</p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

---

## Modal

Enhanced dialog with size and position variants, built on Radix Dialog + CVA.

```tsx
import {
  Modal,
  ModalTrigger,
  ModalClose,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
  modalContentVariants,
} from "poyraz-ui/molecules";
```

### ModalContent Props

| Prop        | Type                                          | Default     | Description             |
| ----------- | --------------------------------------------- | ----------- | ----------------------- |
| `size`      | `"sm" \| "default" \| "lg" \| "xl" \| "full"` | `"default"` | Modal width             |
| `position`  | `"center" \| "top"`                           | `"center"`  | Vertical alignment      |
| `hideClose` | `boolean`                                     | `false`     | Hide the X close button |

### Size Details

| Size      | Max Width                   |
| --------- | --------------------------- |
| `sm`      | `max-w-sm`                  |
| `default` | `max-w-lg`                  |
| `lg`      | `max-w-2xl`                 |
| `xl`      | `max-w-4xl`                 |
| `full`    | Viewport minus 2rem padding |

### Examples

```tsx
<Modal>
  <ModalTrigger asChild>
    <Button>Open Modal</Button>
  </ModalTrigger>
  <ModalContent size="lg">
    <ModalHeader>
      <ModalTitle>Large Modal</ModalTitle>
      <ModalDescription>This is a large modal.</ModalDescription>
    </ModalHeader>
    <div className="p-6">Modal body content.</div>
    <ModalFooter>
      <ModalClose asChild>
        <Button variant="outline">Cancel</Button>
      </ModalClose>
      <Button>Save</Button>
    </ModalFooter>
  </ModalContent>
</Modal>;

{
  /* Full screen modal without close button */
}
<Modal>
  <ModalTrigger asChild>
    <Button>Full Screen</Button>
  </ModalTrigger>
  <ModalContent size="full" hideClose>
    {/* ... */}
  </ModalContent>
</Modal>;
```

---

## Pagination

Page navigation controls using Button variants.

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "poyraz-ui/molecules";
```

### PaginationLink Props

| Prop       | Type                  | Default  | Description                                          |
| ---------- | --------------------- | -------- | ---------------------------------------------------- |
| `isActive` | `boolean`             | `false`  | Active page (uses `outline` variant with background) |
| `size`     | `ButtonProps["size"]` | `"icon"` | Button size                                          |
| `href`     | `string`              | —        | Page URL                                             |

### Examples

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="/page/1" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/page/1">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/page/2" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/page/3">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="/page/3" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

---

## Popover

Floating content container built on Radix UI.

```tsx
import { Popover, PopoverTrigger, PopoverContent } from "poyraz-ui/molecules";
```

### PopoverContent Props

| Prop         | Type                           | Default    | Description                |
| ------------ | ------------------------------ | ---------- | -------------------------- |
| `align`      | `"start" \| "center" \| "end"` | `"center"` | Horizontal alignment       |
| `sideOffset` | `number`                       | `4`        | Distance from trigger (px) |

### Examples

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-bold">Settings</h4>
      <p className="text-sm">Adjust your preferences.</p>
    </div>
  </PopoverContent>
</Popover>
```

---

## Select

Styled native-like select dropdown built on Radix UI.

```tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "poyraz-ui/molecules";
```

### Key Props

| Component       | Key Props                                | Description                 |
| --------------- | ---------------------------------------- | --------------------------- |
| `Select`        | `value`, `onValueChange`, `defaultValue` | Root                        |
| `SelectTrigger` | `className`                              | Trigger button              |
| `SelectValue`   | `placeholder`                            | Display value / placeholder |
| `SelectContent` | `position` (default: `"popper"`)         | Dropdown content            |
| `SelectItem`    | `value`                                  | Selectable option           |
| `SelectLabel`   | —                                        | Group label                 |

### Examples

```tsx
<Select value={value} onValueChange={setValue}>
  <SelectTrigger className="w-48">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="cherry">Cherry</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Vegetables</SelectLabel>
      <SelectItem value="carrot">Carrot</SelectItem>
      <SelectItem value="celery">Celery</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

---

## Sheet

Slide-in panel from any side of the screen, built on Radix Dialog + CVA.

```tsx
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
  SheetOverlay,
  SheetPortal,
  sheetContentVariants,
} from "poyraz-ui/molecules";
```

### SheetContent Props

| Prop   | Type                                     | Default   | Description        |
| ------ | ---------------------------------------- | --------- | ------------------ |
| `side` | `"top" \| "bottom" \| "left" \| "right"` | `"right"` | Slide-in direction |

### Examples

```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>Sheet description.</SheetDescription>
    </SheetHeader>
    <div className="py-4">
      <p>Sheet body content.</p>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">Close</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>;

{
  /* Left side */
}
<Sheet>
  <SheetTrigger asChild>
    <Button>Open Left</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Navigation</SheetTitle>
    </SheetHeader>
    {/* ... */}
  </SheetContent>
</Sheet>;
```

---

## Sonner (Toaster)

Toast notification system using the `sonner` library with brutalist styling.

```tsx
import { Toaster, toast } from "poyraz-ui/molecules";
```

### Setup

Add `<Toaster />` once in your app root:

```tsx
// app/layout.tsx or _app.tsx
import { Toaster } from "poyraz-ui/molecules";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
```

### Usage

```tsx
import { toast } from "poyraz-ui/molecules";

// Basic
toast("Event has been created.");

// Success
toast.success("Profile updated!");

// Error
toast.error("Something went wrong.");

// Warning
toast.warning("This action is irreversible.");

// Info
toast.info("New version available.");

// With description
toast("File uploaded", {
  description: "image.png was uploaded successfully.",
});

// With action
toast("Event created", {
  action: {
    label: "Undo",
    onClick: () => undoAction(),
  },
});
```

---

## Tabs

Tab-based content switching built on Radix UI.

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "poyraz-ui/molecules";
```

### Key Props

| Component     | Key Props                                | Description                          |
| ------------- | ---------------------------------------- | ------------------------------------ |
| `Tabs`        | `value`, `onValueChange`, `defaultValue` | Root                                 |
| `TabsTrigger` | `value`                                  | Tab button (dashed border on active) |
| `TabsContent` | `value`                                  | Content panel                        |

### Examples

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Settings</TabsTrigger>
    <TabsTrigger value="tab3">Advanced</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Overview content.</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Settings content.</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Advanced content.</p>
  </TabsContent>
</Tabs>
```

---

## Tooltip

Hover tooltip built on Radix UI.

```tsx
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "poyraz-ui/molecules";
```

### Setup

Wrap your app (or a section) with `TooltipProvider`:

```tsx
<TooltipProvider>{/* tooltips work in here */}</TooltipProvider>
```

### TooltipContent Props

| Prop         | Type     | Default | Description           |
| ------------ | -------- | ------- | --------------------- |
| `sideOffset` | `number` | `4`     | Distance from trigger |

### Examples

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline" size="icon">
        <Info className="h-4 w-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>This is a tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

# Organisms

Complex, self-contained UI sections composed of atoms and molecules.

---

## Navbar

Responsive navigation bar with desktop mega-menus, mobile slide-in panel, search, auto-hide on scroll, and sticky support. Built on Radix `NavigationMenu`.

```tsx
import {
  Navbar,
  NavbarTopBar,
  NavbarMain,
  NavbarBrand,
  NavbarLinks,
  NavbarLink,
  NavbarDropdown,
  NavbarDropdownTrigger,
  NavbarMegaMenu,
  NavbarMegaMenuItem,
  NavbarActions,
  NavbarMobileToggle,
  NavbarMobileMenu,
  NavbarMobileLink,
  NavbarMobileGroup,
  NavbarMobileActions,
  NavbarSearch,
  NavbarDivider,
  navbarVariants,
  useNavbar,
} from "poyraz-ui/organisms";
```

### Navbar Props

| Prop                 | Type                                                    | Default               | Description                              |
| -------------------- | ------------------------------------------------------- | --------------------- | ---------------------------------------- |
| `variant`            | `"default" \| "minimal" \| "transparent" \| "bordered"` | `"default"`           | Visual style                             |
| `sticky`             | `boolean`                                               | `false`               | Sticky position                          |
| `autoHide`           | `boolean`                                               | `false`               | Hide on scroll-down, reveal on scroll-up |
| `containerClassName` | `string`                                                | `"max-w-5xl mx-auto"` | Inner width constraint                   |

### Variants

| Variant       | Description                              |
| ------------- | ---------------------------------------- |
| `default`     | White background, slate text             |
| `minimal`     | White background, minimal styling        |
| `transparent` | Transparent background                   |
| `bordered`    | White background with full dashed border |

### Sub-components

| Component               | Key Props                        | Description                                    |
| ----------------------- | -------------------------------- | ---------------------------------------------- |
| `NavbarTopBar`          | —                                | Slim bar above nav (announcements)             |
| `NavbarMain`            | —                                | Primary row (brand + links + actions)          |
| `NavbarBrand`           | `href?: string`                  | Brand/logo slot                                |
| `NavbarLinks`           | —                                | Desktop nav links (wraps Radix NavigationMenu) |
| `NavbarLink`            | `href`                           | Single desktop link                            |
| `NavbarDropdown`        | `label: string`                  | Dropdown wrapper                               |
| `NavbarDropdownTrigger` | —                                | Dropdown trigger with chevron                  |
| `NavbarMegaMenu`        | —                                | Grid mega-menu panel                           |
| `NavbarMegaMenuItem`    | `title`, `description?`          | Mega menu link card                            |
| `NavbarActions`         | —                                | Right-side action buttons                      |
| `NavbarMobileToggle`    | —                                | Hamburger / X button                           |
| `NavbarMobileMenu`      | —                                | Mobile slide-in panel                          |
| `NavbarMobileLink`      | `href`, `active?`                | Mobile menu link                               |
| `NavbarMobileGroup`     | `label?: string`                 | Grouped mobile links                           |
| `NavbarMobileActions`   | —                                | Mobile CTA buttons                             |
| `NavbarSearch`          | `onSearch?`, `wrapperClassName?` | Inline search                                  |
| `NavbarDivider`         | —                                | Vertical separator                             |

### Hook: `useNavbar()`

Returns `{ mobileOpen, setMobileOpen, variant, containerClassName }`.

### Examples

```tsx
<Navbar variant="bordered" sticky autoHide>
  <NavbarTopBar>
    <p className="text-sm text-center">🎉 New release available!</p>
  </NavbarTopBar>
  <NavbarMain>
    <NavbarBrand href="/">
      <Logo />
    </NavbarBrand>

    <NavbarLinks>
      <NavbarLink href="/docs">Docs</NavbarLink>
      <NavbarLink href="/blog">Blog</NavbarLink>
      <NavbarDropdown label="Components">
        <NavbarMegaMenu>
          <NavbarMegaMenuItem
            title="Button"
            description="A versatile button component"
          />
          <NavbarMegaMenuItem
            title="Card"
            description="Content container with variants"
          />
        </NavbarMegaMenu>
      </NavbarDropdown>
    </NavbarLinks>

    <NavbarActions>
      <NavbarSearch onSearch={(q) => console.log(q)} />
      <Button size="sm">Sign In</Button>
    </NavbarActions>

    <NavbarMobileToggle />
  </NavbarMain>

  <NavbarMobileMenu>
    <NavbarMobileGroup label="Navigation">
      <NavbarMobileLink href="/docs">Docs</NavbarMobileLink>
      <NavbarMobileLink href="/blog">Blog</NavbarMobileLink>
    </NavbarMobileGroup>
    <NavbarMobileActions>
      <Button className="w-full">Sign In</Button>
    </NavbarMobileActions>
  </NavbarMobileMenu>
</Navbar>
```

---

## Sidebar

Collapsible/floating sidebar with nested sub-menus, search, user profile, and tooltip hints when collapsed.

```tsx
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarFooter,
  SidebarTrigger,
  SidebarSearch,
  SidebarSubMenu,
  SidebarSubMenuItem,
  SidebarUserProfile,
  useSidebar,
  sidebarVariants,
} from "poyraz-ui/organisms";
```

### Sidebar Props

| Prop               | Type                                                                          | Default     | Description             |
| ------------------ | ----------------------------------------------------------------------------- | ----------- | ----------------------- |
| `variant`          | `"default" \| "collapsible" \| "floating" \| "mini" \| "bordered" \| "inset"` | `"default"` | Visual style & behavior |
| `defaultCollapsed` | `boolean`                                                                     | `false`     | Initial collapsed state |

### Variants

| Variant       | Width          | Description                               |
| ------------- | -------------- | ----------------------------------------- |
| `default`     | 256px (`w-64`) | Standard sidebar with right dashed border |
| `collapsible` | 256px ↔ 64px   | Toggle between full and icon-only         |
| `floating`    | 288px (`w-72`) | Fixed overlay with backdrop               |
| `mini`        | 64px (`w-16`)  | Always icon-only                          |
| `bordered`    | 256px          | Full dashed border on all sides           |
| `inset`       | 256px          | Muted background with rounded border      |

### Sub-components

| Component            | Key Props                                  | Description                                   |
| -------------------- | ------------------------------------------ | --------------------------------------------- |
| `SidebarHeader`      | —                                          | Top header area                               |
| `SidebarContent`     | —                                          | Scrollable content area                       |
| `SidebarGroup`       | —                                          | Section group wrapper                         |
| `SidebarGroupLabel`  | —                                          | Uppercase group label (hidden when collapsed) |
| `SidebarMenu`        | —                                          | `<ul>` list for items                         |
| `SidebarMenuItem`    | `active?`, `icon?`, `badge?`, `href?`      | Menu item with tooltip when collapsed         |
| `SidebarSeparator`   | —                                          | Dashed horizontal rule                        |
| `SidebarFooter`      | —                                          | Bottom area                                   |
| `SidebarTrigger`     | `action?: "collapse" \| "mobile"`          | Toggle button                                 |
| `SidebarSearch`      | `onSearch?`                                | Search input (hidden when collapsed)          |
| `SidebarSubMenu`     | `label`, `icon?`, `defaultOpen?`           | Expandable nested section                     |
| `SidebarSubMenuItem` | `active?`, `href?`                         | Nested menu item                              |
| `SidebarUserProfile` | `name`, `role?`, `avatarUrl?`, `initials?` | User profile display                          |

### Hook: `useSidebar()`

Returns `{ collapsed, setCollapsed, mobileOpen, setMobileOpen, variant }`.

### Examples

```tsx
<Sidebar variant="collapsible">
  <SidebarHeader>
    <Logo />
    <SidebarTrigger action="collapse" />
  </SidebarHeader>

  <SidebarSearch onSearch={(q) => console.log(q)} />

  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel>Main</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem href="/dashboard" icon={<LayoutDashboard />} active>
          Dashboard
        </SidebarMenuItem>
        <SidebarMenuItem
          href="/analytics"
          icon={<BarChart />}
          badge={<Badge variant="secondary">New</Badge>}
        >
          Analytics
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>

    <SidebarSeparator />

    <SidebarGroup>
      <SidebarGroupLabel>Settings</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarSubMenu label="Account" icon={<User />}>
          <SidebarSubMenuItem href="/profile" active>
            Profile
          </SidebarSubMenuItem>
          <SidebarSubMenuItem href="/security">Security</SidebarSubMenuItem>
        </SidebarSubMenu>
      </SidebarMenu>
    </SidebarGroup>
  </SidebarContent>

  <SidebarFooter>
    <SidebarUserProfile
      name="Poyraz Avsever"
      role="Developer"
      avatarUrl="/avatar.jpg"
      initials="PA"
    />
  </SidebarFooter>
</Sidebar>
```

---

## Footer

Multi-section page footer with grid layout, social links, newsletter form, and variants.

```tsx
import {
  Footer,
  FooterGrid,
  FooterSection,
  FooterHeading,
  FooterLink,
  FooterBrand,
  FooterSocials,
  FooterSocialLink,
  FooterNewsletter,
  FooterDivider,
  FooterBottom,
  FooterBottomLinks,
  footerVariants,
} from "poyraz-ui/organisms";
```

### Footer Props

| Prop                 | Type                                                          | Default               | Description      |
| -------------------- | ------------------------------------------------------------- | --------------------- | ---------------- |
| `variant`            | `"full" \| "compact" \| "branded" \| "centered" \| "minimal"` | `"full"`              | Visual style     |
| `containerClassName` | `string`                                                      | `"max-w-5xl mx-auto"` | Width constraint |

### Variants

| Variant    | Description                             |
| ---------- | --------------------------------------- |
| `full`     | Standard white footer with full padding |
| `compact`  | Minimal height footer                   |
| `branded`  | Brand-focused layout                    |
| `centered` | All text centered                       |
| `minimal`  | Compact with minimal padding            |

### Sub-components

| Component           | Key Props                                                            | Description                         |
| ------------------- | -------------------------------------------------------------------- | ----------------------------------- |
| `FooterGrid`        | —                                                                    | Responsive 1–4 column grid          |
| `FooterSection`     | —                                                                    | Single grid column                  |
| `FooterHeading`     | —                                                                    | Section heading (`<h4>`, uppercase) |
| `FooterLink`        | `href`                                                               | Styled link                         |
| `FooterBrand`       | `children`                                                           | Brand/logo area with description    |
| `FooterSocials`     | —                                                                    | Row of social icons                 |
| `FooterSocialLink`  | `href`                                                               | Social icon link (dashed border)    |
| `FooterNewsletter`  | `heading`, `description`, `placeholder`, `buttonText`, `onSubscribe` | Email subscription form             |
| `FooterDivider`     | —                                                                    | Dashed horizontal rule              |
| `FooterBottom`      | —                                                                    | Copyright / bottom row              |
| `FooterBottomLinks` | —                                                                    | Inline links in bottom row          |

### FooterNewsletter Props

| Prop          | Type                      | Default                         | Description       |
| ------------- | ------------------------- | ------------------------------- | ----------------- |
| `heading`     | `string`                  | `"Subscribe to our newsletter"` | Form heading      |
| `description` | `string`                  | `"Get the latest updates..."`   | Form description  |
| `placeholder` | `string`                  | `"you@example.com"`             | Email placeholder |
| `buttonText`  | `string`                  | `"Subscribe"`                   | Button label      |
| `onSubscribe` | `(email: string) => void` | —                               | Submit callback   |

### Examples

```tsx
<Footer variant="full">
  <FooterGrid>
    <FooterBrand>
      <Logo />
      <p className="text-sm text-slate-500 mt-2">
        Brutalist UI component library.
      </p>
    </FooterBrand>

    <FooterSection>
      <FooterHeading>Product</FooterHeading>
      <FooterLink href="/docs">Documentation</FooterLink>
      <FooterLink href="/components">Components</FooterLink>
      <FooterLink href="/changelog">Changelog</FooterLink>
    </FooterSection>

    <FooterSection>
      <FooterHeading>Company</FooterHeading>
      <FooterLink href="/about">About</FooterLink>
      <FooterLink href="/blog">Blog</FooterLink>
      <FooterLink href="/contact">Contact</FooterLink>
    </FooterSection>

    <FooterSection>
      <FooterNewsletter
        onSubscribe={(email) => console.log("Subscribed:", email)}
      />
    </FooterSection>
  </FooterGrid>

  <FooterDivider />

  <FooterBottom>
    <p>© 2024 Poyraz UI. All rights reserved.</p>
    <FooterBottomLinks>
      <FooterLink href="/privacy">Privacy</FooterLink>
      <FooterLink href="/terms">Terms</FooterLink>
    </FooterBottomLinks>
  </FooterBottom>

  <FooterSocials>
    <FooterSocialLink href="https://github.com/poyrazavsever">
      <Github className="h-5 w-5" />
    </FooterSocialLink>
    <FooterSocialLink href="https://twitter.com/poyrazavsever">
      <Twitter className="h-5 w-5" />
    </FooterSocialLink>
  </FooterSocials>
</Footer>
```

---

## DataTable

Full-featured data table with sorting, global search, pagination, row selection, and column visibility toggle.

```tsx
import { DataTable } from "poyraz-ui/organisms";
import type { DataTableColumnDef } from "poyraz-ui/organisms";
```

### DataTable Props

| Prop                | Type                                | Default               | Description                     |
| ------------------- | ----------------------------------- | --------------------- | ------------------------------- |
| `columns`           | `DataTableColumnDef<T>[]`           | **required**          | Column definitions              |
| `data`              | `T[]`                               | **required**          | Data rows                       |
| `getRowId`          | `(row: T, index: number) => string` | Index-based           | Unique row key extractor        |
| `pageSize`          | `number`                            | `10`                  | Rows per page                   |
| `pagination`        | `boolean`                           | `true`                | Show pagination controls        |
| `searchable`        | `boolean`                           | `true`                | Show global search input        |
| `searchPlaceholder` | `string`                            | `"Search..."`         | Search placeholder              |
| `selectable`        | `boolean`                           | `false`               | Row selection checkboxes        |
| `onSelectionChange` | `(selectedRows: T[]) => void`       | —                     | Selection callback              |
| `columnToggle`      | `boolean`                           | `false`               | Column visibility toggle        |
| `className`         | `string`                            | —                     | Wrapper class                   |
| `caption`           | `string`                            | —                     | Accessibility caption (sr-only) |
| `emptyMessage`      | `string`                            | `"No results found."` | Empty state message             |

### DataTableColumnDef

| Prop          | Type                    | Default | Description           |
| ------------- | ----------------------- | ------- | --------------------- |
| `id`          | `string`                | —       | Unique column key     |
| `header`      | `string`                | —       | Column header label   |
| `accessorKey` | `keyof T`               | —       | Direct key accessor   |
| `accessorFn`  | `(row: T) => unknown`   | —       | Custom value accessor |
| `cell`        | `(row: T) => ReactNode` | —       | Custom cell renderer  |
| `sortable`    | `boolean`               | `true`  | Enable sorting        |
| `className`   | `string`                | —       | Column width/style    |
| `hidden`      | `boolean`               | `false` | Hidden by default     |

### Examples

```tsx
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const columns: DataTableColumnDef<User>[] = [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
    sortable: true,
  },
  {
    id: "email",
    header: "Email",
    accessorKey: "email",
  },
  {
    id: "role",
    header: "Role",
    accessorKey: "role",
    cell: (row) => <Badge>{row.role}</Badge>,
  },
];

const users: User[] = [
  { id: "1", name: "Poyraz", email: "poyraz@example.com", role: "Admin" },
  { id: "2", name: "Ali", email: "ali@example.com", role: "User" },
];

<DataTable
  columns={columns}
  data={users}
  getRowId={(row) => row.id}
  selectable
  onSelectionChange={(rows) => console.log("Selected:", rows)}
  columnToggle
  searchPlaceholder="Search users..."
/>;
```

---

## AnnouncementBar

Dismissable top-of-page notification strip with icon, action slot, and color variants.

```tsx
import { AnnouncementBar, announcementBarVariants } from "poyraz-ui/organisms";
```

### Props

| Prop          | Type                                                                     | Default     | Description                             |
| ------------- | ------------------------------------------------------------------------ | ----------- | --------------------------------------- |
| `variant`     | `"default" \| "info" \| "success" \| "warning" \| "danger" \| "branded"` | `"default"` | Color scheme                            |
| `dismissible` | `boolean`                                                                | `true`      | Show dismiss button                     |
| `onDismiss`   | `() => void`                                                             | —           | Dismiss callback                        |
| `icon`        | `ReactNode`                                                              | —           | Icon before content                     |
| `action`      | `ReactNode`                                                              | —           | Action element (link/button) at the end |

### Variants

| Variant   | Background       | Text  |
| --------- | ---------------- | ----- |
| `default` | `bg-slate-900`   | White |
| `info`    | `bg-blue-600`    | White |
| `success` | `bg-emerald-600` | White |
| `warning` | `bg-amber-500`   | Black |
| `danger`  | `bg-red-600`     | White |
| `branded` | `bg-red-600`     | White |

### Examples

```tsx
<AnnouncementBar variant="info" icon={<Megaphone className="h-4 w-4" />}>
  New version 2.0 is now available!
</AnnouncementBar>

<AnnouncementBar
  variant="success"
  action={<a href="/changelog" className="underline font-bold">See what's new →</a>}
>
  Your account has been upgraded.
</AnnouncementBar>

<AnnouncementBar
  variant="warning"
  dismissible
  onDismiss={() => console.log("Dismissed")}
>
  Scheduled maintenance on Saturday.
</AnnouncementBar>
```

---

## Full Export Reference

### From `poyraz-ui/atoms`

```
Avatar, AvatarImage, AvatarFallback,
Badge, badgeVariants,
Button, buttonVariants,
Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardImage,
Checkbox, Input, Label, Logo,
RadioGroup, RadioGroupItem,
Separator, Skeleton, Switch, Textarea,
Typography,
NumberInput, SearchInput, PhoneInput, PasswordInput, UrlInput,
PatternDots, PatternGrid, PatternLines, PatternDiagonal,
PatternCross, PatternCheckerboard, PatternDiamond,
PatternZigzag, PatternDashedGrid, PatternRadial,
ScrollArea
```

### From `poyraz-ui/molecules`

```
Accordion, AccordionItem, AccordionTrigger, AccordionContent,
Alert, AlertTitle, AlertDescription, alertVariants,
Autocomplete, (AutocompleteOption type, AutocompleteProps type),
Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis,
Calendar,
CommandPalette, CommandPaletteTrigger, CommandPaletteContent,
  CommandPaletteInput, CommandPaletteList, CommandPaletteGroup,
  CommandPaletteItem, CommandPaletteEmpty, CommandPaletteSeparator,
  CommandPaletteFooter, useCommandPalette,
DatePicker,
Dialog, DialogPortal, DialogOverlay, DialogTrigger, DialogClose,
  DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription,
Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose,
  DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription,
DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup,
  DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent,
  DropdownMenuSubTrigger, DropdownMenuRadioGroup,
Form, FormItem, FormLabel, FormControl, FormDescription,
  FormMessage, FormField, useFormField,
HoverCard, HoverCardTrigger, HoverCardContent,
Modal, ModalTrigger, ModalClose, ModalOverlay, ModalContent,
  ModalHeader, ModalFooter, ModalTitle, ModalDescription, modalContentVariants,
Pagination, PaginationContent, PaginationItem, PaginationLink,
  PaginationPrevious, PaginationNext, PaginationEllipsis,
Popover, PopoverTrigger, PopoverContent,
Select, SelectGroup, SelectValue, SelectTrigger, SelectContent,
  SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton,
  SelectScrollDownButton,
Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose,
  SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription,
  sheetContentVariants,
Tabs, TabsList, TabsTrigger, TabsContent,
Toaster, toast,
Tooltip, TooltipTrigger, TooltipContent, TooltipProvider
```

### From `poyraz-ui/organisms`

```
Navbar, NavbarTopBar, NavbarMain, NavbarBrand, NavbarLinks, NavbarLink,
  NavbarDropdown, NavbarDropdownTrigger, NavbarMegaMenu, NavbarMegaMenuItem,
  NavbarActions, NavbarMobileToggle, NavbarMobileMenu, NavbarMobileLink,
  NavbarMobileGroup, NavbarMobileActions, NavbarSearch, NavbarDivider,
  navbarVariants, useNavbar,
Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel,
  SidebarMenu, SidebarMenuItem, SidebarSeparator, SidebarFooter,
  SidebarTrigger, SidebarSearch, SidebarSubMenu, SidebarSubMenuItem,
  SidebarUserProfile, useSidebar, sidebarVariants,
Footer, FooterGrid, FooterSection, FooterHeading, FooterLink, FooterBrand,
  FooterSocials, FooterSocialLink, FooterNewsletter, FooterDivider,
  FooterBottom, FooterBottomLinks, footerVariants,
AnnouncementBar, announcementBarVariants,
DataTable, (DataTableColumnDef type)
```

### Utility

```
cn (from "poyraz-ui")
```
