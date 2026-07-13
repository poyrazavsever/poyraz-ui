#!/usr/bin/env node

import { parseArguments, readJson } from "./release-lib.mjs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function fetchJson(url) {
  const response = await fetch(url, { redirect: "follow" });
  if (!response.ok) throw new Error(`${url} returned HTTP ${response.status}.`);
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("json")) throw new Error(`${url} did not return JSON.`);
  return response.json();
}

export async function smokeRegistry({ baseUrl, minimumItems, smokeItems }) {
  const normalizedBase = baseUrl.replace(/\/$/, "");
  const registry = await fetchJson(`${normalizedBase}/registry.json`);
  if (!Array.isArray(registry.items) || registry.items.length < minimumItems) {
    throw new Error(`Registry index exposes ${registry.items?.length ?? 0}/${minimumItems} items.`);
  }

  const indexNames = new Set(registry.items.map((item) => item.name));
  for (const name of smokeItems) {
    if (!indexNames.has(name)) throw new Error(`Registry index is missing ${name}.`);
    const item = await fetchJson(`${normalizedBase}/${name}.json`);
    const hasFiles = Array.isArray(item.files) && item.files.length > 0;
    const hasCssVariables = item.cssVars && Object.keys(item.cssVars).length > 0;
    if (item.name !== name || (!hasFiles && !hasCssVariables)) {
      throw new Error(`Registry item ${name} has an invalid generated payload.`);
    }
  }

  return { items: registry.items.length, checked: smokeItems.length };
}

async function run() {
  const args = parseArguments(process.argv.slice(2));
  const config = await readJson("release.config.json");
  const attempts = Number(args.attempts ?? 1);
  const delay = Number(args["delay-ms"] ?? 0);
  const baseUrl = String(args["base-url"] ?? config.registry.baseUrl);
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const result = await smokeRegistry({
        baseUrl,
        minimumItems: config.registry.minimumItems,
        smokeItems: config.registry.smokeItems,
      });
      console.log(
        `Registry release smoke passed (${result.items} items, ${result.checked} payloads checked at ${baseUrl}).`,
      );
      return;
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await sleep(delay);
    }
  }

  throw lastError;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  run().catch((error) => {
    console.error(`Registry release smoke failed: ${error.message}`);
    process.exitCode = 1;
  });
}
