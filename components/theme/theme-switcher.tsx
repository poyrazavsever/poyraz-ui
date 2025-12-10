"use client";

import { APP_THEMES, useTheme } from "./theme-provider";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-(--color-text)">
          Choose your palette
        </h3>
      </div>

      <div className="relative">
        <select
          value={theme}
          onChange={(event) => setTheme(event.target.value as typeof theme)}
          className="w-full appearance-none rounded-2xl border border-(--color-border) bg-(--color-surface) px-4 py-3 text-(--color-text) focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
        >
          {APP_THEMES.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-(--color-muted)">
          ▾
        </span>
      </div>

      <div className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-4">
        <p className="text-sm font-medium text-(--color-text)">Preview</p>
        <div className="mt-3 flex items-center gap-3">
          {APP_THEMES.find((item) => item.id === theme)
            ?.preview.colors.slice(0, 3)
            .map((color) => (
              <span
                key={color}
                className="h-8 w-8 rounded-xl border border-(--color-border)"
                style={{ backgroundColor: color }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
