import { readdir, stat } from "node:fs/promises";
import { resolve } from "node:path";

const extensions = new Set([".css", ".js", ".jsx", ".ts", ".tsx"]);
const ignored = new Set([".git", ".next", ".registry", "coverage", "dist", "node_modules"]);

export async function collectSourceFiles(inputs, root = process.cwd()) {
  const files = [];

  async function visit(path) {
    const absolute = resolve(root, path);
    let info;
    try {
      info = await stat(absolute);
    } catch {
      return;
    }
    if (info.isFile()) {
      const extension = absolute.slice(absolute.lastIndexOf("."));
      if (extensions.has(extension)) files.push(absolute);
      return;
    }
    for (const entry of await readdir(absolute, { withFileTypes: true })) {
      if (entry.isDirectory() && ignored.has(entry.name)) continue;
      await visit(resolve(absolute, entry.name));
    }
  }

  for (const input of inputs) await visit(input);
  return [...new Set(files)].sort();
}
