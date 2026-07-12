# V2 Dependency ve Client-Boundary Auditi

## Sonuc

44 component kaynak ailesinin statik incelemesi:

| Boundary                                     | Aile sayisi | Anlam                                                                               |
| -------------------------------------------- | ----------: | ----------------------------------------------------------------------------------- |
| Client gerekli                               |          30 | Hook, browser API veya client davranis primitive'i kullaniyor                       |
| Server-safe, statik inceleme                 |          13 | State/effect/browser API/client primitive sinyali yok                               |
| Server-safe wrapper / client Slot dependency |           1 | `button`; wrapper stateless, `@radix-ui/react-slot` siniri fixture ile dogrulanmali |

29 dosyada acik `use client` vardir. `footer.tsx`, `React.useState` kullandigi halde directive tasimayan tek client-required dosyadir. Mevcut tsup `onSuccess` adimi butun ESM/CJS JS dosyalarina `use client` ekledigi icin bu kaynak hatasi package build'inde maskelenir; component dosyasi consumer'a dogrudan kopyalandiginda ortaya cikar.

## Dependency okuma kurali

- Tum aileler React'e baglidir; tablo tekrar etmez.
- `cn` kisaltmasi, mevcut tum componentlerin `@/components/ui/atoms/typography` icindeki `cn` kopyasina bagli oldugunu belirtir.
- Zorunlu paket, dosyanin statik import ettigi pakettir. Component kullanicisinin ilgili registry item'i kurarken edinmesi gerekir.
- Opsiyonel paket, yalniz dinamik ve kosullu yuklenen pakettir. Baseline'da bu kategoriye yalniz Mermaid'in `mermaid` paketi girer.
- Radix root'larinda controlled/uncontrolled davranis primitive tarafindan saglanabilir; bu tablo API matrisi degil dependency envanteridir.

## Atomlar

| Aile        | Zorunlu internal        | Zorunlu paket                                      | Opsiyonel paket | Boundary ve gerekce                                                                                     |
| ----------- | ----------------------- | -------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------- |
| avatar      | `cn`                    | `@radix-ui/react-avatar`                           | -               | Client; Radix Avatar                                                                                    |
| badge       | `cn`                    | `class-variance-authority`                         | -               | Server-safe                                                                                             |
| bg-pattern  | `cn`                    | -                                                  | -               | Server-safe                                                                                             |
| button      | `cn`                    | `@radix-ui/react-slot`, `class-variance-authority` | -               | Kosullu; stateless wrapper, Slot dependency                                                             |
| card        | `cn`                    | `class-variance-authority`                         | -               | Server-safe                                                                                             |
| checkbox    | `cn`                    | `@radix-ui/react-checkbox`                         | -               | Client; Radix Checkbox                                                                                  |
| form-fields | `Button`, `Input`, `cn` | `lucide-react`                                     | -               | Client; local state ve event davranisi                                                                  |
| input       | `cn`                    | -                                                  | -               | Server-safe                                                                                             |
| label       | `cn`                    | -                                                  | -               | Server-safe                                                                                             |
| logo        | `cn`                    | -                                                  | -               | Server-safe                                                                                             |
| radio-group | `cn`                    | `@radix-ui/react-radio-group`                      | -               | Client; Radix Radio Group                                                                               |
| scroll-area | `cn`                    | -                                                  | -               | Directive var, fakat davranis sadece CSS/props; v3'te server-safe fixture ile yeniden siniflandirilmali |
| separator   | `cn`                    | `@radix-ui/react-separator`                        | -               | Client; Radix Separator                                                                                 |
| skeleton    | `cn`                    | -                                                  | -               | Server-safe                                                                                             |
| switch      | `cn`                    | `@radix-ui/react-switch`                           | -               | Client; Radix Switch                                                                                    |
| textarea    | `cn`                    | -                                                  | -               | Server-safe                                                                                             |
| typography  | -                       | `clsx`, `tailwind-merge`                           | -               | Server-safe; fakat utility ve visual component sorumluluklari karismis                                  |

## Molecule'ler

