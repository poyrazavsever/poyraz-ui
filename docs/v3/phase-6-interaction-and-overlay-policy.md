# Faz 6 interaction ve overlay politikası

Bu belge floating, overlay ve disclosure bileşenlerinin ortak davranış sözleşmesidir.

## Floating yüzeyler

- `surface`: `solid`, `soft`, `glass`.
- `radius`: `none`, `sm`, `md`, `lg`, `xl`.
- Varsayılan collision padding `8px`, varsayılan side offset `6px`.
- Radix `transform-origin` değişkeni `--poyraz-floating-transform-origin` üzerinden kullanılır.
- Side slide mesafesi `--poyraz-floating-slide-distance` tokenıdır.
- Open/closed hareketi fade + `0.98` scale + side-aware slide bileşimidir.
- Reduced motion altında scale ve slide kaldırılır; yalnızca kısa fade kalır.
- Portal içeriği theme tokenlarını document seviyesindeki `.dark` veya `data-poyraz-theme` selectoründen alır.

Dropdown `interaction="click"` ile açılır. `interaction="hover"` yalnızca mouse pointer için hover davranışı ekler; touch ve klavye Radix click/keyboard davranışını korur. Trigger–content geçişinde `closeDelay` grace period kullanılır.

## Item anatomisi

Dropdown, Select, Autocomplete ve Command Palette şu yoğunlukları paylaşır: `sm`, `md`, `lg`. Item; text-only, leading icon, media, title + description ve trailing action/shortcut biçimlerinde kurulabilir. Focus/highlight, selected ve disabled durumları semantic tokenlarla gösterilir.

## Overlay politikası

- `overlayTone`: `dim`, `soft`, `glass`.
- İçerik `surface`: `solid`, `soft`, `glass`.
- Light ve dark opaklıkları theme içindeki `overlay`/`overlay-light` semantic tokenlarından gelir.
- Dialog, Modal ve Command Palette `mobile="floating" | "fullscreen"` seçeneği sunar.
- Sheet side-aware CSS motion kullanır. Vaul Drawer gesture transformuna ek CSS transform animation uygulanmaz.
- Dialog tabanlı bileşenlerde initial focus, focus trap, Escape, return focus, outside interaction ve body scroll lock Radix Dialog davranışıdır. Tüketici `onOpenAutoFocus`, `onCloseAutoFocus`, `onEscapeKeyDown`, `onPointerDownOutside` ve `onInteractOutside` eventleriyle politikayı özelleştirebilir.
- Nested overlaylerde floating katman `z-50`, submenu `z-[60]`; uygulama özel katmanları z-index tokenlarına göre yükseltilir.

## Disclosure ve navigation

- Accordion yüksekliği `--radix-accordion-content-height` ile animasyonlanır; trigger ikonu open state’te `180deg` döner.
- Tabs `line`, `soft`, `glass` list yüzeylerini sunar. Active indicator pseudo-element olduğu için layout shift üretmez.
- Breadcrumb separator dekoratiftir; collapsed ellipsis `More breadcrumb items` accessible name taşır.
- Pagination previous/next kontrolü açık accessible name taşır; dar ekranda listeler yatay scroll kullanır.
