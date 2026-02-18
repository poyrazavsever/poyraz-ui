"use client";

import * as React from "react";
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  SlidersHorizontal,
  Check,
} from "lucide-react";

import { cn } from "@/components/ui/atoms/typography";
import { Button } from "@/components/ui/atoms/button";
import { Input } from "@/components/ui/atoms/input";
import { Checkbox } from "@/components/ui/atoms/checkbox";
import { Badge } from "@/components/ui/atoms/badge";

/* ================================================================== */
/*  DATA TABLE — Full-featured table with sort, filter, pagination     */
/* ================================================================== */

/* ── Types ────────────────────────────────────────────────────────── */

export type SortDirection = "asc" | "desc" | null;

export interface ColumnDef<T> {
  /** Unique key for the column (matches object key or custom) */
  id: string;
  /** Column header label */
  header: string;
  /** Accessor function to get cell value */
  accessorFn?: (row: T) => unknown;
  /** Key of T to access directly */
  accessorKey?: keyof T;
  /** Custom cell renderer */
  cell?: (row: T) => React.ReactNode;
  /** Enable sorting (default: true) */
  sortable?: boolean;
  /** Enable filtering on this column */
  filterable?: boolean;
  /** Column width class */
  className?: string;
  /** Hidden by default */
  hidden?: boolean;
}

export interface DataTableProps<T> {
  /** Column definitions */
  columns: ColumnDef<T>[];
  /** Data rows */
  data: T[];
  /** Unique key extractor for each row */
  getRowId?: (row: T, index: number) => string;
  /** Rows per page (default: 10) */
  pageSize?: number;
  /** Show pagination (default: true) */
  pagination?: boolean;
  /** Show global search (default: true) */
  searchable?: boolean;
  /** Search placeholder */
  searchPlaceholder?: string;
  /** Enable row selection (default: false) */
  selectable?: boolean;
  /** Callback when selection changes */
  onSelectionChange?: (selectedRows: T[]) => void;
  /** Show column visibility toggle (default: false) */
  columnToggle?: boolean;
  /** Additional class for the wrapper */
  className?: string;
  /** Caption for accessibility */
  caption?: string;
  /** Empty state message */
  emptyMessage?: string;
}

/* ── Helpers ──────────────────────────────────────────────────────── */

function getCellValue<T>(row: T, col: ColumnDef<T>): unknown {
  if (col.accessorFn) return col.accessorFn(row);
  if (col.accessorKey)
    return (row as Record<string, unknown>)[col.accessorKey as string];
  return (row as Record<string, unknown>)[col.id];
}

function stringify(val: unknown): string {
  if (val == null) return "";
  if (typeof val === "string") return val;
  if (typeof val === "number" || typeof val === "boolean") return String(val);
  return JSON.stringify(val);
}

/* ================================================================== */
/*  MAIN COMPONENT                                                     */
/* ================================================================== */

