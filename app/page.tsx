"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { PrimaryButton, OutlineButton } from "@/components/button/Button";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-start items-start mt-24 sm:mt-10 px-6 sm:px-24 gap-12"
    >
      <div className="flex flex-col items-start text-left gap-8 max-w-2xl">
        {/* Logo */}
        <div className="w-16 h-16">
          <img
            src="/logo.png"
            alt="Poyraz UI"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-800 dark:text-neutral-100">
          Poyraz UI Kit
        </h1>

        {/* Hero Description */}
        <p className="text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
          A collection of beautiful, reusable UI components and design patterns
          from poyrazavsever.com portfolio. Built with React, TypeScript, and
          Tailwind CSS.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <PrimaryButton href="/cards">Browse Components</PrimaryButton>
          <OutlineButton
            href="https://github.com/poyrazavsever/poyraz-ui"
            target="_blank"
          >
            View on GitHub
          </OutlineButton>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 w-full">
          <div className="flex flex-col items-start text-left p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
              <Icon
                icon="hugeicons:paint-brush-01"
                className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
              />
            </div>
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Modern Design
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Clean, minimal design patterns with dark mode support
            </p>
          </div>

          <div className="flex flex-col items-start text-left p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
              <Icon
                icon="hugeicons:traffic-light"
                className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
              />
            </div>
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Production Ready
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Battle-tested components from real portfolio projects
            </p>
          </div>

          <div className="flex flex-col items-start text-left p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
              <Icon
                icon="hugeicons:settings-01"
                className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
              />
            </div>
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Easy to Use
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Copy-paste components with TypeScript support
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
