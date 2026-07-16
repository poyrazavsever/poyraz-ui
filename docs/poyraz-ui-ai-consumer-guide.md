# Poyraz UI — AI Consumer Guide

Bu doküman, `poyraz-ui` paketini başka bir React/Next.js projesinde kullanmak isteyen bir geliştiricinin veya bir AI kod asistanının doğrudan okuyup doğru kararlar verebilmesi için hazırlanmıştır.

Amaç: Bir projede UI geliştirirken AI’a bu dosyayı verip “poyraz-ui kullanarak bu ekranı oluştur” dediğinizde, AI’ın doğru import path’lerini, doğru componentleri, doğru variantları, doğru tema yaklaşımını ve doğru tasarım dilini uygulaması.

Referans paket: `poyraz-ui@3.0.2`

---

## 1. AI için kısa talimat

Eğer bu dokümanı bir AI’a vereceksen, aşağıdaki bölümü prompt’un başına koyabilirsin:

```md
Bu projede UI için poyraz-ui kullan.

Kurallar:
- React componentleri için `poyraz-ui/atoms`, `poyraz-ui/molecules`, `poyraz-ui/organisms` import path’lerini kullan.
- Global CSS’e `@import "poyraz-ui/preset.css";` eklenmiş kabul et; ekli değilse ekle.
- Gereksiz custom CSS yazma. Önce component variantlarını, radius/size/surface/appearance/effect prop’larını ve Tailwind utility classlarını kullan.
- Tasarım dili: minimal, soft, hafif rounded, clean border, mümkün olduğunda gölgesiz, dark-mode uyumlu, semantic token bazlı.
- Buttonlarda varsayılan hover motion için mümkünse `effect="swap"` kullan. Shine/fill/border-draw efektlerini yalnızca bilinçli vurgu için kullan.
- Form, overlay, dropdown, dialog, sheet, tabs, tooltip gibi davranışlı componentlerde poyraz-ui molecule componentlerini kullan; kendi headless implementation’ını yazma.
- Layout seviyesinde Navbar, Sidebar, Footer, AnnouncementBar ve DataTable gerekiyorsa `poyraz-ui/organisms` kullan.
- Componentleri erişilebilir şekilde kur: label/input ilişkisi, keyboard navigation, focus ring, aria-label, dialog title gibi gereklilikleri koru.
```

---

## 2. Poyraz UI nedir?

Poyraz UI; React, Tailwind CSS v4 ve Radix UI temelli, minimal ve soft-glass tasarım diline sahip bir component sistemidir.

Temel karakter:

- Compact ve minimal görünüm
- Clean border ağırlıklı yüzeyler
- Gölge kullanımını minimumda tutan sade tasarım
- Hafif rounded köşeler
- Glass, soft, solid yüzey seçenekleri
- Semantic token sistemi
- Dark mode uyumu
- Radix tabanlı erişilebilir primitives
- Shadcn mantığına yakın source registry desteği
- Npm paketi olarak merkezi kullanım
- Atomic Design yapısı:
  - Atoms
  - Molecules
  - Organisms
  - Blocks/templates

---

## 3. Dağıtım modeli

Poyraz UI iki farklı kullanım modelini destekler.

### 3.1. Npm package kullanımı

Merkezi versiyon yönetimi, hızlı kurulum ve paket importları için kullanılır.

```bash
pnpm add poyraz-ui@3
```

```tsx
import { Button, Card, Input } from "poyraz-ui/atoms";
import { Dialog, Tabs } from "poyraz-ui/molecules";
import { Navbar } from "poyraz-ui/organisms";
```

Bu modelde component kaynak kodu projenize kopyalanmaz. Paket güncellendikçe componentler merkezi olarak güncellenir.

### 3.2. Source registry kullanımı

Shadcn tarzı “component’i projeye kopyala, sahiplen ve özelleştir” modeli için kullanılır.

`components.json` içine registry namespace eklenir:

```json
{
  "registries": {
    "@poyraz": "https://ui.poyrazavsever.com/r/{name}.json"
  }
}
```

Örnek component ekleme:

```bash
pnpm dlx shadcn@latest add @poyraz/button
```

Bu yaklaşımda component, projenizin configured `aliases.ui` klasörüne kopyalanır. Çok derin özelleştirme gerekiyorsa bu model tercih edilir.

AI’a tavsiye:

- Proje hızlıca UI geliştirecekse npm package kullan.
- Componentin kodu projede değiştirilecekse registry/source copy kullan.
- Kullanıcı “shadcn gibi kopyalansın” derse source registry modelini öner.

---

## 4. Kurulum

### 4.1. Paket kurulumu

```bash
pnpm add poyraz-ui@3
```

Alternatifler:

```bash
npm install poyraz-ui@3
yarn add poyraz-ui@3
```

### 4.2. Peer dependencies

Zorunlu:

```json
{
  "react": ">=18",
  "react-dom": ">=18",
  "tailwindcss": ">=4"
}
```

Opsiyonel:

- `react-hook-form` — `Form` molecule için
- `@hookform/resolvers` — schema resolver için
- `zod` — form validation için
- `reactive-switcher` — hazır theme objectleriyle dinamik tema için
- `mermaid` — `Mermaid` molecule için

### 4.3. CSS kurulumu

Root global CSS dosyasına ekle:

```css
@import "tailwindcss";
@import "poyraz-ui/preset.css";
```

Next.js App Router örneği:

```tsx
// app/layout.tsx
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
```

`poyraz-ui/preset.css` şunları sağlar:

- Semantic color token bridge
- Typography tokenları
- Radius/token mapping
- Motion keyframe ve animation utility’leri
- Dark mode uyumlu CSS variable altyapısı
- Componentlerin beklediği base CSS layer

Bu import yoksa componentler görsel olarak eksik, renksiz veya animasyonsuz görünebilir.

---

## 5. Import stratejisi

Önerilen import path’leri:

```tsx
import { Button, Card, Input } from "poyraz-ui/atoms";
import { Dialog, DropdownMenu, Tabs } from "poyraz-ui/molecules";
import { Navbar, Sidebar, Footer } from "poyraz-ui/organisms";
```

Ana barrel de kullanılabilir:

```tsx
import { Button, Dialog, Navbar } from "poyraz-ui";
```

Fakat AI için öneri:

- Atom seviyesindeki componentleri `poyraz-ui/atoms` üzerinden import et.
- Molecule seviyesindeki componentleri `poyraz-ui/molecules` üzerinden import et.
- Layout ve büyük section componentlerini `poyraz-ui/organisms` üzerinden import et.
- Theme objectleri gerekiyorsa `poyraz-ui/themes` kullan.

Theme import:

```tsx
import { poyrazLightTheme, poyrazDarkTheme, poyrazThemes } from "poyraz-ui/themes";
```

Utility:

