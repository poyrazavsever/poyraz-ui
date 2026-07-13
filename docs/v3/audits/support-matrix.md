# V3 Destek Matrisi ve Glass Fallback Politikasi

Durum: Faz 0 urun karari. Bu matris v3 alpha'dan once fixture CI ile uygulanir; test edilmemis kombinasyon destekleniyor olarak belgelenmez.

## Runtime ve toolchain

| Katman            | V3 destek karari                      | CI seviyesi | Not                                                               |
| ----------------- | ------------------------------------- | ----------- | ----------------------------------------------------------------- |
| React             | `18.3+` ve `19.x`                     | Tier 1      | Her iki major icin registry install/typecheck fixture             |
| React DOM         | React ile ayni major                  | Tier 1      | Mixed major desteklenmez                                          |
| TypeScript        | `5.4+`                                | Tier 1      | Registry kaynagi strict mode'da typecheck edilir                  |
| Tailwind CSS      | `4.x`                                 | Tier 1      | `@theme`, CSS-first config ve source detection temel sozlesmedir  |
| Tailwind CSS 3    | Desteklenmez                          | -           | Ayri legacy style item uretilmez                                  |
| Node.js           | Aktif LTS: minimum `20.x`             | Tier 1      | Registry build/CLI; docs build CI ayrica `22.x` ile kosulur       |
| Package managers  | pnpm, npm, yarn, bun                  | Tier 1/2    | pnpm ve npm her PR; yarn/bun release candidate smoke              |
| ESM               | Zorunlu                               | Tier 1      | Registry kaynaklari standart ESM/TSX                              |
| CommonJS consumer | Npm package exportlariyla desteklenir | Tier 1      | CJS entry point ve declaration resolution tarball ile test edilir |

React 18 destegi, kaynakta React 19-only API kullanmama anlamina gelir. React 19 ref iyilestirmeleri kullanilacaksa React 18-compatible `forwardRef` contract'i korunur veya major destek karari ADR ile degistirilir.

## Framework matrisi

| Ortam                                                | Seviye           | Test senaryosu                                                  |
| ---------------------------------------------------- | ---------------- | --------------------------------------------------------------- |
| Next.js App Router, son iki maintained major         | Tier 1           | Server-safe import, client primitive, SSR/hydration, dark theme |
| Vite + React                                         | Tier 1           | Temiz install, Tailwind v4, HMR ve production build             |
| React Router framework mode / Remix-compatible React | Tier 2           | SSR + hydration smoke                                           |
| Next.js Pages Router                                 | Tier 2           | Client render ve production build smoke                         |
| Astro React island                                   | Community/Tier 3 | `client:*` boundary belgelenir; release blocker degil           |
| Gatsby / custom webpack                              | Community/Tier 3 | Standart React + Tailwind v4 ise best-effort                    |
| Create React App                                     | Desteklenmez     | CRA modern hedef degildir                                       |
| React Native                                         | Desteklenmez     | DOM, Tailwind CSS ve Radix bagimliligi nedeniyle kapsam disi    |
| Vue/Svelte/Angular                                   | Desteklenmez     | React registry kaynaklari kapsam disi                           |

Framework-specific kod generic `registry:ui` item'ina girmez. Next Link/Image gibi entegrasyonlar ayri example veya framework block item'i olur.

## Server Component sozlesmesi

- Stateless DOM wrapper'lari ve salt visual componentler server-safe kalir.
- State, effect, browser API veya interactive Radix primitive kullanan dosyada lokal `use client` boundary bulunur.
- Bir client dependency tum block'u otomatik olarak client yapmaz; boundary en kucuk anlamli dosyada tutulur.
- Her server-safe iddiasi Next App Router fixture'inda server componentten import edilerek dogrulanir.
- Registry build'i tum dosyalara global directive eklemez.

## Browser matrisi

| Browser                |                             Minimum | Glass                        | Not                                                            |
| ---------------------- | ----------------------------------: | ---------------------------- | -------------------------------------------------------------- |
| Chrome desktop/Android |                                121+ | Tam                          | Chromium baseline; custom scrollbar mevcut v2 notuyla uyumlu   |
| Edge                   |                                121+ | Tam                          | Chromium                                                       |
| Firefox                |                            128 ESR+ | Tam veya kontrollu fark      | Scrollbar ve filter rendering visual tolerance ile test edilir |
| Safari macOS           |                                 17+ | Tam, `-webkit-` prefix dahil | Blur/compositing ve reduced-transparency smoke                 |
| Safari iOS/iPadOS      |                                 17+ | Tam, performans butcesiyle   | Nested blur sayisi sinirlanir                                  |
| Samsung Internet       |                    Guncel iki major | Progressive                  | Android smoke                                                  |
| WebView                | Yukaridaki engine baseline'ina uyan | Progressive                  | Host engine sorumlulugu                                        |
| IE / legacy EdgeHTML   |                        Desteklenmez | Fallback yok                 | Modern CSS/ESM hedefi                                          |

Minimum surum altinda temel HTML/CSS tesadufen calisabilir; bug fix ve CI garantisi verilmez.

## Glass progressive-enhancement politikasi

Glass, davranis veya okunabilirlik icin zorunlu degildir. Katman sirasi:

1. Her glass component once opak/yarim opak semantic `surface` fallback ile okunabilir olur.
2. Ince semantic border ve shadow, blur olmasa da yuzey sinirini tanimlar.
3. Yalniz `@supports` icinde `backdrop-filter` ve `-webkit-backdrop-filter` etkinlesir.
4. `prefers-reduced-transparency: reduce` destekleniyorsa blur kapatilir ve fallback surface kullanilir.
5. Ayrica dokumante edilen `data-poyraz-transparency=reduced` manuel switch'i ayni fallback'i saglar.
6. `forced-colors: active` durumunda blur, gradient, glow ve transparan border kaldirilir; sistem renkleri ve gorunur outline kullanilir.
7. `prefers-reduced-motion` glass state transition'larini da 1 ms/none seviyesine indirir.
8. Print stylesheet glass'i opak surface'e cevirir.
9. Browser/UA sniffing yapilmaz.

Ornek kontrat:

```css
.poyraz-glass {
  background: var(--surface-glass-fallback);
  border-color: var(--glass-border);
  box-shadow: var(--shadow-sm);
}

@supports ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .poyraz-glass {
    background: var(--glass-background);
    backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
    -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  }
}
```

## Performance sinirlari

- Uzun table/list body varsayilan glass yuzey olmaz.
- Ayni viewport'ta nested blur katmani icin docs benchmark'i ve compositing incelemesi gerekir.
- Mobile'da buyuk full-screen blur, low-performance/reduced-transparency switch'inde kapanir.
- Animation yalniz transform/opacity odakli olur; blur radius animasyonu varsayilan degildir.
- Visual regression, fallback ve enhanced glass modlarini ayri snapshot olarak tutar.

## Destek disi customization beklentileri

- Tailwind olmadan hazir component styling'i.
- CSS variable contract'ini kaldirip build-time Sass/Less theme.
- Radix davranislarini her headless library ile birebir degistirilebilir kilmak.
- Consumer'in degistirdigi source dosyasina otomatik merge garantisi.
- Her browserda pixel-identical blur.

## Release gate

Stable release'te Tier 1 matrisinin tamaminda registry install, typecheck ve production build yesil olmalidir. Tier 2 hatalari belgelenmis workaround yoksa RC blocker; Tier 3 hatalari release blocker degildir.
