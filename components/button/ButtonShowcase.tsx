"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Button, {
  PrimaryButton,
  SecondaryButton,
  OutlineButton,
  GhostButton,
  GradientButton,
  IconButton,
} from "./Button";

const ButtonShowcase = () => {
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
            Buttons
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            A comprehensive collection of button components with various styles,
            sizes, and interactive states. Built for modern web applications.
          </p>
        </motion.div>

        {/* Button Variants */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Button Variants
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Different visual styles for various use cases and contexts.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton icon="hugeicons:rocket-01">Primary</PrimaryButton>
            <SecondaryButton icon="hugeicons:settings-02">
              Secondary
            </SecondaryButton>
            <OutlineButton icon="hugeicons:download-01">Outline</OutlineButton>
            <GhostButton icon="hugeicons:eye">Ghost</GhostButton>
            <GradientButton icon="hugeicons:sparkles">Gradient</GradientButton>
          </div>
        </motion.section>

        {/* Button Sizes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Button Sizes
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Three size variants to fit different layout needs and hierarchy.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <PrimaryButton size="sm" icon="hugeicons:star">
              Small
            </PrimaryButton>
            <PrimaryButton size="md" icon="hugeicons:star">
              Medium
            </PrimaryButton>
            <PrimaryButton size="lg" icon="hugeicons:star">
              Large
            </PrimaryButton>
          </div>
        </motion.section>

        {/* Icon Positions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Icon Positions
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Flexible icon positioning for better semantic meaning and
            navigation.
          </p>
          <div className="flex flex-wrap gap-3">
            <SecondaryButton icon="hugeicons:arrow-left-01" iconPosition="left">
              Previous
            </SecondaryButton>
            <SecondaryButton
              icon="hugeicons:arrow-right-01"
              iconPosition="right"
            >
              Next
            </SecondaryButton>
          </div>
        </motion.section>

        {/* As Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            As Links
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Button components can function as links for navigation and external
            resources.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/projects" icon="hugeicons:folder-01">
              View Projects
            </PrimaryButton>
            <OutlineButton
              href="https://github.com"
              target="_blank"
              icon="hugeicons:github"
            >
              GitHub
            </OutlineButton>
          </div>
        </motion.section>

        {/* Button States */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Button States
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Loading, disabled, and icon-only states for enhanced user
            experience.
          </p>
          <div className="flex flex-wrap gap-3">
            <SecondaryButton loading>Loading...</SecondaryButton>
            <SecondaryButton disabled>Disabled</SecondaryButton>
            <IconButton iconOnly icon="hugeicons:heart" variant="ghost">
              ❤️
            </IconButton>
            <IconButton iconOnly icon="hugeicons:share-01" variant="outline">
              Share
            </IconButton>
          </div>
        </motion.section>

        {/* Best Practices */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-12 border-t border-neutral-200 dark:border-neutral-800 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">
            Best Practices
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-start text-left p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  icon="hugeicons:hierarchy-square-01"
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
                />
              </div>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Visual Hierarchy
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Use primary buttons for main actions, secondary for supporting
                actions
              </p>
            </div>

            <div className="flex flex-col items-start text-left p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  icon="hugeicons:cursor-click-01"
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
                />
              </div>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Clear Actions
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Use descriptive labels that clearly indicate what will happen
              </p>
            </div>

            <div className="flex flex-col items-start text-left p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  icon="hugeicons:spacing"
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
                />
              </div>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Proper Spacing
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Maintain consistent spacing between buttons for better usability
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default ButtonShowcase;
