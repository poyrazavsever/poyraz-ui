"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  FileText,
  Home,
  Package,
  Atom,
  TestTube2,
  Component,
  Menu,
} from "lucide-react";

import { Logo } from "@/components/ui/atoms/logo";
import {
  Navbar,
  NavbarBrand,
  NavbarMain,
  NavbarMobileToggle,
} from "@/components/ui/organisms/navbar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/organisms/sidebar";
import { Footer } from "@/components/ui/organisms/footer";

function DocsSidebarContent() {
  const pathname = usePathname();

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Getting Started</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem
            href="/docs"
            icon={<Home className="h-4 w-4" />}
            active={pathname === "/docs"}
          >
            Introduction
          </SidebarMenuItem>
          <SidebarMenuItem
            href="#"
            icon={<FileText className="h-4 w-4" />}
            active={pathname === "/docs/installation"}
          >
            Installation
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Components</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem
            href="/atoms"
            icon={<Atom className="h-4 w-4" />}
            active={pathname === "/atoms"}
          >
            Atoms
          </SidebarMenuItem>
          <SidebarMenuItem
            href="/molecules"
            icon={<TestTube2 className="h-4 w-4" />}
            active={pathname === "/molecules"}
          >
            Molecules
          </SidebarMenuItem>
          <SidebarMenuItem
            href="/organisms"
            icon={<Component className="h-4 w-4" />}
            active={pathname === "/organisms"}
          >
            Organisms
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Navbar */}
      <Navbar
        variant="minimal"
        className="z-50 border-b-2 border-dashed border-slate-200"
      >
        <NavbarMain>
          <NavbarBrand href="/">
            <Logo width={32} height={32} />
            <span className="text-lg font-bold tracking-tight hidden sm:inline-block">
              Poyraz UI
            </span>
          </NavbarBrand>
          {/* Mobile Sidebar Trigger (in Navbar) */}
          <NavbarMobileToggle className="lg:hidden" />
        </NavbarMain>
      </Navbar>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (Desktop: Fixed / Mobile: Floating via internal context) */}
        <Sidebar
          variant="default"
          className="hidden lg:flex border-r-2 border-dashed border-slate-200 z-40"
        >
          <SidebarHeader className="h-16 justify-between">
            <span className="text-sm font-bold tracking-tight text-slate-500">
              Documentation
            </span>
            <SidebarTrigger />
          </SidebarHeader>
          <SidebarContent>
            <DocsSidebarContent />
          </SidebarContent>
        </Sidebar>

        {/* Mobile Sidebar (Floating) -> Manually handled in sidebar.tsx or we can duplicate for mobile structure if needed, 
            but for now using the desktop one which hides on mobile. 
            Ideally we'd use a shared state or the floating variant for mobile.
            Let's keep it simple: Just desktop sidebar for now, or use the floating variant if we had a global state.
            For this layout, let's use a simple responsive approach.
        */}

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-slate-50/50">
          <div className="container mx-auto max-w-5xl py-8 px-4 md:px-8">
            {children}
          </div>
          <Footer
            variant="compact"
            className="mt-auto border-t-2 border-dashed border-slate-200 bg-white"
          />
        </main>
      </div>
    </div>
  );
}