```tsx
import { cn } from "poyraz-ui";
```

---

## 6. Tasarım dili

Poyraz UI’ın ana tasarım dili:

- Minimal
- Soft
- Hafif rounded
- Clean border
- Glassy ama abartısız
- Gölgesiz veya çok düşük gölgeli
- Semantic token bazlı
- Form elemanlarında net focus ring
- Overlaylerde kontrollü blur/surface
- Dark mode’da kontrastı koruyan yüzeyler

AI tasarım kararları:

- Büyük gölgelerden kaçın.
- Gereksiz custom border override yazma.
- Kartlarda öncelikle `variant="default"`, `variant="glass"`, `variant="soft"` veya `variant="outline"` kullan.
- Buttonlarda vurgu CTA için `variant="default"`; ikincil CTA için `variant="secondary"`, `variant="outline"` veya `variant="glass"` kullan.
- Radius için genellikle `radius="sm"` veya `radius="md"` tercih et.
- Çok pill/rounded istenmedikçe `radius="full"` kullanma.
- Interactive hover için önce componentin kendi variant/effect prop’larını kullan.

---

## 7. Tema ve token sistemi

Poyraz UI componentleri semantic Tailwind utility’leri ve CSS variable’ları üzerinden çalışır.

Sık kullanılan semantic utility’ler:

```txt
bg-background
bg-card
bg-muted
bg-primary
text-foreground
text-muted-foreground
text-primary
border-border
ring-ring
```

Custom tema yapılacaksa genellikle global CSS’te `--poyraz-*` variable’ları override edilir.

Örnek:

```css
:root {
  --poyraz-primary: #dc2626;
  --poyraz-radius-md: 0.625rem;
}

.dark {
  --poyraz-background: #09090b;
  --poyraz-foreground: #fafafa;
}
```

AI için kural:

- Hard-coded renkleri minimumda tut.
- `#dc2626` gibi brand renkleri yalnızca gerçekten brand vurgusu gerekiyorsa kullan.
- Önce `primary`, `muted`, `border`, `foreground`, `card` tokenlarını kullan.

---

## 8. Motion sistemi

Poyraz UI motion sistemi CSS-only yaklaşımı tercih eder.

Button effect’leri:

```tsx
<Button effect="none">Default</Button>
<Button effect="shine">Shine</Button>
<Button effect="fill" fillDirection="up">Fill</Button>
<Button effect="swap" swapTarget="both">Swap</Button>
<Button effect="border-draw">Border Draw</Button>
```

Button effect prop değerleri:

```ts
type ButtonEffect = "none" | "shine" | "fill" | "swap" | "border-draw";
type ButtonFillDirection = "right" | "left" | "up" | "down";
type ButtonSwapTarget = "icon" | "label" | "both";
```

AI için motion kuralı:

- Standart CTA için `effect="swap"` kullan.
- Shine efektini premium/brand vurgu için kullan.
- Fill efektini güçlü hover dolum istenirse kullan.
- Border-draw efektini outline butonlarda dekoratif vurgu için kullan.
- Hareketleri erişilebilir tut; animasyonla bilgi verme.

Swap anatomy için önerilen yapı:

```tsx
import { Button, ButtonIcon, ButtonLabel } from "poyraz-ui/atoms";

<Button effect="swap" swapTarget="both">
  <ButtonLabel>Devam et</ButtonLabel>
  <ButtonIcon>
    <ArrowRightIcon />
  </ButtonIcon>
</Button>
```

Not:

- `asChild` kullanımı bazı durumlarda özel children yapılarıyla effect anatomy’sini bozabilir.
- Swap effect’in net çalışması için `ButtonLabel` ve `ButtonIcon` doğrudan `Button` içinde kullanılmalıdır.

---

## 9. Atoms

Atoms, en küçük ve temel UI yapı taşlarıdır.

### 9.1. Button

Import:

```tsx
import { Button, ButtonIcon, ButtonLabel } from "poyraz-ui/atoms";
```

Kullanım:

```tsx
<Button>Kaydet</Button>

<Button variant="secondary" size="sm" radius="sm">
  İptal
</Button>

<Button effect="swap" swapTarget="both">
  <ButtonLabel>Detayları gör</ButtonLabel>
  <ButtonIcon>→</ButtonIcon>
</Button>
```

Variantlar:

```txt
default
secondary
outline
glass
destructive
soft
ghost
link
```

Size:

```txt
xs
sm
default
lg
icon-sm
icon
icon-lg
```

Radius:

```txt
none
xs
sm
md
lg
xl
2xl
full
```

Effect:

```txt
none
shine
fill
swap
border-draw
```

AI önerisi:

- Primary CTA: `variant="default" effect="swap"`
- Secondary CTA: `variant="secondary" effect="swap"`
- Icon-only: `size="icon"` ve mutlaka `aria-label`
- Loading durumunda `loading` prop kullan.

---

### 9.2. Badge

Import:

```tsx
import { Badge } from "poyraz-ui/atoms";
```

Kullanım:

```tsx
<Badge>Yeni</Badge>
<Badge variant="outline">Beta</Badge>
<Badge variant="success">Aktif</Badge>
```

Variantlar:

```txt
default
secondary
outline
glass
info
success
warning
destructive
```

Size:

```txt
sm
default
lg
```

Radius:

```txt
sm
md
full
```

AI önerisi:

- Durum göstergelerinde `success`, `warning`, `destructive`, `info`
- Kategori etiketlerinde `outline` veya `secondary`
- Premium/soft yüzeylerde `glass`

---

### 9.3. Avatar

Import:

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "poyraz-ui/atoms";
```

Kullanım:

```tsx
<Avatar size="lg" radius="full">
  <AvatarImage src="/avatar.png" alt="Poyraz Avsever" />
  <AvatarFallback>PA</AvatarFallback>
</Avatar>
```

Size:

```txt
xs
sm
default
lg
xl
```

Radius:

```txt
sm
md
lg
full
```

AI önerisi:

- Kullanıcı profilinde `radius="full"`
- Kurumsal logo/avatar gridlerinde `radius="md"` veya `radius="lg"`

---

### 9.4. Card

Import:

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
  CardImage,
} from "poyraz-ui/atoms";
```

Kullanım:

```tsx
<Card variant="default" radius="md">
  <CardHeader>
    <CardTitle>Başlık</CardTitle>
    <CardDescription>Açıklama metni</CardDescription>
  </CardHeader>
  <CardContent>
    İçerik
  </CardContent>
  <CardFooter>
    Footer
  </CardFooter>
</Card>
```

Variantlar:

```txt
default
outline
glass
soft
ghost
elevated
interactive
bordered
highlight
```

Radius:

```txt
none
md
lg
xl
2xl
```

AI önerisi:

