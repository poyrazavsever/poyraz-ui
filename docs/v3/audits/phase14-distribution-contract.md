# Faz 14 Çift Dağıtım Sözleşmesi Envanteri

- Tarih: 2026-07-13
- Karar: `poyraz-ui@3.x` npm runtime package + `@poyraz/*` source registry
- Canonical karar: ADR-0003
- Scope: Faz 0–13'te registry-only veya legacy-only npm varsayımı taşıyan kayıtlar

## Tarama komutu

```bash
rg -n -i \
  'registry-first|legacy-v2|V3.*npm|npm.*V3|runtime package|runtime barrel|publishV3Package|does not move|not published|tek birincil|yalnız legacy' \
  --glob '!pnpm-lock.yaml' \
  --glob '!public/r/**' \
  .
```

Generated `public/r/**` payloadlarında geçen “registry-first” tanıtım metni dağıtım yasağı
değildir; source registry özelliğini anlatır ve canonical source yeniden üretildiğinde güncellenir.

## Güncellenen aktif sözleşmeler

| Kayıt                                      | Karar                                                                                                  |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `release.config.json`                      | Product `poyraz-ui`, target major 3, npm role `primary-v3-runtime`, `latest/next/legacy-v2` politikası |
| `docs/v3/release-config.schema.json`       | Yeni npm V3 contract alanları makinece zorunlu                                                         |
| `scripts/release/release-lib.mjs`          | Registry-only assertion kaldırıldı; package/version/channel/dist-tag doğrulaması eklendi               |
| `scripts/release/build-artifacts.mjs`      | Release manifest npm V3 targetı, dist-tag, legacy fallback ve readiness taşır                          |
| `scripts/release/preflight.mjs`            | Npm target/dist-tag sonucu raporlanır                                                                  |
| `scripts/test-phase13-release.mjs`         | Çift dağıtım contractı ve release-commit version politikası doğrulanır                                 |
| `.github/workflows/release.yml`            | Release adı/amacı çift dağıtım olarak düzeltildi; Faz 16 hazır olmadan publish guard eklendi           |
| `docs/v3/release-runbook.md`               | Npm + registry publish sırası, version ve rollback politikası                                          |
| `docs/v3/releases/v3.0.0.md`               | Npm ve source registry iki resmi V3 kurulumu                                                           |
| `CHANGELOG.md`                             | Npm V3, dist-tag ve 2026-07-13 scope freeze kaydı                                                      |
| `docs/v3/migration-v2-to-v3.md`            | Npm upgrade ve own-the-source rotaları ayrıldı                                                         |
| `README.md`                                | İki quick start ve V2 `legacy-v2` fallback                                                             |
| `app/docs/installation/page.tsx`           | Varsayılan npm V3 kurulumu + Own the source alternatifi                                                |
| `app/docs/migration/page.tsx`              | Package upgrade registry migration zorunluluğundan ayrıldı                                             |
| `app/docs/releases/page.tsx`               | Stable candidate npm + registry olarak tanımlandı                                                      |
| `app/docs/legacy/v2/page.tsx`              | Yalnız explicit `poyraz-ui@legacy-v2` kurulumu                                                         |
| `docs/registry-usage.md`                   | Source registry, npm paketine alternatif ownership yolu olarak tanımlandı                              |
| `bin/cli.mjs`                              | `--mode package` ve `--mode registry` sorumlulukları ayrıldı                                           |
| `CONTRIBUTING.md`                          | Canonical source sırası ve major scope freeze                                                          |
| `docs/v3/audits/support-matrix.md`         | Npm package CJS consumer Tier 1 olarak düzeltildi                                                      |
| `docs/v3/components/phase-5-foundation.md` | Package/registry ortak canonical implementation kaydı                                                  |

## Tarihsel kayıt olarak korunanlar

| Kayıt                                                  | Sınıflandırma                                                            |
| ------------------------------------------------------ | ------------------------------------------------------------------------ |
| `docs/v3/adr/0001-registry-first-distribution.md`      | Superseded; shadcn/source ownership guardrail'leri geçerli               |
| `docs/v3/adr/0002-legacy-runtime-package-policy.md`    | Superseded; V2 maintenance takvimi ve `legacy-v2` geçerli                |
| `docs/v3/audits/README.md`                             | V2 baseline kanıtı; ADR durumları superseded olarak güncellendi          |
| `docs/v3/audits/anti-goals.md`                         | Faz 0 tarihsel scope kaydı; npm anti-goal maddesi açıkça superseded      |
| `docs/v3/audits/dependencies-and-client-boundaries.md` | V2 baseline gözlemi; registry'nin item-level dependency avantajı geçerli |
| `docs/v3/audits/public-api.md`                         | V2 public API baseline gözlemi                                           |
| `docs/v3/baselines/v2-build-summary.txt`               | Immutable V2 baseline                                                    |
| Roadmap Faz 0–13 tamamlanmış maddeleri                 | Tarihsel uygulama/karar kaydı; Faz 14 karar notu üstündür                |

## Geçerli source-registry anlatımı olarak korunanlar

| Kayıt grubu                                                           | Neden çelişki değil                                              |
| --------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `docs/registry-usage.md`                                              | Yalnız source ownership kanalının kullanım rehberi               |
| Card/hero demo başlıklarındaki “registry-first” metinleri             | Bir tasarım/use-case örneğini tanımlar, npm publish'i yasaklamaz |
| `components/ui/blocks/phase8/brand-hero-block.tsx` ve registry mirror | Source registry özelliğini tanıtan component içeriği             |
| Registry graph/schema/docs kayıtları                                  | İkinci resmi dağıtım kanalının teknik kontratı                   |
| `src/migration-map.json` içindeki `legacy-v2`                         | V2 fallback etiketi hâlâ geçerli                                 |

## Bilinçli olarak ertelenen release durumu

- `package.json` Faz 14 sırasında `2.1.0` kalır. ADR-0003 gereği exact target version yalnız
  reviewed RC/stable release commit'inde yazılır.
- `release.config.json → npm.publishWorkflowReady` Faz 14 sırasında `false` kalır.
  Faz 16 gerçek tarball publish job'u ve consumer smoke tamamlanmadan protected publish açılamaz.
- Npm publish, tarball consumer matrisi ve provenance Faz 16 kapsamındadır.
- Master merge, Vercel production ve stable dist-tag geçişi Faz 17 kapsamındadır.

## Silinen kayıtlar

Karar tarihçesini korumak için ADR veya baseline silinmedi. Aktif user-facing dokümanlardaki
registry-only hükümler yerinde güncellendi.
