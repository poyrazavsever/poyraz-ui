import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Typography } from "@/components/ui/atoms/typography";
import { Separator } from "@/components/ui/atoms/separator";
import { Badge } from "@/components/ui/atoms/badge";
import { Button } from "@/components/ui/atoms/button";

const molecules = [
  {
    name: "Accordion",
    slug: "accordion",
    description: "Collapsible content sections.",
  },
  {
    name: "Alert",
    slug: "alert",
    description: "Contextual feedback messages.",
  },
  {
    name: "Breadcrumb",
    slug: "breadcrumb",
    description: "Navigation path indicator.",
  },
  { name: "Calendar", slug: "calendar", description: "Date selection grid." },
  {
    name: "Command Palette",
    slug: "command-palette",
    description: "Keyboard-driven command menu (Cmd+K).",
  },
  {
    name: "Date Picker",
    slug: "date-picker",
    description: "Popover-based date selector.",
  },
  { name: "Dialog", slug: "dialog", description: "Modal dialog overlay." },
  {
    name: "Drawer",
    slug: "drawer",
    description: "Bottom sheet pull-up panel.",
  },
  {
    name: "Dropdown Menu",
    slug: "dropdown-menu",
    description: "Context menu with sub-menus.",
  },
  {
    name: "Form",
    slug: "form",
    description: "Form primitives with React Hook Form integration.",
  },
  {
    name: "Hover Card",
    slug: "hover-card",
    description: "Content card on hover.",
  },
  {
    name: "Modal",
    slug: "modal",
    description: "Centered modal with size variants.",
  },
  {
    name: "Pagination",
    slug: "pagination",
    description: "Page navigation controls.",
  },
  { name: "Popover", slug: "popover", description: "Floating content panel." },
  { name: "Select", slug: "select", description: "Dropdown select input." },
  { name: "Sheet", slug: "sheet", description: "Full-height side panel." },
  { name: "Sonner", slug: "sonner", description: "Toast notification system." },
  { name: "Tabs", slug: "tabs", description: "Tabbed content panels." },
  { name: "Tooltip", slug: "tooltip", description: "Hover hint popup." },
];

export default function MoleculesPage() {
  return (
    <div className="space-y-10 pb-10">
      {/* Header */}
      <div className="space-y-2">
        <Badge variant="outline" className="text-xs">
          {molecules.length} components
        </Badge>
        <Typography variant="h1">Molecules</Typography>
        <Typography variant="lead">
          Combinations of atoms that form functional UI units — dialogs, tabs,
          forms, and more.
        </Typography>
      </div>
      <Separator />

      {/* Component Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {molecules.map((component) => (
          <Link
            key={component.slug}
            href={`/docs/molecules/${component.slug}`}
            className="group block p-5 border-2 border-dashed border-slate-200 hover:border-slate-400 transition-colors"
          >
            <h3 className="font-semibold text-sm group-hover:underline">
              {component.name}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {component.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Navigation */}
      <section className="space-y-4">
        <Separator />
        <div className="flex gap-4 pt-4">
          <Link href="/docs/atoms">
            <Button variant="outline" size="lg" className="gap-2">
              <ArrowRight className="h-4 w-4 rotate-180" /> Atoms
            </Button>
          </Link>
          <Link href="/docs/organisms">
            <Button size="lg" className="gap-2">
              Organisms <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
