#!/usr/bin/env node

const endpoint = process.env.CDP_ENDPOINT ?? "http://127.0.0.1:9223";
const baseUrl = process.env.DOCS_URL ?? "http://127.0.0.1:3000";
const target = await fetch(`${endpoint}/json/new?${encodeURIComponent("about:blank")}`, {
  method: "PUT",
}).then((response) => response.json());
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
    message.error
      ? request.reject(new Error(message.error.message))
      : request.resolve(message.result);
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

async function navigate(path) {
  const loaded = waitFor("Page.loadEventFired");
  await send("Page.navigate", { url: `${baseUrl}${path}` });
  await loaded;
  await new Promise((resolve) => setTimeout(resolve, 700));
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

await send("Page.enable");
await send("Runtime.enable");
await send("Network.enable");
await send("Network.setCacheDisabled", { cacheDisabled: true });
await send("Emulation.setDeviceMetricsOverride", {
  width: 1440,
  height: 1100,
  deviceScaleFactor: 1,
  mobile: false,
});

await navigate("/docs/organisms/navbar");
const navbar = await evaluate(`(async () => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const dropdown = [...document.querySelectorAll('button')].find((button) => button.textContent?.trim() === 'Products' && button.hasAttribute('data-state'));
  if (!dropdown) return { error: 'Dropdown trigger not found' };
  dropdown.scrollIntoView({ block: 'center' });
  dropdown.click();
  await wait(250);
  const viewport = dropdown.closest('[data-slot="navbar"]')?.querySelector('[class*="origin-top"]');
  const demo = dropdown.closest('[data-slot="docs-demo"]');
  const drill = document.querySelector('[data-slot="navbar-mobile-drill-trigger"]');
  drill?.scrollIntoView({ block: 'center' });
  drill?.click();
  await wait(250);
  const drillRoot = drill?.closest('[data-slot="navbar-mobile-drill-menu"]');
  const openPanel = drillRoot?.querySelector('[data-slot="navbar-mobile-drill-panel"][data-state="open"]');
  const panelRect = openPanel?.getBoundingClientRect();
  const rootRect = drillRoot?.getBoundingClientRect();
  const drillOpened = Boolean(openPanel && openPanel.getAttribute('data-state') === 'open');
  drillRoot?.querySelector('[data-slot="navbar-mobile-drill-back"]')?.click();
  await wait(250);
  return {
    dropdownOpen: dropdown.getAttribute('data-state') === 'open',
    dropdownHeight: viewport?.getBoundingClientRect().height ?? 0,
    demoOverflow: demo ? getComputedStyle(demo).overflow : null,
    drillOpened,
    drillInBounds: Boolean(panelRect && rootRect && panelRect.left >= rootRect.left - 1 && panelRect.right <= rootRect.right + 1),
    drillReturned: !drillRoot?.getAttribute('data-panel'),
  };
})()`);

await navigate("/docs/organisms/sidebar");
const sidebar = await evaluate(`(() => {
  const bodyFont = getComputedStyle(document.body).fontFamily;
  const buttonFont = getComputedStyle(document.querySelector('[data-slot="button"]')).fontFamily;
  const sidebarFont = getComputedStyle(document.querySelector('[data-slot="sidebar"]')).fontFamily;
  const badgeSlot = [...document.querySelectorAll('[data-slot="sidebar-menu-badge"]')].find((slot) => slot.querySelector('[data-slot="sidebar-badge"]'));
  const badge = badgeSlot?.querySelector('[data-slot="sidebar-badge"]');
  const slotStyle = badgeSlot ? getComputedStyle(badgeSlot) : null;
  return {
    bodyFont,
    buttonFont,
    sidebarFont,
    fontLoaded: document.fonts.check('16px "Poyraz Inter"'),
    fontConsistent: bodyFont === buttonFont && bodyFont === sidebarFont,
    badgeFound: Boolean(badge),
    badgeWrapperTransparent: slotStyle?.backgroundColor === 'rgba(0, 0, 0, 0)' && slotStyle?.borderTopWidth === '0px',
  };
})()`);

const failures = [];
if (navbar.error) failures.push(navbar.error);
for (const [key, value] of Object.entries(navbar))
  if (key !== "error" && (value === false || value === 0 || value === "hidden"))
    failures.push(`navbar ${key}: ${value}`);
for (const key of ["fontLoaded", "fontConsistent", "badgeFound", "badgeWrapperTransparent"])
  if (!sidebar[key]) failures.push(`sidebar ${key}: ${sidebar[key]}`);

await send("Page.close");
socket.close();

if (failures.length) {
  console.error("Phase 8 browser interaction check failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  console.error({ navbar, sidebar });
  process.exit(1);
}

console.log("Phase 8 browser interactions passed.");
console.log({ navbar, sidebar });
