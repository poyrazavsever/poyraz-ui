# V2 Token ve Sabit Renk Auditi

## Ozet

Baseline scripti `components/ui`, `src` ve `app` altindaki CSS/TS/TSX dosyalarini taradi.

| Olcum | Sonuc |
| --- | ---: |
| Benzersiz `--poyraz-*` adi | 66 |
| Semantic renk tokeni | 52 |
| Kalici motion tokeni | 6 |
| Animation-local gecici variable | 8 |
| Hex veya sabit Tailwind palette iceren satir | 409 |
| Component kaynaklarindaki satir | 85 |
| Docs/app kaynaklarindaki satir | 174 |
| Token/theme kaynaklarindaki satir | 150 |

`transparent` yapisal bir deger oldugu icin sabit palette sayimina alinmamistir. `black` ve `white`, opacity modifier'lari dahil sayilmistir. Bir satir birden cok sabit utility icerebilir; sayi utility adedi degil kaynak satiri adedidir.

## Token katmanlari

### 52 semantic renk tokeni

| Grup | Tokenlar |
| --- | --- |
| Core | `background`, `foreground` |
| Primary / brand | `primary`, `primary-foreground`, `primary-200`, `primary-600`, `primary-700`, `primary-800`, `primary-900`, `primary-hover`, `primary-active`, `primary-dark`, `primary-muted`, `primary-muted-foreground` |
| Secondary | `secondary`, `secondary-foreground` |
| Muted | `muted`, `muted-foreground` |
| Accent | `accent`, `accent-hover`, `accent-foreground` |
| Destructive | `destructive`, `destructive-foreground`, `destructive-muted`, `destructive-muted-foreground` |
| Border/input | `border`, `border-strong`, `input`, `ring` |
| Overlay | `overlay`, `overlay-light` |
| Placeholder | `placeholder` |
| Inverted | `inverted`, `inverted-foreground` |
| Surface | `surface-50`, `surface-100`, `surface-200` |
| Status | `info*`, `success*`, `warning*`: her grupte base, foreground, border, icon ve solid |

Tablodaki adlarin tamami `--poyraz-` prefix'i ile kullanilir. Mevcut brand kirmizisi korunacak baseline degerleri:

| Rol | Light | Dark |
| --- | --- | --- |
| Primary | `#dc2626` | `#ef4444` |
| Hover | `#b91c1c` | `#dc2626` |
| Active | `#991b1b` | `#b91c1c` |
| Dark | `#7f1d1d` | `#991b1b` |
| Muted | `#fef2f2` | `#1c0a0a` |
| Muted foreground | `#b91c1c` | `#fca5a5` |

### 6 motion tokeni

- Duration: `--poyraz-motion-duration-fast`, `--poyraz-motion-duration-base`, `--poyraz-motion-duration-slow`
- Easing: `--poyraz-motion-ease-in`, `--poyraz-motion-ease-out`, `--poyraz-motion-ease-standard`

### 8 animation-local variable

`enter/exit` icin opacity, scale, translate-x ve translate-y variable'lari `src/preset.css` icindeki keyframe utility mekanizmasina aittir. Tema public API'si olarak ele alinmamalidir.

## Tekrarlanan kaynaklar

52 semantic tokenin her biri uc ayri dosyada, toplam dort kez bulunur:

1. `src/preset.css`: light fallback.
2. `src/themes/index.ts`: light TypeScript theme.
3. `src/themes/index.ts`: dark TypeScript theme.
4. `app/globals.css`: docs dark override.

Baseline'da 52 dark docs degeri ile 52 TypeScript dark theme degeri birebir eslesir. Light fallback'ler de light theme ile eslesir. Bugun drift yoktur; fakat tek degisiklik icin uc dosya duzenleme gerektigi icin drift riski yapisaldir.

Eksik foundation token gruplari:

