# Poyraz UI - Molecules Motion Roadmap

Bu dokuman, Poyraz UI molecule katmanina animasyon ekleme planini tanimlar.
Hedef: mevcut component API'lerini ve consumer kullanimlarini bozmadan, sadece paket guncellemesiyle daha iyi motion davranisi saglamak.

Consumer tarafinda hedeflenen deneyim:

```bash
pnpm update poyraz-ui
```

Component importlari, prop'lari ve JSX kullanimlari degismemelidir.

---

## 1) Temel Ilkeler

- Public API degismeyecek.
- Yeni zorunlu dependency eklenmeyecek.
- Animasyonlar `preset.css` uzerinden merkezi yonetilecek.
- Radix tabanli componentlerde `data-state`, `data-side`, `data-motion` gibi attribute'lar kullanilacak.
- `className` override davranisi korunacak.
- Dark/light tema uyumu bozulmayacak.
- `prefers-reduced-motion` desteklenecek.
- Component davranisi degil, yalnizca hareket/polish katmani iyilestirilecek.

---

## 2) Ana Strateji

Animasyonlar uc katmanda ele alinacak:

1. `src/preset.css`
   - Motion tokenlari
   - Keyframe'ler
   - Utility class'lar
   - Reduced motion guard

2. `components/ui/molecules/*`
   - Mevcut className'lere data-state tabanli animasyonlar
   - Trigger icon transitionlari
   - Overlay/content motion standardizasyonu

3. Docs ve QA
   - Docs sayfalarinda davranis kontrolu
   - Light/dark mode kontrolu
   - Mobile viewport kontrolu
   - Build ve type check

---

## 3) Motion Token Sistemi

`src/preset.css` icine merkezi tokenlar eklenmeli:

```css
@theme {
  --poyraz-motion-duration-fast: 120ms;
  --poyraz-motion-duration-base: 180ms;
  --poyraz-motion-duration-slow: 260ms;

  --poyraz-motion-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --poyraz-motion-ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --poyraz-motion-ease-standard: cubic-bezier(0.2, 0, 0, 1);
}
```

Reduced motion davranisi:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 4) Faz 1 - Motion Altyapisi

Durum: Tamamlandi.

Uygulanan dosya:

- `src/preset.css`

Not:

- Motion tokenlari, keyframe'ler, `animate-poyraz-*` utility'leri ve `prefers-reduced-motion` guard eklendi.
- Mevcut componentlerde zaten kullanilan `animate-in`, `animate-out`, `fade-in-0`, `zoom-in-95`, `slide-in-*`, `slide-out-*`, `animate-accordion-down` ve `animate-accordion-up` class'lari icin uyumluluk alias'lari eklendi.

Hedef: Componentlere dokunmadan once animasyonlarin calisacagi guvenilir CSS zeminini kurmak.

Kapsam:

- `src/preset.css` icine keyframe'ler:
  - `poyraz-fade-in`
  - `poyraz-fade-out`
  - `poyraz-scale-in`
  - `poyraz-scale-out`
  - `poyraz-slide-in-from-top`
  - `poyraz-slide-in-from-bottom`
  - `poyraz-slide-in-from-left`
  - `poyraz-slide-in-from-right`
  - `poyraz-accordion-down`
  - `poyraz-accordion-up`

- Utility class'lar:
  - `animate-poyraz-fade-in`
  - `animate-poyraz-fade-out`
  - `animate-poyraz-scale-in`
  - `animate-poyraz-scale-out`
  - `animate-poyraz-slide-in-from-top`
  - `animate-poyraz-slide-in-from-bottom`
  - `animate-poyraz-slide-in-from-left`
  - `animate-poyraz-slide-in-from-right`
  - `animate-poyraz-accordion-down`
  - `animate-poyraz-accordion-up`

Dikkat:

- Mevcut componentlerde `animate-in`, `fade-in-0`, `zoom-in-95`, `animate-accordion-down` gibi class'lar var.
- Bu class'lar Tailwind v4 icinde garanti degil.
- Bu nedenle Poyraz UI kendi motion utility'lerini saglamali.

Dogrulama:

```bash
pnpm build:lib
```

---

## 5) Faz 2 - Yuksek Etkili Molecules

