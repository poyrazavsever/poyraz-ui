"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon as IconifyIcon } from "@iconify/react";

const IconShowcase = () => {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const copyToClipboard = (iconName: string) => {
    navigator.clipboard.writeText(iconName);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  // Navigation/Menu Icons
  const menuIcons: Record<string, string> = {
    home: "hugeicons:home-01",
    projects: "hugeicons:folder-01",
    about: "hugeicons:user-id-verification",
    contact: "hugeicons:contact-02",
    blog: "hugeicons:block-game",
    gallery: "hugeicons:image-03",
    certificates: "hugeicons:certificate-01",
    designs: "hugeicons:pen-02",
    bookmarks: "hugeicons:all-bookmark",
    stack: "hugeicons:server-stack-03",
    references: "hugeicons:user-group",
    volunteer: "hugeicons:love-korean-finger",
    quick: "hugeicons:text-align-justify-right",
    freelance: "hugeicons:french-fries-02",
    learning: "hugeicons:online-learning-01",
  };

  // Social Media Icons
  const socialIcons = [
    { name: "LinkedIn", icon: "hugeicons:linkedin-01" },
    { name: "GitHub", icon: "hugeicons:github" },
    { name: "Instagram", icon: "hugeicons:instagram" },
    { name: "YouTube", icon: "hugeicons:youtube" },
    { name: "Medium", icon: "hugeicons:medium-square" },
    { name: "Behance", icon: "hugeicons:behance-02" },
    { name: "Buy Me a Coffee", icon: "simple-icons:buymeacoffee" },
  ];

  // UI/Action Icons
  const uiIcons = [
    { name: "Search", icon: "hugeicons:search-01" },
    { name: "Settings", icon: "hugeicons:settings-01" },
    { name: "Download", icon: "hugeicons:download-01" },
    { name: "Upload", icon: "hugeicons:upload-01" },
    { name: "Share", icon: "hugeicons:share-01" },
    { name: "Heart", icon: "hugeicons:favourite" },
    { name: "Star", icon: "hugeicons:star" },
    { name: "Eye", icon: "hugeicons:eye" },
    { name: "Edit", icon: "hugeicons:edit-01" },
    { name: "Delete", icon: "hugeicons:delete-01" },
    { name: "Copy", icon: "hugeicons:copy-01" },
    { name: "Paste", icon: "hugeicons:file-paste" },
    { name: "Rocket", icon: "hugeicons:rocket-01" },
    { name: "Sparkles", icon: "hugeicons:sparkles" },
    { name: "Bell", icon: "hugeicons:notification-01" },
    { name: "Mail", icon: "hugeicons:mail-01" },
  ];

  // Theme Icons
  const themeIcons = [
    { name: "Light Mode", icon: "mdi:weather-sunny" },
    { name: "Dark Mode", icon: "mdi:weather-night" },
    { name: "System", icon: "mdi:monitor" },
  ];

  // Navigation/Arrow Icons
  const navigationIcons = [
    { name: "Arrow Left", icon: "hugeicons:arrow-left-01" },
    { name: "Arrow Right", icon: "hugeicons:arrow-right-01" },
    { name: "Arrow Up", icon: "hugeicons:arrow-up-01" },
    { name: "Arrow Down", icon: "hugeicons:arrow-down-01" },
    { name: "Chevron Left", icon: "hugeicons:arrow-left-double" },
    { name: "Chevron Right", icon: "hugeicons:arrow-right-double" },
    { name: "Chevron Up", icon: "hugeicons:arrow-up-double" },
    { name: "Chevron Down", icon: "hugeicons:arrow-down-double" },
  ];

  const IconCard = ({
    name,
    icon,
    category,
  }: {
    name: string;
    icon: string;
    category: string;
  }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50 cursor-pointer group"
      onClick={() => copyToClipboard(icon)}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-lg group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
          <IconifyIcon
            icon={icon}
            className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
          />
        </div>

        <div>
          <h4 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1">
            {name}
          </h4>
          <code className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded">
            {icon}
          </code>
        </div>

        {copiedIcon === icon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xs text-green-600 dark:text-green-400 font-medium"
          >
            Copied!
          </motion.div>
        )}
      </div>
    </motion.div>
  );

  const IconVariantCard = ({
    name,
    component,
    description,
  }: {
    name: string;
    component: React.ReactNode;
    description: string;
  }) => (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50"
    >
      <div className="flex items-center space-x-4 mb-3">
        <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          {component}
        </div>
        <div>
          <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
            {name}
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        </div>
      </div>
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
            Icons
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            A comprehensive collection of icons used throughout the Poyraz UI
            kit. Built with Iconify and featuring HugeIcons library for
            consistent design.
          </p>
        </motion.div>

        {/* Navigation & Menu Icons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Navigation & Menu Icons
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Icons used for navigation, menu items, and site structure.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Object.entries(menuIcons).map(([name, icon]) => (
              <IconCard
                key={name}
                name={name.charAt(0).toUpperCase() + name.slice(1)}
                icon={icon}
                category="menu"
              />
            ))}
          </div>
        </motion.section>

        {/* Social Media Icons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Social Media Icons
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Brand icons for social media platforms and external links.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {socialIcons.map(({ name, icon }) => (
              <IconCard key={name} name={name} icon={icon} category="social" />
            ))}
          </div>
        </motion.section>

        {/* UI & Action Icons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            UI & Action Icons
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Common interface icons for buttons, actions, and interactive
            elements.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {uiIcons.map(({ name, icon }) => (
              <IconCard key={name} name={name} icon={icon} category="ui" />
            ))}
          </div>
        </motion.section>

        {/* Navigation & Arrows */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Navigation & Arrows
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Directional icons for navigation, pagination, and user flow.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {navigationIcons.map(({ name, icon }) => (
              <IconCard
                key={name}
                name={name}
                icon={icon}
                category="navigation"
              />
            ))}
          </div>
        </motion.section>

        {/* Theme Icons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Theme Icons
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Icons used for theme switching and display preferences.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {themeIcons.map(({ name, icon }) => (
              <IconCard key={name} name={name} icon={icon} category="theme" />
            ))}
          </div>
        </motion.section>

        {/* Usage Examples */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="pt-12 border-t border-neutral-200 dark:border-neutral-800 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">
            Usage Examples
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
                Basic Usage
              </h3>
              <div className="space-y-3">
                <code className="block text-sm bg-neutral-200 dark:bg-neutral-700 p-3 rounded font-mono">
                  {`<Icon name="heart" size={24} />`}
                </code>
                <code className="block text-sm bg-neutral-200 dark:bg-neutral-700 p-3 rounded font-mono">
                  {`<SolidIcon name="star" size={20} />`}
                </code>
              </div>
            </div>

            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
                With Styling
              </h3>
              <div className="space-y-3">
                <code className="block text-sm bg-neutral-200 dark:bg-neutral-700 p-3 rounded font-mono">
                  {`<Icon name="home-01" 
      color="#ef4444" 
      className="hover:scale-110" />`}
                </code>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default IconShowcase;
