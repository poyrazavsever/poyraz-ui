# V2 Accessibility Baseline

## Kapsam ve iddia siniri

Bu belge v2 kaynaklarinin otomatik statik sinyal taramasi ve manuel kod incelemesidir. WCAG uygunluk raporu degildir. Render edilmis DOM uzerinde axe, ekran okuyucu veya gercek browser klavye turu bu baseline sirasinda kosulmamistir; bunlar v3 release gate'inde zorunludur.

Otomatik tarama:

```bash
node scripts/audit-v2-a11y-static.mjs
```

Script 44 TSX dosyasini baseline commit'inden okudu; 21 native button, 6 native input, 2 `listbox` ve 2 `option` role'u buldu. Regex sinyalleri confirmed violation degil, manuel inceleme kuyrugudur.

## Pozitif baseline

- Dialog, Select, Dropdown, Popover, Tabs, Tooltip, Accordion, Checkbox, Radio ve Switch gibi interaction'lar cogunlukla Radix primitive tabanlidir.
- `FormControl`, description ve message id'lerini `aria-describedby` / `aria-invalid` ile baglar.
- Bir cok icon-only kontrol `aria-label` veya `sr-only` metin tasir.
- Alert `role=alert`, Pagination navigation role/label ve Breadcrumb nav label kullanir.
- DataTable row-selection checkbox'larinda accessible label vardir; opsiyonel `caption` destegi bulunur.
- Button loading durumunda `aria-busy` ve disabled davranisi uygular.
- `prefers-reduced-motion: reduce`, tum animation/transition surelerini 1 ms'e indirir.

## Otomatik sinyaller

| Sinyal | Adet | Manuel yorum |
| --- | ---: | --- |
| `onClick` alan native olmayan element | 5 | Bir kismi aria-hidden backdrop; Autocomplete wrapper ve sortable `th` ayrica incelenmeli |
| Sortable `th`, `aria-sort` yok | 1 | **Dogrulanmis problem** |
| Listbox var, `aria-activedescendant` yok | 2 dosya | **Autocomplete ve Command Palette'te dogrulandi** |
| Disclosure sinyali var, opening tag'de `aria-expanded` yok | 3 | Sidebar section/submenu dogrulandi; Autocomplete'te expanded input uzerinde oldugu icin regex false-positive |
| Input opening tag'de id/accessible-name sinyali yok | 6 | Generic Input consumer'a birakir; Footer/Navbar/Sidebar default ornekleri riskli |

Detayli dosya/satir listesi script ciktisindadir.

## Manuel bulgular

### Yuksek oncelik

1. **DataTable sorting klavye ile erisilemez.** Sorting handler dogrudan `<th onClick>` uzerindedir; header focusable degildir, icinde button yoktur ve `aria-sort` guncellenmez. Header icinde native button ve `aria-sort=ascending|descending|none` kullanilmalidir.
2. **Navbar mobile panel dialog/disclosure semantigine sahip degil.** Toggle'da `aria-expanded` ve `aria-controls` yok; panel acilinca focus tasinmiyor, focus trap, Escape ve return-focus uygulanmiyor. Kapali panel off-screen iken `inert` veya `aria-hidden` degil, dolayisiyla focusable descendants tab sirasinda kalabilir.
3. **Sidebar floating/mobile panel ayni focus sorunlarini tasiyor.** Backdrop semantigi yok; trigger expanded/controls state'ini bildirmiyor; acilis/kapanista focus yonetimi bulunmuyor.
4. **Autocomplete APG combobox contract'i eksik.** Input `role=combobox` ve `aria-expanded` tasiyor; fakat listbox id'si, `aria-controls`, option id'leri ve `aria-activedescendant` yok. Gorsel highlight ekran okuyucuya aktif option olarak aktarilmaz. Loading/empty sonuc da live region degildir.
5. **Calendar yalniz button grid'i olarak render edilir.** Calendar/grid/gridcell semantigi, tam tarih accessible name'i, secili/today state'i (`aria-selected`, `aria-pressed` veya `aria-current=date`) ve roving focus yoktur. Gun basliklari screen reader iliskisi kurmaz.

