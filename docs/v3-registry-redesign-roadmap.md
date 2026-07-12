# Poyraz UI v3 — Registry-First Yeniden Tasarım ve Geçiş Yol Haritası

> Durum: Planlama  
> Mevcut sürüm: `2.1.0`  
> Hedef sürüm: `3.0.0`  
> Hedef tasarım dili: **Poyraz Soft Glass**  
> Hedef dağıtım modeli: **shadcn uyumlu source registry + kullanıcıya ait component kodu**

---

## 1. Belgenin amacı

Bu belge Poyraz UI'ın mevcut paket tabanlı component library yapısından, kaynak kodun consumer projeye kopyalandığı ve proje tarafından sahiplenildiği registry-first bir tasarım sistemine geçişini tanımlar.

Plan yalnızca görsel bir tema değişimini kapsamaz. Aşağıdaki dört alan birlikte ele alınır:

1. Component dağıtım modelinin değiştirilmesi.
2. Tasarım tokenlarının yeniden modellenmesi.
3. Component API ve composition standartlarının güçlendirilmesi.
4. Yeni minimal, soft, hafif rounded ve glass yüzeyli tasarım dilinin uygulanması.

Bu değişiklikler dağıtım biçimini, varsayılan görünümü ve bazı public API kararlarını etkilediği için çalışma `v3.0.0` ana sürümü olarak planlanmalıdır.

---

## 2. Yönetici özeti ve temel karar

### 2.1 Önerilen ana yön

Poyraz UI v3 için önerilen model:

```text
Radix Primitives
       ↓
Davranış + erişilebilirlik + state attribute'ları
       ↓
Poyraz UI registry kaynakları
       ↓
shadcn CLI / Poyraz registry namespace
       ↓
Consumer projesindeki components/ui/*.tsx
       ↓
Kodun sahibi consumer; görünüm tamamen değiştirilebilir
```

Sıfırdan özel bir dosya kopyalama motoru yazmak yerine resmi shadcn registry şeması kullanılmalıdır. Poyraz UI'ın kendi CLI'ı, registry kurulumunu kolaylaştıran ince bir başlangıç katmanı olabilir; fakat bağımlılık çözme, registry item doğrulama ve dosya kurma davranışını yeniden icat etmemelidir.

### 2.2 Neden registry-first?

- Kullanıcı component kaynak kodunu doğrudan kendi `components/ui` dizininde görür.
- Kullanıcı `className`, CVA recipe, CSS variable, markup ve Radix parçalarını değiştirebilir.
- Kullanıcı yalnızca ihtiyaç duyduğu componentleri ve bağımlılıkları kurar.
- Componentler merkezi npm runtime paketine sıkı biçimde bağlı kalmaz.
- Framework'e özel örnekler ayrı registry item'ları olarak dağıtılabilir.
- Tema, hook, utility, component ve page block aynı dağıtım sistemiyle kurulabilir.
- Registry dependency graph sayesinde `date-picker` kurulurken `button`, `calendar` ve `popover` otomatik çözülebilir.

### 2.3 Önerilen ürün konumlandırması

Poyraz UI v3 şu şekilde tanımlanmalıdır:

> Poyraz UI, Radix tabanlı erişilebilir davranışları; soft, modern ve glass destekli bir görsel sistemle birleştiren, kaynak koduna sahip olduğunuz açık bir React component registry'sidir.

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

- Component kaynakları consumer projesine kurulmak yerine npm runtime üzerinden tüketiliyor.
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
- Component dağıtımı package import yerine registry install modelini birincil yol yapacak.
- Atoms/molecules/organisms package entry point'leri v3'ün ana consumer API'si olmayacak.
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