- Genel layout kartı: `variant="default"`
- Cam efektli dashboard: `variant="glass"`
- Subtle info yüzeyi: `variant="soft"`
- Clickable kart: `variant="interactive"`
- Gölge istenmiyorsa `elevated` kullanma.

---

### 9.5. Card variants

Import:

```tsx
import {
  BasicContentCard,
  ImageContentCard,
  HorizontalCard,
  ProfileCard,
  StatisticCard,
  PricingPlanCard,
  FeatureCard,
  GlassCard,
  InteractiveCard,
  ExpandableCard,
} from "poyraz-ui/atoms";
```

Kullanım amaçları:

- `BasicContentCard`: başlık, açıklama, aksiyon butonu
- `ImageContentCard`: üstte görsel, altta içerik
- `HorizontalCard`: solda görsel, sağda içerik
- `ProfileCard`: avatar, isim, rol, bio, sosyal aksiyonlar
- `StatisticCard`: KPI/metrik kartı
- `PricingPlanCard`: fiyat planı
- `FeatureCard`: ikon + özellik başlığı + açıklama
- `GlassCard`: glass yüzey kartı
- `InteractiveCard`: hover/interaction odaklı kart
- `ExpandableCard`: açılır/kapanır içerik kartı

AI önerisi:

- Landing page feature grid için `FeatureCard`
- Dashboard KPI için `StatisticCard`
- Pricing ekranı için `PricingPlanCard`
- Portfolio kişi kartı için `ProfileCard`

---

### 9.6. Input

Import:

```tsx
import { Input, InputGroup, InputGroupAddon } from "poyraz-ui/atoms";
```

Kullanım:

```tsx
<Input placeholder="E-posta" />

<InputGroup variant="glass" radius="md">
  <InputGroupAddon position="start">@</InputGroupAddon>
  <Input placeholder="kullanici" />
</InputGroup>
```

Field variantları:

```txt
default
glass
soft
```

Radius:

```txt
none
sm
md
lg
xl
full
```

AI önerisi:

- Normal form alanı: `variant="default"`
- Cam yüzeylerde: `variant="glass"`
- Hafif arka planlı alanlarda: `variant="soft"`
- Icon prefix/suffix için `InputGroup` + `InputGroupAddon`

---

### 9.7. Form Fields

Import:

```tsx
import {
  NumberInput,
  MaskedInput,
  SearchInput,
  PhoneInput,
  PasswordInput,
  UrlInput,
  applyInputMask,
} from "poyraz-ui/atoms";
```

Kullanım:

```tsx
<SearchInput placeholder="Ara..." onSearch={(value) => console.log(value)} />

<PhoneInput
  countryCode="+90"
  mask="### ### ## ##"
  onValueChange={(formatted, raw) => console.log(formatted, raw)}
/>

<UrlInput
  protocol="https://"
  onValueChange={(value, absoluteUrl) => console.log(absoluteUrl)}
/>

<PasswordInput placeholder="Şifre" />

<MaskedInput
  mask="##/##/####"
  placeholder="gg/aa/yyyy"
  onValueChange={(formatted, raw) => console.log(formatted, raw)}
/>
```

AI önerisi:

- Search box için custom input yazma; `SearchInput`
- Telefon için `PhoneInput`
- URL için `UrlInput`
- Şifre için `PasswordInput`
- Basit maskeler için `MaskedInput`

---

### 9.8. Textarea

Import:

```tsx
import { Textarea } from "poyraz-ui/atoms";
```

Kullanım:

```tsx
<Textarea variant="soft" radius="md" placeholder="Mesajınız" />
```

Variantlar `Input` ile aynıdır:

```txt
default
glass
soft
```

---

### 9.9. Checkbox

Import:

```tsx
import { Checkbox } from "poyraz-ui/atoms";
```

Kullanım:

```tsx
<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Şartları kabul ediyorum</Label>
</div>
```

Radix tabanlıdır. Controlled veya uncontrolled kullanılabilir.

---

### 9.10. Radio Group

Import:

```tsx
import { RadioGroup, RadioGroupItem } from "poyraz-ui/atoms";
```

Kullanım:

```tsx
<RadioGroup defaultValue="monthly">
  <div className="flex items-center gap-2">
    <RadioGroupItem id="monthly" value="monthly" />
    <Label htmlFor="monthly">Aylık</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem id="yearly" value="yearly" />
    <Label htmlFor="yearly">Yıllık</Label>
  </div>
</RadioGroup>
```

---

### 9.11. Switch

Import:

```tsx
import { Switch } from "poyraz-ui/atoms";
```

Kullanım:

```tsx
<Switch checked={enabled} onCheckedChange={setEnabled} />
```

AI önerisi:

- Aç/kapat ayarlarında kullan.
- Checkbox yerine boolean ayar toggle’larında tercih et.

---

### 9.12. Label

Import:

```tsx
import { Label } from "poyraz-ui/atoms";
```

Kullanım:

```tsx
<Label htmlFor="email">E-posta</Label>
<Input id="email" type="email" />
```

AI kuralı:

- Form alanlarına her zaman label ekle.
- Placeholder label’ın yerine geçmez.

---

### 9.13. Separator

Import:

```tsx
import { Separator } from "poyraz-ui/atoms";
```

Kullanım:

```tsx
<Separator />
<Separator orientation="vertical" />
```

---

### 9.14. Skeleton

Import:

```tsx
import { Skeleton } from "poyraz-ui/atoms";
```

Kullanım:

```tsx
<Skeleton className="h-8 w-48" />
<Skeleton className="h-32 rounded-md" />
```

AI önerisi:

- Veri yüklenirken layout shift azaltmak için kullan.

---

### 9.15. Scroll Area

Import:

```tsx
import { ScrollArea } from "poyraz-ui/atoms";
```

Kullanım:

```tsx
<ScrollArea maxHeight={320} orientation="vertical">
  Uzun içerik
</ScrollArea>
```

Props:

```txt
maxHeight?: string | number
orientation?: "vertical" | "horizontal" | "both"
scrollbarSize?: "sm" | "md" | "lg"
```

---

### 9.16. Logo

Import:

```tsx
import { Logo } from "poyraz-ui/atoms";
```

Kullanım:

```tsx
<Logo src="/logo.png" alt="Brand" href="/" effect="shine-loop" radius="sm" />
```

Effect:

```txt
none
shine
shine-loop
```

AI önerisi:

- Navbar’da avatar yerine logo gerekiyorsa `Logo` kullan.
- Premium/brand hissi için `effect="shine-loop"` kullanılabilir.

---

### 9.17. Typography ve TextEffect

Import:

```tsx
import { Typography, TextEffect } from "poyraz-ui/atoms";
```

Kullanım:

```tsx
<Typography variant="h1" component="h1">
  Modern <TextEffect effect="shimmer" tone="primary">UI sistemi</TextEffect>
</Typography>

<Typography variant="p" className="text-muted-foreground">
  Açıklama metni
</Typography>
```

