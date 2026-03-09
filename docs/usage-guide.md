# Poyraz UI - Usage Guide (Detayli)

Bu dokuman, `d:/Poyraz/kodlama/poyraz-ui` reposunun guncel kaynak kodu uzerinden hazirlandi.
Hedef: UI kitin hem kullanici (consumer) tarafini hem de bu repoyu gelistirme tarafini tek yerde toplamak.

Versiyon referansi: `2.0.1`

---

## 1) Proje Ozeti

Poyraz UI, React tabanli, Tailwind CSS v4 ile calisan, atomic design yaklasimi kullanan bir UI kit.
Repo iki ana amaca hizmet ediyor:

1. npm paketi olarak dagitilan UI kutuphanesi (`src`, `components/ui`, `dist`)
2. Next.js App Router ile yazilmis canli dokumantasyon sitesi (`app`)

Temel karakter:

- clean border odakli, minimum shadow
- `rounded-sm` kullanimina dayali yalin gorunum
- semantic token sistemi (`--poyraz-*`)
- dark mode uyumlu
- atoms -> molecules -> organisms katmanlamasi

---

## 2) Dizin Yapisi (Gercek Kod Yapisi)

```txt
poyraz-ui/
|- app/                    # Next.js docs sitesi
|  |- docs/                # component/template dokumantasyon sayfalari
|  |- globals.css          # docs sitesi global css + dark override
|  |- layout.tsx           # next-themes + Toaster entegrasyonu
|  `- page.tsx             # landing/showcase
|- bin/
|  `- cli.mjs              # npx poyraz-ui init
|- components/
|  |- ui/
|  |  |- atoms/            # 17 atom dosyasi
|  |  |- molecules/        # 22 molecule dosyasi
|  |  `- organisms/        # 5 organism dosyasi
|  |- theme-provider.tsx   # docs sitesi next-themes wrapper
|  `- theme-toggle.tsx     # docs sitesi toggle
|- lib/
|  `- navigation.ts        # docs nav/registry merkezi config
|- src/
|  |- index.ts             # ana export
|  |- atoms/index.ts       # atom export map
|  |- molecules/index.ts   # molecule export map
|  |- organisms/index.ts   # organism export map
|  |- themes/index.ts      # poyrazLightTheme / poyrazDarkTheme
|  |- preset.css           # token layer + @theme bridge
|  `- utils.ts             # cn()
|- dist/                   # tsup output (publish edilen paket)
|- tsup.config.ts          # 5 entry point, esm+cjs, dts
`- package.json
```

---

## 3) Kullanici Tarafi Kurulum (Consumer App)

### 3.1 Paket kurulumu

```bash
pnpm add poyraz-ui
# veya
npm install poyraz-ui
# veya
yarn add poyraz-ui
```

### 3.2 Zorunlu peer dependencies

- `react >= 18`
- `react-dom >= 18`
- `tailwindcss >= 4`

Opsiyonel peer dependencies:

- `react-hook-form`, `@hookform/resolvers`, `zod` (Form molecule icin)
- `reactive-switcher` (hazir theme objectleriyle dinamik tema gecisi icin)

### 3.3 CSS import (kritik)

Root global stylesheet dosyana ekle:

```css
@import "tailwindcss";
@import "poyraz-ui/preset.css";
```

`preset.css` olmadan renk/font tokenlari dogru resolve edilmez.

### 3.4 Hemen kullanim

```tsx
import { Button, Card, CardContent } from "poyraz-ui/atoms";

