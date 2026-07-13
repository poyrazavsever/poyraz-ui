import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";

const config: NextConfig = {
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
};

export default config;
