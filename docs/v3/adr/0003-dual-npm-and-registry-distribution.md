# ADR-0003: Npm Runtime Package ve Source Registry Çift Dağıtımı

- Durum: Kabul edildi
- Tarih: 2026-07-13
- Karar sahipleri: Poyraz UI maintainer
- İlgili roadmap: Faz 14–18
- Supersedes: ADR-0001'in “registry tek birincil dağıtımdır” kararı ve ADR-0002'nin “V3 runtime package legacy olur” kararı

## Bağlam

Poyraz UI başlangıcından beri `poyraz-ui` adıyla npm runtime component paketi olarak
dağıtılmaktadır. V3 çalışması shadcn uyumlu source registry, consumer-owned source ve daha
güçlü özelleştirme hedeflerini ekledi. İlk V3 ADR'ları bu yeni kanalı npm paketinin yerine
geçecek tek birincil ürün olarak yorumladı.

Ürün hedefi bu değildir. V3 stable release'in iki resmi consumer yolu vardır:

1. Semver update, merkezi bug fix ve package import isteyen kullanıcı için npm runtime package.
2. Component kaynağını kendi repository'sinde sahiplenmek isteyen kullanıcı için source registry.

Bu iki kanal farklı tasarım sistemleri veya farklı component implementationları olamaz.

## Karar

`poyraz-ui@3.0.0` npm'de runtime component package olarak yayınlanır ve stable release
sonunda `latest` etiketini alır. `@poyraz/*` production namespace'i aynı V3 componentlerini
shadcn uyumlu source registry olarak dağıtır.

### Dağıtım rolleri

| Kanal                 | Consumer sözleşmesi                                  | Update modeli                        |
| --------------------- | ---------------------------------------------------- | ------------------------------------ |
| `poyraz-ui@3.x`       | Root/subpath importları, ESM/CJS/types ve CSS preset | Semver package update                |
| `@poyraz/*`           | `components/ui` altına kurulan consumer-owned source | Explicit reinstall/diff/manual merge |
| `poyraz-ui@legacy-v2` | Son V2 runtime sürümü                                | Sınırlı maintenance                  |

### Dist-tag politikası

| Release                                       | Npm etiketi | Kural                                     |
| --------------------------------------------- | ----------- | ----------------------------------------- |
| `3.0.0-alpha.*`, `3.0.0-beta.*`, `3.0.0-rc.*` | `next`      | Stable consumer'a otomatik taşınmaz       |
| `3.0.0` ve sonraki stable sürümler            | `latest`    | Yalnız protected release approval sonrası |
| Son `2.1.x`                                   | `legacy-v2` | Migration ve rollback için korunur        |

`package.json` versionı geliştirme sırasında yalnız planlama amacıyla değiştirilmez. Exact
release versionı yalnız reviewed release commit'inde yazılır. Release preflight package
versionı, istenen release versionı ve channel/dist-tag eşleşmesini zorunlu doğrular.

## Canonical source ve üretim sırası

Source of truth sırası aşağıdaki gibidir:

1. Component implementation: `components/ui/**`.
2. Package public API: `src/index.ts` ve `src/{atoms,molecules,organisms,themes}/index.ts` re-exportları.
3. Token source: `src/theme-tokens.json`; generated token bölümü `src/preset.css`.
4. Registry authoring mirror/metadata: `registry/poyraz/**`; sync scriptleri canonical component source'u buraya taşır.
5. Hosted registry artifact: `public/r/**`; elle düzenlenmez.
6. Npm artifact: `dist/**` ve package tarball; build sırasında üretilir.

Package ve registry davranışı farklılaşırsa canonical `components/ui/**` implementationı
düzeltilir ve iki çıktı yeniden üretilir. Generated `dist/**` veya `public/r/**` dosyasında
tek taraflı hotfix yapılmaz. Dağıtım kanalına özgü alias/import adaptasyonu gerekiyorsa sync
veya build katmanında açıkça belgelenir; public prop, variant, data-slot ve behavior sözleşmesi
ayrışamaz.

## ADR-0001 üzerinde değişen kararlar

- “Registry V3'ün tek birincil dağıtımıdır” kararı supersede edildi.
- “Runtime package'i geliştirmek reddedildi” kararı supersede edildi.
- “Runtime package ve registry eşit desteklenemez” alternatifi reddi supersede edildi.
- `registry/poyraz/**` tek authoring source değildir; registry metadata/mirror katmanıdır.
- Shadcn schema, consumer-owned source, overwrite güvenliği ve registry graph guardrail'leri geçerliliğini korur.

## ADR-0002 üzerinde değişen kararlar

- “Runtime package V3'te yalnız legacy maintenance line olur” kararı supersede edildi.
- “V3 npm package component barrel sunmaz” kararı supersede edildi.
- V2 support takvimi ve `legacy-v2` etiketi korunur.
- V2'nin yeni component/variant almaması ve migration belgelerinin görünür kalması korunur.

ADR-0001 ve ADR-0002 silinmez; karar tarihçesi olarak `Superseded` durumuna alınır.

## Test ve release sonuçları

Çift dağıtım aşağıdaki ek maliyetleri kabul eder:

- Package tarball ve registry clean-install için ayrı consumer fixture gerekir.
- Her public package exportu ESM, CJS ve TypeScript resolution testinden geçer.
- Registry item ve package component public contract parity testi gerekir.
- Docs iki kurulumu kullanım amacıyla ayırır; birini diğerinin migration zorunluluğu gibi göstermez.
- Release artifact npm tarball metadata, registry JSON ve ortak checksum/commit bilgisi taşır.

Bu maliyet iki implementation anlamına gelmez. Aynı canonical source'tan iki dağıtım çıktısı
üretmek release kalitesinin parçasıdır.

## Scope freeze

2026-07-13 itibarıyla V3 major scope dondurulmuştur. Stable öncesinde yalnız:

- install/build/type/declaration blocker'ı,
- public API veya package contract blocker'ı,
- critical accessibility/correctness problemi,
- release workflow, docs veya production dağıtım blocker'ı

kabul edilir. Yeni component, yeni variant, yeni animasyon ve salt görsel refinement Faz 18
backlog'una taşınır. Stable sonrası mevcut API'yi kırmayan çalışmalar `3.1.x` minor hattında
planlanır; kritik regressionlar `3.0.x` patch hattında çözülür.

## Rollback

- Npm'de yayınlanan version silinmez veya yeniden kullanılmaz.
- Kritik V3 package hatasında `latest` son güvenli sürüme alınabilir ve patch hazırlanır.
- V2 migration fallback'i `poyraz-ui@legacy-v2` olarak kalır.
- Hosted registry/docs önceki Vercel deploymentına döndürülebilir.
- Package ve registry düzeltmesi aynı canonical source commit'inden yeni patch versionla üretilir.
