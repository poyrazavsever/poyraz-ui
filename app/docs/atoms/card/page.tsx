"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "poyraz-ui/atoms";
import { Button } from "poyraz-ui/atoms";
import { Typography } from "poyraz-ui/atoms";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function CardPage() {
  return (
    <ComponentPage
      name="Card"
      description="Container component with 5 variants: default, bordered, elevated, highlight, and ghost. The building block for content sections."
      importCode={`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="Default"
        description="Standard dashed-border card."
        code={`<Card>
  <CardHeader>
    <CardTitle>Project Alpha</CardTitle>
    <CardDescription>A brutalist design system</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button size="sm">View Details</Button>
  </CardFooter>
</Card>`}
      >
        <div className="max-w-sm">
          <Card>
            <CardHeader>
              <CardTitle>Project Alpha</CardTitle>
              <CardDescription>A brutalist design system</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">Card content goes here.</Typography>
            </CardContent>
            <CardFooter>
              <Button size="sm">View Details</Button>
            </CardFooter>
          </Card>
        </div>
      </DemoSection>

      <DemoSection
        title="Variants"
        description="All 4 non-default card variants."
        code={`<Card variant="bordered">...</Card>
<Card variant="elevated">...</Card>
<Card variant="highlight">...</Card>
<Card variant="ghost">...</Card>`}
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>Bordered</CardTitle>
              <CardDescription>High contrast border</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">
                Bold slate-900 border for stronger visual presence.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Elevated</CardTitle>
              <CardDescription>Red offset shadow</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">
                Brutalist offset shadow with a red box behind.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="highlight">
            <CardHeader>
              <CardTitle>Highlight</CardTitle>
              <CardDescription>Left red accent</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">
                Red left border stripe draws attention to important content.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="ghost">
            <CardHeader>
              <CardTitle>Ghost</CardTitle>
              <CardDescription>No border</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">
                Transparent background with no borders.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
