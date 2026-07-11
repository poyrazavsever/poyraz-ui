# Contributing to Poyraz UI

## Registry kaynakları

Registry'nin düzenlenebilir kaynakları root `registry.json` ve
`registry/poyraz/**` altındaki katalog/component dosyalarıdır. Her item:

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
