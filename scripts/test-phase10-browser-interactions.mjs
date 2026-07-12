#!/usr/bin/env node

const endpoint = process.env.CDP_ENDPOINT ?? "http://127.0.0.1:9223";
const baseUrl = process.env.DOCS_URL ?? "http://127.0.0.1:3000";
const target = await fetch(`${endpoint}/json/new?${encodeURIComponent("about:blank")}`, { method: "PUT" }).then((response) => response.json());
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
  message.error ? request.reject(new Error(message.error.message)) : request.resolve(message.result);
});
function send(method, params = {}) {
  const id = ++sequence;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}
async function evaluate(expression) {
  const result = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}
async function navigate(path, width = 1440, height = 1000) {
  await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 768 });
  await send("Page.navigate", { url: `${baseUrl}${path}` });
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

await send("Page.enable");
await send("Runtime.enable");
await navigate("/docs/atoms/button");
const desktop = await evaluate(`(async () => {
  const sidebar = document.querySelector('[data-slot="sidebar"]');
  const content = document.querySelector('[data-slot="sidebar-content"][data-scroll-mode="fade"]');
  const details = document.querySelector('[data-slot="registry-details"]');
  const sourceTab = [...document.querySelectorAll('[role="tab"]')].find((tab) => tab.textContent?.includes('Source'));
  sourceTab?.click();
  await new Promise((resolve) => setTimeout(resolve, 350));
  const darkButton = document.querySelector('button[aria-label="background: Dark image"]');
  darkButton?.click();
  await new Promise((resolve) => requestAnimationFrame(() => resolve()));
  const demo = document.querySelector('[data-slot="docs-demo"]');
  const before = content?.scrollTop ?? 0;
  if (content) content.scrollTop = 120;
  return {
    sidebarLeft: sidebar?.getBoundingClientRect().left ?? 0,
    fadeMask: content ? getComputedStyle(content).maskImage : 'none',
    scrollbarHidden: content ? getComputedStyle(content).scrollbarWidth === 'none' : false,
    scrollable: Boolean(content && content.scrollHeight > content.clientHeight),
    scrolled: Boolean(content && content.scrollTop > before),
    registryDetails: Boolean(details),
    sourceVisible: Boolean(details?.querySelector('pre code')?.textContent?.includes('Button')),
    installCommand: details?.textContent?.includes('@poyraz/button') ?? false,
    previewDark: demo?.getAttribute('data-preview-background') === 'dark',
    themeModes: document.querySelectorAll('[aria-label="Color theme"] button').length,
    playgroundControls: document.querySelectorAll('select').length,
  };
})()`);

await navigate("/docs/templates/hero");
const block = await evaluate(`(async () => {
  const button = document.querySelector('button[aria-label="Mobile preview"]');
  button?.click();
  await new Promise((resolve) => requestAnimationFrame(() => resolve()));
  return { button: Boolean(button), viewport: document.querySelector('[data-slot="block-preview"] [data-viewport]')?.getAttribute('data-viewport') };
})()`);

await navigate("/docs/atoms/button", 390, 844);
const mobile = await evaluate(`(() => ({
  sidebarHidden: getComputedStyle(document.querySelector('aside')).display === 'none',
  noHorizontalOverflow: document.documentElement.scrollWidth <= window.innerWidth + 1,
  mobileMenu: Boolean(document.querySelector('button[aria-label="Open menu"], button[aria-label="Close menu"]')),
}))()`);

const failures = [];
for (const [key, value] of Object.entries(desktop)) if ((typeof value === "boolean" && !value) || (key === "sidebarLeft" && value < 20) || (key === "fadeMask" && value === "none") || (key === "themeModes" && value !== 3) || (key === "playgroundControls" && value < 5)) failures.push(`desktop ${key}: ${value}`);
if (!block.button || block.viewport !== "mobile") failures.push(`block viewport: ${JSON.stringify(block)}`);
for (const [key, value] of Object.entries(mobile)) if (!value) failures.push(`mobile ${key}: ${value}`);

await send("Page.close");
socket.close();
if (failures.length) { failures.forEach((failure) => console.error(`- ${failure}`)); process.exit(1); }
console.log("Phase 10 browser checks passed (docs shell, fade sidebar, metadata, preview controls and responsive blocks)." );
