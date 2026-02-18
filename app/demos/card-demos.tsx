import Image from "next/image";
import {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "poyraz-ui/atoms";
import { Button } from "poyraz-ui/atoms";
import { Badge } from "poyraz-ui/atoms";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "poyraz-ui/atoms";
import { Separator } from "poyraz-ui/atoms";
import { Typography } from "poyraz-ui/atoms";

// ═══════════════════════════════════════════════════════════════
// 1. BLOG POST CARD — elevated variant, horizontal on md+
// ═══════════════════════════════════════════════════════════════
export function BlogCard() {
  return (
    <Card variant="elevated">
      <div className="flex flex-col md:flex-row">
        <CardImage className="md:w-60 md:min-h-full md:border-b-0 md:border-r-2 md:border-dashed md:border-slate-300">
          <Image
            src="https://picsum.photos/seed/blog/400/250"
            alt="Blog cover"
            fill
            className="object-cover"
          />
        </CardImage>
        <div className="flex flex-col flex-1">
          <CardHeader>
            <div className="flex gap-2 mb-1">
              <Badge variant="outline">React</Badge>
              <Badge variant="secondary">Tutorial</Badge>
            </div>
            <CardTitle>
              O&apos;dan <span className="text-red-600 italic">React</span>{" "}
              Dersleri - React 101
            </CardTitle>
            <CardDescription>
              A comprehensive journey through the modern web stack. Learn React,
              State Management, Hooks...
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="flex items-center gap-2 flex-1 text-xs text-slate-400">
              <span>⏱ 4 min</span>
              <span>♥ 142</span>
              <span>💬 12</span>
            </div>
            <Button size="sm">Read</Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}

// ═══════════════════════════════════════════════════════════════
// 2. VIDEO CARD — bordered variant, play overlay
// ═══════════════════════════════════════════════════════════════
export function VideoCard() {
  return (
    <Card variant="bordered" className="group/video cursor-pointer max-w-sm">
      <CardImage>
        <Image
          src="https://picsum.photos/seed/video/400/225"
          alt="Video thumbnail"
          fill
          className="object-cover transition-transform duration-500 group-hover/video:scale-105"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300 group-hover/video:bg-black/50">
          <div className="h-14 w-14 flex items-center justify-center bg-red-600 border-2 border-dashed border-red-900 transition-transform duration-300 group-hover/video:scale-110">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="white">
              <polygon points="0,0 20,12 0,24" />
            </svg>
          </div>
        </div>
        {/* Duration badge */}
        <div className="absolute bottom-2 right-2">
          <Badge className="text-[10px] px-1.5 py-0.5">12:34</Badge>
        </div>
      </CardImage>
      <CardHeader>
        <CardTitle className="text-base">
          Next.js 16 — Yenilikler ve Değişiklikler
        </CardTitle>
        <CardDescription>
          Next.js 16 ile gelen tüm yenilikleri detaylıca inceliyoruz.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Avatar className="h-7 w-7">
          <AvatarImage src="https://i.pravatar.cc/40?img=5" alt="Author" />
          <AvatarFallback>PY</AvatarFallback>
        </Avatar>
        <div className="flex-1 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">Poyraz</span>
          <span className="mx-1">·</span>
          <span>2 gün önce</span>
        </div>
        <span className="text-xs text-slate-400">1.2K görüntülenme</span>
      </CardFooter>
    </Card>
  );
}

// ═══════════════════════════════════════════════════════════════
// 3. COURSE CARD — highlight variant, rating + CTA
// ═══════════════════════════════════════════════════════════════
export function CourseCard() {
  return (
    <Card variant="highlight" className="max-w-xs">
      <CardHeader>
        <Badge variant="destructive" className="w-fit">
          Popüler
        </Badge>
        <CardTitle>
          O&apos;dan <span className="text-red-600 italic">React</span> Dersleri
          - React 101
        </CardTitle>
        <CardDescription>
          A comprehensive journey through the modern web stack. Learn React,
          State Management, Hooks...
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Avatars row */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <Avatar key={i} className="h-8 w-8 border-2 border-white">
                <AvatarImage
                  src={`https://i.pravatar.cc/40?img=${i + 10}`}
                  alt="Student"
                />
                <AvatarFallback>S{i}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="font-bold text-slate-900">4.7</span>
            <span className="text-slate-400">/5</span>
          </div>
        </div>
        <div className="text-xs text-slate-400">
          24 ders · 6 saat · 1.200+ öğrenci
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Satın Al</Button>
      </CardFooter>
    </Card>
  );
}

// ═══════════════════════════════════════════════════════════════
// 4. PROFILE CARD — default variant, centered layout
// ═══════════════════════════════════════════════════════════════
export function ProfileCard() {
  return (
    <Card variant="default" className="max-w-xs">
      <CardHeader className="items-center text-center pt-8">
        <Avatar className="h-20 w-20 mb-2">
          <AvatarImage src="https://i.pravatar.cc/100?img=3" alt="Poyraz" />
          <AvatarFallback>PY</AvatarFallback>
        </Avatar>
        <CardTitle>Poyraz Avsever</CardTitle>
        <CardDescription>Full-Stack Developer</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex justify-center gap-6 text-sm">
          <div>
            <div className="font-bold text-slate-900">42</div>
            <div className="text-xs text-slate-400 uppercase tracking-wide">
              Posts
            </div>
          </div>
          <Separator orientation="vertical" className="h-10" />
          <div>
            <div className="font-bold text-slate-900">1.2K</div>
            <div className="text-xs text-slate-400 uppercase tracking-wide">
              Followers
            </div>
          </div>
          <Separator orientation="vertical" className="h-10" />
          <div>
            <div className="font-bold text-slate-900">89</div>
            <div className="text-xs text-slate-400 uppercase tracking-wide">
              Projects
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-center gap-3">
        <Button size="sm">Takip Et</Button>
        <Button variant="outline" size="sm">
          Mesaj
        </Button>
      </CardFooter>
    </Card>
  );
}

// ═══════════════════════════════════════════════════════════════
// 5. GHOST CARD — minimal, hover-reveal
// ═══════════════════════════════════════════════════════════════
export function GhostCard() {
  return (
    <Card variant="ghost" className="max-w-xs p-5 cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 flex items-center justify-center bg-red-600 text-white text-lg font-bold shrink-0 border-2 border-dashed border-red-900">
          ⚡
        </div>
        <div>
          <CardTitle className="text-base mb-1">Hızlı İpuçları</CardTitle>
          <CardDescription>
            Günlük geliştirme rutininizi hızlandıracak kısa notlar ve püf
            noktaları.
          </CardDescription>
        </div>
      </div>
    </Card>
  );
}