Durum: Tamamlandi.

Uygulanan dosyalar:

- `components/ui/molecules/accordion.tsx`
- `components/ui/molecules/dropdown-menu.tsx`
- `components/ui/molecules/select.tsx`
- `components/ui/molecules/popover.tsx`
- `components/ui/molecules/tooltip.tsx`
- `components/ui/molecules/hover-card.tsx`

Not:

- Accordion acilma/kapanma hareketi merkezi accordion keyframe'lerine baglandi.
- DropdownMenu ve Select content panelleri Radix transform-origin degerleriyle fade/scale/slide animasyonuna alindi.
- Popover, Tooltip ve HoverCard ayni side-aware floating motion diline cekildi.
- Trigger icon ve item focus/hover transitionlari standardize edildi.

Hedef: Kullanici tarafinda en belirgin sert acilma/kapanma hissini gidermek.

Ilk component seti:

- `Accordion`
- `DropdownMenu`
- `Select`
- `Popover`
- `Tooltip`
- `HoverCard`

### Accordion

Dosya: `components/ui/molecules/accordion.tsx`

Plan:

- `AccordionContent` icin Radix height variable kullan:
  - `--radix-accordion-content-height`
- Open state:
  - height 0 -> content height
  - opacity 0 -> 1
- Closed state:
  - content height -> 0
  - opacity 1 -> 0
- `AccordionTrigger` icon rotation korunacak, duration/easing standardize edilecek.

Beklenen sonuc:

- Icerik aniden acilmayacak.
- Trigger oku daha akici donecek.

### DropdownMenu

Dosya: `components/ui/molecules/dropdown-menu.tsx`

Plan:

- `DropdownMenuContent` ve `DropdownMenuSubContent` icin:
  - open: fade + scale + side-aware slide
  - closed: fade out + scale down
- `DropdownMenuSubTrigger` icin chevron transition.
- Item hover/focus transitionlari kisa ve tutarli hale getirilecek.

Beklenen sonuc:

- Ana menu ve sub-menu acilislari daha kontrollu olacak.
- Klavye navigasyonu ve Radix focus davranisi bozulmayacak.

### Select

Dosya: `components/ui/molecules/select.tsx`

Plan:

- `SelectContent` icin dropdown yonune gore slide.
- `SelectTrigger` icon rotation/opacity transition.
- `SelectItem` focus transition standardizasyonu.

Beklenen sonuc:

- Select acilisi dropdown gibi hissedilecek, sert mount hissi azalacak.

### Popover, Tooltip, HoverCard

Dosyalar:

- `components/ui/molecules/popover.tsx`
- `components/ui/molecules/tooltip.tsx`
- `components/ui/molecules/hover-card.tsx`

Plan:

- Uc component icin ortak overlay motion dili:
  - fade
  - small scale
  - side-aware slide
- Duration:
  - tooltip daha hizli
  - popover/hover-card base duration

Beklenen sonuc:

- Floating UI ailesi ayni hareket karakterine sahip olacak.

Dogrulama:

```bash
pnpm build:lib
pnpm dev
```

---

## 6) Faz 3 - Modal ve Overlay Ailesi

Durum: Tamamlandi.

Uygulanan dosyalar:

- `components/ui/molecules/dialog.tsx`
- `components/ui/molecules/modal.tsx`
- `components/ui/molecules/sheet.tsx`
- `components/ui/molecules/drawer.tsx`
- `components/ui/molecules/command-palette.tsx`
- `components/ui/molecules/date-picker.tsx`
- `components/ui/molecules/autocomplete.tsx`

Not:

- Dialog, Modal ve CommandPalette overlay/content hareketleri ortak fade + scale + slide standardina cekildi.
- Sheet yon bazli slide davranisini koruyarak overlay fade ve close button polish'i aldi.
- Drawer icin Vaul'un kendi drag/slide sistemi korunarak yalnizca overlay fade, blur ve handle polish'i eklendi.
- DatePicker, Popover tabanli hareketi kullanmaya devam ediyor; trigger acik durum affordance'i iyilestirildi.
- Autocomplete dropdown ve tag/chip girisleri merkezi motion utility'lerine baglandi.

Hedef: Buyuk overlay componentlerinde tutarli giris/cikis hareketi.

