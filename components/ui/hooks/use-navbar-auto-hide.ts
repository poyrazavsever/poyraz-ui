"use client";

import * as React from "react";

export interface UseNavbarAutoHideOptions {
  enabled?: boolean;
  threshold?: number;
}

function useNavbarAutoHide({ enabled = true, threshold = 80 }: UseNavbarAutoHideOptions = {}) {
  const [hidden, setHidden] = React.useState(false);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    if (!enabled) {
      setHidden(false);
      return;
    }

    function handleScroll() {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY.current && currentY > threshold);
      lastScrollY.current = currentY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enabled, threshold]);

  return hidden;
}

export { useNavbarAutoHide };
