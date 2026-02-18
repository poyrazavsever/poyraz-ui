import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Typography } from "@/components/ui/atoms/typography";
import { Separator } from "@/components/ui/atoms/separator";
import { Logo } from "@/components/ui/atoms/logo";
import { Button } from "@/components/ui/atoms/button";
import { Input } from "@/components/ui/atoms/input";
import { Textarea } from "@/components/ui/atoms/textarea";
import { Checkbox } from "@/components/ui/atoms/checkbox";
import { Label } from "@/components/ui/atoms/label";
import { Badge } from "@/components/ui/atoms/badge";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/atoms/avatar";
import { Skeleton } from "@/components/ui/atoms/skeleton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/atoms/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/atoms/radio-group";
import { Switch } from "@/components/ui/atoms/switch";

function DemoBox({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-6 border-2 border-dashed border-slate-200 bg-white ${className}`}
    >
      {children}
    </div>
  );
}

export default function AtomsPage() {
  return (
    <div className="space-y-14 pb-10">
      {/* Header */}
      <div className="space-y-2">
        <Badge variant="outline" className="text-xs">
          14 components
        </Badge>
        <Typography variant="h1">Atoms</Typography>
        <Typography variant="lead">
          Fundamental building blocks of the interface. The smallest,
          indivisible units.
        </Typography>
      </div>
      <Separator />

      {/* BUTTON */}
      <section className="space-y-4">
        <Typography variant="h2" id="button">
          Button
        </Typography>
        <Typography variant="p">
          The primary interactive element. Supports 6 variants and 4 sizes.
        </Typography>
        <DemoBox>
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </DemoBox>
        <DemoBox>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </DemoBox>
      </section>

      {/* INPUT */}
      <section className="space-y-4">
        <Typography variant="h2" id="input">
          Input
        </Typography>
        <Typography variant="p">
          Standard text input with dashed border styling.
        </Typography>
        <DemoBox className="max-w-sm space-y-3">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input placeholder="hello@example.com" />
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <Label>Disabled</Label>
            <Input placeholder="Cannot type here" disabled />
          </div>
        </DemoBox>
      </section>

      {/* TEXTAREA */}
      <section className="space-y-4">
        <Typography variant="h2" id="textarea">
          Textarea
        </Typography>
        <DemoBox className="max-w-sm">
          <div className="space-y-2">
            <Label>Message</Label>
            <Textarea placeholder="Write something bold..." rows={4} />
          </div>
        </DemoBox>
      </section>

      {/* CHECKBOX */}
      <section className="space-y-4">
        <Typography variant="h2" id="checkbox">
          Checkbox
        </Typography>
        <DemoBox>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="newsletter" defaultChecked />
              <Label htmlFor="newsletter">Subscribe to newsletter</Label>
            </div>
          </div>
        </DemoBox>
      </section>

      {/* RADIO GROUP */}
      <section className="space-y-4">
        <Typography variant="h2" id="radio-group">
          Radio Group
        </Typography>
        <DemoBox className="max-w-sm">
          <RadioGroup defaultValue="option-1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-1" id="r1" />
              <Label htmlFor="r1">Option One</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="r2" />
              <Label htmlFor="r2">Option Two</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-3" id="r3" />
              <Label htmlFor="r3">Option Three</Label>
            </div>
          </RadioGroup>
        </DemoBox>
      </section>

      {/* SWITCH */}
      <section className="space-y-4">
        <Typography variant="h2" id="switch">
          Switch
        </Typography>
        <DemoBox>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Switch id="airplane" />
              <Label htmlFor="airplane">Airplane Mode</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="notifications" defaultChecked />
              <Label htmlFor="notifications">Notifications</Label>
            </div>
          </div>
        </DemoBox>
      </section>

      {/* BADGE */}
      <section className="space-y-4">
        <Typography variant="h2" id="badge">
          Badge
        </Typography>
        <DemoBox>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </DemoBox>
      </section>

      {/* AVATAR */}
      <section className="space-y-4">
        <Typography variant="h2" id="avatar">
          Avatar
        </Typography>
        <DemoBox>
          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>PA</AvatarFallback>
            </Avatar>
            <Avatar className="h-14 w-14">
              <AvatarFallback className="text-lg">UI</AvatarFallback>
            </Avatar>
          </div>
        </DemoBox>
      </section>

      {/* CARD */}
      <section className="space-y-4">
        <Typography variant="h2" id="card">
          Card
        </Typography>
        <Typography variant="p">
          Supports 5 variants: default, bordered, elevated, highlight, ghost.
        </Typography>
        <div className="grid sm:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>Standard dashed border</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">
                Clean and simple card with the signature dashed border style.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="bordered">
            <CardHeader>
              <CardTitle>Bordered Card</CardTitle>
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
              <CardTitle>Elevated Card</CardTitle>
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
              <CardTitle>Highlight Card</CardTitle>
              <CardDescription>Left red accent</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">
                Red left border stripe draws attention to important content.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section className="space-y-4">
        <Typography variant="h2" id="typography">
          Typography
        </Typography>
        <DemoBox className="space-y-4">
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="p">
            This is a paragraph. The quick brown fox jumps over the lazy dog.
          </Typography>
          <Typography variant="lead">Lead text for introductions.</Typography>
          <Typography variant="large">Large text.</Typography>
          <Typography variant="small">Small text.</Typography>
          <Typography variant="muted">
            Muted text for supporting info.
          </Typography>
          <Typography variant="blockquote">
            This is a blockquote element.
          </Typography>
        </DemoBox>
      </section>

      {/* LABEL */}
      <section className="space-y-4">
        <Typography variant="h2" id="label">
          Label
        </Typography>
        <DemoBox className="max-w-sm space-y-2">
          <Label htmlFor="demo-input">Username</Label>
          <Input id="demo-input" placeholder="Enter username" />
        </DemoBox>
      </section>

      {/* SEPARATOR */}
      <section className="space-y-4">
        <Typography variant="h2" id="separator">
          Separator
        </Typography>
        <DemoBox>
          <div className="space-y-3">
            <p className="text-sm">Content above</p>
            <Separator />
            <p className="text-sm">Content below</p>
          </div>
        </DemoBox>
      </section>

      {/* SKELETON */}
      <section className="space-y-4">
        <Typography variant="h2" id="skeleton">
          Skeleton
        </Typography>
        <DemoBox>
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </DemoBox>
      </section>

      {/* LOGO */}
      <section className="space-y-4">
        <Typography variant="h2" id="logo">
          Logo
        </Typography>
        <Typography variant="p">
          Branded logo component with the signature red offset shadow.
        </Typography>
        <DemoBox>
          <div className="flex items-center gap-6">
            <Logo width={40} height={40} />
            <Logo width={56} height={56} />
          </div>
        </DemoBox>
      </section>

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
