"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Fuse from "fuse.js";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import type { PageMeta } from "@/lib/mdx";
import type { BlogMeta } from "@/lib/blog";
import type { NoteFile } from "@/lib/notes";
import type { ProjectMeta } from "@/lib/projects";
import { APP_THEMES, useTheme } from "@/app/components/theme-provider";

type SearchModalProps = {
  open: boolean;
  onClose: () => void;
  searchData: {
    pages: PageMeta[];
    blogPosts: BlogMeta[];
    notes: NoteFile[];
    projects: ProjectMeta[];
    socialLinks: { id: string; label: string; href: string }[];
  };
};

type ResultType = "action" | "page" | "project" | "blog" | "note" | "social";

type SearchEntity = {
  id: string;
  title: string;
  description?: string;
  keywords?: string;
  type: ResultType;
  href?: string;
  external?: boolean;
  meta?: string;
  onSelect?: () => Promise<void> | void;
};

const SECTION_ORDER: ResultType[] = ["action", "project", "page", "blog", "note", "social"];


const SECTION_ICONS: Record<ResultType, string> = {
  action: "solar:magic-stick-3-bold-duotone",
  page: "solar:book-bold-duotone",
  project: "solar:case-round-minimalistic-bold-duotone",
  blog: "solar:document-bold-duotone",
  note: "solar:document-text-bold-duotone",
  social: "solar:share-bold-duotone",
};

