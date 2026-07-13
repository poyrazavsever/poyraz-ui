# Poyraz UI v3 — NPM Package + Source Registry Yeniden Tasarım ve Geçiş Yol Haritası

> Durum: Release hazırlığı
> Mevcut sürüm: `2.1.0`  
> Hedef sürüm: `3.0.0`  
> Hedef tasarım dili: **Poyraz Soft Glass**  
> Hedef dağıtım modeli: **`poyraz-ui@3.0.0` npm runtime package + shadcn uyumlu source registry**

> **Dağıtım kararı güncellemesi — 2026-07-13:** Poyraz UI en başından beri bir npm
> paketidir ve V3 stable release'in birincil ticari/teknik çıktısı
> `poyraz-ui@3.0.0` paketinin npm `latest` etiketiyle yayınlanmasıdır. Source
> registry, npm paketini kaldırmaz; kaynak koda sahip olmak ve shadcn tarzı kurulum
> isteyen consumer'lar için ikinci ve eşit derecede desteklenen dağıtım kanalıdır.
> Registry-only kabulüne dayanan `P0-014`, `P0-015`, `P13-001`, `P13-008`, ADR-0001
> ve ADR-0002 kararları tarihsel kayıt olarak korunur ancak **Faz 14 tarafından
> supersede edilir**.

---

## 1. Belgenin amacı

Bu belge Poyraz UI'ın mevcut npm component library yapısını V3 major sürüme
taşırken, aynı componentlerin kaynak kodunun consumer projeye kopyalanabildiği source
registry kanalını da destekleyen çift dağıtım modelini tanımlar.

Plan yalnızca görsel bir tema değişimini kapsamaz. Aşağıdaki dört alan birlikte ele alınır:

1. Npm package ve source registry dağıtım kanallarının ortak bir public API ve source üzerinde birleştirilmesi.
2. Tasarım tokenlarının yeniden modellenmesi.
3. Component API ve composition standartlarının güçlendirilmesi.
4. Yeni minimal, soft, hafif rounded ve glass yüzeyli tasarım dilinin uygulanması.

Bu değişiklikler dağıtım biçimini, varsayılan görünümü ve bazı public API kararlarını etkilediği için çalışma `v3.0.0` ana sürümü olarak planlanmalıdır.

---

## 2. Yönetici özeti ve temel karar

### 2.1 Onaylanan ana yön

Poyraz UI v3 için onaylanan model:

```text
Radix Primitives
       ↓
Davranış + erişilebilirlik + state attribute'ları
       ↓
Poyraz UI ortak component kaynakları ve tokenları
       ├── npm build → poyraz-ui@3.x → package import kullanan consumer
       └── registry build → @poyraz/* → components/ui/*.tsx sahibi consumer
```

Npm package mevcut consumer import modelini ve hızlı kurulumu korur. Source registry ise
componenti fork etmeden kaynak seviyesinde özelleştirmek isteyen kullanıcıya aittir. İki
kanal farklı implementation taşımamalı; registry payload ve package entry point'leri aynı
canonical component kaynağından üretilmelidir.

Sıfırdan özel bir dosya kopyalama motoru yazmak yerine resmi shadcn registry şeması
kullanılmalıdır. Poyraz UI CLI'ı npm package setup ve registry kurulum yollarını açıkça
ayırabilir; fakat dependency resolution ve dosya kurma davranışını yeniden icat etmemelidir.

### 2.2 Neden çift dağıtım?

- Mevcut npm consumer'lar V3'e standart semver ve package importlarıyla geçebilir.
- Npm paketi merkezi bug fix, type ve dependency güncellemelerini kolaylaştırır.
- Kullanıcı component kaynak kodunu doğrudan kendi `components/ui` dizininde görür.
- Kullanıcı `className`, CVA recipe, CSS variable, markup ve Radix parçalarını değiştirebilir.
- Kullanıcı yalnızca ihtiyaç duyduğu componentleri ve bağımlılıkları kurar.
- Derin özelleştirme isteyen consumer merkezi npm runtime paketine bağlı kalmak zorunda değildir.
- Framework'e özel örnekler ayrı registry item'ları olarak dağıtılabilir.
- Tema, hook, utility, component ve page block aynı dağıtım sistemiyle kurulabilir.
- Registry dependency graph sayesinde `date-picker` kurulurken `button`, `calendar` ve `popover` otomatik çözülebilir.

### 2.3 Önerilen ürün konumlandırması

Poyraz UI v3 şu şekilde tanımlanmalıdır:

> Poyraz UI, Radix tabanlı erişilebilir davranışları soft, modern ve glass destekli
> bir görsel sistemle birleştiren; npm paketi olarak kullanılabilen veya source registry
> üzerinden kaynak koduyla sahiplenilebilen açık bir React component sistemidir.

---

## 3. Mevcut sistemin kısa durum analizi

### 3.1 Mevcut güçlü taraflar

- Radix primitive kullanımı birçok interactive componentte zaten mevcut.
- Componentler `className` kabul ediyor.
- CVA, Button/Card/organism varyantlarında zaten kullanılıyor.
- Semantic `--poyraz-*` CSS variable altyapısı bulunuyor.
- Tailwind CSS v4 `@theme` bridge'i kurulmuş durumda.
- Merkezi CSS motion tokenları ve reduced-motion desteği mevcut.
- Atoms, molecules ve organisms ayrımı kaynak organizasyonunu anlaşılır kılıyor.
- Dokümantasyon sitesi package import yollarını kullanarak gerçek consumer davranışını kısmen doğruluyor.
- ESM, CJS ve TypeScript declaration build'leri çalışıyor.

### 3.2 Geçişte çözülmesi gereken sorunlar

- Yalnızca npm runtime üzerinden tüketim, kaynak seviyesinde özelleştirme isteyen consumer'a ikinci bir kurulum yolu sunmuyor.
- Tüm JS çıktısına build sonrasında `"use client"` ekleniyor; server/client sınırı gereğinden geniş.
- `cn` hem `src/utils.ts` hem `typography.tsx` içinde tanımlı.
- Token değerleri `preset.css`, theme TypeScript dosyası ve docs globals içinde tekrar ediyor.
- Sidebar, Announcement Bar, Mermaid ve bazı Card Template'lerde semantic token yerine sabit palette renkleri bulunuyor.
- Dokümantasyon, public export listesi ve gerçek component sayıları zaman zaman ayrışıyor.
- Registry dependency graph bulunmuyor.
- Unit, accessibility, interaction, registry-install ve visual regression testleri bulunmuyor.
- Atomic Design klasörleri geliştirici organizasyonu için yararlı olsa da consumer'ın aradığı `components/ui` modeliyle birebir örtüşmüyor.
- Büyük organism dosyaları aynı dosyada çok sayıda davranış ve görsel karar taşıyor.

### 3.3 Korunacak unsurlar

- Mevcut kırmızı brand palette.
- Radix tabanlı erişilebilir davranışlar.
- Tailwind CSS v4.
- `cn` için `clsx + tailwind-merge` yaklaşımı.
- CVA tabanlı variant recipe'leri.
- Light/dark theme desteği.
- Compact ama okunabilir UI yaklaşımı.
- Componentlerin parçalı/composable API sunması.
- Motion sisteminin CSS-first ve reduced-motion uyumlu olması.

### 3.4 Değişecek unsurlar

- Varsayılan keskin/brutalist border karakteri soft yüzey hiyerarşisine dönüşecek.
- `rounded-sm` ağırlıklı tek radius kullanımı semantic radius ölçeğine dönüşecek.
- Sürekli `shadow-none` yaklaşımı, düşük yoğunluklu soft shadow ve inner highlight sistemine dönüşecek.
- Component dağıtımı npm package import ve registry install modellerini birlikte destekleyecek.
- Atoms/molecules/organisms package entry point'leri V3 compatibility incelemesinden geçecek; kaldırılan veya taşınan exportlar major migration notunda açıklanacak.
- Tema entegrasyonu tek bir theme provider'a bağlı olmayacak; CSS variable ve class/data-attribute temelli kalacak.

---

## 4. Referans görsellerin tasarım analizi

### 4.1 Ortak görsel dil

İki referansın ortak özellikleri:

- Büyük arka plan yüzeyi üzerinde katmanlı ve yarı saydam paneller.
- Panel kenarlarında ince, düşük kontrastlı ve yer yer ışıklı border.
- Sert elevation yerine blur, transparanlık ve tonal ayrımla kurulan derinlik.
- Orta seviyede radius; ne tamamen keskin ne de aşırı pill form.
- Bir büyük container içinde daha küçük nested card yüzeyleri.
- Kontrol yoğunluğu yüksek olmasına rağmen sakin görsel hiyerarşi.
- Küçük ikonlar, kompakt label'lar ve sınırlı tipografi ölçeği.
- Aktif state'lerde parlak accent; pasif state'lerde nötr ve düşük kontrast.
- Bazı yüzeylerde iç highlight ve hafif dış gölge kombinasyonu.
- UI yüzeyinin arka planla ilişkili görünmesi; tamamen opak beyaz/siyah blok hissinin azaltılması.

### 4.2 Açık tema referansı

- Pastel, düşük doygunluklu ve çok katmanlı arka plan.
- Beyaza yakın yarı saydam container yüzeyleri.
- Açık gri/mavi surface tonları.
- Geniş fakat soft outer border.
- Küçük cardlarda daha yüksek opaklık; ana shell'de daha güçlü transparanlık.
- Shadow çok yaygın ve düşük opacity değerinde.
- Orange/sarı functional accent yalnızca enerji ve sıcaklık state'lerinde kullanılıyor.

### 4.3 Koyu tema referansı

- Fotoğraf veya gradient üzerinde koyu yarı saydam cardlar.
- İnce beyaz/gri edge highlight.
- Surface içinde lokal blur ve koyu tint.
- Aktif cihazlarda yeşil, sıcaklıkta mor/mavi ve medya içinde renkli görseller gibi bağlamsal accentler.
- Componentler koyu arka planda tamamen siyah değil; transparan gri yüzeyler kullanıyor.
- Küçük glow ve ışık lekeleri aktif state'i güçlendiriyor.

### 4.4 Poyraz UI için sentez: “Poyraz Soft Glass”

Yeni tasarım dili iki modda aynı sistemi kullanmalıdır:

```text
Canvas       → sayfa zemini
Surface      → okunabilir, çoğunlukla opak component zemini
Soft         → düşük kontrastlı tonal yüzey
Glass        → transparan, blur destekli özel yüzey
Elevated     → dialog/popover gibi üst katman yüzeyi
Interactive  → hover/press/focus state alan yüzey
```

Glass efekt her componentte varsayılan olmamalıdır. Fazla kullanım okunabilirliği ve performansı düşürür. Önerilen kullanım:

- Navbar, command palette, dialog, popover ve dashboard shell: glass için güçlü aday.
- Card: `default`, `soft` ve `glass` varyantları.
- Button: yalnızca ayrı `glass` varyantı.
- Input: varsayılan olarak soft/solid; glass container içinde uyumlu yarı saydam varyant.
- Table body, uzun metin alanları ve form hata mesajları: daha opak surface.

### 4.5 Tasarım anti-hedefleri

- Eski macOS glass görünümünü birebir taklit etmek.
- Her yüzeye yoğun `backdrop-blur` uygulamak.
- Düşük kontrast uğruna okunabilirliği kaybetmek.
- Glass efektini border ve shadow olmadan kullanıp yüzey sınırını belirsizleştirmek.
- Brand kırmızısını her border ve hover state'inde kullanmak.
- Çok fazla radius seviyesi veya birbirine çok yakın component varyantı üretmek.
- Animasyonu içerikten daha baskın hale getirmek.
- Yalnızca güzel ekran görüntüsü veren, gerçek form/navigation kullanımında zayıf kalan componentler üretmek.

---

## 5. Hedef bilgi mimarisi ve dizin yapısı

### 5.1 Önerilen repository yapısı

```text
poyraz-ui/
├── app/                         # Dokümantasyon ve registry host
│   ├── docs/
│   └── r/ veya public/r/        # Üretilen registry JSON çıktıları
├── registry/
│   ├── poyraz/
│   │   ├── ui/                  # Kurulabilir UI primitive/component kaynakları
│   │   ├── hooks/               # use-media-query, use-controllable-state vb.
│   │   ├── lib/                 # cn ve ortak yardımcılar
│   │   ├── styles/              # theme/base/motion CSS item'ları
│   │   ├── blocks/              # Navbar, dashboard, auth, pricing vb.
│   │   └── examples/            # Docs preview kaynakları
│   └── registry.json            # Alt registry item listesi
├── registry.json                # Root registry metadata/include
├── public/r/                    # shadcn build çıktısı; elle düzenlenmez
├── bin/cli.mjs                  # İnce Poyraz setup yardımcısı
├── components/                  # Docs sitesinin kendi componentleri
├── docs/
│   ├── v3-registry-redesign-roadmap.md
│   └── migration-v2-to-v3.md
└── package.json
```

### 5.2 Registry item türleri

| İçerik                    | Registry türü                             | Örnek                 |
| ------------------------- | ----------------------------------------- | --------------------- |
| Temel UI component        | `registry:ui`                             | button, input, dialog |
| Ortak utility             | `registry:lib`                            | utils/cn              |
| Hook                      | `registry:hook`                           | use-media-query       |
| Tema/token kurulumu       | `registry:style` veya uygun registry item | poyraz-theme          |
| Birleşik ürün parçası     | `registry:block`                          | dashboard-shell       |
| Tekil uygulama componenti | `registry:component`                      | theme-toggle          |

### 5.3 Consumer tarafında hedef sonuç

