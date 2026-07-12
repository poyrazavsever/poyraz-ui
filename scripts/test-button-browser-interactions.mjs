#!/usr/bin/env node

import { writeFile } from "node:fs/promises";

const endpoint = process.env.CDP_ENDPOINT ?? "http://127.0.0.1:9223";
const baseUrl = process.env.DOCS_URL ?? "http://127.0.0.1:3000";
const target = await fetch(`${endpoint}/json/new?${encodeURIComponent("about:blank")}`, { method: "PUT" }).then((response) => response.json());
const socket = new WebSocket(target.webSocketDebuggerUrl);
const pending = new Map();
const waiters = new Map();
let sequence = 0;

socket.addEventListener("message", ({ data }) => {
  const message = JSON.parse(data);
  if (message.id) {
    const request = pending.get(message.id);
    if (!request) return;
    pending.delete(message.id);
    message.error ? request.reject(new Error(message.error.message)) : request.resolve(message.result);
    return;
  }
  const listeners = waiters.get(message.method) ?? [];
  waiters.delete(message.method);
  listeners.forEach((resolve) => resolve(message.params));
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
    const listeners = waiters.get(method) ?? [];
    listeners.push(resolve);
    waiters.set(method, listeners);
  });
}

async function evaluate(expression) {
  const result = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}

async function hoverButton(label) {
  const point = await evaluate(`(() => {
    const button = [...document.querySelectorAll('[data-slot="button"]')].find((item) => item.textContent?.trim() === ${JSON.stringify(label)});
    if (!button) return null;
    button.scrollIntoView({ block: 'center' });
    const rect = button.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  })()`);
  if (!point) throw new Error(`Button not found: ${label}`);
  await send("Input.dispatchMouseEvent", { type: "mouseMoved", ...point });
}

await send("Page.enable");
await send("Runtime.enable");
await send("Network.enable");
await send("Network.setCacheDisabled", { cacheDisabled: true });
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1100, deviceScaleFactor: 1, mobile: false });

const loaded = waitFor("Page.loadEventFired");
await send("Page.navigate", { url: `${baseUrl}/docs/atoms/button` });
await loaded;
await new Promise((resolve) => setTimeout(resolve, 700));

const initial = await evaluate(`(() => {
  const buttons = [...document.querySelectorAll('[data-slot="button"]')];
  const fills = Object.fromEntries(['right', 'left', 'up', 'down'].map((direction) => {
    const button = buttons.find((item) => item.textContent?.trim() === 'Fill ' + direction);
    return [direction, button ? getComputedStyle(button, '::before').transform : null];
  }));
  return {
    buttonCount: buttons.length,
    shadowless: buttons.every((button) => getComputedStyle(button).boxShadow === 'none'),
    fills,
  };
})()`);

const fillProgress = {};
for (const direction of ["right", "left", "up", "down"]) {
  await hoverButton(`Fill ${direction}`);
  await new Promise((resolve) => setTimeout(resolve, 110));
  fillProgress[direction] = await evaluate(`(() => {
    const button = [...document.querySelectorAll('[data-slot="button"]')].find((item) => item.textContent?.trim() === 'Fill ${direction}');
    return getComputedStyle(button, '::before').transform;
  })()`);
  await send("Input.dispatchMouseEvent", { type: "mouseMoved", x: 2, y: 2 });
}

await hoverButton("Swap content");
await new Promise((resolve) => setTimeout(resolve, 80));
const swap = await evaluate(`(() => {
  const button = [...document.querySelectorAll('[data-slot="button"]')].find((item) => item.textContent?.trim() === 'Swap content');
  return {
    contentAnimations: button.querySelector(':scope > [data-slot="button-content"]').getAnimations().length,
    labelAnimations: button.querySelector('[data-slot="button-label"]').getAnimations().length,
    iconAnimations: button.querySelector('[data-slot="button-icon"]').getAnimations().length,
  };
})()`);

await hoverButton("Border draw");
await new Promise((resolve) => setTimeout(resolve, 120));
const border = await evaluate(`(() => {
  const button = [...document.querySelectorAll('[data-slot="button"]')].find((item) => item.textContent?.trim() === 'Border draw');
  const style = getComputedStyle(button, '::after');
  return { progress: style.getPropertyValue('--poyraz-button-border-progress').trim(), background: style.backgroundImage };
})()`);

const glassPoint = await evaluate(`(() => {
  const button = [...document.querySelectorAll('[data-slot="button"]')].filter((item) => item.textContent?.includes('AI Generate'))[0];
  button.scrollIntoView({ block: 'center' });
  const rect = button.getBoundingClientRect();
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
})()`);
const glassInitial = await evaluate(`(() => {
  const button = [...document.querySelectorAll('[data-slot="button"]')].filter((item) => item.textContent?.includes('AI Generate'))[0];
  const style = getComputedStyle(button);
  return { borderColor: style.borderColor, backgroundColor: style.backgroundColor };
})()`);
await send("Input.dispatchMouseEvent", { type: "mouseMoved", ...glassPoint });
await new Promise((resolve) => setTimeout(resolve, 260));
const glass = await evaluate(`(() => {
  const button = [...document.querySelectorAll('[data-slot="button"]')].filter((item) => item.textContent?.includes('AI Generate'))[0];
  const style = getComputedStyle(button);
  const shine = getComputedStyle(button, '::before');
  return { hovered: button.matches(':hover'), borderColor: style.borderColor, backgroundColor: style.backgroundColor, shineBackground: shine.backgroundImage, shineAnimation: shine.animationName };
})()`);

const failures = [];
if (!initial.shadowless) failures.push("one or more buttons still render a box shadow");
if (initial.buttonCount < 20) failures.push(`unexpected button count: ${initial.buttonCount}`);
for (const direction of ["right", "left", "up", "down"]) {
  if (!initial.fills[direction]) failures.push(`missing ${direction} fill`);
  if (fillProgress[direction] === initial.fills[direction]) failures.push(`${direction} fill did not animate`);
}
if (swap.contentAnimations !== 1 || swap.labelAnimations !== 0 || swap.iconAnimations !== 0) failures.push(`swap animation is nested: ${JSON.stringify(swap)}`);
if (!border.background.includes("conic-gradient") || border.progress === "0deg" || border.progress === "360deg") failures.push(`border draw is not interpolating: ${JSON.stringify(border)}`);
if (!glass.hovered || glass.shineAnimation !== "poyraz-button-shine" || glass.borderColor === glassInitial.borderColor || glass.backgroundColor === glassInitial.backgroundColor) failures.push(`light glass hover is not visible: ${JSON.stringify({ glassInitial, glass })}`);

if (process.env.BUTTON_SCREENSHOT) {
  const screenshot = await send("Page.captureScreenshot", { format: "png", fromSurface: true });
  await writeFile(process.env.BUTTON_SCREENSHOT, Buffer.from(screenshot.data, "base64"));
}

await send("Page.close");
socket.close();

if (failures.length) {
  console.error("Button browser interaction check failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  console.error({ initial, fillProgress, swap, border, glassInitial, glass });
  process.exit(1);
}

console.log("Button browser interactions passed.");
console.log({ initial, fillProgress, swap, border, glassInitial, glass });
