import Link from "next/link";
import { ArrowRight, Layers, Paintbrush, Zap } from "lucide-react";

import { Typography } from "poyraz-ui/atoms";
import { Separator } from "poyraz-ui/atoms";
import { Button } from "poyraz-ui/atoms";
import { Badge } from "poyraz-ui/atoms";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "poyraz-ui/atoms";

export default function DocsIntroPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <Badge variant="outline" className="text-xs">
          v2.0.1
        </Badge>
        <Typography variant="h2">Introduction</Typography>
        <Typography variant="lead">
          Poyraz UI is a minimal design system built with React, Next.js,
          Tailwind CSS v4, and Radix UI.
        </Typography>
      </div>

      <Separator />

      {/* About */}
      <section className="space-y-4">
        <Typography variant="h2">What is Poyraz UI?</Typography>
        <Typography variant="p">
          Poyraz UI is an open-source component library designed specifically
          for building modern web applications with a bold, brutalist aesthetic.
          It provides a comprehensive set of accessible, composable, and
          customizable components.
        </Typography>
        <Typography variant="p">
          Unlike traditional UI libraries that rely on rounded corners, subtle
          shadows, and soft gradients, Poyraz UI embraces a clean, minimal
          design language. Every component is built with solid borders, subtle
          rounding, and high-contrast color schemes.
        </Typography>
      </section>

      {/* Design Philosophy */}
      <section className="space-y-6">
        <Typography variant="h2">Design Philosophy</Typography>
        <Typography variant="p">
          The design system follows four core principles:
        </Typography>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 border border-border rounded-sm bg-background space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <Paintbrush className="h-4 w-4" />
              <h3 className="font-bold text-sm uppercase tracking-wide text-foreground">
                Clean Borders
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              <code className="text-xs bg-accent px-1.5 py-0.5 border border-border">
                border
              </code>{" "}
              is the DNA of the system. Every interactive element, card, and
              section uses clean solid borders as its primary visual identifier.
            </p>
          </div>

          <div className="p-5 border border-border rounded-sm bg-background space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <Layers className="h-4 w-4" />
              <h3 className="font-bold text-sm uppercase tracking-wide text-foreground">
                Subtle Rounding
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              <code className="text-xs bg-accent px-1.5 py-0.5 border border-border">
                rounded-sm
              </code>{" "}
              is applied everywhere. Gentle, intentional corners give each
              element a refined, modern feel.
            </p>
          </div>

          <div className="p-5 border border-border rounded-sm bg-background space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <Zap className="h-4 w-4" />
              <h3 className="font-bold text-sm uppercase tracking-wide text-foreground">
                No Shadows
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              <code className="text-xs bg-accent px-1.5 py-0.5 border border-border">
                shadow-none
              </code>{" "}
              by default. Instead of box-shadow, elevated components use
              red-colored offset boxes as a brutalist alternative.
            </p>
          </div>

          <div className="p-5 border border-border rounded-sm bg-background space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <ArrowRight className="h-4 w-4" />
              <h3 className="font-bold text-sm uppercase tracking-wide text-foreground">
                High Contrast
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Red-600 as primary, slate for neutral tones. Bold typography with
              uppercase labels and wide tracking ensures clear visual hierarchy.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="space-y-4">
        <Typography variant="h2">Atomic Architecture</Typography>
        <Typography variant="p">
          Components are organized following the Atomic Design methodology:
        </Typography>

        <div className="space-y-3">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Atoms</CardTitle>
              <CardDescription>17 components</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">
                Fundamental building blocks: Button, Input, Badge, Avatar, Card,
                Typography, Checkbox, Radio, Switch, Label, Textarea, Separator,
                Skeleton, Scroll Area, Form Fields, Logo, BG Patterns.
              </Typography>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Molecules</CardTitle>
              <CardDescription>21 components</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">
                Functional groups: Accordion, Alert, Autocomplete, Breadcrumb,
                Calendar, Command Palette, Date Picker, Dialog, Drawer, Dropdown
                Menu, Form, Hover Card, Modal, Pagination, Popover, Select,
                Sheet, Sonner/Toast, Tabs, Tooltip, Mermaid.
              </Typography>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-placeholder">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Organisms</CardTitle>
              <CardDescription>5 components</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">
                Complex sections: Announcement Bar, Data Table, Navbar (with
                TopBar, MegaMenu, Mobile support), Sidebar (collapsible,
                floating, mini), Footer (full, compact, branded).
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="space-y-4">
        <Typography variant="h2">Tech Stack</Typography>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-sm">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left p-3 font-bold uppercase text-xs tracking-wide">
                  Technology
                </th>
                <th className="text-left p-3 font-bold uppercase text-xs tracking-wide">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["React 19", "UI rendering"],
                ["Next.js 16", "Framework (optional peer dep)"],
                ["Tailwind CSS v4", "Styling"],
                ["Radix UI", "Accessible primitives"],
                ["CVA", "Variant management"],
                ["clsx + tailwind-merge", "Class name utilities"],
                ["tsup", "Library bundling (ESM + CJS)"],
                ["TypeScript", "Type safety"],
              ].map(([tech, purpose]) => (
                <tr key={tech} className="border-b border-border">
                  <td className="p-3 font-medium">{tech}</td>
                  <td className="p-3 text-muted-foreground">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* v2.0.0 â€” Theming */}
      <section className="space-y-6">
        <Typography variant="h2">v2.0.1 â€” Theming & CLI</Typography>
        <Typography variant="p">
          Poyraz UI v2 introduces a semantic token system powered by CSS custom
          properties. All components now use{" "}
          <code className="text-xs bg-accent px-1.5 py-0.5 border border-border">
            var(--poyraz-*)
          </code>{" "}
          tokens, making full theme customization possible without touching
          component source code.
        </Typography>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 border border-border rounded-sm bg-background space-y-2">
            <h3 className="font-bold text-sm uppercase tracking-wide text-foreground">
              Semantic Tokens
            </h3>
            <p className="text-sm text-muted-foreground">
              40+ CSS custom properties with sensible fallbacks. Works
              standalone (light theme) or with any CSS variable-based theme
              switcher.
            </p>
          </div>

          <div className="p-5 border border-border rounded-sm bg-background space-y-2">
            <h3 className="font-bold text-sm uppercase tracking-wide text-foreground">
              reactive-switcher Support
            </h3>
            <p className="text-sm text-muted-foreground">
              Optional integration with reactive-switcher for dynamic theme
              switching. Light & Dark themes included out of the box.
            </p>
          </div>

          <div className="p-5 border border-border rounded-sm bg-background space-y-2">
            <h3 className="font-bold text-sm uppercase tracking-wide text-foreground">
              CLI Setup Wizard
            </h3>
            <p className="text-sm text-muted-foreground">
              Run{" "}
              <code className="text-xs bg-accent px-1.5 py-0.5 border border-border">
                npx poyraz-ui init
              </code>{" "}
              to automatically configure CSS imports and optionally scaffold
              theme configuration.
            </p>
          </div>

          <div className="p-5 border border-border rounded-sm bg-background space-y-2">
            <h3 className="font-bold text-sm uppercase tracking-wide text-foreground">
              Theme Exports
            </h3>
            <p className="text-sm text-muted-foreground">
              Import pre-built themes via{" "}
              <code className="text-xs bg-accent px-1.5 py-0.5 border border-border">
                poyraz-ui/themes
              </code>
              . Includes poyrazLightTheme and poyrazDarkTheme configurations.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <Separator />
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/docs/installation">
            <Button size="lg" className="gap-2">
              Installation <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs/atoms">
            <Button variant="outline" size="lg" className="gap-2">
              Browse Components <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
