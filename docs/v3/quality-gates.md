# V3 Quality Gates

Faz 11 kalite modeli üç bağımsız katmandan oluşur: statik kontroller, component/browser kontrolleri ve temiz consumer fixture kontrolleri. CI içindeki job adları branch protection required check adlarıdır.

## Required Checks

GitHub branch protection içinde aşağıdaki kontroller zorunlu olmalıdır:

- `Static quality`
- `Component tests`
- `Browser quality`
- `Clean fixture distribution`

Bu kontroller geçmeden `master` veya `v3` branch'ine merge yapılmamalıdır. Required review ve up-to-date branch şartları repository ayarından ayrıca etkinleştirilmelidir.

## Local Commands

| Katman         | Komut                        | Kapsam                                                                                  |
| -------------- | ---------------------------- | --------------------------------------------------------------------------------------- |
| Static         | `pnpm quality:static`        | Format, lint, app/library/test typecheck, registry schema/files/graph ve bundle bütçesi |
| Components     | `pnpm test`                  | Unit, jsdom interaction ve axe accessibility                                            |
| Registry       | `pnpm registry:smoke`        | Her generated registry item için dependency-expanded install smoke                      |
| Fixtures       | `pnpm fixture:typecheck`     | Tüm item'ları Next ve Vite fixture'a kurup typecheck                                    |
| Clean fixtures | `pnpm fixture:clean-install` | İzole temp dizininde install, typecheck ve production build                             |
| Browser        | `pnpm test:browser`          | Visual, keyboard, focus, axe, theme, viewport ve motion projeleri                       |
| Performance    | `pnpm test:performance`      | Blur-heavy demo long-task profili ve JSON artifact                                      |

## Visual Policy

Playwright snapshotları `desktop-light`, `desktop-dark`, `mobile-light` ve `mobile-dark` projeleri için tutulur. Bilinçli görsel değişiklikte snapshot güncellemesi ayrı incelenmeli; açıklamasız veya onaylanmamış diff merge edilmemelidir.

## Budgets

Makine tarafından okunan eşikler `quality-budgets.json` içindedir. Eşik yükseltmek bir hata düzeltmesi sayılmaz; PR açıklamasında bundle veya performans maliyetinin nedeni belirtilmelidir. Browser performans testi profil sonucunu `blur-profile.json` attachment olarak üretir.

## Generated Output

CI registry build sonrasında `public/r`, `src/docs-registry.json` ve `COMPONENTS.md` farkını `registry-generated-diff` artifact'i olarak yükler. Diff varsa `Static quality` başarısız olur; generated dosyalar kaynak registry ile aynı committe tutulmalıdır.
