"use client";

import * as React from "react";

export interface UsePersistentAnnouncementOptions {
  storage?: Pick<Storage, "getItem" | "setItem">;
  defaultOpen?: boolean;
}

function usePersistentAnnouncement(
  id: string,
  { storage, defaultOpen = true }: UsePersistentAnnouncementOptions = {},
) {
  const [open, setOpenState] = React.useState(defaultOpen);

  React.useEffect(() => {
    const target = storage ?? window.localStorage;
    setOpenState(target.getItem(id) !== "dismissed");
  }, [id, storage]);

  const setOpen = React.useCallback(
    (nextOpen: boolean) => {
      setOpenState(nextOpen);
      const target = storage ?? window.localStorage;
      target.setItem(id, nextOpen ? "open" : "dismissed");
    },
    [id, storage],
  );

  return [open, setOpen] as const;
}

export { usePersistentAnnouncement };
