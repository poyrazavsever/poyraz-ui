import { Bell, Home, LayoutGrid, Search, Settings, Users } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/atoms/avatar";
import { Badge } from "@/components/ui/atoms/badge";
import { Button } from "@/components/ui/atoms/button";
import { Card } from "@/components/ui/atoms/card";
import { Input } from "@/components/ui/atoms/input";
import {
  Sidebar,
  SidebarBranding,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarUserProfile,
} from "@/components/ui/organisms/sidebar";

const shellNavigation = [
  { label: "Overview", icon: Home, active: true },
  { label: "Projects", icon: LayoutGrid },
  { label: "Team", icon: Users },
  { label: "Settings", icon: Settings },
];

function DashboardShellBlock({ children }: { children?: React.ReactNode }) {
  return (
    <section data-slot="dashboard-shell-block" className="@container/shell min-h-[38rem] overflow-hidden rounded-xl border border-glass-border-outer bg-surface-subtle p-2 shadow-sm">
      <div className="grid min-h-[37rem] grid-cols-1 overflow-hidden rounded-lg border border-border bg-background @lg/shell:grid-cols-[14rem_minmax(0,1fr)]">
        <Sidebar variant="inset" className="hidden h-full w-full rounded-none border-0 border-r shadow-none @lg/shell:flex">
          <SidebarHeader><SidebarBranding title="Northstar" subtitle="Product workspace" /></SidebarHeader>
          <SidebarContent><SidebarGroup><SidebarGroupLabel>Workspace</SidebarGroupLabel><SidebarMenu>{shellNavigation.map(({ label, icon: Icon, active }) => <SidebarMenuItem key={label} active={active} icon={<Icon className="size-4" />}>{label}</SidebarMenuItem>)}</SidebarMenu></SidebarGroup></SidebarContent>
          <SidebarFooter><SidebarUserProfile name="Poyraz Avsever" role="Administrator" initials="PA" /></SidebarFooter>
        </Sidebar>
        <div className="min-w-0">
          <header className="flex min-h-14 items-center gap-2 border-b border-border px-3 @sm/shell:px-5">
            <div className="relative hidden flex-1 @sm/shell:block"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input aria-label="Search workspace" placeholder="Search workspace" className="max-w-sm pl-9" /></div>
            <Badge variant="success" className="mr-auto @sm/shell:mr-0">All systems operational</Badge>
            <Button size="icon-sm" variant="ghost" aria-label="Notifications"><Bell className="size-4" /></Button>
            <Avatar size="sm"><AvatarFallback>PA</AvatarFallback></Avatar>
          </header>
          <main data-slot="dashboard-shell-content" className="min-w-0 p-3 @sm/shell:p-5">{children ?? <Card variant="soft" className="min-h-72 items-center justify-center p-6 text-center text-sm text-muted-foreground">Dashboard content</Card>}</main>
        </div>
      </div>
    </section>
  );
}

export { DashboardShellBlock, shellNavigation };
