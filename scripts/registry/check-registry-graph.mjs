#!/usr/bin/env node

import { loadSourceRegistry } from "./source-registry.mjs";

const registryFile = process.argv[2] ?? "registry.json";
const namespace = process.env.POYRAZ_REGISTRY_NAMESPACE ?? "poyraz";
const internalHosts = new Set(
  (
    process.env.POYRAZ_REGISTRY_HOSTS ??
    "ui.poyrazavsever.com,localhost,127.0.0.1,[::1]"
  )
    .split(",")
    .map((host) => host.trim())
    .filter(Boolean),
);
const catalog = await loadSourceRegistry({ registryFile });
const itemsByName = new Map();
const failures = [];

for (const entry of catalog.items) {
  const name = entry.item.name;
  const previous = itemsByName.get(name);

  if (previous) {
    failures.push(
      `Duplicate item name "${name}" in ${previous.definitionFile} and ${entry.definitionFile}`,
    );
    continue;
  }

  itemsByName.set(name, entry);
}

function getLocalDependencyName(address) {
  const namespacePrefix = `@${namespace}/`;

  if (address.startsWith(namespacePrefix)) {
    return address.slice(namespacePrefix.length);
  }

  if (address.startsWith("./") && address.endsWith(".json")) {
    return address.slice(2, -5);
  }

  try {
    const url = new URL(address);
    if (!internalHosts.has(url.hostname)) {
      return null;
    }
    const match = url.pathname.match(/\/r\/([^/]+)\.json$/);
    return match?.[1] ?? null;
  } catch {
    const githubPrefix = "poyrazavsever/poyraz-ui/";
    return address.startsWith(githubPrefix)
      ? address.slice(githubPrefix.length).split("#")[0]
      : null;
  }
}

const graph = new Map(
  [...itemsByName].map(([name]) => [name, new Set()]),
);

for (const [name, { item }] of itemsByName) {
  for (const dependency of item.registryDependencies ?? []) {
    const localName = getLocalDependencyName(dependency);

    if (!localName) {
      continue;
    }

    if (!itemsByName.has(localName)) {
      failures.push(
        `${name}: internal registry dependency "${dependency}" does not exist`,
      );
      continue;
    }

    graph.get(name).add(localName);
  }
}

const visiting = new Set();
const visited = new Set();
const stack = [];

function visit(name) {
  if (visited.has(name)) {
    return;
  }

  if (visiting.has(name)) {
    const start = stack.indexOf(name);
    const cycle = [...stack.slice(start), name].join(" -> ");
    failures.push(`Registry dependency cycle detected: ${cycle}`);
    return;
  }

  visiting.add(name);
  stack.push(name);

  for (const dependency of graph.get(name) ?? []) {
    visit(dependency);
  }

  stack.pop();
  visiting.delete(name);
  visited.add(name);
}

for (const name of graph.keys()) {
  visit(name);
}

if (failures.length > 0) {
  console.error("Registry graph validation failed:\n");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

const edgeCount = [...graph.values()].reduce(
  (total, dependencies) => total + dependencies.size,
  0,
);

console.log(
  `Registry graph is valid (${itemsByName.size} unique items, ${edgeCount} internal dependencies, no cycles).`,
);
