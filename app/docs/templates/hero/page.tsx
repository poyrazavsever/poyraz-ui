"use client";

import { Button, Typography, Badge, Separator } from "poyraz-ui/atoms";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

function HeroPreview() {
  return (
    <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
      {/* Hero */}
      <section className="relative px-6 py-16 text-center">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-lg mx-auto space-y-5">
          <Badge variant="outline" className="text-[10px]">
            v1.0 — Now Available
          </Badge>

          <Typography variant="h1">
            Build faster with{" "}
            <span className="text-red-600 font-secondary">minimal</span>{" "}
            components
          </Typography>

          <Typography variant="lead" className="text-slate-500">
            A clean, accessible React component library built with Tailwind CSS
            v4 and Radix UI. No shadows, no noise — just sharp interfaces.
          </Typography>

          <div className="flex items-center justify-center gap-3 pt-2">
            <Button>Get Started</Button>
            <Button variant="outline">View on GitHub</Button>
          </div>

          {/* Mini stats */}
          <div className="flex items-center justify-center gap-6 pt-4 text-xs text-slate-400">
            <div>
              <span className="font-bold text-slate-700 text-sm">43+</span>{" "}
              Components
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div>
              <span className="font-bold text-slate-700 text-sm">MIT</span>{" "}
              License
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div>
              <span className="font-bold text-slate-700 text-sm">v4</span>{" "}
              Tailwind
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="border-t border-slate-200 px-6 py-10">
        <div className="max-w-lg mx-auto grid grid-cols-3 gap-4 text-center">
          {[
            { icon: "⚡", title: "Fast", desc: "Zero runtime overhead" },
            {
              icon: "♿",
              title: "Accessible",
              desc: "WCAG-compliant by default",
            },
            {
              icon: "🎨",
              title: "Themeable",
              desc: "CSS variables for full control",
            },
          ].map((f) => (
            <div key={f.title} className="space-y-1.5">
              <div className="text-lg">{f.icon}</div>
              <div className="text-xs font-bold text-slate-900">{f.title}</div>
              <div className="text-[10px] text-slate-400">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const heroCode = `import { Button, Typography, Badge, Separator } from "poyraz-ui/atoms";

export function HeroSection() {
  return (
    <section className="relative px-6 py-16 text-center">
      <div className="relative max-w-lg mx-auto space-y-5">
        <Badge variant="outline" className="text-[10px]">
          v1.0 — Now Available
        </Badge>

        <Typography variant="h1">
          Build faster with{" "}
          <span className="text-red-600 font-secondary">minimal</span>{" "}
          components
        </Typography>

        <Typography variant="lead" className="text-slate-500">
          A clean, accessible React component library built with
          Tailwind CSS v4 and Radix UI.
        </Typography>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Button>Get Started</Button>
          <Button variant="outline">View on GitHub</Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-4 text-xs text-slate-400">
          <div>
            <span className="font-bold text-slate-700 text-sm">43+</span> Components
          </div>
          <Separator orientation="vertical" className="h-4" />
          <div>
            <span className="font-bold text-slate-700 text-sm">MIT</span> License
          </div>
          <Separator orientation="vertical" className="h-4" />
          <div>
            <span className="font-bold text-slate-700 text-sm">v4</span> Tailwind
          </div>
        </div>
      </div>
    </section>
  );
}`;

export default function HeroTemplatePage() {
  return (
    <ComponentPage
      name="Hero Section"
      description="Landing page hero template with headline, CTA buttons, stats bar, and feature highlights. Built with Typography, Button, Badge, and Separator atoms."
      importCode={`import { Button, Typography, Badge, Separator } from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="Hero with Features"
        description="Full hero section with subtle grid background, stats, and a 3-column feature row."
        code={heroCode}
      >
        <HeroPreview />
      </DemoSection>
    </ComponentPage>
  );
}
