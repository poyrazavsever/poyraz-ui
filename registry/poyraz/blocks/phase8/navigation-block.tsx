"use client";

import * as React from "react";
import { Menu, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/atoms/button";
import {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarLink,
  NavbarLinks,
  NavbarMain,
  NavbarMobileLink,
  NavbarMobileMenu,
  NavbarMobileToggle,
} from "@/components/ui/organisms/navbar";
import { cn } from "@/lib/utils";

export interface NavigationItem {
  label: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Components", href: "#components" },
  { label: "Blocks", href: "#blocks" },
  { label: "Changelog", href: "#changelog" },
];

export interface NavigationBlockProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavigationItem[];
  activeHref?: string;
  glass?: boolean;
}

function NavigationBlock({
  items = navigationItems,
  activeHref,
  glass = true,
  className,
  ...props
}: NavigationBlockProps) {
  return (
    <Navbar
      data-slot="navigation-block"
      variant={glass ? "glass" : "bordered"}
      className={cn("rounded-lg", className)}
      {...props}
    >
      <NavbarMain>
        <NavbarBrand href="#overview" className="min-w-0 font-semibold">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Sparkles className="size-4" aria-hidden />
          </span>
          <span className="truncate">Poyraz UI</span>
        </NavbarBrand>
        <NavbarLinks aria-label="Primary navigation">
          {items.map((item) => (
            <NavbarLink
              key={item.href}
              href={item.href}
              active={activeHref === item.href}
              aria-current={activeHref === item.href ? "page" : undefined}
            >
              {item.label}
            </NavbarLink>
          ))}
        </NavbarLinks>
        <NavbarActions>
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button size="sm">Get started</Button>
        </NavbarActions>
        <NavbarMobileToggle aria-label="Open navigation">
          <Menu className="size-4" />
        </NavbarMobileToggle>
      </NavbarMain>
      <NavbarMobileMenu>
        {items.map((item) => (
          <NavbarMobileLink
            key={item.href}
            href={item.href}
            active={activeHref === item.href}
            aria-current={activeHref === item.href ? "page" : undefined}
          >
            {item.label}
          </NavbarMobileLink>
        ))}
      </NavbarMobileMenu>
    </Navbar>
  );
}

export { NavigationBlock };
