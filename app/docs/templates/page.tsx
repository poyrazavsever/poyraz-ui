import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Typography } from "poyraz-ui/atoms";
import { Separator } from "poyraz-ui/atoms";
import { Badge } from "poyraz-ui/atoms";
import { Button } from "poyraz-ui/atoms";

const templates = [
  {
    name: "Hero",
    slug: "hero",
    description:
      "Landing page hero section with CTA buttons and feature highlights.",
  },
  {
    name: "Pricing",
    slug: "pricing",
    description: "Pricing plans comparison with feature lists and CTA actions.",
  },
  {
    name: "Dashboard",
    slug: "dashboard",
    description:
      "Admin dashboard layout with stats, chart area, and recent data.",
  },
  {
    name: "Auth",
    slug: "auth",
    description: "Login and signup form pages with social auth options.",
  },
];

export default function TemplatesPage() {
  return (
    <div className="space-y-10 pb-10">
      <div className="space-y-2">
        <Badge variant="outline" className="text-xs">
          {templates.length} templates
        </Badge>
        <Typography variant="h1">Templates</Typography>
        <Typography variant="lead">
          Ready-to-use page templates built with Poyraz UI components. Copy,
          paste, and customize.
        </Typography>
      </div>
      <Separator />

      <div className="grid gap-4 sm:grid-cols-2">
        {templates.map((t) => (
          <Link
            key={t.slug}
            href={`/docs/templates/${t.slug}`}
            className="group block p-5 border border-slate-200 rounded-sm hover:border-slate-400 transition-colors"
          >
            <h3 className="font-semibold text-sm group-hover:underline">
              {t.name}
            </h3>
            <p className="text-xs text-slate-500 mt-1">{t.description}</p>
          </Link>
        ))}
      </div>

      <section className="space-y-4">
        <Separator />
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Link href="/docs/atoms">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 w-full sm:w-auto"
            >
              Back to Components <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