| Aile            | Zorunlu internal                      | Zorunlu paket                                                               | Opsiyonel paket | Boundary ve gerekce                                     |
| --------------- | ------------------------------------- | --------------------------------------------------------------------------- | --------------- | ------------------------------------------------------- |
| accordion       | `cn`                                  | `@radix-ui/react-accordion`, `lucide-react`                                 | -               | Client; Radix Accordion                                 |
| alert           | `cn`                                  | `class-variance-authority`, `lucide-react`                                  | -               | Server-safe                                             |
| autocomplete    | `cn`                                  | `lucide-react`                                                              | -               | Client; state, refs, effects ve `document` listener     |
| breadcrumb      | `cn`                                  | `lucide-react`                                                              | -               | Server-safe                                             |
| calendar        | `Button`, `cn`                        | `lucide-react`                                                              | -               | Client; view state                                      |
| card-templates  | `Card`, `cn`                          | -                                                                           | -               | Server-safe                                             |
| command-palette | `cn`                                  | `@radix-ui/react-dialog`, `@radix-ui/react-visually-hidden`, `lucide-react` | -               | Client; Dialog ve context/state                         |
| date-picker     | `Button`, `Calendar`, `Popover`, `cn` | `lucide-react`                                                              | -               | Client; open state ve transitif Radix Popover           |
| dialog          | `cn`                                  | `@radix-ui/react-dialog`, `lucide-react`                                    | -               | Client; Radix Dialog                                    |
| drawer          | `cn`                                  | `vaul`                                                                      | -               | Client; Vaul                                            |
| dropdown-menu   | `cn`                                  | `@radix-ui/react-dropdown-menu`, `lucide-react`                             | -               | Client; Radix Dropdown Menu                             |
| form            | `Label`, `cn`                         | `@radix-ui/react-slot`, `react-hook-form`                                   | -               | Client; form context/hooks                              |
| hover-card      | `cn`                                  | `@radix-ui/react-hover-card`                                                | -               | Client; Radix Hover Card                                |
| mermaid         | `cn`                                  | -                                                                           | `mermaid`       | Client; effect/ref/state ve browser-only dinamik render |
| modal           | `cn`                                  | `@radix-ui/react-dialog`, `class-variance-authority`, `lucide-react`        | -               | Client; Radix Dialog                                    |
| pagination      | `Button`, `cn`                        | `lucide-react`                                                              | -               | Server-safe                                             |
| popover         | `cn`                                  | `@radix-ui/react-popover`                                                   | -               | Client; Radix Popover                                   |
| select          | `cn`                                  | `@radix-ui/react-select`, `lucide-react`                                    | -               | Client; Radix Select                                    |
| sheet           | `cn`                                  | `@radix-ui/react-dialog`, `class-variance-authority`, `lucide-react`        | -               | Client; Radix Dialog                                    |
| sonner          | `cn`                                  | `sonner`                                                                    | -               | Client; toast runtime                                   |
| tabs            | `cn`                                  | `@radix-ui/react-tabs`                                                      | -               | Client; Radix Tabs                                      |
| tooltip         | `cn`                                  | `@radix-ui/react-tooltip`                                                   | -               | Client; Radix Tooltip                                   |

## Organism'ler

| Aile             | Zorunlu internal                             | Zorunlu paket                                                                                            | Opsiyonel paket | Boundary ve gerekce                                 |
| ---------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------- | --------------- | --------------------------------------------------- |
| announcement-bar | `cn`                                         | `class-variance-authority`, `lucide-react`                                                               | -               | Client; dismiss state                               |
| data-table       | `Badge`, `Button`, `Checkbox`, `Input`, `cn` | `lucide-react`                                                                                           | -               | Client; sort/filter/page/selection state ve effects |
| footer           | `cn`                                         | `class-variance-authority`                                                                               | -               | **Client; `useState` var fakat directive yok**      |
| navbar           | `cn`                                         | `@radix-ui/react-navigation-menu`, `@radix-ui/react-popover`, `class-variance-authority`, `lucide-react` | -               | Client; context/state/effect/browser scroll         |
| sidebar          | `cn`                                         | `class-variance-authority`, `lucide-react`                                                               | -               | Client; context/state                               |

## Package declaration bulgulari

1. `react-hook-form`, `@hookform/resolvers`, `zod` ve `reactive-switcher` optional peer olarak tanimlidir. Bu model runtime package icin kabul edilebilir, registry item icin her item yalniz gercek ihtiyacini bildirmelidir.
2. `mermaid` yalniz `devDependencies` icindedir. Mermaid public API'ye de export edilmedigi icin docs lokal calisirken package consumer akisi kiriktir. Registry item, `mermaid`i kendi dependency listesine yazmalidir.
3. Radix paketleri merkezi package'in zorunlu dependencies alanindadir; tek bir Button kullanan consumer bile package seviyesinde tum Radix graph'ini edinir. Registry-first model bu maliyeti item bazina indirir.
4. Tum componentlerin Typography dosyasindaki `cn` fonksiyonuna baglanmasi, Typography'yi gizli zorunlu registry dependency yapar. V3'te `lib/utils.ts` tek kaynak olmalidir.
5. `tsup` tum chunk'lara directive ekledigi icin 13 server-safe ailenin de RSC avantaji kaybolur.

## V3 client-boundary ilkesi

- Hook, browser API veya davranis primitive'i kullanmayan kaynakta `use client` bulunmaz.
- Client directive dependency graph'ta en alt gerekli dosyada tutulur; block/root seviyesine gereksiz yayilmaz.
- Radix Slot kullanan stateless componentler Next.js fixture'inda test edilmeden server-safe ilan edilmez.
- Registry CI; Next App Router server import, Next client import ve Vite import fixture'larini ayri calistirir.
- Build sonu butun dosyalara directive ekleyen mekanizma registry kaynaginda kullanilmaz.

## Yeniden uretme

```bash
node scripts/audit-v2-source.mjs --json \
  | jq '.components[] | {family, dependencies, clientBoundary}'
```