export function Demo() {
  return (
    <Card>
      <CardContent className="p-4">
        <Button>Merhaba</Button>
      </CardContent>
    </Card>
  );
}
```

---

## 4) Import Stratejisi ve Entry Pointler

Paket 5 entry point sunuyor:

- `poyraz-ui`
- `poyraz-ui/atoms`
- `poyraz-ui/molecules`
- `poyraz-ui/organisms`
- `poyraz-ui/themes`

Onerilen yaklasim:

- Uretim projelerinde alt path importlarini kullan (`/atoms`, `/molecules`, `/organisms`)
- Gecis surecinde hiz icin ana barrel (`poyraz-ui`) kullanabilirsin

Ornek:

```tsx
import { Button, Badge } from "poyraz-ui/atoms";
import { Dialog } from "poyraz-ui/molecules";
import { Navbar } from "poyraz-ui/organisms";
import { poyrazLightTheme, poyrazDarkTheme } from "poyraz-ui/themes";
```

---

## 5) Tema Sistemi (En Onemli Altyapi)

Tema zinciri su sekilde calisiyor:

1. Component classlari `bg-background`, `text-foreground`, `border-border` gibi semantic utility kullaniyor.
2. `src/preset.css`, `@theme` ile bunlari `--color-*` tokenlarina bagliyor.
3. `--color-*` tokenlari, `var(--poyraz-*, fallback)` ile semantic CSS variable'a mapleniyor.
4. Sen `--poyraz-*` degistirdiginde tum kit yeni temaya gecer.

### 5.1 Token katmanlari

- Base semantic variables: `--poyraz-background`, `--poyraz-foreground`, `--poyraz-primary`, ...
- Tailwind v4 bridge: `--color-background`, `--color-foreground`, ...
- Utility kullanim: `bg-background`, `text-muted-foreground`, ...

### 5.2 Dark mode (class tabanli)

Docs sitesi `next-themes` kullaniyor ve `html.dark` altinda `--poyraz-*` override ediyor (`app/globals.css`).

### 5.3 reactive-switcher entegrasyonu

`src/themes/index.ts` icinde hazir theme objectleri var:

- `poyrazLightTheme`
- `poyrazDarkTheme`
- `poyrazThemes`

Ornek:

```tsx
import { ThemeProvider } from "reactive-switcher";
import { poyrazThemes } from "poyraz-ui/themes";

