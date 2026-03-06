/**
 * Poyraz UI — Default Theme Configurations
 *
 * Use these with reactive-switcher's ThemeProvider:
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

export interface PoyrazTheme {
  name: string;
  variables: Record<string, string>;
}

/* ────────────────────────────────────────────────────────────────── */
/*  LIGHT THEME (matches preset.css fallback values)                  */
/* ────────────────────────────────────────────────────────────────── */

export const poyrazLightTheme: PoyrazTheme = {
  name: "light",
  variables: {
    // Core
    "--poyraz-background": "#ffffff",
    "--poyraz-foreground": "#0f172a",

    // Primary
    "--poyraz-primary": "#dc2626",
    "--poyraz-primary-foreground": "#ffffff",
    "--poyraz-primary-200": "#fecaca",
    "--poyraz-primary-600": "#b91c1c",
    "--poyraz-primary-700": "#991b1b",
    "--poyraz-primary-800": "#7f1d1d",
    "--poyraz-primary-900": "#450a0a",
    "--poyraz-primary-hover": "#b91c1c",
    "--poyraz-primary-active": "#991b1b",
    "--poyraz-primary-dark": "#7f1d1d",
    "--poyraz-primary-muted": "#fef2f2",
    "--poyraz-primary-muted-foreground": "#b91c1c",

    // Secondary
    "--poyraz-secondary": "#f8fafc",
    "--poyraz-secondary-foreground": "#0f172a",

    // Muted
    "--poyraz-muted": "#f8fafc",
    "--poyraz-muted-foreground": "#64748b",

    // Accent
    "--poyraz-accent": "#f1f5f9",
    "--poyraz-accent-hover": "#e2e8f0",
    "--poyraz-accent-foreground": "#0f172a",

    // Destructive
    "--poyraz-destructive": "#ef4444",
    "--poyraz-destructive-foreground": "#ffffff",
    "--poyraz-destructive-muted": "#fef2f2",
    "--poyraz-destructive-muted-foreground": "#991b1b",

    // Border & Input
    "--poyraz-border": "#e2e8f0",
    "--poyraz-border-strong": "#cbd5e1",
    "--poyraz-input": "#94a3b8",
    "--poyraz-ring": "#dc2626",

    // Overlay
    "--poyraz-overlay": "rgba(0, 0, 0, 0.4)",
    "--poyraz-overlay-light": "rgba(255, 255, 255, 0.8)",

    // Placeholder
    "--poyraz-placeholder": "#94a3b8",

    // Inverted
    "--poyraz-inverted": "#020617",
    "--poyraz-inverted-foreground": "#f8fafc",

    // Surface
    "--poyraz-surface-50": "#f8fafc",
    "--poyraz-surface-100": "#f1f5f9",
    "--poyraz-surface-200": "#e2e8f0",

    // Status — Info
    "--poyraz-info": "#eff6ff",
    "--poyraz-info-foreground": "#1e40af",
    "--poyraz-info-border": "#60a5fa",
    "--poyraz-info-icon": "#2563eb",
    "--poyraz-info-solid": "#2563eb",

    // Status — Success
    "--poyraz-success": "#f0fdf4",
    "--poyraz-success-foreground": "#166534",
    "--poyraz-success-border": "#4ade80",
    "--poyraz-success-icon": "#16a34a",
    "--poyraz-success-solid": "#059669",

    // Status — Warning
    "--poyraz-warning": "#fffbeb",
    "--poyraz-warning-foreground": "#854d0e",
    "--poyraz-warning-border": "#facc15",
    "--poyraz-warning-icon": "#ca8a04",
    "--poyraz-warning-solid": "#f59e0b",
  },
};

/* ────────────────────────────────────────────────────────────────── */
/*  DARK THEME                                                        */
/* ────────────────────────────────────────────────────────────────── */

export const poyrazDarkTheme: PoyrazTheme = {
  name: "dark",
  variables: {
    // Core
    "--poyraz-background": "#020617",
    "--poyraz-foreground": "#f8fafc",

    // Primary
    "--poyraz-primary": "#ef4444",
    "--poyraz-primary-foreground": "#ffffff",
    "--poyraz-primary-200": "#450a0a",
    "--poyraz-primary-600": "#dc2626",
    "--poyraz-primary-700": "#b91c1c",
    "--poyraz-primary-800": "#991b1b",
    "--poyraz-primary-900": "#7f1d1d",
    "--poyraz-primary-hover": "#dc2626",
    "--poyraz-primary-active": "#b91c1c",
    "--poyraz-primary-dark": "#991b1b",
    "--poyraz-primary-muted": "#1c0a0a",
    "--poyraz-primary-muted-foreground": "#fca5a5",

    // Secondary
    "--poyraz-secondary": "#0f172a",
    "--poyraz-secondary-foreground": "#f8fafc",

    // Muted
    "--poyraz-muted": "#0f172a",
    "--poyraz-muted-foreground": "#94a3b8",

    // Accent
    "--poyraz-accent": "#1e293b",
    "--poyraz-accent-hover": "#334155",
    "--poyraz-accent-foreground": "#f8fafc",

    // Destructive
    "--poyraz-destructive": "#dc2626",
    "--poyraz-destructive-foreground": "#ffffff",
    "--poyraz-destructive-muted": "#1c0a0a",
    "--poyraz-destructive-muted-foreground": "#fca5a5",

    // Border & Input
    "--poyraz-border": "#1e293b",
    "--poyraz-border-strong": "#334155",
    "--poyraz-input": "#475569",
    "--poyraz-ring": "#ef4444",

    // Overlay
    "--poyraz-overlay": "rgba(0, 0, 0, 0.7)",
    "--poyraz-overlay-light": "rgba(0, 0, 0, 0.5)",

    // Placeholder
    "--poyraz-placeholder": "#475569",

    // Inverted
    "--poyraz-inverted": "#f8fafc",
    "--poyraz-inverted-foreground": "#020617",

    // Surface
    "--poyraz-surface-50": "#0f172a",
    "--poyraz-surface-100": "#1e293b",
    "--poyraz-surface-200": "#334155",

    // Status — Info
    "--poyraz-info": "#0c1929",
    "--poyraz-info-foreground": "#93c5fd",
    "--poyraz-info-border": "#1e40af",
    "--poyraz-info-icon": "#60a5fa",
    "--poyraz-info-solid": "#3b82f6",

    // Status — Success
    "--poyraz-success": "#052e16",
    "--poyraz-success-foreground": "#86efac",
    "--poyraz-success-border": "#166534",
    "--poyraz-success-icon": "#4ade80",
    "--poyraz-success-solid": "#22c55e",

    // Status — Warning
    "--poyraz-warning": "#1a1304",
    "--poyraz-warning-foreground": "#fde68a",
    "--poyraz-warning-border": "#854d0e",
    "--poyraz-warning-icon": "#facc15",
    "--poyraz-warning-solid": "#eab308",
  },
};

/* ────────────────────────────────────────────────────────────────── */
/*  ALL THEMES (convenience array)                                    */
/* ────────────────────────────────────────────────────────────────── */

export const poyrazThemes: PoyrazTheme[] = [poyrazLightTheme, poyrazDarkTheme];
