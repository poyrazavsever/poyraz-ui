"use client";

import * as React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  SlidersHorizontal,
  Check,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/atoms/button";
import { Input } from "@/components/ui/atoms/input";
import { Badge } from "@/components/ui/atoms/badge";
import {
  DataTableCore,
  getDataTableCellValue,
  stringifyDataTableValue,
  type DataTableColumnDef,
  type DataTableState,
  type SortDirection,
} from "@/components/ui/organisms/data-table-core";

/* ================================================================== */
/*  DATA TABLE — Full-featured table with sort, filter, pagination     */
/* ================================================================== */

/* ── Types ────────────────────────────────────────────────────────── */

export interface DataTableProps<T> {
  /** Column definitions */
  columns: DataTableColumnDef<T>[];
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
  loading?: boolean;
  error?: React.ReactNode;
  stickyHeader?: boolean;
  tableMaxHeight?: string | number;
  density?: "compact" | "default" | "spacious";
  surface?: "solid" | "soft" | "glass";
  radius?: "none" | "sm" | "md" | "lg" | "xl";
  toolbar?: React.ReactNode;
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
    loading = false,
    error,
    stickyHeader = false,
    tableMaxHeight,
    density = "default",
    surface = "solid",
    radius = "lg",
    toolbar,
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
        const val = getDataTableCellValue(row, col);
        return stringifyDataTableValue(val).toLowerCase().includes(q);
      }),
    );
  }, [data, search, columns]);

  /* ── Sorted data ─────────────────────────────────────────────────── */
  const sorted = React.useMemo(() => {
    if (!sortCol || !sortDir) return filtered;
    const col = columns.find((c) => c.id === sortCol);
    if (!col) return filtered;
    return [...filtered].sort((a, b) => {
      const aVal = getDataTableCellValue(a, col);
      const bVal = getDataTableCellValue(b, col);
      const aStr = stringifyDataTableValue(aVal);
      const bStr = stringifyDataTableValue(bVal);
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
  const totalPages = pagination ? Math.max(1, Math.ceil(sorted.length / pageSize)) : 1;
  const rows = pagination ? sorted.slice(page * pageSize, (page + 1) * pageSize) : sorted;

  // Reset page when data or search changes
  React.useEffect(() => {
    setPage(0);
  }, [search, data]);

  /* ── Row ID helper ───────────────────────────────────────────────── */
  const rowId = (row: T, i: number) => (getRowId ? getRowId(row, i) : String(i));

  /* ── Selection ───────────────────────────────────────────────────── */
  const allPageSelected =
    rows.length > 0 && rows.every((row, i) => selectedIds.has(rowId(row, page * pageSize + i)));

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
        rows.forEach((_, i) => next.delete(rowId(rows[i], page * pageSize + i)));
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
    <div ref={ref} className={cn("w-full space-y-4 animate-poyraz-fade-in", className)}>
      {/* Toolbar */}
      {(searchable || columnToggle || (selectable && selectedIds.size > 0)) && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          {searchable && (
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-placeholder" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={searchPlaceholder}
                className="pl-9 h-8 text-sm"
              />
            </div>
          )}

          <div className="flex items-center gap-2 ml-auto">
            {selectable && selectedIds.size > 0 && (
              <Badge variant="secondary" className="text-xs animate-poyraz-scale-in">
                {selectedIds.size} selected
              </Badge>
            )}

            {columnToggle && (
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 gap-1.5 transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] active:scale-[0.98]"
                  onClick={() => setColToggleOpen((v) => !v)}
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                  Columns
                </Button>
                {colToggleOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setColToggleOpen(false)} />
                    <div className="absolute right-0 top-full mt-1 z-50 w-48 bg-background border border-border p-2 space-y-0.5 origin-top-right animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-[var(--poyraz-motion-duration-base)]">
                      {columns.map((col) => (
                        <button
                          key={col.id}
                          type="button"
                          className="flex w-full cursor-pointer items-center gap-2 px-2 py-1.5 text-sm transition-colors duration-[var(--poyraz-motion-duration-fast)] hover:bg-muted"
                          onClick={() => toggleColumn(col.id)}
                        >
                          <span
                            className={cn(
                              "h-4 w-4 border flex items-center justify-center shrink-0 transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
                              hiddenCols.has(col.id)
                                ? "border-border-strong scale-95"
                                : "border-primary bg-primary text-primary-foreground scale-100",
                            )}
                          >
                            {!hiddenCols.has(col.id) && (
                              <Check className="h-3 w-3 animate-poyraz-scale-in" />
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

      {toolbar}

      {/* Table */}
      <DataTableCore
        columns={visibleColumns}
        data={rows}
        getRowId={(row, index) => rowId(row, page * pageSize + index)}
        state={
          (loading
            ? "loading"
            : error
              ? "error"
              : rows.length
                ? "populated"
                : "empty") satisfies DataTableState
        }
        emptyContent={emptyMessage}
        errorContent={error}
        selectable={selectable}
        selectedIds={selectedIds}
        onToggleRow={(id) => toggleRow(id)}
        onToggleAll={toggleAll}
        sortColumn={sortCol}
        sortDirection={sortDir}
        onSort={handleSort}
        caption={caption}
        stickyHeader={stickyHeader}
        maxHeight={tableMaxHeight}
        density={density}
        surface={surface}
        radius={radius}
      />

      {/* Pagination */}
      {pagination && sorted.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-placeholder">
            Showing{" "}
            <span className="font-semibold text-muted-foreground">{page * pageSize + 1}</span>–
            <span className="font-semibold text-muted-foreground">
              {Math.min((page + 1) * pageSize, sorted.length)}
            </span>{" "}
            of <span className="font-semibold text-muted-foreground">{sorted.length}</span> results
          </p>

          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              disabled={page === 0}
              onClick={() => setPage(0)}
              aria-label="First page"
            >
              <ChevronsLeft className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              disabled={page === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </Button>

            <span className="px-3 text-xs font-semibold text-muted-foreground">
              {page + 1} / {totalPages}
            </span>

            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              disabled={page >= totalPages - 1}
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              aria-label="Next page"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
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
export type { DataTableColumnDef } from "@/components/ui/organisms/data-table-core";
