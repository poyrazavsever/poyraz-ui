#!/usr/bin/env node

const endpoint = process.env.CDP_ENDPOINT ?? "http://127.0.0.1:9223";
const baseUrl = process.env.DOCS_URL ?? "http://127.0.0.1:3000";
const target = await fetch(`${endpoint}/json/new?${encodeURIComponent("about:blank")}`, {
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
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}
async function navigate(path, width = 1440, height = 1000) {
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 768,
  });
  await send("Page.navigate", { url: `${baseUrl}${path}` });
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

await send("Page.enable");
await send("Runtime.enable");
await navigate("/docs/atoms/button");
const desktop = await evaluate(`(async () => {
  const sidebar = document.querySelector('[data-slot="sidebar"]');
  const brand = document.querySelector('[data-slot="navbar"] a[href="/"]');
  const content = document.querySelector('[data-slot="sidebar-content"][data-scroll-mode="fade"]');
  const details = document.querySelector('[data-slot="registry-details"]');
  const sourceTab = [...document.querySelectorAll('[role="tab"]')].find((tab) => tab.textContent?.includes('Source'));
  sourceTab?.click();
  for (let index = 0; index < 20 && !details?.querySelector('pre code')?.textContent?.includes('Button'); index += 1) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  const demo = document.querySelector('[data-slot="docs-demo"]');
  const demos = [...document.querySelectorAll('[data-slot="docs-demo"]')];
  const before = content?.scrollTop ?? 0;
  if (content) content.scrollTop = 120;
  return {
    sidebarLeft: sidebar?.getBoundingClientRect().left ?? 0,
    sidebarAligned: Math.abs((sidebar?.getBoundingClientRect().left ?? 0) - (brand?.getBoundingClientRect().left ?? 0)) <= 2,
    fadeMask: content ? getComputedStyle(content).maskImage : 'none',
    scrollbarHidden: content ? getComputedStyle(content).scrollbarWidth === 'none' : false,
    scrollable: Boolean(content && content.scrollHeight > content.clientHeight),
    scrolled: Boolean(content && content.scrollTop > before),
    registryDetails: Boolean(details),
    sourceVisible: [...(details?.querySelectorAll('pre code') ?? [])].some((node) => node.textContent?.includes('Button')),
    installCommand: details?.textContent?.includes('@poyraz/button') ?? false,
    previewGradient: getComputedStyle(demo).backgroundImage.includes('linear-gradient'),
    previewToolbarRemoved: !document.querySelector('[aria-label="Preview surface"]'),
    registryAtBottom: Boolean(details && demos.length && details.getBoundingClientRect().top > demos.at(-1).getBoundingClientRect().top),
    registrySingleRule: !details?.className.includes('border-y'),
    installUsesCodeBlock: Boolean(details?.querySelector('pre code')?.textContent?.includes('pnpm dlx')),
    themeModes: document.querySelectorAll('[aria-label="Color theme"] button').length,
    playgroundSelects: document.querySelectorAll('[role="combobox"]').length,
    playgroundCheckboxes: document.querySelectorAll('[data-slot="checkbox"]').length,
  };
})()`);

await navigate("/docs/molecules/dropdown-menu");
const dropdown = await evaluate(`(async () => {
  const button = [...document.querySelectorAll('button')].find((node) => node.textContent?.trim() === 'Menu with Sub');
  button?.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, button: 0, pointerType: 'mouse' }));
  button?.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, button: 0, pointerType: 'mouse' }));
  await new Promise((resolve) => setTimeout(resolve, 100));
  const share = [...document.querySelectorAll('[role="menuitem"]')].find((node) => node.textContent?.trim() === 'Share');
  share?.dispatchEvent(new PointerEvent('pointermove', { bubbles: true, pointerType: 'mouse' }));
  share?.focus();
  share?.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'ArrowRight', code: 'ArrowRight' }));
  await new Promise((resolve) => setTimeout(resolve, 180));
  const email = [...document.querySelectorAll('[role="menuitem"]')].find((node) => node.textContent?.trim() === 'Email');
  const shortcuts = [...document.querySelectorAll('[role="menuitem"] span')].filter((node) => /[⌘⇧]/.test(node.textContent ?? ''));
  return {
    trigger: Boolean(button),
    subTriggerOpen: share?.getAttribute('data-state') === 'open',
    subItemVisible: Boolean(email && getComputedStyle(email).visibility !== 'hidden'),
    shortcutsSingleLine: shortcuts.every((node) => node.getClientRects().length === 1 && getComputedStyle(node).whiteSpace === 'nowrap'),
  };
})()`);

