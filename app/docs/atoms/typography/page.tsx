"use client";

import { ComponentPage, DemoSection } from "@/components/docs/code-block";
import { TextEffect, Typography } from "@/components/ui/atoms/typography";

const effects = [
  "hand-drawn",
  "contrast",
  "shimmer",
  "marker",
  "outline",
  "gradient",
  "glow",
  "boxed",
  "strike",
] as const;

export default function TypographyPage() {
  return (
    <ComponentPage
      name="Typography"
      description="A fixed semantic scale with consumer-controlled primary and secondary font families, plus composable inline emphasis effects."
      importCode={`import { Typography, TextEffect } from "@/components/ui/atoms/typography";`}
    >
      <DemoSection
        title="Semantic scale"
        code={`<Typography variant="display">Display</Typography>\n<Typography variant="h1">Heading</Typography>\n<Typography variant="body">Body</Typography>\n<Typography variant="caption">Caption</Typography>`}
      >
        <div className="space-y-4">
          <Typography variant="display">Build calmer interfaces.</Typography>
          <Typography variant="h1">A clear heading standard</Typography>
          <Typography variant="h2">Section title</Typography>
          <Typography variant="body">
            Body copy uses the primary font and a predictable line-height.
          </Typography>
          <Typography variant="caption">Supporting caption text</Typography>
        </div>
      </DemoSection>

      <DemoSection
        title="Mixed typography"
        description="Choose the secondary font explicitly; UI controls and ordinary body text stay on the primary font."
        code={`<Typography variant="display" balance>Design with <TextEffect effect="contrast">character.</TextEffect></Typography>`}
      >
        <Typography variant="display" balance className="max-w-3xl">
          Design systems with <TextEffect effect="contrast">character.</TextEffect>
        </Typography>
      </DemoSection>

      <DemoSection
        title="Text effects"
        description="Effects apply only to highlighted words and honor the reduced-motion preference."
        code={effects
          .map((effect) => `<TextEffect effect="${effect}">Highlighted</TextEffect>`)
          .join("\n")}
      >
        <div className="flex flex-wrap items-end gap-x-8 gap-y-5 text-2xl font-semibold">
          {effects.map((effect) => (
            <TextEffect key={effect} effect={effect}>
              {effect}
            </TextEffect>
          ))}
        </div>
      </DemoSection>

      <DemoSection
        title="Font customization"
        code={`:root {\n  --poyraz-font-primary: "Inter", sans-serif;\n  --poyraz-font-secondary: "Playfair Display", serif;\n}`}
      >
        <div className="rounded-xl border border-border bg-surface-subtle p-4 text-sm text-muted-foreground">
          Override the two CSS variables at app or theme scope. The component API and semantic scale
          remain unchanged.
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
