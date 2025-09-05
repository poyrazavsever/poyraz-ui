import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  content: string;
  date: string;
  category: string;
  slug: string;
    cardImage: string;
}

  const BlogCard: React.FC<BlogCardProps> = ({ title, content= "", date = "16/11/2006", category, slug, cardImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/blog/${slug}`} className="block">
      <motion.div
        className="relative overflow-hidden border border-neutral-200 max-w-md bg-neutral-50/20 dark:border-neutral-800 dark:bg-neutral-900/20 rounded-xl transition-colors duration-200 cursor-pointer flex flex-row items-center min-h-[96px]"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Hover'da arkadan geçen beyaz efekt */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ x: "-100%" }}
          animate={isHovered ? { x: "100%" } : { x: "-100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ background: "rgba(255,255,255,0.05)" }}
        />
        {/* Sol kare görsel alanı */}
        <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
          <img
            src={cardImage || '/blog/default.png'}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform cursor-pointer rounded"
          />
        </div>
        <div className="flex flex-col justify-center px-4 py-2 text-left w-full relative z-10">
          <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 text-base mb-1 line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-1 mb-2">
            {content}
          </p>
          <div className="flex items-center justify-between text-xs text-neutral-400 dark:text-neutral-500">
            <span>{date}</span>
            <span className="px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium">
              {category}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogCard;