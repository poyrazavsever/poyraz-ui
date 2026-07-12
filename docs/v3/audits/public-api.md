# V2 Public API Envanteri

## Ozet

`package.json` ve `src/**/index.ts` barrel dosyalari baseline commit'inde script ile tarandi.

| Sinif      | Runtime | Type-only |  Toplam |
| ---------- | ------: | --------: | ------: |
| Atom       |      42 |         3 |      45 |
| Molecule   |     129 |         9 |     138 |
| Organism   |      73 |         1 |      74 |
| Hook       |       4 |         0 |       4 |
| Utility    |       2 |         0 |       2 |
| Theme      |       3 |         1 |       4 |
| **Toplam** | **253** |    **14** | **267** |

Hooklar kaynak dosyalarinin atomic katmanindan bagimsiz siniflandirildi. `toast`, component olmayan imperative API oldugu icin utility olarak siniflandirildi. Root entry, atom/molecule/organism sembollerini tekrar export eder; tablodaki 267 sayisi benzersiz barrel bildirimi sayisidir, package subpath'lerindeki tekrarlar ikinci kez sayilmamistir.

## Package subpath sozlesmesi

| Import yolu            | Icerik                                           | Not                                    |
| ---------------------- | ------------------------------------------------ | -------------------------------------- |
| `poyraz-ui`            | `cn` + tum atom, molecule ve organism exportlari | Theme exportlari root'ta yok           |
| `poyraz-ui/atoms`      | Atom runtime ve type exportlari                  | ESM, CJS, DTS                          |
| `poyraz-ui/molecules`  | Molecule runtime ve type exportlari              | ESM, CJS, DTS                          |
| `poyraz-ui/organisms`  | Organism runtime ve type exportlari              | ESM, CJS, DTS                          |
| `poyraz-ui/themes`     | `PoyrazTheme`, light/dark theme ve array         | ESM, CJS, DTS                          |
| `poyraz-ui/preset.css` | Tailwind v4 theme bridge ve motion CSS           | `src/preset.css` dogrudan yayinlaniyor |

## Export listesi

`type` on eki type-only export'u belirtir.

### Atomlar

| Kaynak ailesi | Public semboller                                                                                                                                                                                                                  |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| avatar        | `Avatar`, `AvatarFallback`, `AvatarImage`                                                                                                                                                                                         |
| badge         | `Badge`, `badgeVariants`                                                                                                                                                                                                          |
| bg-pattern    | `type BgPatternProps`, `PatternCheckerboard`, `PatternCross`, `PatternDashedGrid`, `PatternDiagonal`, `PatternDiamond`, `PatternDots`, `PatternGrid`, `PatternLines`, `PatternRadial`, `type PatternRadialProps`, `PatternZigzag` |
| button        | `Button`, `buttonVariants`                                                                                                                                                                                                        |
| card          | `Card`, `CardContent`, `CardDescription`, `CardFooter`, `CardHeader`, `CardImage`, `CardTitle`, `cardVariants`                                                                                                                    |
| checkbox      | `Checkbox`                                                                                                                                                                                                                        |
| form-fields   | `NumberInput`, `PasswordInput`, `PhoneInput`, `SearchInput`, `UrlInput`                                                                                                                                                           |
| input         | `Input`                                                                                                                                                                                                                           |
| label         | `Label`                                                                                                                                                                                                                           |
| logo          | `Logo`                                                                                                                                                                                                                            |
| radio-group   | `RadioGroup`, `RadioGroupItem`                                                                                                                                                                                                    |
| scroll-area   | `ScrollArea`, `type ScrollAreaProps`                                                                                                                                                                                              |
| separator     | `Separator`                                                                                                                                                                                                                       |
| skeleton      | `Skeleton`                                                                                                                                                                                                                        |
| switch        | `Switch`                                                                                                                                                                                                                          |
| textarea      | `Textarea`                                                                                                                                                                                                                        |
| typography    | `Typography`                                                                                                                                                                                                                      |

