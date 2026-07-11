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
  ["separator", "atoms/separator.tsx", "@ui/atoms/separator.tsx", ["@radix-ui/react-separator@^1.1.8"], []],
  ["skeleton", "atoms/skeleton.tsx", "@ui/atoms/skeleton.tsx", [], []],
  ["input", "atoms/input.tsx", "@ui/atoms/input.tsx", ["class-variance-authority@^0.7.1"], ["poyraz-recipes"]],
  ["textarea", "atoms/textarea.tsx", "@ui/atoms/textarea.tsx", ["class-variance-authority@^0.7.1"], ["poyraz-recipes"]],
  ["checkbox", "atoms/checkbox.tsx", "@ui/atoms/checkbox.tsx", ["@radix-ui/react-checkbox@^1.3.3"], []],
  ["radio-group", "atoms/radio-group.tsx", "@ui/atoms/radio-group.tsx", ["@radix-ui/react-radio-group@^1.3.8"], []],
  ["switch", "atoms/switch.tsx", "@ui/atoms/switch.tsx", ["@radix-ui/react-switch@^1.2.6"], []],
  ["badge", "atoms/badge.tsx", "@ui/atoms/badge.tsx", ["class-variance-authority@^0.7.1"], []],
  ["avatar", "atoms/avatar.tsx", "@ui/atoms/avatar.tsx", ["@radix-ui/react-avatar@^1.1.11", "class-variance-authority@^0.7.1"], []],
  ["card", "atoms/card.tsx", "@ui/atoms/card.tsx", ["class-variance-authority@^0.7.1"], []],
  ["card-variants", "atoms/card-variants.tsx", "@ui/atoms/card-variants.tsx", ["lucide-react@^0.574.0"], ["card", "badge", "button"]],
  ["typography", "atoms/typography.tsx", "@ui/atoms/typography.tsx", ["class-variance-authority@^0.7.1"], []],
  ["scroll-area", "atoms/scroll-area.tsx", "@ui/atoms/scroll-area.tsx", [], []],
  ["form-fields", "atoms/form-fields.tsx", "@ui/atoms/form-fields.tsx", ["lucide-react@^0.574.0"], ["input", "button"]],
  ["logo", "atoms/logo.tsx", "@ui/atoms/logo.tsx", ["class-variance-authority@^0.7.1"], []],
  ["bg-pattern", "atoms/bg-pattern.tsx", "@ui/atoms/bg-pattern.tsx", [], []],
];

const selectionCss = (slot) => ({
  "@media (forced-colors: active)": {
    [`[data-slot=\"${slot}\"]`]: { "forced-color-adjust": "auto" },
    [`[data-slot=\"${slot}\"][data-state=\"checked\"]`]: {
      "background": "Highlight",
      "color": "HighlightText",
    },
  },
});

const itemCss = {
  input: {
    ".poyraz-glass-field": { "background-color": "var(--glass-fallback)" },
    "@supports ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)))": {
      ".poyraz-glass-field": {
        "background-color": "var(--glass-background)",
        "-webkit-backdrop-filter": "blur(var(--poyraz-blur-soft)) saturate(var(--poyraz-saturation-glass))",
        "backdrop-filter": "blur(var(--poyraz-blur-soft)) saturate(var(--poyraz-saturation-glass))",
      },
    },
    "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus": {
      "-webkit-text-fill-color": "var(--foreground)",
      "caret-color": "var(--foreground)",
      "box-shadow": "0 0 0 1000px var(--background) inset",
    },
  },
  checkbox: selectionCss("checkbox"),
  "radio-group": selectionCss("radio-group-item"),
  switch: selectionCss("switch"),
  card: {
    ".poyraz-card [data-slot=\"card\"]": {
      "border-radius": "var(--poyraz-radius-lg)",
    },
  },
  typography: {
    ".poyraz-text-hand-drawn": {
      "text-decoration-line": "underline",
      "text-decoration-style": "wavy",
      "text-decoration-color": "var(--poyraz-text-effect)",
      "text-decoration-thickness": "0.12em",
      "text-underline-offset": "0.22em",
    },
    ".poyraz-text-shimmer": {
      "color": "transparent",
      "background-image": "linear-gradient(105deg, var(--poyraz-text-effect) 10%, white 35%, var(--poyraz-text-effect) 55%, var(--poyraz-text-effect) 100%)",
      "background-size": "220% auto",
      "background-clip": "text",
      "-webkit-background-clip": "text",
      "animation": "poyraz-text-shimmer 2.4s linear infinite",
    },
    ".poyraz-text-marker::before": {
      "content": "\"\"",
      "position": "absolute",
      "z-index": "-1",
      "inset": "54% -0.08em 0.02em",
      "border-radius": "0.2em 0.35em 0.18em 0.3em",
      "background": "var(--poyraz-text-effect-soft)",
      "transform": "rotate(-1.2deg) skewX(-5deg)",
    },
    ".poyraz-text-outline": {
      "color": "transparent",
      "-webkit-text-stroke": "1px var(--poyraz-text-effect)",
      "transition": "color var(--poyraz-motion-duration-base) var(--poyraz-motion-ease-out)",
    },
    ".poyraz-text-outline:hover": { "color": "var(--poyraz-text-effect)" },
    "@keyframes poyraz-text-shimmer": {
      "to": { "background-position": "-220% center" },
    },
    "@media (prefers-reduced-motion: reduce)": {
      ".poyraz-text-shimmer": {
        "animation": "none !important",
        "color": "var(--poyraz-text-effect)",
      },
    },
  },
  logo: {
    ".poyraz-logo-shine::after": {
      "content": "\"\"",
      "position": "absolute",
      "z-index": "1",
      "inset": "-55% auto -55% -45%",
      "width": "30%",
      "background": "linear-gradient(90deg, transparent, rgb(255 255 255 / 0.78), transparent)",
      "filter": "blur(1px)",
      "transform": "translateX(-180%) skewX(-18deg)",
      "pointer-events": "none",
    },
    ".poyraz-logo-shine:hover::after, .poyraz-logo-shine-loop::after": {
      "animation": "poyraz-logo-shine 1.15s var(--poyraz-motion-ease-out)",
    },
    "@keyframes poyraz-logo-shine": {
      "from": { "transform": "translateX(-180%) skewX(-18deg)" },
      "to": { "transform": "translateX(700%) skewX(-18deg)" },
    },
    "@media (prefers-reduced-motion: reduce)": {
      ".poyraz-logo-shine::after": { "animation": "none !important", "display": "none" },
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