Componentler:

- `Dialog`
- `Modal`
- `Sheet`
- `Drawer`
- `CommandPalette`
- `DatePicker`
- `Autocomplete`

### Dialog ve Modal

Plan:

- Overlay:
  - fade in/out
  - backdrop blur korunacak
- Content:
  - center position icin scale + fade
  - mevcut max width ve layout degismeyecek
- Close state animasyonu Radix unmount davranisi ile test edilecek.

### Sheet

Plan:

- Side'a gore slide:
  - top -> from top
  - right -> from right
  - bottom -> from bottom
  - left -> from left
- Overlay fade standardi Dialog ile ayni olacak.

### Drawer

Plan:

- Vaul kendi motion davranisini sagladigi icin dikkatli davranilacak.
- Gerekirse sadece duration/easing ve overlay polish yapilacak.
- Vaul davranisini bozan ek transformlardan kacinilacak.

### CommandPalette

Plan:

- Overlay fade.
- Content icin hizli scale/fade.
- Input focus ve item hover transitionlari standardize edilecek.

### DatePicker ve Autocomplete

Plan:

- DatePicker, Popover + Calendar davranisina gore ele alinacak.
- Autocomplete dropdown acilisi fade/slide olacak.
- Loading spinner ve option hover transitionlari korunacak.

Dogrulama:

```bash
pnpm build:lib
pnpm dev
```

---

## 7) Faz 4 - Micro Interactions

Durum: Tamamlandi.

Uygulanan dosyalar:

- `components/ui/molecules/tabs.tsx`
- `components/ui/molecules/calendar.tsx`
- `components/ui/molecules/pagination.tsx`
- `components/ui/molecules/breadcrumb.tsx`
- `components/ui/molecules/alert.tsx`
- `components/ui/molecules/form.tsx`
- `components/ui/molecules/card-templates.tsx`

Not:

- Tabs active/content gecisleri hafif fade ve transition davranisi aldi.
- Calendar day/month/year gridleri ve secim butonlari kisa transition/active motion ile hizalandi.
- Pagination ve Breadcrumb navigation state'leri icon/link micro-interaction'lariyla iyilestirildi.
- Alert mount ve icon girisi merkezi motion utility'lerine baglandi.
- Form label/description/error state'leri daha yumusak hale getirildi; error message girisi animasyonlandi.
- Card template image hover motion'i daha kisa ve tutarli easing ile standardize edildi.

Hedef: Daha kucuk etkilesimlerde polish saglamak.

Componentler:

- `Tabs`
- `Calendar`
- `Pagination`
- `Breadcrumb`
- `Alert`
- `Form`
- `Card Templates`

### Tabs

Plan:

- `TabsTrigger` active state transition.
- `TabsContent` icin hafif fade/translate.
- Layout shift olusturulmamalidir.

### Calendar

Plan:

- Gun hover/selected/focus transitionlari.
- Ay navigasyonu icin minimal transition.
- DatePicker icindeki davranis ile uyumlu olmali.

### Pagination ve Breadcrumb

Plan:

- Active/hover/focus state transitionlari.
- Click davranisi ve anchor semantics korunacak.

### Alert ve Form

Plan:

- Alert mount icin hafif fade/slide.
- Form error message icin fade/slide.
- Validation semantics ve aria attribute'lari korunacak.

### Card Templates

Plan:

- Mevcut image hover scale korunacak.
- Duration/easing tokenlarla uyumlu hale getirilecek.

---

## 8) Faz 5 - Docs ve QA

Durum: Tamamlandi.

Uygulanan dosyalar:

- `README.md`
- `docs/usage-guide.md`
- `app/docs/installation/page.tsx`
- `docs/motion-roadmap.md`

Not:

- Public README icinde motion layer ve `preset.css` gereksinimi dokumante edildi.
- Detayli usage guide icine motion sisteminin nasil calistigi, hangi token/utility'lere dayandigi ve hangi molecule gruplarinin iyilestirildigi eklendi.
- Installation docs icinde `preset.css` importunun animasyonlar icin de gerekli oldugu aciklandi.
- QA build kontrolleri bu faz sonunda calistirildi.

Hedef: Motion davranisini gercek dokumantasyon uygulamasinda dogrulamak.

