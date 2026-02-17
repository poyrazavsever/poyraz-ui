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

export default function AtomsPage() {
  return (
    <div className="space-y-12 pb-20">
      <div className="space-y-2">
        <Typography variant="h1">Atoms</Typography>
        <Typography variant="lead">
          Fundamental building blocks of the interface. Smallest units of usage.
        </Typography>
      </div>
      <Separator />

      {/* BUTTON */}
      <section className="space-y-6">
        <Typography variant="h2" id="button">
          Button
        </Typography>
        <div className="flex flex-wrap gap-4 p-8 border-2 border-dashed border-slate-200 bg-white">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      {/* INPUT */}
      <section className="space-y-6">
        <Typography variant="h2" id="input">
          Input
        </Typography>
        <div className="grid gap-4 max-w-sm p-8 border-2 border-dashed border-slate-200 bg-white">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input placeholder="hello@example.com" />
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
        </div>
      </section>

      {/* CHECKBOX */}
      <section className="space-y-6">
        <Typography variant="h2" id="checkbox">
          Checkbox
        </Typography>
        <div className="flex items-center space-x-2 p-8 border-2 border-dashed border-slate-200 bg-white">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </section>

      {/* BADGE */}
      <section className="space-y-6">
        <Typography variant="h2" id="badge">
          Badge
        </Typography>
        <div className="flex gap-4 p-8 border-2 border-dashed border-slate-200 bg-white">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      {/* AVATAR */}
      <section className="space-y-6">
        <Typography variant="h2" id="avatar">
          Avatar
        </Typography>
        <div className="flex gap-4 p-8 border-2 border-dashed border-slate-200 bg-white">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
        </div>
      </section>
    </div>
  );
}