| İçerik | Registry türü | Örnek |
| --- | --- | --- |
| Temel UI component | `registry:ui` | button, input, dialog |
| Ortak utility | `registry:lib` | utils/cn |
| Hook | `registry:hook` | use-media-query |
| Tema/token kurulumu | `registry:style` veya uygun registry item | poyraz-theme |
| Birleşik ürün parçası | `registry:block` | dashboard-shell |
| Tekil uygulama componenti | `registry:component` | theme-toggle |

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
backdrop-filter:
  blur(var(--glass-blur))
  saturate(var(--glass-saturation));
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
- Registry-first kararı onaylanmış olmalı.
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
- [ ] `P1-021` Local URL üzerinden temiz Next.js fixture'a Button kur.
- [ ] `P1-022` Local URL üzerinden temiz Vite fixture'a Button kur.
- [ ] `P1-023` Kurulum sonucunda dosyanın `components/ui/button.tsx` altına geldiğini doğrula.
- [ ] `P1-024` Kurulum sonucunda dependency'lerin package manifestine doğru eklendiğini doğrula.
- [ ] `P1-025` `--dry-run`, `--diff` ve overwrite davranışlarını manuel test et.
- [x] `P1-026` Namespace örneğini `components.json` dokümantasyonuna ekle.
- [ ] `P1-027` GitHub repository item address ile kurulum akışını test et.
- [x] `P1-028` Registry build çıktısının elle düzenlenmemesi kuralını CONTRIBUTING'e ekle.

> **11 Temmuz 2026 doğrulama notu:** Registry source/build/schema/file/graph
> hattı tamamlandı. Üretilen Button ve Utils kaynakları temiz bir Next.js
> fixture içinde typecheck ve production build'den geçti. P1-021–P1-025 yerel
> HTTP registry erişimi çalışma ortamının processler arası localhost iznine,
> P1-022 ayrıca Vite dependency indirmesine, P1-027 ise registry değişikliklerinin
> GitHub'a push edilmesine bağlı olduğu için açık tutuldu. Bu maddeler gerçek
> shadcn install kanıtı üretilmeden tamamlanmış sayılmayacaktır.

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
- Kurulum npm runtime component importuna ihtiyaç duymamalı.

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

| Variant | Kullanım |
| --- | --- |
| `default` | Brand kırmızı primary CTA |
| `secondary` | Nötr, soft ve daha düşük öncelikli action |
| `soft` | Brand tint yüzeyli sakin action |
| `outline` | Şeffaf zemin, belirgin ama soft border |
| `glass` | Glass container veya görsel arka plan üzerinde action |
| `ghost` | Toolbar ve düşük öncelikli action |
| `destructive` | Riskli action |
| `link` | Metin içi navigation/action |

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
- [ ] `P4-030` Button pilotu için tasarım onayı al.

### Faz 4 doğrulama kaydı — 2026-07-11

- `pnpm test:button`: 8 variant, 7 size, 8 radius, 4 effect ve icon-only accessible-name sözleşmesi geçti.
- Temiz geçici fixture, üretilmiş `public/r/button.json` ve `poyraz-utils.json` dosyalarından kuruldu; consumer usage typecheck'i geçti.
- `pnpm registry:build` ve `pnpm registry:check` geçti; Button item kod, dependency ve effect CSS metadata'sını birlikte yayımlıyor.
- `pnpm theme:check`, `pnpm typecheck`, `pnpm build:lib` ve production `pnpm build` geçti.
- Light/dark production baseline'ları `docs/v3/baselines/v3-button-light.png` ve `docs/v3/baselines/v3-button-dark.png` altında kaydedildi. Açık ve koyu gradient glass senaryoları aynı matriste doğrulandı.
- `P4-030`, repository sahibi görsel tasarım onayı verene kadar bilinçli olarak açık bırakıldı.

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
- [ ] `P5-INPUT-05` Autofill background davranışını browser bazında test et.

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
- `P5-INPUT-05`, gerçek Safari ve Firefox autofill senaryoları manuel tarayıcı matrisinde doğrulanana kadar bilinçli olarak açık bırakıldı.

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
- [x] `P10-022` README'yi registry-first quick start ile güncelle.
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