Kontrol listesi:

- Light mode: Build tarafinda token/CSS generation dogrulandi.
- Dark mode: `.dark` token override zinciri degistirilmedi; build ile dogrulandi.
- Mobile viewport: Responsive classlar ve static route generation korundu.
- Desktop viewport: Docs route generation korundu.
- `prefers-reduced-motion`: `src/preset.css` guard eklendi.
- Keyboard navigation: Radix primitive API'leri ve focus ring classlari korunarak build dogrulandi.
- Focus ring gorunurlugu: Mevcut focus ring classlari korunarak transition eklendi.
- Radix portal z-index davranisi: Portal component API'leri degismedi; build dogrulandi.
- `className` override davranisi: `className` merge sirasi korunarak component API degismedi.
- TypeScript build: `pnpm build` ile dogrulandi.
- Library build: `pnpm build:lib` ile dogrulandi.

Komutlar:

```bash
pnpm build:lib
pnpm build
```

Docs tarafinda gerekirse component sayfalarina daha iyi interaktif ornekler eklenebilir. Ancak animasyonlari kullanmak icin consumer'a yeni bir prop ogretilmemelidir.

---

## 9) Faz 6 - Release ve Versiyonlama

Durum: Tamamlandi.

Uygulanan dosyalar:

- `package.json`
- `CHANGELOG.md`
- `app/page.tsx`
- `app/docs/page.tsx`
- `docs/usage-guide.md`
- `docs/motion-roadmap.md`

Not:

- Paket versiyonu `2.1.0` olarak guncellendi.
- Docs uzerindeki gorunur surum referanslari `2.1.0` ile hizalandi.
- `CHANGELOG.md` icine motion sistemi icin release notu eklendi.
- Component API'leri, import path'leri ve consumer JSX kullanimlari degismedi.

Bu calisma API degistirmedigi halde genis bir davranis iyilestirmesi oldugu icin onerilen versiyon:

```txt
2.1.0
```

Release notu taslagi:

```txt
Added a centralized motion system for molecule and overlay components.
Improved Accordion, DropdownMenu, Select, Popover, Tooltip, HoverCard, Dialog,
Modal, Sheet, CommandPalette, DatePicker, Autocomplete, Tabs, Calendar and
related interaction states.

No component API changes are required.
```

---

## 10) Faz 7 - Organisms Motion Genisletmesi

Durum: Tamamlandi.

Uygulanan dosyalar:

- `components/ui/organisms/navbar.tsx`
- `components/ui/organisms/sidebar.tsx`
- `components/ui/organisms/announcement-bar.tsx`
- `components/ui/organisms/data-table.tsx`
- `components/ui/organisms/footer.tsx`
- `docs/motion-roadmap.md`

Not:

- Navbar desktop viewport, mega menu item, popover/panel dropdown ve mobile panel motion'i merkezi duration/easing tokenlariyla hizalandi.
- Navbar mobile dropdown ve drill-down panel gecisleri opacity/transform transitionlariyla yumusatildi.
- Sidebar floating backdrop/panel, collapse width, nested section ve submenu acilis/kapanislari daha kontrollu hale getirildi.
- AnnouncementBar mount, icon/action ve dismiss affordance'i merkezi motion utility'leriyle iyilestirildi.
- DataTable toolbar, column toggle dropdown, sort icon, selected badge, empty state, row state ve pagination icon hareketleri polish aldi.
- Footer link, social, newsletter, CTA, badge ve app link etkilesimleri kisa token tabanli transition'larla hizalandi.
- Public API, prop'lar ve import path'leri degismedi.

Hedef: Molecule katmanindan sonra, kullanicinin sayfa navigasyonu ve layout davranisinda en cok gordugu organism componentlerine motion polish eklemek.

Ilke:

- Public API degismeyecek.
- Organism componentleri yeni prop istemeyecek.
- Mobile/desktop breakpoint davranisi korunacak.
- Motion sadece mevcut state, hover, focus, open/closed ve responsive durumlarina baglanacak.

Componentler:

- `Navbar`
- `NavbarMegaMenu`
- `NavbarDropdown`
- `NavbarPopoverDropdown`
- `NavbarPanelDropdown`
- `NavbarMobileMenu`
- `NavbarMobileDrillMenu`
- `Sidebar`
- `AnnouncementBar`
- `DataTable`
- `Footer`

