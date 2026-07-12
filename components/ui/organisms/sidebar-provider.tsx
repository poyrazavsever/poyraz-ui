"use client";

import * as React from "react";

export type SidebarVariant =
  "default" | "collapsible" | "floating" | "mini" | "dark" | "bordered" | "inset";

export interface SidebarContextValue {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  variant: SidebarVariant;
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

export interface SidebarProviderProps {
  children: React.ReactNode;
  variant?: SidebarVariant;
  defaultCollapsed?: boolean;
  defaultMobileOpen?: boolean;
}

function SidebarProvider({
  children,
  variant = "default",
  defaultCollapsed = false,
  defaultMobileOpen = false,
}: SidebarProviderProps) {
  const [collapsed, setCollapsed] = React.useState(variant === "mini" ? true : defaultCollapsed);
  const [mobileOpen, setMobileOpen] = React.useState(defaultMobileOpen);
  const value = React.useMemo(
    () => ({ collapsed, setCollapsed, mobileOpen, setMobileOpen, variant }),
    [collapsed, mobileOpen, variant],
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) throw new Error("useSidebar must be used within SidebarProvider");
  return context;
}

export { SidebarProvider, useSidebar };
