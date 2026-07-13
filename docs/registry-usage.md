# Poyraz UI Registry Kullanımı

Poyraz UI v3 iki resmi dağıtım yolu sunar. Bu belge, npm runtime package yerine
component kaynağını consumer projede sahiplenmek isteyen kullanıcılar için source
registry yolunu anlatır. Registry, resmî shadcn schema ve CLI akışını kullanır.

Merkezi semver update ve package import isteyen kullanıcılar `pnpm add poyraz-ui@3`
ile npm dağıtımını kullanmalıdır. Npm package ve registry aynı V3 component sözleşmesinden
üretilir.

## Namespace yapılandırması

Consumer projenin mevcut `components.json` dosyasına Poyraz namespace'ini ekle:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "registries": {
    "@poyraz": "https://ui.poyrazavsever.com/r/{name}.json"
  }
}
```

`registries` alanı mevcutsa yalnızca `@poyraz` anahtarını mevcut objeye ekle.
Diğer `components.json` ayarlarını veya alias'ları değiştirme.

Yerel registry geliştirirken aynı namespace geçici olarak local sunucuya
yönlendirilebilir:

```json
{
  "registries": {
    "@poyraz": "http://localhost:3000/r/{name}.json"
  }
}
```

## Button kurulumu

```bash
pnpm dlx shadcn@latest add @poyraz/button
```

Poyraz UI'nin atom taxonomy'sini kullanan varsayılan alias'larda kurulum sonucu:

```text
components/ui/atoms/button.tsx
lib/utils.ts
```

`poyraz-theme` item'ının semantic CSS değişkenleri de consumer'ın
`components.json` dosyasında tanımlı ana CSS dosyasına birleştirilir.
Component ve utility hedefleri `@ui/` ve `@lib/` placeholder'larını kullandığı
için `src/` tabanlı veya özel alias'lı projelerde gerçek hedefler consumer
ayarlarına göre çözülür.

## Kurulum ön izlemesi ve overwrite kontrolü

Dosya yazmadan planı incele:

```bash
pnpm dlx shadcn@latest add @poyraz/button --dry-run
```

Mevcut dosyayla farkı incele:

```bash
pnpm dlx shadcn@latest add @poyraz/button --diff components/ui/button.tsx
```

CLI varsayılan olarak mevcut dosyayı onaysız ezmez. Bilinçli overwrite için:

```bash
pnpm dlx shadcn@latest add @poyraz/button --overwrite
```

## URL ve GitHub adresleri

Namespace kullanmadan tek item URL'si kurulabilir:

```bash
pnpm dlx shadcn@latest add https://ui.poyrazavsever.com/r/button.json
```

Repository public olduğunda GitHub raw item adresi de kullanılabilir:

```bash
pnpm dlx shadcn@latest add https://raw.githubusercontent.com/poyrazavsever/poyraz-ui/v3/public/r/button.json
```

Button'ın Poyraz registry dependency'leri namespaced olduğu için GitHub veya
doğrudan URL kurulumu öncesinde de `components.json` içinde `@poyraz`
namespace'i bulunmalıdır.

## Registry geliştirme

Kaynak katalog `registry.json` ile başlar. Include zinciri şu kategorilere
ayrılır:

```text
registry/poyraz/
├── ui/
├── lib/
├── hooks/
├── styles/
└── blocks/
```

Kaynak değişikliğinden sonra registry'yi üret ve doğrula:

```bash
node scripts/registry/sync-theme-registry.mjs
pnpm registry:build
pnpm registry:check
```

`public/r` altındaki dosyalar build çıktısıdır ve elle düzenlenmez.
