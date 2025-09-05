"use client";
import React from "react";
import BlogCard from "./BlogCard";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const blogCards = [
  {
    cardImage: "/examples/readmemaker.png",
    title: "Modern Web Development",
    content:
      "Exploring the latest trends and technologies in modern web development, including React, TypeScript, and Next.js frameworks.",
    date: "05/09/2025",
    category: "Development",
    slug: "#",
  },
  {
    cardImage: "/examples/pixelsinav.png",
    title: "Design Systems Guide",
    content:
      "A comprehensive guide to building scalable design systems with consistent UI components and patterns.",
    date: "04/09/2025",
    category: "Design",
    slug: "#",
  },
  {
    cardImage: "/examples/deprembilinci.png",
    title: "Performance Optimization",
    content:
      "Tips and techniques for optimizing web application performance, from bundle size to runtime efficiency.",
    date: "03/09/2025",
    category: "Performance",
    slug: "#",
  },
];

const projectCards = [
  {
    image: "/examples/arcforeign.png",
    title: "Arc Foreign Language",
    desc: "A modern language learning platform with interactive lessons and progress tracking.",
    slug: "#",
  },
  {
    image: "/examples/athenasifa.png",
    title: "Athena Sifa Platform",
    desc: "Healthcare management system with patient records and appointment scheduling.",
    slug: "#",
  },
  {
    image: "/examples/ertech.png",
    title: "ErTech Solutions",
    desc: "Technology consulting website with service portfolio and team showcase.",
    slug: "#",
  },
  {
    image: "/examples/esanayim.png",
    title: "E-Sanayim Platform",
    desc: "Industrial e-commerce platform connecting manufacturers with suppliers.",
    slug: "#",
  },
  {
    image: "/examples/marslar.png",
    title: "Marslar Project",
    desc: "Space exploration educational platform with interactive simulations.",
    slug: "#",
  },
  {
    image: "/examples/patitekno.png",
    title: "Pati Tekno",
    desc: "Pet technology solutions with IoT devices and mobile applications.",
    slug: "#",
  },
  {
    image: "/examples/restorant.png",
    title: "Restaurant Management",
    desc: "Complete restaurant management system with ordering and inventory tracking.",
    slug: "#",
  },
];

const CardShowcase = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-start items-start mt-24 sm:mt-10 px-6 sm:px-24 gap-12"
    >
      <div className="flex flex-col items-start text-left gap-8 max-w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
            Card Components
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            Beautiful, reusable card components for blogs, projects, and content
            display. Designed with accessibility and responsiveness in mind.
          </p>
        </motion.div>

        {/* Blog Cards Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 w-full"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Blog Cards
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Perfect for blog posts, articles, and content listings with
              category tags and dates.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {blogCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <BlogCard {...card} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Project Cards Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 w-full"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Project Cards
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Showcase your projects, portfolios, and work samples with clean,
              minimal design.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {projectCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <ProjectCard {...card} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-12 border-t border-neutral-200 dark:border-neutral-800 w-full"
        >
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">
            Component Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-start text-left p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  icon="hugeicons:mobile-programming-01"
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
                />
              </div>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Responsive Design
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Adapts perfectly to any screen size with mobile-first approach
              </p>
            </div>

            <div className="flex flex-col items-start text-left p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  icon="hugeicons:mobile-programming-01"
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
                />
              </div>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Smooth Animations
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Elegant hover effects and transitions powered by Framer Motion
              </p>
            </div>

            <div className="flex flex-col items-start text-left p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  icon="hugeicons:moon-01"
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
                />
              </div>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Dark Mode Ready
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Seamless dark and light mode support with proper contrast
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default CardShowcase;
