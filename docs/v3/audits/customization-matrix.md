# V2 CVA ve Ozellestirme Matrisi

## Ozet

- 44 kaynak ailesinin tamaminda en az bir visual parca `className` kabul eder.
- 10/44 aile CVA kullanir; 34/44 aile variant recipe kullanmaz.
- 8 ailede hic `forwardRef` yoktur: Badge, Logo, Skeleton, Typography, Autocomplete, Calendar, DatePicker ve Sonner.
- Public loading prop'u yalniz Button ve Autocomplete sunar. Mermaid loading state'ini kendi icinde yonetir.
- Hicbir aile `data-slot`, `data-variant` veya `data-size` sozlesmesini sistematik olarak kullanmaz.
- `asChild` destegi tutarsizdir: Button dogrudan sunar; bazi Radix Trigger alias'lari transitif sunar; BreadcrumbLink ise Slot yerine `span` secerek semantigi zayiflatir.

Tabloda `C/U` controlled ve uncontrolled, `C` controlled-only, `internal` consumer tarafindan kontrol edilemeyen state anlamina gelir. `Radix` primitive props passthrough'u, `native` native form element davranisini belirtir. `Ref: partial`, ailede bazi visual alt parcalarda ref olup root/ana componentte olmamasidir.

## Atomlar

| Aile        | className | asChild             | Ref       | State modeli                      | Loading         | CVA      |
| ----------- | --------- | ------------------- | --------- | --------------------------------- | --------------- | -------- |
| avatar      | Evet      | Hayir               | Evet      | Radix image/fallback lifecycle    | Hayir           | Hayir    |
| badge       | Evet      | Hayir               | **Hayir** | N/A                               | Hayir           | **Evet** |
| bg-pattern  | Evet      | Hayir               | Evet      | N/A                               | Hayir           | Hayir    |
| button      | Evet      | **Evet**            | Evet      | Native disabled                   | **Public prop** | **Evet** |
| card        | Evet      | Hayir               | Evet      | N/A                               | Hayir           | **Evet** |
| checkbox    | Evet      | Radix root contract | Evet      | **C/U, Radix**                    | Hayir           | Hayir    |
| form-fields | Evet      | Hayir               | Evet      | NumberInput `C`; digerleri native | Hayir           | Hayir    |
| input       | Evet      | Hayir               | Evet      | **C/U, native**                   | Hayir           | Hayir    |
| label       | Evet      | Hayir               | Evet      | N/A                               | Hayir           | Hayir    |
| logo        | Evet      | Hayir               | **Hayir** | N/A                               | Hayir           | Hayir    |
| radio-group | Evet      | Radix root contract | Evet      | **C/U, Radix**                    | Hayir           | Hayir    |
| scroll-area | Evet      | Hayir               | Evet      | Native scroll                     | Hayir           | Hayir    |
| separator   | Evet      | Radix root contract | Evet      | N/A                               | Hayir           | Hayir    |
| skeleton    | Evet      | Hayir               | **Hayir** | N/A                               | Hayir           | Hayir    |
| switch      | Evet      | Radix root contract | Evet      | **C/U, Radix**                    | Hayir           | Hayir    |
| textarea    | Evet      | Hayir               | Evet      | **C/U, native**                   | Hayir           | Hayir    |
| typography  | Evet      | Hayir               | **Hayir** | N/A                               | Hayir           | Hayir    |

## Molecule'ler

| Aile            | className | asChild                                     | Ref       | State modeli                       | Loading             | CVA      |
| --------------- | --------- | ------------------------------------------- | --------- | ---------------------------------- | ------------------- | -------- |
| accordion       | Evet      | Radix subparts                              | Evet      | **C/U, Radix**                     | Hayir               | Hayir    |
| alert           | Evet      | Hayir                                       | Evet      | N/A                                | Hayir               | **Evet** |
| autocomplete    | Evet      | Hayir                                       | **Hayir** | Selection `C`; query/open internal | **Public prop**     | Hayir    |
| breadcrumb      | Evet      | BreadcrumbLink'te var; Slot degil           | Evet      | N/A                                | Hayir               | Hayir    |
| calendar        | Evet      | Hayir                                       | **Hayir** | Selected `C`; view internal        | Hayir               | Hayir    |
| card-templates  | Evet      | CTA slotlari node ile                       | Evet      | N/A                                | Hayir               | Hayir    |
| command-palette | Evet      | Trigger'da Radix                            | Evet      | Open `C/U`; search internal        | Hayir               | Hayir    |
| date-picker     | Evet      | Hayir; yalniz internal Trigger kullaniminda | **Hayir** | Selected `C`; open internal        | Hayir               | Hayir    |
| dialog          | Evet      | Radix subparts                              | Evet      | **C/U, Radix**                     | Hayir               | Hayir    |
| drawer          | Evet      | Vaul subparts                               | Evet      | **C/U, Vaul**                      | Hayir               | Hayir    |
| dropdown-menu   | Evet      | Radix subparts                              | Evet      | **C/U, Radix**                     | Hayir               | Hayir    |
| form            | Evet      | FormControl Slot                            | Evet      | React Hook Form                    | Hayir               | Hayir    |
| hover-card      | Evet      | Radix subparts                              | Evet      | **C/U, Radix**                     | Hayir               | Hayir    |
| mermaid         | Evet      | Hayir                                       | Partial   | Render lifecycle internal          | Internal            | Hayir    |
| modal           | Evet      | Radix subparts                              | Evet      | **C/U, Radix**                     | Hayir               | **Evet** |
| pagination      | Evet      | Link'te Button contract'i                   | Evet      | Consumer-owned                     | Hayir               | Hayir    |
| popover         | Evet      | Radix subparts                              | Evet      | **C/U, Radix**                     | Hayir               | Hayir    |
| select          | Evet      | Bazi Radix subparts                         | Evet      | **C/U, Radix**                     | Hayir               | Hayir    |
| sheet           | Evet      | Radix subparts                              | Evet      | **C/U, Radix**                     | Hayir               | **Evet** |
| sonner          | Evet      | Hayir                                       | **Hayir** | Imperative store                   | Toast kendi state'i | Hayir    |
| tabs            | Evet      | Radix subparts                              | Evet      | **C/U, Radix**                     | Hayir               | Hayir    |
| tooltip         | Evet      | Radix subparts                              | Evet      | **C/U, Radix**                     | Hayir               | Hayir    |

