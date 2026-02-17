import { Button } from "@/components/ui/atoms/button";
import { Typography } from "@/components/ui/atoms/typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 md:p-24 gap-12">
      <div className="text-center space-y-3">
        <Typography variant="h1">Poyraz UI Kit</Typography>
        <Typography variant="lead">
          Brutalist Design System Components
        </Typography>
      </div>

      <div className="grid gap-12 w-full max-w-4xl">
        {/* ── Variants ─────────────────────────────────── */}
        <section className="space-y-4">
          <Typography variant="h3">Variants</Typography>
          <div className="flex flex-wrap gap-4 items-center">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link Button</Button>
          </div>
        </section>

        {/* ── Sizes ────────────────────────────────────── */}
        <section className="space-y-4">
          <Typography variant="h3">Sizes</Typography>
          <div className="flex flex-wrap items-end gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Add">
              <span className="text-lg">＋</span>
            </Button>
          </div>
        </section>

        {/* ── States ───────────────────────────────────── */}
        <section className="space-y-4">
          <Typography variant="h3">States</Typography>

          <div className="space-y-3">
            <Typography variant="small" className="text-slate-500">
              Disabled
            </Typography>
            <div className="flex flex-wrap gap-4 items-center">
              <Button disabled>Default</Button>
              <Button variant="secondary" disabled>
                Secondary
              </Button>
              <Button variant="outline" disabled>
                Outline
              </Button>
              <Button variant="destructive" disabled>
                Destructive
              </Button>
              <Button variant="ghost" disabled>
                Ghost
              </Button>
              <Button variant="link" disabled>
                Link
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <Typography variant="small" className="text-slate-500">
              Loading
            </Typography>
            <div className="flex flex-wrap gap-4 items-center">
              <Button loading>Loading</Button>
              <Button variant="secondary" loading>
                Loading
              </Button>
              <Button variant="outline" loading>
                Loading
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <Typography variant="small" className="text-slate-500">
              Full Width
            </Typography>
            <Button className="w-full">Full Width Button</Button>
          </div>
        </section>

        {/* ── Combinations ─────────────────────────────── */}
        <section className="space-y-4">
          <Typography variant="h3">Combinations</Typography>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="lg">Get Started</Button>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="outline" size="sm">
              Cancel
            </Button>
            <Button variant="destructive" size="sm">
              Delete
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
