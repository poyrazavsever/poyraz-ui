"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const allNavItems = [
  {
    href: "/typography",
    icon: "hugeicons:arrange-by-letters-a-z",
    label: "Typography",
  },
  {
    href: "/color-palette",
    icon: "hugeicons:color-picker",
    label: "Color Palette",
  },
  {
    href: "/buttons",
    icon: "hugeicons:mouse-left-click-06",
    label: "Buttons",
  },
  {
    href: "/cards",
    icon: "hugeicons:credit-card-pos",
    label: "Cards",
  },
];

// Social media links array
const socialLinks = [
  {
    href: "https://www.linkedin.com/in/poyrazavsever/",
    icon: "hugeicons:linkedin-01",
    label: "LinkedIn",
  },
  {
    href: "https://www.github.com/poyrazavsever",
    icon: "hugeicons:github",
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/poyraz_avsever/",
    icon: "hugeicons:instagram",
    label: "Instagram",
  },
  {
    href: "http://youtube.com/@poyrazavsever",
    icon: "hugeicons:youtube",
    label: "Youtube",
  },
  {
    href: "https://medium.com/@poyrazavsever",
    icon: "hugeicons:medium-square",
    label: "Medium",
  },
  {
    href: "https://www.behance.net/poyrazavsever",
    icon: "hugeicons:behance-02",
    label: "Behance",
  },
  {
    href: "https://www.buymeacoffee.com/poyrazavsever",
    icon: "simple-icons:buymeacoffee",
    label: "Buy Me a Coffee",
  },
];

const Navbar = () => {
  const [activeTheme, setActiveTheme] = useState("system");
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const themes = [
    { id: "light", icon: "mdi:weather-sunny", label: "Light" },
    { id: "dark", icon: "mdi:weather-night", label: "Dark" },
    { id: "system", icon: "mdi:monitor", label: "System" },
  ];

  const handleThemeChange = (themeId: string) => {
    setActiveTheme(themeId);
    localStorage.setItem("theme", themeId);
    if (
      themeId === "dark" ||
      (themeId === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setActiveTheme(savedTheme);
    handleThemeChange(savedTheme);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (
        themeRef.current &&
        !themeRef.current.contains(event.target as Node)
      ) {
        setIsThemeOpen(false);
      }
      if (
        socialRef.current &&
        !socialRef.current.contains(event.target as Node)
      ) {
        setIsSocialOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Responsive dropdown position
  const dropdownPosition =
    typeof window !== "undefined" && window.innerWidth < 640
      ? "left-1/2 -translate-x-1/2 right-auto"
      : "right-0";

  // Filtered nav items for search
  const filteredNavItems = allNavItems.filter((item) =>
    item.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      {/* Top Right Navigation & Switchers */}
      <div className="fixed top-4 right-4 flex items-center gap-3 sm:gap-4 z-40">
        {/* Logo Button (Home) */}
        <Link
          href="/"
          className="p-2 rounded-lg bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center"
          title="Ana Sayfa"
        >
          <img src="/logo.png" alt="logo" className="w-6 h-6" />
        </Link>
        {/* Navigation Dropdown */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsThemeOpen(false);
              setIsSocialOpen(false);
            }}
            className="p-2 rounded-lg bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <Icon
              icon="hugeicons:more"
              className="text-neutral-600 dark:text-neutral-300 w-6 h-6"
            />
          </button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className={`absolute mt-2 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 p-2 min-w-[240px] max-h-[70vh] overflow-y-auto ${dropdownPosition}`}
              >
                {/* Search Bar */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center w-full bg-neutral-100 dark:bg-neutral-700 rounded-lg px-2 py-3">
                    <Icon
                      icon="hugeicons:search-01"
                      className="w-5 h-5 text-neutral-400 dark:text-neutral-300 mr-2"
                    />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="bg-transparent outline-none w-full text-sm text-neutral-700 dark:text-neutral-200 placeholder:text-neutral-400 dark:placeholder:text-neutral-400"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  {filteredNavItems.length === 0 ? (
                    <div className="text-center text-xs text-neutral-400 py-2">
                      No results found.
                    </div>
                  ) : (
                    filteredNavItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`w-full p-2 rounded-lg flex items-center gap-3 transition-all ${
                            isActive
                              ? "bg-neutral-50 dark:bg-neutral-900/20 text-neutral-600 dark:text-neutral-400"
                              : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-900"
                          }`}
                        >
                          {/* Menü iconu boş, yanında logo */}
                          <span className="flex items-center gap-2">
                            {item.icon ? (
                              <Icon icon={item.icon} className="w-5 h-5" />
                            ) : null}
                          </span>
                          <span className="text-sm font-medium truncate">
                            {item.label}
                          </span>
                        </Link>
                      );
                    })
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Theme Switcher */}
        <div className="relative" ref={themeRef}>
          <button
            onClick={() => {
              setIsThemeOpen(!isThemeOpen);
              setIsMenuOpen(false);
              setIsSocialOpen(false);
            }}
            className="p-2 rounded-lg bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <Icon
              icon="mdi:weather-night"
              className="text-neutral-600 dark:text-neutral-300 w-5 h-5"
            />
          </button>
          <AnimatePresence>
            {isThemeOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 p-2 min-w-[180px]"
              >
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => {
                      handleThemeChange(theme.id);
                      setIsThemeOpen(false);
                    }}
                    className={`w-full p-2 rounded-lg flex items-center gap-3 ${
                      activeTheme === theme.id
                        ? "bg-neutral-50 dark:bg-neutral-900/20 text-neutral-600 dark:text-neutral-400"
                        : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                    }`}
                  >
                    <Icon icon={theme.icon} className="w-5 h-5" />
                    <span className="text-sm font-medium">{theme.label}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Social Media Links */}
        <div className="relative" ref={socialRef}>
          <button
            onClick={() => {
              setIsSocialOpen(!isSocialOpen);
              setIsThemeOpen(false);
              setIsMenuOpen(false);
            }}
            className="p-2 rounded-lg bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <Icon
              icon="mdi:share-variant"
              className="text-neutral-600 dark:text-neutral-300 w-5 h-5"
            />
          </button>
          <AnimatePresence>
            {isSocialOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 p-2 min-w-[180px]"
              >
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full p-2 rounded-lg flex items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                    title={link.label}
                  >
                    <Icon icon={link.icon} className="w-5 h-5" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Navbar;
