import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  image: string;
  slug: string;
  title: string;
  desc: string;
}

const ProjectCard = ({ image, slug, title, desc }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={`/projects/${slug}`}
      className="flex flex-row items-center w-full sm:max-w-md min-h-[96px] group border border-neutral-200 dark:border-neutral-800 bg-neutral-50/20 dark:bg-neutral-900/20 rounded-lg overflow-hidden transition-shadow relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover'da arkadan geçen beyaz efekt */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ x: "-100%" }}
        animate={isHovered ? { x: "100%" } : { x: "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ background: "rgba(255,255,255,0.05)" }}
      />
      <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
        <img
          src={image}
          alt={title || "Project image"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform cursor-pointer"
        />
      </div>
      <div className="flex flex-col justify-center px-4 py-2 text-left w-full relative z-10">
        <div className="font-semibold text-neutral-800 dark:text-neutral-100 text-base mb-1">
          {title || slug}
        </div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
          {desc || "No description."}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
