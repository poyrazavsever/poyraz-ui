# Poyraz UI — Kullanım Dökümantasyonu

> **Poyraz UI**, minimal tasarım dili üzerine kurulmuş açık kaynaklı bir React bileşen kütüphanesidir.  
> Temiz kenarlar (`border`), hafif yuvarlaklık (`rounded-sm`), gölgesiz tasarım (`shadow-none`) ve `red-600` birincil renk paleti ile öne çıkar.

---

## İçindekiler

- [Genel Bakış](#genel-bakış)
- [Kurulum](#kurulum)
- [CSS Yapılandırması](#css-yapılandırması)
- [Import Yolları](#import-yolları)
- [Atoms (Temel Yapı Taşları)](#atoms-temel-yapı-taşları)
- [Molecules (Bileşik Bileşenler)](#molecules-bileşik-bileşenler)
- [Organisms (Organizmalar)](#organisms-organizmalar)
- [Navigasyon Config Pattern](#navigasyon-config-pattern)
- [Tema Özelleştirme](#tema-özelleştirme)
- [Yeni Bileşen Ekleme](#yeni-bileşen-ekleme)
- [Geliştirme Komutları](#geliştirme-komutları)

---

## Genel Bakış

| Özellik                | Detay                                             |
| ---------------------- | ------------------------------------------------- |
| **Mimari**             | Atomic Design (Atoms → Molecules → Organisms)     |
| **Toplam Bileşen**     | 43+                                               |
| **Temel Teknolojiler** | React 19, TypeScript 5, Tailwind CSS v4, Radix UI |
| **Varyant Yönetimi**   | `class-variance-authority` (cva)                  |
| **Sınıf Birleştirme**  | `clsx` + `tailwind-merge` (`cn()` utility)        |
| **Build Formatı**      | ESM + CJS + DTS (tsup ile)                        |
| **Lisans**             | MIT                                               |

### Tasarım İlkeleri

1. **Kompakt & Minimal Estetik** — Küçük boyutlar (maks. başlık 32px), `rounded-sm`, `shadow-none`, `border`
2. **Çift Font Sistemi** — Birincil font (Inter) + ikincil/dekoratif font (Agbalumo), her ikisi de değiştirilebilir
3. **Erişilebilirlik** — Radix UI primitifleri ile WCAG uyumlu klavye navigasyonu ve ARIA
4. **Varyant Odaklı** — `cva` ile tip-güvenli varyant yönetimi
5. **Kompozisyon** — Küçük, birleştirilebilir parçalar (yapılandırma değil, bileşim)

---

## Kurulum

```bash
# pnpm (önerilen)
pnpm add poyraz-ui

# npm
npm install poyraz-ui

# yarn
yarn add poyraz-ui
```

### Zorunlu Peer Bağımlılıklar

```json
{
  "react": ">=18",
  "react-dom": ">=18",
  "tailwindcss": ">=4"
}
```

### Opsiyonel Peer Bağımlılıklar

| Paket                    | Ne Zaman Gerekli                                                   |
| ------------------------ | ------------------------------------------------------------------ |
| `react-hook-form` ≥7     | `Form` bileşenini kullanırken                                      |
| `@hookform/resolvers` ≥3 | Zod validasyonu ile form kullanırken                               |
| `zod` ≥3                 | Form şema validasyonu için                                         |
| `next` ≥14               | `Logo` veya `NavbarBrand` bileşenleri için (next/link, next/image) |

---

## CSS Yapılandırması

Projenizin kök CSS dosyasına (örn. `globals.css`) şunları ekleyin:

```css
@import "tailwindcss";
@import "poyraz-ui/preset.css";
```

Bu preset şunları sağlar:

- **Birincil Font:** `Inter` (sans-serif) — tüm body ve başlık metinleri için varsayılan
- **İkincil Font:** `Agbalumo` (cursive) — dekoratif başlıklar, vurgu metinleri için, `font-secondary` utility sınıfı ile kullanılır
- **Birincil Renk:** `--color-primary: #dc2626` (red-600)
- **Base Stiller:** Başlıklar için `font-bold tracking-tight`
- **Kompakt Boyutlar:** En büyük başlık 32px, tüm bileşenler orantılı olarak küçültülmüş

### Font Kullanımı

```tsx
import { Typography } from "poyraz-ui/atoms";

{
  /* Birincil font (Inter) — varsayılan */
}
<Typography variant="h1">Normal Başlık</Typography>;

{
  /* İkincil font (Agbalumo) — secondaryFont prop'u ile */
}
<Typography variant="h1" secondaryFont>
  Dekoratif Başlık
</Typography>;

{
  /* Herhangi bir elemanda ikincil font */
}
<p className="font-secondary">Agbalumo ile yazılmış metin</p>;
```

### Fontları Değiştirme

Projenizin CSS dosyasında `@theme` bloğu ile varsayılan fontları override edebilirsiniz:

```css
@theme {
  --font-sans: "Outfit", system-ui, sans-serif; /* Birincil font */
  --font-secondary: "Playfair Display", serif; /* İkincil font */
}
```

> **İpucu:** Preset CSS otomatik olarak `dist/` klasörünü tarar, böylece Tailwind bileşenlerin kullandığı utility sınıflarını üretir.

---

## Import Yolları

Poyraz UI, tree-shaking desteği ile **dört giriş noktası** sunar:

```tsx
// Tümünü tek seferde import et
import { Button, Dialog, Navbar } from "poyraz-ui";

// ✅ Önerilen — Tier bazlı import (daha küçük bundle)
import { Button, Badge, Input } from "poyraz-ui/atoms";
import { Dialog, Tabs, Select } from "poyraz-ui/molecules";
import { Navbar, Footer, Sidebar } from "poyraz-ui/organisms";
```

### Utility Fonksiyonu

```tsx
import { cn } from "poyraz-ui";

// clsx + tailwind-merge birleşimi
cn("text-red-600", condition && "font-bold", className);
```

---

## Atoms (Temel Yapı Taşları)

### Button

Birçok varyant ve boyutta kullanılabilen buton bileşeni.

```tsx
import { Button } from "poyraz-ui/atoms";

<Button>Varsayılan</Button>
<Button variant="secondary">İkincil</Button>
<Button variant="outline">Çerçeveli</Button>
<Button variant="destructive">Yıkıcı</Button>
<Button variant="ghost">Hayalet</Button>
<Button variant="link">Link</Button>
<Button size="sm">Küçük</Button>
<Button size="lg">Büyük</Button>
<Button size="icon"><IconComponent /></Button>
<Button loading>Yükleniyor...</Button>
<Button asChild><a href="/docs">Link Butonu</a></Button>
```

| Prop       | Tip                                                               | Varsayılan | Açıklama                                    |
| ---------- | ----------------------------------------------------------------- | ---------- | ------------------------------------------- |
| `variant`  | `default \| secondary \| outline \| destructive \| ghost \| link` | `default`  | Görsel stil                                 |
| `size`     | `default \| sm \| lg \| icon`                                     | `default`  | Boyut                                       |
| `asChild`  | `boolean`                                                         | `false`    | Radix Slot ile polimorfik render            |
| `loading`  | `boolean`                                                         | `false`    | Spinner göster, etkileşimi devre dışı bırak |
| `disabled` | `boolean`                                                         | `false`    | Devre dışı                                  |

**Buton Boyut Referansı:**

| Size      | Yükseklik        | Padding         | Font          |
| --------- | ---------------- | --------------- | ------------- |
| `sm`      | `h-7` (28px)     | `px-2.5 py-1`   | `text-[11px]` |
| `default` | `h-8` (32px)     | `px-3.5 py-1.5` | `text-xs`     |
| `lg`      | `h-9` (36px)     | `px-4 py-1.5`   | `text-xs`     |
| `icon`    | `h-8 w-8` (32px) | `p-0`           | —             |

---

### Input

```tsx
import { Input } from "poyraz-ui/atoms";

<Input placeholder="E-posta adresiniz" />
<Input type="password" placeholder="Şifreniz" />
<Input type="file" />
<Input disabled placeholder="Devre dışı" />
```

> Standart `<input>` HTML özelliklerinin hepsini destekler.

---

### Textarea

```tsx
import { Textarea } from "poyraz-ui/atoms";

<Textarea placeholder="Mesajınızı yazın..." />
<Textarea rows={6} />
```

---

### Badge

```tsx
import { Badge } from "poyraz-ui/atoms";

<Badge>Varsayılan</Badge>
<Badge variant="secondary">İkincil</Badge>
<Badge variant="destructive">Hata</Badge>
<Badge variant="outline">Çerçeveli</Badge>
```

| Prop      | Tip                                              | Varsayılan |
| --------- | ------------------------------------------------ | ---------- |
| `variant` | `default \| secondary \| destructive \| outline` | `default`  |

---

### Card

Beş farklı varyanta sahip kart bileşeni. `elevated` varyantı brutalist kırmızı offset gölge efektine sahiptir.

```tsx
import {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "poyraz-ui/atoms";

{
  /* Varsayılan Kart */
}
<Card>
  <CardHeader>
    <CardTitle>Başlık</CardTitle>
    <CardDescription>Açıklama metni</CardDescription>
  </CardHeader>
  <CardContent>
    <p>İçerik buraya gelir.</p>
  </CardContent>
  <CardFooter>
    <Button>Kaydet</Button>
  </CardFooter>
</Card>;

{
  /* Elevated (Brutalist Gölge) */
}
<Card variant="elevated">
  <CardImage aspect="aspect-video">
    <img src="/image.jpg" alt="Görsel" className="w-full h-full object-cover" />
  </CardImage>
  <CardHeader>
    <CardTitle>Elevated Kart</CardTitle>
  </CardHeader>
</Card>;

{
  /* Highlight (Sol kırmızı şerit) */
}
<Card variant="highlight">
  <CardContent>
    <p>Öne çıkan içerik</p>
  </CardContent>
</Card>;
```

| Prop      | Tip                                                     | Varsayılan | Açıklama   |
| --------- | ------------------------------------------------------- | ---------- | ---------- |
| `variant` | `default \| bordered \| elevated \| highlight \| ghost` | `default`  | Kart stili |

| Alt Bileşen       | Açıklama                                             |
| ----------------- | ---------------------------------------------------- |
| `CardImage`       | Görsel alanı (`aspect` prop ile oran belirlenebilir) |
| `CardHeader`      | Başlık + açıklama bölümü                             |
| `CardTitle`       | `<h3>` başlık                                        |
| `CardDescription` | Açıklama metni                                       |
| `CardContent`     | Ana içerik                                           |
| `CardFooter`      | Alt çizgili alt alan                                 |

---

### Typography

```tsx
import { Typography } from "poyraz-ui/atoms";

<Typography variant="h1">Ana Başlık</Typography>
<Typography variant="h2">Alt Başlık</Typography>
<Typography variant="h3">Üçüncü Seviye</Typography>
<Typography variant="h4">Dördüncü Seviye</Typography>
<Typography variant="p">Normal paragraf metni.</Typography>
<Typography variant="lead">Öne çıkan metin.</Typography>
<Typography variant="large">Büyük metin.</Typography>
<Typography variant="small">Küçük metin.</Typography>
<Typography variant="muted">Soluk metin.</Typography>
<Typography variant="blockquote">Alıntı metin.</Typography>
<Typography variant="list">
  <li>Öğe 1</li><li>Öğe 2</li>
</Typography>

{/* İkincil font (Agbalumo) kullanımı */}
<Typography variant="h1" secondaryFont>Dekoratif Başlık</Typography>

{/* Özel HTML etiketi */}
<Typography variant="h1" component="span">Span olarak render</Typography>
```

| Prop            | Tip                                                                                  | Varsayılan                     |
| --------------- | ------------------------------------------------------------------------------------ | ------------------------------ |
| `variant`       | `h1 \| h2 \| h3 \| h4 \| p \| lead \| large \| small \| muted \| blockquote \| list` | `p`                            |
| `component`     | `React.ElementType`                                                                  | Otomatik (h1→h1, p→p, list→ul) |
| `secondaryFont` | `boolean`                                                                            | `false`                        |

**Boyut Referansı:**

| Variant | Boyut                                      |
| ------- | ------------------------------------------ |
| `h1`    | `text-2xl` / `lg:text-[32px]` (maks. 32px) |
| `h2`    | `text-xl` (20px)                           |
| `h3`    | `text-lg` (18px)                           |
| `h4`    | `text-base` (16px)                         |
| `lead`  | `text-base` (16px)                         |
| `large` | `text-sm` (14px)                           |
| `small` | `text-xs` (12px)                           |
| `muted` | `text-xs` (12px)                           |

---

### Checkbox

```tsx
import { Checkbox } from "poyraz-ui/atoms";
import { Label } from "poyraz-ui/atoms";

<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Kullanım koşullarını kabul ediyorum</Label>
</div>;
```

---

### Radio Group

```tsx
import { RadioGroup, RadioGroupItem } from "poyraz-ui/atoms";
import { Label } from "poyraz-ui/atoms";

<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="r1" />
    <Label htmlFor="r1">Seçenek 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-2" id="r2" />
    <Label htmlFor="r2">Seçenek 2</Label>
  </div>
</RadioGroup>;
```

---

### Switch

```tsx
import { Switch } from "poyraz-ui/atoms";
import { Label } from "poyraz-ui/atoms";

<div className="flex items-center gap-2">
  <Switch id="dark-mode" />
  <Label htmlFor="dark-mode">Karanlık Mod</Label>
</div>;
```

---

### Avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "poyraz-ui/atoms";

<Avatar>
  <AvatarImage src="/avatar.jpg" alt="Poyraz" />
  <AvatarFallback>PA</AvatarFallback>
</Avatar>;
```

---

### Label

```tsx
import { Label } from "poyraz-ui/atoms";

<Label htmlFor="email">E-posta</Label>;
```

> `text-sm font-semibold tracking-wide uppercase` stiline sahiptir. `peer-disabled` durumunu destekler.

---

### Separator

```tsx
import { Separator } from "poyraz-ui/atoms";

<Separator />                          {/* Yatay (varsayılan) */}
<Separator orientation="vertical" />   {/* Dikey */}
```

---

### Skeleton

```tsx
import { Skeleton } from "poyraz-ui/atoms";

<Skeleton className="h-4 w-[250px]" />
<Skeleton className="h-12 w-12" />        {/* Avatar placeholder */}
<Skeleton className="h-[200px] w-full" />  {/* Kart placeholder */}
```

---

### Form Fields (Özel Input'lar)

```tsx
import {
  NumberInput,
  SearchInput,
  PhoneInput,
  PasswordInput,
  UrlInput,
} from "poyraz-ui/atoms";

{
  /* Sayı Girişi — artı/eksi butonlu */
}
<NumberInput
  value={5}
  onChange={(v) => setValue(v)}
  min={0}
  max={100}
  step={1}
/>;

{
  /* Arama Girişi — büyüteç ikonlu */
}
<SearchInput placeholder="Ara..." onSearch={(val) => console.log(val)} />;

{
  /* Telefon Girişi — ülke kodu prefixli */
}
<PhoneInput countryCode="+90" placeholder="5XX XXX XX XX" />;

{
  /* Şifre Girişi — göster/gizle toggle'lı */
}
<PasswordInput placeholder="Şifreniz" />;

{
  /* URL Girişi — https:// prefixli */
}
<UrlInput placeholder="example.com" />;
```

| Bileşen         | Ek Proplar                                          |
| --------------- | --------------------------------------------------- |
| `NumberInput`   | `value`, `onChange`, `min`, `max`, `step`           |
| `SearchInput`   | `onSearch(value)` — Enter'a basıldığında tetiklenir |
| `PhoneInput`    | `countryCode` (varsayılan `"+1"`)                   |
| `PasswordInput` | Standart Input propları                             |
| `UrlInput`      | Standart Input propları                             |

---

### Logo

Minimal logo bileşeni. Hover'da hafif opaklık efekti.

```tsx
import { Logo } from "poyraz-ui/atoms";

<Logo href="/" src="/logo.png" width={48} height={48} alt="Marka" />
<Logo />  {/* href olmadan — <span> olarak render */}
```

| Prop     | Tip      | Varsayılan          |
| -------- | -------- | ------------------- |
| `href`   | `string` | —                   |
| `src`    | `string` | `"/logo/logo.jpeg"` |
| `width`  | `number` | `48`                |
| `height` | `number` | `48`                |
| `alt`    | `string` | `"Poyraz Logo"`     |

---

### BG Patterns (Arka Plan Desenleri)

10 farklı SVG arka plan deseni. `overlay` prop'u ile absolute positioning kullanılabilir.

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

{
  /* Overlay kullanımı */
}
<div className="relative h-64">
  <PatternDots overlay color="#dc2626" opacity={0.1} size={20} />
  <div className="relative z-10">İçerik</div>
</div>;

{
  /* Radial gradient */
}
<PatternRadial overlay from="rgba(220,38,38,0.1)" to="transparent" />;
```

| Prop (Tüm desenler) | Tip       | Varsayılan                              |
| ------------------- | --------- | --------------------------------------- |
| `color`             | `string`  | `"currentColor"`                        |
| `opacity`           | `number`  | Desene göre (0.04–0.08)                 |
| `size`              | `number`  | Desene göre (20–48)                     |
| `overlay`           | `boolean` | `false` — `true` ise `absolute inset-0` |

`PatternRadial` ek propları: `from` (başlangıç rengi), `to` (bitiş rengi).

---

### ScrollArea

```tsx
import { ScrollArea } from "poyraz-ui/atoms";

<ScrollArea className="h-[300px] w-full">{/* Uzun içerik */}</ScrollArea>;
```

---

## Molecules (Bileşik Bileşenler)

### Dialog

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "poyraz-ui/molecules";

<Dialog>
  <DialogTrigger asChild>
    <Button>Dialog Aç</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Başlık</DialogTitle>
      <DialogDescription>Açıklama metni.</DialogDescription>
    </DialogHeader>
    <p>İçerik buraya gelir.</p>
    <DialogFooter>
      <Button variant="secondary">İptal</Button>
      <Button>Onayla</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>;
```

---

### Modal

Dialog'un gelişmiş versiyonu — boyut ve pozisyon varyantları ile.

```tsx
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
} from "poyraz-ui/molecules";

<Modal>
  <ModalTrigger asChild>
    <Button>Büyük Modal</Button>
  </ModalTrigger>
  <ModalContent size="lg" position="center">
    <ModalHeader>
      <ModalTitle>Büyük Modal</ModalTitle>
      <ModalDescription>Detaylı içerik alanı</ModalDescription>
    </ModalHeader>
    <p>Geniş içerik</p>
    <ModalFooter>
      <Button>Kaydet</Button>
    </ModalFooter>
  </ModalContent>
</Modal>;
```

| Prop        | Tip                                 | Varsayılan |
| ----------- | ----------------------------------- | ---------- |
| `size`      | `sm \| default \| lg \| xl \| full` | `default`  |
| `position`  | `center \| top`                     | `center`   |
| `hideClose` | `boolean`                           | `false`    |

---

### Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "poyraz-ui/molecules";

<Tabs defaultValue="onizleme">
  <TabsList>
    <TabsTrigger value="onizleme">Önizleme</TabsTrigger>
    <TabsTrigger value="kod">Kod</TabsTrigger>
  </TabsList>
  <TabsContent value="onizleme">Önizleme içeriği...</TabsContent>
  <TabsContent value="kod">Kod içeriği...</TabsContent>
</Tabs>;
```

---

### Select

```tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "poyraz-ui/molecules";

<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Şehir seçin" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Marmara</SelectLabel>
      <SelectItem value="istanbul">İstanbul</SelectItem>
      <SelectItem value="bursa">Bursa</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Ege</SelectLabel>
      <SelectItem value="izmir">İzmir</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>;
```

---

### Accordion

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "poyraz-ui/molecules";

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Poyraz UI nedir?</AccordionTrigger>
    <AccordionContent>
      Minimal tasarım diline sahip bir React bileşen kütüphanesidir.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Hangi teknolojileri kullanır?</AccordionTrigger>
    <AccordionContent>
      React, TypeScript, Tailwind CSS v4, Radix UI.
    </AccordionContent>
  </AccordionItem>
</Accordion>;
```

---

### Alert

```tsx
import { Alert, AlertTitle, AlertDescription } from "poyraz-ui/molecules";

<Alert variant="info">
  <AlertTitle>Bilgi</AlertTitle>
  <AlertDescription>Bu bir bilgilendirme mesajıdır.</AlertDescription>
</Alert>

<Alert variant="success">...</Alert>
<Alert variant="warning">...</Alert>
<Alert variant="destructive">...</Alert>
```

| Prop      | Tip                                                    | Varsayılan                  |
| --------- | ------------------------------------------------------ | --------------------------- |
| `variant` | `default \| info \| success \| warning \| destructive` | `default`                   |
| `icon`    | `React.ReactNode`                                      | Varyanta göre otomatik ikon |

---

### Autocomplete

```tsx
import { Autocomplete } from "poyraz-ui/molecules";

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue", group: "Frameworks" },
  { value: "angular", label: "Angular", group: "Frameworks" },
];

<Autocomplete
  options={options}
  value={selected}
  onValueChange={setSelected}
  placeholder="Teknoloji ara..."
  multiple // Çoklu seçim
  freeSolo // Serbest yazma
  loading={isLoading}
  emptyText="Sonuç bulunamadı."
/>;
```

| Prop            | Tip                    | Varsayılan            |
| --------------- | ---------------------- | --------------------- |
| `options`       | `AutocompleteOption[]` | — (zorunlu)           |
| `value`         | `string \| string[]`   | —                     |
| `onValueChange` | `(value) => void`      | —                     |
| `multiple`      | `boolean`              | `false`               |
| `freeSolo`      | `boolean`              | `false`               |
| `loading`       | `boolean`              | `false`               |
| `emptyText`     | `string`               | `"No results found."` |

---

### Command Palette

Cmd+K tarzı arama menüsü.

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
  CommandPaletteFooter,
} from "poyraz-ui/molecules";

<CommandPalette>
  <CommandPaletteTrigger asChild>
    <Button variant="outline">⌘K Komut Paleti</Button>
  </CommandPaletteTrigger>
  <CommandPaletteContent>
    <CommandPaletteInput placeholder="Komut ara..." />
    <CommandPaletteList>
      <CommandPaletteGroup heading="Genel">
        <CommandPaletteItem icon={<HomeIcon />} shortcut="⌘H">
          Ana Sayfa
        </CommandPaletteItem>
        <CommandPaletteItem icon={<SettingsIcon />} shortcut="⌘S">
          Ayarlar
        </CommandPaletteItem>
      </CommandPaletteGroup>
      <CommandPaletteEmpty>Sonuç bulunamadı.</CommandPaletteEmpty>
    </CommandPaletteList>
    <CommandPaletteFooter>
      <span>↑↓ ile gezin</span>
      <span>↵ ile seçin</span>
    </CommandPaletteFooter>
  </CommandPaletteContent>
</CommandPalette>;
```

---

### Form (react-hook-form entegrasyonu)

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "poyraz-ui/molecules";
import { Input, Button } from "poyraz-ui/atoms";

const schema = z.object({ email: z.string().email() });

function MyForm() {
  const form = useForm({ resolver: zodResolver(schema) });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-posta</FormLabel>
              <FormControl>
                <Input placeholder="ornek@mail.com" {...field} />
              </FormControl>
              <FormDescription>İletişim e-postanız</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Gönder</Button>
      </form>
    </Form>
  );
}
```

---

### Diğer Molecules — Hızlı Referans

| Bileşen          | Import Yolu                                                                                         | Açıklama                                    |
| ---------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **Breadcrumb**   | `Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator`   | Navigasyon yolu                             |
| **Calendar**     | `Calendar`                                                                                          | Ay/yıl grid takvimi                         |
| **DatePicker**   | `DatePicker`                                                                                        | Popover tabanlı tarih seçici                |
| **Drawer**       | `Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter`  | Ekran kenarından kayan panel (vaul tabanlı) |
| **Sheet**        | `Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle`                                        | Sağ/sol/üst/alt kayan panel                 |
| **DropdownMenu** | `DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, ...`                     | Sağ tık / aksiyon menüsü                    |
| **HoverCard**    | `HoverCard, HoverCardTrigger, HoverCardContent`                                                     | Hover'da açılan kart                        |
| **Pagination**   | `Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext` | Sayfa navigasyonu                           |
| **Popover**      | `Popover, PopoverTrigger, PopoverContent`                                                           | Tetikleyiciye bağlı float content           |
| **Tooltip**      | `Tooltip, TooltipTrigger, TooltipContent, TooltipProvider`                                          | Hover/focus bilgi baloncuğu                 |
| **Sonner**       | `Toaster, toast`                                                                                    | Toast bildirim sistemi                      |

---

## Organisms (Organizmalar)

### Navbar

Tam donanımlı navigasyon çubuğu — masaüstü, mobil, mega menü, arama, sticky, auto-hide desteği.

```tsx
import {
  Navbar,
  NavbarMain,
  NavbarBrand,
  NavbarLinks,
  NavbarLink,
  NavbarActions,
  NavbarMobileToggle,
  NavbarMobileMenu,
  NavbarMobileLink,
  NavbarDropdown,
  NavbarDropdownTrigger,
  NavbarMegaMenu,
  NavbarSearch,
  NavbarDivider,
} from "poyraz-ui/organisms";

<Navbar variant="bordered" sticky autoHide>
  <NavbarMain>
    <NavbarBrand href="/">
      <img src="/logo.png" alt="Logo" width={28} height={28} />
      <span>Marka</span>
    </NavbarBrand>

    <NavbarLinks>
      <NavbarLink href="/docs">Dökümantasyon</NavbarLink>
      <NavbarLink href="/components">Bileşenler</NavbarLink>

      {/* Mega Menü */}
      <NavbarDropdown>
        <NavbarDropdownTrigger>Ürünler</NavbarDropdownTrigger>
        <NavbarMegaMenu>{/* İçerik */}</NavbarMegaMenu>
      </NavbarDropdown>
    </NavbarLinks>

    <NavbarActions>
      <NavbarSearch placeholder="Ara..." />
      <Button size="sm">Başla</Button>
    </NavbarActions>

    <NavbarMobileToggle />
  </NavbarMain>

  <NavbarMobileMenu>
    <NavbarMobileLink href="/docs">Dökümantasyon</NavbarMobileLink>
    <NavbarMobileLink href="/components">Bileşenler</NavbarMobileLink>
  </NavbarMobileMenu>
</Navbar>;
```

| Prop                 | Tip                                             | Varsayılan            | Açıklama                           |
| -------------------- | ----------------------------------------------- | --------------------- | ---------------------------------- |
| `variant`            | `default \| minimal \| transparent \| bordered` | `default`             | Navbar stili                       |
| `sticky`             | `boolean`                                       | `false`               | Üst kısma yapışık                  |
| `autoHide`           | `boolean`                                       | `false`               | Scroll down'da gizle, up'da göster |
| `containerClassName` | `string`                                        | `"max-w-5xl mx-auto"` | İç container sınıfı                |

**Hook:** `useNavbar()` — `mobileOpen`, `setMobileOpen`, `variant`, `containerClassName` erişimi.

---

### Sidebar

```tsx
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarSearch,
  SidebarSubMenu,
  SidebarSubMenuItem,
  SidebarUserProfile,
  SidebarFooter,
} from "poyraz-ui/organisms";

<Sidebar variant="default" defaultCollapsed={false}>
  <SidebarHeader>
    <SidebarTrigger action="collapse" />
    <SidebarSearch onSearch={(val) => console.log(val)} />
  </SidebarHeader>

  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel>Ana Menü</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem href="/" icon={<HomeIcon />} active>
          Ana Sayfa
        </SidebarMenuItem>
        <SidebarMenuItem
          href="/users"
          icon={<UsersIcon />}
          badge={<Badge>3</Badge>}
        >
          Kullanıcılar
        </SidebarMenuItem>
        <SidebarSubMenu label="Ayarlar" icon={<SettingsIcon />}>
          <SidebarSubMenuItem href="/settings/profile" active>
            Profil
          </SidebarSubMenuItem>
          <SidebarSubMenuItem href="/settings/security">
            Güvenlik
          </SidebarSubMenuItem>
        </SidebarSubMenu>
      </SidebarMenu>
    </SidebarGroup>
  </SidebarContent>

  <SidebarFooter>
    <SidebarUserProfile
      name="Poyraz Avsever"
      role="Geliştirici"
      avatarUrl="/avatar.jpg"
      initials="PA"
    />
  </SidebarFooter>
</Sidebar>;
```

| Prop               | Tip                                                              | Varsayılan |
| ------------------ | ---------------------------------------------------------------- | ---------- |
| `variant`          | `default \| collapsible \| floating \| mini \| dark \| bordered` | `default`  |
| `defaultCollapsed` | `boolean`                                                        | `false`    |

**Hook:** `useSidebar()` — `collapsed`, `setCollapsed`, `mobileOpen`, `setMobileOpen`, `variant` erişimi.

---

### Footer

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
  FooterNewsletter,
  FooterDivider,
  FooterBottom,
  FooterBottomLinks,
} from "poyraz-ui/organisms";

<Footer variant="full">
  <FooterGrid>
    <FooterBrand>
      <Logo src="/logo.png" />
      <p>Minimal tasarım, modern bileşenler.</p>
    </FooterBrand>
    <FooterSection>
      <FooterHeading>Dökümantasyon</FooterHeading>
      <FooterLink href="/docs">Başlarken</FooterLink>
      <FooterLink href="/docs/installation">Kurulum</FooterLink>
    </FooterSection>
  </FooterGrid>

  <FooterNewsletter
    heading="Bültene Abone Ol"
    description="Güncellemelerden haberdar olun."
    buttonText="Abone Ol"
    onSubscribe={(email) => console.log(email)}
  />

  <FooterDivider />

  <FooterBottom>
    <p>© 2026 Poyraz Avsever</p>
    <FooterSocials>
      <FooterSocialLink href="https://github.com/poyrazavsever">
        <GithubIcon />
      </FooterSocialLink>
    </FooterSocials>
  </FooterBottom>
</Footer>;
```

| Prop                 | Tip                                              | Varsayılan            |
| -------------------- | ------------------------------------------------ | --------------------- |
| `variant`            | `full \| compact \| branded \| centered \| dark` | `full`                |
| `containerClassName` | `string`                                         | `"max-w-5xl mx-auto"` |

---

### Announcement Bar

```tsx
import { AnnouncementBar } from "poyraz-ui/organisms";

<AnnouncementBar
  variant="branded"
  dismissible
  icon={<SparklesIcon />}
  action={
    <a href="/new" className="underline">
      Detaylar →
    </a>
  }
>
  🎉 Yeni sürüm yayınlandı!
</AnnouncementBar>;
```

| Prop          | Tip                                                          | Varsayılan |
| ------------- | ------------------------------------------------------------ | ---------- |
| `variant`     | `default \| info \| success \| warning \| danger \| branded` | `default`  |
| `dismissible` | `boolean`                                                    | `true`     |
| `icon`        | `React.ReactNode`                                            | —          |
| `action`      | `React.ReactNode`                                            | —          |
| `onDismiss`   | `() => void`                                                 | —          |

---

### DataTable

```tsx
import { DataTable, type DataTableColumnDef } from "poyraz-ui/organisms";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const columns: DataTableColumnDef<User>[] = [
  { id: "name", header: "İsim", accessorKey: "name", sortable: true },
  { id: "email", header: "E-posta", accessorKey: "email", filterable: true },
  { id: "role", header: "Rol", accessorKey: "role", sortable: true },
  {
    id: "actions",
    header: "İşlem",
    cell: (row) => (
      <Button size="sm" variant="outline">
        Düzenle
      </Button>
    ),
  },
];

<DataTable
  columns={columns}
  data={users}
  pageSize={10}
  pagination
  searchable
  searchPlaceholder="Kullanıcı ara..."
  selectable
  onSelectionChange={(rows) => console.log(rows)}
  columnToggle
  emptyMessage="Kullanıcı bulunamadı."
/>;
```

| Prop           | Tip                       | Varsayılan            |
| -------------- | ------------------------- | --------------------- |
| `columns`      | `DataTableColumnDef<T>[]` | — (zorunlu)           |
| `data`         | `T[]`                     | — (zorunlu)           |
| `pageSize`     | `number`                  | `10`                  |
| `pagination`   | `boolean`                 | `true`                |
| `searchable`   | `boolean`                 | `true`                |
| `selectable`   | `boolean`                 | `false`               |
| `columnToggle` | `boolean`                 | `false`               |
| `emptyMessage` | `string`                  | `"No results found."` |

---

## Navigasyon Config Pattern

Tüm navigasyon öğelerini tek bir dosyada yönetin:

```ts
// lib/navigation.ts

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export interface FooterSection {
  heading: string;
  links: NavItem[];
}

export interface ComponentGroup {
  label: string;
  basePath: string;
  items: string[];
}

export const mainNav: NavItem[] = [
  { label: "Dökümantasyon", href: "/docs" },
  { label: "Bileşenler", href: "/docs/atoms" },
  { label: "GitHub", href: "https://github.com/...", external: true },
];

export const footerNav: FooterSection[] = [
  {
    heading: "Dökümantasyon",
    links: [
      { label: "Başlarken", href: "/docs" },
      { label: "Kurulum", href: "/docs/installation" },
    ],
  },
];

export const componentRegistry: ComponentGroup[] = [
  {
    label: "Atoms",
    basePath: "/docs/atoms",
    items: ["Button", "Input", "Badge"],
  },
  {
    label: "Molecules",
    basePath: "/docs/molecules",
    items: ["Dialog", "Tabs"],
  },
];

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}
```

Sonra bileşenlerde kullanın:

```tsx
import { mainNav, footerNav } from "@/lib/navigation";

// Navbar'da
<NavbarLinks>
  {mainNav.map((item) => (
    <NavbarLink key={item.href} href={item.href}>
      {item.label}
    </NavbarLink>
  ))}
</NavbarLinks>

// Footer'da
<FooterGrid>
  {footerNav.map((section) => (
    <FooterSection key={section.heading}>
      <FooterHeading>{section.heading}</FooterHeading>
      {section.links.map((link) => (
        <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
      ))}
    </FooterSection>
  ))}
</FooterGrid>
```

---

## Tema Özelleştirme

Projelerinizin CSS dosyasında Tailwind `@theme` token'larını override edin:

```css
@theme {
  /* Birincil rengi değiştir */
  --color-primary: #2563eb; /* Mavi */

  /* Birincil fontu değiştir */
  --font-sans: "Outfit", system-ui, sans-serif;

  /* İkincil fontu değiştir */
  --font-secondary: "Playfair Display", serif;
}
```

### Varsayılan Font Token'ları

| Token              | Varsayılan Değer                                | Kullanım                                       |
| ------------------ | ----------------------------------------------- | ---------------------------------------------- |
| `--font-sans`      | `"Inter", ui-sans-serif, system-ui, sans-serif` | Body, başlıklar, tüm bileşenler                |
| `--font-secondary` | `"Agbalumo", cursive`                           | `font-secondary` utility, `secondaryFont` prop |
| `--color-primary`  | `#dc2626` (red-600)                             | Birincil aksan rengi                           |

> **Not:** Bileşenler doğrudan `red-600` gibi Tailwind renklerini kullandığından, renk şemasını
> tamamen değiştirmek için bileşenleri de özelleştirmeniz gerekebilir. `--color-primary` token'ı
> preset'teki ana rengi belirlerken, `focus-visible:ring-red-600` gibi değerler bileşen kodlarında
> hardcoded olarak kullanılmaktadır.

---

## Yeni Bileşen Ekleme

1. **Bileşeni oluştur:** `components/ui/atoms/`, `molecules/` veya `organisms/` altında `.tsx` dosyası
2. **Barrel export:** `src/atoms/index.ts`, `src/molecules/index.ts` veya `src/organisms/index.ts`'e ekle
3. **Dökümantasyon sayfası:** `app/docs/<tier>/<bileşen-adı>/page.tsx` oluştur
4. **Registry'ye ekle:** `lib/navigation.ts` → `componentRegistry` dizisine bileşen adını ekle
5. **Build doğrula:** `pnpm build:lib` ile build'in başarılı olduğunu kontrol et

---

## Geliştirme Komutları

| Komut            | Açıklama                                    |
| ---------------- | ------------------------------------------- |
| `pnpm dev`       | Next.js dev sunucusu (dökümantasyon sitesi) |
| `pnpm build`     | Hem kütüphane hem site production build     |
| `pnpm build:lib` | Sadece npm paketi build (ESM + CJS + DTS)   |
| `pnpm start`     | Production build'i serve et                 |

> **Not:** Build sırasında `tsup` otomatik olarak tüm çıktı dosyalarının başına `"use client"`
> direktifi ekler (`tsup.config.ts` → `onSuccess: addUseClientDirective`). Bu sayede Server
> Components ortamında kullanırken ek yapılandırmaya gerek yoktur.

---

## Proje Yapısı

```
poyraz-ui/
├── app/                        # Next.js dökümantasyon sitesi
│   ├── page.tsx                # Ana sayfa
│   ├── globals.css             # Global CSS
│   ├── layout.tsx              # Root layout
│   ├── demos/                  # Demo bileşenleri
│   └── docs/                   # Bileşen dökümantasyon sayfaları
├── components/
│   ├── ui/
│   │   ├── atoms/              # 17 atom bileşen
│   │   ├── molecules/          # 21 molecule bileşen
│   │   └── organisms/          # 5 organism bileşen
│   └── docs/                   # Dökümantasyon yardımcıları
├── lib/
│   └── navigation.ts           # Merkezi navigasyon yapılandırması
├── src/
│   ├── index.ts                # Ana paket giriş noktası
│   ├── utils.ts                # cn() utility
│   ├── preset.css              # Temel tasarım token'ları
│   ├── atoms/index.ts          # Atom barrel exports
│   ├── molecules/index.ts      # Molecule barrel exports
│   └── organisms/index.ts      # Organism barrel exports
├── dist/                       # Build çıktısı
├── tsup.config.ts              # Kütüphane build yapılandırması
├── tsconfig.lib.json           # Kütüphane TS yapılandırması
└── package.json
```

---

## Teknoloji Yığını

| Teknoloji                    | Kullanım Amacı                                |
| ---------------------------- | --------------------------------------------- |
| **Next.js 16**               | Dökümantasyon sitesi framework'ü (App Router) |
| **React 19**                 | UI rendering                                  |
| **TypeScript 5**             | Tüm bileşenlerde tip güvenliği                |
| **Tailwind CSS 4**           | Utility-first stil, `@theme` token'ları       |
| **Radix UI**                 | Erişilebilir, stilsiz primitifler (12+ paket) |
| **class-variance-authority** | Tip-güvenli varyant yönetimi                  |
| **tailwind-merge**           | Akıllı Tailwind sınıf birleştirme             |
| **Lucide React**             | İkon kütüphanesi                              |
| **Vaul**                     | Drawer bileşen primitifi                      |
| **Sonner**                   | Toast bildirim sistemi                        |
| **tsup**                     | Kütüphane bundler (ESM + CJS + DTS)           |
