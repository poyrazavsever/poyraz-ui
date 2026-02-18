import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Typography } from "poyraz-ui/atoms";
import { Separator } from "poyraz-ui/atoms";
import { Badge } from "poyraz-ui/atoms";
import { Button } from "poyraz-ui/atoms";

const organisms = [
  {
    name: "Announcement Bar",
    slug: "announcement-bar",
    description: "Dismissable top-of-page notification strip.",
  },
  {
    name: "Data Table",
    slug: "data-table",
    description: "Full-featured table with sort, filter, pagination.",
  },
  {
    name: "Footer",
    slug: "footer",
    description: "Page footer with grid layout and social links.",
  },
  {
    name: "Navbar",
    slug: "navbar",
    description: "Responsive navigation bar with mobile menu.",
  },
  {
    name: "Sidebar",
    slug: "sidebar",
    description: "Vertical navigation with collapsible groups.",
  },
];

export default function OrganismsPage() {
  return (
    <div className="space-y-10 pb-10">
      {/* Header */}
      <div className="space-y-2">
        <Badge variant="outline" className="text-xs">
          {organisms.length} components
        </Badge>
        <Typography variant="h1">Organisms</Typography>
        <Typography variant="lead">
          Complex, standalone UI sections — Navbars, Sidebars, and Footers.
        </Typography>
      </div>
      <Separator />

      {/* Component Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {organisms.map((component) => (
          <Link
            key={component.slug}
            href={`/docs/organisms/${component.slug}`}
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
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Link href="/docs/molecules">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 w-full sm:w-auto"
            >
              <ArrowRight className="h-4 w-4 rotate-180" /> Molecules
            </Button>
          </Link>
          <Link href="/docs">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              Back to Docs <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
