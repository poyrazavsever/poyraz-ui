import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 py-6 mt-16 flex flex-col items-center bg-neutral-100/20 dark:bg-neutral-950/10">
      <span className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
        © {new Date().getFullYear()} Poyraz Avsever - UI Kit. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
