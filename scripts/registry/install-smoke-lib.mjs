import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, isAbsolute, relative, resolve, sep } from "node:path";

const LOCAL_PREFIX = "@poyraz/";

function localDependencyName(value) {
  if (value.startsWith(LOCAL_PREFIX)) return value.slice(LOCAL_PREFIX.length);
  if (value.startsWith("./") && value.endsWith(".json")) return value.slice(2, -5);
  try {
    const url = new URL(value);
    return url.pathname.match(/\/r\/([^/]+)\.json$/)?.[1] ?? null;
  } catch {
    return null;
  }
}

function targetPath(target, sourcePath) {
  if (target?.startsWith("@ui/")) return `components/ui/${target.slice(4)}`;
  if (target?.startsWith("@lib/")) return `lib/${target.slice(5)}`;
  if (target?.startsWith("@/")) return target.slice(2);
  return target ?? `registry/${sourcePath.split("/").at(-1)}`;
}

function assertInside(parent, candidate) {
  const child = relative(parent, candidate);
  if (isAbsolute(child) || child === ".." || child.startsWith(`..${sep}`)) {
    throw new Error(`Registry target escapes installation root: ${candidate}`);
  }
}

export function parsePackageSpecifier(specifier) {
  const separator = specifier.lastIndexOf("@");
  if (separator <= 0) return [specifier, "latest"];
  return [specifier.slice(0, separator), specifier.slice(separator + 1) || "latest"];
}

export async function loadGeneratedRegistry(outputDirectory = "public/r") {
  const root = resolve(outputDirectory);
  const files = (await readdir(root)).filter(
    (name) => name.endsWith(".json") && name !== "registry.json",
  );
  const items = new Map();

  for (const file of files) {
    const item = JSON.parse(await readFile(resolve(root, file), "utf8"));
    if (!item.name) throw new Error(`${file} has no registry item name`);
    if (items.has(item.name)) throw new Error(`Duplicate generated item name: ${item.name}`);
    items.set(item.name, item);
  }

  return items;
}

export function resolveInstallOrder(items, roots) {
  const visiting = new Set();
  const visited = new Set();
  const order = [];

  function visit(name, chain = []) {
    if (visited.has(name)) return;
    if (visiting.has(name))
      throw new Error(`Install dependency cycle: ${[...chain, name].join(" -> ")}`);
    const item = items.get(name);
    if (!item) throw new Error(`Missing generated registry dependency: ${name}`);

    visiting.add(name);
    for (const dependency of item.registryDependencies ?? []) {
      const local = localDependencyName(dependency);
      if (local) visit(local, [...chain, name]);
    }
    visiting.delete(name);
    visited.add(name);
    order.push(name);
  }

  roots.forEach((name) => visit(name));
  return order;
}

export async function materializeRegistry({ items, roots, destination, clean = true }) {
  const installRoot = resolve(destination);
  if (clean) await rm(installRoot, { recursive: true, force: true });
  await mkdir(installRoot, { recursive: true });

  const order = resolveInstallOrder(items, roots);
  const written = new Map();
  const dependencies = new Map();

  for (const name of order) {
    const item = items.get(name);
    for (const specifier of item.dependencies ?? []) {
      const [packageName, version] = parsePackageSpecifier(specifier);
      dependencies.set(packageName, version);
    }
    for (const file of item.files ?? []) {
      if (typeof file.content !== "string")
        throw new Error(`${name}: ${file.path} has no generated content`);
      const relativeTarget = targetPath(file.target, file.path);
      const outputFile = resolve(installRoot, relativeTarget);
      assertInside(installRoot, outputFile);

      const previous = written.get(relativeTarget);
      if (previous && previous !== file.content) {
        throw new Error(`${name}: conflicting generated target ${relativeTarget}`);
      }
      await mkdir(dirname(outputFile), { recursive: true });
      await writeFile(outputFile, file.content, "utf8");
      written.set(relativeTarget, file.content);
    }
  }

  return {
    dependencies: Object.fromEntries([...dependencies].sort()),
    order,
    written: [...written.keys()],
  };
}
