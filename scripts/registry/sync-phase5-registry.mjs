#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const registryFile = resolve("registry/poyraz/ui/registry.json");
const registry = JSON.parse(await readFile(registryFile, "utf8"));
const button = registry.items.find((item) => item.name === "button");

if (!button) throw new Error("Button registry item is missing.");

button.files[0].target = "@ui/atoms/button.tsx";

const specs = [
  ["poyraz-recipes", "recipes.ts", "@ui/recipes.ts", ["class-variance-authority@^0.7.1"], []],
  ["label", "atoms/label.tsx", "@ui/atoms/label.tsx", [], []],
  [
    "separator",
    "atoms/separator.tsx",
    "@ui/atoms/separator.tsx",
    ["@radix-ui/react-separator@^1.1.8"],
    [],
  ],
  ["skeleton", "atoms/skeleton.tsx", "@ui/atoms/skeleton.tsx", [], []],
  [
    "input",
    "atoms/input.tsx",
    "@ui/atoms/input.tsx",
    ["class-variance-authority@^0.7.1"],
    ["poyraz-recipes"],
  ],
  [
    "textarea",
    "atoms/textarea.tsx",
    "@ui/atoms/textarea.tsx",
    ["class-variance-authority@^0.7.1"],
    ["poyraz-recipes"],
  ],
  [
    "checkbox",
    "atoms/checkbox.tsx",
    "@ui/atoms/checkbox.tsx",
    ["@radix-ui/react-checkbox@^1.3.3"],
    [],
  ],
  [
    "radio-group",
    "atoms/radio-group.tsx",
    "@ui/atoms/radio-group.tsx",
    ["@radix-ui/react-radio-group@^1.3.8"],
    [],
  ],
  ["switch", "atoms/switch.tsx", "@ui/atoms/switch.tsx", ["@radix-ui/react-switch@^1.2.6"], []],
  ["badge", "atoms/badge.tsx", "@ui/atoms/badge.tsx", ["class-variance-authority@^0.7.1"], []],
  [
    "avatar",
    "atoms/avatar.tsx",
    "@ui/atoms/avatar.tsx",
    ["@radix-ui/react-avatar@^1.1.11", "class-variance-authority@^0.7.1"],
    [],
  ],
  ["card", "atoms/card.tsx", "@ui/atoms/card.tsx", ["class-variance-authority@^0.7.1"], []],
  [
    "card-variants",
    "atoms/card-variants.tsx",
    "@ui/atoms/card-variants.tsx",
    ["lucide-react@^0.574.0"],
    ["card", "badge", "button"],
  ],
  [
    "typography",
    "atoms/typography.tsx",
    "@ui/atoms/typography.tsx",
    ["class-variance-authority@^0.7.1"],
    [],
  ],
  ["scroll-area", "atoms/scroll-area.tsx", "@ui/atoms/scroll-area.tsx", [], []],
  [
    "form-fields",
    "atoms/form-fields.tsx",
    "@ui/atoms/form-fields.tsx",
    ["lucide-react@^0.574.0"],
    ["input", "button"],
  ],
  ["logo", "atoms/logo.tsx", "@ui/atoms/logo.tsx", ["class-variance-authority@^0.7.1"], []],
  ["bg-pattern", "atoms/bg-pattern.tsx", "@ui/atoms/bg-pattern.tsx", [], []],
];

const selectionCss = (slot) => ({
  "@media (forced-colors: active)": {
    [`[data-slot=\"${slot}\"]`]: { "forced-color-adjust": "auto" },
    [`[data-slot=\"${slot}\"][data-state=\"checked\"]`]: {
      background: "Highlight",
      color: "HighlightText",
    },
  },
});

