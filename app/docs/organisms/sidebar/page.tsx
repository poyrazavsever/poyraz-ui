"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/organisms/sidebar";
import {
  Home,
  Settings,
  Users,
  FileText,
  Mail,
  LayoutDashboard,
} from "lucide-react";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function SidebarPage() {
  return (
    <ComponentPage
      name="Sidebar"
      description="Vertical navigation sidebar with groups, labels, header, footer, and collapse toggle. Supports default, collapsible, floating, and mini variants."
      importCode={`import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarFooter,
  SidebarTrigger,
  useSidebar,
} from "poyraz-ui/organisms";`}
    >
      <DemoSection
        title="Default"
        description="Standard sidebar with header, grouped menu items, and footer."
        code={`<Sidebar>
  <SidebarHeader>
    <span className="font-bold text-lg">Poyraz UI</span>
  </SidebarHeader>
  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel>Main</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <Home className="h-4 w-4" /> Dashboard
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Users className="h-4 w-4" /> Users
        </SidebarMenuItem>
        <SidebarMenuItem>
          <FileText className="h-4 w-4" /> Documents
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
    <SidebarSeparator />
    <SidebarGroup>
      <SidebarGroupLabel>Settings</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <Settings className="h-4 w-4" /> Preferences
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Mail className="h-4 w-4" /> Notifications
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  </SidebarContent>
  <SidebarFooter>
    <span className="text-xs text-slate-400">v1.0.0</span>
  </SidebarFooter>
</Sidebar>`}
      >
        <div className="border-2 border-dashed border-slate-200 h-[400px] overflow-hidden">
          <Sidebar>
            <SidebarHeader>
              <span className="font-bold text-lg">Poyraz UI</span>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Main</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <Home className="h-4 w-4" /> Dashboard
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Users className="h-4 w-4" /> Users
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <FileText className="h-4 w-4" /> Documents
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
              <SidebarSeparator />
              <SidebarGroup>
                <SidebarGroupLabel>Settings</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <Settings className="h-4 w-4" /> Preferences
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Mail className="h-4 w-4" /> Notifications
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <span className="text-xs text-slate-400">v1.0.0</span>
            </SidebarFooter>
          </Sidebar>
        </div>
      </DemoSection>

      <DemoSection
        title="Collapsible"
        description="Sidebar that can be collapsed with a toggle button."
        code={`<Sidebar variant="collapsible">
  <SidebarHeader>
    <div className="flex items-center justify-between">
      <span className="font-bold">App</span>
      <SidebarTrigger />
    </div>
  </SidebarHeader>
  <SidebarContent>
    <SidebarMenu>
      <SidebarMenuItem>
        <LayoutDashboard className="h-4 w-4" /> Dashboard
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Users className="h-4 w-4" /> Users
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarContent>
</Sidebar>`}
      >
        <div className="border-2 border-dashed border-slate-200 h-[300px] overflow-hidden">
          <Sidebar variant="collapsible">
            <SidebarHeader>
              <div className="flex items-center justify-between">
                <span className="font-bold">App</span>
                <SidebarTrigger />
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <LayoutDashboard className="h-4 w-4" /> Dashboard
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Users className="h-4 w-4" /> Users
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
        </div>
      </DemoSection>

      <DemoSection
        title="Mini Variant"
        description="Icon-only sidebar for compact layouts."
        code={`<Sidebar variant="mini">
  <SidebarContent>
    <SidebarMenu>
      <SidebarMenuItem>
        <Home className="h-4 w-4" />
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Users className="h-4 w-4" />
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Settings className="h-4 w-4" />
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarContent>
</Sidebar>`}
      >
        <div className="border-2 border-dashed border-slate-200 h-[250px] overflow-hidden">
          <Sidebar variant="mini">
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <Home className="h-4 w-4" />
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Users className="h-4 w-4" />
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Settings className="h-4 w-4" />
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