Typography variantları:

```txt
display
h1
h2
h3
h4
large
lead
p
body
small
caption
muted
blockquote
list
```

Font:

```txt
primary
secondary
inherit
```

TextEffect variantları:

```txt
none
marker
strike
outline
hand-drawn
contrast
shimmer
gradient
glow
boxed
```

Tone:

```txt
primary
neutral
warning
```

AI önerisi:

- Heading’lerde `Typography` kullan.
- Vurgulu kelimelerde custom span/CSS yerine `TextEffect` kullan.
- Shiny gradient text için `effect="shimmer"` veya `effect="gradient"`.
- Elle çizilmiş underline hissi için `effect="hand-drawn"`.
- Marker vurgusu için `effect="marker"`.
- Hollow text için `effect="outline"`.

---

### 9.18. Background Patterns

Import:

```tsx
import {
  PatternDots,
  PatternGrid,
  PatternLines,
  PatternDiagonal,
  PatternCross,
  PatternCheckerboard,
  PatternDiamond,
  PatternZigzag,
  PatternDashedGrid,
  PatternRadial,
} from "poyraz-ui/atoms";
```

Kullanım:

```tsx
<div className="relative overflow-hidden">
  <PatternDots overlay opacity={0.12} size={24} />
  <div className="relative z-10">İçerik</div>
</div>
```

Pattern props:

```txt
color?: string
opacity?: number
size?: number
overlay?: boolean
```

`PatternRadial` props:

```txt
from?: string
to?: string
opacity?: number
overlay?: boolean
```

AI önerisi:

- Hero background veya empty state için kullan.
- Pattern overlay ise parent `relative overflow-hidden` olmalı.

---

## 10. Molecules

Molecules, birkaç atomun birlikte oluşturduğu daha davranışlı UI parçalarıdır.

### 10.1. Accordion

Import:

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "poyraz-ui/molecules";
```

Kullanım:

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1" separated surface="soft" radius="md">
    <AccordionTrigger>Başlık</AccordionTrigger>
    <AccordionContent>İçerik</AccordionContent>
  </AccordionItem>
</Accordion>
```

AI önerisi:

- FAQ, settings, detay aç/kapa için kullan.
- Custom collapse state yazma; Radix props kullan.

---

### 10.2. Alert

Import:

```tsx
import { Alert, AlertTitle, AlertDescription } from "poyraz-ui/molecules";
```

Kullanım:

```tsx
<Alert variant="success" appearance="soft" radius="md" motion="slide">
  <AlertTitle>Başarılı</AlertTitle>
  <AlertDescription>Kayıt tamamlandı.</AlertDescription>
</Alert>
```

Variant:

```txt
default
info
success
warning
destructive
```

Appearance:

```txt
inline
outline
glass
soft
filled
```

Motion:

```txt
none
scale
fade
slide
```

Ek props:

```txt
icon?: ReactNode
dismissible?: boolean
onDismiss?: () => void
dismissLabel?: string
```

AI önerisi:

- Inline bilgilendirme: `appearance="inline"`
- Form/global feedback: `appearance="soft"` veya `appearance="outline"`
- Kritik hata: `variant="destructive"`

---

### 10.3. Tooltip

Import:

```tsx
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "poyraz-ui/molecules";
```

Kullanım:

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="icon" aria-label="Ayarlar">⚙</Button>
    </TooltipTrigger>
    <TooltipContent side="bottom" surface="soft" radius="sm">
      Ayarlar
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

Surface:

```txt
solid
soft
glass
```

Radius:

```txt
none
sm
md
lg
xl
```

AI önerisi:

- Icon-only butonlarda tooltip kullan.
- Tooltip içeriğini kısa tut.

---

### 10.4. Popover

Import:

```tsx
import { Popover, PopoverTrigger, PopoverContent } from "poyraz-ui/molecules";
```

Kullanım:

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button>Filtre</Button>
  </PopoverTrigger>
  <PopoverContent surface="soft" radius="md" align="end">
    Filtre içeriği
  </PopoverContent>
</Popover>
```

AI önerisi:

- Küçük floating panel için Popover.
- Büyük panel gerekiyorsa Sheet veya Dialog.

---

### 10.5. Hover Card

Import:

```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from "poyraz-ui/molecules";
```

Kullanım:

```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <a href="/profile">Poyraz</a>
  </HoverCardTrigger>
  <HoverCardContent surface="glass" radius="md">
    Profil özeti
  </HoverCardContent>
</HoverCard>
```

AI önerisi:

- Profil preview, link preview, mini context kartları için kullan.

---

### 10.6. Dropdown Menu

Import:

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuShortcut,
} from "poyraz-ui/molecules";
```

Kullanım:

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Menü</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end" surface="solid" radius="md">
    <DropdownMenuLabel>Hesap</DropdownMenuLabel>
    <DropdownMenuItem interactiveMotion="shift">Profil</DropdownMenuItem>
    <DropdownMenuItem>Ayarlar</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Çıkış</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

AI önerisi:

- Click menu için DropdownMenu.
- Hover-only mega menu gerekiyorsa Navbar organism altındaki menu parçalarını düşün.
- Social dropdown gibi sade menülerde `surface="solid"` kullan.

---

### 10.7. Select

Import:

```tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "poyraz-ui/molecules";
```

Kullanım:

```tsx
<Select defaultValue="tr">
  <SelectTrigger>
    <SelectValue placeholder="Dil seç" />
  </SelectTrigger>
  <SelectContent surface="soft" radius="md">
    <SelectGroup>
      <SelectLabel>Diller</SelectLabel>
      <SelectItem value="tr">Türkçe</SelectItem>
      <SelectItem value="en">English</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

AI önerisi:

- Native select yerine bu componenti kullan.
- Form içinde `FormField` ile birlikte kullanılabilir.

---

### 10.8. Dialog

Import:

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "poyraz-ui/molecules";
```

Kullanım:

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Dialog aç</Button>
  </DialogTrigger>
  <DialogContent surface="solid" radius="lg">
    <DialogHeader>
      <DialogTitle>Başlık</DialogTitle>
      <DialogDescription>Açıklama</DialogDescription>
    </DialogHeader>
    İçerik
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="secondary">Kapat</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

AI önerisi:

- Kritik confirmation veya küçük modal akışlarında Dialog.
- Her Dialog içinde görünür veya `sr-only` title bulundur.

---

### 10.9. Modal

Import:

```tsx
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
  ModalClose,
} from "poyraz-ui/molecules";
```

Modal, Dialog’a benzer fakat Poyraz UI’ın daha opinionated modal surface/size yaklaşımını sunar.

AI önerisi:

- Uygulama içi custom modal tasarımları için Modal.
- Radix-like standart kullanım için Dialog.

---

### 10.10. Sheet

Import:

