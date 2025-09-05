"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const ColorPalette = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  // Main color palette based on your design system
  const neutralColors = [
    {
      name: "neutral-50",
      hex: "#fafafa",
      rgb: "250, 250, 250",
      class: "bg-neutral-50",
    },
    {
      name: "neutral-100",
      hex: "#f5f5f5",
      rgb: "245, 245, 245",
      class: "bg-neutral-100",
    },
    {
      name: "neutral-200",
      hex: "#e5e5e5",
      rgb: "229, 229, 229",
      class: "bg-neutral-200",
    },
    {
      name: "neutral-300",
      hex: "#d4d4d4",
      rgb: "212, 212, 212",
      class: "bg-neutral-300",
    },
    {
      name: "neutral-400",
      hex: "#a3a3a3",
      rgb: "163, 163, 163",
      class: "bg-neutral-400",
    },
    {
      name: "neutral-500",
      hex: "#737373",
      rgb: "115, 115, 115",
      class: "bg-neutral-500",
    },
    {
      name: "neutral-600",
      hex: "#525252",
      rgb: "82, 82, 82",
      class: "bg-neutral-600",
    },
    {
      name: "neutral-700",
      hex: "#404040",
      rgb: "64, 64, 64",
      class: "bg-neutral-700",
    },
    {
      name: "neutral-800",
      hex: "#262626",
      rgb: "38, 38, 38",
      class: "bg-neutral-800",
    },
    {
      name: "neutral-900",
      hex: "#171717",
      rgb: "23, 23, 23",
      class: "bg-neutral-900",
    },
  ];

  const semanticColors = [
    {
      name: "green-500",
      hex: "#22c55e",
      rgb: "34, 197, 94",
      class: "bg-green-500",
      usage: "Success states",
    },
    {
      name: "green-600",
      hex: "#16a34a",
      rgb: "22, 163, 74",
      class: "bg-green-600",
      usage: "Success hover",
    },
    {
      name: "red-500",
      hex: "#ef4444",
      rgb: "239, 68, 68",
      class: "bg-red-500",
      usage: "Error states",
    },
    {
      name: "red-600",
      hex: "#dc2626",
      rgb: "220, 38, 38",
      class: "bg-red-600",
      usage: "Error hover",
    },
  ];

  const backgroundColors = [
    {
      name: "Light Background",
      hex: "#ffffff",
      rgb: "255, 255, 255",
      class: "bg-white",
      usage: "Primary light background",
    },
    {
      name: "Dark Background",
      hex: "#121212",
      rgb: "18, 18, 18",
      class: "bg-[#121212]",
      usage: "Primary dark background",
    },
  ];

  // Button color system
  const buttonVariants = [
    {
      name: "Primary Button",
      light: "bg-neutral-900 text-neutral-100 hover:bg-neutral-800",
      dark: "dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200",
      description: "Main call-to-action buttons",
    },
    {
      name: "Secondary Button",
      light:
        "bg-neutral-50/20 text-neutral-700 border-neutral-200 hover:bg-neutral-100",
      dark: "dark:bg-neutral-900/20 dark:text-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-800",
      description: "Secondary actions",
    },
    {
      name: "Outline Button",
      light:
        "bg-transparent text-neutral-700 border-neutral-200 hover:bg-neutral-50/20",
      dark: "dark:text-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-900/20",
      description: "Less prominent actions",
    },
    {
      name: "Ghost Button",
      light:
        "bg-transparent text-neutral-600 hover:bg-neutral-50/20 hover:text-neutral-700",
      dark: "dark:text-neutral-400 dark:hover:bg-neutral-900/20 dark:hover:text-neutral-300",
      description: "Minimal actions",
    },
    {
      name: "Gradient Button",
      light:
        "bg-gradient-to-r from-neutral-800 to-neutral-600 text-neutral-100 hover:from-neutral-700 hover:to-neutral-500",
      dark: "dark:from-neutral-200 dark:to-neutral-400 dark:text-neutral-900 dark:hover:from-neutral-100 dark:hover:to-neutral-300",
      description: "Special highlight actions",
    },
  ];

  const textColors = [
    {
      name: "Primary Heading",
      class: "text-neutral-800 dark:text-neutral-100",
      usage: "Main titles and headings",
    },
    {
      name: "Secondary Heading",
      class: "text-neutral-700 dark:text-neutral-200",
      usage: "Section titles",
    },
    {
      name: "Body Text",
      class: "text-neutral-600 dark:text-neutral-400",
      usage: "Main content text",
    },
    {
      name: "Muted Text",
      class: "text-neutral-500 dark:text-neutral-500",
      usage: "Helper text and captions",
    },
  ];

  const ColorCard = ({
    color,
    isLarge = false,
  }: {
    color: any;
    isLarge?: boolean;
  }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${color.class} ${
        isLarge ? "h-24" : "h-16"
      } rounded-lg border border-neutral-200 dark:border-neutral-700 cursor-pointer relative overflow-hidden group`}
      onClick={() => copyToClipboard(color.hex)}
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
      <div className="absolute bottom-2 left-2 right-2">
        <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200 mb-1">
          {color.name}
        </div>
        <div className="text-xs text-neutral-600 dark:text-neutral-400">
          {color.hex}
        </div>
      </div>
      {copiedColor === color.hex && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
        >
          <div className="bg-white dark:bg-neutral-800 px-3 py-1 rounded-lg text-xs font-medium">
            Copied!
          </div>
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-start items-start mt-24 sm:mt-10 px-6 sm:px-24 gap-12"
    >
      <div className="flex flex-col items-start text-left gap-8 max-w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
            Color Palette
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            A comprehensive color system for the Poyraz UI kit, designed for
            consistency, accessibility, and beautiful user interfaces in both
            light and dark modes.
          </p>
        </motion.div>

        {/* Background Colors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Background Colors
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Primary background colors for light and dark themes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {backgroundColors.map((color) => (
              <div key={color.name} className="space-y-2">
                <ColorCard color={color} isLarge />
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {color.usage}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Neutral Colors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Neutral Colors
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            The foundation of the design system. Used for text, borders,
            backgrounds, and UI elements.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {neutralColors.map((color) => (
              <ColorCard key={color.name} color={color} />
            ))}
          </div>
        </motion.section>

        {/* Semantic Colors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Semantic Colors
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Colors with specific meanings for success, error, and warning
            states.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {semanticColors.map((color) => (
              <div key={color.name} className="space-y-2">
                <ColorCard color={color} />
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {color.usage}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Text Colors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Text Colors
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Typography color system for different text hierarchies and contexts.
          </p>
          <div className="space-y-4">
            {textColors.map((textColor) => (
              <div
                key={textColor.name}
                className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50"
              >
                <div className="flex items-center gap-4">
                  <div className={`text-lg font-medium ${textColor.class}`}>
                    {textColor.name}
                  </div>
                  <div className="text-sm text-neutral-500">
                    {textColor.usage}
                  </div>
                </div>
                <code className="text-xs bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded font-mono">
                  {textColor.class}
                </code>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Button Colors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Button Color System
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Color variations for different button states and variants.
          </p>
          <div className="space-y-6">
            {buttonVariants.map((variant) => (
              <div
                key={variant.name}
                className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50"
              >
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                  {variant.name}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {variant.description}
                </p>
                <div className="space-y-2">
                  <div className="text-xs text-neutral-500 font-medium">
                    Light Mode:
                  </div>
                  <code className="text-xs bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded font-mono block">
                    {variant.light}
                  </code>
                  <div className="text-xs text-neutral-500 font-medium">
                    Dark Mode:
                  </div>
                  <code className="text-xs bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded font-mono block">
                    {variant.dark}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Toast Colors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Toast Notification Colors
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Color system for toast notifications and feedback messages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-100 dark:bg-neutral-800">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                Default Toast
              </h3>
              <div className="text-sm space-y-1">
                <div>
                  Background:{" "}
                  <code className="text-xs bg-neutral-200 dark:bg-neutral-700 px-1 py-0.5 rounded">
                    rgb(220 220 220)
                  </code>
                </div>
                <div>
                  Text:{" "}
                  <code className="text-xs bg-neutral-200 dark:bg-neutral-700 px-1 py-0.5 rounded">
                    rgb(38 38 38)
                  </code>
                </div>
                <div>
                  Border:{" "}
                  <code className="text-xs bg-neutral-200 dark:bg-neutral-700 px-1 py-0.5 rounded">
                    #e5e7eb
                  </code>
                </div>
              </div>
            </div>

            <div className="p-4 border border-green-200 rounded-lg bg-green-500 text-white">
              <h3 className="font-semibold mb-2">Success Toast</h3>
              <div className="text-sm space-y-1">
                <div>
                  Background:{" "}
                  <code className="text-xs bg-green-600 px-1 py-0.5 rounded">
                    rgb(34 197 94)
                  </code>
                </div>
                <div>
                  Text:{" "}
                  <code className="text-xs bg-green-600 px-1 py-0.5 rounded">
                    #fff
                  </code>
                </div>
                <div>
                  Border:{" "}
                  <code className="text-xs bg-green-600 px-1 py-0.5 rounded">
                    rgb(22 163 74)
                  </code>
                </div>
              </div>
            </div>

            <div className="p-4 border border-red-200 rounded-lg bg-red-500 text-white">
              <h3 className="font-semibold mb-2">Error Toast</h3>
              <div className="text-sm space-y-1">
                <div>
                  Background:{" "}
                  <code className="text-xs bg-red-600 px-1 py-0.5 rounded">
                    rgb(239 68 68)
                  </code>
                </div>
                <div>
                  Text:{" "}
                  <code className="text-xs bg-red-600 px-1 py-0.5 rounded">
                    #fff
                  </code>
                </div>
                <div>
                  Border:{" "}
                  <code className="text-xs bg-red-600 px-1 py-0.5 rounded">
                    rgb(220 38 38)
                  </code>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Usage Guidelines */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="pt-12 border-t border-neutral-200 dark:border-neutral-800 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">
            Usage Guidelines
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col items-start text-left p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  icon="hugeicons:colors"
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
                />
              </div>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Accessibility First
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                All color combinations meet WCAG AA contrast requirements for
                optimal readability
              </p>
            </div>

            <div className="flex flex-col items-start text-left p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  icon="hugeicons:color-picker"
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
                />
              </div>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Consistent System
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Use semantic colors consistently across the application for
                better user experience
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default ColorPalette;
