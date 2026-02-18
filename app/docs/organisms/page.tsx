import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Typography } from "@/components/ui/atoms/typography";
import { Separator } from "@/components/ui/atoms/separator";
import { Badge } from "@/components/ui/atoms/badge";
import { Button } from "@/components/ui/atoms/button";
import { OrganismsDemo } from "@/components/demos/organisms-demo";

export default function OrganismsPage() {
  return (
    <div className="space-y-14 pb-10">
      {/* Header */}
      <div className="space-y-2">
        <Badge variant="outline" className="text-xs">
          5 components
        </Badge>
        <Typography variant="h1">Organisms</Typography>
        <Typography variant="lead">
          Complex, standalone UI sections — Navbars, Sidebars, and Footers.
        </Typography>
      </div>
      <Separator />

      <OrganismsDemo />

      {/* Navigation */}
      <section className="space-y-4">
        <Separator />
        <div className="flex gap-4 pt-4">
          <Link href="/docs/molecules">
            <Button variant="outline" size="lg" className="gap-2">
              <ArrowRight className="h-4 w-4 rotate-180" /> Molecules
            </Button>
          </Link>
          <Link href="/docs">
            <Button size="lg" className="gap-2">
              Back to Docs <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
