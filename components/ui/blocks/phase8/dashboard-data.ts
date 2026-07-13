import { Activity, CreditCard, Users, Zap } from "lucide-react";

export const dashboardStats = [
  { label: "Active users", value: "12,480", change: "+8.2%", icon: Users },
  { label: "Revenue", value: "$84,240", change: "+12.4%", icon: CreditCard },
  { label: "Conversion", value: "6.8%", change: "+1.1%", icon: Activity },
  { label: "Automation", value: "1,284", change: "+18.7%", icon: Zap },
];

export const dashboardActivity = [
  { title: "Workspace upgraded", detail: "Growth plan", time: "2 min" },
  { title: "New team member", detail: "Product design", time: "18 min" },
  { title: "Report exported", detail: "Q3 performance", time: "1 hr" },
];

export const dashboardChart = [44, 58, 48, 72, 64, 82, 76, 91, 84, 96, 88, 100];