### Navbar ve Mega Menu

Dosyalar:

- `components/ui/organisms/navbar.tsx`

Plan:

- Desktop dropdown/mega menu acilislarinda:
  - fade + scale
  - top tarafindan kisa slide
  - transform-origin top/trigger hizasina yakin tutulacak
- `NavbarDropdownTrigger` ve benzeri triggerlarda:
  - chevron rotation
  - color/border/background transition
  - focus ring korunacak
- Mega menu item hover state'lerinde:
  - icon/link color transition
  - minimal translate-x veya background fade
- Mobile menu acilisinda:
  - height/opacity veya slide-down animasyonu
  - breakpoint layout shift olusturmayacak sabit wrapper davranisi
- Mobile drill panel gecislerinde:
  - forward/back gecisleri icin horizontal slide
  - panel content fade

Beklenen sonuc:

- Navbar menuleri Radix dropdown ailesiyle ayni motion karakterine yaklasir.
- Mega menu acilislari aniden belirmez.
- Mobile navigasyon daha uygulama gibi hissedilir.

### Sidebar

Dosyalar:

- `components/ui/organisms/sidebar.tsx`

Plan:

- Collapse/expand gecisleri:
  - width transition tokenlara baglanacak
  - label opacity transition ile kaybolacak
  - iconlar layout shift olusturmadan sabit kalacak
- Floating/mini varyantlarda:
  - menu item hover background fade
  - active item indicator transition
  - submenu acilislari icin accordion benzeri height/opacity
- `SidebarTrigger`:
  - icon rotation veya subtle scale
  - active/focus state transition

Beklenen sonuc:

- Sidebar daralma/genisleme sert olmaz.
- Active ve nested navigation durumlari daha okunur olur.

### AnnouncementBar

Dosyalar:

- `components/ui/organisms/announcement-bar.tsx`

Plan:

- Mount/giris:
  - hafif slide-down + fade
- Dismiss/close destekleniyorsa:
  - fade/height collapse
- CTA/link hover:
  - underline/arrow/icon transition
- Variant degisimleri:
  - background/border/text transition

Beklenen sonuc:

- Announcement bar sayfa ustunde daha kontrollu gorunur.
- Kapatma veya variant degisimleri sert olmaz.

### DataTable

Dosyalar:

- `components/ui/organisms/data-table.tsx`

Plan:

- Row hover/focus state transitionlari.
- Sort icon rotation/opacity transitionlari.
- Selected row background transition.
- Empty/loading state girisleri icin fade.
- Pagination veya toolbar varsa buton/icon transitionlari.

Beklenen sonuc:

- Tablo state degisimleri daha rahat takip edilir.
- Veri yogun UI icinde motion islevsel kalir, dikkat dagitmaz.

### Footer

Dosyalar:

- `components/ui/organisms/footer.tsx`

Plan:

- Footer link hover transitionlari.
- Social icon hover scale/color transitionlari.
- Newsletter/input/button state transitionlari.
- FooterBadge gibi version/tag elemanlarinda minimal hover/focus polish.

Beklenen sonuc:

- Footer interaktif alanlari atoms/molecules ile ayni transition diline girer.

Dogrulama:

```bash
pnpm build:lib
pnpm build
```

Ek QA:

- Desktop navbar dropdown/mega menu.
- Mobile navbar menu ve drill panel.
- Sidebar expanded/collapsed/floating/mini senaryolari.
- AnnouncementBar variant ve responsive davranisi.
- DataTable hover/sort/selected states.

---

## 11) Faz 8 - Template ve Page-Level Motion

Durum: Planlandi.

Hedef: Hazir template'lerde ve docs demo sayfalarinda component motion sistemini gosteren, ancak consumer API'sini degistirmeyen sayfa seviyesinde polish saglamak.

Kapsam:

- Auth template
- Dashboard template
- Hero template
- Pricing template
- Card demos
- Molecules demo sayfalari
- Organisms demo sayfalari

Ilke:

