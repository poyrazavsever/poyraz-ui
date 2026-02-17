import { Typography } from "@/components/ui/atoms/typography";
import { Separator } from "@/components/ui/atoms/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/atoms/card";
import { Button } from "@/components/ui/atoms/button";
import { ArrowRight, Package, Copy } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Typography variant="h1">Introduction</Typography>
        <Typography variant="lead">
          Poyraz UI is a brutalist, unstyled-first component library built with
          Next.js, Tailwind CSS v4, and Radix UI.
        </Typography>
      </div>

      <Separator />

      <section className="space-y-4">
        <Typography variant="h2">Installation</Typography>
        <Typography variant="p">
          Install the package via your package manager:
        </Typography>

        <Card className="bg-slate-900 text-slate-50 border-slate-950">
          <CardContent className="p-4 flex items-center justify-between font-mono text-sm">
            <span>pnpm add poyraz-ui</span>
            <Button
              size="icon"
              variant="ghost"
              className="text-slate-400 hover:text-white hover:bg-slate-800 h-8 w-8"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <Typography variant="h2">Core Concepts</Typography>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Brutalist Design</CardTitle>
              <CardDescription>Bold, raw, and functional.</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="p" className="mt-0">
                Thick dashed borders, sharp corners (no rounding), high
                contrast, and a focus on typography and layout over decorative
                effects.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Accessible</CardTitle>
              <CardDescription>Built on Radix UI primitives.</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="p" className="mt-0">
                Fully accessible interactions, focus management, and keyboard
                navigation out of the box.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="flex justify-end pt-8">
        <Button size="lg" className="gap-2">
          Explore Components <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