const SearchModal = ({ open, onClose, searchData }: SearchModalProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { pages, blogPosts, notes, projects, socialLinks } = searchData;
  const { theme, setTheme } = useTheme();

  const normalizedQuery = query.trim();

  useEffect(() => {
    if (!open) {
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Reset input when palette reopens
    setQuery("");

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKey);
    inputRef.current?.focus();
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const quickActions = useMemo<SearchEntity[]>(() => {
    const currentIndex = APP_THEMES.findIndex((item) => item.id === theme);
    const nextTheme = APP_THEMES[(currentIndex + 1) % APP_THEMES.length];

    return [
      {
        id: "action-theme",
        title: "Cycle Theme",
        description: `Next: ${nextTheme.label}`,
        keywords: "theme switch palette color dark light mint",
        type: "action",
        onSelect: () => setTheme(nextTheme.id),
      },
      {
        id: "action-copy-email",
        title: "Copy Email",
        description: "poyrazavsever@gmail.com",
        keywords: "email contact copy",
        type: "action",
        onSelect: async () => {
          try {
            await navigator.clipboard?.writeText("poyrazavsever@gmail.com");
          } catch {
            window.open("mailto:poyrazavsever@gmail.com", "_self");
          }
        },
      },
    ];
  }, [setTheme, theme]);

  const pageItems = useMemo<SearchEntity[]>(
    () =>
      pages.map((page) => ({
        id: `page-${page.slug}`,
        title: page.title,
        description: page.description,
        keywords: [page.title, page.description ?? "", page.tags.join(" ")].join(" "),
        type: "page",
        href: `/${page.slug}`,
      })),
    [pages],
  );

  const projectItems = useMemo<SearchEntity[]>(
    () =>
      projects.map((project) => ({
        id: `project-${project.slug}`,
        title: project.title,
        description: project.description,
        keywords: [project.title, project.description ?? "", project.tags.join(" ")].join(" "),
        type: "project",
        href: `/projects/${project.slug}`,
      })),
    [projects],
  );

  const blogItems = useMemo<SearchEntity[]>(
    () =>
      blogPosts.map((post) => ({
        id: `blog-${post.slug}`,
        title: post.title,
        description: post.description,
        keywords: [post.title, post.description ?? "", (post.tags ?? []).join(" "), post.date ?? ""].join(" "),
        type: "blog",
        href: `/blog/${post.slug}`,
        meta: post.date,
      })),
    [blogPosts],
  );

  const noteItems = useMemo<SearchEntity[]>(
    () =>
      notes.map((note) => ({
        id: `note-${note.slug}`,
        title: note.title,
        description: note.description,
        keywords: [note.title, note.description ?? "", (note.tags ?? []).join(" "), note.date ?? ""].join(" "),
        type: "note",
        href: `/api/notes/${encodeURIComponent(note.slug)}`,
        external: true,
        meta: "PDF",
      })),
    [notes],
  );

  const socialItems = useMemo<SearchEntity[]>(
    () =>
      socialLinks.map((social) => ({
        id: `social-${social.id}`,
        title: social.label,
        description: "Open in new tab",
        keywords: social.label,
        type: "social",
        href: social.href,
        external: true,
      })),
    [socialLinks],
  );

  const searchableItems = useMemo(
    () => [...quickActions, ...projectItems, ...pageItems, ...blogItems, ...noteItems, ...socialItems],
    [blogItems, noteItems, pageItems, projectItems, quickActions, socialItems],
  );

  const fuse = useMemo(
    () =>
      new Fuse(searchableItems, {
        includeScore: true,
        threshold: 0.35,
        keys: [
          { name: "title", weight: 0.6 },
          { name: "description", weight: 0.25 },
          { name: "keywords", weight: 0.15 },
        ],
      }),
    [searchableItems],
  );

  const searchResults = useMemo(
    () => (normalizedQuery ? fuse.search(normalizedQuery).map((result) => result.item) : []),
    [fuse, normalizedQuery],
  );

  const groupedResults = useMemo<Partial<Record<ResultType, SearchEntity[]>>>(() => {
    if (!normalizedQuery) {
      return {};
    }

    return searchResults.reduce<Record<ResultType, SearchEntity[]>>((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type].push(item);
      return acc;
    }, {} as Record<ResultType, SearchEntity[]>);
  }, [normalizedQuery, searchResults]);

  const defaultSections = useMemo(() => {
    const sections: Partial<Record<ResultType, SearchEntity[]>> = {
      action: quickActions,
      project: projectItems.slice(0, 3),
      page: pageItems.slice(0, 4),
      blog: blogItems.slice(0, 3),
      note: noteItems.slice(0, 2),
      social: socialItems.slice(0, 3),
    };
    return sections;
  }, [blogItems, noteItems, pageItems, projectItems, quickActions, socialItems]);

  const handleNavigate = (href: string, options?: { external?: boolean }) => {
    if (options?.external) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    router.push(href);
  };

  const handleResultSelect = async (item: SearchEntity) => {
    if (item.type === "action" && item.onSelect) {
      await item.onSelect();
      onClose();
      return;
    }

    if (item.href) {
      handleNavigate(item.href, { external: item.external });
      onClose();
    }
  };

  const primaryResult = normalizedQuery
    ? searchResults[0]
    : defaultSections.action?.[0] ?? defaultSections.project?.[0] ?? defaultSections.page?.[0];

  const renderResult = (item: SearchEntity) => (
    <button
      key={item.id}
      type="button"
      onClick={() => handleResultSelect(item)}
      className="w-full rounded-2xl border border-(--color-border) bg-(--color-background)/80 px-5 py-4 text-left transition hover:border-(--color-accent) hover:bg-(--color-surface)"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="space-y-1">
          <p className="text-base font-semibold text-(--color-text)">{item.title}</p>
          {item.description && <p className="text-sm text-(--color-muted)">{item.description}</p>}
          {item.meta && (
            <p className="text-[11px] uppercase tracking-[0.3em] text-(--color-muted)">
              {item.meta}
            </p>
          )}
        </div>
        <Icon icon={SECTION_ICONS[item.type]} className="text-xl text-(--color-muted)" />
      </div>
    </button>
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="search-overlay"
          className="fixed inset-0 z-40 flex items-start justify-center bg-black/70 px-3 py-8 backdrop-blur sm:items-center sm:px-4 sm:py-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="flex w-full max-w-3xl flex-col items-center gap-6 rounded-[34px] border border-(--color-border) bg-(--color-background) px-4 py-6 text-center shadow-[0_50px_120px_rgba(0,0,0,0.55)] max-h-[90vh] overflow-y-auto sm:max-w-4xl sm:gap-8 sm:px-10 sm:py-12 sm:max-h-[85vh]"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
          >
            <p className="max-w-2xl text-xs text-(--color-muted) sm:text-sm">
              Search across case studies, blog posts, study notes, and social links. Press <kbd>⌘K</kbd>/<kbd>Ctrl+K</kbd> anywhere to open this palette.
            </p>

            <div className="flex w-full flex-col items-stretch gap-3 rounded-3xl border border-(--color-border) bg-(--color-surface) px-4 py-4 sm:flex-row sm:items-center sm:gap-3 sm:px-6 sm:py-5">
              <Icon icon="solar:magnifer-line-duotone" className="text-2xl text-(--color-muted) sm:text-2xl" />
              <input
                ref={inputRef}
                type="search"
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent text-base text-(--color-text) placeholder:text-(--color-muted) focus:outline-none sm:text-lg"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    if (primaryResult) {
                      void handleResultSelect(primaryResult);
                    }
                  }
                }}
              />
              <span className="hidden rounded-full border border-(--color-border) px-3 py-1 text-xs text-(--color-muted) sm:flex">
                Enter
              </span>
            </div>

            {normalizedQuery ? (
              searchResults.length > 0 ? (
                <div className="w-full space-y-6 text-left">
                  {SECTION_ORDER.map((section) => {
                    const entries = groupedResults[section];
                    if (!entries || entries.length === 0) {
                      return null;
                    }
                    return (
                      <div key={section}>
                        <div className="space-y-2">{entries.map((entry) => renderResult(entry))}</div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="w-full rounded-2xl border border-dashed border-(--color-border) px-5 py-6 text-center text-sm text-(--color-muted)">
                  No results for “{query}”. Try another keyword.
                </p>
              )
            ) : (
              <div className="w-full space-y-6 text-left">
                {SECTION_ORDER.map((section) => {
                  const entries = defaultSections[section];
                  if (!entries || entries.length === 0) {
                    return null;
                  }
                  return (
                    <div key={section}>
                      <div className="space-y-2">{entries.map((entry) => renderResult(entry))}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