- Template'ler pazarlama hero animasyonu gibi agir hareketlere kaymayacak.
- Motion bilgi hiyerarsisini destekleyecek.
- Scroll veya viewport observer dependency eklenmeyecek.
- Yeni dependency yok.
- Static render ve SSR davranisi korunacak.

### Auth Template

Dosyalar:

- `app/docs/templates/auth/page.tsx`

Plan:

- Form section/card girisleri icin stagger hissi veren ama CSS-only basit fade/slide.
- Input focus state'leri zaten atom seviyesinde varsa tekrar edilmez.
- Password visibility icon transition.
- Error/success state orneklerinde Form motion ile uyum.

### Dashboard Template

Dosyalar:

- `app/docs/templates/dashboard/page.tsx`

Plan:

- StatsCard grid item girisleri icin kisa fade/slide.
- Chart bar hover transitionlari tokenlara baglanacak.
- Table/list row hover ve active state polish'i.
- Metric trend iconlarinda color/opacity transition.

### Hero Template

Dosyalar:

- `app/docs/templates/hero/page.tsx`

Plan:

- Hero content ilk paint sonrasi hafif fade/slide.
- CTA button/icon transitionlari.
- Badge/eyebrow hover state polish.
- Layout shift yaratacak transformlardan kacinilacak.

### Pricing Template

Dosyalar:

- `app/docs/templates/pricing/page.tsx`

Plan:

- PricingCard hover transitionlari standardize edilecek.
- Featured plan indicator icin border/background transition.
- CTA hover icon/arrow transition.
- Billing toggle varsa Tabs/Switch motion diliyle uyum.

### Demo Sayfalari

Dosyalar:

- `components/demos/molecules-demo.tsx`
- `components/demos/organisms-demo.tsx`
- `app/demos/*`

Plan:

- Demo kartlarinda mount/fade sadece docs deneyimini iyilestirecek sekilde kullanilacak.
- Componentlerin gercek API ornekleri degismeyecek.
- Kod bloklarina yeni zorunlu class ogretilmeyecek.

Dogrulama:

```bash
pnpm build
```

Ek QA:

- Mobile template sayfalari.
- Desktop template gridleri.
- Reduced motion guard.
- Lighthouse/CLS acisindan layout shift kontrolu.

---

## 12) Faz 9 - Advanced Molecule State Motion

Durum: Planlandi.

Hedef: Ilk motion gecisleri eklenmis molecule componentlerinde daha anlamli state gecisleri saglamak. Bu faz, "var/yok animasyonu"ndan ziyade aktif state, indicator ve panel gecisi uzerine odaklanir.

Componentler:

- `Tabs`
- `Accordion`
- `DropdownMenu`
- `Select`
- `CommandPalette`
- `Autocomplete`
- `Calendar`
- `DatePicker`
- `Pagination`
- `Breadcrumb`
- `Form`

### Tabs Active Indicator

Dosya:

- `components/ui/molecules/tabs.tsx`

Plan:

- Mevcut active trigger transition korunacak.
- Mumkunse API degistirmeden active indicator hissi verilecek:
  - `data-[state=active]` background/border transition
  - pseudo-element veya box-shadow yerine mevcut class tabanli underline/border polish
  - content gecisinde fade + small translate
- Radix Tabs state'i disinda ek React state tutulmayacak.

Beklenen sonuc:

- Active tab degisimi daha net algilanir.
- Layout shift veya trigger width degisimi olmaz.

### Accordion Nested Polish

Plan:

- Trigger hover/focus state'leri daha net hale getirilecek.
- Content icindeki ilk/son elemanlarda padding collapse kaynakli sert his kontrol edilecek.
- Nested accordion senaryolari docs'ta test edilecek.

### Dropdown, Select ve CommandPalette Item State

Plan:

- Highlighted/focused item gecisleri ayni duration/easing ile hizalanacak.
- Checkbox/radio item indicator girisleri scale/fade alacak.
- CommandPalette search result degisimlerinde liste mount/fade uygulanacak.

### Autocomplete ve Form Feedback

Plan:

- Loading, empty, selected tag, remove tag state'leri tek motion diliyle hizalanacak.
- Form validation message giris/cikis hareketi Alert ile tutarli olacak.

### Calendar ve DatePicker Navigation

Plan:

