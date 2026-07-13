import { readFile } from "node:fs/promises";
import { dirname, isAbsolute, relative, resolve, sep } from "node:path";

const REGISTRY_SCHEMA = "https://ui.shadcn.com/schema/registry.json";

export async function readJsonFile(filePath) {
  let source;

  try {
    source = await readFile(filePath, "utf8");
  } catch (error) {
    throw new Error(`Cannot read ${filePath}: ${error.message}`);
  }

  try {
    return JSON.parse(source);
  } catch (error) {
    throw new Error(`Invalid JSON in ${filePath}: ${error.message}`);
  }
}

export function isInsideDirectory(parentDirectory, candidatePath) {
  const child = relative(parentDirectory, candidatePath);
  return child === "" || (!child.startsWith(`..${sep}`) && child !== "..");
}

export async function loadSourceRegistry({
  cwd = process.cwd(),
  registryFile = "registry.json",
} = {}) {
  const rootDirectory = resolve(cwd);
  const rootFile = resolve(rootDirectory, registryFile);
  const definitions = [];
  const activeIncludes = [];
  const visited = new Set();

  async function visit(definitionFile) {
    const absoluteFile = resolve(definitionFile);

    if (!isInsideDirectory(rootDirectory, absoluteFile)) {
      throw new Error(
        `Registry include escapes the repository root: ${relative(rootDirectory, absoluteFile)}`,
      );
    }

    if (activeIncludes.includes(absoluteFile)) {
      const cycle = [...activeIncludes, absoluteFile]
        .map((file) => relative(rootDirectory, file))
        .join(" -> ");
      throw new Error(`Registry include cycle detected: ${cycle}`);
    }

    if (visited.has(absoluteFile)) {
      return;
    }

    const definition = await readJsonFile(absoluteFile);

    if (definition.$schema !== REGISTRY_SCHEMA) {
      throw new Error(`${relative(rootDirectory, absoluteFile)} must use ${REGISTRY_SCHEMA}`);
    }

    definitions.push({
      definition,
      definitionFile: absoluteFile,
      sourceDirectory: dirname(absoluteFile),
    });
    visited.add(absoluteFile);
    activeIncludes.push(absoluteFile);

    for (const include of definition.include ?? []) {
      if (typeof include !== "string" || include.trim() === "") {
        throw new Error(`${relative(rootDirectory, absoluteFile)} contains an invalid include`);
      }

      if (isAbsolute(include) || !include.endsWith("registry.json")) {
        throw new Error(
          `${relative(rootDirectory, absoluteFile)} include must be a relative path to an explicit registry.json: ${include}`,
        );
      }

      await visit(resolve(dirname(absoluteFile), include));
    }

    activeIncludes.pop();
  }

  await visit(rootFile);

  const items = definitions.flatMap(({ definition, definitionFile, sourceDirectory }) =>
    (definition.items ?? []).map((item) => ({
      item,
      definitionFile,
      sourceDirectory,
    })),
  );

  return { definitions, items, rootDirectory, rootFile };
}

export function formatRelative(rootDirectory, absolutePath) {
  return relative(rootDirectory, absolutePath) || ".";
}