```tsx
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "poyraz-ui/molecules";
```

Kullanım:

```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button>Detaylar</Button>
  </SheetTrigger>
  <SheetContent side="right" surface="solid" radius="md">
    <SheetHeader>
      <SheetTitle>Detaylar</SheetTitle>
      <SheetDescription>Ek bilgiler</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

AI önerisi:

- Sağdan açılan ayar, filtre, detay paneli için Sheet.
- Mobilde full-screen hissi gereken yan paneller için uygun.

---

### 10.11. Drawer

Import:

```tsx
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "poyraz-ui/molecules";
```

Drawer `vaul` tabanlıdır.

AI önerisi:

- Mobil bottom sheet davranışı için Drawer.
- Desktop side panel için Sheet tercih et.

---

### 10.12. Command Palette

Import:

```tsx
import {
  CommandPalette,
  CommandPaletteTrigger,
  CommandPaletteContent,
  CommandPaletteInput,
  CommandPaletteList,
  CommandPaletteGroup,
  CommandPaletteItem,
  CommandPaletteEmpty,
  CommandPaletteSeparator,
  CommandPaletteFooter,
  useCommandPalette,
} from "poyraz-ui/molecules";
```

Kullanım:

```tsx
<CommandPalette>
  <CommandPaletteTrigger asChild>
    <Button variant="outline">Ara</Button>
  </CommandPaletteTrigger>
  <CommandPaletteContent>
    <CommandPaletteInput placeholder="Komut ara..." />
    <CommandPaletteList>
      <CommandPaletteEmpty>Sonuç yok.</CommandPaletteEmpty>
      <CommandPaletteGroup heading="Sayfalar">
        <CommandPaletteItem value="dashboard">Dashboard</CommandPaletteItem>
        <CommandPaletteItem value="settings">Ayarlar</CommandPaletteItem>
      </CommandPaletteGroup>
    </CommandPaletteList>
    <CommandPaletteFooter>⌘K ile aç</CommandPaletteFooter>
  </CommandPaletteContent>
</CommandPalette>
```

AI önerisi:

- Global search/command menu için kullan.
- Navbar search butonuna bağlanabilir.

---

### 10.13. Tabs

Import:

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "poyraz-ui/molecules";
```

Kullanım:

```tsx
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Genel</TabsTrigger>
    <TabsTrigger value="settings">Ayarlar</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Genel içerik</TabsContent>
  <TabsContent value="settings">Ayarlar içeriği</TabsContent>
</Tabs>
```

AI önerisi:

- Nav link görünümü için de Tabs yapısı kullanılabilir.
- Sayfa içi section switching için uygundur.

---

### 10.14. Breadcrumb

Import:

```tsx
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "poyraz-ui/molecules";
```

Kullanım:

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Ana sayfa</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Projeler</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

### 10.15. Pagination

Import:

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "poyraz-ui/molecules";
```

Kullanım:

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="?page=1" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="?page=2" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="?page=3" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

---

### 10.16. Sonner / Toaster

Import:

```tsx
import { Toaster, toast } from "poyraz-ui/molecules";
```

Root layout:

```tsx
<body>
  {children}
  <Toaster />
</body>
```

Toast:

```tsx
toast.success("Kaydedildi");
toast.error("Bir hata oluştu");
toast.promise(save(), {
  loading: "Kaydediliyor...",
  success: "Kaydedildi",
  error: "Kaydedilemedi",
});
```

AI önerisi:

- Form submit sonrası global feedback için toast kullan.
- Inline hata için Alert/FormMessage kullan.

---

### 10.17. Form

Import:

```tsx
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "poyraz-ui/molecules";
```

`react-hook-form` ile kullanılır.

Kullanım:

```tsx
<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>E-posta</FormLabel>
          <FormControl>
            <Input type="email" placeholder="poyraz@example.com" {...field} />
          </FormControl>
          <FormDescription>İş e-postanı kullan.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button type="submit">Gönder</Button>
  </form>
</Form>
```

AI önerisi:

- Validasyonlu formlarda bu yapı dışına çıkma.
- `FormMessage` kullanarak hata mesajlarını erişilebilir yap.

---

### 10.18. Calendar

Import:

```tsx
import { Calendar } from "poyraz-ui/molecules";
```

Kullanım:

```tsx
<Calendar mode="single" selected={date} onSelect={setDate} />
```

Mode:

```txt
single
range
```

AI önerisi:

- Inline takvim için Calendar.
- Input ile açılan tarih seçimi için DatePicker.

---

### 10.19. Date Picker

Import:

```tsx
import { DatePicker } from "poyraz-ui/molecules";
```

Kullanım:

```tsx
<DatePicker value={date} onChange={setDate} placeholder="Tarih seç" />
```

AI önerisi:

- Form tarih alanı için DatePicker kullan.

---

### 10.20. Autocomplete

Import:

```tsx
import { Autocomplete } from "poyraz-ui/molecules";
```

Kullanım:

```tsx
<Autocomplete
  options={[
    { value: "react", label: "React" },
    { value: "next", label: "Next.js", description: "React framework" },
  ]}
  placeholder="Teknoloji ara..."
/>
```

AI önerisi:

- Select gibi ama arama/filter gerekiyorsa Autocomplete.

---

### 10.21. Mermaid

Import:

```tsx
import { Mermaid } from "poyraz-ui/molecules";
```

Kullanım:

```tsx
<Mermaid
  chart={`graph TD
    A[Start] --> B[Build]
    B --> C[Ship]
  `}
/>
```

Not:

- `mermaid` peer dependency gerektirir.

---

### 10.22. Card Templates

Import:

```tsx
import {
  ArticleCard,
  ImageCard,
  NewsCard,
  StatsCard,
  TestimonialCard,
  PricingCard,
  ProductCard,
  StarRating,
} from "poyraz-ui/molecules";
```

#### ArticleCard

Blog/article kartları için:

```tsx
<ArticleCard
  title="Building with Poyraz UI"
  description="Soft glass component sistemi."
  image="/cover.png"
  category="Design"
  href="/blog/poyraz-ui"
/>
```

#### ImageCard

Görsel ağırlıklı proje/portfolio kartları için:

```tsx
<ImageCard
  image="/project.png"
  title="Project Name"
  description="Kısa açıklama"
  badge="Web App"
  href="/projects/project-name"
/>
```

#### NewsCard

Yatay haber/post listeleri için:

```tsx
<NewsCard
  image="/post.png"
  title="Yeni yazı"
  category="Blog"
  date="2026-07-16"
  href="/blog/new-post"
/>
```

#### StatsCard

Dashboard metrikleri için:

```tsx
<StatsCard
  label="Aktif kullanıcı"
  value="24.6K"
  trend="up"
  trendValue="+12%"
