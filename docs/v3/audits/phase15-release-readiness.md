# Faz 15 release blocker kapanış kaydı

Kayıt tarihi: 2026-07-13

## Lockfile ve kurulum

- Faz 14 commitindeki `pnpm-lock.yaml` farkı salt sıralama/format churn'ü değildir. Package
  manifestindeki semver aralıkları pnpm 11.5.1 ile yeniden çözülmüş; Radix patch/minor,
  React type, ESLint, Mermaid, TypeScript ve transitive platform paketleri güncellenmiştir.
- Aynı committe dependency specifier değişikliği yoktur. Fark, 1.189 eklenen ve 1.608
  silinen lockfile satırından oluşur; eski resolution'ı geri getirmek mevcut pnpm 11.5.1
  consumer/build kanıtını temsil etmeyeceği için churn korunmuştur.
- `npx -y node@22 <pnpm-11.5.1-cli> install --frozen-lockfile` geçti. Root kurulumda
  minimum-release-age reddi veya lockfile mutation oluşmadı.
- Next ve Vite fixture'ları kendi `pnpm-workspace.yaml` build approval politikasını taşır.
  Next fixture `sharp`, Vite fixture `esbuild` onayı için root workspace'e bağlı değildir.
- `pnpm fixture:clean-install` izole geçici dizinlerde install, typecheck ve production build
  adımlarını geçti; `sharp@0.34.5` install script'i başarıyla çalĿtı.

## Dağıtım ve public API

- Eski repo yalnızca bazı entry/declaration dosyalarını track ediyor, gerekli hash'li runtime
  chunkları ignore ediyordu. İki ardışık split build de hash'li chunk adını değiştirdiği için
  bu kısmi tracked model kaldırıldı.
- `dist` artık tamamen build/publish sırasında üretilir. `pnpm dist:check` repoda tracked dist
  bulunmadığını ve tüm ESM, CJS, `.d.ts`, `.d.cts` entrylerinin build sonrası oluştuğunu
  doğrular.
- `pnpm test:package-exports` root, atoms, molecules, organisms ve themes subpathlerini ESM,
  CJS ve TypeScript NodeNext üzerinden çözer; CSS preset exportu ayrıca resolve edilir.
- Registry build sonrası `public/r`, `src/docs-registry.json` ve `COMPONENTS.md` drift kontrolü
  quality ve release workflowlarında zorunludur.
- Command Palette option state'i `aria-selected` ile keyboard focus'a bağlandı; ArrowUp,
  ArrowDown, Home ve End akışları disabled optionları atlar.
- `NavbarMobileDrillTrigger` consumer `className` değerini forward eder. ESLint tabanlı
  `audit:public-classname` public source'ta uygulanmayan destructured `className` propunu engeller.

## Gerçek registry consumer kanıtı

- `pnpm registry:consumer-smoke`, shadcn 4.13.0 ile local HTTP registry'den temiz Next ve
  Vite fixture'a Button kurdu.
- `--dry-run`, `--diff` ve `--overwrite` davranışları gerçek dosya üzerinde geçti.
- Dependency manifestine `@radix-ui/react-slot`, `class-variance-authority`, `clsx` ve
  `tailwind-merge` eklendi.
- Faz 3 atom taxonomy kararı nedeniyle canonical hedef `components/ui/atoms/button.tsx`'tir.
  Faz 1'deki eski `components/ui/button.tsx` beklentisi bu taxonomy tarafından supersede
  edilmiştir; dosya yine package patch'i olmadan consumer'a kopyalanır.
- GitHub branch raw item adresi ve aynı branchteki namespaced dependency adresleriyle gerçek
  kurulum geçti.

## Autofill ve browser matrisi

- Input ve Textarea için standart `:autofill` ile WebKit selectorları foreground, caret ve
  inset surface rengini semantic tokenlardan alır. Glass field autofill yüzeyi opak
  `glass-fallback` kullanır.
- `tests/browser/autofill.spec.ts` Chromium, Firefox ve WebKit motorlarında selector varlığını,
  light/dark foreground ve placeholder kontrastını, glass Input/Textarea renderını geçti.
  WebKit, CI'da Safari motor ailesinin otomatik temsilcisidir; cihaz üzerinde Safari smoke'u
  release candidate görsel kontrolünde tekrar edilir.

## Lint sınıflandırması

Faz 15 başındaki 67 warning 37'ye indirildi. Accessibility/contract ve correctness sınıfı
sıfırdır.

| Sınıf        | Kural                                | Adet | Karar                                                                                                   |
| ------------ | ------------------------------------ | ---: | ------------------------------------------------------------------------------------------------------- |
| Performance  | `@next/next/no-img-element`          |   22 | Registry source'un framework-agnostic `img` API'si korunur; optimizasyon adapterı `P18-010` kapsamında. |
| Performance  | `react-hooks/set-state-in-effect`    |   14 | Mevcut davranış doğru, render optimizasyonu `P18-010` kapsamında ölçülür.                               |
| Docs/tooling | `import/no-anonymous-default-export` |    1 | Yalnızca Vite fixture PostCSS config'i; `P18-010` warning azaltımına bağlı.                             |

## Ertelenen salt görsel işler

Mevcut Button baseline'ında stable'ı engelleyen işlevsel veya accessibility farkı yoktur.
Yeni effect, variant ve salt görsel polish istekleri roadmap `P18-005`–`P18-009` kapsamında,
default behavior ve public API değişmeden ele alınır.
