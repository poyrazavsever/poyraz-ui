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
          v0.1.0
        </Badge>
        <Typography variant="h2">Introduction</Typography>
        <Typography variant="lead">
          Poyraz UI is a brutalist design system built with React, Next.js,
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
          shadows, and soft gradients, Poyraz UI embraces a raw, unapologetic
          design language. Every component is built with dashed borders, sharp
          corners, and high-contrast color schemes.
        </Typography>
      </section>

      {/* Design Philosophy */}
      <section className="space-y-6">
        <Typography variant="h2">Design Philosophy</Typography>
        <Typography variant="p">
          The design system follows four core principles:
        </Typography>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 border-2 border-dashed border-slate-200 bg-white space-y-2">
            <div className="flex items-center gap-2 text-red-600">
              <Paintbrush className="h-4 w-4" />
              <h3 className="font-bold text-sm uppercase tracking-wide text-slate-900">
                Dashed Borders
              </h3>
            </div>
            <p className="text-sm text-slate-500">
              <code className="text-xs bg-slate-100 px-1.5 py-0.5 border border-slate-200">
                border-dashed
              </code>{" "}
              is the DNA of the system. Every interactive element, card, and
              section uses dashed borders as its primary visual identifier.
            </p>
          </div>

          <div className="p-5 border-2 border-dashed border-slate-200 bg-white space-y-2">
            <div className="flex items-center gap-2 text-red-600">
              <Layers className="h-4 w-4" />
              <h3 className="font-bold text-sm uppercase tracking-wide text-slate-900">
                No Rounding
              </h3>
            </div>
            <p className="text-sm text-slate-500">
              <code className="text-xs bg-slate-100 px-1.5 py-0.5 border border-slate-200">
                rounded-none
              </code>{" "}
              is applied everywhere. Sharp, intentional corners give each
              element a raw, industrial feel.
            </p>
          </div>

          <div className="p-5 border-2 border-dashed border-slate-200 bg-white space-y-2">
            <div className="flex items-center gap-2 text-red-600">
              <Zap className="h-4 w-4" />
              <h3 className="font-bold text-sm uppercase tracking-wide text-slate-900">
                No Shadows
              </h3>
            </div>
            <p className="text-sm text-slate-500">
              <code className="text-xs bg-slate-100 px-1.5 py-0.5 border border-slate-200">
                shadow-none
              </code>{" "}
              by default. Instead of box-shadow, elevated components use
              red-colored offset boxes as a brutalist alternative.
            </p>
          </div>

          <div className="p-5 border-2 border-dashed border-slate-200 bg-white space-y-2">
            <div className="flex items-center gap-2 text-red-600">
              <ArrowRight className="h-4 w-4" />
              <h3 className="font-bold text-sm uppercase tracking-wide text-slate-900">
                High Contrast
              </h3>
            </div>
            <p className="text-sm text-slate-500">
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
          <Card className="border-l-4 border-l-red-600">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Atoms</CardTitle>
              <CardDescription>14 components</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">
                Fundamental building blocks: Button, Input, Badge, Avatar, Card,
                Typography, Checkbox, Radio, Switch, Label, Textarea, Separator,
                Skeleton, Logo.
              </Typography>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-slate-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Molecules</CardTitle>
              <CardDescription>12 components</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">
                Functional groups: Accordion, Alert, Breadcrumb, Dialog,
                DropdownMenu, Form, Pagination, Popover, Select, Sonner/Toast,
                Tabs, Tooltip.
              </Typography>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-slate-400">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Organisms</CardTitle>
              <CardDescription>3 components</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">
                Complex sections: Navbar (with TopBar, MegaMenu, Mobile
                support), Sidebar (collapsible, floating, mini), Footer (full,
                compact, branded).
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="space-y-4">
        <Typography variant="h2">Tech Stack</Typography>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-2 border-dashed border-slate-200">
            <thead>
              <tr className="border-b-2 border-dashed border-slate-200 bg-slate-50">
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
                <tr
                  key={tech}
                  className="border-b border-dashed border-slate-100"
                >
                  <td className="p-3 font-medium">{tech}</td>
                  <td className="p-3 text-slate-500">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