await navigate("/docs/molecules/tabs");
const tabs = await evaluate(`(async () => {
  const list = document.querySelector('[role="tablist"]');
  const target = [...document.querySelectorAll('[role="tab"]')].find((node) => node.textContent?.trim() === 'Password');
  const samples = [];
  target?.click();
  for (let index = 0; index < 18; index += 1) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
    samples.push({ height: list?.scrollHeight ?? 0, client: list?.clientHeight ?? 0 });
  }
  return {
    target: Boolean(target),
    noVerticalScrollFlash: samples.every(({ height, client }) => height <= client),
    scrollbarHidden: list ? getComputedStyle(list).scrollbarWidth === 'none' : false,
  };
})()`);

await navigate("/docs/molecules/accordion");
const accordion = await evaluate(`(async () => {
  const trigger = document.querySelector('[data-slot="docs-demo"] button');
  const before = trigger?.getBoundingClientRect().left ?? 0;
  trigger?.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
  await new Promise((resolve) => setTimeout(resolve, 180));
  return { stableHoverPosition: Math.abs((trigger?.getBoundingClientRect().left ?? 0) - before) < 0.1 };
})()`);

await navigate("/docs/atoms/typography");
const typography = await evaluate(`(async () => {
  const outline = document.querySelector('[data-effect="outline"]');
  const shimmer = document.querySelector('[data-effect="shimmer"]');
  const before = outline ? getComputedStyle(outline).color : '';
  outline?.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
  await new Promise((resolve) => setTimeout(resolve, 220));
  return {
    outlineStable: Boolean(outline && getComputedStyle(outline).color === before),
    shimmerTiming: shimmer ? getComputedStyle(shimmer).animationDuration === '2.8s' : false,
  };
})()`);

await navigate("/docs/organisms/announcement-bar");
const announcement = await evaluate(`(async () => {
  const close = document.querySelector('[data-slot="announcement-bar-close"]');
  const bar = close?.closest('[data-slot="announcement-bar"]');
  close?.click();
  await new Promise((resolve) => requestAnimationFrame(resolve));
  const closedState = bar?.getAttribute('data-state') === 'closed';
  const exitStyle = bar ? getComputedStyle(bar) : null;
  const opacityOnly = Boolean(
    exitStyle &&
    exitStyle.transform === 'none' &&
    exitStyle.animationName === 'poyraz-fade-out' &&
    parseFloat(exitStyle.animationDuration) > 0
  );
  await new Promise((resolve) => setTimeout(resolve, 80));
  const presentDuringExit = document.contains(bar);
  const opacityDuringExit = bar ? Number(getComputedStyle(bar).opacity) : 0;
  const hasIntermediateFrame = opacityDuringExit > 0 && opacityDuringExit < 1;
  await new Promise((resolve) => setTimeout(resolve, 260));
  return {
    close: Boolean(close),
    closedState,
    opacityOnly,
    hasIntermediateFrame,
    presentDuringExit,
    removedAfterExit: !document.contains(bar),
  };
})()`);

await navigate("/docs/blocks/auth-card-block");
const block = await evaluate(`(async () => {
  const button = document.querySelector('button[aria-label="Mobile preview"]');
  button?.click();
  await new Promise((resolve) => requestAnimationFrame(() => resolve()));
  return {
    button: Boolean(button),
    viewport: document.querySelector('[data-slot="block-preview"] [data-viewport]')?.getAttribute('data-viewport'),
    liveBlock: Boolean(document.querySelector('[data-slot="auth-card-block"]')),
    registryDetails: Boolean(document.querySelector('[data-slot="registry-details"]')),
  };
})()`);

await navigate("/docs/atoms/button", 390, 844);
const mobile = await evaluate(`(() => ({
  sidebarHidden: getComputedStyle(document.querySelector('aside')).display === 'none',
  noHorizontalOverflow: document.documentElement.scrollWidth <= window.innerWidth + 1,
  mobileMenu: Boolean(document.querySelector('button[aria-label="Open menu"], button[aria-label="Close menu"]')),
}))()`);

const failures = [];
for (const [key, value] of Object.entries(desktop))
  if (
    (typeof value === "boolean" && !value) ||
    (key === "sidebarLeft" && value < 20) ||
    (key === "fadeMask" && value === "none") ||
    (key === "themeModes" && value !== 3) ||
    (key === "playgroundSelects" && value < 5) ||
    (key === "playgroundCheckboxes" && value < 2)
  )
    failures.push(`desktop ${key}: ${value}`);
for (const [group, result] of Object.entries({
  dropdown,
  tabs,
  accordion,
  typography,
  announcement,
}))
  for (const [key, value] of Object.entries(result))
    if (!value) failures.push(`${group} ${key}: ${value}`);
if (!block.button || block.viewport !== "mobile" || !block.liveBlock || !block.registryDetails)
  failures.push(`block detail: ${JSON.stringify(block)}`);
for (const [key, value] of Object.entries(mobile))
  if (!value) failures.push(`mobile ${key}: ${value}`);

await send("Page.close");
socket.close();
if (failures.length) {
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(
  "Phase 10 browser checks passed (docs shell, playground primitives, dropdown, tabs, typography, announcement and responsive blocks).",
);
