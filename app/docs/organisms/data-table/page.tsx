"use client";

import {
  DataTable,
  type DataTableColumnDef,
} from "poyraz-ui/organisms";
import { Badge } from "poyraz-ui/atoms";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

/* ── Sample data ─────────────────────────────────────────────────── */

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
}

const users: User[] = [
  {
    id: "1",
    name: "Ali Yılmaz",
    email: "ali@example.com",
    role: "Admin",
    status: "active",
  },
  {
    id: "2",
    name: "Ayşe Demir",
    email: "ayse@example.com",
    role: "Editor",
    status: "active",
  },
  {
    id: "3",
    name: "Mehmet Kaya",
    email: "mehmet@example.com",
    role: "Viewer",
    status: "inactive",
  },
  {
    id: "4",
    name: "Zeynep Çelik",
    email: "zeynep@example.com",
    role: "Editor",
    status: "active",
  },
  {
    id: "5",
    name: "Can Öztürk",
    email: "can@example.com",
    role: "Admin",
    status: "active",
  },
  {
    id: "6",
    name: "Elif Arslan",
    email: "elif@example.com",
    role: "Viewer",
    status: "inactive",
  },
  {
    id: "7",
    name: "Burak Koç",
    email: "burak@example.com",
    role: "Editor",
    status: "active",
  },
  {
    id: "8",
    name: "Deniz Aydın",
    email: "deniz@example.com",
    role: "Viewer",
    status: "active",
  },
  {
    id: "9",
    name: "Selin Yıldız",
    email: "selin@example.com",
    role: "Admin",
    status: "inactive",
  },
  {
    id: "10",
    name: "Emre Şahin",
    email: "emre@example.com",
    role: "Editor",
    status: "active",
  },
  {
    id: "11",
    name: "Gizem Tan",
    email: "gizem@example.com",
    role: "Viewer",
    status: "active",
  },
  {
    id: "12",
    name: "Oğuz Han",
    email: "oguz@example.com",
    role: "Admin",
    status: "active",
  },
];

const columns: DataTableColumnDef<User>[] = [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
    sortable: true,
    filterable: true,
  },
  { id: "email", header: "Email", accessorKey: "email", sortable: true },
  {
    id: "role",
    header: "Role",
    accessorKey: "role",
    sortable: true,
    filterable: true,
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    sortable: true,
    cell: (row) => (
      <Badge variant={row.status === "active" ? "default" : "outline"}>
        {row.status}
      </Badge>
    ),
  },
];

/* ── Minimal columns ─────────────────────────────────────────────── */

interface Product {
  name: string;
  price: number;
  stock: number;
}

const products: Product[] = [
  { name: "Keyboard", price: 59, stock: 120 },
  { name: "Mouse", price: 29, stock: 340 },
  { name: "Monitor", price: 399, stock: 45 },
  { name: "Headset", price: 89, stock: 200 },
  { name: "Webcam", price: 49, stock: 80 },
];

const productColumns: DataTableColumnDef<Product>[] = [
  { id: "name", header: "Product", accessorKey: "name", sortable: true },
  {
    id: "price",
    header: "Price",
    accessorKey: "price",
    sortable: true,
    cell: (row) => <span>${row.price}</span>,
  },
  { id: "stock", header: "Stock", accessorKey: "stock", sortable: true },
];

export default function DataTablePage() {
  return (
    <ComponentPage
      name="Data Table"
      description="Full-featured data table with sorting, searching, pagination, row selection, and column visibility."
      importCode={`import { DataTable } from "poyraz-ui/organisms";
import type { DataTableColumnDef } from "poyraz-ui/organisms";`}
    >
      <DemoSection
        title="Full Featured"
        description="Table with search, sort, pagination, row selection, and column toggle."
        code={`const columns: DataTableColumnDef<User>[] = [
  { id: "name", header: "Name", accessorKey: "name", sortable: true, filterable: true },
  { id: "email", header: "Email", accessorKey: "email", sortable: true },
  { id: "role", header: "Role", accessorKey: "role", sortable: true, filterable: true },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    sortable: true,
    cell: (row) => (
      <Badge variant={row.status === "active" ? "default" : "outline"}>
        {row.status}
      </Badge>
    ),
  },
];

<DataTable
  columns={columns}
  data={users}
  getRowId={(row) => row.id}
  pageSize={5}
  selectable
  columnToggle
  searchPlaceholder="Search users..."
/>`}
      >
        <DataTable
          columns={columns}
          data={users}
          getRowId={(row) => row.id}
          pageSize={5}
          selectable
          columnToggle
          searchPlaceholder="Search users..."
        />
      </DemoSection>

      <DemoSection
        title="Simple Table"
        description="Minimal table without selection or column toggle."
        code={`<DataTable
  columns={productColumns}
  data={products}
  pageSize={10}
  searchable={false}
  pagination={false}
/>`}
      >
        <DataTable
          columns={productColumns}
          data={products}
          pageSize={10}
          searchable={false}
          pagination={false}
        />
      </DemoSection>
    </ComponentPage>
  );
}