- Semantic surface rolleri: `surface`, `surface-soft`, `surface-glass`, `surface-elevated`.
- Glass background, border, highlight, blur ve saturation.
- Radius scale.
- Shadow/elevation scale.
- Spacing ve control-height scale.
- Typography size/line-height/weight/letter-spacing rolleri.
- Focus ring width/offset.
- Daha ayrintili motion duration/easing rolleri.

## Component sabit renk matrisi

| Dosya | Satir | Tur | Degerlendirme |
| --- | ---: | --- | --- |
| `atoms/scroll-area.tsx` | 13 | Hex fallback | Semantic var kullaniliyor ama fallback component icinde tekrar ediyor; style item'a tasinmali |
| `atoms/switch.tsx` | 1 | `white/50` | Thumb highlight tokenlanmali |
| `molecules/card-templates.tsx` | 5 | yellow/green/black/white | Rating, trend ve image-overlay rolleri tokenlanmali |
| `molecules/drawer.tsx` | 1 | `black/40` | `overlay` tokeni kullanilmali |
| `molecules/mermaid.tsx` | 22 | 18 hex + 4 palette | En yuksek oncelikli theme bypass; light/dark semantic Mermaid theme uretilmeli |
| `molecules/modal.tsx` | 1 | `black/40` | `overlay` tokeni kullanilmali |
| `molecules/pagination.tsx` | 1 | palette adi | Yalniz comment icinde; runtime ihlali degil |
| `molecules/sheet.tsx` | 1 | `black/40` | `overlay` tokeni kullanilmali |
| `organisms/announcement-bar.tsx` | 3 | blue/emerald/amber + black/white | Status semantic tokenlari zaten var; dogrudan onlara gecilmeli |
| `organisms/footer.tsx` | 1 | slate border | Inverted border rolu eksik |
| `organisms/navbar.tsx` | 3 | white/black | Top-bar highlight, mobile overlay ve drill panel surface tokenlanmali |
| `organisms/sidebar.tsx` | 33 | slate/red/black/white | `dark` varyanti tum semantic theme sistemini bypass ediyor |

Script 85 component satiri raporlar; Pagination comment'i cikarildiginda 84 runtime/style satiri kalir. En buyuk iki kaynak Sidebar (33) ve Mermaid'dir (22); birlikte ihlallerin yaklasik ucte ikisini olusturur.

## Docs/app sabit renkleri

174 docs/app satiri component package'tan ayri ele alinmalidir:

- `app/globals.css` icindeki 50 satir tema tanimidir; ihlal degil, tekrar problemidir.
- Installation ve demo sayfalarindaki renk orneklerinin bir kismi dokumantasyon amaclidir.
- Template/demo kaynaklarindaki palette utility'leri registry block'a donusecekse semantic token migration'i zorunludur.
- Docs chrome ve syntax/demo dekorasyonu component API'siyle ayni release gate'e baglanmamalidir; registry item'a kopyalanan her kaynak baglanmalidir.

## V3 token sahipligi karari

1. Tek bir makine-okunur token kaynagi light/dark degerleri tutar.
2. Registry theme CSS, docs CSS ve gerekiyorsa TypeScript theme object'i bu kaynaktan uretilir.
3. Component kaynaklarinda hex ve numbered Tailwind palette yasaktir.
4. `black/white` yalniz gercek fotograf gradient'i gibi semantik olarak tema disi bir medya katmaninda, acik gerekceyle kullanilabilir; genel overlay/surface/text icin token zorunludur.
5. Brand palette degismez; componentler palette step yerine role (`primary`, `primary-hover`, `primary-muted`) tuketir.
6. Glass, fallback opak surface olmadan kullanilmaz.

## Yeniden uretme

```bash
node scripts/audit-v2-source.mjs --json \
  | jq '.colorsAndTokens'
```

JSON raporu her sabit renk icin dosya, satir, eslesen palette/hex ve kaynak context'ini; her token icin tum occurrence dosya ve satirlarini verir.

