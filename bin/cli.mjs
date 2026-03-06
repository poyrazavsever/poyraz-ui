#!/usr/bin/env node

/**
 * poyraz-ui init — Interactive setup wizard
 *
 * Usage:
 *   npx poyraz-ui init
 *   npx poyraz-ui init --css ./src/app/globals.css
 */

import { createInterface } from "node:readline";
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";

/* ── Helpers ──────────────────────────────────────────────────────── */

const rl = createInterface({ input: process.stdin, output: process.stdout });

function ask(question, defaultVal) {
  return new Promise((resolve) => {
    const suffix = defaultVal ? ` (${defaultVal})` : "";
    rl.question(`${question}${suffix}: `, (answer) => {
      resolve(answer.trim() || defaultVal || "");
    });
  });
}

function confirm(question) {
  return new Promise((resolve) => {
    rl.question(`${question} (y/N): `, (answer) => {
      resolve(answer.trim().toLowerCase() === "y");
    });
  });
}

function select(question, options) {
  return new Promise((resolve) => {
    console.log(`\n${question}`);
    options.forEach((opt, i) => console.log(`  ${i + 1}) ${opt}`));
    rl.question(`Choose [1-${options.length}]: `, (answer) => {
      const idx = parseInt(answer.trim(), 10) - 1;
      resolve(idx >= 0 && idx < options.length ? options[idx] : options[0]);
    });
  });
}

/* ── Colors ───────────────────────────────────────────────────────── */

const bold = (t) => `\x1b[1m${t}\x1b[0m`;
const green = (t) => `\x1b[32m${t}\x1b[0m`;
const red = (t) => `\x1b[31m${t}\x1b[0m`;
const dim = (t) => `\x1b[2m${t}\x1b[0m`;
const cyan = (t) => `\x1b[36m${t}\x1b[0m`;

/* ── Banner ───────────────────────────────────────────────────────── */

function banner() {
  console.log("");
  console.log(bold(red("  ╔═══════════════════════════════╗")));
  console.log(bold(red("  ║        ") + "POYRAZ UI v2" + red("          ║")));
  console.log(bold(red("  ╚═══════════════════════════════╝")));
  console.log(dim("  Minimal • Brutalist • Themeable"));
  console.log("");
}

/* ── Detect CSS file ──────────────────────────────────────────────── */

const COMMON_CSS_PATHS = [
  "src/app/globals.css",
  "app/globals.css",
  "src/globals.css",
  "src/index.css",
  "styles/globals.css",
];

function detectCssFile() {
  for (const p of COMMON_CSS_PATHS) {
    if (existsSync(resolve(process.cwd(), p))) return p;
  }
  return null;
}

/* ── Preset import snippet ────────────────────────────────────────── */

const PRESET_IMPORT = `@import "poyraz-ui/preset.css";`;

function ensurePresetImport(cssPath) {
  const fullPath = resolve(process.cwd(), cssPath);
  if (!existsSync(fullPath)) {
    console.log(red(`  ✗ File not found: ${cssPath}`));
    return false;
  }

  const content = readFileSync(fullPath, "utf-8");
  if (content.includes("poyraz-ui/preset.css")) {
    console.log(dim(`  ↳ preset.css already imported in ${cssPath}`));
    return true;
  }

  // Insert after @import "tailwindcss" or at the top
  const tailwindIdx = content.indexOf('@import "tailwindcss"');
  let newContent;
  if (tailwindIdx !== -1) {
    const lineEnd = content.indexOf("\n", tailwindIdx);
    newContent =
      content.slice(0, lineEnd + 1) +
      PRESET_IMPORT +
      "\n" +
      content.slice(lineEnd + 1);
  } else {
    newContent = PRESET_IMPORT + "\n" + content;
  }

  writeFileSync(fullPath, newContent, "utf-8");
  console.log(green(`  ✓ Added preset.css import to ${cssPath}`));
  return true;
}

/* ── Theme file generator ─────────────────────────────────────────── */

