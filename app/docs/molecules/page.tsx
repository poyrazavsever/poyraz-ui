import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Typography } from "@/components/ui/atoms/typography";
import { Separator } from "@/components/ui/atoms/separator";
import { Badge } from "@/components/ui/atoms/badge";
import { Button } from "@/components/ui/atoms/button";
import { MoleculesDemo } from "@/components/demos/molecules-demo";

export default function MoleculesPage() {
  return (
    <div className="space-y-14 pb-10">
      {/* Header */}
      <div className="space-y-2">
        <Badge variant="outline" className="text-xs">
          19 components
        </Badge>
        <Typography variant="h1">Molecules</Typography>
        <Typography variant="lead">
          Combinations of atoms that form functional UI units — dialogs, tabs,
          forms, and more.
        </Typography>
      </div>
      <Separator />

      <MoleculesDemo />

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
