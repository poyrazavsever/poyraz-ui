# Button v3

| Metadata | Value |
| --- | --- |
| Registry name | `button` |
| Category | Actions |
| Client boundary | `use client`; loading/asChild click suppression için internal handler kullanır |
| Runtime dependencies | `@radix-ui/react-slot`, `class-variance-authority` |
| Registry dependencies | `@poyraz/poyraz-utils`, `@poyraz/poyraz-theme` |

## Anatomy

- `button`: semantic root veya `asChild` ile consumer root'u.
- `button-content`: native button label/icon akışını ve loading width'ini koruyan wrapper.
- `button-label`: swap target'ı ayrı seçilecek metin parçası.
- `button-icon`: swap target'ı ayrı seçilecek icon parçası.
- `button-spinner`: loading sırasında merkezlenen, screen reader'dan gizli progress görseli.

Root `data-variant`, `data-size`, `data-radius`, `data-effect`, `data-fill-direction`, `data-swap-target` ve gerektiğinde `data-loading` taşır.

## Prop sözleşmesi

- `variant`: `default | secondary | soft | outline | glass | ghost | destructive | link`.
- `size`: `xs | sm | default | lg | icon-sm | icon | icon-lg`.
- `radius`: `none | xs | sm | md | lg | xl | 2xl | full`. Varsayılan `md`; size'dan bağımsızdır ve `className` ile override edilebilir.
- `effect`: `none | shine | fill | swap | border-draw`. Efekt dekoratiftir ve varianttan bağımsızdır.
- `fillDirection`: fill için `right | up`.
- `swapTarget`: swap için `icon | label | both`. Hedefli kullanımda `ButtonIcon` ve `ButtonLabel` tercih edilir.
- `loading`: native controlü disable eder, `asChild` controlüne `aria-disabled` ekler, click'i engeller ve `aria-busy` yayınlar.
- `asChild`: Radix Slot ile tek child'ın semantiğini korur.
- Native button props aktarılır, ref native root'a forward edilir ve native root varsayılan olarak `type="button"` alır.

Loading label'ı DOM ve layout akışında görünmez olarak tutar; spinner absolute konumlanır. Bu nedenle loading geçişinde button genişliği değişmez ve accessible name kaybolmaz.

Icon-only kullanımda `aria-label` veya screen-reader-only metin zorunludur. Disabled ve loading state pointer ve click davranışını kapatır. Focus ring yalnızca `focus-visible` halinde semantic ring tokenıyla görünür. Press feedback hafif scale kullanır. Reduced-motion media query ve `data-poyraz-motion="reduced"` altında translation, scale ve animasyonlar kapatılır.

## V2 → V3 mapping

| V2 | V3 | Not |
| --- | --- | --- |
| `default` | `default` | Uppercase/brutalist stil yerine soft brand CTA |
| `secondary` | `secondary` | Nötr soft surface |
| — | `soft` | Yeni brand tint seçeneği |
| `outline` | `outline` | Sert siyah border yerine semantic brand border |
| — | `glass` | Yeni translucent/fallback-aware seçenek |
| `ghost` | `ghost` | Toolbar ve düşük vurgu |
| `destructive` | `destructive` | Semantic danger tokenları |
| `link` | `link` | Inline action davranışı korunur |
| `sm/default/lg/icon` | Aynı adlar | Ölçek korunur; `xs`, `icon-sm`, `icon-lg` eklenir |

## Görsel doğrulama matrisi

- Docs Button sayfasındaki variant matrisi light ve dark theme'de kontrol edilir.
- Glass örneği hem açık gradient hem koyu görsel benzeri gradient üzerinde aynı anda gösterilir.
- Shine, horizontal/vertical fill, content/icon/label swap ve border draw örnekleri hover ile doğrulanır.
- Browser reduced-motion emülasyonunda elementlerin translate/scale animasyonu çalışmamalıdır.
