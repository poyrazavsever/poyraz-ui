"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  buttonClassName?: string;
  activeClassName?: string;
};

export function ThemeToggle({ className, buttonClassName, activeClassName }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const modes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ] as const;

  return (
    <div
      className={cn(
        "flex items-center rounded-md border border-border bg-surface p-0.5",
        className,
      )}
      aria-label="Color theme"
    >
      {modes.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          title={label}
          aria-label={`${label} theme`}
          aria-pressed={mounted && theme === value}
          className={cn(
            "flex size-7 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground",
            buttonClassName,
            mounted && theme === value && cn("bg-accent text-foreground", activeClassName),
          )}
          onClick={() => setTheme(value)}
        >
          <Icon className="size-3.5" />
        </button>
      ))}
    </div>
  );
}
