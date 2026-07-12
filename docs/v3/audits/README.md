# Poyraz UI v2 Baseline Audit Index

Bu dizin, v3 calismasi baslamadan onceki `2.1.0` durumunu olculebilir ve tekrar uretilebilir bir baseline olarak sabitler.

## Baseline kimligi

- Git ref: `0437769ce7597a2c86e0d93d98be5158fa09e79a`
- Package surumu: `2.1.0`
- Kayit tarihi: 11 Temmuz 2026
- Node: `v24.16.0`
- pnpm: `11.5.1`
- Kaynak audit komutu: `node scripts/audit-v2-source.mjs`
- Accessibility sinyal taramasi: `node scripts/audit-v2-a11y-static.mjs`
- Build boyut taramasi: `node scripts/audit-v2-build-output.mjs`

Kaynak ve accessibility scriptleri varsayilan olarak yukaridaki commit'i okur. Guncel calisma agacini incelemek icin `--worktree`, farkli bir commit icin `--ref=<git-ref>` kullanilir. Scriptler dosya yazmaz.

## Faz 0 kanit haritasi

| Gorev          | Kanit                                                                          | Durum                                                 |
| -------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------- |
| P0-001, P0-002 | [Public API envanteri](./public-api.md) ve `audit-v2-source.mjs`               | Tamamlandi                                            |
| P0-003, P0-004 | [Dependency ve client boundary](./dependencies-and-client-boundaries.md)       | Tamamlandi                                            |
| P0-005, P0-006 | [Token ve sabit renk auditi](./tokens-and-hardcoded-colors.md)                 | Tamamlandi                                            |
| P0-007, P0-008 | [CVA ve ozellestirme matrisi](./customization-matrix.md)                       | Tamamlandi                                            |
| P0-009, P0-010 | [Gorsel baseline](./visual-and-build-baseline.md) ve `docs/v3/baselines/*.png` | Tamamlandi                                            |
| P0-011, P0-012 | [Build baseline](./visual-and-build-baseline.md)                               | Tamamlandi                                            |
| P0-013         | [Accessibility baseline](./accessibility-baseline.md)                          | Baseline raporu tamamlandi; uygunluk iddiasi degildir |
| P0-014         | [ADR-0001](../adr/0001-registry-first-distribution.md)                         | Kabul edildi                                          |
| P0-015         | [ADR-0002](../adr/0002-legacy-runtime-package-policy.md)                       | Kabul edildi                                          |
| P0-016, P0-017 | [Destek matrisi](./support-matrix.md)                                          | Karar verildi                                         |
| P0-018         | [V3 anti-goals](./anti-goals.md)                                               | Ekip onayina sunuldu                                  |

## Yorumlama kurali

Static script ciktisi kanittir fakat tek basina runtime, accessibility veya browser uyumluluk karari degildir. Ozellikle `controlledSignals`, client-boundary ve JSX accessibility sinyalleri insan incelemesiyle birlikte yorumlanmistir. V3 implementasyonu ilerledikce bu belgeler yeniden yazilmaz; bunlar v2 baseline'ini temsil eder.