## Organism'ler

| Aile             | className | asChild                   | Ref  | State modeli                                  | Loading | CVA      |
| ---------------- | --------- | ------------------------- | ---- | --------------------------------------------- | ------- | -------- |
| announcement-bar | Evet      | Hayir                     | Evet | Dismiss internal                              | Hayir   | **Evet** |
| data-table       | Evet      | Hayir                     | Evet | Sort/filter/page/selection internal           | Hayir   | Hayir    |
| footer           | Evet      | Hayir                     | Evet | Newsletter input internal                     | Hayir   | **Evet** |
| navbar           | Evet      | Link/Trigger parcalarinda | Evet | Mobile/auto-hide internal; Radix dropdown mix | Hayir   | **Evet** |
| sidebar          | Evet      | Hayir                     | Evet | Collapse/mobile/submenu internal              | Hayir   | **Evet** |

## CVA envanteri

| Aile             | Recipe                                                 | Kaynak export | Public barrel export |
| ---------------- | ------------------------------------------------------ | ------------- | -------------------- |
| badge            | `badgeVariants`                                        | Evet          | Evet                 |
| button           | `buttonVariants`                                       | Evet          | Evet                 |
| card             | `cardVariants`                                         | Evet          | Evet                 |
| alert            | `alertVariants`                                        | Evet          | **Hayir**            |
| modal            | `modalContentVariants`                                 | Evet          | Evet                 |
| sheet            | `sheetContentVariants`                                 | Evet          | Evet                 |
| announcement-bar | `announcementBarVariants`                              | Evet          | Evet                 |
| footer           | `footerVariants`                                       | Evet          | Evet                 |
| navbar           | `navbarVariants`, `megaMenuVariants`, `topBarVariants` | Evet          | Evet                 |
| sidebar          | `sidebarVariants`                                      | Evet          | Evet                 |

## Kritik ozellestirme aciklari

1. `className` escape hatch'i yaygin olsa da meaningful alt parcalari hedefleyen stabil `data-slot` contract'i yoktur.
2. CVA recipe'leri yalniz 10 ailede bulunur ve export politikasi tutarli degildir.
3. Birlesik componentlerde state genellikle internal'dir. DatePicker open state'i, DataTable page/sort/filter state'i, Navbar mobile state'i ve Sidebar collapse state'i consumer tarafindan controlled kullanilamaz.
4. `ref` destegi ana high-level componentlerde eksiktir: Autocomplete, Calendar ve DatePicker bunun en belirgin ornekleridir.
5. `asChild` kimi yerde gercek Slot composition, kimi yerde kaynak icindeki internal kullanim, kimi yerde yalniz element turu degisimi anlamina gelir. Public sozlesme net degildir.
6. Loading API ortak bir model izlemez; spinner boyutu, `aria-busy`, metin koruma ve disabled semantigi aileler arasinda standart degildir.
7. Native/Radix props cogunlukla korunur; fakat custom high-level prop arayuzleri DOM props/ref'i her zaman tasimaz.

## V3 kabul sozlesmesi

Her registry item icin asgari kabul:

- Root ve meaningful alt parcalarda stabil `data-slot`.
- Varyantli root'ta `data-variant`; boyutlu root'ta `data-size`.
- Consumer `className` degeri recipe/default siniflardan sonra merge edilir.
- CVA kullanan recipe named export olur.
- Polymorphism semantik olarak anlamliysa gercek Radix Slot ile `asChild` saglanir.
- Public component ref'i dogru DOM/Radix elementine ulasir.
- State ya Radix controlled/uncontrolled contract'ini korur ya da `value/defaultValue/onValueChange` benzeri acik bir contract sunar.
- Loading varsa `aria-busy`, disabled davranisi, accessible label ve layout-stability kurali tanimlidir.
- Native props gizlenmez; business logic componentin icine gomulmez.

## Yeniden uretme

```bash
node scripts/audit-v2-source.mjs --json \
  | jq '.components[] | {family, capabilities}'
```

Static script source sinyallerini raporlar; yukaridaki state ve `asChild` yorumlari manuel API incelemesidir.
