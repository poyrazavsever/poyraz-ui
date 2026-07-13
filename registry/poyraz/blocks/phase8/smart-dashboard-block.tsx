import { ArrowUpRight, MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/atoms/badge";
import { Button } from "@/components/ui/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card";
import {
  dashboardActivity,
  dashboardChart,
  dashboardStats,
} from "@/components/ui/blocks/phase8/dashboard-data";

export interface SmartDashboardBlockProps {
  stats?: typeof dashboardStats;
  activity?: typeof dashboardActivity;
  chart?: number[];
}

function SmartDashboardBlock({
  stats = dashboardStats,
  activity = dashboardActivity,
  chart = dashboardChart,
}: SmartDashboardBlockProps) {
  return (
    <section data-slot="smart-dashboard-block" className="@container/dashboard min-w-0 space-y-4">
      <header className="flex flex-col gap-3 @sm/dashboard:flex-row @sm/dashboard:items-end @sm/dashboard:justify-between">
        <div>
          <Badge variant="glass">Live workspace</Badge>
          <h2 className="mt-2 text-xl font-semibold">Performance overview</h2>
          <p className="text-sm text-muted-foreground">A compact view of product health.</p>
        </div>
        <Button variant="outline" size="sm">
          View report <ArrowUpRight className="size-4" />
        </Button>
      </header>
      <div className="grid grid-cols-1 gap-3 @sm/dashboard:grid-cols-2 @xl/dashboard:grid-cols-4">
        {stats.map(({ label, value, change, icon: Icon }) => (
          <Card key={label} variant="glass">
            <CardHeader className="p-4">
              <div>
                <CardDescription>{label}</CardDescription>
                <CardTitle className="mt-1 text-xl">{value}</CardTitle>
              </div>
              <span className="flex size-8 items-center justify-center rounded-md bg-primary-muted text-primary">
                <Icon className="size-4" />
              </span>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <Badge variant="success" size="sm">
                {change}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 @lg/dashboard:grid-cols-[minmax(0,1.6fr)_minmax(15rem,1fr)]">
        <Card variant="default">
          <CardHeader>
            <div>
              <CardTitle>Usage trend</CardTitle>
              <CardDescription>Last 12 reporting periods</CardDescription>
            </div>
            <Button variant="ghost" size="icon-sm" aria-label="Chart options">
              <MoreHorizontal className="size-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex h-44 items-end gap-1.5" aria-label="Usage trend chart">
              {chart.map((value, index) => (
                <div
                  key={index}
                  className="min-w-1 flex-1 rounded-t-sm bg-primary-muted"
                  style={{ height: `${value}%` }}
                >
                  <span className="sr-only">
                    Period {index + 1}: {value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card variant="soft">
          <CardHeader>
            <div>
              <CardTitle>Recent activity</CardTitle>
              <CardDescription>Workspace events</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="divide-y divide-border">
              {activity.map((item) => (
                <li key={`${item.title}-${item.time}`} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex justify-between gap-3">
                    <p className="text-sm font-medium">{item.title}</p>
                    <time className="shrink-0 text-xs text-muted-foreground">{item.time}</time>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export { SmartDashboardBlock };