```text
consumer-app/
├── components.json
├── app/globals.css
├── lib/utils.ts
└── components/ui/
    ├── button.tsx
    ├── card.tsx
    ├── dialog.tsx
    └── ...
```

Örnek kurulum deneyimi:

```bash
# Namespace tanımlandıktan sonra
pnpm dlx shadcn@latest add @poyraz/button

# Bir block ve transitif bağımlılıkları
pnpm dlx shadcn@latest add @poyraz/dashboard-shell
```

GitHub registry akışı da desteklenebilir:

```bash
pnpm dlx shadcn@latest add poyrazavsever/poyraz-ui/button
```

---

## 6. Component özelleştirme sözleşmesi

Her v3 component aşağıdaki kurallara uymalıdır.

### 6.1 Zorunlu API kuralları

- Root ve anlamlı alt parçalarda `data-slot` bulunmalı.
- Variant/size bilgisi gerekiyorsa `data-variant` ve `data-size` root elemente yazılmalı.
- Native element props mümkün olduğunca korunmalı.
- `className` her zaman consumer override'ına izin verecek sırada merge edilmeli.
- CVA recipe export edilmeli: örneğin `buttonVariants`.
- Polymorphism anlamlıysa Radix `Slot` üzerinden `asChild` desteklenmeli.
- Controlled/uncontrolled davranış Radix primitive tarafından destekleniyorsa wrapper bunu engellememeli.
- `ref` doğru DOM/Radix elementine aktarılmalı.
- UI metinleri mümkün olduğunca hard-code edilmemeli.
- Icon yerleşimi yalnızca belirli icon componentine bağımlı olmamalı.
- Disabled, loading, invalid, selected, open ve active state'leri DOM attribute'ları üzerinden izlenebilir olmalı.
- Görsel component kodu business logic içermemeli.
- Consumer'ın değiştiremeyeceği gizli global state oluşturulmamalı.
- Component-specific sabit hex veya Tailwind palette rengi kullanılmamalı.

### 6.2 Styling escape hatch sırası

Consumer aşağıdaki katmanların her birinden özelleştirme yapabilmelidir:

1. Component prop'ları: `variant`, `size`, `side`, `align`.
2. `className` override.
3. Export edilen CVA recipe.
4. `data-slot` hedefleyen CSS.
5. Local scope üzerinde semantic CSS variable override.
6. Component kaynak kodunu doğrudan değiştirme.

### 6.3 Component anatomy standardı

Compound componentlerde aşağıdaki yaklaşım kullanılmalıdır:

```tsx
<Dialog>
  <DialogTrigger asChild>...</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle />
      <DialogDescription />
    </DialogHeader>
    <DialogFooter />
  </DialogContent>
</Dialog>
```

Kurallar:

- Her parça ayrı export edilmeli.
- Parçalar anlamlı `data-slot` değerleri taşımalı.
- Root context yalnızca davranış için gerekli state'i içermeli.
- Layout kararı consumer tarafından değiştirilebilir olmalı.
- Header/Footer gibi convenience parçalar primitive davranışı gizlememeli.

---

## 7. Yeni token mimarisi

### 7.1 Token katmanları

Tokenlar dört seviyeye ayrılmalıdır:

```text
Primitive palette
       ↓
Semantic color token
       ↓
Component role token
       ↓
Component variant / local override
```

### 7.2 Primitive brand palette

Mevcut kırmızı brand korunmalı ve eksiksiz bir ölçek olarak tanımlanmalıdır.

Önerilen isimlendirme:

```css
--brand-50: ...;
--brand-100: ...;
--brand-200: #fecaca;
--brand-300: ...;
--brand-400: ...;
--brand-500: #ef4444;
--brand-600: #dc2626;
--brand-700: #b91c1c;
--brand-800: #991b1b;
--brand-900: #7f1d1d;
--brand-950: #450a0a;
```

Not: Eksik ara değerler görsel olarak seçilip contrast testinden geçirilmeden rastgele sabitlenmemelidir.

### 7.3 Semantic renk tokenları

Minimum semantic set:

```css
--background;
--foreground;
--surface;
--surface-foreground;
--surface-raised;
--surface-raised-foreground;
--card;
--card-foreground;
--popover;
--popover-foreground;
--primary;
--primary-foreground;
--primary-hover;
--primary-active;
--secondary;
--secondary-foreground;
--muted;
--muted-foreground;
--accent;
--accent-foreground;
--destructive;
--destructive-foreground;
--success;
--success-foreground;
--warning;
--warning-foreground;
--info;
--info-foreground;
--border;
--border-strong;
--input;
--ring;
--selection;
```

### 7.4 Glass tokenları

```css
--glass-background;
--glass-background-strong;
--glass-foreground;
--glass-border;
--glass-border-highlight;
--glass-shadow;
--glass-shadow-elevated;
--glass-blur;
--glass-saturation;
```

Glass recipe tek bir utility veya component recipe üzerinden uygulanmalıdır:

```css
background: var(--glass-background);
border-color: var(--glass-border);
box-shadow:
  inset 0 1px 0 var(--glass-border-highlight),
  var(--glass-shadow);
backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
```

Fallback zorunluluğu:

- `backdrop-filter` desteklenmediğinde yüzey okunabilir opaklığa çıkmalı.
- `@supports` kullanılarak glass ve fallback ayrılmalı.
- Text contrast yalnızca arka plan blur'una güvenmemeli.

### 7.5 Radius tokenları

```css
--radius-xs: 0.25rem;
--radius-sm: 0.375rem;
--radius-md: 0.5rem;
--radius-lg: 0.75rem;
--radius-xl: 1rem;
--radius-2xl: 1.25rem;
--radius-full: 9999px;
```

Önerilen kullanım:

- Button/Input: `md` veya `lg`.
- Card: `lg` veya `xl`.
- Dialog/Sheet floating panel: `xl`.
- Badge/segmented controls: `full` yalnızca anlamlı olduğunda.
- Nested yüzey: parent radius'tan bir kademe küçük.

### 7.6 Shadow tokenları

```css
--shadow-xs;
--shadow-sm;
--shadow-md;
--shadow-lg;
--shadow-inner-highlight;
--shadow-focus;
```

Shadow kararları:

- Default componentlerde `xs/sm`.
- Popover/Dialog gibi floating katmanda `md/lg`.
- Dark theme'de sadece siyah dış gölge değil, ince açık inner edge kullanılmalı.
- Hover sırasında shadow seviyesi en fazla bir kademe artmalı.

### 7.7 Motion tokenları

Mevcut tokenlar genişletilmelidir:

```css
--duration-instant: 80ms;
--duration-fast: 120ms;
--duration-normal: 180ms;
--duration-slow: 260ms;
--duration-emphasis: 360ms;

--ease-standard;
--ease-in;
--ease-out;
--ease-spring;
```

Motion kategorileri:

- Micro interaction: hover, press, icon shift.
- Disclosure: accordion, collapsible.
- Floating: tooltip, popover, dropdown.
- Overlay: dialog, sheet, command palette.
- Feedback: toast, loading, success/error.
- Layout: tab indicator veya expandable navigation.

---

## 8. Faz bazlı uygulama planı

## Faz 0 — Proje kararı, scope ve baseline

### Amaç

Mevcut v2 davranışını ölçülebilir bir baseline olarak sabitlemek ve v3 kararlarını yazılı hale getirmek.

### Atomik görevler

- [x] `P0-001` V2 public export listesini script ile çıkar.
- [x] `P0-002` Her export'u atom, molecule, organism, hook, utility veya theme olarak sınıflandır.
- [x] `P0-003` Her componentin zorunlu ve opsiyonel dependency listesini çıkar.
- [x] `P0-004` Her componentte `"use client"` gerekip gerekmediğini belirle.
- [x] `P0-005` Sabit Tailwind palette rengi ve hex kullanan tüm satırları raporla.
- [x] `P0-006` Tüm `--poyraz-*` tokenlarını ve tekrarlandıkları dosyaları listele.
- [x] `P0-007` CVA kullanılan ve kullanılmayan componentleri sınıflandır.
- [x] `P0-008` `className`, `asChild`, `ref`, controlled state ve loading desteğini component bazında matrise dök.
- [x] `P0-009` V2 docs sayfalarının light/dark desktop ekran görüntülerini baseline olarak kaydet.
- [x] `P0-010` V2 docs sayfalarının mobile viewport baseline'ını kaydet.
- [x] `P0-011` `pnpm build:lib` çıktısını ve entry point boyutlarını kaydet.
- [x] `P0-012` `pnpm build` çıktısını baseline CI artifact olarak sakla.
- [x] `P0-013` Mevcut accessibility eksiklerini otomatik ve manuel olarak raporla.
- [x] `P0-014` “Registry-first” kararını ADR olarak yaz.
- [x] `P0-015` “npm runtime component package” için v3 sonrası destek politikasını ADR olarak yaz.
- [x] `P0-016` Desteklenecek React, Tailwind ve framework matrisini belirle.
- [x] `P0-017` Browser destek matrisini ve glass fallback politikasını belirle.
- [x] `P0-018` V3 anti-goal listesini ekip onayına sun.

### Çıkış kriteri

- V2 public API ve görsel baseline arşivlenmiş olmalı.
- Dağıtım kararı ADR ile kaydedilmiş olmalı; bu tarihsel registry-first karar Faz 14'te çift dağıtım modeliyle supersede edilmiştir.
- V3 kapsamına girmeyen işler açıkça listelenmiş olmalı.
- Destek matrisi belirsiz kalmamalı.

---

## Faz 1 — Registry altyapısı ve dağıtım prototipi

### Amaç

Tek bir pilot componenti temiz bir consumer projeye source olarak kurabilen uçtan uca registry hattını oluşturmak.

### Atomik görevler

- [x] `P1-001` Root `registry.json` oluştur.
- [x] `P1-002` Root metadata içinde schema, name ve homepage alanlarını tanımla.
- [x] `P1-003` Büyük registry için `include` tabanlı parçalı yapı seçimini uygula.
- [x] `P1-004` `registry/poyraz/registry.json` oluştur.
- [x] `P1-005` `registry/poyraz/ui` dizinini oluştur.
- [x] `P1-006` `registry/poyraz/lib` dizinini oluştur.
- [x] `P1-007` `registry/poyraz/hooks` dizinini oluştur.
- [x] `P1-008` `registry/poyraz/styles` dizinini oluştur.
- [x] `P1-009` `registry/poyraz/blocks` dizinini oluştur.
- [x] `P1-010` `cn` utility'sini tek kaynak haline getir ve registry item olarak tanımla.
- [x] `P1-011` İlk `poyraz-theme` registry item'ını tanımla.
- [x] `P1-012` Pilot `button` registry item'ını placeholder içerikle tanımla.
- [x] `P1-013` Button item'ına `registryDependencies` üzerinden utils/theme ilişkisini ekle.
- [x] `P1-014` Harici package dependency'lerini registry metadata içinde tanımla.
- [x] `P1-015` `shadcn build` scriptini package scripts içine ekle.
- [x] `P1-016` Registry çıktısını `public/r` altına üret.
- [x] `P1-017` Üretilen JSON dosyalarını schema ile doğrula.
- [x] `P1-018` Aynı registry item adının tekrar edilmesini CI'da engelle.
- [x] `P1-019` Registry item içindeki her kaynak dosyanın varlığını doğrulayan script yaz.
- [x] `P1-020` Dependency graph'ta cycle tespiti ekle.
- [x] `P1-021` Local URL üzerinden temiz Next.js fixture'a Button kur.
- [x] `P1-022` Local URL üzerinden temiz Vite fixture'a Button kur.
- [x] `P1-023` Kurulum sonucunda dosyanın atom taxonomy tarafından belirlenen `components/ui/atoms/button.tsx` altına geldiğini doğrula.
- [x] `P1-024` Kurulum sonucunda dependency'lerin package manifestine doğru eklendiğini doğrula.
- [x] `P1-025` `--dry-run`, `--diff` ve overwrite davranışlarını manuel test et.
- [x] `P1-026` Namespace örneğini `components.json` dokümantasyonuna ekle.
- [x] `P1-027` GitHub repository item address ile kurulum akışını test et.
- [x] `P1-028` Registry build çıktısının elle düzenlenmemesi kuralını CONTRIBUTING'e ekle.

> **13 Temmuz 2026 kapanış notu:** Registry source/build/schema/file/graph hattına
> ek olarak gerçek shadcn CLI ile yerel HTTP registry üzerinden temiz Next.js ve
> Vite kurulumları; dry-run, diff ve overwrite akışları; dependency manifesti ve
> canonical `components/ui/atoms/button.tsx` hedefi doğrulandı. GitHub raw item
> adresinden gerçek kurulum da geçti. Kanıt ve tekrar komutu Faz 15 release
> readiness kaydında tutulur.

### CLI kararı

`bin/cli.mjs` için önerilen sorumluluk:

- Proje ve package manager tespiti.
- `components.json` varlığını kontrol etme.
- Poyraz namespace veya registry URL'si ekleme konusunda yönlendirme.
- Theme registry item'ını kurma.
- Kullanıcıya seçili başlangıç componentlerini kurdurma.
- Kurulum sonunda doğrulama yapma.

CLI'ın üstlenmemesi gereken sorumluluk:

- Kendi registry schema'sını tasarlamak.
- Dependency graph çözümünü baştan yazmak.
- Shadcn CLI'ın undocumented internal command API'sine bağlanmak.
- Consumer dosyasını onaysız overwrite etmek.

### Çıkış kriteri

- Temiz bir projede tek komutla Button kaynak dosyası kurulabilmeli.
- Dependency ve alias çözümü doğru çalışmalı.
- Registry schema doğrulaması CI'da geçmeli.
- Registry kurulum yolu npm runtime component importuna ihtiyaç duymamalı; npm package kurulum yolu ayrıca Faz 16'da doğrulanmalı.

