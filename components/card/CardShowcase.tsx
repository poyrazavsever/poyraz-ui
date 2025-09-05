import React from "react";
import BlogCard from "./BlogCard";
import ProjectCard from "./ProjectCard";

const blogCards = [
  {
    cardImage: "/logo.png",
    title: "Blog Başlığı",
    content: "Bu bir blog kartı örneğidir.",
    date: "05/09/2025",
    category: "Genel",
    slug: "blog-basligi",
  },
  {
    cardImage: "/logo.png",
    title: "İkinci Blog",
    content: "İkinci blog kartı açıklaması.",
    date: "04/09/2025",
    category: "Teknoloji",
    slug: "ikinci-blog",
  },
];

const projectCards = [
  {
    image: "/logo.png",
    title: "Proje Başlığı",
    desc: "Bu bir proje kartı örneğidir.",
    slug: "proje-basligi",
  },
  {
    image: "/logo.png",
    title: "İkinci Proje",
    desc: "İkinci proje kartı açıklaması.",
    slug: "ikinci-proje",
  },
];

const CardShowcase = () => {
  return (
    <div className="space-y-8 p-8 bg-neutral-100 dark:bg-neutral-900 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Card Showcase</h2>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">BlogCard</h3>
        <div className="space-y-4">
          {blogCards.map((card, idx) => (
            <BlogCard key={card.slug} {...card} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">ProjectCard</h3>
        <div className="space-y-4">
          {projectCards.map((card, idx) => (
            <ProjectCard key={card.slug} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardShowcase;
