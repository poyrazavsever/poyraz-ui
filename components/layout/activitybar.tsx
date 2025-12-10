"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeSheet from "./theme-sheet";
import { ACTIVITY_LINKS, SOCIAL_LINKS } from "../../data/navigation";

const iconButtonBase =
  "relative flex h-12 w-12 items-center justify-center rounded-2xl border border-(--color-border) bg-(--color-surface)/90 text-(--color-muted) shadow-black/5 transition-colors hover:text-(--color-accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-background) cursor-pointer";

const dropdownMotion = {
  initial: { opacity: 0, y: 8, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 6, scale: 0.98 },
};

const tooltipMotion = {
  initial: { opacity: 0, x: -8 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -6 },
};

const ActivityBar = () => {
  const [socialOpen, setSocialOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!socialOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSocialOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [socialOpen]);

  useEffect(() => {
    if (!settingsOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        sheetRef.current &&
        !sheetRef.current.contains(event.target as Node)
      ) {
        setSettingsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [settingsOpen]);

  const handleHover = (id: string | null) => setHoveredId(id);

  return (
    <>
      {/* Desktop ActivityBar */}
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-max flex-col justify-between gap-4 border-r border-(--color-border) bg-(--color-surface)/80 p-3 backdrop-blur-xl sm:flex">
        <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-(--color-border) bg-(--color-accent)/10 shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.15)]">
            <Icon
              icon="solar:code-square-bold-duotone"
              className="text-2xl text-(--color-accent)"
            />
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col items-center gap-3">
            {ACTIVITY_LINKS.map((item) => {
              const isExternal = item.href.startsWith("http");

              return (
                <motion.div
                  key={item.id}
                  className="relative"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.94 }}
                >
                  <Link
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className={iconButtonBase}
                    aria-label={item.label}
                    title={item.label}
                    onMouseEnter={() => handleHover(item.id)}
                    onMouseLeave={() => handleHover(null)}
                    onFocus={() => handleHover(item.id)}
                    onBlur={() => handleHover(null)}
                  >
                    <Icon icon={item.icon} className="text-[1.5rem]" />
                  </Link>

                  <AnimatePresence>
                    {hoveredId === item.id && (
                      <motion.span
                        key={`${item.id}-tooltip`}
                        {...tooltipMotion}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 rounded-full border border-(--color-border) bg-(--color-background) px-3 py-1 text-xs font-medium w-24 text-center text-(--color-text)"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-4">
          {/* Social Links Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <motion.button
              type="button"
              className={`${iconButtonBase} ${
                socialOpen ? "text-(--color-accent)" : ""
              }`}
              aria-haspopup="true"
              aria-expanded={socialOpen}
              onClick={() => setSocialOpen((prev) => !prev)}
              onMouseEnter={() => handleHover("social")}
              onMouseLeave={() => handleHover(null)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.94 }}
            >
              <Icon
                icon="solar:hashtag-square-bold-duotone"
                className="text-[1.5rem]"
              />
            </motion.button>

            <AnimatePresence>
              {hoveredId === "social" && !socialOpen && (
                <motion.span
                  key="social-tooltip"
                  {...tooltipMotion}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 rounded-full border border-(--color-border) bg-(--color-background) px-3 py-1 text-xs font-medium w-24 text-center text-(--color-text)"
                >
                  Social Links
                </motion.span>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {socialOpen && (
                <motion.div
                  key="social-dropdown"
                  {...dropdownMotion}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-16 -top-32 z-10 min-w-[220px] -translate-y-1/2 rounded-2xl border border-(--color-border) bg-(--color-surface)/80 p-3 text-left shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur"
                >
                  <ul className="flex flex-col gap-1.5">
                    {SOCIAL_LINKS.map((social) => (
                      <li key={social.id}>
                        <Link
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          title={social.label}
                          className="flex items-center gap-3 rounded-xl px-2 py-1.5 text-sm text-(--color-text) transition hover:bg-(--color-overlay)"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-(--color-background)/70">
                            <Icon
                              icon={social.icon}
                              className="text-lg text-(--color-accent)"
                            />
                          </span>
                          <span className="flex-1">{social.label}</span>
                          <Icon
                            icon="solar:arrow-right-up-linear"
                            className="text-base text-(--color-muted)"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Settings Button */}
          <motion.button
            type="button"
            aria-label="Settings"
            className={iconButtonBase}
            onClick={() => setSettingsOpen(true)}
            onMouseEnter={() => handleHover("settings")}
            onMouseLeave={() => handleHover(null)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.94 }}
          >
            <Icon
              icon="solar:settings-bold-duotone"
              className="text-[1.5rem]"
            />
          </motion.button>

          <AnimatePresence>
            {hoveredId === "settings" && (
              <motion.span
                key="settings-tooltip"
                {...tooltipMotion}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="pointer-events-none absolute left-14 bottom-3 rounded-full border border-(--color-border) bg-(--color-background) px-3 py-1 text-xs font-medium w-24 text-center text-(--color-text)"
              >
                Theme
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </aside>

      {/* Mobile Bottom Bar */}
      <div className="fixed inset-x-3 bottom-3 z-30 flex flex-wrap items-center justify-around gap-2 rounded-3xl border border-(--color-border) bg-(--color-background)/80 px-2 py-2 text-[10px] text-(--color-text) shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur sm:hidden">
        {ACTIVITY_LINKS.map((item) => {
          const isExternal = item.href.startsWith("http");

          return (
            <Link
              key={`mobile-${item.id}`}
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              className="flex flex-col items-center gap-1 rounded-lg border border-(--color-border) bg-(--color-surface)/70 p-2"
            >
              <Icon icon={item.icon} className="text-xl" />
            </Link>
          );
        })}
        <button
          type="button"
          className="flex flex-col items-center gap-1 rounded-lg border border-(--color-border) bg-(--color-surface)/70 p-2"
          onClick={() => setSettingsOpen(true)}
        >
          <Icon icon="solar:settings-bold-duotone" className="text-xl" />
        </button>
        <button
          type="button"
          className={`flex flex-col items-center gap-1 rounded-lg border border-(--color-border) bg-(--color-surface)/70 p-2 ${
            socialOpen ? "text-(--color-accent)" : ""
          }`}
          onClick={() => setSocialOpen((prev) => !prev)}
        >
          <Icon icon="solar:hashtag-square-bold-duotone" className="text-xl" />
        </button>
      </div>

      {/* Mobile Social Links Modal */}
      <AnimatePresence>
        {socialOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-end justify-center bg-black/70 px-4 pb-20 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSocialOpen(false)}
          >
            <motion.div
              className="w-full max-w-sm rounded-[28px] border border-(--color-border) bg-(--color-background) p-4 text-(--color-text) shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              initial={{ y: 40, opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0.5 }}
              onClick={(event) => event.stopPropagation()}
            >
              <p className="text-sm font-semibold text-(--color-muted) mb-3">
                Social Links
              </p>
              <ul className="space-y-2 text-sm">
                {SOCIAL_LINKS.map((social) => (
                  <li key={`mobile-social-${social.id}`}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-3 rounded-xl border border-(--color-border) px-3 py-2"
                      onClick={() => setSocialOpen(false)}
                    >
                      <span className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--color-background)/60">
                          <Icon
                            icon={social.icon}
                            className="text-lg text-(--color-accent)"
                          />
                        </span>
                        {social.label}
                      </span>
                      <Icon
                        icon="solar:arrow-right-up-linear"
                        className="text-base text-(--color-muted)"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme Settings Sheet */}
      <ThemeSheet
        open={settingsOpen}
        sheetRef={sheetRef}
        onClose={() => setSettingsOpen(false)}
      />
    </>
  );
};

export default ActivityBar;