---

## Faz 2 — Tasarım tokenları ve Poyraz Soft Glass foundation

### Amaç

Yeni görsel dilin tüm componentlerden önce ortak ve test edilebilir bir temel olarak kurulması.

### Atomik görevler

- [x] `P2-001` Brand red primitive palette'i eksiksiz tanımla.
- [x] `P2-002` Neutral light palette'i tanımla.
- [x] `P2-003` Neutral dark palette'i tanımla.
- [x] `P2-004` Status palette'lerini brand palette'ten ayır.
- [x] `P2-005` Light semantic token map'i oluştur.
- [x] `P2-006` Dark semantic token map'i oluştur.
- [x] `P2-007` Surface ve elevated surface rollerini tanımla.
- [x] `P2-008` Glass light tokenlarını tanımla.
- [x] `P2-009` Glass dark tokenlarını tanımla.
- [x] `P2-010` Radius scale'i tanımla.
- [x] `P2-011` Shadow scale'i tanımla.
- [x] `P2-012` Blur ve saturation tokenlarını tanımla.
- [x] `P2-013` Spacing/density kararlarını belgeye bağla.
- [x] `P2-014` Typography scale ve line-height'ları tanımla.
- [x] `P2-015` Motion duration/easing setini normalize et.
- [x] `P2-016` Z-index katmanlarını isimlendir: base, sticky, dropdown, overlay, modal, toast.
- [x] `P2-017` Focus ring recipe'sini tek standarda bağla.
- [x] `P2-018` Selection, disabled ve invalid state tokenlarını tanımla.
- [x] `P2-019` Tailwind v4 `@theme` mapping'ini yeni semantic tokenlara bağla.
- [x] `P2-020` Base CSS reset'in sınırlarını belirle; consumer elementlerini gereksiz biçimde değiştirme.
- [x] `P2-021` `.poyraz-glass` veya eşdeğer recipe'yi oluştur.
- [x] `P2-022` `@supports(backdrop-filter)` fallback'ini ekle.
- [x] `P2-023` `prefers-reduced-transparency` için mümkün olan progressive enhancement politikasını değerlendir.
- [x] `P2-024` `prefers-reduced-motion` override'ını yeni motion tokenlarıyla doğrula.
- [x] `P2-025` Light/dark token kontrast testlerini çalıştır.
- [x] `P2-026` Tokenların tek bir kaynak dosyadan üretilip üretilemeyeceğini kararlaştır.
- [x] `P2-027` CSS ve TypeScript theme tekrarını kaldır.
- [x] `P2-028` Docs için token gallery sayfası hazırla.
- [x] `P2-029` Glass yüzey performansını düşük güçlü cihaz senaryosunda kontrol et.
- [x] `P2-030` Nested glass yüzeyler için maksimum blur katmanı kuralı belirle.

### Görsel kabul kriterleri

- Brand kırmızısı primary CTA ve focus/selection rolünde tanınabilir kalmalı.
- Default yüzeyler glass olmadan da modern ve soft görünmeli.
- Light theme'de yüzey sınırları kaybolmamalı.
- Dark theme'de cardlar tamamen siyah bloklara dönüşmemeli.
- Glass fallback'te text contrast bozulmamalı.
- Bir ekranda üst üste çalışan blur katmanı kontrollü olmalı.

---

## Faz 3 — Component API standardı ve developer contract

### Amaç

Componentler tek tek taşınmadan önce ortak kodlama ve customization sözleşmesini sabitlemek.

### Atomik görevler

- [x] `P3-001` Component template dosyası oluştur.
- [x] `P3-002` `data-slot` isimlendirme standardını yaz.
- [x] `P3-003` `data-variant` ve `data-size` kullanım standardını yaz.
- [x] `P3-004` `className` merge sırasını standartlaştır.
- [x] `P3-005` CVA recipe export standardını yaz.
- [x] `P3-006` Variant adlandırma sözlüğünü sabitle.
- [x] `P3-007` Size adlandırma sözlüğünü sabitle.
- [x] `P3-008` `asChild` kullanım kriterlerini belirle.
- [x] `P3-009` Ref forwarding yaklaşımını desteklenen React sürümleriyle doğrula.
- [x] `P3-010` Controlled/uncontrolled component checklist'i oluştur.
- [x] `P3-011` Loading state davranış standardını yaz.
- [x] `P3-012` Invalid/error state davranış standardını yaz.
- [x] `P3-013` Icon-only control accessibility standardını yaz.
- [x] `P3-014` Focus-visible standardını yaz.
- [x] `P3-015` Portal container override standardını değerlendir.
- [x] `P3-016` Overlay scroll locking politikasını belirle.
- [x] `P3-017` Direction/RTL uyumluluğu için class ve icon kontrollerini tanımla.
- [x] `P3-018` Client component sınırını component bazında belgeye ekle.
- [x] `P3-019` Her component için README metadata şablonu oluştur.
- [x] `P3-020` Registry dependency metadata checklist'i oluştur.
- [x] `P3-021` Component review pull request template'i oluştur.

### Çıkış kriteri

- Yeni component yazan iki farklı geliştirici aynı anatomy ve variant düzenini üretebilmeli.
- Component review checklist'i repository içinde bulunmalı.
- Button pilotuna başlanmadan variant ve state adları sabitlenmiş olmalı.

---

## Faz 4 — Button pilotu

### Amaç

Yeni mimari, tasarım, motion ve registry yaklaşımını tek bir yüksek görünürlüklü componentte uçtan uca doğrulamak.

### 4.1 Önerilen Button varyantları

| Variant       | Kullanım                                              |
| ------------- | ----------------------------------------------------- |
| `default`     | Brand kırmızı primary CTA                             |
| `secondary`   | Nötr, soft ve daha düşük öncelikli action             |
| `soft`        | Brand tint yüzeyli sakin action                       |
| `outline`     | Şeffaf zemin, belirgin ama soft border                |
| `glass`       | Glass container veya görsel arka plan üzerinde action |
| `ghost`       | Toolbar ve düşük öncelikli action                     |
| `destructive` | Riskli action                                         |
| `link`        | Metin içi navigation/action                           |

Önerilen boyutlar:

- `xs`
- `sm`
- `default`
- `lg`
- `icon-sm`
- `icon`
- `icon-lg`

Radius seçenekleri size'dan bağımsızdır: `none`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `full`. Varsayılan `md`; pill/circle görünümü yalnız `full` açıkça seçildiğinde oluşur.

### Atomik görevler

- [x] `P4-001` Button anatomy ve prop sözleşmesini yaz.
- [x] `P4-002` `buttonVariants` CVA recipe'sini oluştur.
- [x] `P4-003` `default` varyantını uygula.
- [x] `P4-004` `secondary` varyantını uygula.
- [x] `P4-005` `soft` varyantını uygula.
- [x] `P4-006` `outline` varyantını uygula.
- [x] `P4-007` `glass` varyantını uygula.
- [x] `P4-008` `ghost` varyantını uygula.
- [x] `P4-009` `destructive` varyantını uygula.
- [x] `P4-010` `link` varyantını uygula.
- [x] `P4-011` Tüm size recipe'lerini uygula.
- [x] `P4-012` `asChild` davranışını uygula.
- [x] `P4-013` Native button props ve ref davranışını doğrula.
- [x] `P4-014` Loading state ve spinner anatomy'sini uygula.
- [x] `P4-015` Loading sırasında width shift politikasını belirle.
- [x] `P4-016` Left/right icon spacing için child selector veya `data-icon` standardını uygula.
- [x] `P4-017` Icon-only button için accessible-name testini ekle.
- [x] `P4-018` Hover state motion'ını ekle.
- [x] `P4-019` Press state motion'ını ekle.
- [x] `P4-020` Focus-visible state'ini ekle.
- [x] `P4-021` Disabled state contrast ve pointer davranışını doğrula.
- [x] `P4-022` Reduced-motion altında scale/translation'ı kapat.
- [x] `P4-023` Glass varyantını açık düz zeminde test et.
- [x] `P4-024` Glass varyantını koyu fotoğraf/gradient üzerinde test et.
- [x] `P4-025` Tüm varyantları light/dark theme'de görsel teste al.
- [x] `P4-026` Button registry item dependency'lerini doğrula.
- [x] `P4-027` Temiz fixture'a Button kurulum testi ekle.
- [x] `P4-028` Button dokümantasyonunu variants/sizes/states/asChild/loading bölümleriyle yenile.
- [x] `P4-029` V2→V3 Button variant mapping tablosu yaz.
- [x] `P4-030` Button pilotu için tasarım onayı al.

### Faz 4 doğrulama kaydı — 2026-07-11

- `pnpm test:button`: 8 variant, 7 size, 8 radius, 4 effect ve icon-only accessible-name sözleşmesi geçti.
- Temiz geçici fixture, üretilmiş `public/r/button.json` ve `poyraz-utils.json` dosyalarından kuruldu; consumer usage typecheck'i geçti.
- `pnpm registry:build` ve `pnpm registry:check` geçti; Button item kod, dependency ve effect CSS metadata'sını birlikte yayımlıyor.
- `pnpm theme:check`, `pnpm typecheck`, `pnpm build:lib` ve production `pnpm build` geçti.
- Light/dark production baseline'ları `docs/v3/baselines/v3-button-light.png` ve `docs/v3/baselines/v3-button-dark.png` altında kaydedildi. Açık ve koyu gradient glass senaryoları aynı matriste doğrulandı.
- Mevcut Button light/dark/glass baseline'ları V3 stable için kabul edildi; API'yi değiştirmeyen salt görsel polish işleri Faz 18'e taşındı.

### Button çıkış kapısı

Button aşağıdaki koşullar sağlanmadan diğer componentlere tasarım referansı yapılmamalıdır:

- Registry üzerinden kuruluyor.
- Consumer `className` ile style override edebiliyor.
- Recipe export ediliyor.
- Light/dark/glass fallback geçiyor.
- Keyboard ve screen reader kontrolleri geçiyor.
- Visual regression baseline'ı mevcut.
- Reduced-motion davranışı doğrulanmış.

---

## Faz 5 — Atom ve temel form componentleri

### Amaç

Molecule ve blockların üzerine kurulacağı kararlı temel component setini tamamlamak.

### 5.1 Geçiş sırası

1. `Label`, `Separator`, `Skeleton`.
2. `Input`, `Textarea`.
3. `Checkbox`, `RadioGroup`, `Switch`.
4. `Badge`, `Avatar`.
5. `Card` ve Card anatomy.
6. `Typography`.
7. `ScrollArea`.
8. `Form Fields` convenience componentleri.
9. `Logo` ve background pattern yardımcıları.

### Ortak atomik görevler — her component için tekrarlanır

- [x] `P5-C01` V2 props/export sözleşmesini kaydet.
- [x] `P5-C02` V3 anatomy'yi belirle.
- [x] `P5-C03` Registry item kaydını oluştur.
- [x] `P5-C04` Registry dependency listesini ekle.
- [x] `P5-C05` Sabit palette renklerini semantic tokenlara çevir.
- [x] `P5-C06` Radius ve shadow kullanımını yeni tokenlara bağla.
- [x] `P5-C07` Root ve alt parçalara `data-slot` ekle.
- [x] `P5-C08` Varyant gerekiyorsa CVA recipe oluştur ve export et.
- [x] `P5-C09` Native props/ref davranışını doğrula.
- [x] `P5-C10` Hover/focus/active/disabled/invalid state'lerini uygula.
- [x] `P5-C11` Light/dark görsel test ekle.
- [x] `P5-C12` Keyboard/accessibility testi ekle.
- [x] `P5-C13` Registry clean-install testi ekle.
- [x] `P5-C14` Docs sayfasını güncelle.
- [x] `P5-C15` V2 migration notunu yaz.

### Component-specific kararlar

#### Input ve Textarea

- [x] `P5-INPUT-01` `default`, `soft` ve gerekirse `glass` varyantlarını karşılaştır.
- [x] `P5-INPUT-02` Prefix/suffix icon için ayrı `InputGroup` item'ı tasarla.
- [x] `P5-INPUT-03` `aria-invalid` ve `data-invalid` styling'i standardize et.
- [x] `P5-INPUT-04` Placeholder kontrastını light/dark theme'de doğrula.
- [x] `P5-INPUT-05` Autofill background davranışını browser bazında test et.

#### Checkbox, RadioGroup ve Switch

- [x] `P5-SELECT-01` Radix `data-state` attribute'larını doğrudan styling kaynağı yap.
- [x] `P5-SELECT-02` Checked indicator giriş/çıkış motion'ını ekle.
- [x] `P5-SELECT-03` Disabled checked state kontrastını doğrula.
- [x] `P5-SELECT-04` Touch target ile görsel boyutu birbirinden ayır.
- [x] `P5-SELECT-05` High-contrast mode davranışını kontrol et.

#### Card

Önerilen varyantlar:

- `default`
- `soft`
- `outline`
- `glass`
- `elevated`
- `interactive`

Card görevleri:

- [x] `P5-CARD-01` Eski brutalist offset `elevated` görünümünün migration politikasını belirle.
- [x] `P5-CARD-02` Yeni `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` anatomy'sini koru.
- [x] `P5-CARD-03` `CardAction` convenience slot'unu değerlendir.
- [x] `P5-CARD-04` Nested card radius kuralını uygula.
- [x] `P5-CARD-05` Interactive varyantta keyboard semantics için gerçek interactive child gereksinimini belge.
- [x] `P5-CARD-06` Glass Card'ın image background ve plain canvas testlerini ekle.

#### Typography

