"use client";

import {
  Button,
  Typography,
  Badge,
  Separator,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "poyraz-ui/atoms";
import { StatsCard } from "poyraz-ui/molecules";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

const recentOrders = [
  {
    id: "#1234",
    customer: "Ahmet K.",
    amount: "$120",
    status: "Completed",
    date: "Mar 6",
  },
  {
    id: "#1233",
    customer: "Elif Y.",
    amount: "$89",
    status: "Processing",
    date: "Mar 5",
  },
  {
    id: "#1232",
    customer: "Burak S.",
    amount: "$245",
    status: "Completed",
    date: "Mar 5",
  },
  {
    id: "#1231",
    customer: "Zeynep A.",
    amount: "$67",
    status: "Cancelled",
    date: "Mar 4",
  },
  {
    id: "#1230",
    customer: "Mehmet D.",
    amount: "$310",
    status: "Completed",
    date: "Mar 4",
  },
];

const statusColor: Record<string, string> = {
  Completed: "bg-green-50 text-green-700 border-green-200",
  Processing: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Cancelled: "bg-red-50 text-red-700 border-red-200",
};

function DashboardPreview() {
  return (
    <div className="bg-muted border border-border rounded-sm overflow-hidden">
      {/* Top Bar */}
      <div className="bg-background border-b border-border px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 bg-red-600 rounded-sm flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">P</span>
          </div>
          <Typography variant="small" className="font-bold text-foreground">
            Dashboard
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Export
          </Button>
          <Avatar className="h-7 w-7">
            <AvatarImage src="https://i.pravatar.cc/40?img=3" />
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="p-5 space-y-5">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <StatsCard
            label="Revenue"
            value="$12,345"
            trend="up"
            trendValue="+12.5%"
          />
          <StatsCard label="Orders" value="89" trend="up" trendValue="+4.3%" />
          <StatsCard
            label="Customers"
            value="1,234"
            trend="down"
            trendValue="-2.1%"
          />
          <StatsCard
            label="Conversion"
            value="3.2%"
            trend="neutral"
            trendValue="0%"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Chart Placeholder */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Revenue Overview</CardTitle>
                <Badge variant="outline" className="text-[10px]">
                  Last 7 days
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-40 flex items-end gap-2 px-2">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 flex flex-col items-center gap-1"
                  >
                    <div
                      className="w-full bg-red-600/80 rounded-sm transition-all hover:bg-primary"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[9px] text-placeholder">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Activity Feed */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    user: "Ahmet K.",
                    action: "placed an order",
                    time: "2m ago",
                  },
                  { user: "Elif Y.", action: "left a review", time: "15m ago" },
                  {
                    user: "System",
                    action: "backup completed",
                    time: "1h ago",
                  },
                  { user: "Burak S.", action: "signed up", time: "3h ago" },
                ].map((a, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-600 mt-1.5 shrink-0" />
                    <div>
                      <p className="text-xs text-foreground">
                        <span className="font-semibold">{a.user}</span>{" "}
                        {a.action}
                      </p>
                      <span className="text-[10px] text-placeholder">
                        {a.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Orders Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Orders</CardTitle>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border text-left text-[10px] font-semibold uppercase tracking-wider text-placeholder">
                    <th className="px-4 py-2.5">Order</th>
                    <th className="px-4 py-2.5">Customer</th>
                    <th className="px-4 py-2.5">Amount</th>
                    <th className="px-4 py-2.5">Status</th>
                    <th className="px-4 py-2.5">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-border last:border-b-0 hover:bg-muted transition-colors"
                    >
                      <td className="px-4 py-2.5 font-medium text-foreground">
                        {order.id}
                      </td>
                      <td className="px-4 py-2.5 text-muted-foreground">
                        {order.customer}
                      </td>
                      <td className="px-4 py-2.5 font-medium text-foreground">
                        {order.amount}
                      </td>
                      <td className="px-4 py-2.5">
                        <span
                          className={`inline-block px-1.5 py-0.5 text-[10px] font-medium rounded-sm border ${statusColor[order.status]}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-placeholder">
                        {order.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const dashboardCode = `import {
  Button, Typography, Badge, Avatar, AvatarFallback, AvatarImage,
  Card, CardHeader, CardTitle, CardContent, CardFooter,
} from "poyraz-ui/atoms";
import { StatsCard } from "poyraz-ui/molecules";

export function DashboardPage() {
  return (
    <div className="bg-muted min-h-screen">
      {/* Top Bar */}
      <div className="bg-background border-b border-border px-5 py-3 flex items-center justify-between">
        <Typography variant="small" className="font-bold">Dashboard</Typography>
        <Avatar className="h-7 w-7">
          <AvatarImage src="/avatar.jpg" />
          <AvatarFallback>PA</AvatarFallback>
        </Avatar>
      </div>

      <div className="p-5 space-y-5">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <StatsCard label="Revenue" value="$12,345" trend="up" trendValue="+12.5%" />
          <StatsCard label="Orders" value="89" trend="up" trendValue="+4.3%" />
          <StatsCard label="Customers" value="1,234" trend="down" trendValue="-2.1%" />
          <StatsCard label="Conversion" value="3.2%" trend="neutral" trendValue="0%" />
        </div>

        {/* Chart + Activity */}
        <div className="grid lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Your chart component here */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
            <CardContent>{/* Activity feed */}</CardContent>
          </Card>
        </div>

        {/* Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Table content */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}`;

export default function DashboardTemplatePage() {
  return (
    <ComponentPage
      name="Dashboard"
      description="Admin dashboard template with KPI stats, revenue chart placeholder, activity feed, and orders table. Built with StatsCard, Card atoms, Avatar, Badge, and Button."
      importCode={`import { Button, Typography, Badge, Avatar, Card, CardHeader, CardTitle, CardContent } from "poyraz-ui/atoms";
import { StatsCard } from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="Dashboard Layout"
        description="Stats grid, chart + activity sidebar, and a data table — a complete admin overview."
        code={dashboardCode}
      >
        <DashboardPreview />
      </DemoSection>
    </ComponentPage>
  );
}
