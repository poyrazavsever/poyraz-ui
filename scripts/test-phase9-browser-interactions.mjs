#!/usr/bin/env node

const endpoint = process.env.CDP_ENDPOINT ?? "http://127.0.0.1:9223";
const baseUrl = process.env.DOCS_URL ?? "http://127.0.0.1:3000";
const target = await fetch(`${endpoint}/json/new?${encodeURIComponent(`${baseUrl}/docs/motion`)}`, {
  method: "PUT",
}).then((response) => response.json());
const socket = new WebSocket(target.webSocketDebuggerUrl);
const pending = new Map();
let sequence = 0;

await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});
socket.addEventListener("message", ({ data }) => {
  const message = JSON.parse(data);
  const request = pending.get(message.id);
  if (!request) return;
  pending.delete(message.id);
  if (message.error) request.reject(new Error(message.error.message));
  else request.resolve(message.result);
});
function send(method, params = {}) {
  const id = ++sequence;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}
async function evaluate(expression) {
  const result = await send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  return result.result.value;
}

await send("Page.enable");
await send("Runtime.enable");
await new Promise((resolve) => setTimeout(resolve, 900));
const normal = await evaluate(
  `(() => { const el = document.querySelector('[data-motion-sample="fade"]'); const style = getComputedStyle(el); return { name: style.animationName, duration: style.animationDuration, visible: style.display !== 'none' && style.visibility !== 'hidden' }; })()`,
);
await send("Emulation.setEmulatedMedia", {
  features: [{ name: "prefers-reduced-motion", value: "reduce" }],
});
await evaluate(`document.querySelector('[data-motion-replay]')?.click()`);
await new Promise((resolve) => setTimeout(resolve, 50));
const reduced = await evaluate(
  `(() => { const el = document.querySelector('[data-motion-sample="fade"]'); const style = getComputedStyle(el); return { duration: style.animationDuration, iterations: style.animationIterationCount, visible: style.display !== 'none' && style.visibility !== 'hidden' }; })()`,
);

await send("Emulation.setEmulatedMedia", {
  features: [{ name: "prefers-reduced-motion", value: "no-preference" }],
});
await send("Page.navigate", { url: `${baseUrl}/docs/molecules/accordion` });
await new Promise((resolve) => setTimeout(resolve, 900));
const accordionExit = await evaluate(`(async () => {
  const trigger = [...document.querySelectorAll('button')].find((button) => button.textContent?.includes('Is it accessible?'));
  if (!trigger) return { found: false };
  trigger.click();
  await new Promise((resolve) => setTimeout(resolve, 300));
  trigger.click();
  await new Promise((resolve) => requestAnimationFrame(() => resolve()));
  const content = trigger.parentElement?.nextElementSibling;
  const style = content ? getComputedStyle(content) : null;
  return { found: Boolean(content), state: content?.getAttribute('data-state'), animationName: style?.animationName };
})()`);

const failures = [];
if (!normal.visible || normal.name === "none") failures.push("normal motion sample is missing");
if (!reduced.visible) failures.push("reduced motion hides essential state");
if (!reduced.duration.includes("0.001s") || reduced.iterations !== "1")
  failures.push(`reduced motion guard failed: ${JSON.stringify(reduced)}`);
if (
  !accordionExit.found ||
  accordionExit.state !== "closed" ||
  !accordionExit.animationName?.includes("poyraz-accordion-up")
)
  failures.push(`accordion exit presence failed: ${JSON.stringify(accordionExit)}`);
await send("Page.close");
socket.close();
if (failures.length) {
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log("Phase 9 browser reduced-motion and exit-presence checks passed.");
