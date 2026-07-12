import { buildRegistryMotionCss } from "./motion-registry.mjs";

const glassCss = {
  "@layer components": {
    ".poyraz-glass": {
      "--poyraz-glass-blur-current": "var(--poyraz-blur-glass)",
      "--poyraz-glass-saturation-current": "var(--poyraz-saturation-glass)",
      "background-color": "var(--glass-fallback)",
      border: "1px solid var(--glass-border-outer)",
      "border-radius": "var(--poyraz-radius-lg)",
      "box-shadow": "var(--glass-shadow)",
      "background-clip": "padding-box",
    },
    ".poyraz-glass-strong": {
      "--poyraz-glass-blur-current": "var(--poyraz-blur-glass-strong)",
      "--poyraz-glass-saturation-current": "var(--poyraz-saturation-glass-strong)",
    },
    ".poyraz-glass .poyraz-glass": {
      "--poyraz-glass-blur-current": "0px",
      "--poyraz-glass-saturation-current": "1",
      "background-color": "var(--glass-nested-background)",
      "-webkit-backdrop-filter": "none",
      "backdrop-filter": "none",
    },
  },
  "@supports ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)))": {
    ".poyraz-glass": {
      "background-color": "var(--glass-background)",
      "-webkit-backdrop-filter":
        "blur(var(--poyraz-glass-blur-current)) saturate(var(--poyraz-glass-saturation-current))",
      "backdrop-filter":
        "blur(var(--poyraz-glass-blur-current)) saturate(var(--poyraz-glass-saturation-current))",
    },
    ".poyraz-glass-strong": { "background-color": "var(--glass-background-strong)" },
    ".poyraz-glass .poyraz-glass": {
      "background-color": "var(--glass-nested-background)",
      "-webkit-backdrop-filter": "none",
      "backdrop-filter": "none",
    },
  },
  "@supports not ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)))": {
    ".poyraz-glass": { "background-color": "var(--glass-fallback)" },
  },
  "@media (prefers-reduced-transparency: reduce)": {
    ".poyraz-glass": {
      "background-color": "var(--glass-fallback)",
      "box-shadow": "var(--poyraz-shadow-sm)",
      "-webkit-backdrop-filter": "none",
      "backdrop-filter": "none",
    },
  },
  '[data-poyraz-transparency="reduced"] .poyraz-glass, [data-poyraz-performance="low"] .poyraz-glass, .poyraz-glass[data-poyraz-transparency="reduced"], .poyraz-glass[data-poyraz-performance="low"]':
    {
      "background-color": "var(--glass-fallback)",
      "box-shadow": "var(--poyraz-shadow-sm)",
      "-webkit-backdrop-filter": "none",
      "backdrop-filter": "none",
    },
};

export function buildRegistryThemeCss() {
  return { ...glassCss, ...buildRegistryMotionCss() };
}