/>
```

#### TestimonialCard

Referans/yorum kartı:

```tsx
<TestimonialCard
  quote="Harika çalıştı."
  author="Ada Raimova"
  role="Founder"
  avatar="/ada.png"
  rating={5}
/>
```

#### PricingCard

Fiyatlandırma:

```tsx
<PricingCard
  title="Pro"
  price="$19"
  period="/mo"
  features={["10 Projects", "Priority Support"]}
  action={<Button>Choose Plan</Button>}
/>
```

#### ProductCard

E-commerce ürün kartı:

```tsx
<ProductCard
  title="Headphones"
  price="$99"
  image="/headphone.png"
  rating={4.8}
/>
```

#### StarRating

Yıldız rating:

```tsx
<StarRating rating={4.5} />
```

AI önerisi:

- Blog için `ArticleCard` veya `NewsCard`
- Projeler için `ImageCard`
- Dashboard KPI için `StatsCard`
- Referanslar için `TestimonialCard`
- Pricing sayfası için `PricingCard`
- Ürün gridleri için `ProductCard`

---

## 11. Organisms

Organisms, kompleks layout ve app shell parçalarıdır.

### 11.1. Navbar

Import:

```tsx
import {
  Navbar,
  NavbarTopBar,
  NavbarTopBarSection,
  NavbarMain,
  NavbarBrand,
  NavbarLinks,
  NavbarLink,
  NavbarDropdown,
  NavbarDropdownTrigger,
  NavbarMegaMenu,
  NavbarMegaMenuLinks,
  NavbarMegaMenuFeatured,
  NavbarMegaMenuItem,
  NavbarPopoverDropdown,
  NavbarPopoverDropdownItem,
  NavbarPanelDropdown,
  NavbarPanelDropdownItem,
  NavbarActions,
  NavbarMobileToggle,
  NavbarMobileMenu,
  NavbarMobileLink,
  NavbarMobileGroup,
  NavbarMobileActions,
  NavbarMobileDropdown,
  NavbarMobileDrillMenu,
  NavbarMobileDrillTrigger,
  NavbarMobileDrillPanel,
  NavbarSearch,
  NavbarDivider,
} from "poyraz-ui/organisms";
```

Basit kullanım:

```tsx
<Navbar variant="default">
  <NavbarMain>
    <NavbarBrand href="/" logo={<img src="/logo.png" alt="" />}>
      App
    </NavbarBrand>
    <NavbarLinks>
      <NavbarLink href="/docs">Docs</NavbarLink>
      <NavbarLink href="/components">Components</NavbarLink>
    </NavbarLinks>
    <NavbarActions>
      <NavbarSearch placeholder="Ara..." />
      <Button>Başla</Button>
    </NavbarActions>
  </NavbarMain>
</Navbar>
```

AI önerisi:

- Ana site navbarı için Navbar organism kullan.
- Logo için mümkünse `Logo` atom veya `NavbarBrand` kullan.
- Linkler solda, actionlar sağda olacaksa `NavbarMain` içinde `NavbarBrand` + `NavbarLinks` + `NavbarActions`.
- Mobil menü gerekiyorsa `NavbarMobileToggle` + `NavbarMobileMenu`.
- Global search gerekiyorsa `NavbarSearch` veya `CommandPalette` ile birlikte kullan.

---

### 11.2. Sidebar

Import:

```tsx
import {
  Sidebar,
  SidebarProvider,
  SidebarPanel,
  SidebarHeader,
  SidebarBranding,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarSection,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuAction,
  SidebarSeparator,
  SidebarBadge,
  SidebarFooter,
  SidebarTrigger,
  SidebarRail,
  SidebarSearch,
  SidebarSubMenu,
  SidebarSubMenuItem,
  SidebarUserProfile,
} from "poyraz-ui/organisms";
```

Kullanım:

```tsx
<SidebarProvider variant="collapsible">
  <Sidebar variant="collapsible">
    <SidebarPanel>
      <SidebarHeader>
        <SidebarBranding title="Dashboard" subtitle="Admin" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem active href="/dashboard" icon={<HomeIcon />}>
            Dashboard
          </SidebarMenuItem>
          <SidebarMenuItem href="/settings" icon={<SettingsIcon />}>
            Settings
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarUserProfile name="Poyraz" role="Developer" initials="PA" />
      </SidebarFooter>
    </SidebarPanel>
  </Sidebar>
</SidebarProvider>
```

Sidebar variantları:

```txt
default
collapsible
floating
mini
dark
bordered
inset
```

AI önerisi:

- Dashboard layoutlarında SidebarProvider kullan.
- Collapsible sidebar için `variant="collapsible"`.
- Compact icon sidebar için `variant="mini"`.
- Mobile drawer ihtiyacı için Sidebar mobile state veya Sheet ile kombinasyon.

---

### 11.3. Footer

Import:

```tsx
import {
  Footer,
  FooterGrid,
  FooterSection,
  FooterHeading,
  FooterLink,
  FooterBrand,
  FooterSocials,
  FooterSocialLink,
  FooterDivider,
  FooterBottom,
  FooterBottomLinks,
  FooterDescription,
  FooterBadge,
  FooterLinkGroup,
  FooterCTA,
  FooterApp,
  FooterAppLink,
  FooterNewsletter,
} from "poyraz-ui/organisms";
```

Kullanım:

```tsx
<Footer variant="minimal">
  <FooterGrid>
    <FooterBrand>
      <FooterHeading>Poyraz UI</FooterHeading>
      <FooterDescription>Soft glass component system.</FooterDescription>
    </FooterBrand>
    <FooterSection>
      <FooterHeading>Links</FooterHeading>
      <FooterLink href="/docs">Docs</FooterLink>
      <FooterLink href="/components">Components</FooterLink>
    </FooterSection>
  </FooterGrid>
  <FooterDivider />
  <FooterBottom>
    <span>© 2026</span>
    <FooterBottomLinks>
      <FooterLink href="/privacy">Privacy</FooterLink>
    </FooterBottomLinks>
  </FooterBottom>
</Footer>
```

Footer variantları:

```txt
minimal
compact
full
branded
centered
dark
```

AI önerisi:

- Landing page footer: `variant="minimal"` veya `variant="branded"`
- App footer: `variant="compact"`
- Koyu section footer: `variant="dark"`

---

### 11.4. Announcement Bar

Import:

```tsx
import { AnnouncementBar } from "poyraz-ui/organisms";
```

Kullanım:

```tsx
<AnnouncementBar
  variant="branded"
  dismissible
  icon={<SparklesIcon />}
  action={<Button size="sm">İncele</Button>}
>
  Yeni sürüm yayında!
</AnnouncementBar>
```

Variantlar:

```txt
default
info
success
warning
branded
danger
```

AI önerisi:

- Site-wide duyuru için kullan.
- Dismiss state gerekiyorsa caller state yönetmeli veya kendi persistence hook’unu kullanmalı.

---

### 11.5. Data Table

Import:

```tsx
import { DataTable, DataTableCore, type DataTableColumnDef } from "poyraz-ui/organisms";
```

Kullanım:

```tsx
type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

