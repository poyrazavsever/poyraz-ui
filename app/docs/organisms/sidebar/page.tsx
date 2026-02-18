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
  SidebarSearch,
  SidebarSubMenu,
  SidebarSubMenuItem,
  SidebarUserProfile,
} from "poyraz-ui/organisms";
import {
  Home,
  Settings,
  Users,
  FileText,
  Mail,
  LayoutDashboard,
  BarChart3,
  FolderOpen,
  ShieldCheck,
  Bell,
  CreditCard,
  Globe,
  Palette,
  Code,
} from "lucide-react";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function SidebarPage() {
  return (
    <ComponentPage
      name="Sidebar"
      description="Vertical navigation sidebar with groups, labels, search, sub-menus, user profile, header, footer, and collapse toggle. Supports default, collapsible, floating, mini, dark, and bordered variants."
      importCode={`import {
  Sidebar, SidebarHeader, SidebarContent,
  SidebarGroup, SidebarGroupLabel, SidebarMenu,
  SidebarMenuItem, SidebarSeparator, SidebarFooter,
  SidebarTrigger, SidebarSearch,
  SidebarSubMenu, SidebarSubMenuItem,
  SidebarUserProfile, useSidebar,
} from "poyraz-ui/organisms";`}
    >
      {/* ─── 1. Full Featured ────────────────────────── */}
      <DemoSection
        title="Full Featured"
        description="Default sidebar with search, user profile, grouped menu items, sub-menus, badges, and footer."
        code={`<Sidebar>
  <SidebarHeader>
    <span className="font-bold text-lg">Poyraz UI</span>
  </SidebarHeader>
  <SidebarContent>
    <SidebarSearch placeholder="Search…" />
    <SidebarGroup>
      <SidebarGroupLabel>Main</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem icon={<Home className="h-4 w-4" />} active>
          Dashboard
        </SidebarMenuItem>
        <SidebarMenuItem icon={<BarChart3 className="h-4 w-4" />} badge="3">
          Analytics
        </SidebarMenuItem>
        <SidebarMenuItem icon={<Users className="h-4 w-4" />}>
          Users
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
    <SidebarSeparator />
    <SidebarGroup>
      <SidebarGroupLabel>Content</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarSubMenu label="Documents" icon={<FolderOpen className="h-4 w-4" />} defaultOpen>
          <SidebarSubMenuItem active>Drafts</SidebarSubMenuItem>
          <SidebarSubMenuItem>Published</SidebarSubMenuItem>
          <SidebarSubMenuItem>Archived</SidebarSubMenuItem>
        </SidebarSubMenu>
        <SidebarMenuItem icon={<FileText className="h-4 w-4" />}>
          Pages
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
    <SidebarSeparator />
    <SidebarGroup>
      <SidebarGroupLabel>Settings</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem icon={<Settings className="h-4 w-4" />}>
          Preferences
        </SidebarMenuItem>
        <SidebarMenuItem icon={<Mail className="h-4 w-4" />}>
          Notifications
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  </SidebarContent>
  <SidebarFooter>
    <SidebarUserProfile name="Jane Doe" role="Admin" initials="JD" />
  </SidebarFooter>
</Sidebar>`}
      >
        <div className="border-2 border-dashed border-slate-200 h-[520px] overflow-hidden">
          <Sidebar>
            <SidebarHeader>
              <span className="font-bold text-lg">Poyraz UI</span>
            </SidebarHeader>
            <SidebarContent>
              <SidebarSearch placeholder="Search…" />
              <SidebarGroup>
                <SidebarGroupLabel>Main</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem icon={<Home className="h-4 w-4" />} active>
                    Dashboard
                  </SidebarMenuItem>
                  <SidebarMenuItem
                    icon={<BarChart3 className="h-4 w-4" />}
                    badge="3"
                  >
                    Analytics
                  </SidebarMenuItem>
                  <SidebarMenuItem icon={<Users className="h-4 w-4" />}>
                    Users
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
              <SidebarSeparator />
              <SidebarGroup>
                <SidebarGroupLabel>Content</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarSubMenu
                    label="Documents"
                    icon={<FolderOpen className="h-4 w-4" />}
                    defaultOpen
                  >
                    <SidebarSubMenuItem active>Drafts</SidebarSubMenuItem>
                    <SidebarSubMenuItem>Published</SidebarSubMenuItem>
                    <SidebarSubMenuItem>Archived</SidebarSubMenuItem>
                  </SidebarSubMenu>
                  <SidebarMenuItem icon={<FileText className="h-4 w-4" />}>
                    Pages
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
              <SidebarSeparator />
              <SidebarGroup>
                <SidebarGroupLabel>Settings</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem icon={<Settings className="h-4 w-4" />}>
                    Preferences
                  </SidebarMenuItem>
                  <SidebarMenuItem icon={<Mail className="h-4 w-4" />}>
                    Notifications
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarUserProfile name="Jane Doe" role="Admin" initials="JD" />
            </SidebarFooter>
          </Sidebar>
        </div>
      </DemoSection>

      {/* ─── 2. Collapsible ──────────────────────────── */}
      <DemoSection
        title="Collapsible"
        description="Sidebar that collapses to icon-only with a toggle button. Sub-menus and search hide when collapsed."
        code={`<Sidebar variant="collapsible">
  <SidebarHeader>
    <div className="flex items-center justify-between w-full">
      <span className="font-bold">App</span>
      <SidebarTrigger />
    </div>
  </SidebarHeader>
  <SidebarContent>
    <SidebarSearch />
    <SidebarMenu>
      <SidebarMenuItem icon={<LayoutDashboard className="h-4 w-4" />} active>
        Dashboard
      </SidebarMenuItem>
      <SidebarMenuItem icon={<Users className="h-4 w-4" />}>
        Users
      </SidebarMenuItem>
      <SidebarSubMenu label="Settings" icon={<Settings className="h-4 w-4" />}>
        <SidebarSubMenuItem>General</SidebarSubMenuItem>
        <SidebarSubMenuItem>Security</SidebarSubMenuItem>
      </SidebarSubMenu>
    </SidebarMenu>
  </SidebarContent>
</Sidebar>`}
      >
        <div className="border-2 border-dashed border-slate-200 h-[360px] overflow-hidden">
          <Sidebar variant="collapsible">
            <SidebarHeader>
              <div className="flex items-center justify-between w-full">
                <span className="font-bold">App</span>
                <SidebarTrigger />
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarSearch />
              <SidebarMenu>
                <SidebarMenuItem
                  icon={<LayoutDashboard className="h-4 w-4" />}
                  active
                >
                  Dashboard
                </SidebarMenuItem>
                <SidebarMenuItem icon={<Users className="h-4 w-4" />}>
                  Users
                </SidebarMenuItem>
                <SidebarSubMenu
                  label="Settings"
                  icon={<Settings className="h-4 w-4" />}
                >
                  <SidebarSubMenuItem>General</SidebarSubMenuItem>
                  <SidebarSubMenuItem>Security</SidebarSubMenuItem>
                </SidebarSubMenu>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
        </div>
      </DemoSection>

      {/* ─── 3. Dark Variant ─────────────────────────── */}
      <DemoSection
        title="Dark Variant"
        description="Dark-themed sidebar with contrasting borders and adapted colors."
        code={`<Sidebar variant="dark">
  <SidebarHeader>
    <span className="font-bold text-lg text-white">Admin</span>
  </SidebarHeader>
  <SidebarContent>
    <SidebarSearch placeholder="Search…" />
    <SidebarGroup>
      <SidebarGroupLabel>Overview</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem icon={<Home className="h-4 w-4" />} active>
          Dashboard
        </SidebarMenuItem>
        <SidebarMenuItem icon={<BarChart3 className="h-4 w-4" />} badge="5">
          Reports
        </SidebarMenuItem>
        <SidebarSubMenu label="Security" icon={<ShieldCheck className="h-4 w-4" />}>
          <SidebarSubMenuItem>Roles</SidebarSubMenuItem>
          <SidebarSubMenuItem active>Permissions</SidebarSubMenuItem>
          <SidebarSubMenuItem>Audit Log</SidebarSubMenuItem>
        </SidebarSubMenu>
      </SidebarMenu>
    </SidebarGroup>
    <SidebarSeparator />
    <SidebarGroup>
      <SidebarGroupLabel>Account</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem icon={<Bell className="h-4 w-4" />}>
          Notifications
        </SidebarMenuItem>
        <SidebarMenuItem icon={<CreditCard className="h-4 w-4" />}>
          Billing
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  </SidebarContent>
  <SidebarFooter>
    <SidebarUserProfile name="Alex Smith" role="Developer" initials="AS" />
  </SidebarFooter>
</Sidebar>`}
      >
        <div className="border-2 border-dashed border-slate-200 h-[520px] overflow-hidden">
          <Sidebar variant="dark">
            <SidebarHeader>
              <span className="font-bold text-lg text-white">Admin</span>
            </SidebarHeader>
            <SidebarContent>
              <SidebarSearch placeholder="Search…" />
              <SidebarGroup>
                <SidebarGroupLabel>Overview</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem icon={<Home className="h-4 w-4" />} active>
                    Dashboard
                  </SidebarMenuItem>
                  <SidebarMenuItem
                    icon={<BarChart3 className="h-4 w-4" />}
                    badge="5"
                  >
                    Reports
                  </SidebarMenuItem>
                  <SidebarSubMenu
                    label="Security"
                    icon={<ShieldCheck className="h-4 w-4" />}
                  >
                    <SidebarSubMenuItem>Roles</SidebarSubMenuItem>
                    <SidebarSubMenuItem active>Permissions</SidebarSubMenuItem>
                    <SidebarSubMenuItem>Audit Log</SidebarSubMenuItem>
                  </SidebarSubMenu>
                </SidebarMenu>
              </SidebarGroup>
              <SidebarSeparator />
              <SidebarGroup>
                <SidebarGroupLabel>Account</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem icon={<Bell className="h-4 w-4" />}>
                    Notifications
                  </SidebarMenuItem>
                  <SidebarMenuItem icon={<CreditCard className="h-4 w-4" />}>
                    Billing
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarUserProfile
                name="Alex Smith"
                role="Developer"
                initials="AS"
              />
            </SidebarFooter>
          </Sidebar>
        </div>
      </DemoSection>

      {/* ─── 4. Bordered Variant ─────────────────────── */}
      <DemoSection
        title="Bordered Variant"
        description="Sidebar with all-around dashed borders, suited for standalone panels."
        code={`<Sidebar variant="bordered">
  <SidebarHeader>
    <span className="font-bold text-lg">Studio</span>
  </SidebarHeader>
  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel>Design</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem icon={<Palette className="h-4 w-4" />} active>
          Themes
        </SidebarMenuItem>
        <SidebarMenuItem icon={<Globe className="h-4 w-4" />}>
          i18n
        </SidebarMenuItem>
        <SidebarMenuItem icon={<Code className="h-4 w-4" />}>
          Components
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  </SidebarContent>
  <SidebarFooter>
    <span className="text-xs text-slate-400">v2.1.0</span>
  </SidebarFooter>
</Sidebar>`}
      >
        <div className="h-[340px] overflow-hidden p-3 bg-slate-50">
          <Sidebar variant="bordered">
            <SidebarHeader>
              <span className="font-bold text-lg">Studio</span>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Design</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem
                    icon={<Palette className="h-4 w-4" />}
                    active
                  >
                    Themes
                  </SidebarMenuItem>
                  <SidebarMenuItem icon={<Globe className="h-4 w-4" />}>
                    i18n
                  </SidebarMenuItem>
                  <SidebarMenuItem icon={<Code className="h-4 w-4" />}>
                    Components
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <span className="text-xs text-slate-400">v2.1.0</span>
            </SidebarFooter>
          </Sidebar>
        </div>
      </DemoSection>

      {/* ─── 5. Mini Variant ─────────────────────────── */}
      <DemoSection
        title="Mini Variant"
        description="Icon-only sidebar for compact layouts with hover tooltips."
        code={`<Sidebar variant="mini">
  <SidebarContent>
    <SidebarMenu>
      <SidebarMenuItem icon={<Home className="h-4 w-4" />}>
        Home
      </SidebarMenuItem>
      <SidebarMenuItem icon={<Users className="h-4 w-4" />}>
        Users
      </SidebarMenuItem>
      <SidebarMenuItem icon={<Settings className="h-4 w-4" />}>
        Settings
      </SidebarMenuItem>
      <SidebarMenuItem icon={<BarChart3 className="h-4 w-4" />}>
        Analytics
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarContent>
</Sidebar>`}
      >
        <div className="border-2 border-dashed border-slate-200 h-[280px] overflow-hidden">
          <Sidebar variant="mini">
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem icon={<Home className="h-4 w-4" />}>
                  Home
                </SidebarMenuItem>
                <SidebarMenuItem icon={<Users className="h-4 w-4" />}>
                  Users
                </SidebarMenuItem>
                <SidebarMenuItem icon={<Settings className="h-4 w-4" />}>
                  Settings
                </SidebarMenuItem>
                <SidebarMenuItem icon={<BarChart3 className="h-4 w-4" />}>
                  Analytics
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
        </div>
      </DemoSection>

      {/* ─── 6. With User Profile ────────────────────── */}
      <DemoSection
        title="With User Profile"
        description="User profile in the header with avatar initials and role description."
        code={`<Sidebar>
  <SidebarHeader>
    <SidebarUserProfile name="Maria Garcia" role="Product Manager" initials="MG" />
  </SidebarHeader>
  <SidebarContent>
    <SidebarMenu>
      <SidebarMenuItem icon={<LayoutDashboard className="h-4 w-4" />} active>
        Overview
      </SidebarMenuItem>
      <SidebarMenuItem icon={<FileText className="h-4 w-4" />} badge="12">
        Tasks
      </SidebarMenuItem>
      <SidebarMenuItem icon={<Mail className="h-4 w-4" />}>
        Messages
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarContent>
  <SidebarFooter>
    <span className="text-xs text-slate-400">Logged in as Maria</span>
  </SidebarFooter>
</Sidebar>`}
      >
        <div className="border-2 border-dashed border-slate-200 h-[350px] overflow-hidden">
          <Sidebar>
            <SidebarHeader>
              <SidebarUserProfile
                name="Maria Garcia"
                role="Product Manager"
                initials="MG"
              />
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem
                  icon={<LayoutDashboard className="h-4 w-4" />}
                  active
                >
                  Overview
                </SidebarMenuItem>
                <SidebarMenuItem
                  icon={<FileText className="h-4 w-4" />}
                  badge="12"
                >
                  Tasks
                </SidebarMenuItem>
                <SidebarMenuItem icon={<Mail className="h-4 w-4" />}>
                  Messages
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
              <span className="text-xs text-slate-400">Logged in as Maria</span>
            </SidebarFooter>
          </Sidebar>
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
