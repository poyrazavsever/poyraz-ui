"use client";

import { Home, Menu, Settings, Users } from "lucide-react";

import { Button } from "@/components/ui/atoms/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/molecules/sheet";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/organisms/sidebar";

function MobileSidebarBlock() {
  return (
    <div data-slot="mobile-sidebar-block">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Open workspace navigation">
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" surface="glass" className="w-[min(88vw,20rem)] p-0" showClose>
          <SheetTitle className="sr-only">Workspace navigation</SheetTitle>
          <Sidebar variant="default" className="h-full w-full border-0">
            <SidebarHeader className="font-semibold">Poyraz Workspace</SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem active icon={<Home className="size-4" />}>
                    Overview
                  </SidebarMenuItem>
                  <SidebarMenuItem icon={<Users className="size-4" />}>Team</SidebarMenuItem>
                  <SidebarMenuItem icon={<Settings className="size-4" />}>Settings</SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export { MobileSidebarBlock };
