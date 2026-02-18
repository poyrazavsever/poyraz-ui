import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Typography } from "@/components/ui/atoms/typography";
import { Separator } from "@/components/ui/atoms/separator";
import { Badge } from "@/components/ui/atoms/badge";
import { Button } from "@/components/ui/atoms/button";

const atoms = [
  {
    name: "Avatar",
    slug: "avatar",
    description: "User profile images with fallback initials.",
  },
  {
    name: "Badge",
    slug: "badge",
    description: "Small status labels and counters.",
  },
  {
    name: "Button",
    slug: "button",
    description: "Primary interactive element with 6 variants.",
  },
  {
    name: "Card",
    slug: "card",
    description: "Container with header, content, and footer slots.",
  },
  {
    name: "Checkbox",
    slug: "checkbox",
    description: "Toggle input for binary choices.",
  },
  {
    name: "Form Fields",
    slug: "form-fields",
    description: "Number, search, phone, password, URL inputs.",
  },
  {
    name: "Input",
    slug: "input",
    description: "Standard text input with dashed border.",
  },
  {
    name: "Label",
    slug: "label",
    description: "Accessible form label with required indicator.",
  },
  {
    name: "Logo",
    slug: "logo",
    description: "Branded logo with red offset shadow.",
  },
  {
    name: "Radio Group",
    slug: "radio-group",
    description: "Single-select option group.",
  },
  {
    name: "Scroll Area",
    slug: "scroll-area",
    description: "Custom dashed scrollbar container.",
  },
  {
    name: "Separator",
    slug: "separator",
    description: "Horizontal or vertical divider line.",
  },
  {
    name: "Skeleton",
    slug: "skeleton",
    description: "Loading placeholder shapes.",
  },
  {
    name: "Switch",
    slug: "switch",
    description: "Toggle switch for on/off states.",
  },
  {
    name: "Textarea",
    slug: "textarea",
    description: "Multi-line text input area.",
  },
  {
    name: "Typography",
    slug: "typography",
    description: "Headings, paragraphs, and text styles.",
  },
];

export default function AtomsPage() {
  return (
    <div className="space-y-10 pb-10">
      {/* Header */}
      <div className="space-y-2">
        <Badge variant="outline" className="text-xs">
          {atoms.length} components
        </Badge>
        <Typography variant="h1">Atoms</Typography>
        <Typography variant="lead">
          Fundamental building blocks of the interface. The smallest,
          indivisible units.
        </Typography>
      </div>
      <Separator />

      {/* Component Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {atoms.map((component) => (
          <Link
            key={component.slug}
            href={`/docs/atoms/${component.slug}`}
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
          <Link href="/docs/molecules">
            <Button size="lg" className="gap-2">
              Molecules <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
