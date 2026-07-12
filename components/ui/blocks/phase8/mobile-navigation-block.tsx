"use client";

import { Menu, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/atoms/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/molecules/sheet";
import {
  navigationItems,
  type NavigationItem,
} from "@/components/ui/blocks/phase8/navigation-block";

function MobileNavigationBlock({
  items = navigationItems,
  activeHref,
}: {
  items?: NavigationItem[];
  activeHref?: string;
}) {
  return (
    <div
      data-slot="mobile-navigation-block"
      className="@container/mobile-nav flex items-center justify-between rounded-lg border border-glass-border-outer bg-glass p-2 shadow-sm backdrop-blur-glass"
    >
      <a href="#overview" className="flex items-center gap-2 text-sm font-semibold">
        <Sparkles className="size-4 text-primary" /> Poyraz UI
      </a>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open primary navigation">
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" surface="glass" className="w-[min(88vw,22rem)]">
          <SheetTitle>Navigation</SheetTitle>
          <nav aria-label="Primary navigation" className="mt-6 flex flex-col gap-1">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeHref === item.href ? "page" : undefined}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-surface-subtle hover:text-foreground aria-[current=page]:bg-primary-muted aria-[current=page]:text-primary-muted-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export { MobileNavigationBlock };