- [ ] `P11-001` Format scripti ekle.
- [ ] `P11-002` Lint scripti ekle.
- [ ] `P11-003` Bağımsız typecheck scripti ekle.
- [ ] `P11-004` Registry schema validation scripti ekle.
- [ ] `P11-005` Registry dependency cycle testi ekle.
- [ ] `P11-006` Broken registry file path testi ekle.
- [ ] `P11-007` Duplicate item name testi ekle.
- [ ] `P11-008` Unit test runner kur.
- [ ] `P11-009` DOM interaction test altyapısı kur.
- [ ] `P11-010` Axe tabanlı accessibility kontrolü ekle.
- [ ] `P11-011` Playwright browser test altyapısı kur.
- [ ] `P11-012` Light/dark visual regression projeleri oluştur.
- [ ] `P11-013` Mobile/desktop visual viewportları oluştur.
- [ ] `P11-014` Glass fallback test browser/context'i oluştur.
- [ ] `P11-015` Reduced-motion test context'i oluştur.
- [ ] `P11-016` Keyboard-only interaction suite oluştur.
- [ ] `P11-017` Focus trap/return focus suite oluştur.
- [ ] `P11-018` Next.js clean fixture oluştur.
- [ ] `P11-019` Vite clean fixture oluştur.
- [ ] `P11-020` Her registry item için install smoke test tasarla.
- [ ] `P11-021` Kurulan fixture için typecheck çalıştır.
- [ ] `P11-022` Kurulan fixture için production build çalıştır.
- [ ] `P11-023` Registry output değiştiğinde generated diff'i CI artifact yap.
- [ ] `P11-024` Bundle/runtime dependency bütçesi belirle.
- [ ] `P11-025` Blur-heavy demo için performans profili ekle.
- [ ] `P11-026` Pull request required-check listesini tanımla.

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

- [ ] `P12-001` V2 import kullanan örnek consumer fixture oluştur.
- [ ] `P12-002` V2 component → V3 registry item mapping tablosu oluştur.
- [ ] `P12-003` V2 prop → V3 prop mapping tablosu oluştur.
- [ ] `P12-004` Kaldırılan/değişen variant mapping tablosu oluştur.
- [ ] `P12-005` Eski `preset.css` token → yeni token mapping tablosu oluştur.
- [ ] `P12-006` Eski theme object entegrasyonu için migration bölümü yaz.
- [ ] `P12-007` `reactive-switcher` kullanan projeler için provider-independent CSS migration örneği yaz.
- [ ] `P12-008` Next Themes örneğini framework-specific recipe olarak ayır.
- [ ] `P12-009` İlk migration adımı olarak theme/utils registry item kurulumunu tanımla.
- [ ] `P12-010` İkinci adım olarak Button/Input/Card geçişini tanımla.
- [ ] `P12-011` Üçüncü adım olarak Radix molecule geçişini tanımla.
- [ ] `P12-012` Dördüncü adım olarak organism/block geçişini tanımla.
- [ ] `P12-013` Eski npm importları kaldığında tespit edecek `rg` komutlarını guide'a ekle.
- [ ] `P12-014` İsteğe bağlı codemod fizibilitesini değerlendir.
- [ ] `P12-015` Codemod yalnızca güvenli import dönüşümlerini yapacaksa uygula.
- [ ] `P12-016` Consumer'ın özelleştirilmiş v2 componentlerini overwrite etmeme politikasını yaz.
- [ ] `P12-017` Theme token migration için otomatik kontrol scripti değerlendir.
- [ ] `P12-018` Legacy v2 docs ve package desteğinin bitiş tarihini yayınla.
- [ ] `P12-019` Migration fixture'ını final v3 build ile doğrula.
- [ ] `P12-020` Rollback adımlarını guide'a ekle.

### Önerilen compatibility politikası

- `v2.1.x`: yalnızca kritik bug ve güvenlik düzeltmeleri.
- V3 geliştirme süresince npm `latest`: v2 stable olarak kalır.
- V3 prerelease npm dağıtımı varsa `next` tag'i kullanılır.
- Registry item'ları alpha/beta süresince açıkça prerelease olarak işaretlenir.
- Stable v3 öncesinde V2 importları sessizce farklı görünüme geçirilmez.
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

- [ ] `R-001` Version ve changelog güncelle.
- [ ] `R-002` Registry production build üret.
- [ ] `R-003` Registry schema doğrula.
- [ ] `R-004` Tüm fixture install/build testlerini çalıştır.
- [ ] `R-005` Docs production build çalıştır.
- [ ] `R-006` Release tag oluştur.
- [ ] `R-007` Npm package rolü devam ediyorsa `latest` tag politikasını uygula.
- [ ] `R-008` Registry namespace production config'i yayınla.
- [ ] `R-009` Migration guide ve release notes yayınla.
- [ ] `R-010` Legacy v2 docs linkini görünür tut.
- [ ] `R-011` Kurulum komutlarını gerçek temiz projede son kez doğrula.
- [ ] `R-012` Post-release smoke test yap.