const columns: DataTableColumnDef<User>[] = [
  { id: "name", header: "Name", accessorKey: "name", sortable: true },
  { id: "email", header: "Email", accessorKey: "email" },
  { id: "role", header: "Role", accessorKey: "role", filterable: true },
];

<DataTable
  columns={columns}
  data={users}
  getRowId={(row) => row.id}
  searchable
  selectable
  columnToggle
  pageSize={10}
  surface="solid"
  radius="md"
/>
```

DataTable props özeti:

```txt
columns
data
getRowId
pageSize
pagination
searchable
searchPlaceholder
selectable
onSelectionChange
columnToggle
className
caption
emptyMessage
loading
error
stickyHeader
tableMaxHeight
density
surface
radius
toolbar
```

Density:

```txt
compact
default
spacious
```

Surface:

```txt
solid
soft
glass
```

AI önerisi:

- Basit tablo için DataTable.
- Kendi pagination/search/sort yazma.
- Daha kontrollü state gerekiyorsa DataTableCore kullan.

---

## 12. Blocks ve hazır template mantığı

Registry içinde ayrıca block/template yapıları bulunur. Bunlar npm export’larından ziyade source registry üzerinden projeye kopyalanması hedeflenen daha büyük UI parçalarıdır.

Blocks:

- `article-card`
- `image-card`
- `news-card`
- `stats-card`
- `testimonial-card`
- `pricing-card`
- `product-card`
- `navigation-block`
- `mobile-navigation-block`
- `mega-menu-block`
- `mobile-sidebar-block`
- `footer-blocks`
- `dashboard-shell-block`
- `glass-app-shell-block`
- `auth-card-block`
- `pricing-block`
- `brand-hero-block`
- `smart-dashboard-block`

AI önerisi:

- Kullanıcı “tam section tasarla” derse block mantığını öner.
- Kullanıcı npm package ile ilerliyorsa molecule/organism componentleriyle aynı section’ı elle oluştur.
- Kullanıcı “source-owned olsun” derse shadcn registry komutuyla block eklemeyi öner.

Örnek:

```bash
pnpm dlx shadcn@latest add @poyraz/brand-hero-block
pnpm dlx shadcn@latest add @poyraz/dashboard-shell-block
```

---

## 13. Sık kullanılan layout reçeteleri

### 13.1. Landing hero

```tsx
import { Button, ButtonIcon, ButtonLabel, Card, TextEffect, Typography } from "poyraz-ui/atoms";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1fr_420px]">
      <div className="flex flex-col justify-center gap-5">
        <Typography variant="display" component="h1">
          Modern <TextEffect effect="shimmer">soft UI</TextEffect> sistemi
        </Typography>
        <Typography variant="lead" className="text-muted-foreground">
          React projeleri için minimal, token bazlı ve erişilebilir componentler.
        </Typography>
        <div className="flex gap-3">
          <Button effect="swap" swapTarget="both">
            <ButtonLabel>Başla</ButtonLabel>
            <ButtonIcon>→</ButtonIcon>
          </Button>
          <Button variant="secondary" effect="swap" swapTarget="both">
            <ButtonLabel>Docs</ButtonLabel>
            <ButtonIcon>↗</ButtonIcon>
          </Button>
        </div>
      </div>

      <Card variant="glass" radius="xl" className="p-6">
        Preview
      </Card>
    </section>
  );
}
```

### 13.2. Dashboard card grid

```tsx
import { StatsCard } from "poyraz-ui/molecules";

<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
  <StatsCard label="Revenue" value="$56,000" trend="up" trendValue="+12.5%" />
  <StatsCard label="Users" value="24,680" trend="up" trendValue="+8.2%" />
  <StatsCard label="Errors" value="12" trend="down" trendValue="-2.1%" />
  <StatsCard label="Conversion" value="3.46%" trend="neutral" />
</div>
```

### 13.3. Settings form

```tsx
import { Button, Input, Switch, Label } from "poyraz-ui/atoms";
import { Card, CardContent, CardHeader, CardTitle } from "poyraz-ui/atoms";

<Card>
  <CardHeader>
    <CardTitle>Profil</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="name">Ad</Label>
      <Input id="name" placeholder="Adınız" />
    </div>
    <div className="flex items-center justify-between">
      <Label htmlFor="notifications">Bildirimler</Label>
      <Switch id="notifications" />
    </div>
    <Button effect="swap">Kaydet</Button>
  </CardContent>
</Card>
```

### 13.4. Global search with Command Palette

```tsx
import {
  CommandPalette,
  CommandPaletteTrigger,
  CommandPaletteContent,
  CommandPaletteInput,
  CommandPaletteList,
  CommandPaletteGroup,
  CommandPaletteItem,
  CommandPaletteEmpty,
} from "poyraz-ui/molecules";
import { Button } from "poyraz-ui/atoms";

<CommandPalette>
  <CommandPaletteTrigger asChild>
    <Button variant="outline">Search</Button>
  </CommandPaletteTrigger>
  <CommandPaletteContent>
    <CommandPaletteInput placeholder="Search docs..." />
    <CommandPaletteList>
      <CommandPaletteEmpty>No results.</CommandPaletteEmpty>
      <CommandPaletteGroup heading="Pages">
        <CommandPaletteItem value="docs">Docs</CommandPaletteItem>
        <CommandPaletteItem value="components">Components</CommandPaletteItem>
      </CommandPaletteGroup>
    </CommandPaletteList>
  </CommandPaletteContent>
