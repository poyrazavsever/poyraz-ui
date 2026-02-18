"use client";

import { Typography } from "poyraz-ui/atoms";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function TypographyPage() {
  return (
    <ComponentPage
      name="Typography"
      description="Semantic text component with variant-driven styles. Supports headings, paragraphs, lead text, blockquotes, and more."
      importCode={`import { Typography } from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="Headings"
        description="Four heading levels with bold tracking-tight styles."
        code={`<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="h3">Heading 3</Typography>
<Typography variant="h4">Heading 4</Typography>`}
      >
        <div className="space-y-4">
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
        </div>
      </DemoSection>

      <DemoSection
        title="Body Text"
        code={`<Typography variant="p">Regular paragraph text.</Typography>
<Typography variant="lead">Lead text for introductions.</Typography>
<Typography variant="large">Large text.</Typography>
<Typography variant="small">Small text.</Typography>
<Typography variant="muted">Muted / supporting text.</Typography>`}
      >
        <div className="space-y-3">
          <Typography variant="p">
            Regular paragraph text. The quick brown fox jumps over the lazy dog.
          </Typography>
          <Typography variant="lead">Lead text for introductions.</Typography>
          <Typography variant="large">Large text.</Typography>
          <Typography variant="small">Small text.</Typography>
          <Typography variant="muted">Muted / supporting text.</Typography>
        </div>
      </DemoSection>

      <DemoSection
        title="Blockquote"
        code={`<Typography variant="blockquote">
  Design is not just what it looks like — design is how it works.
</Typography>`}
      >
        <Typography variant="blockquote">
          Design is not just what it looks like — design is how it works.
        </Typography>
      </DemoSection>
    </ComponentPage>
  );
}
