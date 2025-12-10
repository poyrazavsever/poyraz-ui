"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { PrimaryButton, OutlineButton } from "@/components/button/Button";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-start items-start p-6 sm:p-10 gap-12"
    >
      <div className="flex flex-col items-start text-left gap-8 max-w-2xl">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-(--color-accent)/10 border border-(--color-accent)/30 flex items-center justify-center">
            <Icon
              icon="solar:code-square-bold-duotone"
              className="text-3xl text-(--color-accent)"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-(--color-text)">
              Poyraz UI Kit
            </h1>
            <p className="text-xs text-(--color-muted)">Design System</p>
          </div>
        </div>

        {/* Hero Description */}
        <p className="text-(--color-muted) max-w-xl leading-relaxed">
          A collection of beautiful, reusable UI components and design patterns
          from{" "}
          <a
            href="https://poyrazavsever.com"
            target="_blank"
            rel="noreferrer"
            className="text-(--color-accent) hover:underline"
          >
            poyrazavsever.com
          </a>{" "}
          portfolio. Built with React, TypeScript, and Tailwind CSS.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <PrimaryButton href="/buttons">Browse Components</PrimaryButton>
          <OutlineButton
            href="https://github.com/poyrazavsever/poyraz-ui"
            target="_blank"
          >
            View on GitHub
          </OutlineButton>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 w-full">
          <div className="flex flex-col items-start text-left p-5 border border-(--color-border) rounded-2xl bg-(--color-surface)/50 hover:bg-(--color-surface) transition-colors">
            <div className="w-12 h-12 bg-(--color-accent-soft) rounded-xl flex items-center justify-center mb-4">
              <Icon
                icon="solar:palette-bold-duotone"
                className="w-6 h-6 text-(--color-accent)"
              />
            </div>
            <h3 className="font-semibold text-(--color-text) mb-2">
              38+ Themes
            </h3>
            <p className="text-sm text-(--color-muted)">
              Beautiful color palettes with light and dark modes
            </p>
          </div>

          <div className="flex flex-col items-start text-left p-5 border border-(--color-border) rounded-2xl bg-(--color-surface)/50 hover:bg-(--color-surface) transition-colors">
            <div className="w-12 h-12 bg-(--color-accent-soft) rounded-xl flex items-center justify-center mb-4">
              <Icon
                icon="solar:code-bold-duotone"
                className="w-6 h-6 text-(--color-accent)"
              />
            </div>
            <h3 className="font-semibold text-(--color-text) mb-2">
              Production Ready
            </h3>
            <p className="text-sm text-(--color-muted)">
              Battle-tested components from real portfolio projects
            </p>
          </div>

          <div className="flex flex-col items-start text-left p-5 border border-(--color-border) rounded-2xl bg-(--color-surface)/50 hover:bg-(--color-surface) transition-colors">
            <div className="w-12 h-12 bg-(--color-accent-soft) rounded-xl flex items-center justify-center mb-4">
              <Icon
                icon="solar:copy-bold-duotone"
                className="w-6 h-6 text-(--color-accent)"
              />
            </div>
            <h3 className="font-semibold text-(--color-text) mb-2">
              Copy & Paste
            </h3>
            <p className="text-sm text-(--color-muted)">
              Easy to use components with TypeScript support
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