export function AppTheme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider themes={poyrazThemes}>{children}</ThemeProvider>;
}
```

---

## 6) Component Katalogu

Bu bolum `src/*/index.ts` export maplerine gore hazirlandi.

### 6.1 Atoms (17 component dosyasi)

- Avatar
- Badge
- Button
- Card
- Checkbox
- Input
- Label
- Logo
- Radio Group
- Separator
- Skeleton
- Switch
- Textarea
- Typography
- Form Fields (`NumberInput`, `SearchInput`, `PhoneInput`, `PasswordInput`, `UrlInput`)
- BG Patterns (`PatternDots`, `PatternGrid`, `PatternLines`, `PatternDiagonal`, `PatternCross`, `PatternCheckerboard`, `PatternDiamond`, `PatternZigzag`, `PatternDashedGrid`, `PatternRadial`)
- ScrollArea

### 6.2 Molecules (22 component dosyasi)

Core molecules:

- Accordion
- Alert
- Autocomplete
- Breadcrumb
- Calendar
- Command Palette
- Date Picker
- Dialog
- Drawer
- Dropdown Menu
- Form
- Hover Card
- Modal
- Pagination
- Popover
- Select
- Sheet
- Sonner (`Toaster`, `toast`)
- Tabs
- Tooltip

Template molecules (card-templates):

- ArticleCard
- ImageCard
- NewsCard
- StatsCard
- TestimonialCard
- PricingCard
- ProductCard

### 6.3 Organisms (5 component dosyasi)

- Navbar
- Sidebar
- Footer
- AnnouncementBar
- DataTable

---

## 7) Hazir Template Sayfalari (Docs Icinde)

`app/docs/templates` altinda 4 kopyalanabilir sayfa semasi var:

- Hero
- Pricing
- Dashboard
- Auth

Onemli not:

- Bunlar npm paketi icinde "template component" olarak export edilmiyor.
- Kaynagi kopyalayip projenin ihtiyacina gore duzenleme modeli kullaniliyor.

---

## 8) Dokumantasyon Sitesi Mimarisi

`app/docs` altinda:

- toplam `53` adet `page.tsx`
- atoms: `18`
- molecules: `22`
- organisms: `6`
- templates: `5`

Merkezi nav/registry:

- `lib/navigation.ts`
- sidebardaki kategori sayilari ve slug donusumu burada yonetiliyor (`toSlug`)

---

## 9) CLI: `npx poyraz-ui init`

CLI (`bin/cli.mjs`) su adimlari yapar:

1. CSS dosyasini otomatik tespit eder (`app/globals.css`, `src/app/globals.css` vb.)
2. `@import "poyraz-ui/preset.css";` satirini ekler
3. Opsiyonel olarak `reactive-switcher` tema dosyasi scaffold eder
4. Layout icin ThemeProvider snippet'i gosterir

Manual kurulum yerine hizli onboarding icin ideal.

---

## 10) Build, Bundle ve Publish Akisi

### 10.1 Scriptler

- `pnpm dev`: docs sitesi
- `pnpm build`: library + docs production build
- `pnpm build:lib`: sadece library (`tsup`)
- `pnpm start`: next production serve
- `pnpm prepublishOnly`: publish oncesi otomatik `build:lib`

### 10.2 tsup ozeti

`tsup.config.ts`:

- 5 entry point uretir (`index`, `atoms/index`, `molecules/index`, `organisms/index`, `themes/index`)
- format: `esm + cjs`
- `dts: true`
- `splitting + treeshake + clean`
- build sonrasi `dist` dosyalarina `"use client"` directive inject eder

### 10.3 package export haritasi

`package.json` `exports` alani:

- alt path importlarini hem ESM hem CJS ile aciklar
- `./preset.css` dogrudan `src/preset.css`'e yonlenir

---

## 11) Bu Repoda Yeni Component Ekleme Rehberi

### 11.1 Kod ekleme

1. Component dosyasini `components/ui/<layer>/` altina ekle
2. Gerekirse type exportlarini component dosyasinda tanimla

### 11.2 Export haritasi

3. `src/<layer>/index.ts` icine export satirlarini ekle
4. Gerekliyse `src/index.ts` ana barrel kontrol et

### 11.3 Docs entegrasyonu

5. `app/docs/<layer>/<component>/page.tsx` olustur
6. Kategori index sayfasina link ekle (`app/docs/<layer>/page.tsx`)
7. `lib/navigation.ts` icindeki `componentRegistry` listesine ekle

### 11.4 Dogrulama

8. `pnpm build:lib`
9. `pnpm dev` ile docs sayfasini ve importlarini test et

---

## 12) Sik Kullanilan Kullanim Patternleri

### 12.1 Form stack

- Atoms: `Input`, `Label`, `Checkbox`, `Button`
- Molecules: `Form`, `Select`, `DatePicker`, `Autocomplete`

### 12.2 Overlay stack

- `Dialog`, `Modal`, `Drawer`, `Sheet`, `Popover`, `Tooltip`
- Her biri Radix/Vaul primitive uzerinden geldigi icin a11y ve keyboard destegi yuksek

### 12.3 Navigation stack

- `Navbar` (desktop + mobile panel)
- `Sidebar` (collapsible/floating/mini varyantlar)
- `Footer` (layout varyantlari)

### 12.4 Data stack

- `DataTable` + `Badge` + `Pagination`
- dashboard tarzinda `StatsCard`, `Card`, `Avatar` ile birlikte kullaniliyor

---

## 13) Bilinen Durumlar / Dikkat Noktalari

1. `Mermaid` dokumantasyon sayfasi var (`app/docs/molecules/mermaid/page.tsx`) ancak su anda `src/molecules/index.ts` icinden export edilmiyor.
2. `componentRegistry` molecules listesi ile molecules landing page listesi tam birebir degil (sidebar listesinde Mermaid yok).
3. Template sayfalari (Hero/Pricing/Dashboard/Auth) paket exportu degil; kopyala-ozellestir modeli.
4. Rehber ve README metinlerinde bilesen sayilari bazen farkli geciyor; son karar noktasi her zaman `src/*/index.ts` export mapidir.

---

## 14) Hizli Referans

### 14.1 Consumer app checklist

1. `poyraz-ui` paketini kur
2. `@import "poyraz-ui/preset.css";` ekle
3. `poyraz-ui/atoms` veya `poyraz-ui/molecules` uzerinden import et
4. Tema gerekiyorsa `--poyraz-*` override et veya `poyraz-ui/themes` kullan

### 14.2 Repo contributor checklist

1. component dosyasi ekle (`components/ui`)
2. export map guncelle (`src/*/index.ts`)
3. docs page ekle (`app/docs/...`)
4. navigation registry guncelle (`lib/navigation.ts`)
5. `pnpm build:lib` ve `pnpm dev` ile dogrula

---

## 15) Ek Kaynaklar

- Paket genel tanitim: `README.md`
- Genis API referansi: `COMPONENTS.md`
- Theme switcher notlari: `theme-switcher.md`
- Kurulum sayfasi referansi: `app/docs/installation/page.tsx`

---

Bu dokuman "proje ici operasyonel guide" amaciyla yazildi.
Paketin public-facing README'sini sade tutup, bu dosyayi teknik detay merkezi olarak kullanman tavsiye edilir.