- [x] `P5-TYPE-01` `cn` fonksiyonunu Typography dosyasından çıkar.
- [x] `P5-TYPE-02` Heading limitlerini yeni docs görsel diliyle doğrula.
- [x] `P5-TYPE-03` Decorative fontu default UI componentlerinden ayır.
- [x] `P5-TYPE-04` Typography componentinin gerekli olup olmadığını; yoksa semantic class recipe yaklaşımını değerlendir.

### Faz 5 genişletilmiş tasarım kapsamı

- [x] `P5-EXT-01` Form field addon ve gerçek input odağını tek, özelleştirilebilir `focus-within` yüzeyinde birleştir.
- [x] `P5-EXT-02` Primary ve secondary font ailelerini token üzerinden özelleştirilebilir yap; kontrol componentlerinde decorative font kullanımını engelle.
- [x] `P5-EXT-03` Hand-drawn underline, font contrast, shiny gradient, marker ve outlined text effect recipe'lerini ekle.
- [x] `P5-EXT-04` Logo için isteğe bağlı shine ve sürekli shine effect'lerini, radius varyantlarını ve reduced-motion davranışını ekle.
- [x] `P5-EXT-05` Basic, Image, Horizontal, Profile, Statistic, Pricing, Feature, Glass, Interactive ve Expandable Card kompozisyonlarını yayımla.
- [x] `P5-EXT-06` Tüm yeni effect ve kompozisyonları registry item metadata'sı ve docs örnekleriyle dağıt.

### Faz 5 doğrulama kaydı — 2026-07-11

- `pnpm test:phase5`: anatomy, semantic renk, form focus, typography/text effect, logo shine, Card varyant/kompozisyon ve registry katalog sözleşmeleri geçti.
- Temiz geçici consumer fixture, üretilmiş Phase 5 registry item'larını kurdu ve TypeScript doğrulamasından geçti.
- `pnpm registry:build` ve `pnpm registry:check` geçti; 19 Phase 5 UI item'ı bağımsız dosya hedefleri ve döngüsüz internal dependency grafiğiyle üretildi.
- `pnpm theme:check` geçti; light/dark placeholder kontrastları otomatik doğrulandı ve WebKit autofill için semantic surface/foreground politikası eklendi.
- `pnpm typecheck` ve production `pnpm build` geçti.
- Input, Typography, Logo ve Card sayfalarının light/dark production baseline'ları `docs/v3/baselines/v3-phase5-*.png` altında kaydedildi.
- Input ve Textarea autofill semantic foreground/surface fallback'i Chromium, Firefox ve WebKit/Safari motor ailesinde browser testiyle doğrulandı; gerçek Safari cihaz kontrolü RC görsel smoke adımında tekrar edilecek.

### Çıkış kriteri

- Tüm temel componentler registry üzerinden bağımsız kurulabilmeli.
- Hiçbir atom doğrudan `poyraz-ui` runtime importuna bağımlı olmamalı.
- Sabit status/brand rengi kalmamalı.
- Form state'leri erişilebilir ve görsel olarak tutarlı olmalı.

---

## Faz 6 — Floating, selection ve overlay molecule ailesi

### Amaç

Radix state attribute'larıyla çalışan interactive componentlerde ortak yüzey ve motion dilini oluşturmak.

### 6.1 Floating family

Kapsam:

- Tooltip
- Popover
- HoverCard
- DropdownMenu
- Select
- Autocomplete dropdown
- DatePicker popover

Ortak görevler:

- [x] `P6-F01` Floating surface recipe oluştur.
- [x] `P6-F02` Solid/soft/glass surface varyant stratejisini belirle.
- [x] `P6-F03` Radix transform-origin variable'larını animation origin olarak kullan.
- [x] `P6-F04` Side-aware slide mesafesini tokenlaştır.
- [x] `P6-F05` Open/closed fade ve scale değerlerini standardize et.
- [x] `P6-F06` Collision/viewport padding davranışını test et.
- [x] `P6-F07` Portal içindeki theme token inheritance davranışını doğrula.
- [x] `P6-F08` Item focus/selected/disabled state'lerini standardize et.
- [x] `P6-F09` Nested submenu motion ve z-index davranışını test et.
- [x] `P6-F10` Touch ve pointer etkileşim farklarını test et.

### 6.2 Overlay family

Kapsam:

- Dialog
- Modal
- Sheet
- Drawer
- CommandPalette

Ortak görevler:

- [x] `P6-O01` Overlay background ve blur recipe oluştur.
- [x] `P6-O02` Overlay opacity'sini light/dark için ayrı tokenlaştır.
- [x] `P6-O03` Dialog content surface varyantını tanımla.
- [x] `P6-O04` Center dialog scale/fade motion'ını standardize et.
- [x] `P6-O05` Sheet side-aware slide motion'ını standardize et.
- [x] `P6-O06` Vaul Drawer'ın kendi gesture motion'ıyla CSS motion çakışmasını engelle.
- [x] `P6-O07` Initial focus ve return focus testlerini ekle.
- [x] `P6-O08` Escape ile kapatma testini ekle.
- [x] `P6-O09` Outside interaction politikasını component bazında belge.
- [x] `P6-O10` Body scroll lock ve scrollbar shift davranışını test et.
- [x] `P6-O11` Nested overlay senaryosunu test et.
- [x] `P6-O12` Reduced-motion altında enter/exit'i yalnızca kısa fade'e indir.
- [x] `P6-O13` Mobile fullscreen ve desktop floating layout farkını tanımla.

### 6.3 Disclosure/navigation family

Kapsam:

- Accordion
- Tabs
- Breadcrumb
- Pagination

Görevler:

- [x] `P6-D01` Accordion height animation'ını Radix content height variable'ına bağla.
- [x] `P6-D02` Accordion trigger icon rotation standardını uygula.
- [x] `P6-D03` Tabs için soft/glass list yüzeyi tasarla.
- [x] `P6-D04` Tabs active indicator motion'ını layout shift yaratmadan uygula.
- [x] `P6-D05` Breadcrumb separator ve collapsed state semantics'ini doğrula.
- [x] `P6-D06` Pagination icon-only item accessible name'lerini doğrula.
- [x] `P6-D07` Mobile overflow davranışını tüm family için test et.

### Registry dependency örnekleri

```text
date-picker
├── button
├── calendar
└── popover

command-palette
├── dialog
├── input
└── scroll-area

form
├── label
└── slot
```

### Çıkış kriteri

- Floating componentler aynı surface ve motion karakterini taşımalı.
- Overlay family focus management testlerinden geçmeli.
- Registry dependency graph eksiksiz olmalı.
- Her component tek başına kurulup build edilebilmeli.

---

## Faz 7 — Feedback, data ve composite componentler

### Kapsam

- Alert
- Sonner/Toast
- Form
- Calendar
- DatePicker
- Autocomplete
- DataTable
- Mermaid
- Card Templates

### Atomik görevler

- [x] `P7-001` Status semantic tokenlarını Alert ve Toast'a uygula.
- [x] `P7-002` Alert için `default`, `info`, `success`, `warning`, `destructive` varyantlarını normalize et.
- [x] `P7-003` Toast enter/exit ve swipe state motion'larını test et.
- [x] `P7-004` FormMessage için invalid announcement davranışını doğrula.
- [x] `P7-005` Form dependency'lerini opsiyonel registry install olarak tanımla.
- [x] `P7-006` Calendar selection/today/range state'lerini semantic tokenlara bağla.
- [x] `P7-007` DatePicker controlled/uncontrolled API'sini netleştir.
- [x] `P7-008` Autocomplete keyboard navigation ve empty/loading state'lerini test et.
- [x] `P7-009` DataTable core ile toolbar/pagination example'larını ayır.
- [x] `P7-010` DataTable'ı framework/data library bağımlılığından mümkün olduğunca bağımsız tut.
- [x] `P7-011` DataTable mobile overflow ve sticky header davranışını test et.
- [x] `P7-012` Mermaid'i public registry item olarak ekle.
- [x] `P7-013` Mermaid hard-coded light theme renklerini semantic theme resolver'a taşı.
- [x] `P7-014` Mermaid client-only ve dynamic import davranışını doğrula.
- [x] `P7-015` Card Templates'i temel `Card` item'ından ayrı block/component item'larına böl.
- [x] `P7-016` Card Template'lerde sabit yellow/green palette sınıflarını tokenlaştır.
- [x] `P7-017` Her composite item için açık registry dependency graph yaz.
- [x] `P7-018` Empty, loading, error ve populated state docs örnekleri oluştur.

### Çıkış kriteri

- Feedback renkleri brand kırmızısından bağımsız semantic rollerde çalışmalı.
- Mermaid light/dark theme ile senkron olmalı.
- DataTable temel UI ve uygulama örneği ayrılmış olmalı.
- Composite componentler gereksiz bağımlılık kurmamalı.

---

## Faz 8 — Organismlerin block modeline dönüştürülmesi

### Amaç

Navbar, Sidebar, Footer ve dashboard gibi ürün seviyesindeki yapıları aşırı opinionated runtime componentler yerine kopyalanabilir ve değiştirilebilir blocklar olarak sunmak.

### Mimari karar

Atomic Design sınıflandırması repository içi dokümantasyonda korunabilir; ancak registry consumer yüzeyinde aşağıdaki ayrım daha kullanışlıdır:

```text
registry:ui     → tekrar kullanılabilir davranış ve küçük composition
registry:block  → sayfa/ürün seviyesinde değiştirilecek büyük yapı
```

### Navbar görevleri

- [x] `P8-N01` Navbar primitive parçalarını ürün navigation verisinden ayır.
- [x] `P8-N02` Desktop navigation block oluştur.
- [x] `P8-N03` Responsive mobile navigation block oluştur.
- [x] `P8-N04` Mega menu blockunu ayrı registry item yap.
- [x] `P8-N05` Glass navbar varyantını ekle.
- [x] `P8-N06` Sticky/auto-hide hook'unu Navbar markupından ayırmayı değerlendir.
- [x] `P8-N07` Scroll motion'ını reduced-motion ile doğrula.
- [x] `P8-N08` Active route bilgisini framework bağımsız tut.

### Sidebar görevleri

- [x] `P8-S01` Sidebar dosyasındaki hard-coded dark palette'i tamamen kaldır.
- [x] `P8-S02` Sidebar provider/context davranışını ayrı item olarak yapılandır.
- [x] `P8-S03` Sidebar rail, trigger, group, menu, submenu ve footer slotlarını ayır.
- [x] `P8-S04` Collapsible ve icon-only state'leri test et.
- [x] `P8-S05` Floating/glass sidebar varyantını yeni tokenlara bağla.
- [x] `P8-S06` Mobile sheet sidebar blockunu ayrı example olarak sun.
- [x] `P8-S07` Keyboard tab order ve tooltip davranışını test et.

### Footer görevleri

- [x] `P8-F01` Footer anatomy'yi temel layout ve örnek içerik olarak ayır.
- [x] `P8-F02` Dark varyanttaki sabit border rengini tokenlaştır.
- [x] `P8-F03` Newsletter formunu ayrı composition olarak tanımla.
- [x] `P8-F04` Compact, centered ve branded block örneklerini sadeleştir.

### Announcement Bar görevleri

- [x] `P8-A01` Info/warning renklerini semantic tokenlara taşı.
- [x] `P8-A02` Dismissed state persistence'ı core componentten ayır.
- [x] `P8-A03` Enter/exit height + fade motion'ını layout shift açısından test et.

### Hazır blocklar

- [x] `P8-B01` Soft Glass Dashboard Shell oluştur.
- [x] `P8-B02` Glass Navbar + Sidebar layout blocku oluştur.
- [x] `P8-B03` Auth card blockunu yeni Card/Input/Button ile yeniden kur.
- [x] `P8-B04` Pricing blockunu yeni Card varyantlarıyla yeniden kur.
- [x] `P8-B05` Hero blockunda brand red'i kontrollü accent olarak kullan.
- [x] `P8-B06` Referans görsellerden esinlenen smart-dashboard demo blocku oluştur.
- [x] `P8-B07` Blocklarda mock data ile business logic'i birbirinden ayır.
- [x] `P8-B08` Her block için bağımlılık, responsive ve accessibility belgesi yaz.

### Çıkış kriteri

- Büyük layoutlar consumer projesine kaynak olarak kurulmalı.
- Kullanıcı navigation verisini ve markupı doğrudan değiştirebilmeli.
- Organismler package runtime davranışına bağlı olmamalı.
- Referans tasarım dili en az bir gerçek dashboard blockunda doğrulanmalı.

---

## Faz 9 — Motion sisteminin tamamlanması

### Temel ilke

Core componentlerde CSS ve Radix state attribute'ları yeterli olmalıdır. Ağır animation dependency yalnızca gerçekten layout choreography gereken opsiyonel blocklarda düşünülmelidir.

### Atomik görevler

- [x] `P9-001` Motion token isimlerini mevcut ve yeni sistem arasında eşleştir.
- [x] `P9-002` Eski compatibility animation alias'larının kullanımını raporla.
- [x] `P9-003` Yeni native Poyraz motion utility setini tanımla.
- [x] `P9-004` Fade-in/out keyframe'lerini normalize et.
- [x] `P9-005` Scale-in/out keyframe'lerini normalize et.
- [x] `P9-006` Side-aware floating keyframe'lerini normalize et.
- [x] `P9-007` Overlay motion recipe'sini oluştur.
- [x] `P9-008` Accordion height motion recipe'sini oluştur.
- [x] `P9-009` Toast swipe motion recipe'sini oluştur.
- [x] `P9-010` Loading spinner ve pulse recipe'lerini oluştur.
- [x] `P9-011` Button/icon micro-interaction recipe'sini oluştur.
- [x] `P9-012` Hover translation mesafesini 1–2px aralığında standardize et.
- [x] `P9-013` Press scale oranını component boyutuna göre kontrol et.
- [x] `P9-014` Animasyon sırasında border/shadow repaint maliyetini profil et.
- [x] `P9-015` Blur animation yapmaktan kaçın; blur'u sabit tutup opacity/transform animate et.
- [x] `P9-016` Reduced-motion testlerini otomasyona ekle.
- [x] `P9-017` Animasyon exit state'lerinin unmount öncesi çalıştığını doğrula.
- [x] `P9-018` Motion dokümantasyon sayfası oluştur.
- [x] `P9-019` Her motion family için do/don't örnekleri ekle.
- [x] `P9-020` Opsiyonel advanced motion block dependency kararını ver.

