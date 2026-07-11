#!/usr/bin/env node

import { writeFile } from "node:fs/promises";

const [url, output, widthArg = "1440", heightArg = "1100", theme = "light"] =
  process.argv.slice(2);

if (!url || !output) {
  throw new Error(
    "Usage: node scripts/capture-cdp-baseline.mjs <url> <output> [width] [height] [theme]",
  );
}

const width = Number(widthArg);
const height = Number(heightArg);
const endpoint = process.env.CDP_ENDPOINT ?? "http://127.0.0.1:9223";
const target = await fetch(`${endpoint}/json/new?${encodeURIComponent("about:blank")}`, {
  method: "PUT",
}).then((response) => response.json());

const socket = new WebSocket(target.webSocketDebuggerUrl);
const pending = new Map();
const eventWaiters = new Map();
let sequence = 0;

socket.addEventListener("message", ({ data }) => {
  const message = JSON.parse(data);
  if (message.id) {
    const resolver = pending.get(message.id);
    if (resolver) {
      pending.delete(message.id);
      if (message.error) resolver.reject(new Error(message.error.message));
      else resolver.resolve(message.result);
    }
    return;
  }

  const waiters = eventWaiters.get(message.method) ?? [];
  eventWaiters.delete(message.method);
  waiters.forEach((resolve) => resolve(message.params));
});

await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

function send(method, params = {}) {
  const id = ++sequence;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

function waitFor(method) {
  return new Promise((resolve) => {
    const waiters = eventWaiters.get(method) ?? [];
    waiters.push(resolve);
    eventWaiters.set(method, waiters);
  });
}

await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width,
  height,
  deviceScaleFactor: 1,
  mobile: width < 768,
});
await send("Emulation.setEmulatedMedia", {
  features: [{ name: "prefers-color-scheme", value: theme }],
});

let loaded = waitFor("Page.loadEventFired");
await send("Page.navigate", { url });
await loaded;

await send("Runtime.evaluate", {
  expression: `localStorage.setItem("theme", ${JSON.stringify(theme)})`,
});

loaded = waitFor("Page.loadEventFired");
await send("Page.reload", { ignoreCache: true });
await loaded;

await new Promise((resolve) => setTimeout(resolve, 500));
const { data } = await send("Page.captureScreenshot", {
  format: "png",
  captureBeyondViewport: false,
});

await writeFile(output, Buffer.from(data, "base64"));
await send("Page.close");
socket.close();

