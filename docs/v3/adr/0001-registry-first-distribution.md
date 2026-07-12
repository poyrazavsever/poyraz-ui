# ADR-0001: Registry-First Source Distribution

- Durum: Kabul edildi
- Tarih: 2026-07-11
- Karar sahipleri: Poyraz UI maintainers
- Ilgili roadmap: P0-014, Faz 1 ve Faz 12

## Baglam

Poyraz UI v2, componentleri `poyraz-ui`, `poyraz-ui/atoms`, `poyraz-ui/molecules` ve `poyraz-ui/organisms` runtime package export'lariyla dagitir. Bu model merkezi update ve klasik semver tuketimi saglar; fakat hedeflenen urun davranisinda dort sorun yaratir:

1. Consumer markup, CVA recipe ve Radix composition kodunun sahibi degildir.
2. Tek bir component kullanimi package'in genis dependency ve client-boundary kararlarini getirir.
3. Ozellestirme CSS variable/className sinirlarinda kalir; source seviyesinde degisiklik fork gerektirir.
4. Tema, utility, hook, component ve block farkli dagitim mekanizmalarina ihtiyac duyuyormus gibi davranir.

V3 urun tanimi, source koduna consumer'in sahip oldugu shadcn-benzeri bir registry'dir.

## Karar

Poyraz UI v3'un birincil dagitim modeli resmi shadcn registry schema ve CLI protokolu uzerinden **registry-first source distribution** olacaktir.

Hedef akis:

```text
Radix behavior primitive
  -> Poyraz registry source item
  -> shadcn registry resolution/install
  -> consumer components/ui/*.tsx
  -> consumer-owned source
```

### Registry item sinirlari

- UI primitive/component: `registry:ui`
- Utility: `registry:lib`
- Hook: `registry:hook`
- Theme/foundation: `registry:style` veya schema'nin guncel uygun item turu
- Birlesik urun parcasi: `registry:block`
- Docs preview: `registry:example`

Her item su bilgileri aciklar:

- Kopyalanacak dosyalar ve hedefleri.
- Registry item dependency'leri.
- Harici npm dependency'leri.
- Gerekiyorsa CSS/style dependency'si.
- Client boundary ve framework kosulu.
- Dokumantasyon URL'si ve metadata.

### Consumer sahipligi

Kurulumdan sonra dosya consumer repository'sine aittir. Consumer:

- Markup, class, CVA variant, data-slot ve Radix parcalarini degistirebilir.
- Upstream update'i otomatik almak zorunda degildir.
- Degistirilmis dosyaya conflictsiz merge garantisi almaz.
- Lisans header/attribution gereksinimlerine uyar.

### CLI rolu

`bin/cli.mjs`, dosya kopyalama, dependency graph veya schema validation motorunu yeniden yazmaz. Ince setup katmani olarak:

- Preflight yapar.
- `components.json` namespace/config yonlendirmesi sunar.
- Resmi shadcn CLI komutunu ve registry URL'sini kullanir.
- Dry-run/diagnostic bilgi verebilir.
- Destructive overwrite icin acik onay ister.

### Repository source-of-truth

Authoring source `registry/poyraz/**` altindadir. `public/r/**` generated artifact'tir; elle duzenlenmez. Docs preview ve registry output ayni authoring source'tan beslenir.

## Kabul edilen sonuclar

### Olumlu

- Consumer gercek source seviyesinde ozellestirme yapar.
- Component basina minimum dependency graph kurulur.
- Server/client boundary item bazinda dogru tutulur.
- UI, hook, style ve block ayni protokolle kurulur.
- Clean consumer fixture gercek urun kontrati olur.
- Poyraz tasarim dili opinionated default kalirken kod kapali hale gelmez.

### Maliyet ve risk

- Upstream bug fix consumer'a otomatik ulasmaz.
- Registry schema/CLI degisiklikleri takip edilmelidir.
- Her item icin dependency metadata ve install fixture bakimi gerekir.
- Consumer customization sonrasi support kapsaminda upstream reproduction istenir.
- Guvenlik duyurularinda etkilenen item ve manuel update yolu acikca belirtilmelidir.
- Duplicate source, klasik package deduplication avantajini azaltabilir.

## Degerlendirilen alternatifler

### A. Mevcut runtime package'i yalniz daha fazla prop/token ile gelistirmek

Reddedildi. CSS/API customization artar fakat source ownership, per-item dependency ve local composition hedeflerini karsilamaz.

### B. Poyraz'a ozel kopyalama CLI motoru yazmak

Reddedildi. Schema validation, framework detection, alias resolution, dependency install ve overwrite davranisini yeniden uretmek yuksek bakim ve guvenlik maliyeti getirir.

### C. Hem runtime package hem registry'yi esit birincil urun yapmak

Reddedildi. Iki source-of-truth, iki docs yolu ve iki test matrisi olusturur. Legacy package gecici ve sinirli politika ile ayrica ele alinir.

### D. Yalniz GitHub raw URL/copy-paste

Reddedildi. Transitif dependency, target path, style ve version metadata'si guvenilir bicimde cozulmez.

## Guardrail'ler

1. Generated registry JSON CI'da schema validate edilir.
2. Her item temiz Next ve Vite fixture'ina kurulur.
3. Registry file path traversal ve beklenmeyen target path'leri reddedilir.
4. Generic item framework-specific import tasimaz.
5. Source item gizli `poyraz-ui` runtime dependency'si alamaz.
6. Docs, yayinlanmis/generated registry artifact'i ile ayni kodu gosterir.
7. Item update'leri changelog ve migration note tasir.
8. Registry host erisilemezken hata acik ve non-destructive olur.

## Basari olcutu

Karar, Button pilotu temiz consumer'a asagidaki sonuc ile kurulunca teknik olarak dogrulanir:

- `components/ui/button.tsx`
- `lib/utils.ts`
- Gerekli theme/style kurulumu
- Yalniz Button'in gercek npm dependency'leri
- Typecheck ve production build PASS
- Consumer source degisikligi package patch/fork olmadan mumkun

## Geri donus

Alpha/beta sirasinda registry protokolu urun gereksinimlerini karsilamazsa runtime package gecici olarak v2 maintenance hattinda kalir. Bu, ozel kopyalama motoruna otomatik gecis anlami tasimaz; yeni ADR gerekir.
