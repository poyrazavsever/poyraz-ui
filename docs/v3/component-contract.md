# Poyraz UI v3 Component Contract

Bu belge registry üzerinden consumer projesine kopyalanan tüm v3 componentlerin ortak geliştirici sözleşmesidir. Component özelindeki README bu kuralları genişletebilir; kuralları sessizce geçersiz kılamaz.

## Anatomy ve public API

- Root her zaman `data-slot="<component>"` taşır. Alt parçalar kebab-case ile `data-slot="<component>-<part>"` kullanır.
- Görsel seçimler root üzerinde `data-variant` ve `data-size` olarak görünür. Boolean state'ler `data-loading`, `data-invalid` gibi presence attribute olur.
- Consumer `className` değeri CVA çağrısına son argüman olarak verilir: `cn(recipe({ variant, size }), className)`. Böylece consumer utility'leri son sözü söyler.
- CVA recipe `<component>Variants` adıyla, props tipi `<Component>Props` adıyla export edilir. Recipe isimleri semver kapsamındaki public API kabul edilir.
- Variant sözlüğü: `default`, `secondary`, `soft`, `outline`, `glass`, `ghost`, `destructive`, `link`. Componentte anlamsız olan seçenek eklenmez.
- Size sözlüğü: `xs`, `sm`, `default`, `lg`; icon-only kontroller için `icon-sm`, `icon`, `icon-lg`. Özel boyut gerekirse önce bu ölçekle eşleşemediği belgelenir.
- Radius sözlüğü size'dan bağımsızdır: `none`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `full`. Component özelinde farklı bir radius adı üretilmez.

## Composition, ref ve state

- `asChild` yalnızca semantiği consumer'ın seçmesi gereken tek-root action/trigger componentlerinde kullanılır. Radix `Slot` ile uygulanır; birden fazla root veya internal portal üreten componentlere eklenmez.
- React 18 ve 19 desteği sürdüğü müddetçe DOM ref'leri `React.forwardRef` ile aktarılır. Public ref tipi gerçek root elementini göstermelidir.
- Native props mümkün olduğunca aynen aktarılır. Controlled API `value` + `onValueChange`, uncontrolled API `defaultValue` sözleşmesini kullanır; aynı instance'ta ikisi karıştırılmaz.
- Loading sırasında action tekrar tetiklenemez, `aria-busy="true"` olur ve spinner `aria-hidden="true"` taşır. Label DOM'da kalır; böylece accessible name ve genişlik korunur.
- Invalid state `aria-invalid` ile ifade edilir ve gerekiyorsa `aria-describedby` ile hata metnine bağlanır. Renk tek geri bildirim kanalı olamaz.
- Icon-only control görünür tooltipten bağımsız olarak `aria-label` veya görünmez metin ile accessible name taşımalıdır.
- Focus yalnızca `:focus-visible` ile, semantic `ring` tokenı kullanılarak gösterilir. `outline: none` ancak eşdeğer görünür ring aynı rule içinde varsa kullanılabilir.

## Overlay, direction ve client boundary

- Portal kullanan componentler mümkünse `container?: HTMLElement | null` override'ı sunar; varsayılan Radix portal davranışıdır.
- Modal overlay scroll lock primitive'in yerleşik davranışına bırakılır. Bir component global `body` stilini kendi başına kalıcı değiştiremez; nested modal kapanış sırası test edilir.
- Yön bildiren iconlar `rtl:rotate-180` veya logical-direction recipe kullanır. `left/right` isimli layout props yerine `start/end` tercih edilir.
- State, effect, event listener veya browser API kullanmayan registry componenti server-compatible kalır. Gerektiğinde `"use client"` yalnızca en dar dosyaya eklenir ve component README metadata'sında belirtilir.

## Registry dependency checklist

- Runtime package dependency'leri tam sürüm aralığıyla `dependencies` alanında yer alır.
- Başka registry itemları `registryDependencies` ile bildirilir; source importları bu graph ile birebir eşleşir.
- Her file için `path`, `type` ve consumer hedefi `target` doğrulanır.
- Theme utility veya animation kullanan component theme registry itemını dependency olarak taşır.
- `pnpm registry:build`, `pnpm registry:check` ve temiz fixture typecheck'i geçmeden item yayınlanmaz.

## Component acceptance checklist

- Controlled ve uncontrolled başlangıç, değişim ve reset davranışları test edildi.
- Loading, disabled, invalid, focus-visible ve reduced-motion davranışları doğrulandı.
- Keyboard navigation ve accessible name doğrulandı.
- LTR/RTL yönlü icon ve spacing kontrol edildi.
- Light, dark ve gerekiyorsa glass/fallback zeminlerde görsel kontrol yapıldı.
- Public props, anatomy, dependencies ve client boundary README metadata'sına işlendi.