function generateThemeFile(outputPath) {
  const fullPath = resolve(process.cwd(), outputPath);
  mkdirSync(dirname(fullPath), { recursive: true });

  const content = `import { poyrazLightTheme, poyrazDarkTheme, poyrazThemes } from "poyraz-ui/themes";

// You can customise themes by spreading and overriding variables:
//
// const customLight = {
//   ...poyrazLightTheme,
//   name: "custom-light",
//   variables: {
//     ...poyrazLightTheme.variables,
//     "--poyraz-primary": "#2563eb",            // blue-600
//     "--poyraz-primary-foreground": "#ffffff",
//   },
// };

export { poyrazLightTheme, poyrazDarkTheme, poyrazThemes };
`;

  writeFileSync(fullPath, content, "utf-8");
  console.log(green(`  ✓ Created ${outputPath}`));
}

/* ── Layout wrapper snippet ───────────────────────────────────────── */

function printLayoutSnippet() {
  console.log("");
  console.log(bold("  Add ThemeProvider to your root layout:"));
  console.log("");
  console.log(
    dim("  ┌─────────────────────────────────────────────────────────┐"),
  );
  console.log(
    `  ${dim("│")} ${cyan('import { ThemeProvider } from "reactive-switcher";')}      ${dim("│")}`,
  );
  console.log(
    `  ${dim("│")} ${cyan('import { poyrazThemes } from "@/lib/themes";')}           ${dim("│")}`,
  );
  console.log(
    `  ${dim("│")}                                                           ${dim("│")}`,
  );
  console.log(
    `  ${dim("│")} ${cyan("<ThemeProvider themes={poyrazThemes}>")}                   ${dim("│")}`,
  );
  console.log(
    `  ${dim("│")} ${cyan("  {children}")}                                            ${dim("│")}`,
  );
  console.log(
    `  ${dim("│")} ${cyan("</ThemeProvider>")}                                        ${dim("│")}`,
  );
  console.log(
    dim("  └─────────────────────────────────────────────────────────┘"),
  );
  console.log("");
}

/* ── Main ─────────────────────────────────────────────────────────── */

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command === "init") {
    await init(args);
  } else {
    console.log(red(`  Unknown command: ${command}`));
    console.log(dim("  Usage: npx poyraz-ui init"));
    process.exit(1);
  }
}

async function init(args) {
  banner();

  // 1. Detect / ask for CSS file
  const argCss =
    args.indexOf("--css") !== -1 ? args[args.indexOf("--css") + 1] : null;
  let cssPath = argCss || detectCssFile();

  if (!cssPath) {
    cssPath = await ask("  Path to your main CSS file", "src/app/globals.css");
  } else {
    console.log(dim(`  Detected CSS: ${cssPath}`));
  }

  // 2. Add preset import
  console.log("");
  console.log(bold("  Step 1: Preset CSS"));
  ensurePresetImport(cssPath);

  // 3. Ask about reactive-switcher
  console.log("");
  console.log(bold("  Step 2: Theme Switching"));
  const wantThemes = await confirm(
    "  Would you like to set up reactive-switcher for dark mode/multi-theme support?",
  );

  if (wantThemes) {
    // Generate theme file
    const themePath = await ask(
      "  Where to create theme config?",
      "src/lib/themes.ts",
    );
    generateThemeFile(themePath);

    // Print layout snippet
    printLayoutSnippet();

    // Remind to install
    console.log(bold("  Don't forget to install reactive-switcher:"));
    console.log(cyan("  npm install reactive-switcher"));
    console.log("");
  } else {
    console.log(
      dim("  ↳ Skipped. Poyraz UI works standalone in light mode by default."),
    );
    console.log(
      dim(
        "  ↳ You can add reactive-switcher later by running this command again.",
      ),
    );
    console.log("");
  }

  // 4. Done
  console.log(green(bold("  ✓ Setup complete!")));
  console.log("");
  console.log(dim("  Docs: https://ui.poyrazavsever.com/docs"));
  console.log("");

  rl.close();
}

main().catch((err) => {
  console.error(err);
  rl.close();
  process.exit(1);
});