### Molecule'ler

| Kaynak ailesi   | Public semboller                                                                                                                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accordion       | `Accordion`, `AccordionContent`, `AccordionItem`, `AccordionTrigger`                                                                                                                                                                                                                                                                                    |
| alert           | `Alert`, `AlertDescription`, `AlertTitle`                                                                                                                                                                                                                                                                                                               |
| autocomplete    | `Autocomplete`, `type AutocompleteOption`, `type AutocompleteProps`                                                                                                                                                                                                                                                                                     |
| breadcrumb      | `Breadcrumb`, `BreadcrumbEllipsis`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbList`, `BreadcrumbPage`, `BreadcrumbSeparator`                                                                                                                                                                                                                       |
| calendar        | `Calendar`                                                                                                                                                                                                                                                                                                                                              |
| card-templates  | `ArticleCard`, `ImageCard`, `NewsCard`, `PricingCard`, `ProductCard`, `StatsCard`, `TestimonialCard` ve her biri icin `type *Props`                                                                                                                                                                                                                     |
| command-palette | `CommandPalette`, `CommandPaletteContent`, `CommandPaletteEmpty`, `CommandPaletteFooter`, `CommandPaletteGroup`, `CommandPaletteInput`, `CommandPaletteItem`, `CommandPaletteList`, `CommandPaletteSeparator`, `CommandPaletteTrigger`, `useCommandPalette`                                                                                             |
| date-picker     | `DatePicker`                                                                                                                                                                                                                                                                                                                                            |
| dialog          | `Dialog`, `DialogClose`, `DialogContent`, `DialogDescription`, `DialogFooter`, `DialogHeader`, `DialogOverlay`, `DialogPortal`, `DialogTitle`, `DialogTrigger`                                                                                                                                                                                          |
| drawer          | `Drawer`, `DrawerClose`, `DrawerContent`, `DrawerDescription`, `DrawerFooter`, `DrawerHeader`, `DrawerOverlay`, `DrawerPortal`, `DrawerTitle`, `DrawerTrigger`                                                                                                                                                                                          |
| dropdown-menu   | `DropdownMenu`, `DropdownMenuCheckboxItem`, `DropdownMenuContent`, `DropdownMenuGroup`, `DropdownMenuItem`, `DropdownMenuLabel`, `DropdownMenuPortal`, `DropdownMenuRadioGroup`, `DropdownMenuRadioItem`, `DropdownMenuSeparator`, `DropdownMenuShortcut`, `DropdownMenuSub`, `DropdownMenuSubContent`, `DropdownMenuSubTrigger`, `DropdownMenuTrigger` |
| form            | `Form`, `FormControl`, `FormDescription`, `FormField`, `FormItem`, `FormLabel`, `FormMessage`, `useFormField`                                                                                                                                                                                                                                           |
| hover-card      | `HoverCard`, `HoverCardContent`, `HoverCardTrigger`                                                                                                                                                                                                                                                                                                     |
| modal           | `Modal`, `ModalClose`, `ModalContent`, `modalContentVariants`, `ModalDescription`, `ModalFooter`, `ModalHeader`, `ModalOverlay`, `ModalTitle`, `ModalTrigger`                                                                                                                                                                                           |
| pagination      | `Pagination`, `PaginationContent`, `PaginationEllipsis`, `PaginationItem`, `PaginationLink`, `PaginationNext`, `PaginationPrevious`                                                                                                                                                                                                                     |
| popover         | `Popover`, `PopoverContent`, `PopoverTrigger`                                                                                                                                                                                                                                                                                                           |
| select          | `Select`, `SelectContent`, `SelectGroup`, `SelectItem`, `SelectLabel`, `SelectScrollDownButton`, `SelectScrollUpButton`, `SelectSeparator`, `SelectTrigger`, `SelectValue`                                                                                                                                                                              |
| sheet           | `Sheet`, `SheetClose`, `SheetContent`, `sheetContentVariants`, `SheetDescription`, `SheetFooter`, `SheetHeader`, `SheetOverlay`, `SheetPortal`, `SheetTitle`, `SheetTrigger`                                                                                                                                                                            |
| sonner          | `Toaster`, `toast`                                                                                                                                                                                                                                                                                                                                      |
| tabs            | `Tabs`, `TabsContent`, `TabsList`, `TabsTrigger`                                                                                                                                                                                                                                                                                                        |
| tooltip         | `Tooltip`, `TooltipContent`, `TooltipProvider`, `TooltipTrigger`                                                                                                                                                                                                                                                                                        |

### Organism'ler

| Kaynak ailesi    | Public semboller                                                                                                                                                                                                                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| announcement-bar | `AnnouncementBar`, `announcementBarVariants`                                                                                                                                                                                                                                                                             |
| data-table       | `DataTable`, `type DataTableColumnDef`                                                                                                                                                                                                                                                                                   |
| footer           | `Footer`, `FooterApp`, `FooterAppLink`, `FooterBadge`, `FooterBottom`, `FooterBottomLinks`, `FooterBrand`, `FooterCTA`, `FooterDescription`, `FooterDivider`, `FooterGrid`, `FooterHeading`, `FooterLink`, `FooterLinkGroup`, `FooterNewsletter`, `FooterSection`, `FooterSocialLink`, `FooterSocials`, `footerVariants` |
| navbar           | `Navbar`, 31 composable `Navbar*` parcasi, `navbarVariants`, `megaMenuVariants`, `topBarVariants`, `useNavbar`                                                                                                                                                                                                           |
| sidebar          | `Sidebar`, 18 composable `Sidebar*` parcasi, `sidebarVariants`, `useSidebar`                                                                                                                                                                                                                                             |

Navbar'in tam parca listesi script ciktisinda tutulur; sayisal ozet, variant recipe'leri ve hook dahil toplam 34 runtime export'tur. Sidebar toplam 21 runtime export'tur.

### Hook, utility ve theme

| Sinif   | Semboller                                                                 |
| ------- | ------------------------------------------------------------------------- |
| Hook    | `useCommandPalette`, `useFormField`, `useNavbar`, `useSidebar`            |
| Utility | `cn`, `toast`                                                             |
| Theme   | `type PoyrazTheme`, `poyrazLightTheme`, `poyrazDarkTheme`, `poyrazThemes` |

## Baseline tutarsizliklari

1. `components/ui/molecules/mermaid.tsx` ve docs sayfasi mevcut, fakat `src/molecules/index.ts` export'u yoktur; npm public API'sinden erisilemez.
2. `alertVariants` component dosyasindan export edilmesine ragmen molecule barrel'inda export edilmez; Button/Card/Modal/Sheet recipe yaklasimiyla tutarsizdir.
3. Component prop type'larinin cogu kaynakta export edilse de barrel'dan export edilmez. Consumer `ButtonProps`, `CalendarProps`, `DatePickerProps` gibi tiplere public subpath uzerinden erisemez.
4. Hooklar icin ayri bir subpath yoktur; ilgili atomic barrel icinden gelir.
5. `cn` hem `src/utils.ts` hem `typography.tsx` icinde tanimlidir. Public `cn`, `src/utils.ts` surumudur; componentlerin tamami diger kopyaya baglidir.
6. Root entry theme export etmez. Consumer hem root hem `poyraz-ui/themes` importu yapmak zorundadir.
7. Public API atomic dizin modeline gore grupludur; registry-first hedefindeki item/bagimlilik modelini ifade etmez.

## Yeniden uretme

```bash
node scripts/audit-v2-source.mjs
node scripts/audit-v2-source.mjs --json
```

Script varsayilan olarak baseline commit'ini okur. JSON ciktisi her sembol icin `classification`, `kind`, `from` ve `barrel` alanlarini icerir.