- Month/year view gecisleri icin fade/slide.
- Prev/next navigation icon transitionlari.
- Selected date ve range-like hover state'leri daha okunur hale getirilecek.

Dogrulama:

```bash
pnpm build:lib
pnpm build
```

Ek QA:

- Keyboard navigation.
- Screen reader semantics.
- Reduced motion.
- Radix close/unmount timing.

---

## 13) Faz 10 - Motion QA Matrisi ve Ornek Senaryolar

Durum: Planlandi.

Hedef: Motion sistemi genisledikce component bazli manuel QA'nin kaybolmamasini saglamak.

Kapsam:

- Docs icinde motion QA checklist'i.
- Component bazli test senaryolari.
- Reduced motion kontrol adimlari.
- Mobile/desktop viewport kontrol adimlari.

Plan:

- `docs/motion-roadmap.md` icinde her faz sonunda uygulanan dosyalar ve QA sonucu guncellenecek.
- `docs/usage-guide.md` icine gerekirse "Motion QA" kisa bolumu eklenecek.
- Her implementation fazi sonunda:
  - `pnpm build:lib`
  - `pnpm build`
  - ilgili docs route manuel/dev HTTP kontrolu

Dogrulama hedefleri:

- `/docs/molecules/tabs`
- `/docs/molecules/dropdown-menu`
- `/docs/organisms/navbar`
- `/docs/organisms/sidebar`
- `/docs/organisms/announcement-bar`
- `/docs/templates/auth`
- `/docs/templates/dashboard`
- `/docs/templates/pricing`

---

## 14) Onerilen Uygulama Sirasi

1. `src/preset.css` motion altyapisi
2. `Accordion`
3. `DropdownMenu`
4. `Select`
5. `Popover`, `Tooltip`, `HoverCard`
6. `Dialog`, `Modal`, `Sheet`
7. `CommandPalette`
8. `Autocomplete`, `DatePicker`
9. `Tabs`, `Calendar`, `Pagination`, `Alert`, `Form`
10. Docs QA
11. Build ve release hazirligi
12. `Navbar` ve mega/dropdown menu ailesi
13. `Sidebar`
14. `AnnouncementBar`
15. `DataTable`
16. Template motion polish
17. Advanced molecule state motion
18. Motion QA matrisi

---

## 15) Bilinen Riskler

1. Bazi mevcut animasyon class'lari tanimli olmayabilir.
   - Cozum: Poyraz UI kendi `preset.css` motion utility'lerini saglamali.

2. `preset.css` import etmeyen consumer uygulamalarda animasyonlar calismaz.
   - Cozum: README ve installation docs icinde `preset.css` importunun kritik oldugu net belirtilmeli.

3. Radix portal componentlerinde close animasyonu unmount yuzunden gorunmeyebilir.
   - Cozum: `data-state=closed` davranisi her componentte tek tek test edilmeli.

4. Asiri animasyon minimal/brutalist tasarim dilini bozabilir.
   - Cozum: Motion kisa, net ve islevsel tutulmali. Bounce/spring/overshoot kullanilmamali.

5. Drawer/Vaul gibi kendi motion sistemi olan componentlerde cift transform olusabilir.
   - Cozum: Bu componentlerde daha temkinli, minimal polish uygulanmali.

6. Organism componentlerinde responsive menu ve desktop menu ayni class zincirini paylasabilir.
   - Cozum: Mobile ve desktop state'leri ayri test edilmeli; breakpoint davranisi degistirilmemeli.

7. Sidebar width transitionlari label/icon hizalamasinda layout shift olusturabilir.
   - Cozum: Icon kolonlari sabit tutulmali; label sadece opacity/visibility ile yumusatilmali.

8. Template animasyonlari component API ornekleriyle karistirilabilir.
   - Cozum: Docs kod bloklarinda consumer'a yeni zorunlu animation class'i ogretilmemeli.

---

## 16) Baslangic Paketi

Ilk implementation icin onerilen kapsam:

- `src/preset.css`
- `components/ui/molecules/accordion.tsx`
- `components/ui/molecules/dropdown-menu.tsx`
- `components/ui/molecules/select.tsx`

Bu paket, en gorunur hareket problemlerini cozer ve motion sisteminin dogru calisip calismadigini hizli kanitlar.
