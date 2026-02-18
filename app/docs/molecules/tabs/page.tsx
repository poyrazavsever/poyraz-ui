"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "poyraz-ui/molecules";
import { Button } from "poyraz-ui/atoms";
import { Input } from "poyraz-ui/atoms";
import { Label } from "poyraz-ui/atoms";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function TabsPage() {
  return (
    <ComponentPage
      name="Tabs"
      description="Tabbed interface built on Radix Tabs. Switch between different views in a compact space."
      importCode={`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="Default"
        description="Basic tabs with two panels."
        code={`<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <div className="space-y-2">
      <Label>Name</Label>
      <Input defaultValue="Poyraz" />
    </div>
  </TabsContent>
  <TabsContent value="password">
    <div className="space-y-2">
      <Label>Current Password</Label>
      <Input type="password" />
    </div>
  </TabsContent>
</Tabs>`}
      >
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input defaultValue="Poyraz" />
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="space-y-2">
              <Label>Current Password</Label>
              <Input type="password" />
            </div>
          </TabsContent>
        </Tabs>
      </DemoSection>

      <DemoSection
        title="Multiple Tabs"
        description="Tabs with more than two panels."
        code={`<Tabs defaultValue="overview" className="w-full">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
    <TabsTrigger value="notifications">Notifications</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <p className="text-sm text-slate-500">
      Dashboard overview with key metrics.
    </p>
  </TabsContent>
  <TabsContent value="analytics">
    <p className="text-sm text-slate-500">
      Track engagement and user activity.
    </p>
  </TabsContent>
  <TabsContent value="reports">
    <p className="text-sm text-slate-500">
      Download weekly and monthly reports.
    </p>
  </TabsContent>
  <TabsContent value="notifications">
    <p className="text-sm text-slate-500">
      Configure notification preferences.
    </p>
  </TabsContent>
</Tabs>`}
      >
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <p className="text-sm text-slate-500">
              Dashboard overview with key metrics.
            </p>
          </TabsContent>
          <TabsContent value="analytics">
            <p className="text-sm text-slate-500">
              Track engagement and user activity.
            </p>
          </TabsContent>
          <TabsContent value="reports">
            <p className="text-sm text-slate-500">
              Download weekly and monthly reports.
            </p>
          </TabsContent>
          <TabsContent value="notifications">
            <p className="text-sm text-slate-500">
              Configure notification preferences.
            </p>
          </TabsContent>
        </Tabs>
      </DemoSection>
    </ComponentPage>
  );
}
