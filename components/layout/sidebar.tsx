"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";

type SidebarLink = {
  label: string;
  href: string;
  icon: string;
};

const SIDEBAR_LINKS: SidebarLink[] = [
  {
    label: "Typography",
    href: "/typography",
    icon: "solar:text-bold-duotone",
  },
  {
    label: "Color Palette",
    href: "/color-palette",
    icon: "solar:palette-bold-duotone",
  },
  {
    label: "Icons",
    href: "/icons",
    icon: "solar:stars-minimalistic-bold-duotone",
  },
  {
    label: "Buttons",
    href: "/buttons",
    icon: "solar:cursor-bold-duotone",
  },
  {
    label: "Cards",
    href: "/cards",
    icon: "solar:card-bold-duotone",
  },
  {
    label: "Inputs",
    href: "/inputs",
    icon: "solar:text-field-bold-duotone",
  },
  {
    label: "Not Found",
    href: "/not-found",
    icon: "solar:ghost-bold-duotone",
  },
];

export default function Sidebar() {
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const filteredLinks = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return SIDEBAR_LINKS;
    }
    return SIDEBAR_LINKS.filter((item) =>
      item.label.toLowerCase().includes(normalized)
    );
  }, [query]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        type="button"
        aria-label="Toggle navigation"
        className="fixed left-4 top-4 z-40 flex h-10 w-10 items-center justify-center rounded-2xl border border-(--color-border) bg-(--color-background)/80 text-(--color-text) shadow-lg backdrop-blur sm:hidden"
        onClick={() => setMobileOpen(true)}
      >
        <Icon icon="solar:hamburger-menu-bold-duotone" className="text-xl" />
      </button>

      {/* Desktop Sidebar */}
      <aside className="fixed left-[calc(56px+1rem)] top-0 hidden h-screen w-64 flex-col border-r border-(--color-border) bg-(--color-surface)/85 p-5 backdrop-blur-xl sm:flex">
        <div>
          <label
            htmlFor="sidebar-search-desktop"
            className="text-xs font-semibold text-(--color-muted)"
          >
            Components
          </label>
          <div className="relative mt-2">
            <Icon
              icon="solar:magnifer-line-duotone"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-(--color-muted)"
            />
            <input
              id="sidebar-search-desktop"
              type="search"
              placeholder="Search components..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full rounded-xl border border-(--color-border) bg-(--color-background)/50 pl-9 pr-3 py-2 text-sm text-(--color-text) placeholder:text-(--color-muted) focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
            />
          </div>
        </div>

        <nav className="mt-4 flex-1 overflow-y-auto">
          <ul className="space-y-1 text-sm text-(--color-muted)">
            {filteredLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-active={isActive}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-(--color-overlay) hover:text-(--color-text) ${
                      isActive
                        ? "bg-(--color-accent-soft) text-(--color-accent) border border-(--color-accent)/30"
                        : "text-(--color-muted)"
                    }`}
                  >
                    <Icon icon={item.icon} className="text-lg" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
            {filteredLinks.length === 0 && (
              <li className="px-3 py-2 text-xs text-(--color-muted)">
                No results found
              </li>
            )}
          </ul>
        </nav>

        {/* Footer Info */}
        <div className="mt-4 pt-4 border-t border-(--color-border)">
          <p className="text-xs text-(--color-muted) text-center">
            UI Kit by{" "}
            <a
              href="https://poyrazavsever.com"
              target="_blank"
              rel="noreferrer"
              className="text-(--color-accent) hover:underline"
            >
              Poyraz Avsever
            </a>
          </p>
        </div>
      </aside>

      {/* Mobile Sidebar */}
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
                <p className="text-sm font-semibold text-(--color-muted)">
                  Components
                </p>
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-(--color-border) text-(--color-muted) hover:text-(--color-text)"
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon
                    icon="solar:close-circle-bold-duotone"
                    className="text-xl"
                  />
                </button>
              </div>

              <div className="relative mt-4">
                <Icon
                  icon="solar:magnifer-line-duotone"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-(--color-muted)"
                />
                <input
                  id="sidebar-search-mobile"
                  type="search"
                  placeholder="Search components..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-full rounded-xl border border-(--color-border) bg-(--color-background)/70 pl-9 pr-3 py-2 text-sm text-(--color-text) placeholder:text-(--color-muted) focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
                />
              </div>

              <nav className="mt-6 flex-1 overflow-y-auto">
                <ul className="space-y-2 text-sm text-(--color-muted)">
                  {filteredLinks.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={`mobile-${item.href}`}>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-(--color-overlay) ${
                            isActive
                              ? "bg-(--color-accent-soft) text-(--color-accent)"
                              : "text-(--color-muted)"
                          }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          <Icon icon={item.icon} className="text-lg" />
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                  {filteredLinks.length === 0 && (
                    <li className="px-3 py-2 text-xs text-(--color-muted)">
                      No results found
                    </li>
                  )}
                </ul>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
