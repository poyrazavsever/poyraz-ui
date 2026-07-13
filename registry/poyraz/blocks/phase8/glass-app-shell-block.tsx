import { BarChart3, FolderKanban, Home, Settings } from "lucide-react";

import { NavigationBlock } from "@/components/ui/blocks/phase8/navigation-block";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/organisms/sidebar";

function GlassAppShellBlock({ children }: { children?: React.ReactNode }) {
  return (
    <section
      data-slot="glass-app-shell-block"
      className="@container/app-shell overflow-hidden rounded-xl border border-glass-border-outer bg-surface-subtle p-2"
    >
      <NavigationBlock className="sticky top-0 z-20" />
      <div className="grid min-h-[30rem] grid-cols-1 gap-2 pt-2 @lg/app-shell:grid-cols-[13rem_minmax(0,1fr)]">
        <Sidebar
          variant="inset"
          className="hidden h-full w-full bg-glass shadow-[var(--poyraz-glass-shadow)] backdrop-blur-glass @lg/app-shell:flex"
        >
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem active icon={<Home className="size-4" />}>
                  Home
                </SidebarMenuItem>
                <SidebarMenuItem icon={<FolderKanban className="size-4" />}>
                  Projects
                </SidebarMenuItem>
                <SidebarMenuItem icon={<BarChart3 className="size-4" />}>Analytics</SidebarMenuItem>
                <SidebarMenuItem icon={<Settings className="size-4" />}>Settings</SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="min-w-0 rounded-lg border border-border bg-background p-3 @sm/app-shell:p-5">
          {children ?? (
            <div className="grid min-h-64 place-items-center text-sm text-muted-foreground">
              Application content
            </div>
          )}
        </main>
      </div>
    </section>
  );
}

export { GlassAppShellBlock };