### Motion kabul kriterleri

- Hover ve press feedback 200ms altında hissedilmeli.
- Overlay girişleri sakin, çıkışları girişten biraz daha kısa olmalı.
- Hiçbir essential state yalnızca motion ile anlatılmamalı.
- Reduced-motion açıkken component fonksiyonu ve state görünürlüğü korunmalı.
- Animasyon layout shift üretmemeli.

---

## Faz 10 — Dokümantasyon ve component playground

### Amaç

Dokümantasyonu package kataloğundan registry ürünü anlatan interaktif bir sisteme dönüştürmek.

### Atomik görevler

- [x] `P10-001` Docs information architecture'ını `Getting Started / Theme / Components / Blocks / Migration` olarak yenile.
- [x] `P10-002` Registry metadata'yı navigation için tek kaynak yap.
- [x] `P10-003` Manuel component sayısı metinlerini kaldır veya otomatik üret.
- [x] `P10-004` Her component sayfasına install command ekle.
- [x] `P10-005` Install command copy action ekle.
- [x] `P10-006` Her component sayfasına kaynak kod görünümü ekle.
- [x] `P10-007` Her component sayfasına dependency listesi ekle.
- [x] `P10-008` Her component sayfasına accessibility notları ekle.
- [x] `P10-009` Her component sayfasına API/variant/size/state tablosu ekle.
- [x] `P10-010` Light/dark/system theme kontrolünü koru.
- [x] `P10-011` Docs shell'i yeni Soft Glass tasarım diliyle yenile.
- [x] `P10-012` Background seçici ekle: solid, gradient, image-like dark.
- [x] `P10-013` Glass componentlerin farklı zeminlerde test edilmesini sağlayan preview kontrolü ekle.
- [x] `P10-014` Radius/density/motion preview kontrollerini ekle.
- [x] `P10-015` Button variant playground oluştur.
- [x] `P10-016` Token gallery ve semantic role açıklamalarını ekle.
- [x] `P10-017` Motion gallery oluştur.
- [x] `P10-018` Block preview için desktop/tablet/mobile switcher ekle.
- [x] `P10-019` Registry kurulum troubleshooting sayfası oluştur.
- [x] `P10-020` V2 docs'u stable legacy URL altında erişilebilir tut.
- [x] `P10-021` V2→V3 migration guide yayınla.
- [x] `P10-022` README'yi source registry quick start ile güncelle.
- [x] `P10-023` COMPONENTS.md içindeki eski ölçü ve varyant bilgilerini registry metadata ile senkronla.
- [x] `P10-024` CLI çıktısındaki link ve komutları yeni docs'a yönlendir.

Revizyon notu: `P10-012` ve `P10-014` ile eklenen global background/radius/density/motion kontrolleri component API'leriyle tutarlı bir kullanım sözleşmesi üretmediği ve docs arayüzünü gereksiz karmaşıklaştırdığı için kaldırıldı. Docs preview alanları varsayılan semantic gradient yüzeyi kullanır; özel dark-image örnekleri yalnızca ilgili demonun kendi yapısında kalır.

### Çıkış kriteri

- Kullanıcı docs üzerinden componenti bulup tek komutla kurabilmeli.
- Kod, demo ve registry metadata aynı kaynaktan türemeli.
- Glass görünüm en az üç farklı background koşulunda incelenebilmeli.
- Eski kullanıcı migration yolunu kolayca bulabilmeli.

---

## Faz 11 — Test, kalite ve CI kapıları

### 11.1 Test katmanları

```text
Static checks
├── format
├── lint
├── typecheck
└── registry schema/dependency validation

Component checks
├── unit
├── interaction
├── accessibility
└── visual regression

Distribution checks
├── registry build
├── clean fixture install
├── fixture typecheck
└── fixture production build
```

### Atomik görevler

- [x] `P11-001` Format scripti ekle.
- [x] `P11-002` Lint scripti ekle.
- [x] `P11-003` Bağımsız typecheck scripti ekle.
- [x] `P11-004` Registry schema validation scripti ekle.
- [x] `P11-005` Registry dependency cycle testi ekle.
- [x] `P11-006` Broken registry file path testi ekle.
- [x] `P11-007` Duplicate item name testi ekle.
- [x] `P11-008` Unit test runner kur.
- [x] `P11-009` DOM interaction test altyapısı kur.
- [x] `P11-010` Axe tabanlı accessibility kontrolü ekle.
- [x] `P11-011` Playwright browser test altyapısı kur.
- [x] `P11-012` Light/dark visual regression projeleri oluştur.
- [x] `P11-013` Mobile/desktop visual viewportları oluştur.
- [x] `P11-014` Glass fallback test browser/context'i oluştur.
- [x] `P11-015` Reduced-motion test context'i oluştur.
- [x] `P11-016` Keyboard-only interaction suite oluştur.
- [x] `P11-017` Focus trap/return focus suite oluştur.
- [x] `P11-018` Next.js clean fixture oluştur.
- [x] `P11-019` Vite clean fixture oluştur.
- [x] `P11-020` Her registry item için install smoke test tasarla.
- [x] `P11-021` Kurulan fixture için typecheck çalıştır.
- [x] `P11-022` Kurulan fixture için production build çalıştır.
- [x] `P11-023` Registry output değiştiğinde generated diff'i CI artifact yap.
- [x] `P11-024` Bundle/runtime dependency bütçesi belirle.
- [x] `P11-025` Blur-heavy demo için performans profili ekle.
- [x] `P11-026` Pull request required-check listesini tanımla.

### Minimum release gate

- Registry schema: yüzde 100 geçmeli.
- Clean Next ve Vite fixture build: geçmeli.
- Critical accessibility ihlali: sıfır.
- Public component keyboard flows: geçmeli.
- Onaylanmamış visual diff: sıfır.
- Reduced-motion smoke test: geçmeli.
- Broken docs/install link: sıfır.

---

## Faz 12 — V2'den V3'e migration

### Migration stratejisi

Migration tek seferlik “her şeyi değiştir” komutu olmamalıdır. Kullanıcı component component geçebilmelidir.

### Atomik görevler

- [x] `P12-001` V2 import kullanan örnek consumer fixture oluştur.
- [x] `P12-002` V2 component → V3 registry item mapping tablosu oluştur.
- [x] `P12-003` V2 prop → V3 prop mapping tablosu oluştur.
- [x] `P12-004` Kaldırılan/değişen variant mapping tablosu oluştur.
- [x] `P12-005` Eski `preset.css` token → yeni token mapping tablosu oluştur.
- [x] `P12-006` Eski theme object entegrasyonu için migration bölümü yaz.
- [x] `P12-007` `reactive-switcher` kullanan projeler için provider-independent CSS migration örneği yaz.
- [x] `P12-008` Next Themes örneğini framework-specific recipe olarak ayır.
- [x] `P12-009` İlk migration adımı olarak theme/utils registry item kurulumunu tanımla.
- [x] `P12-010` İkinci adım olarak Button/Input/Card geçişini tanımla.
- [x] `P12-011` Üçüncü adım olarak Radix molecule geçişini tanımla.
- [x] `P12-012` Dördüncü adım olarak organism/block geçişini tanımla.
- [x] `P12-013` Eski npm importları kaldığında tespit edecek `rg` komutlarını guide'a ekle.
- [x] `P12-014` İsteğe bağlı codemod fizibilitesini değerlendir.
- [x] `P12-015` Codemod yalnızca güvenli import dönüşümlerini yapacaksa uygula.
- [x] `P12-016` Consumer'ın özelleştirilmiş v2 componentlerini overwrite etmeme politikasını yaz.
- [x] `P12-017` Theme token migration için otomatik kontrol scripti değerlendir.
- [x] `P12-018` Legacy v2 docs ve package desteğinin bitiş tarihini yayınla.
- [x] `P12-019` Migration fixture'ını final v3 build ile doğrula.
- [x] `P12-020` Rollback adımlarını guide'a ekle.

### Önerilen compatibility politikası

- `v2.1.x`: yalnızca kritik bug ve güvenlik düzeltmeleri.
- V3 release candidate doğrulanana kadar npm `latest`: v2 stable olarak kalır.
- `poyraz-ui@3.0.0-rc.1` npm `next` etiketiyle gerçek consumer projede doğrulanır.
- Stable yayınla birlikte `poyraz-ui@3.0.0`, npm `latest` olur.
- Son V2 sürümü geri dönüş ve migration için `legacy-v2` etiketiyle korunur.
- Registry item'ları alpha/beta süresince açıkça prerelease olarak işaretlenir.
- Stable V3 öncesinde kaldırılan veya değiştirilen V2 export/prop sözleşmeleri migration guide'da listelenir.
- Eski runtime package için destek süresi release notunda net yazılır.

---

## Faz 13 — Release planı

### 13.1 `v3.0.0-alpha.1` — Foundation ve Button

Kapsam:

- Registry root ve build pipeline.
- Theme/utils item'ları.
- Yeni token foundation.
- Button pilotu.
- İlk clean-install testleri.

Release kapısı:

- Button tasarım onayı.
- Registry Next/Vite fixture build.
- Theme light/dark ve glass fallback testi.

### 13.2 `v3.0.0-alpha.2` — Temel componentler

Kapsam:

- Input, Textarea, Label.
- Checkbox, RadioGroup, Switch.
- Badge, Avatar, Card.
- Typography, Separator, Skeleton, ScrollArea.

Release kapısı:

- Atom seti API review tamamlanmış.
- Sabit palette renkleri temizlenmiş.
- Visual baselines onaylanmış.

### 13.3 `v3.0.0-beta.1` — Interactive componentler

Kapsam:

- Floating family.
- Overlay family.
- Accordion, Tabs, Breadcrumb, Pagination.
- Registry dependency graph.

Release kapısı:

- Keyboard ve focus testleri.
- Portal/theme inheritance testleri.
- Reduced-motion testleri.

### 13.4 `v3.0.0-beta.2` — Composite ve blocklar

Kapsam:

- Form, Calendar, DatePicker, Autocomplete.
- Alert, Toast, DataTable, Mermaid.
- Navbar, Sidebar, Footer ve Announcement Bar blockları.
- Dashboard/Auth/Pricing/Hero blockları.

Release kapısı:

- Tüm registry items clean-install testinden geçmeli.
- En az bir referans tasarıma yakın Soft Glass Dashboard tamamlanmalı.
- Docs responsive preview tamamlanmalı.

### 13.5 `v3.0.0-rc.1` — API ve görsel freeze

Kapsam:

- Yeni component veya variant ekleme durur.
- API yalnızca blocker hata için değişir.
- Migration guide tamamlanır.
- Registry namespace ve production URL sabitlenir.
- Full visual/accessibility/performance QA yapılır.

Release kapısı:

- Critical/high bug sayısı sıfır.
- Onaylanmamış visual diff sıfır.
- Registry metadata ve docs tam senkron.
- V2→V3 migration fixture başarılı.

### 13.6 `v3.0.0` — Stable

Release görevleri:

- [x] `R-001` `package.json` versionını `3.0.0` yap ve changelog'u release tarihiyle güncelle.
- [x] `R-002` Registry production build üret.
- [x] `R-003` Registry schema doğrula.
- [x] `R-004` Tüm fixture install/build testlerini çalıştır.
- [x] `R-005` Docs production build çalıştır.
- [ ] `R-006` Release tag oluştur.
- [ ] `R-007` `poyraz-ui@3.0.0` paketini npm'e yayınla, `latest` → V3 ve `legacy-v2` → son V2 olacak şekilde dist-tag politikasını doğrula.
- [ ] `R-008` Registry namespace production config'i yayınla.
- [ ] `R-009` Migration guide ve release notes yayınla.
- [x] `R-010` Legacy v2 docs linkini görünür tut.
- [x] `R-011` Kurulum komutlarını gerçek temiz projede son kez doğrula.
- [ ] `R-012` Post-release smoke test yap.

### 13.7 `v3.0.1` — Stabilizasyon penceresi

- Yalnızca kurulum, schema, docs, type ve critical styling düzeltmeleri.
- Yeni API veya yeni variant eklenmez.
- İlk kullanıcı geri bildirimleri kategorize edilir.
- En sık yapılan consumer override'ları v3.1 planına girdi olur.

### 13.8 Release engineering görevleri

- [x] `P13-001` Registry sürümünü npm legacy package sürümünden ayıran release manifesti oluştur.
- [x] `P13-002` Alpha, beta, RC ve stable channel/version sözleşmesini makine tarafından doğrula.
- [x] `P13-003` Production registry namespace ve URL template'ini sabitle.
- [x] `P13-004` Stable release preflight scripti ekle.
- [x] `P13-005` Registry artifact ve SHA-256 checksum üretimini ekle.
- [x] `P13-006` Npm package içeriği için publish öncesi dry-run raporu üret.
- [x] `P13-007` Protected environment kullanan manual release workflow'u ekle.
- [x] `P13-008` V2 `legacy-v2` dist-tag'ini `latest` taşımadan uygulayan güvenli job ekle.
- [x] `P13-009` Production registry endpoint smoke testini ekle.
- [x] `P13-010` Stable changelog, release notes ve release runbook yaz.
- [x] `P13-011` Release durumunu ve legacy bağlantılarını docs içinde görünür yap.
- [x] `P13-012` Release contract, artifact ve local endpoint testini kalite zincirine bağla.

