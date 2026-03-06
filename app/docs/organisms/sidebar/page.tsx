"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarBranding,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarSection,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuAction,
  SidebarSeparator,
  SidebarBadge,
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
  MoreHorizontal,
  Zap,
  Box,
  Trash2,
  Star,
} from "lucide-react";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function SidebarPage() {
  return (
    <ComponentPage
      name="Sidebar"
      description="Vertical navigation sidebar with groups, labels, search, sub-menus, user profile, branding, collapsible sections, badges, menu actions, header, footer, and collapse toggle. Supports default, collapsible, floating, mini, dark, bordered, and inset variants."
      importCode={`import {
  Sidebar, SidebarHeader, SidebarBranding, SidebarContent,
  SidebarGroup, SidebarGroupLabel, SidebarSection,
  SidebarMenu, SidebarMenuItem, SidebarMenuAction,
  SidebarSeparator, SidebarBadge, SidebarFooter,
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
        <div className="border border-slate-200 rounded-sm h-[520px] overflow-hidden">
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
        <div className="border border-slate-200 rounded-sm h-[360px] overflow-hidden">
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
        <div className="border border-slate-200 rounded-sm h-[520px] overflow-hidden">
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
        <div className="border border-slate-200 rounded-sm h-[280px] overflow-hidden">
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
        <div className="border border-slate-200 rounded-sm h-[350px] overflow-hidden">
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

      {/* ─── 7. Inset Variant ────────────────────────── */}
      <DemoSection
        title="Inset Variant"
        description="Rounded sidebar with subtle shadow, ideal for embedded layouts inside a page."
        code={`<Sidebar variant="inset">
  <SidebarHeader>
    <SidebarBranding logo={<Zap className="h-4 w-4" />} title="Workspace" subtitle="Team Pro" />
  </SidebarHeader>
  <SidebarContent>
    <SidebarMenu>
      <SidebarMenuItem icon={<Home className="h-4 w-4" />} active>Dashboard</SidebarMenuItem>
      <SidebarMenuItem icon={<FileText className="h-4 w-4" />}>Documents</SidebarMenuItem>
      <SidebarMenuItem icon={<Users className="h-4 w-4" />}>Members</SidebarMenuItem>
    </SidebarMenu>
  </SidebarContent>
  <SidebarFooter>
    <span className="text-xs text-slate-400">Inset layout</span>
  </SidebarFooter>
</Sidebar>`}
      >
        <div className="h-[360px] overflow-hidden p-4 bg-white">
          <Sidebar variant="inset">
            <SidebarHeader>
              <SidebarBranding
                logo={<Zap className="h-4 w-4" />}
                title="Workspace"
                subtitle="Team Pro"
              />
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem icon={<Home className="h-4 w-4" />} active>
                  Dashboard
                </SidebarMenuItem>
                <SidebarMenuItem icon={<FileText className="h-4 w-4" />}>
                  Documents
                </SidebarMenuItem>
                <SidebarMenuItem icon={<Users className="h-4 w-4" />}>
                  Members
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
              <span className="text-xs text-slate-400">Inset layout</span>
            </SidebarFooter>
          </Sidebar>
        </div>
      </DemoSection>

      {/* ─── 8. With Branding ────────────────────────── */}
      <DemoSection
        title="With Branding"
        description="SidebarBranding provides a logo + title + subtitle combo in the header. Collapses to icon-only gracefully."
        code={`<Sidebar variant="collapsible">
  <SidebarHeader>
    <SidebarBranding
      logo={<Box className="h-4 w-4" />}
      title="Poyraz UI"
      subtitle="Component Library"
    />
    <SidebarTrigger />
  </SidebarHeader>
  <SidebarContent>
    <SidebarMenu>
      <SidebarMenuItem icon={<LayoutDashboard className="h-4 w-4" />} active>
        Overview
      </SidebarMenuItem>
      <SidebarMenuItem icon={<Palette className="h-4 w-4" />}>Themes</SidebarMenuItem>
      <SidebarMenuItem icon={<Code className="h-4 w-4" />}>Components</SidebarMenuItem>
    </SidebarMenu>
  </SidebarContent>
</Sidebar>`}
      >
        <div className="border border-slate-200 rounded-sm h-[340px] overflow-hidden">
          <Sidebar variant="collapsible">
            <SidebarHeader>
              <SidebarBranding
                logo={<Box className="h-4 w-4" />}
                title="Poyraz UI"
                subtitle="Component Library"
              />
              <SidebarTrigger />
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem
                  icon={<LayoutDashboard className="h-4 w-4" />}
                  active
                >
                  Overview
                </SidebarMenuItem>
                <SidebarMenuItem icon={<Palette className="h-4 w-4" />}>
                  Themes
                </SidebarMenuItem>
                <SidebarMenuItem icon={<Code className="h-4 w-4" />}>
                  Components
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
        </div>
      </DemoSection>

      {/* ─── 9. Collapsible Sections ─────────────────── */}
      <DemoSection
        title="Collapsible Sections"
        description="SidebarSection adds collapsible group titles with a chevron toggle. Click a section title to expand/collapse."
        code={`<Sidebar>
  <SidebarHeader>
    <span className="font-bold text-lg">App</span>
  </SidebarHeader>
  <SidebarContent>
    <SidebarSection title="Navigation" defaultOpen>
      <SidebarMenu>
        <SidebarMenuItem icon={<Home className="h-4 w-4" />} active>Home</SidebarMenuItem>
        <SidebarMenuItem icon={<BarChart3 className="h-4 w-4" />}>Analytics</SidebarMenuItem>
      </SidebarMenu>
    </SidebarSection>
    <SidebarSeparator />
    <SidebarSection title="Management" defaultOpen={false}>
      <SidebarMenu>
        <SidebarMenuItem icon={<Users className="h-4 w-4" />}>Users</SidebarMenuItem>
        <SidebarMenuItem icon={<ShieldCheck className="h-4 w-4" />}>Roles</SidebarMenuItem>
        <SidebarMenuItem icon={<CreditCard className="h-4 w-4" />}>Billing</SidebarMenuItem>
      </SidebarMenu>
    </SidebarSection>
    <SidebarSeparator />
    <SidebarSection title="System" collapsible={false}>
      <SidebarMenu>
        <SidebarMenuItem icon={<Settings className="h-4 w-4" />}>Settings</SidebarMenuItem>
      </SidebarMenu>
    </SidebarSection>
  </SidebarContent>
</Sidebar>`}
      >
        <div className="border border-slate-200 rounded-sm h-[440px] overflow-hidden">
          <Sidebar>
            <SidebarHeader>
              <span className="font-bold text-lg">App</span>
            </SidebarHeader>
            <SidebarContent>
              <SidebarSection title="Navigation" defaultOpen>
                <SidebarMenu>
                  <SidebarMenuItem
                    icon={<Home className="h-4 w-4" />}
                    active
                  >
                    Home
                  </SidebarMenuItem>
                  <SidebarMenuItem icon={<BarChart3 className="h-4 w-4" />}>
                    Analytics
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarSection>
              <SidebarSeparator />
              <SidebarSection title="Management" defaultOpen={false}>
                <SidebarMenu>
                  <SidebarMenuItem icon={<Users className="h-4 w-4" />}>
                    Users
                  </SidebarMenuItem>
                  <SidebarMenuItem icon={<ShieldCheck className="h-4 w-4" />}>
                    Roles
                  </SidebarMenuItem>
                  <SidebarMenuItem icon={<CreditCard className="h-4 w-4" />}>
                    Billing
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarSection>
              <SidebarSeparator />
              <SidebarSection title="System" collapsible={false}>
                <SidebarMenu>
                  <SidebarMenuItem icon={<Settings className="h-4 w-4" />}>
                    Settings
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarSection>
            </SidebarContent>
          </Sidebar>
        </div>
      </DemoSection>

      {/* ─── 10. With Menu Actions ───────────────────── */}
      <DemoSection
        title="With Menu Actions"
        description="SidebarMenuAction adds hover-visible action buttons to menu items. Pass via the action prop on SidebarMenuItem."
        code={`<Sidebar>
  <SidebarHeader>
    <span className="font-bold text-lg">Projects</span>
  </SidebarHeader>
  <SidebarContent>
    <SidebarMenu>
      <SidebarMenuItem
        icon={<FileText className="h-4 w-4" />}
        active
        action={<SidebarMenuAction><MoreHorizontal className="h-3.5 w-3.5" /></SidebarMenuAction>}
      >
        Design System
      </SidebarMenuItem>
      <SidebarMenuItem
        icon={<FileText className="h-4 w-4" />}
        badge={<SidebarBadge variant="dot" />}
        action={<SidebarMenuAction><Star className="h-3.5 w-3.5" /></SidebarMenuAction>}
      >
        Marketing Site
      </SidebarMenuItem>
      <SidebarMenuItem
        icon={<FileText className="h-4 w-4" />}
        action={<SidebarMenuAction><Trash2 className="h-3.5 w-3.5" /></SidebarMenuAction>}
      >
        Legacy App
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarContent>
</Sidebar>`}
      >
        <div className="border border-slate-200 rounded-sm h-[280px] overflow-hidden">
          <Sidebar>
            <SidebarHeader>
              <span className="font-bold text-lg">Projects</span>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem
                  icon={<FileText className="h-4 w-4" />}
                  active
                  action={
                    <SidebarMenuAction>
                      <MoreHorizontal className="h-3.5 w-3.5" />
                    </SidebarMenuAction>
                  }
                >
                  Design System
                </SidebarMenuItem>
                <SidebarMenuItem
                  icon={<FileText className="h-4 w-4" />}
                  badge={<SidebarBadge variant="dot" />}
                  action={
                    <SidebarMenuAction>
                      <Star className="h-3.5 w-3.5" />
                    </SidebarMenuAction>
                  }
                >
                  Marketing Site
                </SidebarMenuItem>
                <SidebarMenuItem
                  icon={<FileText className="h-4 w-4" />}
                  action={
                    <SidebarMenuAction>
                      <Trash2 className="h-3.5 w-3.5" />
                    </SidebarMenuAction>
                  }
                >
                  Legacy App
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
        </div>
      </DemoSection>

      {/* ─── 11. Badges ──────────────────────────────── */}
      <DemoSection
        title="Badges"
        description="SidebarBadge supports default (filled), dot (notification indicator), and outline variants."
        code={`<Sidebar>
  <SidebarHeader>
    <span className="font-bold text-lg">Notifications</span>
  </SidebarHeader>
  <SidebarContent>
    <SidebarMenu>
      <SidebarMenuItem icon={<Mail className="h-4 w-4" />} badge={<SidebarBadge>5</SidebarBadge>}>
        Inbox
      </SidebarMenuItem>
      <SidebarMenuItem icon={<Bell className="h-4 w-4" />} badge={<SidebarBadge variant="dot" />}>
        Alerts
      </SidebarMenuItem>
      <SidebarMenuItem icon={<Globe className="h-4 w-4" />} badge={<SidebarBadge variant="outline">New</SidebarBadge>}>
        Updates
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarContent>
</Sidebar>`}
      >
        <div className="border border-slate-200 rounded-sm h-[260px] overflow-hidden">
          <Sidebar>
            <SidebarHeader>
              <span className="font-bold text-lg">Notifications</span>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem
                  icon={<Mail className="h-4 w-4" />}
                  badge={<SidebarBadge>5</SidebarBadge>}
                >
                  Inbox
                </SidebarMenuItem>
                <SidebarMenuItem
                  icon={<Bell className="h-4 w-4" />}
                  badge={<SidebarBadge variant="dot" />}
                >
                  Alerts
                </SidebarMenuItem>
                <SidebarMenuItem
                  icon={<Globe className="h-4 w-4" />}
                  badge={<SidebarBadge variant="outline">New</SidebarBadge>}
                >
                  Updates
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
