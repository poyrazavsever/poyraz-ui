"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

type SidebarLink = {
  label: string;
  href: string;
};

type SidebarProps = {
  links: SidebarLink[];
};

export default function Sidebar({ links }: SidebarProps) {
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const filteredLinks = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return links;
    }
    return links.filter((item) => item.label.toLowerCase().includes(normalized));
  }, [query, links]);

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation"
        className="fixed left-4 top-4 z-40 flex h-10 w-10 items-center justify-center rounded-2xl border border-(--color-border) bg-(--color-background)/80 text-(--color-text) shadow-lg sm:hidden"
        onClick={() => setMobileOpen(true)}
      >
          <span className="space-y-1">
          <span className="block h-0.5 w-5 bg-(--color-text)"></span>
          <span className="block h-0.5 w-5 bg-(--color-text)"></span>
          <span className="block h-0.5 w-5 bg-(--color-text)"></span>
        </span>
      </button>

      <aside className="fixed left-[calc(56px+1rem)] top-0 hidden h-screen w-64 flex-col border-r border-(--color-border) bg-(--color-surface)/85 p-5 backdrop-blur-xl sm:flex">
        <div>
          <label htmlFor="sidebar-search-desktop" className="text-xs font-semibold text-(--color-muted)">
            Explorer
          </label>
          <input
            id="sidebar-search-desktop"
            type="search"
            placeholder="Search links..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="mt-2 w-full rounded-xl border border-(--color-border) bg-(--color-background)/50 px-3 py-2 text-sm text-(--color-text) placeholder:text-(--color-muted) focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
          />
        </div>

        <nav className="mt-4 flex-1 overflow-y-auto">
          <ul className="text-sm text-(--color-muted)">
            {filteredLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-active={isActive}
                    className={`block rounded-lg px-3 py-2 transition hover:bg-(--color-overlay) hover:text-(--color-text) ${
                      isActive ? "bg-(--color-overlay) text-(--color-text)" : "text-(--color-muted)"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            {filteredLinks.length === 0 && <li className="px-3 py-2 text-xs text-(--color-muted)">No results</li>}
          </ul>
        </nav>
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex bg-black/50 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.aside
              className="relative h-full w-72 border-r border-(--color-border) bg-(--color-surface) px-5 py-6 text-(--color-text)"
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-(--color-muted)">Explorer</p>
                <button
                  type="button"
                  className="rounded-full border border-(--color-border) px-2 py-1 text-xs text-(--color-muted)"
                  onClick={() => setMobileOpen(false)}
                >
                  X
                </button>
              </div>

              <input
                id="sidebar-search-mobile"
                type="search"
                placeholder="Search links..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="mt-4 w-full rounded-xl border border-(--color-border) bg-(--color-background)/70 px-3 py-2 text-sm text-(--color-text) placeholder:text-(--color-muted) focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
              />

              <nav className="mt-6 flex-1 overflow-y-auto">
                <ul className="space-y-2 text-sm text-(--color-muted)">
            {filteredLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={`mobile-${item.href}`}>
                  <Link
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 transition hover:bg-(--color-overlay) ${
                      isActive ? "bg-(--color-overlay) text-(--color-text)" : "text-(--color-muted)"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
                  {filteredLinks.length === 0 && <li className="px-3 py-2 text-xs text-(--color-muted)">No results</li>}
                </ul>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