`R-001`–`R-012` stable operasyon checklist'idir. Tag oluşturma, production yayın ve post-release smoke maddeleri yalnızca korumalı workflow gerçek stable release commit'i üzerinde çalıştırıldığında işaretlenir; release hazırlığı sırasında tamamlanmış gibi gösterilmez.

> **Faz 13 karar düzeltmesi:** `P13-001` ve `P13-008` ile kurulan registry-only /
> legacy-only npm politikası tamamlanmış tarihsel çalışma olarak kalır, fakat stable yayın
> sözleşmesi değildir. Npm V3 publish akışı, dist-tag geçişi ve çift dağıtım doğrulamaları
> Faz 14–17 içinde bu politikayı değiştirir.

---

## Faz 14 — Dağıtım sözleşmesini düzeltme ve major scope freeze

### Amaç

Registry-only olarak yazılmış release engineering kararlarını, Poyraz UI'ın gerçek ürün
hedefi olan **npm runtime package + source registry** modeline çevirmek. Bu fazdan sonra
V3 stable çıkana kadar yeni component, yeni variant veya salt görsel refinement eklenmez.
Yalnızca package/registry public API, kurulum, erişilebilirlik, build ve release blocker'ları
değişiklik kabul eder.

### Onaylanan ürün sözleşmesi

- `poyraz-ui@3.0.0`, npm üzerindeki stable runtime component paketidir.
- Stable yayın sonunda npm `latest` etiketi `3.0.0` sürümünü gösterir.
- Son V2 sürümü `legacy-v2` etiketiyle kurulabilir kalır.
- `@poyraz/*` registry namespace'i, aynı componentlerin consumer-owned source dağıtımıdır.
- Npm package ve registry iki ayrı implementation değildir; aynı canonical source ve token sözleşmesinden üretilir.
- Npm import yolu kullanan consumer package update alır; registry kullanan consumer kurulan source dosyasının sahibidir.
- V3 stable sonrasındaki tasarım iyileştirmeleri mevcut import ve prop kullanımını kırmaz.

### Atomik görevler

- [x] `P14-001` Npm package'ın V3'te de birincil desteklenen ürün olduğunu kaydeden yeni ADR yaz.
- [x] `P14-002` Yeni ADR içinde ADR-0001 ve ADR-0002'nin hangi kararlarını supersede ettiğini tek tek listele.
- [x] `P14-003` Npm package ile registry'nin ortak canonical source kuralını ADR'a ekle.
- [x] `P14-004` Package ve registry çıktısının farklılaşması durumunda source of truth sırasını tanımla.
- [x] `P14-005` `release.config.json` npm rolünü `legacy-v2` yerine V3 stable package olacak şekilde yeniden modelle.
- [x] `P14-006` Release config schema'sındaki `legacy-v2` sabitlerini V3 publish sözleşmesini doğrulayacak şekilde güncelle.
- [x] `P14-007` Release preflight içindeki `publishV3Package: false` zorunluluğunu kaldır.
- [x] `P14-008` Preflight'a package adı, hedef version, channel ve dist-tag eşleşme kontrolleri ekle.
- [x] `P14-009` `package.json` version değişikliğinin yalnızca release commit'inde yapılacağı kuralını yaz.
- [x] `P14-010` Npm `latest`, `next` ve `legacy-v2` dist-tag geçiş tablosunu yaz.
- [x] `P14-011` V2'ye dönüş komutunu ve V3 uninstall/rollback akışını release runbook'a ekle.
- [x] `P14-012` `docs/v3/release-runbook.md` içindeki “V3 npm'e publish edilmez” hükümlerini kaldır.
- [x] `P14-013` `docs/v3/releases/v3.0.0.md` release notunu npm V3 + registry modeline göre güncelle.
- [x] `P14-014` `CHANGELOG.md` dağıtım açıklamasını npm runtime V3 yayınını içerecek şekilde güncelle.
- [x] `P14-015` Migration guide'daki registry-only yönlendirmeyi iki kurulum yolu sunacak şekilde düzelt.
- [x] `P14-016` README'de “npm package” ve “source registry” quick startlarını yan yana, kullanım amacıyla birlikte göster.
- [x] `P14-017` Docs ana Installation sayfasını varsayılan olarak V3 npm package kurulumunu gösterecek şekilde güncelle.
- [x] `P14-018` Installation sayfasında source registry kurulumunu “Own the source” alternatifi olarak göster.
- [x] `P14-019` Legacy V2 sayfasını `poyraz-ui@legacy-v2` komutuyla erişilebilir tut.
- [x] `P14-020` CLI'ın npm setup ve registry add sorumluluklarını ayır; çıktıda iki modeli birbirine karıştırma.
- [x] `P14-021` Major scope freeze tarihini changelog/release notes içinde kaydet.
- [x] `P14-022` Yeni component, variant ve animasyon taleplerini Faz 18 backlog'una yönlendiren contribution kuralı ekle.
- [x] `P14-023` Faz 0–13 içinde registry-only karara bağlı kalmış tüm doküman ve scriptleri `rg` ile envanterle.
- [x] `P14-024` Envanterdeki her kayıt için “güncellendi”, “tarihsel kayıt” veya “silindi” kararı ver.

### Faz 14 doğrulama kaydı — 2026-07-13

- ADR-0003 npm V3 + source registry kararını, canonical source sırasını, dist-tag politikasını ve scope freeze'i kaydetti; ADR-0001/0002 tarihsel `Superseded` kaydı olarak korundu.
- `release.config.json` schema v2, release schema, preflight ve artifact manifest çift dağıtım sözleşmesine geçirildi.
- `pnpm test:phase14` geçti; strict stable preflight'in `package.json@2.1.0` durumunu release commit'e kadar reddettiği doğrulandı.
- `pnpm test:phase13` geçti; release artifact ve local registry endpoint smoke geriye uyumlu kaldı.
- `pnpm typecheck` geçti.
- `pnpm lint` 0 hata ile geçti; 67 mevcut warning Faz 15 kalite sınıflandırma kapsamındadır.
- `pnpm theme:check` geçti.
- Next production build geçti ve 83 route üretildi.
- `docs/v3/audits/phase14-distribution-contract.md` aktif, tarihsel ve korunan registry anlatımlarının karar envanterini içerir.
- `package.json` versionı ADR gereği release commit'ine kadar `2.1.0` kalır.
- `npm.publishWorkflowReady` Faz 16 tarball publish/consumer smoke tamamlanana kadar `false` kalır; protected stable publish guard ile kapalıdır.

### Çıkış kriteri

- Repo içinde V3 npm publish'i yasaklayan aktif release assertion kalmamalı.
- Docs, ADR, config, schema, preflight ve workflow aynı çift dağıtım modelini anlatmalı.
- Npm package ve registry için hangi source'un canonical olduğu tartışmasız olmalı.
- V3 stable'a kadar major scope freeze uygulanmalı.

---

## Faz 15 — Release blocker'ları ve eski açık checklist kapanışı

### Amaç

Yeni özellik eklemeden, mevcut branch'in temiz kurulmasını, build edilmesini ve package/registry
consumer senaryolarında güvenilir çalışmasını sağlamak. Bu faz mevcut incelemede bulunan
blocker'ları ve Faz 1, Faz 4, Faz 5 ile Definition of Done'da açık kalan doğrulamaları kapatır.

### 15.1 Kurulum, build ve dağıtım blocker'ları

- [x] `P15-BLOCK-001` Mevcut `pnpm-lock.yaml` büyük farkını dependency kaynağı ve sürüm değişimleri açısından incele.
- [x] `P15-BLOCK-002` Gereksiz lockfile churn'ünü temizle veya neden gerekli olduğunu release kaydına yaz.
- [x] `P15-BLOCK-003` Committed lockfile ile Node 22 + pnpm 11.5.1 üzerinde `pnpm install --frozen-lockfile` çalıştır.
- [x] `P15-BLOCK-004` Root install sırasında minimum-release-age nedeniyle reddedilen dependency kalmadığını doğrula.
- [x] `P15-BLOCK-005` İzole Next/Vite fixture kurulumlarında `sharp` build script onay politikasını fixture'a taşı.
- [x] `P15-BLOCK-006` Fixture build approval konfigürasyonunun root workspace'e tesadüfen bağlı olmadığını test et.
- [x] `P15-BLOCK-007` `pnpm fixture:clean-install` komutunu temiz ortamda tamamen geçir.
- [x] `P15-BLOCK-008` Production build sonrasında tracked `dist/**/*.d.ts` ve `dist/**/*.d.cts` farkı oluşmasını engelle.
- [x] `P15-BLOCK-009` Dist çıktısı repoda tutulacaksa deterministic build kontrolünü CI'a ekle. N/A: kısmi tracked dist modeli kaldırıldı.
- [x] `P15-BLOCK-010` Dist repoda tutulmayacaksa package build/publish aşamasında üretildiğini ve tarball'a girdiğini doğrula.
- [x] `P15-BLOCK-011` Registry build sonrasında `public/r`, docs registry ve `COMPONENTS.md` farkı oluşmadığını doğrula.
- [x] `P15-BLOCK-012` Release commit öncesi full `pnpm release:verify -- --diagnostic --allow-dirty` çalıştır; exact-version temiz worktree tekrarı Faz 17 stable gate'idir.

### 15.2 Public API, accessibility ve composition blocker'ları

- [x] `P15-API-001` Command Palette `role="option"` elemanlarına doğru `aria-selected` state'ini ekle.
- [x] `P15-API-002` Command Palette keyboard selection ve screen reader state testini ekle.
- [x] `P15-API-003` `NavbarMobileDrillTrigger` içinde consumer `className` değerini forward et.
- [x] `P15-API-004` Navbar drill trigger için class override contract testi ekle.
- [x] `P15-API-005` Tüm public componentlerde destructure edilip uygulanmayan `className` prop taraması yap.
- [x] `P15-API-006` Tüm public package exportlarını ESM, CJS ve TypeScript üzerinden import eden smoke test ekle.
- [x] `P15-API-007` Interactive public componentlerin keyboard/focus kritik akışlarını test matrisiyle eşleştir.
- [x] `P15-API-008` Lint uyarılarını accessibility/contract, correctness, performance ve docs olarak sınıflandır.
- [x] `P15-API-009` Accessibility/contract ve correctness sınıfındaki lint uyarılarını stable öncesi sıfırla.
- [x] `P15-API-010` Ertelenen performance/docs uyarılarını issue/backlog referansıyla kaydet.

### 15.3 Eski açık checklistlerin taşınması

Aşağıdaki görevler tamamlandığında Faz 1, Faz 4 ve Faz 5 altındaki orijinal checkbox da
aynı commit içinde işaretlenmelidir:

- [x] `P15-LEGACY-001` `P1-021`: Local registry URL üzerinden temiz Next.js fixture'a Button kur.
- [x] `P15-LEGACY-002` `P1-022`: Local registry URL üzerinden temiz Vite fixture'a Button kur.
- [x] `P15-LEGACY-003` `P1-023`: Kurulan Button dosyasının canonical `components/ui/atoms/button.tsx` hedefine geldiğini doğrula.
- [x] `P15-LEGACY-004` `P1-024`: Registry kurulumunun consumer dependency manifestini doğru güncellediğini doğrula.
- [x] `P15-LEGACY-005` `P1-025`: Kullanılan shadcn CLI sürümünde dry-run/diff/overwrite davranışlarını manuel doğrula ve desteklenmeyen flag varsa gerçek karşılığını dokümante et.
- [x] `P15-LEGACY-006` `P1-027`: GitHub repository item address ile kurulum akışını test et.
- [x] `P15-LEGACY-007` `P4-030`: Repository sahibi mevcut Button baseline'ını V3 stable için kabul et veya blocker görsel farkı kaydet.
- [x] `P15-LEGACY-008` `P5-INPUT-05`: Input/Textarea autofill surface, text ve placeholder kontrastını Chromium, WebKit/Safari motor ailesi ve Firefox'ta doğrula.
- [x] `P15-LEGACY-009` Tasarım onayı sonrasında kalan salt görsel Button önerilerini Faz 18'e taşı; Faz 15 içinde yeni variant ekleme.

### 15.4 Definition of Done kanıt matrisi

Definition of Done altındaki checkbox'lar global tamamlanma listesi değil, component başına
uygulanacak şablondur. Stable kanıtı aşağıdaki görevlerle üretilir:

- [x] `P15-DOD-001` Her public npm exportu ve her registry item'ı satır olan DoD kanıt matrisi üret.
- [x] `P15-DOD-002` Registry-only maddeleri npm-only exportlar için gerekçeli `N/A` olarak işaretle.
- [x] `P15-DOD-003` Package export, registry metadata, docs ve source isimlerinin drift kontrolünü otomatikleştir.
- [x] `P15-DOD-004` Her public export için importability ve type-resolution sonucu kaydet.
- [x] `P15-DOD-005` Her interactive component için keyboard, focus-visible ve reduced-motion kanıtı bağla.
- [x] `P15-DOD-006` Glass variant bulunan componentleri light/dark ve en az iki background üzerinde doğrula.
- [x] `P15-DOD-007` Global coverage yüzdesini tek başına release kanıtı sayma; release-critical component test matrisinde açık satır bırakma.
- [x] `P15-DOD-008` Mevcut coverage değerini baseline olarak kaydet ve coverage düşüşünü CI'da engelle.
- [x] `P15-DOD-009` Critical public akışlar için eksik unit/DOM/browser testlerini ekle.
- [x] `P15-DOD-010` Kanıt matrisini release artifact içine ekle.

