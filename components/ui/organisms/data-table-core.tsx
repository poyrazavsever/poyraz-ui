"use client";

import * as React from "react";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

import { Checkbox } from "@/components/ui/atoms/checkbox";
import { cn } from "@/lib/utils";

export type SortDirection = "asc" | "desc" | null;
export type DataTableState = "populated" | "empty" | "loading" | "error";

export interface DataTableColumnDef<T> {
  id: string;
  header: string;
  accessorFn?: (row: T) => unknown;
  accessorKey?: keyof T;
  cell?: (row: T) => React.ReactNode;
  sortable?: boolean;
  filterable?: boolean;
  className?: string;
  hidden?: boolean;
}

export function getDataTableCellValue<T>(row: T, column: DataTableColumnDef<T>): unknown {
  if (column.accessorFn) return column.accessorFn(row);
  if (column.accessorKey) return (row as Record<string, unknown>)[column.accessorKey as string];
  return (row as Record<string, unknown>)[column.id];
}

export function stringifyDataTableValue(value: unknown): string {
  if (value == null) return "";
  if (["string", "number", "boolean"].includes(typeof value)) return String(value);
  return JSON.stringify(value);
}

export interface DataTableCoreProps<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  columns: DataTableColumnDef<T>[];
  data: T[];
  getRowId?: (row: T, index: number) => string;
  state?: DataTableState;
  emptyContent?: React.ReactNode;
  errorContent?: React.ReactNode;
  loadingRows?: number;
  selectable?: boolean;
  selectedIds?: ReadonlySet<string>;
  onToggleRow?: (id: string, row: T) => void;
  onToggleAll?: () => void;
  sortColumn?: string | null;
  sortDirection?: SortDirection;
  onSort?: (columnId: string) => void;
  caption?: string;
  stickyHeader?: boolean;
  density?: "compact" | "default" | "spacious";
  surface?: "solid" | "soft" | "glass";
  radius?: "none" | "sm" | "md" | "lg" | "xl";
  maxHeight?: string | number;
}

function DataTableCoreInner<T>(
  {
    caption,
    className,
    columns,
    data,
    density = "default",
    emptyContent = "No results found.",
    errorContent = "Unable to load data.",
    getRowId,
    loadingRows = 5,
    maxHeight,
    onSort,
    onToggleAll,
    onToggleRow,
    radius = "lg",
    selectable = false,
    selectedIds = new Set<string>(),
    sortColumn,
    sortDirection,
    state = data.length ? "populated" : "empty",
    stickyHeader = false,
    surface = "solid",
    style,
    ...props
  }: DataTableCoreProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const rowId = (row: T, index: number) => getRowId?.(row, index) ?? String(index);
  const allSelected = data.length > 0 && data.every((row, index) => selectedIds.has(rowId(row, index)));
  const padding = density === "compact" ? "px-2.5 py-2" : density === "spacious" ? "px-4 py-3.5" : "px-3 py-2.5";

  return (
    <div
      ref={ref}
      data-slot="data-table-core"
      data-state={state}
      data-surface={surface}
      className={cn(
        "relative w-full overflow-auto border",
        surface === "solid" && "border-border bg-surface",
        surface === "soft" && "border-transparent bg-surface-subtle",
        surface === "glass" && "border-glass-border-outer bg-glass shadow-md backdrop-blur-glass",
        radius === "none" && "rounded-none",
        radius === "sm" && "rounded-sm",
        radius === "md" && "rounded-md",
        radius === "lg" && "rounded-lg",
        radius === "xl" && "rounded-xl",
        className,
      )}
      style={{ maxHeight, ...style }}
      {...props}
    >
      <table className="w-full min-w-max border-separate border-spacing-0 text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead className={cn(stickyHeader && "sticky top-0 z-10")}> 
          <tr className="bg-surface-subtle/95 backdrop-blur-md">
            {selectable && (
              <th className={cn("w-12 border-b border-border text-center", padding)}>
                <Checkbox checked={allSelected} onCheckedChange={onToggleAll} aria-label="Select all rows" />
              </th>
            )}
            {columns.map((column) => {
              const sortable = column.sortable !== false && Boolean(onSort);
              const active = sortColumn === column.id;
              const ariaSort = active ? (sortDirection === "asc" ? "ascending" : "descending") : "none";
              return (
                <th
                  key={column.id}
                  scope="col"
                  aria-sort={sortable ? ariaSort : undefined}
                  className={cn("border-b border-border text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground", padding, column.className)}
                >
                  <button
                    type="button"
                    disabled={!sortable}
                    onClick={() => onSort?.(column.id)}
                    className={cn("inline-flex items-center gap-1.5 whitespace-nowrap outline-none transition-colors", sortable ? "cursor-pointer hover:text-foreground focus-visible:text-foreground" : "cursor-default")}
                  >
                    {column.header}
                    {sortable && (active && sortDirection === "asc" ? <ArrowUp className="size-3.5 text-primary animate-poyraz-scale-in" /> : active && sortDirection === "desc" ? <ArrowDown className="size-3.5 text-primary animate-poyraz-scale-in" /> : <ArrowUpDown className="size-3.5 opacity-45" />)}
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {state === "loading" && Array.from({ length: loadingRows }, (_, rowIndex) => (
            <tr key={`loading-${rowIndex}`} aria-hidden="true" className="animate-poyraz-fade-in">
              {selectable && <td className={cn("border-b border-border/70", padding)}><div className="mx-auto size-4 animate-pulse rounded bg-muted" /></td>}
              {columns.map((column) => <td key={column.id} className={cn("border-b border-border/70", padding)}><div className="h-3.5 w-24 max-w-full animate-pulse rounded bg-muted" /></td>)}
            </tr>
          ))}
          {state === "error" && (
            <tr><td colSpan={columns.length + (selectable ? 1 : 0)} className="p-10 text-center text-sm text-destructive-muted-foreground animate-poyraz-fade-in" role="alert">{errorContent}</td></tr>
          )}
          {state === "empty" && (
            <tr><td colSpan={columns.length + (selectable ? 1 : 0)} className="p-10 text-center text-sm text-muted-foreground animate-poyraz-fade-in">{emptyContent}</td></tr>
          )}
          {state === "populated" && data.map((row, index) => {
            const id = rowId(row, index);
            const selected = selectedIds.has(id);
            return (
              <tr key={id} data-state={selected ? "selected" : undefined} className="transition-colors hover:bg-accent/55 data-[state=selected]:bg-primary-muted/55">
                {selectable && <td className={cn("border-b border-border/70 text-center", padding)}><Checkbox checked={selected} onCheckedChange={() => onToggleRow?.(id, row)} aria-label={`Select row ${index + 1}`} /></td>}
                {columns.map((column) => <td key={column.id} className={cn("border-b border-border/70 text-secondary-foreground", padding, column.className)}>{column.cell ? column.cell(row) : stringifyDataTableValue(getDataTableCellValue(row, column))}</td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const DataTableCore = React.forwardRef(DataTableCoreInner) as <T>(props: DataTableCoreProps<T> & { ref?: React.Ref<HTMLDivElement> }) => React.ReactElement;

export { DataTableCore };
