import { Button } from "@/components/ui/atoms/button";
import { Logo } from "@/components/ui/atoms/logo";
import { Typography } from "@/components/ui/atoms/typography";
import { Input } from "@/components/ui/atoms/input";
import { Textarea } from "@/components/ui/atoms/textarea";
import { Label } from "@/components/ui/atoms/label";
import { Badge } from "@/components/ui/atoms/badge";
import { Skeleton } from "@/components/ui/atoms/skeleton";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/atoms/avatar";
import { Separator } from "@/components/ui/atoms/separator";
import { CheckboxDemo } from "./demos/checkbox-demo";
import { RadioDemo } from "./demos/radio-demo";
import { SwitchDemo } from "./demos/switch-demo";
import {
  BlogCard,
  VideoCard,
  CourseCard,
  ProfileCard,
  GhostCard,
} from "./demos/card-demos";
import { MoleculesDemo } from "@/components/demos/molecules-demo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16 lg:p-24 gap-16">
      {/* ── Header ──────────────────────────────────── */}
      <div className="text-center space-y-3">
        <Typography variant="h1">Poyraz UI Kit</Typography>
        <Typography variant="lead">
          Brutalist Design System Components
        </Typography>
      </div>

      <div className="grid gap-16 w-full max-w-4xl">
        {/* ═══════════════════════════════════════════ */}
        {/* LOGO                                        */}
        {/* ═══════════════════════════════════════════ */}
        <section className="space-y-6">
          <Typography variant="h2">Logo</Typography>
          <div className="flex flex-wrap gap-8 items-end">
            <div className="space-y-2">
              <Typography variant="small" className="text-slate-500">
                Default (48×48)
              </Typography>
              <Logo />
            </div>
            <div className="space-y-2">
              <Typography variant="small" className="text-slate-500">
                Large (80×80)
              </Typography>
              <Logo width={80} height={80} />
            </div>
            <div className="space-y-2">
              <Typography variant="small" className="text-slate-500">
                XL (120×120)
              </Typography>
              <Logo width={120} height={120} />
            </div>
          </div>
        </section>

        <Separator />
        {/* ═══════════════════════════════════════════ */}
        {/* BUTTON                                      */}
        {/* ═══════════════════════════════════════════ */}
        <section className="space-y-6">
          <Typography variant="h2">Button</Typography>

          <div className="space-y-3">
            <Typography variant="small" className="text-slate-500">
              Variants
            </Typography>
            <div className="flex flex-wrap gap-3 items-center">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div className="space-y-3">
            <Typography variant="small" className="text-slate-500">
              Sizes
            </Typography>
            <div className="flex flex-wrap items-end gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="Add">
                <span className="text-lg">＋</span>
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <Typography variant="small" className="text-slate-500">
              States
            </Typography>
            <div className="flex flex-wrap gap-3 items-center">
              <Button disabled>Disabled</Button>
              <Button loading>Loading</Button>
              <Button variant="outline" disabled>
                Disabled
              </Button>
            </div>
          </div>
        </section>

        <Separator />

        {/* ═══════════════════════════════════════════ */}
        {/* INPUT & TEXTAREA                            */}
        {/* ═══════════════════════════════════════════ */}
        <section className="space-y-6">
          <Typography variant="h2">Input & Textarea</Typography>

          <div className="grid gap-4 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="hello@poyraz.dev" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled-input">Disabled</Label>
              <Input
                id="disabled-input"
                placeholder="Cannot type here"
                disabled
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="file">File Upload</Label>
              <Input id="file" type="file" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Write your message..." />
            </div>
          </div>
        </section>

        <Separator />

        {/* ═══════════════════════════════════════════ */}
        {/* CHECKBOX, RADIO, SWITCH                     */}
        {/* ═══════════════════════════════════════════ */}
        <section className="space-y-6">
          <Typography variant="h2">Checkbox, Radio & Switch</Typography>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <Typography variant="small" className="text-slate-500">
                Checkbox
              </Typography>
              <CheckboxDemo />
            </div>
            <div className="space-y-3">
              <Typography variant="small" className="text-slate-500">
                Radio Group
              </Typography>
              <RadioDemo />
            </div>
            <div className="space-y-3">
              <Typography variant="small" className="text-slate-500">
                Switch
              </Typography>
              <SwitchDemo />
            </div>
          </div>
        </section>

        <Separator />

        {/* ═══════════════════════════════════════════ */}
        {/* BADGE                                       */}
        {/* ═══════════════════════════════════════════ */}
        <section className="space-y-6">
          <Typography variant="h2">Badge</Typography>
          <div className="flex flex-wrap gap-3 items-center">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        <Separator />

        {/* ═══════════════════════════════════════════ */}
        {/* AVATAR                                      */}
        {/* ═══════════════════════════════════════════ */}
        <section className="space-y-6">
          <Typography variant="h2">Avatar</Typography>
          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/80?img=3" alt="User" />
              <AvatarFallback>PA</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>PY</AvatarFallback>
            </Avatar>
            <Avatar className="h-14 w-14">
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
          </div>
        </section>

        <Separator />

        {/* ═══════════════════════════════════════════ */}
        {/* SKELETON                                    */}
        {/* ═══════════════════════════════════════════ */}
        <section className="space-y-6">
          <Typography variant="h2">Skeleton</Typography>
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-10" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
            <Skeleton className="h-24 w-full" />
          </div>
        </section>

        <Separator />

        {/* ═══════════════════════════════════════════ */}
        {/* SEPARATOR                                   */}
        {/* ═══════════════════════════════════════════ */}
        <section className="space-y-6">
          <Typography variant="h2">Separator</Typography>
          <div className="space-y-4">
            <Typography variant="p">Content above separator</Typography>
            <Separator />
            <Typography variant="p">Content below separator</Typography>
            <div className="flex items-center gap-4 h-6">
              <span className="text-sm">Left</span>
              <Separator orientation="vertical" />
              <span className="text-sm">Center</span>
              <Separator orientation="vertical" />
              <span className="text-sm">Right</span>
            </div>
          </div>
        </section>

        <Separator />

        {/* ═══════════════════════════════════════════ */}
        {/* CARD                                        */}
        {/* ═══════════════════════════════════════════ */}
        <section className="space-y-8">
          <Typography variant="h2">Card</Typography>

          <div className="space-y-3">
            <Typography variant="small" className="text-slate-500">
              Blog Card — elevated variant, horizontal
            </Typography>
            <BlogCard />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <Typography variant="small" className="text-slate-500">
                Video Card — bordered variant
              </Typography>
              <VideoCard />
            </div>
            <div className="space-y-3">
              <Typography variant="small" className="text-slate-500">
                Course Card — highlight variant
              </Typography>
              <CourseCard />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <Typography variant="small" className="text-slate-500">
                Profile Card — default variant
              </Typography>
              <ProfileCard />
            </div>
            <div className="space-y-3">
              <Typography variant="small" className="text-slate-500">
                Ghost Card — hover reveal
              </Typography>
              <GhostCard />
            </div>
          </div>
        </section>

        <Separator />

        {/* ═══════════════════════════════════════════ */}
        {/* MOLECULES                                   */}
        {/* ═══════════════════════════════════════════ */}
        <section className="space-y-8">
          <Typography variant="h2">Molecules</Typography>
          <MoleculesDemo />
        </section>
      </div>
    </main>
  );
}
