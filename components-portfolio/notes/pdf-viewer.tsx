"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";

type PdfViewerProps = {
  title: string;
  fileUrl: string;
  description?: string;
  tags?: string[];
  date?: string;
};

const PREVIEW_RESOLUTION = 1600;

export default function PdfViewer({ title, fileUrl, description, tags = [], date }: PdfViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [previewState, setPreviewState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [previewError, setPreviewError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const renderPreview = async () => {
      if (!canvasRef.current) {
        return;
      }
      setPreviewState("loading");
      setPreviewError(null);

      try {
        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
          "pdfjs-dist/build/pdf.worker.min.mjs",
          import.meta.url,
        ).toString();

        const loadingTask = pdfjsLib.getDocument(fileUrl);
        const pdf = await loadingTask.promise;
        if (!isMounted) {
          return;
        }

        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1 });
        const scale = PREVIEW_RESOLUTION / Math.max(viewport.width, viewport.height);
        const scaledViewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) {
          throw new Error("Canvas unavailable");
        }

        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);

        await page
          .render({
            canvasContext: context,
            viewport: scaledViewport,
            canvas,
          })
          .promise;

        if (!isMounted) {
          return;
        }

        setPreviewState("ready");
      } catch (error) {
        if (!isMounted) {
          return;
        }

        console.error("Failed to render PDF preview:", error);
        setPreviewState("error");
        setPreviewError(error instanceof Error ? error.message : "Preview failed.");
      }
    };

    renderPreview();

    return () => {
      isMounted = false;
    };
  }, [fileUrl]);

  useEffect(() => {
    if (!modalOpen) {
      return;
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalOpen]);

  const handleOpen = () => {
    if (previewState === "error") {
      return;
    }
    setModalOpen(true);
  };

  return (
    <>
      <div className="grid gap-4 text-left lg:grid-cols-[220px_1fr] lg:items-start">
        <div className="relative aspect-square overflow-hidden rounded-md border border-(--color-border)">
          <canvas ref={canvasRef} className="h-full w-full object-cover" aria-hidden />

          {previewState === "loading" && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-(--color-background)/70 text-xs uppercase tracking-[0.3em] text-(--color-muted)">
              <Icon icon="solar:document-bold-duotone" className="mb-2 text-xl" />
              Loading
            </div>
          )}
          {previewState === "error" && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-(--color-background)/70 px-4 text-center text-xs text-red-300">
              <Icon icon="solar:danger-triangle-bold-duotone" className="mb-2 text-xl" />
              {previewError ?? "Preview failed"}
            </div>
          )}

          <button
            type="button"
            className="absolute inset-0 z-10"
            aria-label={`Open ${title}`}
            onClick={handleOpen}
          />

          <a
            href={fileUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute right-3 top-3 z-30 rounded-full bg-(--color-background)/85 p-2 text-(--color-text) transition hover:text-(--color-accent)"
            aria-label={`Download ${title}`}
            onClick={(event) => event.stopPropagation()}
          >
            <Icon icon="solar:download-bold-duotone" className="text-xl" />
          </a>
        </div>

        <div className="space-y-2">
          <p className="text-base font-semibold text-(--color-text)">{title}</p>
          {description && (
            <p className="text-sm text-(--color-muted)">
              {description}
            </p>
          )}
          {(date || tags.length > 0) && (
            <div className="flex flex-wrap gap-2 text-xs text-(--color-muted)">
              {date && (
                <span className="rounded-full border border-(--color-border) px-2 py-0.5 uppercase tracking-[0.3em]">
                  {date}
                </span>
              )}
              {tags.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full border border-(--color-border) px-2 py-0.5">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="relative h-[90vh] w-full max-w-6xl overflow-hidden rounded-xl border border-(--color-border)"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 z-10 rounded-full bg-(--color-background)/80 p-2 text-(--color-text) transition hover:text-(--color-accent)"
                aria-label="Close viewer"
                onClick={() => setModalOpen(false)}
              >
                <Icon icon="solar:close-circle-bold-duotone" className="text-xl" />
              </button>
              <iframe
                src={fileUrl}
                title={title}
                className="h-full w-full border-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