function DataTableInner<T>(
  {
    columns,
    data,
    getRowId,
    pageSize = 10,
    pagination = true,
    searchable = true,
    searchPlaceholder = "Search...",
    selectable = false,
    onSelectionChange,
    columnToggle = false,
    className,
    caption,
    emptyMessage = "No results found.",
  }: DataTableProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  /* ── State ───────────────────────────────────────────────────────── */
  const [search, setSearch] = React.useState("");
  const [sortCol, setSortCol] = React.useState<string | null>(null);
  const [sortDir, setSortDir] = React.useState<SortDirection>(null);
  const [page, setPage] = React.useState(0);
  const [selectedIds, setSelectedIds] = React.useState<Set<string>>(new Set());
  const [hiddenCols, setHiddenCols] = React.useState<Set<string>>(
    () => new Set(columns.filter((c) => c.hidden).map((c) => c.id)),
  );
  const [colToggleOpen, setColToggleOpen] = React.useState(false);

  /* ── Visible columns ─────────────────────────────────────────────── */
  const visibleColumns = columns.filter((c) => !hiddenCols.has(c.id));

  /* ── Filtered data ───────────────────────────────────────────────── */
  const filtered = React.useMemo(() => {
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data.filter((row) =>
      columns.some((col) => {
        const val = getCellValue(row, col);
        return stringify(val).toLowerCase().includes(q);
      }),
    );
  }, [data, search, columns]);

  /* ── Sorted data ─────────────────────────────────────────────────── */
  const sorted = React.useMemo(() => {
    if (!sortCol || !sortDir) return filtered;
    const col = columns.find((c) => c.id === sortCol);
    if (!col) return filtered;
    return [...filtered].sort((a, b) => {
      const aVal = getCellValue(a, col);
      const bVal = getCellValue(b, col);
      const aStr = stringify(aVal);
      const bStr = stringify(bVal);
      const aNum = Number(aStr);
      const bNum = Number(bStr);
      // Numeric comparison if both are numbers
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return sortDir === "asc" ? aNum - bNum : bNum - aNum;
      }
      // String comparison
      const cmp = aStr.localeCompare(bStr);
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [filtered, sortCol, sortDir, columns]);

  /* ── Paginated data ──────────────────────────────────────────────── */
  const totalPages = pagination
    ? Math.max(1, Math.ceil(sorted.length / pageSize))
    : 1;
  const rows = pagination
    ? sorted.slice(page * pageSize, (page + 1) * pageSize)
    : sorted;

  // Reset page when data or search changes
  React.useEffect(() => {
    setPage(0);
  }, [search, data]);

  /* ── Row ID helper ───────────────────────────────────────────────── */
  const rowId = (row: T, i: number) =>
    getRowId ? getRowId(row, i) : String(i);

  /* ── Selection ───────────────────────────────────────────────────── */
  const allPageSelected =
    rows.length > 0 &&
    rows.every((row, i) => selectedIds.has(rowId(row, page * pageSize + i)));

  const toggleRow = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allPageSelected) {
        rows.forEach((_, i) =>
          next.delete(rowId(rows[i], page * pageSize + i)),
        );
      } else {
        rows.forEach((_, i) => next.add(rowId(rows[i], page * pageSize + i)));
      }
      return next;
    });
  };

  // Notify parent on selection change
  React.useEffect(() => {
    if (!selectable || !onSelectionChange) return;
    const selected = data.filter((row, i) => selectedIds.has(rowId(row, i)));
    onSelectionChange(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIds]);

  /* ── Sort handler ────────────────────────────────────────────────── */
  const handleSort = (colId: string) => {
    if (sortCol !== colId) {
      setSortCol(colId);
      setSortDir("asc");
    } else if (sortDir === "asc") {
      setSortDir("desc");
    } else {
      setSortCol(null);
      setSortDir(null);
    }
  };

  /* ── Column toggle ───────────────────────────────────────────────── */
  const toggleColumn = (colId: string) => {
    setHiddenCols((prev) => {
      const next = new Set(prev);
      if (next.has(colId)) next.delete(colId);
      else next.add(colId);
      return next;
    });
  };

  /* ── Render ──────────────────────────────────────────────────────── */
  return (
    <div ref={ref} className={cn("w-full space-y-4", className)}>
      {/* Toolbar */}
      {(searchable || columnToggle || (selectable && selectedIds.size > 0)) && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          {searchable && (
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={searchPlaceholder}
                className="pl-9 h-9 text-sm"
              />
            </div>
          )}

          <div className="flex items-center gap-2 ml-auto">
            {selectable && selectedIds.size > 0 && (
              <Badge variant="secondary" className="text-xs">
                {selectedIds.size} selected
              </Badge>
            )}

            {columnToggle && (
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 gap-1.5"
                  onClick={() => setColToggleOpen((v) => !v)}
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                  Columns
                </Button>
                {colToggleOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setColToggleOpen(false)}
                    />
                    <div className="absolute right-0 top-full mt-1 z-50 w-48 bg-white border-2 border-dashed border-slate-200 p-2 space-y-0.5">
                      {columns.map((col) => (
                        <button
                          key={col.id}
                          type="button"
                          className="flex items-center gap-2 w-full px-2 py-1.5 text-sm hover:bg-slate-50 cursor-pointer transition-colors"
                          onClick={() => toggleColumn(col.id)}
                        >
                          <span
                            className={cn(
                              "h-4 w-4 border-2 border-dashed flex items-center justify-center shrink-0",
                              hiddenCols.has(col.id)
                                ? "border-slate-300"
                                : "border-red-600 bg-red-600 text-white",
                            )}
                          >
                            {!hiddenCols.has(col.id) && (
                              <Check className="h-3 w-3" />
                            )}
                          </span>
                          {col.header}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="border-2 border-dashed border-slate-200 overflow-x-auto">
        <table className="w-full text-sm">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr className="border-b-2 border-dashed border-slate-200 bg-slate-50/80">
              {selectable && (
                <th className="w-12 p-3 text-center">
                  <Checkbox
                    checked={allPageSelected && rows.length > 0}
                    onCheckedChange={toggleAll}
                    aria-label="Select all"
                  />
                </th>
              )}
              {visibleColumns.map((col) => {
                const isSortable = col.sortable !== false;
                const isActive = sortCol === col.id;
                return (
                  <th
                    key={col.id}
                    className={cn(
                      "text-left p-3 font-bold uppercase text-[11px] tracking-widest text-slate-500",
                      "whitespace-nowrap",
                      isSortable &&
                        "cursor-pointer select-none hover:text-slate-900 transition-colors",
                      col.className,
                    )}
                    onClick={isSortable ? () => handleSort(col.id) : undefined}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      {col.header}
                      {isSortable && (
                        <span className="text-slate-300">
                          {isActive && sortDir === "asc" ? (
                            <ArrowUp className="h-3.5 w-3.5 text-red-600" />
                          ) : isActive && sortDir === "desc" ? (
                            <ArrowDown className="h-3.5 w-3.5 text-red-600" />
                          ) : (
                            <ArrowUpDown className="h-3.5 w-3.5" />
                          )}
                        </span>
                      )}
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td
                  colSpan={visibleColumns.length + (selectable ? 1 : 0)}
                  className="p-10 text-center text-sm text-slate-400"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              rows.map((row, i) => {
                const id = rowId(row, page * pageSize + i);
                const isSelected = selectedIds.has(id);
                return (
                  <tr
                    key={id}
                    className={cn(
                      "border-b border-dashed border-slate-100 transition-colors",
                      "hover:bg-slate-50/50",
                      isSelected && "bg-red-50/50",
                    )}
                  >
                    {selectable && (
                      <td className="w-12 p-3 text-center">
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => toggleRow(id)}
                          aria-label={`Select row ${i + 1}`}
                        />
                      </td>
                    )}
                    {visibleColumns.map((col) => (
                      <td
                        key={col.id}
                        className={cn("p-3 text-slate-700", col.className)}
                      >
                        {col.cell
                          ? col.cell(row)
                          : stringify(getCellValue(row, col))}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && sorted.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            Showing{" "}
            <span className="font-semibold text-slate-600">
              {page * pageSize + 1}
            </span>
            –
            <span className="font-semibold text-slate-600">
              {Math.min((page + 1) * pageSize, sorted.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-600">
              {sorted.length}
            </span>{" "}
            results
          </p>

          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              disabled={page === 0}
              onClick={() => setPage(0)}
              aria-label="First page"
            >
              <ChevronsLeft className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              disabled={page === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </Button>

            <span className="px-3 text-xs font-semibold text-slate-600">
              {page + 1} / {totalPages}
            </span>

            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              disabled={page >= totalPages - 1}
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              aria-label="Next page"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              disabled={page >= totalPages - 1}
              onClick={() => setPage(totalPages - 1)}
              aria-label="Last page"
            >
              <ChevronsRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// Wrap in forwardRef with generics
const DataTable = React.forwardRef(DataTableInner) as <T>(
  props: DataTableProps<T> & { ref?: React.Ref<HTMLDivElement> },
) => React.ReactElement;

export { DataTable };
export type { ColumnDef as DataTableColumnDef };
