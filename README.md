# Poyraz UI Kit

<div align="center">
  <img src="public/logo.png" alt="Poyraz UI Kit Logo" width="80" height="80">
  
  <h3>A Modern, Accessible UI Component Library</h3>
  
  <p>Beautiful, reusable React components built for <a href="https://poyrazavsever.com">poyrazavsever.com</a> portfolio</p>

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.12-pink)](https://www.framer.com/motion/)

</div>

---

## Overview

Poyraz UI Kit is a comprehensive collection of production-ready React components extracted from my personal portfolio website. Built with modern web technologies and design principles, it provides a solid foundation for creating beautiful, accessible, and performant user interfaces.

### Key Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript 5, and Tailwind CSS 4
- **Production Ready**: Battle-tested components from real-world portfolio projects
- **Fully Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Dark Mode Support**: Seamless theme switching with system preference detection
- **Mobile First**: Responsive design that works perfectly on all devices
- **Type Safe**: Complete TypeScript support with comprehensive type definitions
- **Smooth Animations**: Powered by Framer Motion for delightful user experiences
- **Icon System**: Extensive icon library using HugeIcons via Iconify
- **Copy to Clipboard**: Interactive documentation with easy code copying
- **Design System**: Consistent color palette, typography, and spacing scales

---

## Component Library

### 🎯 Buttons

Modern button components with multiple variants and states

- **Variants**: Primary, Secondary, Outline, Ghost, Gradient
- **Sizes**: Small, Medium, Large
- **Features**: Icons, loading states, disabled states, links support
- **Examples**: Call-to-action buttons, form submissions, navigation

### 🎨 Cards

Flexible card components for content display

- **Types**: Project cards, blog cards
- **Features**: Images, titles, descriptions, metadata
- **Use Cases**: Portfolio showcases, blog listings, feature highlights

### 📝 Inputs

Comprehensive form input components

- **Types**: Text, Email, Password, Search, Number, Phone, URL
- **Features**: Icons, validation, helper text, error states
- **Variants**: Default, Filled, Outlined
- **States**: Focus, disabled, required, error

### 🎭 Icons

Extensive icon system with HugeIcons library

- **Categories**: Navigation, UI Actions, Social Media, Themes
- **Variants**: Outline, Solid, Bulk, Duotone, Twotone
- **Features**: Customizable size, color, and hover effects
- **Usage**: 80+ carefully selected icons for modern web interfaces

### 🎨 Design System

Complete design foundation

- **Typography**: Nunito font family with 8 text scales
- **Colors**: Neutral palette with semantic colors for states
- **Spacing**: Consistent spacing scale for layouts
- **Accessibility**: High contrast ratios and focus indicators

---

## Tech Stack

| Technology        | Version  | Purpose                              |
| ----------------- | -------- | ------------------------------------ |
| **Next.js**       | 15.5.2   | React framework with App Router      |
| **React**         | 19.1.0   | UI library with latest features      |
| **TypeScript**    | 5.0      | Type safety and developer experience |
| **Tailwind CSS**  | 4.0      | Utility-first CSS framework          |
| **Framer Motion** | 12.23.12 | Animation library                    |
| **Iconify React** | 6.0.1    | Icon system with HugeIcons           |

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/poyrazavsever/poyraz-ui.git
   cd poyraz-ui
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
pnpm build
pnpm start
```

---

## Project Structure

```
poyraz-ui/
├── app/                          # Next.js App Router pages
│   ├── buttons/                  # Button showcase page
│   ├── cards/                    # Card showcase page
│   ├── color-palette/            # Color system page
│   ├── icons/                    # Icon showcase page
│   ├── inputs/                   # Input showcase page
│   ├── typography/               # Typography system page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # Reusable UI components
│   ├── button/                   # Button components
│   │   ├── Button.tsx            # Main button component
│   │   └── ButtonShowcase.tsx    # Interactive demo
│   ├── card/                     # Card components
│   │   ├── BlogCard.tsx          # Blog card variant
│   │   ├── ProjectCard.tsx       # Project card variant
│   │   └── CardShowcase.tsx      # Interactive demo
│   ├── icons/                    # Icon system
│   │   ├── Icon.tsx              # Icon component
│   │   └── IconShowcase.tsx      # Icon library demo
│   ├── input/                    # Input components
│   │   ├── Input.tsx             # Main input component
│   │   └── InputShowcase.tsx     # Form demo
│   └── layout/                   # Layout components
│       ├── navbar.tsx            # Navigation with theme switching
│       └── footer.tsx            # Site footer
├── public/                       # Static assets
│   ├── examples/                 # Project showcase images
│   └── logo.png                  # Brand logo
└── package.json                  # Dependencies and scripts
```

---

## Component Usage Examples

### Button Component

```tsx
import { PrimaryButton, OutlineButton } from '@/components/button/Button';

// Basic usage
<PrimaryButton>Click me</PrimaryButton>

// With icon and link
<PrimaryButton
  href="/projects"
  icon="hugeicons:folder-01"
  size="lg"
>
  View Projects
</PrimaryButton>

// Loading state
<OutlineButton loading disabled>
  Processing...
</OutlineButton>
```

### Input Component

```tsx
import { TextInput, EmailInput, PasswordInput } from '@/components/input/Input';

// Basic text input
<TextInput
  label="Full Name"
  placeholder="Enter your name"
  required
  helperText="This field is required"
/>

// Email with validation
<EmailInput
  label="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
/>

// Password with toggle
<PasswordInput
  label="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
```

### Card Component

```tsx
import { ProjectCard, BlogCard } from '@/components/card';

// Project showcase
<ProjectCard
  image="/project-image.jpg"
  title="Project Name"
  desc="Project description"
  slug="/projects/project-name"
/>

// Blog post
<BlogCard
  cardImage="/blog-image.jpg"
  title="Blog Post Title"
  content="Post excerpt..."
  date="2025-01-01"
  category="Development"
  slug="/blog/post-slug"
/>
```

### Icon Component

```tsx
import Icon, { SolidIcon, OutlineIcon } from '@/components/icons/Icon';

// Basic usage
<Icon name="heart" size={24} />

// Different variants
<SolidIcon name="star" color="#fbbf24" />
<OutlineIcon name="settings" className="hover:scale-110" />

// With click handler
<Icon
  name="share"
  onClick={() => handleShare()}
  className="cursor-pointer"
/>
```

---

## Design System

### Typography Scale

```css
/* Headings */
.text-4xl.sm: text-5xl.font-semibold /* H1 - Page titles */
  .text-2xl.font-semibold /* H2 - Section titles */ .text-lg.font-semibold
  /* H3 - Subsections */ .text-base.font-semibold /* H4 - Component titles */
  /* Body text */ .text-lg.font-normal /* Large text - Hero descriptions */
  .text-base.font-normal /* Body text - Main content */ .text-sm.font-normal
  /* Small text - Helper text */ .text-xs.font-normal /* Extra small - Labels */
  /* Interactive */ .text-sm.font-medium /* Button text */ .text-xs.font-mono; /* Code snippets */
```

### Color Palette

```css
/* Neutral colors */
--neutral-50: #fafafa
--neutral-100: #f5f5f5
--neutral-200: #e5e5e5
--neutral-800: #262626
--neutral-900: #171717

/* Semantic colors */
--green-500: #22c55e     /* Success */
--red-500: #ef4444       /* Error */
```

### Spacing Scale

```css
/* Component spacing */
gap-1, gap-2, gap-3, gap-4, gap-6, gap-8, gap-12

/* Layout margins */
mt-24 sm:mt-10          /* Top spacing */
px-6 sm:px-24           /* Horizontal padding */
mb-4, mb-6, mb-8, mb-12 /* Bottom margins */
```

---

## Features & Capabilities

### 🌓 Theme System

- **Light/Dark Mode**: Automatic system preference detection
- **Manual Toggle**: User can override system preference
- **Smooth Transitions**: Seamless theme switching animations
- **Persistent**: Theme preference saved in localStorage

### 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm (640px), md (768px), lg (1024px)
- **Flexible Layouts**: Grid and flexbox combinations
- **Touch Friendly**: Proper touch targets and interactions

### ♿ Accessibility

- **WCAG Compliance**: Meets accessibility guidelines
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and descriptions
- **Focus Management**: Visible focus indicators
- **Color Contrast**: High contrast ratios for readability

### 🎭 Animations

- **Page Transitions**: Smooth page load animations
- **Micro-interactions**: Hover effects and state changes
- **Loading States**: Progress indicators and skeletons
- **Gesture Support**: Touch and swipe interactions

---

## Browser Support

| Browser | Version |
| ------- | ------- |
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

---

## Contributing

This is a personal UI kit extracted from my portfolio website. While not actively seeking contributions, you're welcome to:

1. **Report Issues**: Found a bug? Please open an issue
2. **Feature Requests**: Suggest improvements or new components
3. **Fork & Customize**: Use this as a starting point for your own UI kit

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## About

Created by **Poyraz Avsever** for [poyrazavsever.com](https://poyrazavsever.com)

### Connect with me:

- **Portfolio**: [poyrazavsever.com](https://poyrazavsever.com)
- **LinkedIn**: [linkedin.com/in/poyrazavsever](https://linkedin.com/in/poyrazavsever)
- **GitHub**: [github.com/poyrazavsever](https://github.com/poyrazavsever)
- **Medium**: [medium.com/@poyrazavsever](https://medium.com/@poyrazavsever)

---

<div align="center">
  <p>Built with ❤️ using modern web technologies</p>
  <p>Part of the poyrazavsever.com ecosystem</p>
</div>
