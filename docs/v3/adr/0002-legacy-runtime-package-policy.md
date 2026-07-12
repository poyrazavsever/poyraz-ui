# ADR-0002: V3 Sonrasi Legacy Runtime Package Politikasi

- Durum: Kabul edildi
- Tarih: 2026-07-11
- Karar sahipleri: Poyraz UI maintainers
- Ilgili roadmap: P0-015 ve Faz 12-13

## Baglam

V2 consumer'lari componentleri npm runtime import'lariyla kullanir:

```ts
import { Button } from "poyraz-ui/atoms";
```

V3 registry-first modele gectiginde bu import sozlesmesini belirsiz sureyle esit birincil olarak korumak iki implementation, docs ve test hattini zorunlu kilar. Buna karsilik mevcut consumer'lari v3 stable gununde desteksiz birakmak da kabul edilemez.

## Karar

Runtime component package'i v3'te **legacy maintenance line** olur; registry source distribution tek birincil urundur.

### Surum ve dist-tag politikasi

- Son v2 runtime release'i npm'de immutable ve kurulabilir kalir.
- V3 stable yayinlandiginda son v2 surumu `legacy-v2` dist-tag'i ile isaretlenir.
- `latest` etiketi yalniz v3 package/CLI'nin migration mesajlari ve package rolu netlestikten sonra tasinir.
- `poyraz-ui@3` registry ile kurulan componentlerin runtime dependency'si olmaz.
- V3 npm paketi korunursa rolu setup CLI, metadata ve acikca belgelenmis compatibility yardimcilariyla sinirlidir; component barrel'i birincil API sayilmaz.
- Eski import yollarinin v3 package'inda sessizce farkli davranis gostermesine izin verilmez. Ya acik compatibility export'u ve deprecation mesaji vardir ya da migration rehberli intentional major error vardir.

### Destek penceresi

Planlanan takvim:

- Security ve release-blocking fix son tarihi: **2027-03-31**.
- End-of-maintenance: **2027-06-30**.

V3 stable tarihinden itibaren:

| Donem        | V2 runtime destegi                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------- |
| Ilk 3 ay     | Kritik security, kritik accessibility, React/Next ekosisteminde bloklayici uyumluluk ve packaging fix |
| 4-6 ay       | Kritik security ve veri/uygulama kirilmasina yol acan bloklayici fix                                  |
| 6 ay sonrasi | End-of-maintenance; yalniz istisnai security advisory veya community patch review                     |

Stable V3 tarihi bu plandan gec kalirsa ilk uc aylik kritik destek taahhudu korunacak sekilde tarihler ileri alinir; tarihler sessizce erkene cekilmez. Destek penceresi v3 alpha/beta ile baslamaz.

### V2'ye alinmayacak degisiklikler

- Yeni component, block veya variant.
- Poyraz Soft Glass redesign.
- Yeni token architecture.
- Registry item veya shadcn integration.
- Cosmetic bug fix ve docs expansion.
- Major Radix/API refactor.
- Tailwind v3 support.

### Fix kabul kriteri

V2 maintenance patch'i:

1. Mevcut public API'yi kirmaz.
2. Minimal scope'ludur.
3. `pnpm build:lib` ve `pnpm build` baseline'ini gecir.
4. Etkilenen davranis icin regression kaniti ekler.
5. V3 registry kaynaginda ayni sorun varsa ayri fix/tracking acilir.

## Migration taahhudu

V3 stable'dan once:

- V2 importundan registry item karsiligina mapping tablosu yayinlanir.
- Token mapping ve theme migration ornekleri verilir.
- `poyraz-ui/atoms` benzeri importlarin kaldirilma/compatibility davranisi aciklanir.
- Uygunsa yalniz import discovery yapan non-destructive codemod/audit sunulur.
- Consumer'a once registry source'u kurup sonra local customization yapmasi onerilir.
- V2 ve v3 ayni uygulamada gecici coexistence senaryosu belgelenir; style collision testi yapilir.

## Guvenlik politikasi

Registry modelinde fix merkezi runtime update ile otomatik ulasmaz. Advisory su bilgileri tasir:

- Etkilenen registry item ve revision/release.
- Etkilenen v2 package surum araligi.
- Patch diff veya yeniden kurulum/migration adimi.
- Consumer customization'i koruyarak uygulanabilecek minimal degisiklik.
- Severity ve son uygulama tarihi onerisi.

## Degerlendirilen alternatifler

### A. Runtime package'i suresiz tam desteklemek

Reddedildi. Iki esit source-of-truth ve iki API tasarimi ekibin kapasitesini boler; registry kalitesi duser.

### B. V3 stable gununde v2 destegini tamamen kesmek

Reddedildi. Ekosistem/React uyumluluk sorunlari ve kritik fixler icin makul migration penceresi gerekir.

### C. V2 componentleri v3 registry source'undan otomatik build etmeye devam etmek

V3 stable icin reddedildi. Source-owned API ile package-owned API'nin client boundary, import alias ve dependency contract'lari farklidir. Ileride community compatibility package ayri ADR ile degerlendirilebilir.

### D. Legacy package'i yeni isimle fork etmek

Simdilik reddedildi. Yeni package kullaniciya uzun vadeli destek izlenimi verir ve migration'i erteler.

## Sonuclar

Olumlu:

- Maintainer enerjisi tek v3 authoring source ve registry kalite hattina gider.
- Mevcut consumer icin ongorulebilir gecis penceresi vardir.
- Semver ve dist-tag davranisi acik hale gelir.

Maliyet:

- Alt aya kadar iki branch icin kritik fix backport'u gerekebilir.
- Consumer source-owned modele gectiginde upstream update'leri manuel degerlendirir.
- Npm package rolu release iletisiminin dikkatle yapilmasini gerektirir.

## Exit kriteri

V2 maintenance ancak su kosullarla sona erer:

1. V3 stable en az alti aydir yayindadir.
2. Migration rehberi ve import mapping tamamdir.
3. Son v2 release/tag ve EOL tarihi README/release notes'ta gorunur.
4. Acik kritik security veya bloklayici uyumluluk problemi yoktur.