### Faz 15 doğrulama kaydı — 2026-07-13

- Node 22 ve pnpm 11.5.1 ile committed lockfile üzerinden frozen install geçti; minimum-release-age engeli oluşmadı.
- Root workspace'ten bağımsız Next.js ve Vite clean-install fixture'ları kendi build approval politikalarıyla kuruldu, typecheck ve production build'den geçti; Next.js `sharp` install scripti çalıştı.
- Gerçek shadcn CLI ile yerel registry ve GitHub raw registry adreslerinden Button kuruldu; dry-run, diff, overwrite, dependency manifesti ve canonical atom hedefi doğrulandı.
- Package root/atoms/molecules/organisms/themes exportları ESM, CJS ve TypeScript NodeNext çözümlemesinden geçti.
- Command Palette selection/keyboard sözleşmesi, Navbar class override sözleşmesi, DOM ve accessibility testleri geçti.
- Input/Textarea autofill kontrastı Chromium, Firefox ve WebKit/Safari motor ailesinde geçti.
- Coverage baseline'ı statement `%10.5`, branch `%5.1`, function `%3.46`, line `%11` olarak kaydedildi ve CI eşikleriyle gerilemeye kapatıldı.
- Lint sonucu 0 error'dır; accessibility/contract ve correctness warning sayısı 0'a indirildi. Kalan 37 performance/docs warning'i Faz 18 `P18-010` backlog'una kaydedildi.
- Kısmi tracked `dist` modeli kaldırıldı. `dist` publish/build zamanında üretilir; package export ve tarball kontrolleri Faz 15/16 doğrulamalarının parçasıdır.
- DoD kanıt matrisi 6 public npm exportu ve 71 registry item'ı için üretildi; release artifact builder matrisi `DOD_EVIDENCE.md` olarak dahil eder.
- Release commit öncesi diagnostic doğrulama `pnpm release:verify -- --version=3.0.0 --channel=stable --diagnostic --allow-dirty` ile geçti; 71 registry item'ı, 77 release artifact'i ve 83 route'lu production docs build doğrulandı. Exact-version ve clean-worktree stable gate'i Faz 17'de tekrarlanır.

### Çıkış kriteri

- Committed HEAD temiz ortamda frozen install, fixture install, typecheck ve production build geçmeli.
- Known accessibility ve public composition blocker'ı kalmamalı.
- Faz 1, Faz 4 ve Faz 5'teki sekiz açık uygulama checkbox'ı kapanmalı.
- DoD maddeleri component/export bazında kanıtlanmalı; genel şablon “tahminen tamamlandı” diye topluca işaretlenmemeli.
- Salt görsel refinement bu fazın çıkışını geciktirmemeli.

---

## Faz 16 — Npm package hazırlığı ve release candidate

### Amaç

Registry testlerinden bağımsız olarak gerçek npm tarball'ını üretmek, kurulabilirliğini ve
public API'sini doğrulamak, ardından `next` etiketiyle kısa bir RC smoke yapmak.

### 16.1 Package manifest ve build sözleşmesi

- [x] `P16-PKG-001` `package.json` ad, description, repository, homepage, license ve keywords alanlarını V3 için gözden geçir.
- [x] `P16-PKG-002` Root, atoms, molecules, organisms, themes ve CSS preset exportlarını V3 public API kararıyla eşleştir.
- [x] `P16-PKG-003` Her export için ESM, CJS ve declaration dosyasının tarball içinde bulunduğunu doğrula.
- [x] `P16-PKG-004` `files` alanında yalnızca consumer için gerekli dist, CSS, CLI, README ve license dosyalarını bırak.
- [x] `P16-PKG-005` Peer dependency ve optional peer dependency aralıklarını React 18/19, Radix ve Tailwind destek matrisiyle doğrula.
- [x] `P16-PKG-006` Node/package-manager engine politikasını tanımla.
- [x] `P16-PKG-007` `sideEffects` politikasının CSS importlarının tree-shaking ile kaybolmasına neden olmadığını test et.
- [x] `P16-PKG-008` `prepack` veya `prepublishOnly` zincirini full package build + type + package smoke çalıştıracak şekilde düzenle.
- [x] `P16-PKG-009` Local publish komutu yerine CI artifact'ından aynı tarball'ın yayınlanacağı kuralını uygula.
- [x] `P16-PKG-010` Package tarball boyutu ve unpacked size budget belirle.

### 16.2 Tarball consumer matrisi

- [x] `P16-SMOKE-001` `npm pack --dry-run --json` çıktısını release artifact olarak üret.
- [x] `P16-SMOKE-002` Gerçek `.tgz` dosyasını oluştur ve checksum kaydet.
- [x] `P16-SMOKE-003` Tarball'ı temiz Next.js App Router projesine kur.
- [x] `P16-SMOKE-004` Tarball'ı temiz Vite React projesine kur.
- [x] `P16-SMOKE-005` Next ve Vite fixture'larda root import kullanımını typecheck/build et.
- [x] `P16-SMOKE-006` Next ve Vite fixture'larda atoms/molecules/organisms subpath importlarını typecheck/build et.
- [x] `P16-SMOKE-007` Theme ve `preset.css` importlarını production build içinde doğrula.
- [x] `P16-SMOKE-008` CLI binary'nin tarball içinden çalıştığını ve V3 komutlarını doğru gösterdiğini doğrula.
- [x] `P16-SMOKE-009` Registry ile kurulan Button ve npm'den import edilen Button public prop/variant sözleşmesini karşılaştır.
- [x] `P16-SMOKE-010` Package consumer ve registry consumer'ın aynı uygulamada çakışmadan kullanılabildiği migration smoke testi ekle.

### 16.3 Npm publish otomasyonu

- [x] `P16-NPM-001` Npm organization/package publish yetkisini ve 2FA/trusted publishing gereksinimini doğrula.
- [x] `P16-NPM-002` GitHub `v3-production` environment approval ve npm secret/trusted publisher konfigürasyonunu doğrula.
- [x] `P16-NPM-003` Release workflow'a artifact'tan npm publish yapan korumalı job ekle.
- [x] `P16-NPM-004` Workflow'un version zaten yayınlanmışsa tekrar publish denemeden güvenli şekilde durmasını sağla.
- [x] `P16-NPM-005` Stable olmayan versionların yalnızca `next` etiketiyle yayınlanmasını doğrula.
- [x] `P16-NPM-006` Stable versionın `latest` etiketine geçmesini açık approval'a bağla.
- [x] `P16-NPM-007` Son V2 sürümüne `legacy-v2` etiketi uygulayan job'u koru ve hedef versionı package metadata'dan bağımsız sabitle.
- [x] `P16-NPM-008` Publish provenance/attestation üretimini ve npm package sayfasında görünmesini doğrula.
- [x] `P16-NPM-009` Publish sonrası `npm view poyraz-ui versions dist-tags` smoke kontrolü ekle.
- [x] `P16-NPM-010` Publish sonrası temiz projede registry'den değil npm registry'den kurulum testi ekle.

### 16.4 Kısa RC kapısı

- [x] `P16-RC-001` Reviewed commit üzerinde `3.0.0-rc.1` tarball ve release notes üret.
- [ ] `P16-RC-002` `poyraz-ui@3.0.0-rc.1` paketini npm `next` etiketiyle yayınla.
- [ ] `P16-RC-003` `pnpm add poyraz-ui@next` ile en az bir gerçek Next ve bir gerçek Vite consumer smoke yap.
- [x] `P16-RC-004` RC sırasında yalnızca release blocker düzeltmesi kabul et.
- [x] `P16-RC-005` RC'de public API değişirse stable öncesi migration/release notunu güncelle.
- [x] `P16-RC-006` RC kabulünden sonra stable tarball'ın yalnızca version/release metadata farkı taşıdığını doğrula.

### Faz 16 doğrulama kaydı — 2026-07-13

- `package.json` V3 npm + source registry konumlandırmasıyla güncellendi; export map root, atoms,
  molecules, organisms, themes ve `preset.css` için ESM/CJS/types/CSS contract'ını korur.
- CSS importlarının tree-shaking ile düşmemesi için `sideEffects` CSS allowlist'e çevrildi.
- `prepublishOnly`, package build + lib typecheck + package export smoke + npm pack dry-run
  çalıştıracak şekilde genişletildi.
- `release.config.json` tarball budget'ları ve `publishWorkflowReady: true` ile güncellendi.
- Release artifact builder gerçek `.tgz`, `npm-tarball.json`, dry-run raporu ve checksum üretir.
- `pnpm release:tarball-smoke` local tarball'ı temiz Next.js ve Vite projelerine kurar; package
  importları, subpath importları, `preset.css`, CLI binary ve registry+package birlikte kullanımını
  typecheck/production build ile doğrular.
- `V3 Release` workflow'u reviewed artifact'tan npm publish yapar, duplicate publish'i atlar,
  prerelease için `next`, stable için `latest`, V2 için `legacy-v2` politikasını uygular ve publish
  sonrası npm registry install smoke çalıştırır.
- `3.0.0-rc.1` release notes üretildi. Gerçek npm `next` publish ve `pnpm add poyraz-ui@next`
  smoke dış yayın yetkisi/protected environment approval gerektirdiği için Codex tarafından lokal
  çalıştırılmadı; workflow üzerinden yürütülecek operasyonel adım olarak açık bırakıldı.

### Çıkış kriteri

- Npm tarball gerçek Next ve Vite consumer'da kurulmalı, typecheck ve production build geçmeli.
- Package exportları ve registry contractı aynı component API'sini sunmalı.
- Protected workflow `next`, `latest` ve `legacy-v2` etiketlerini deterministik yönetmeli.
- RC üzerinde blocker kalmamalı; salt görsel değişiklik stable'a alınmamalı.

---

## Faz 17 — Master merge, Vercel deploy ve `poyraz-ui@3.0.0` stable yayın

### Amaç

Tek bir reviewed commit'i önce `master` production kaynağı yapmak, Vercel docs/registry
deploy'unu doğrulamak ve aynı commit'ten npm stable package ile immutable GitHub Release
üretmek.

### Zorunlu yayın sırası

1. Temiz ve reviewed `v3` commit'i üzerinde tüm quality gate'leri geçir.
2. `v3 → master` pull request'ini merge et.
3. `master` commit'inin Vercel production deploy'unu bekle.
4. Production docs ve registry endpointlerini smoke test et.
5. Aynı `master` SHA için release artifact/tarball üret.
6. Protected approval sonrasında npm stable publish yap.
7. Dist-tag, tarball install, GitHub tag/release ve checksum doğrulamalarını tamamla.

### 17.1 PR ve merge kapısı

- [ ] `P17-MERGE-001` Release scope dışı ve kullanıcıya ait unstaged değişiklik kalmadığını doğrula.
- [ ] `P17-MERGE-002` `v3` branch'ini origin ile senkronla ve exact release SHA'yı kaydet.
- [ ] `P17-MERGE-003` `v3 → master` PR aç; npm V3 ve registry dağıtım özetini PR açıklamasına ekle.
- [ ] `P17-MERGE-004` Static quality check'ini exact PR SHA üzerinde geçir.
- [ ] `P17-MERGE-005` Component tests check'ini exact PR SHA üzerinde geçir.
- [ ] `P17-MERGE-006` Browser quality check'ini exact PR SHA üzerinde geçir.
- [ ] `P17-MERGE-007` Clean fixture distribution check'ini exact PR SHA üzerinde geçir.
- [ ] `P17-MERGE-008` Npm tarball consumer smoke check'ini required check olarak geçir.
- [ ] `P17-MERGE-009` Critical/high issue ve onaylanmamış API diff olmadığını doğrula.
- [ ] `P17-MERGE-010` PR'ı `master` branch'ine merge et ve resulting master SHA'yı kaydet.

### 17.2 Vercel production kapısı

- [ ] `P17-DEPLOY-001` Vercel production projesinin deploy branch'inin `master` olduğunu doğrula.
- [ ] `P17-DEPLOY-002` Master merge deploy'unun success olmasını bekle.
- [ ] `P17-DEPLOY-003` Production ana sayfa ve Installation sayfasında V3 içeriğini doğrula.
- [ ] `P17-DEPLOY-004` `/r/registry.json` endpointinde status, content-type ve minimum item sayısını doğrula.
- [ ] `P17-DEPLOY-005` Theme, utils, Button, Dialog ve Navbar registry payloadlarını production üzerinden doğrula.
- [ ] `P17-DEPLOY-006` Production namespace ile gerçek temiz projeye bir Button kur.
- [ ] `P17-DEPLOY-007` Vercel deployment SHA ile master release SHA'nın aynı olduğunu doğrula.
- [ ] `P17-DEPLOY-008` Production smoke başarısızsa npm publish job'unu başlatma.

### 17.3 Stable npm ve GitHub Release

- [x] `P17-PUBLISH-001` Master release SHA üzerinde `package.json` versionının tam `3.0.0` olduğunu doğrula.
- [x] `P17-PUBLISH-002` Changelog'daki `Unreleased` ifadesini release tarihiyle değiştir.
- [ ] `P17-PUBLISH-003` Release workflow'u önce publish kapalı artifact-review modunda çalıştır.
- [x] `P17-PUBLISH-004` Tarball file list, size, declaration, checksum ve release notes artifactlarını onayla.
- [ ] `P17-PUBLISH-005` Protected environment approval ile `poyraz-ui@3.0.0` npm publish job'unu çalıştır.
- [ ] `P17-PUBLISH-006` Npm `latest` etiketinin tam `3.0.0` olduğunu doğrula.
- [ ] `P17-PUBLISH-007` Npm `legacy-v2` etiketinin son `2.1.x` sürümünü gösterdiğini doğrula.
- [ ] `P17-PUBLISH-008` Npm `next` etiketini koruma veya kaldırma kararını release notunda uygula.
- [ ] `P17-PUBLISH-009` Temiz projede `pnpm add poyraz-ui@3.0.0` install/typecheck/build smoke yap.
- [ ] `P17-PUBLISH-010` `v3.0.0` immutable git tag'ini master release SHA üzerinde oluştur.
- [ ] `P17-PUBLISH-011` GitHub Release'i npm tarball metadata, registry artifact ve checksumlarla yayınla.
- [ ] `P17-PUBLISH-012` Npm, GitHub Release, Vercel docs ve registry version bilgilerinin aynı olduğunu doğrula.

