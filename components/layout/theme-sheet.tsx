"use client";

import { AnimatePresence, motion } from "framer-motion";
import ThemeSwitcher from "../theme/theme-switcher";

type ThemeSheetProps = {
  open: boolean;
  onClose: () => void;
  sheetRef?: React.MutableRefObject<HTMLDivElement | null>;
};

const ThemeSheet = ({ open, onClose, sheetRef }: ThemeSheetProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex items-end justify-end bg-black/10 p-4 backdrop-blur-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={sheetRef}
            className="relative w-full max-w-2xl rounded-[28px] border border-(--color-border) bg-(--color-background) px-8 py-10 text-(--color-text) shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <ThemeSwitcher />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThemeSheet;
