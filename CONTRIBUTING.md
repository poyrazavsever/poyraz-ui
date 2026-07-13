# Contributing to Poyraz UI

## V3 dağıtım ve scope freeze politikası

V3, aynı canonical component kaynağından iki resmi çıktı üretir:

- `poyraz-ui@3.x` npm runtime package,
- `@poyraz/*` consumer-owned source registry.

Component implementation için source of truth `components/ui/**` dizinidir. `src/**`
entry pointleri bu componentleri npm package için export eder; registry sync scriptleri
aynı source'u `registry/poyraz/**` metadata/mirror katmanına taşır. `dist/**` ve
`public/r/**` generated çıktılardır ve tek taraflı düzeltilmez.

V3 major scope 2026-07-13 tarihinde dondurulmuştur. Stable yayın tamamlanana kadar yalnız
install/build/type/declaration, public API/package contract, kritik accessibility/correctness,
release workflow/docs ve production dağıtım blockerları kabul edilir. Yeni component,
variant, animasyon ve salt görsel refinement talepleri roadmap Faz 18 backlog'una taşınır.
Mevcut kullanımı değiştirmeyen kritik olmayan tasarım iyileştirmeleri stable öncesi PR'a
eklenmemelidir.

## Registry kaynakları

Registry metadata'sının düzenlenebilir kaynakları root `registry.json` ve
`registry/poyraz/**` altındaki katalog dosyalarıdır. Mirror component dosyaları ilgili
`components/ui/**` kaynağından sync edilir. Her item:

- benzersiz bir `name` değerine sahip olmalıdır,
- kullandığı npm paketlerini `dependencies` içinde tanımlamalıdır,
- kullandığı diğer Poyraz item'larını `registryDependencies` içinde
  tanımlamalıdır,
- her kaynak dosyayı `files` içinde kaydetmelidir,
- consumer hedefi için mümkün olduğunda `@ui/`, `@components/`, `@lib/`
  veya `@hooks/` placeholder'ı kullanmalıdır.

`poyraz-theme` item'ının token kaynağı `src/theme-tokens.json` dosyasıdır.
Token değişikliğinden sonra registry metadata'sını senkronla:

```bash
node scripts/registry/sync-theme-registry.mjs
```

Yeni veya değiştirilmiş bir item için aşağıdaki kontroller çalıştırılır:

```bash
pnpm registry:build
pnpm registry:check
```

## Generated registry politikası

`public/r/*.json` dosyaları `shadcn build` tarafından üretilir. Bu dosyalar
elle düzenlenmez. Generated bir dosyada hata varsa ilgili source registry item'ı
veya kaynak dosya düzeltilir, ardından build yeniden çalıştırılır.

Bir pull request registry kaynağını değiştiriyorsa güncel `public/r`
çıktısını da içermelidir. Generated diff, kaynak değişikliğinin beklenen
sonucu olmalıdır.
