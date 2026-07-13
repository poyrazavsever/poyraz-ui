# Poyraz UI v3 Anti-Goals

Durum: Faz 0 tarihsel scope-control kaydi. Dagitimla ilgili 2 numarali karar ADR-0003
tarafindan supersede edilmistir; tasarim, API, motion ve kalite sinirlari gecerlidir.

## Urun ve dagitim anti-goallari

1. Sifirdan shadcn ile rekabet eden genel amacli bir dosya kopyalama/package-manager motoru yazmak.
2. ~~Runtime npm component package'ini v3'un birincil tuketim modeli olarak surdurmek.~~ Superseded: npm package ve source registry V3'te iki resmi kanaldir.
3. Consumer'in kurduktan sonra degistirdigi source dosyalarina otomatik, conflictsiz update/merge garantisi vermek.
4. Tum componentleri tek komutla zorunlu kuran monolitik dependency graph olusturmak.
5. Registry item'larini Poyraz'a ait gizli runtime global state veya kapali API'ye baglamak.
6. Atomic Design klasor adlarini consumer'in dosya organizasyonuna zorlamak.
7. Next.js'e ozel importlari generic UI item'larina gommek.

## Tasarim anti-goallari

8. Referans smart-home ekranlarini pixel-perfect kopyalamak.
9. Eski macOS/Aero glass gorunumunu taklit etmek.
10. Her componenti glass yapmak; uzun metin, form hata mesaji, table/list body ve yogun content icin okunabilir opak surface kaybolmayacak.
11. Brand kirmizisini her border, glow, hover ve status icin kullanmak.
12. Dusuk kontrasti minimalizm sanmak.
13. Asiri pill radius veya birbirinden ayirt edilemeyen cok sayida radius seviyesi uretmek.
14. Shadow/blur ile component hiyerarsisini markup ve spacing olmadan cozmeye calismak.
15. Yalniz ekran goruntusunde iyi duran, gercek veri/form/navigation akisinda calismayan showcase componentler uretmek.

## Component API anti-goallari

16. Her component icin anlamsiz polymorphism veya zorunlu `asChild` eklemek.
17. CVA recipe icinde consumer'in override edemeyecegi `!important` siniflar kullanmak.
18. Business logic, veri fetching, routing veya auth state'ini UI primitive'ine gommek.
19. Native DOM/Radix props'u daraltan, controlled state'i engelleyen wrapper API'leri tasarlamak.
20. Her gorsel ayrinti icin prop ekleyip `className`, data-slot ve CSS variable escape hatch'lerini gereksiz kilmak.
21. Icon API'sini tek bir Lucide ikonuna veya sabit pozisyona kilitlemek.
22. UI metinlerini cevrilemez bicimde hard-code etmek.
23. Server-safe componentleri convenience ugruna topluca `use client` yapmak.

## Motion ve glass anti-goallari

24. Animasyonu icerikten daha baskin hale getirmek.
25. Layout thrash olusturan width/height/top/left animasyonlarini varsayilan interaction dili yapmak.
26. `prefers-reduced-motion` destegi olmayan bir animation yayinlamak.
27. Blur destegi veya performansi olmayan cihazda componenti kullanilamaz/okunamaz birakmak.
28. Nested glass katmanlarini sinirsiz kullanmak.
29. Hover-only bilgi veya davranis tasarlamak.

## Accessibility ve kalite anti-goallari

30. Radix kullanmayi otomatik accessibility uygunlugu kabul etmek.
31. Kontrast, focus, keyboard ve screen-reader testini yalniz docs smoke testine birakmak.
32. Visual snapshot'i interaction testinin yerine koymak.
33. Private source'ta calisan fakat temiz consumer fixture'inda kurulamayan registry item yayinlamak.
34. Docs ornegi ile gercek kurulan registry kaynagini farkli tutmak.
35. Sabit hex/numbered Tailwind palette'i semantic token yerine component kaynaklarinda kullanmak.

## V3 kapsaminda olmayan isler

- React Native veya non-React framework portu.
- Figma kitinin bu engineering release ile ayni anda tamamlanmasi.
- Tum olasi dashboard/page template'lerinin v3 stable'a kadar uretilmesi.
- Genel purpose charting, data-grid veya form-builder urunu yazmak.
- Tailwind v3 icin paralel stylesheet.
- Consumer application migration'ini otomatik AST codemod ile eksiksiz yapmak; once rehber ve sinirli codemod ele alinir.
- V2'nin tum gorsel variantlarini v3'te birebir korumak.

## Degisiklik karar testi

Bir teklif icin su sorular sorulur:

1. Ortak canonical source'tan npm package ve source registry sozlesmesini guclendiriyor mu?
2. Semantic token veya composable API ile cozulmesi gerekirken yeni prop/engine mi ekliyor?
3. Accessibility, fallback ve performance maliyeti olculdu mu?
4. Pilot Button + theme + clean fixture kapsamini gereksiz buyutuyor mu?
5. Stable release icin zorunlu mu, sonraki minor/block release'e ertelenebilir mi?

Bir anti-goal bilincli olarak asilacaksa ADR, owner, migration etkisi ve test plani gereklidir.

## Onay kaydi

| Rol               | Karar               | Tarih / not                 |
| ----------------- | ------------------- | --------------------------- |
| Product owner     | Bekliyor            | V3 API freeze oncesi        |
| Design owner      | Bekliyor            | Token/foundation review ile |
| Engineering owner | Faz 0 icin onerildi | Registry ADR'lariyla uyumlu |

P0-018'in teslimi bu listenin onaya sunulmasidir. Nihai sign-off kaydi bosken API freeze yapilmaz.
