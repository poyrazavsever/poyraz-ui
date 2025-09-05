"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const Typography = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Typography scale based on your design system
  const headingStyles = [
    {
      name: "Heading 1 (Large)",
      class: "text-4xl sm:text-5xl font-semibold",
      usage: "Page titles, main headings",
      example: "Poyraz UI Kit",
      size: "48px / 60px",
      weight: "600 (Semibold)",
    },
    {
      name: "Heading 2 (Section)",
      class: "text-2xl font-semibold",
      usage: "Section titles, major headings",
      example: "Typography System",
      size: "24px",
      weight: "600 (Semibold)",
    },
    {
      name: "Heading 3 (Subsection)",
      class: "text-lg font-semibold",
      usage: "Subsection titles, component headings",
      example: "Text Styles",
      size: "18px",
      weight: "600 (Semibold)",
    },
    {
      name: "Heading 4 (Small)",
      class: "text-base font-semibold",
      usage: "Card titles, small headings",
      example: "Component Name",
      size: "16px",
      weight: "600 (Semibold)",
    },
  ];

  const bodyStyles = [
    {
      name: "Large Text",
      class: "text-lg font-normal",
      usage: "Hero descriptions, important content",
      example:
        "A collection of beautiful, reusable UI components and design patterns from poyrazavsever.com portfolio.",
      size: "18px",
      weight: "400 (Normal)",
    },
    {
      name: "Body Text",
      class: "text-base font-normal",
      usage: "Main content, descriptions",
      example:
        "This is the standard body text used throughout the application for main content and descriptions.",
      size: "16px",
      weight: "400 (Normal)",
    },
    {
      name: "Small Text",
      class: "text-sm font-normal",
      usage: "Helper text, metadata",
      example: "Additional information and helper text",
      size: "14px",
      weight: "400 (Normal)",
    },
    {
      name: "Extra Small Text",
      class: "text-xs font-normal",
      usage: "Labels, captions, fine print",
      example: "Category tags and timestamps",
      size: "12px",
      weight: "400 (Normal)",
    },
  ];

  const specialStyles = [
    {
      name: "Button Text (Small)",
      class: "text-xs font-medium",
      usage: "Small buttons",
      example: "Click me",
      size: "12px",
      weight: "500 (Medium)",
    },
    {
      name: "Button Text (Medium)",
      class: "text-sm font-medium",
      usage: "Default buttons",
      example: "Browse Components",
      size: "14px",
      weight: "500 (Medium)",
    },
    {
      name: "Button Text (Large)",
      class: "text-base font-medium",
      usage: "Large buttons",
      example: "Get Started",
      size: "16px",
      weight: "500 (Medium)",
    },
    {
      name: "Code Text",
      class: "text-xs font-mono",
      usage: "Code snippets, technical text",
      example: 'className="text-neutral-600"',
      size: "12px",
      weight: "400 (Monospace)",
    },
  ];

  const colorVariations = [
    {
      name: "Primary Text",
      class: "text-neutral-800 dark:text-neutral-100",
      usage: "Main headings and important content",
      contrast: "High contrast",
    },
    {
      name: "Secondary Text",
      class: "text-neutral-700 dark:text-neutral-200",
      usage: "Section headings and subheadings",
      contrast: "Medium-high contrast",
    },
    {
      name: "Body Text",
      class: "text-neutral-600 dark:text-neutral-400",
      usage: "Main content and descriptions",
      contrast: "Medium contrast",
    },
    {
      name: "Muted Text",
      class: "text-neutral-500 dark:text-neutral-500",
      usage: "Helper text and metadata",
      contrast: "Lower contrast",
    },
    {
      name: "Subtle Text",
      class: "text-neutral-400 dark:text-neutral-500",
      usage: "Timestamps, labels",
      contrast: "Low contrast",
    },
  ];

  const fontProperties = {
    family: "Nunito, sans-serif",
    fallback: "system-ui, -apple-system, sans-serif",
    lineHeight: {
      tight: "1.25",
      normal: "1.5",
      relaxed: "1.625",
    },
    letterSpacing: {
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
    },
  };

  const toasterTypography = {
    fontFamily: "Nunito, sans-serif",
    fontSize: "0.97rem", // ~15.5px
    fontWeight: "400",
    borderRadius: "0.75rem",
    padding: "0.75rem 1.25rem",
  };

  const TypographyCard = ({ style, type }: { style: any; type: string }) => (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50 cursor-pointer"
      onClick={() => copyToClipboard(style.class)}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
            {style.name}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {style.usage}
          </p>
        </div>
        <div className="text-right text-xs text-neutral-500">
          <div>{style.size}</div>
          <div>{style.weight}</div>
        </div>
      </div>

      <div
        className={`${style.class} text-neutral-800 dark:text-neutral-100 mb-4`}
      >
        {style.example}
      </div>

      <div className="flex items-center justify-between">
        <code className="text-xs bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded font-mono">
          {style.class}
        </code>
        {copiedText === style.class && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xs text-green-600 dark:text-green-400 font-medium"
          >
            Copied!
          </motion.span>
        )}
      </div>
    </motion.div>
  );

  const ColorVariationCard = ({ color }: { color: any }) => (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50 cursor-pointer"
      onClick={() => copyToClipboard(color.class)}
    >
      <div className={`text-lg font-medium ${color.class} mb-2`}>
        {color.name}
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
        {color.usage}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-neutral-500">{color.contrast}</span>
        <code className="text-xs bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded font-mono">
          {color.class}
        </code>
      </div>
      {copiedText === color.class && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-xs text-green-600 dark:text-green-400 font-medium mt-2"
        >
          Copied!
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
            Typography
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            A comprehensive typography system for the Poyraz UI kit, built with
            Nunito font family. Designed for readability, hierarchy, and
            consistent visual communication.
          </p>
        </motion.div>

        {/* Font Properties */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Font Properties
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Core font family and properties used throughout the design system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
                Font Family
              </h3>
              <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div>
                  <strong>Primary:</strong> {fontProperties.family}
                </div>
                <div>
                  <strong>Fallback:</strong> {fontProperties.fallback}
                </div>
              </div>
            </div>
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
                Line Height & Spacing
              </h3>
              <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div>
                  <strong>Tight:</strong> {fontProperties.lineHeight.tight}
                </div>
                <div>
                  <strong>Normal:</strong> {fontProperties.lineHeight.normal}
                </div>
                <div>
                  <strong>Relaxed:</strong> {fontProperties.lineHeight.relaxed}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Heading Styles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Heading Styles
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Hierarchy of heading styles for titles and section headings.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {headingStyles.map((style) => (
              <TypographyCard key={style.name} style={style} type="heading" />
            ))}
          </div>
        </motion.section>

        {/* Body Text Styles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Body Text Styles
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Text styles for content, descriptions, and general body text.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {bodyStyles.map((style) => (
              <TypographyCard key={style.name} style={style} type="body" />
            ))}
          </div>
        </motion.section>

        {/* Special Text Styles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Special Text Styles
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Specialized text styles for buttons, code, and interactive elements.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {specialStyles.map((style) => (
              <TypographyCard key={style.name} style={style} type="special" />
            ))}
          </div>
        </motion.section>

        {/* Color Variations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Text Color Variations
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Color variations for different text contexts and hierarchy levels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {colorVariations.map((color) => (
              <ColorVariationCard key={color.name} color={color} />
            ))}
          </div>
        </motion.section>

        {/* Toast Typography */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Toast Notification Typography
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Typography specifications for toast notifications and feedback
            messages.
          </p>
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
                  Properties
                </h3>
                <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <div>
                    <strong>Font Family:</strong> {toasterTypography.fontFamily}
                  </div>
                  <div>
                    <strong>Font Size:</strong> {toasterTypography.fontSize}
                  </div>
                  <div>
                    <strong>Font Weight:</strong> {toasterTypography.fontWeight}
                  </div>
                  <div>
                    <strong>Border Radius:</strong>{" "}
                    {toasterTypography.borderRadius}
                  </div>
                  <div>
                    <strong>Padding:</strong> {toasterTypography.padding}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
                  Example
                </h3>
                <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg border">
                  <div
                    style={{
                      fontFamily: toasterTypography.fontFamily,
                      fontSize: toasterTypography.fontSize,
                      fontWeight: toasterTypography.fontWeight,
                    }}
                    className="text-neutral-800 dark:text-neutral-100"
                  >
                    This is a toast notification message
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Typography Best Practices */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
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
                Maintain Hierarchy
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Use consistent heading levels to create clear information
                hierarchy
              </p>
            </div>

            <div className="flex flex-col items-start text-left p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  icon="hugeicons:colors"
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
                />
              </div>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Ensure Readability
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Maintain proper contrast ratios for accessibility compliance
              </p>
            </div>

            <div className="flex flex-col items-start text-left p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  icon="hugeicons:spaceship"
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
                />
              </div>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Consistent Spacing
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Use consistent line heights and spacing for better reading
                experience
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Typography;
