/**
 * Poyraz UI — Default Theme Configurations
 *
 * `src/theme-tokens.json` is the canonical source for both these runtime
 * theme objects and the generated declarations in `src/preset.css`.
 * Regenerate the CSS after changing tokens:
 *
 * ```bash
 * node scripts/generate-theme-tokens.mjs
 * ```
 *
 * Use the themes with reactive-switcher's ThemeProvider:
 *
 * ```tsx
 * import { ThemeProvider } from "reactive-switcher";
 * import { poyrazLightTheme, poyrazDarkTheme } from "poyraz-ui/themes";
 *
 * <ThemeProvider themes={[poyrazLightTheme, poyrazDarkTheme]}>
 *   <App />
 * </ThemeProvider>
 * ```
 */
interface PoyrazTheme {
    name: string;
    variables: Record<string, string>;
}
type PoyrazTokenGroup = {
    readonly [key: string]: string | PoyrazTokenGroup;
};
interface PoyrazThemeTokens {
    readonly primitives: PoyrazTokenGroup;
    readonly shared: PoyrazTokenGroup;
}
/** Primitive palettes and shared scales for tooling and custom theme authors. */
declare const poyrazThemeTokens: PoyrazThemeTokens;
declare const poyrazLightTheme: PoyrazTheme;
declare const poyrazDarkTheme: PoyrazTheme;
declare const poyrazThemes: PoyrazTheme[];

export { type PoyrazTheme, type PoyrazThemeTokens, type PoyrazTokenGroup, poyrazDarkTheme, poyrazLightTheme, poyrazThemeTokens, poyrazThemes };