</CommandPalette>
```

---

## 14. Erişilebilirlik kuralları

AI şu kurallara uymalı:

- Icon-only buttonlarda `aria-label` ekle.
- Dialog/Sheet/Modal içinde mutlaka `Title` kullan.
- Form inputlarında `Label` kullan.
- Placeholder’ı label yerine kullanma.
- Toast ile kritik bilgiyi tek başına verme; gerekiyorsa inline feedback de göster.
- Focus ring’i custom classlarla silme.
- Dropdown/Select/Tabs gibi davranışlı elementlerde Radix tabanlı poyraz-ui componentlerini kullan.
- Keyboard navigation’ı bozacak wrapper yapıları kurma.
- Disabled/loading state’leri prop üzerinden ver.

---

## 15. AI için component seçme rehberi

Kullanıcı şunu isterse:

| İstek | Kullanılacak component |
| --- | --- |
| Birincil aksiyon | `Button variant="default"` |
| İkincil aksiyon | `Button variant="secondary"` veya `outline` |
| Icon button | `Button size="icon"` |
| Sayfa başlığı | `Typography variant="h1"` veya `h2` |
| Vurgulu kelime | `TextEffect` |
| Form input | `Input`, `Textarea`, `Form` |
| Telefon/URL/şifre | `PhoneInput`, `UrlInput`, `PasswordInput` |
| Küçük durum etiketi | `Badge` |
| İçerik yüzeyi | `Card` |
| Glass panel | `Card variant="glass"` veya `GlassCard` |
| Dropdown aksiyon menüsü | `DropdownMenu` |
| Küçük floating panel | `Popover` |
| Tooltip açıklama | `Tooltip` |
| Büyük overlay/modal | `Dialog` veya `Modal` |
| Yan panel | `Sheet` |
| Mobil bottom drawer | `Drawer` |
| Global search | `CommandPalette` |
| Segmented nav | `Tabs` |
| Dashboard tablo | `DataTable` |
| App navbar | `Navbar` |
| Dashboard sidebar | `Sidebar` |
| Site footer | `Footer` |
| Duyuru barı | `AnnouncementBar` |
| Blog kartı | `ArticleCard` veya `NewsCard` |
| Proje kartı | `ImageCard` |
| Metrik kartı | `StatsCard` |
| Referans kartı | `TestimonialCard` |
| Fiyatlandırma | `PricingCard` veya `PricingPlanCard` |

---

## 16. Kaçınılması gerekenler

AI şunları yapmamalı:

- Poyraz UI componenti varken sıfırdan custom Dropdown/Dialog/Tabs yazmamalı.
- `div` ile button gibi davranan element yapmamalı.
- Focus outline/ring’i silmemeli.
- Hard-coded dark/light renkleri çoğaltmamalı.
- Çok fazla shadow eklememeli.
- Buttonlarda swap/fill gibi effectler için custom CSS yazmamalı; prop kullanmalı.
- Form validation mesajlarını sadece toast ile vermemeli.
- `asChild` kullanırken Button effect anatomy’sini bozacak nested yapılar kurmamalı.
- Component variantlarını bilmeden uydurmamalı; bu dokümandaki variant değerlerine bağlı kalmalı.

---

## 17. Başka projede kullanım için örnek AI prompt

Aşağıdaki prompt’u başka bir projede AI’a verebilirsin:

```md
Bu projede poyraz-ui kullanarak UI geliştir.

Kurulum:
- Eğer yoksa `poyraz-ui@3` kur.
- Global CSS içinde `@import "poyraz-ui/preset.css";` olduğundan emin ol.

Import:
- Atoms: `poyraz-ui/atoms`
- Molecules: `poyraz-ui/molecules`
- Organisms: `poyraz-ui/organisms`

Tasarım dili:
- Minimal, soft, hafif rounded, clean border, gölgesiz veya çok düşük gölgeli.
- Semantic token kullan: `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-card`, `text-primary`.
- Gereksiz custom CSS yazma.

Button:
- CTA butonlarında `effect="swap"` kullan.
- `ButtonLabel` ve `ButtonIcon` kullan.
- Icon-only buttonlarda aria-label ekle.

Form:
- Input için `Input`, `Textarea`, `PhoneInput`, `UrlInput`, `PasswordInput`, `SearchInput` kullan.
- Form validation varsa `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormMessage` kullan.

Overlay:
- Dropdown için `DropdownMenu`
- Dialog/modal için `Dialog` veya `Modal`
- Yan panel için `Sheet`
- Mobil drawer için `Drawer`
- Global search için `CommandPalette`

Layout:
- Navbar için `Navbar`
- Sidebar için `Sidebar`
- Footer için `Footer`
- Duyuru için `AnnouncementBar`
- Tablo için `DataTable`

Her componenti erişilebilir ve responsive kur.
```

---

## 18. Minimal starter örneği

```tsx
import "poyraz-ui/preset.css";

import { Button, ButtonIcon, ButtonLabel, Card, CardContent, Typography } from "poyraz-ui/atoms";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "poyraz-ui/molecules";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl space-y-8 px-6 py-12">
        <div className="space-y-3">
          <Typography variant="h1" component="h1">
            Poyraz UI Starter
          </Typography>
          <Typography variant="lead" className="text-muted-foreground">
            Minimal, soft ve token bazlı React arayüzü.
          </Typography>
          <Button effect="swap" swapTarget="both">
            <ButtonLabel>Başla</ButtonLabel>
            <ButtonIcon>→</ButtonIcon>
          </Button>
        </div>

        <Card>
          <CardContent className="p-4">
            <Tabs defaultValue="one">
              <TabsList>
                <TabsTrigger value="one">Overview</TabsTrigger>
                <TabsTrigger value="two">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="one">Overview content</TabsContent>
              <TabsContent value="two">Settings content</TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
```

---

## 19. Registry component adları

Source registry üzerinden eklenebilen component/block adları:

### Atoms

```txt
avatar
badge
bg-pattern
button
card
checkbox
form-fields
input
label
logo
radio-group
scroll-area
separator
skeleton
switch
textarea
typography
```

### Molecules

```txt
accordion
alert
autocomplete
breadcrumb
calendar
command-palette
date-picker
dialog
drawer
dropdown-menu
form
hover-card
mermaid
modal
pagination
popover
select
sheet
sonner
star-rating
tabs
tooltip
```

### Organisms

```txt
announcement-bar
data-table
footer
navbar
sidebar
```

### Blocks

```txt
article-card
auth-card-block
brand-hero-block
dashboard-shell-block
footer-blocks
glass-app-shell-block
image-card
mega-menu-block
mobile-navigation-block
mobile-sidebar-block
navigation-block
news-card
pricing-block
pricing-card
product-card
smart-dashboard-block
stats-card
testimonial-card
```

Registry install örneği:

```bash
pnpm dlx shadcn@latest add @poyraz/button
pnpm dlx shadcn@latest add @poyraz/dropdown-menu
pnpm dlx shadcn@latest add @poyraz/brand-hero-block
```

---

## 20. Son kontrol listesi

Başka projede poyraz-ui kullanırken AI şu checklist’i uygulamalı:

- [ ] `poyraz-ui@3` kurulu mu?
- [ ] `@import "poyraz-ui/preset.css";` global CSS’te var mı?
- [ ] Componentler doğru entry point’ten import ediliyor mu?
- [ ] Tasarım semantic tokenlarla mı kurulmuş?
- [ ] Button effectleri prop ile mi verilmiş?
- [ ] Form alanlarında label ve error state var mı?
- [ ] Overlay componentlerinde Title/Description kullanılmış mı?
- [ ] Icon-only buttonlarda `aria-label` var mı?
- [ ] Dark mode’da hard-coded renk problemi yok mu?
- [ ] Gereksiz custom CSS yazılmadı mı?
- [ ] Responsive grid/stack davranışı tanımlı mı?
- [ ] Keyboard/focus erişilebilirliği korunuyor mu?