### 13.7 `v3.0.1` — Stabilizasyon penceresi

- Yalnızca kurulum, schema, docs, type ve critical styling düzeltmeleri.
- Yeni API veya yeni variant eklenmez.
- İlk kullanıcı geri bildirimleri kategorize edilir.
- En sık yapılan consumer override'ları v3.1 planına girdi olur.

---

## 9. Riskler ve önlemler

| Risk | Etki | Önlem |
| --- | --- | --- |
| Registry ve npm package aynı anda kafa karıştırır | Yüksek | V3'te primary install yolunu tek ve açık tut; legacy'yi ayrı etiketle |
| Glass yüzey düşük kontrast üretir | Yüksek | Solid fallback, contrast testleri, opak içerik yüzeyi |
| Blur düşük cihazlarda performansı düşürür | Orta/Yüksek | Blur budget, nested blur sınırı, sabit blur ve transform-only animation |
| Çok fazla variant API'yi şişirir | Orta | Variant eklemek için gerçek use-case şartı ve API review |
| Registry item dependency cycle oluşur | Yüksek | CI graph validation |
| Docs ve registry ayrışır | Yüksek | Navigation/API bilgisini registry metadata'dan üret |
| V2 consumer migrationı zorlaşır | Yüksek | Component bazlı migration, mapping tablosu, legacy docs |
| Radix portal theme tokenlarını kaybeder | Orta | Portal fixture testleri, theme tokenlarının root scope'ta bulunması |
| Custom CLI bakım yükü yaratır | Yüksek | Shadcn registry/CLI'ı temel al; Poyraz CLI'ı ince orchestration katmanı tut |
| Her dosyaya `use client` eklenir | Orta | Registry kaynaklarında client sınırını dosya bazında belirle |
| Tasarım sadece dashboard demosunda iyi görünür | Yüksek | Form, table, long content ve plain app shell senaryolarında test et |

---

## 10. Önceliklendirilmiş ilk çalışma dilimi

Aşağıdaki sıra ilk uygulanabilir milestone'dur:

1. `P0-001`–`P0-008`: mevcut API envanteri.
2. Registry-first ve legacy package ADR'ları.
3. Root ve nested `registry.json` dosyaları.
4. Tek kaynak `cn` utility item'ı.
5. Yeni theme/token item'ı.
6. Light/dark/glass token preview sayfası.
7. Button API ve variant sözleşmesi.
8. Yeni Button implementation.
9. Button registry dependency metadata.
10. Next fixture install ve build.
11. Vite fixture install ve build.
12. Button accessibility ve visual tests.
13. Button docs/playground.
14. `alpha.1` tasarım ve teknik review.

Bu çalışma dilimi tamamlanmadan diğer 40+ component toplu olarak yeniden stillendirilmemelidir. Button pilotunda çıkacak API, token ve registry hataları foundation seviyesinde çözülmelidir.

---

## 11. Definition of Done

Bir component yalnızca JSX'i yeniden stillendirildiğinde tamamlanmış sayılmaz. Her v3 component için aşağıdaki maddelerin tamamı gerekir:

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

Poyraz UI v3 için önerilen temel kararlar:

1. Dağıtım modeli registry-first olacak.
2. Shadcn registry şeması ve kurulum akışı kullanılacak.
3. Radix davranış ve accessibility primitive'i olarak korunacak.
4. Component kodunun sahibi consumer olacak.
5. Mevcut kırmızı brand palette korunacak.
6. Yeni görsel dil `Soft + Surface + Glass` katmanları üzerine kurulacak.
7. Glass yalnızca uygun yüzeylerde kullanılacak; her componentin default'u olmayacak.
8. Button tüm sistemin pilot componenti olacak.
9. Büyük organismler registry blocklarına dönüştürülecek.
10. Docs ve registry metadata tek kaynağa yaklaştırılacak.
11. V2 doğrudan değiştirilmek yerine v3 major sürümle kontrollü migration sunulacak.
12. Stable release öncesinde registry install, accessibility, visual regression ve fixture build testleri zorunlu olacak.