const itemCss = {
  input: {
    ".poyraz-glass-field": { "background-color": "var(--glass-fallback)" },
    "@supports ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)))": {
      ".poyraz-glass-field": {
        "background-color": "var(--glass-background)",
        "-webkit-backdrop-filter":
          "blur(var(--poyraz-blur-soft)) saturate(var(--poyraz-saturation-glass))",
        "backdrop-filter": "blur(var(--poyraz-blur-soft)) saturate(var(--poyraz-saturation-glass))",
      },
    },
    "input:autofill, textarea:autofill, input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus":
      {
        "-webkit-text-fill-color": "var(--foreground)",
        color: "var(--foreground)",
        "caret-color": "var(--foreground)",
        "box-shadow": "0 0 0 1000px var(--background) inset",
      },
    ".poyraz-glass-field:autofill, .poyraz-glass-field:-webkit-autofill, .poyraz-glass-field:-webkit-autofill:hover, .poyraz-glass-field:-webkit-autofill:focus":
      {
        "box-shadow": "0 0 0 1000px var(--glass-fallback) inset",
      },
  },
  checkbox: selectionCss("checkbox"),
  "radio-group": selectionCss("radio-group-item"),
  switch: selectionCss("switch"),
  card: {
    '.poyraz-card [data-slot="card"]': {
      "border-radius": "var(--poyraz-radius-lg)",
    },
  },
  typography: {
    ".poyraz-text-hand-drawn": {
      position: "relative",
      "padding-bottom": "0.08em",
      color: "inherit",
      "text-decoration": "none",
    },
    ".poyraz-text-hand-drawn::after": {
      content: '""',
      position: "absolute",
      "z-index": "-1",
      right: "-0.08em",
      bottom: "-0.1em",
      left: "-0.08em",
      height: "0.24em",
      background: "var(--poyraz-text-effect)",
      "clip-path":
        "polygon(0 58%, 7% 43%, 15% 52%, 24% 38%, 34% 49%, 45% 35%, 57% 48%, 68% 34%, 78% 46%, 89% 32%, 100% 43%, 99% 68%, 90% 59%, 79% 70%, 68% 58%, 57% 73%, 45% 60%, 34% 75%, 23% 62%, 14% 77%, 6% 66%, 0 80%)",
      opacity: "0.9",
      transform: "rotate(-1.2deg) skewX(-7deg)",
    },
    ".poyraz-text-shimmer": {
      color: "transparent",
      "background-image":
        "linear-gradient(100deg, var(--poyraz-text-effect) 0%, var(--poyraz-text-effect) 42%, white 50%, var(--poyraz-text-effect) 58%, var(--poyraz-text-effect) 100%)",
      "background-size": "260% 100%",
      "background-position": "120% center",
      "background-clip": "text",
      "-webkit-background-clip": "text",
      animation: "poyraz-text-shimmer 2.8s var(--poyraz-motion-ease-standard) infinite",
    },
    ".poyraz-text-marker::before": {
      content: '""',
      position: "absolute",
      "z-index": "-1",
      inset: "54% -0.08em 0.02em",
      "border-radius": "0.2em 0.35em 0.18em 0.3em",
      background: "var(--poyraz-text-effect-soft)",
      transform: "rotate(-1.2deg) skewX(-5deg)",
    },
    ".poyraz-text-outline": {
      color: "transparent",
      "font-weight": "800",
      "letter-spacing": "0.015em",
      "paint-order": "stroke fill",
      "-webkit-text-stroke": "clamp(1px, 0.035em, 2px) var(--poyraz-text-effect)",
      "text-shadow": "0 0 0.01px var(--poyraz-text-effect)",
    },
    ".poyraz-text-gradient": {
      color: "transparent",
      "background-image":
        "linear-gradient(110deg, var(--poyraz-text-effect), color-mix(in srgb, var(--poyraz-text-effect) 48%, white), var(--poyraz-primary-hover))",
      "background-clip": "text",
      "-webkit-background-clip": "text",
    },
    ".poyraz-text-glow": {
      color: "var(--poyraz-text-effect)",
      "text-shadow":
        "0 0 0.35em color-mix(in srgb, var(--poyraz-text-effect) 42%, transparent), 0 0 0.8em color-mix(in srgb, var(--poyraz-text-effect) 24%, transparent)",
    },
    ".poyraz-text-boxed": {
      border: "1px solid color-mix(in srgb, var(--poyraz-text-effect) 45%, transparent)",
      "border-radius": "0.32em",
      background: "var(--poyraz-text-effect-soft)",
      color: "var(--poyraz-text-effect)",
      "box-decoration-break": "clone",
      "-webkit-box-decoration-break": "clone",
    },
    ".poyraz-text-strike::after": {
      content: '""',
      position: "absolute",
      right: "-0.08em",
      top: "52%",
      left: "-0.08em",
      height: "0.12em",
      "border-radius": "999px 40% 999px 35%",
      background: "var(--poyraz-text-effect)",
      transform: "rotate(-2deg) skewX(-9deg)",
    },
    "@keyframes poyraz-text-shimmer": {
      "0%, 14%": { "background-position": "120% center" },
      "72%, 100%": { "background-position": "-120% center" },
    },
    "@media (prefers-reduced-motion: reduce)": {
      ".poyraz-text-shimmer": {
        animation: "none !important",
        color: "var(--poyraz-text-effect)",
      },
    },
  },
  logo: {
    ".poyraz-logo-shine::after": {
      content: '""',
      position: "absolute",
      "z-index": "1",
      inset: "-55% auto -55% -45%",
      width: "30%",
      background: "linear-gradient(90deg, transparent, rgb(255 255 255 / 0.78), transparent)",
      filter: "blur(1px)",
      transform: "translateX(-180%) skewX(-18deg)",
      "pointer-events": "none",
    },
    ".poyraz-logo-shine:hover::after, .poyraz-logo-shine-loop::after": {
      animation: "poyraz-logo-shine 1.15s var(--poyraz-motion-ease-out)",
    },
    "@keyframes poyraz-logo-shine": {
      from: { transform: "translateX(-180%) skewX(-18deg)" },
      to: { transform: "translateX(700%) skewX(-18deg)" },
    },
    "@media (prefers-reduced-motion: reduce)": {
      ".poyraz-logo-shine::after": { animation: "none !important", display: "none" },
    },
  },
};

for (const [, source] of specs) {
  const runtimeSource = resolve("components/ui", source);
  const registrySource = resolve("registry/poyraz/ui/phase5", source);
  await mkdir(dirname(registrySource), { recursive: true });
  await writeFile(registrySource, await readFile(runtimeSource, "utf8"));
}

const phase5Items = specs.map(([name, source, target, dependencies, internal]) => ({
  name,
  type: "registry:ui",
  title: name
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" "),
  description: `Poyraz Soft Glass ${name} component.`,
  author: "Poyraz Avsever",
  dependencies,
  registryDependencies: [
    "@poyraz/poyraz-utils",
    "@poyraz/poyraz-theme",
    ...internal.map((dependency) => `@poyraz/${dependency}`),
  ],
  ...(itemCss[name] ? { css: itemCss[name] } : {}),
  files: [
    {
      path: `phase5/${source}`,
      type: "registry:ui",
      target,
    },
  ],
  meta: { category: "phase-5-foundation", phase: "beta" },
}));

registry.items = [button, ...phase5Items];
await writeFile(registryFile, `${JSON.stringify(registry, null, 2)}\n`);
console.log(`Phase 5 registry synchronized (${registry.items.length} items).`);