### 17.4 Eski stable checklist kapanışı

- [x] `P17-R-001` Faz 13 `R-001`–`R-005` maddelerini release kanıt linkleriyle işaretle.
- [ ] `P17-R-002` Faz 13 `R-006`–`R-009` maddelerini tag/npm/Vercel kanıtlarıyla işaretle.
- [x] `P17-R-003` Faz 13 `R-010` ve `R-011` maddelerini docs ve temiz install kanıtıyla işaretle.
- [ ] `P17-R-004` Npm ve production registry post-release smoke geçince `R-012` maddesini işaretle.
- [ ] `P17-R-005` `release.config.json` stable milestone durumunu `candidate` → `complete` yap.
- [ ] `P17-R-006` Roadmap release durumunu ve gerçek yayın tarihini güncelle.

### Rollback sınırı

- Npm'e yayınlanan `3.0.0` versionı silinmez veya aynı versionla tekrar yayınlanmaz.
- Kritik package hatasında `latest` geçici olarak son güvenli sürüme alınır ve `3.0.1` hazırlanır.
- Vercel hatasında önceki deployment rollback edilir; registry payload ve npm package
  version eşleşme notu status/release kanalında yayınlanır.
- Hatalı git tag yeniden kullanılmaz; düzeltme patch version ile yapılır.

### Çıkış kriteri

- `master`, Vercel production, npm `poyraz-ui@3.0.0` ve `v3.0.0` GitHub tag aynı reviewed source commit'ine bağlı olmalı.
- Npm `latest` V3'ü, `legacy-v2` son V2'yi göstermeli.
- Production package install ve registry install smoke testleri geçmeli.
- Faz 13 stable operasyon checklist'i tamamen kapanmalı.

### Faz 17 local stable release commit kanıtı

- `package.json` versionı `3.0.0` yapıldı; `CHANGELOG.md` stable tarihi `2026-07-13`
  olarak güncellendi.
- `pnpm build:lib`, `pnpm build`, `pnpm release:artifacts -- --version=3.0.0 --channel=stable`,
  `pnpm release:tarball-smoke -- --tarball release-artifacts/npm/*.tgz`,
  `pnpm test:phase13`, `pnpm test:phase14`, `pnpm release:preflight -- --version=3.0.0 --channel=stable --allow-dirty`,
  `pnpm test:package-exports` ve `pnpm fixture:clean-install` geçti.
- Üretilen stable tarball `poyraz-ui-3.0.0.tgz`; temiz Next.js ve Vite consumer
  install/typecheck/production build smoke başarılı.
- Açık kalan maddeler yalnızca dış sistem gerektiren operasyonlardır: `v3 → master` PR/merge,
  Vercel production deploy smoke, protected npm publish, dist-tag doğrulama, immutable tag ve
  GitHub Release.

---

## Faz 18 — V3 sonrası stabilizasyon ve API-kırmayan tasarım backlog'u

### Amaç

Major release'i yeni görsel taleplerle geciktirmeden, yayın sonrası geri bildirimleri
semver uyumlu şekilde ele almak.

### Sürüm politikası

- `3.0.x`: kurulum, declaration, accessibility, regression, docs ve kritik styling fixleri.
- `3.1.x`: mevcut kullanım biçimini bozmayan yeni opt-in variant, effect ve componentler.
- Public prop kaldırma, yeniden adlandırma veya default behavior kırılması yeni major olmadan yapılmaz.
- API aynı kalsa bile layout ölçüsü veya varsayılan görünümü ciddi değiştiren işler visual
  breaking change olarak değerlendirilir; release notu ve visual diff gerektirir.

### Yayın sonrası minimum görevler

Faz 18 release'i bekletmez. Aşağıdaki maddeler `3.0.0` yayınlandıktan sonra takip edilir;
tasarım polish'i ve yeni variant fikirleri `3.1.0+` backlog'una taşınır.

### Yayın öncesi Faz 18 kararı

- [x] `P18-GATE-001` Faz 18 kapsamı `3.0.0` deploy/npm publish için blocker değildir.
- [x] `P18-GATE-002` `package.json`, changelog ve stable release gate'leri Faz 17 release
      commit'inde tamamlandı.
- [x] `P18-GATE-003` Yeni component, yeni variant, animasyon ve salt görsel polish işleri
      `3.1.0+` backlog'una ertelendi.
- [x] `P18-GATE-004` `3.0.1` kapsamı yalnızca critical install, type, build, accessibility,
      docs ve production regression fixleriyle sınırlandı.
- [x] `P18-GATE-005` Yayın öncesi yapılacak kalan işler yalnızca dış operasyonlardır:
      `v3 → master` merge, Vercel production smoke, protected npm publish, dist-tag/tag/GitHub
      Release doğrulaması.

### Yayın sonrası takip listesi

- [ ] `P18-001` İlk 72 saat npm install, Vercel docs ve production registry smoke sonuçlarını izle.
- [ ] `P18-002` Critical install/type/build/accessibility hatalarını `3.0.1` patch kapsamına al.
- [ ] `P18-003` Npm package ve source registry geri bildirimlerini ayrı etiketlerle sınıflandır.
- [ ] `P18-004` Yeni component, yeni variant ve salt görsel polish taleplerini `3.1.0` backlog'una taşı.
- [ ] `P18-005` Public API kıran talep gelirse patch/minor'a alma; sonraki major için karar kaydı aç.
- [ ] `P18-006` Post-release smoke temiz kalırsa `3.0.0` kapanış notunu yayınla.

---

## 9. Riskler ve önlemler

| Risk                                              | Etki        | Önlem                                                                                |
| ------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------ |
| Registry ve npm package aynı anda kafa karıştırır | Yüksek      | İki resmi kurulum yolunu kullanım amacıyla ayır; aynı source/API contractını test et |
| Glass yüzey düşük kontrast üretir                 | Yüksek      | Solid fallback, contrast testleri, opak içerik yüzeyi                                |
| Blur düşük cihazlarda performansı düşürür         | Orta/Yüksek | Blur budget, nested blur sınırı, sabit blur ve transform-only animation              |
| Çok fazla variant API'yi şişirir                  | Orta        | Variant eklemek için gerçek use-case şartı ve API review                             |
| Registry item dependency cycle oluşur             | Yüksek      | CI graph validation                                                                  |
| Docs ve registry ayrışır                          | Yüksek      | Navigation/API bilgisini registry metadata'dan üret                                  |
| V2 consumer migrationı zorlaşır                   | Yüksek      | Component bazlı migration, mapping tablosu, legacy docs                              |
| Radix portal theme tokenlarını kaybeder           | Orta        | Portal fixture testleri, theme tokenlarının root scope'ta bulunması                  |
| Custom CLI bakım yükü yaratır                     | Yüksek      | Shadcn registry/CLI'ı temel al; Poyraz CLI'ı ince orchestration katmanı tut          |
| Her dosyaya `use client` eklenir                  | Orta        | Registry kaynaklarında client sınırını dosya bazında belirle                         |
| Tasarım sadece dashboard demosunda iyi görünür    | Yüksek      | Form, table, long content ve plain app shell senaryolarında test et                  |

---

## 10. Önceliklendirilmiş release kapanış dilimi

Aşağıdaki sıra V3 major release için uygulanacak son çalışma dilimidir:

1. Faz 14: npm V3 + source registry dağıtım sözleşmesini düzelt.
2. Faz 15: lockfile, clean fixture, declaration, accessibility ve public API blocker'larını kapat.
3. Faz 15: eski `P1-*`, `P4-030` ve `P5-INPUT-05` checklistlerini gerçek kanıtla tamamla.
4. Faz 16: npm tarball'ı temiz Next ve Vite consumerlarda doğrula.
5. Faz 16: `3.0.0-rc.1` paketini `next` etiketiyle kısa smoke sürecinden geçir.
6. Faz 17: `v3 → master` PR required checklerini geçir ve merge et.
7. Faz 17: Vercel production docs/registry deploy'unu doğrula.
8. Faz 17: `poyraz-ui@3.0.0` paketini npm `latest` olarak yayınla.
9. Faz 17: GitHub Release/tag, dist-tag ve post-release smoke kanıtlarını tamamla.
10. Faz 18: API-kırmayan görsel ve yeni variant işlerini release sonrasına taşı.

Bu çalışma diliminde yeni component veya salt görsel variant eklenmemelidir. Stable release'i
yalnızca install, package contract, type, accessibility, API, CI veya production blocker'ı
durdurabilir.

---

## 11. Definition of Done

Bir component yalnızca JSX'i yeniden stillendirildiğinde tamamlanmış sayılmaz. Her v3 component için aşağıdaki maddelerin tamamı gerekir:

- [ ] Npm public API'de yer alıyorsa doğru package exportundan import ediliyor.
- [ ] Npm tarball consumer testinde typecheck ve build geçiyor.
- [ ] Registry item kaydı var.
- [ ] Dependency metadata eksiksiz.
- [ ] Clean consumer projeye kuruluyor.
- [ ] Consumer project typecheck geçiyor.
- [ ] Consumer production build geçiyor.
- [ ] Public props ve anatomy belgelenmiş.
- [ ] `data-slot` değerleri mevcut.
- [ ] `className` override çalışıyor.
- [ ] Variant recipe gerekiyorsa export ediliyor.
- [ ] Sabit palette renkleri yok.
- [ ] Light theme görsel testi var.
- [ ] Dark theme görsel testi var.
- [ ] Glass variant varsa en az iki background testinde geçiyor.
- [ ] Keyboard davranışı test edilmiş.
- [ ] Focus-visible görünür.
- [ ] Disabled/invalid/loading gibi ilgili state'ler test edilmiş.
- [ ] Reduced-motion davranışı test edilmiş.
- [ ] Docs sayfası güncel.
- [ ] V2 migration notu mevcut.
- [ ] Registry metadata ile docs birbiriyle uyumlu.

---

## 12. Başarı ölçütleri

V3 başarılı kabul edilmek için:

- `poyraz-ui@3.0.0` npm registry üzerinden temiz Next ve Vite projelerine kurulabilmeli.
- Root ve desteklenen subpath package importları ESM, CJS ve TypeScript'te çözülebilmeli.
- Npm `latest` V3'ü, `legacy-v2` son V2'yi göstermeli.
- Bir kullanıcı yalnızca istediği componenti kendi projesine kurabilmeli.
- Kurulan componentin görünümünü package patch/fork yapmadan değiştirebilmeli.
- Brand kırmızı palette light ve dark temada tanınabilir kalmalı.
- Yeni design language form, navigation, overlay, table ve dashboard kullanımında tutarlı görünmeli.
- Glass efekt desteklenmeyen veya düşük performanslı ortamda component kullanılabilir kalmalı.
- Registry item'larının tamamı temiz fixture testlerinden geçmeli.
- Critical accessibility ihlali bulunmamalı.
- V2 kullanıcısı component bazında kontrollü migration yapabilmeli.
- Docs, registry metadata ve gerçek source arasında manuel drift minimuma inmeli.

---

## 13. Resmi teknik referanslar

- [shadcn/ui — Registry Introduction](https://ui.shadcn.com/docs/registry)
- [shadcn/ui — Registry Getting Started](https://ui.shadcn.com/docs/registry/getting-started)
- [shadcn/ui — Registry JSON Schema](https://ui.shadcn.com/docs/registry/registry-json)
- [shadcn/ui — CLI](https://ui.shadcn.com/docs/cli)
- [shadcn/ui — components.json](https://ui.shadcn.com/docs/components-json)
- [Radix Primitives — Introduction](https://www.radix-ui.com/primitives/docs/overview/introduction)
- [Radix Primitives — Styling](https://www.radix-ui.com/primitives/docs/guides/styling)

---

## 14. Son karar özeti

Poyraz UI v3 için onaylanan temel kararlar:

1. `poyraz-ui@3.0.0` npm runtime package olarak yayınlanacak ve npm `latest` V3'e taşınacak.
2. Source registry, npm paketinin yerine geçmeyen ikinci resmi dağıtım kanalı olacak.
3. Npm package ve registry aynı canonical component source ve public API sözleşmesini kullanacak.
4. Shadcn registry şeması ve kurulum akışı kullanılacak.
5. Radix davranış ve accessibility primitive'i olarak korunacak.
6. Registry yolunda component kodunun sahibi consumer olacak.
7. Mevcut kırmızı brand palette korunacak.
8. Yeni görsel dil `Soft + Surface + Glass` katmanları üzerine kurulacak.
9. Glass yalnızca uygun yüzeylerde kullanılacak; her componentin default'u olmayacak.
10. Büyük organismler registry blocklarına dönüştürülecek.
11. Docs, npm exports ve registry metadata ortak source'a yaklaştırılacak.
12. V2, `legacy-v2` etiketi ve migration dokümanıyla erişilebilir kalacak.
13. Stable release öncesinde npm tarball install, registry install, accessibility, visual regression ve fixture build testleri zorunlu olacak.
14. Major release scope'u dondurulacak; API-kırmayan tasarım refinements Faz 18'e bırakılacak.
