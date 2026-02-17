# Poyraz UI - Component List & Design System

## Color Palette

**Base:** Tailwind CSS Default Colors
**Primary Color:** `Red-600` (#DC2626)

| Semantic Name            | Tailwind Color | Usage                                 |
| :----------------------- | :------------- | :------------------------------------ |
| **Primary**              | `red-600`      | Main actions, active states, branding |
| **Primary Foreground**   | `white`        | Text on primary backgrounds           |
| **Secondary**            | `slate-100`    | Secondary actions, muted backgrounds  |
| **Secondary Foreground** | `slate-900`    | Text on secondary backgrounds         |
| **Background**           | `white`        | Page background                       |
| **Foreground**           | `slate-950`    | Default text color                    |
| **Muted**                | `slate-100`    | Muted backgrounds (cards, inputs)     |
| **Muted Foreground**     | `slate-500`    | Helper text, placeholders             |
| **Border**               | `slate-200`    | Borders, dividers                     |
| **Input**                | `slate-200`    | Input borders                         |
| **Ring**                 | `red-600`      | Focus rings                           |
| **Destructive**          | `red-600`      | Error states, delete actions          |

---

## Component List (Atomic Design)

### 1. Atoms

_Fundamental building blocks. Cannot be broken down further._

- **Typography** (`<H1/>`, `<P/>`, `<Small/>`, `<Blockquote/>`)
- **Button** (Variants: Default, Secondary, Outline, Ghost, Link, Icon)
- **Input** (Text, Email, Password, Number)
- **Textarea**
- **Checkbox**
- **Radio Group** / **Radio Item**
- **Switch** (Toggle)
- **Label**
- **Badge** (Status indicators)
- **Avatar** (Image, Fallback)
- **Separator** (Divider)
- **Skeleton** (Loading state)
- **Icon** (Wrapper for icons - Lucide React recommended)
- **Logo** (Project logo SVG)

### 2. Molecules

_Groups of atoms working together._

- **Card**
  - `CardHeader`
  - `CardTitle`
  - `CardDescription`
  - `CardContent`
  - `CardFooter`
- **Alert** (Success, Error, Info, Warning)
- **Toast / Sonner** (Notifications)
- **Tabs** (List, Trigger, Content)
- **Accordion** (Item, Trigger, Content)
- **Breadcrumb** (Navigation path)
- **Pagination** (Page controls)
- **Dialog / Modal** (Overlay, Content, Close)
- **Popover**
- **Tooltip**
- **Select** (Dropdown selection)
- **Dropdown Menu**
- **Form Field** (Label + Input + Description + Error Message)

### 3. Organisms

_Complex UI sections composed of molecules and atoms._

- **Navbar** (Logo + Links + Auth/Theme Toggle)
- **Sidebar** (Navigation Links + User Profile)
- **Footer** (Links + Socials + Copyright)
- **Hero Section** (Headline + CTA + Image/Pattern)
- **Feature Section** (Grid of Cards/Icons)
- **Testimonial Carousel**
- **Pricing Table**

### 4. Templates / Layouts

_Page-level structures._

- **Auth Layout** (Centered Card, Split View)
- **Dashboard Layout** (Sidebar + Header + Main Content)
- **Landing Page Layout** (Navbar + Hero + Sections + Footer)
