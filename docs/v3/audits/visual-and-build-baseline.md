# V2 Gorsel ve Build Baseline

## Gorsel artifactlar

Docs Introduction (`/docs`) sayfasi light/dark ve desktop/mobile kombinasyonlarinda kaydedildi.

| Tema | Viewport | Artifact | Boyut |
| --- | --- | --- | ---: |
| Light | 1440 x 1100 | [`v2-docs-light-desktop.png`](../baselines/v2-docs-light-desktop.png) | 173186 byte |
| Dark | 1440 x 1100 | [`v2-docs-dark-desktop.png`](../baselines/v2-docs-dark-desktop.png) | 173488 byte |
| Light | 390 x 844 | [`v2-docs-light-mobile.png`](../baselines/v2-docs-light-mobile.png) | 74212 byte |
| Dark | 390 x 844 | [`v2-docs-dark-mobile.png`](../baselines/v2-docs-dark-mobile.png) | 72936 byte |

Bu dort dosya v2 tasariminin tarihsel referansidir; v3 pixel-parity hedefi degildir. V3 visual regression suite'i kendi approved snapshot setini olusturur. Bu baseline'in amaci degisen layout, docs navigation ve theme davranisini yan yana karsilastirabilmektir.

Baseline'da gozlenen ayirt edici v2 kararlar:

- Light temada beyaz/Slate canvas, keskin ince border ve golgesiz kartlar.
- Dark temada opak lacivert canvas ve yuksek kontrastli metin.
- Desktop'ta kalici sol docs sidebar; mobile'da hamburger ve sidebar'in gizlenmesi.
- `rounded-sm`, uppercase micro-label ve kirmizi accent.
- Introduction metni eski brutalist/no-shadow tasarim felsefesini acikca anlatiyor; v3 docs ile guncellenmesi gereken bir content baseline'i de sagliyor.

## Library build baseline

`pnpm build:lib` baseline ortaminda basarili tamamlandi.

| ESM entry | tsup raporu | Post-build dosya boyutu |
| --- | ---: | ---: |
| root | 4.11 KB | 4218 byte |
| atoms | 707 B | 721 byte |
| molecules | 2.11 KB | 2173 byte |
| organisms | 1.35 KB | 1398 byte |
| themes | 4.90 KB | 5044 byte |

Post-build dosyalarinin 14 byte daha buyuk olmasi `tsup.config.ts` tarafindan eklenen `\"use client\";\n` prefix'idir. Tum dist snapshot'i 36 dosya ve 747740 byte'tir; buna ESM, CJS, declaration ve ortak chunk'lar dahildir.

## Docs production build baseline

`pnpm build` ayni ortamda basarili tamamlandi:

- Library build: PASS.
- Next.js production build: PASS.
- Uretilen static route: 57.
- `.next` snapshot: 2526 dosya / 108041451 byte.

`.next` toplami browser bundle boyutu olarak yorumlanmaz; cache ve framework build metadata'sini de icerir. V3 performance budget'i registry item kaynak boyutu, docs route chunk'i ve runtime behavior bazinda ayrica tanimlanmalidir.

Ham, makine-okunur olmayan CI ozeti [`v2-build-summary.txt`](../baselines/v2-build-summary.txt) dosyasinda saklanir.

## Yeniden uretme

```bash
pnpm build:lib
node scripts/audit-v2-build-output.mjs

pnpm build
node scripts/audit-v2-build-output.mjs --json
```

Build scripti mevcut `dist` ve `.next` dizinlerini salt-okunur tarar; build baslatmaz ve artifact yazmaz.