### Orta oncelik

6. **Command Palette custom listbox davranisi eksik.** Option `div`leri tab stop'tur; root'ta active-descendant/selected model yoktur. Base item Enter/Space activation contract'i saglamaz; consumer yalniz `onClick` verdiginde klavye davranisi kirilir.
7. **FooterNewsletter email input'un accessible label'i yoktur.** Placeholder label yerine gecmez. `label`, visually-hidden label veya `aria-label` gereklidir.
8. **NavbarSearch ve SidebarSearch varsayilan accessible name garantilemez.** Consumer props ile `aria-label` verebilir, fakat default API bunu zorunlu kilmaz ve visible label baglamaz.
9. **SidebarSection, SidebarSubMenu ve NavbarMobileDropdown disclosure state'ini bildirmez.** Trigger'lara `aria-expanded`, `aria-controls`; content'e stabil id/hidden semantigi eklenmelidir.
10. **Mobile drill-down paneller off-screen iken erisilebilir kalabilir.** Inactive panel `inert`, `hidden` veya uygun aria state'i kullanmaz; panel gecisinde heading/focus duyurusu yoktur.
11. **Mermaid async state'leri duyurulmaz.** Loading/error container `role=status`, `role=alert` veya `aria-live` tasimaz. Uretilen SVG'nin accessible title/description sozlesmesi garanti edilmez.
12. **Column visibility popup custom overlay'dir.** Popover/menu semantigi, focus management ve Escape behavior'u yoktur; fake checkbox span'i `aria-checked` bildirmez.

### Sistemik ve release oncesi olculmesi gerekenler

- Hard-coded English accessible textler localization'a acik degildir: Close, Dismiss, Previous/Next, Search, Back vb.
- Focus ring butun interactive varyantlarda light/dark/glass surface uzerinde kontrast testi gerektirir.
- Status, placeholder ve muted text contrast'i WCAG 2.2 AA icin rendered renklerle olculmemistir.
- 32 px civarindaki icon control'ler mobil hedef boyutu acisindan gozden gecirilmelidir.
- `dangerouslySetInnerHTML` ile Mermaid SVG/CSS injection accessibility ile birlikte security review de gerektirir.
- Dynamic content, toast announcement timing'i ve form error focus davranisi browser testinde incelenmelidir.

## V3 accessibility kabul kapilari

Her registry item icin:

1. Typecheck ve build fixture.
2. axe-core rendered-state testi; kritik ve ciddi ihlal sifir.
3. Klavye senaryosu: Tab/Shift+Tab, Enter/Space, Escape ve arrow keys (uygunsa).
4. Focus visible, focus trap, return focus ve kapali layer `inert` kontrolu.
5. Light/dark/glass varyantlarinda text, icon, border ve focus contrast olcumu.
6. `prefers-reduced-motion` ve yeni `prefers-reduced-transparency` fallback testi.
7. NVDA + Firefox veya JAWS + Chrome; VoiceOver + Safari ile kritik primitive smoke testi.
8. Accessible name/description ve state attribute snapshot'i.
9. Touch target ve 200% zoom/reflow kontrolu.
10. Docs ornegi, componentin accessible kullanimini varsayilan olarak gostermeli.

## Component oncelik sirasi

| Oncelik | Componentler | Neden |
| --- | --- | --- |
| P0 | DataTable, Autocomplete, Calendar/DatePicker, Navbar mobile, Sidebar mobile | Klavye/focus/role temel davranisi etkileniyor |
| P1 | Command Palette, column toggle, FooterNewsletter, Mermaid | Accessible name/state/announcement eksigi |
| P2 | Hard-coded labels, touch size, contrast tuning | Sistemik kalite ve localization |

V3 alpha, P0 grubunda acik yuksek oncelikli bulguyla yayinlanmamalidir.

