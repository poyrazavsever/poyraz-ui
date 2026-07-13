const duration = (name, fallback) => `var(--poyraz-motion-duration-${name}, ${fallback})`;
const easing = (name, fallback) => `var(--poyraz-motion-ease-${name}, ${fallback})`;
const entrance = `${duration("base", "180ms")} ${easing("out", "cubic-bezier(0.16, 1, 0.3, 1)")} both`;
const exit = `${duration("fast", "120ms")} ${easing("in", "cubic-bezier(0.7, 0, 0.84, 0)")} both`;

const utility = (name, animation) => [`@utility ${name}`, { animation }];

export function buildRegistryMotionCss() {
  return Object.fromEntries([
    utility("animate-poyraz-fade-in", `poyraz-fade-in ${entrance}`),
    utility("animate-poyraz-fade-out", `poyraz-fade-out ${exit}`),
    utility("animate-poyraz-scale-in", `poyraz-scale-in ${entrance}`),
    utility("animate-poyraz-scale-out", `poyraz-scale-out ${exit}`),
    utility("animate-poyraz-floating-in", `poyraz-floating-in ${entrance}`),
    utility("animate-poyraz-floating-out", `poyraz-floating-out ${exit}`),
    utility("animate-poyraz-overlay-in", `poyraz-overlay-in ${entrance}`),
    utility("animate-poyraz-overlay-out", `poyraz-overlay-out ${exit}`),
    utility(
      "animate-poyraz-command-in",
      `poyraz-command-in ${duration("slow", "260ms")} ${easing("out", "cubic-bezier(0.16, 1, 0.3, 1)")} both`,
    ),
    utility("animate-poyraz-command-out", `poyraz-command-out ${exit}`),
    utility("animate-poyraz-slide-in-from-top", `poyraz-slide-in-from-top ${entrance}`),
    utility("animate-poyraz-slide-in-from-bottom", `poyraz-slide-in-from-bottom ${entrance}`),
    utility("animate-poyraz-slide-in-from-left", `poyraz-slide-in-from-left ${entrance}`),
    utility("animate-poyraz-slide-in-from-right", `poyraz-slide-in-from-right ${entrance}`),
    utility("animate-poyraz-accordion-down", `poyraz-accordion-down ${entrance}`),
    utility("animate-poyraz-accordion-up", `poyraz-accordion-up ${exit}`),
    utility("animate-poyraz-spin", `poyraz-spin ${duration("spinner", "700ms")} linear infinite`),
    utility(
      "animate-poyraz-pulse",
      `poyraz-pulse ${duration("pulse", "1800ms")} ${easing("standard", "cubic-bezier(0.2, 0, 0, 1)")} infinite`,
    ),

    [
      "@utility animate-in",
      {
        "animation-name": "poyraz-enter",
        "animation-duration": duration("base", "180ms"),
        "animation-timing-function": easing("out", "cubic-bezier(0.16, 1, 0.3, 1)"),
        "animation-fill-mode": "both",
      },
    ],
    [
      "@utility animate-out",
      {
        "animation-name": "poyraz-exit",
        "animation-duration": duration("fast", "120ms"),
        "animation-timing-function": easing("in", "cubic-bezier(0.7, 0, 0.84, 0)"),
        "animation-fill-mode": "both",
      },
    ],
    ["@utility fade-in", { "--poyraz-enter-opacity": "0" }],
    ["@utility fade-in-0", { "--poyraz-enter-opacity": "0" }],
    ["@utility fade-out", { "--poyraz-exit-opacity": "0" }],
    ["@utility fade-out-0", { "--poyraz-exit-opacity": "0" }],
    ["@utility zoom-in-95", { "--poyraz-enter-scale": "0.95" }],
    ["@utility zoom-out-95", { "--poyraz-exit-scale": "0.95" }],
    ...[
      ["slide-in-from-top", "--poyraz-enter-translate-y", "-100%"],
      ["slide-in-from-bottom", "--poyraz-enter-translate-y", "100%"],
      ["slide-in-from-left", "--poyraz-enter-translate-x", "-100%"],
      ["slide-in-from-right", "--poyraz-enter-translate-x", "100%"],
      ["slide-out-to-top", "--poyraz-exit-translate-y", "-100%"],
      ["slide-out-to-bottom", "--poyraz-exit-translate-y", "100%"],
      ["slide-out-to-left", "--poyraz-exit-translate-x", "-100%"],
      ["slide-out-to-right", "--poyraz-exit-translate-x", "100%"],
      ["slide-in-from-top-2", "--poyraz-enter-translate-y", "-0.5rem"],
      ["slide-in-from-bottom-2", "--poyraz-enter-translate-y", "0.5rem"],
      ["slide-in-from-left-2", "--poyraz-enter-translate-x", "-0.5rem"],
      ["slide-in-from-right-2", "--poyraz-enter-translate-x", "0.5rem"],
      ["slide-out-to-top-2", "--poyraz-exit-translate-y", "-0.5rem"],
      ["slide-out-to-bottom-2", "--poyraz-exit-translate-y", "0.5rem"],
      ["slide-out-to-left-2", "--poyraz-exit-translate-x", "-0.5rem"],
      ["slide-out-to-right-2", "--poyraz-exit-translate-x", "0.5rem"],
    ].map(([name, property, value]) => [`@utility ${name}`, { [property]: value }]),

    [
      "@layer utilities",
      {
        '[data-side="top"]': {
          "--poyraz-floating-translate-x": "0",
          "--poyraz-floating-translate-y": "var(--poyraz-motion-distance-floating, 0.5rem)",
        },
        '[data-side="right"]': {
          "--poyraz-floating-translate-x":
            "calc(var(--poyraz-motion-distance-floating, 0.5rem) * -1)",
          "--poyraz-floating-translate-y": "0",
        },
        '[data-side="bottom"]': {
          "--poyraz-floating-translate-x": "0",
          "--poyraz-floating-translate-y":
            "calc(var(--poyraz-motion-distance-floating, 0.5rem) * -1)",
        },
        '[data-side="left"]': {
          "--poyraz-floating-translate-x": "var(--poyraz-motion-distance-floating, 0.5rem)",
          "--poyraz-floating-translate-y": "0",
        },
        ".poyraz-toast-motion": {
          transition: `transform ${duration("base", "180ms")} ${easing("out", "cubic-bezier(0.16, 1, 0.3, 1)")}, opacity ${duration("fast", "120ms")} ${easing("out", "cubic-bezier(0.16, 1, 0.3, 1)")}`,
        },
        '.poyraz-toast-motion[data-swipe-out="true"], .poyraz-toast-motion[data-swiped="true"]': {
          "animation-duration": duration("fast", "120ms"),
          "animation-timing-function": easing("out", "cubic-bezier(0.16, 1, 0.3, 1)"),
          "animation-fill-mode": "forwards",
        },
        '.poyraz-toast-motion[data-swiping="true"]': { transition: "none" },
        ".slide-in-from-left-1\\/2": { "--poyraz-enter-translate-x": "-50%" },
        ".slide-in-from-top-\\[2\\%\\]": { "--poyraz-enter-translate-y": "-2%" },
        ".slide-in-from-top-\\[48\\%\\]": { "--poyraz-enter-translate-y": "-48%" },
        ".slide-in-from-right-52": { "--poyraz-enter-translate-x": "13rem" },
        ".slide-in-from-left-52": { "--poyraz-enter-translate-x": "-13rem" },
        ".slide-out-to-left-1\\/2": { "--poyraz-exit-translate-x": "-50%" },
        ".slide-out-to-top-\\[2\\%\\]": { "--poyraz-exit-translate-y": "-2%" },
        ".slide-out-to-top-\\[5\\%\\]": { "--poyraz-exit-translate-y": "-5%" },
        ".slide-out-to-top-\\[48\\%\\]": { "--poyraz-exit-translate-y": "-48%" },
        ".slide-out-to-right-52": { "--poyraz-exit-translate-x": "13rem" },
        ".slide-out-to-left-52": { "--poyraz-exit-translate-x": "-13rem" },
      },
    ],

    [
      "@keyframes poyraz-enter",
      {
        from: {
          opacity: "var(--poyraz-enter-opacity, 1)",
          transform:
            "translate3d(var(--poyraz-enter-translate-x, 0), var(--poyraz-enter-translate-y, 0), 0) scale3d(var(--poyraz-enter-scale, 1), var(--poyraz-enter-scale, 1), var(--poyraz-enter-scale, 1))",
        },
      },
    ],
    [
      "@keyframes poyraz-exit",
      {
        to: {
          opacity: "var(--poyraz-exit-opacity, 1)",
          transform:
            "translate3d(var(--poyraz-exit-translate-x, 0), var(--poyraz-exit-translate-y, 0), 0) scale3d(var(--poyraz-exit-scale, 1), var(--poyraz-exit-scale, 1), var(--poyraz-exit-scale, 1))",
        },
      },
    ],
    ["@keyframes poyraz-fade-in", { from: { opacity: "0" } }],
    ["@keyframes poyraz-fade-out", { to: { opacity: "0" } }],
    ["@keyframes poyraz-scale-in", { from: { opacity: "0", transform: "scale(0.96)" } }],
    ["@keyframes poyraz-scale-out", { to: { opacity: "0", transform: "scale(0.96)" } }],
    [
      "@keyframes poyraz-floating-in",
      {
        from: {
          opacity: "0",
          transform:
            "translate3d(var(--poyraz-floating-translate-x, 0), var(--poyraz-floating-translate-y, 0), 0) scale(var(--poyraz-motion-scale-enter, 0.98))",
        },
      },
    ],
    [
      "@keyframes poyraz-floating-out",
      {
        to: {
          opacity: "0",
          transform:
            "translate3d(var(--poyraz-floating-translate-x, 0), var(--poyraz-floating-translate-y, 0), 0) scale(var(--poyraz-motion-scale-enter, 0.98))",
        },
      },
    ],
    ["@keyframes poyraz-overlay-in", { from: { opacity: "0" } }],
    ["@keyframes poyraz-overlay-out", { to: { opacity: "0" } }],
    [
      "@keyframes poyraz-command-in",
      {
        from: {
          opacity: "0",
          transform:
            "translate3d(var(--poyraz-command-translate-x, -50%), -0.75rem, 0) scale(0.96)",
        },
        to: {
          opacity: "1",
          transform: "translate3d(var(--poyraz-command-translate-x, -50%), 0, 0) scale(1)",
        },
      },
    ],
    [
      "@keyframes poyraz-command-out",
      {
        from: {
          opacity: "1",
          transform: "translate3d(var(--poyraz-command-translate-x, -50%), 0, 0) scale(1)",
        },
        to: {
          opacity: "0",
          transform: "translate3d(var(--poyraz-command-translate-x, -50%), -0.5rem, 0) scale(0.98)",
        },
      },
    ],
    [
      "@keyframes poyraz-slide-in-from-top",
      { from: { opacity: "0", transform: "translateY(-0.5rem)" } },
    ],
    [
      "@keyframes poyraz-slide-in-from-bottom",
      { from: { opacity: "0", transform: "translateY(0.5rem)" } },
    ],
    [
      "@keyframes poyraz-slide-in-from-left",
      { from: { opacity: "0", transform: "translateX(-0.5rem)" } },
    ],
    [
      "@keyframes poyraz-slide-in-from-right",
      { from: { opacity: "0", transform: "translateX(0.5rem)" } },
    ],
    [
      "@keyframes poyraz-accordion-down",
      {
        from: { height: "0", opacity: "0" },
        to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
      },
    ],
    [
      "@keyframes poyraz-accordion-up",
      {
        from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        to: { height: "0", opacity: "0" },
      },
    ],
    ["@keyframes poyraz-spin", { to: { transform: "rotate(360deg)" } }],
    ["@keyframes poyraz-pulse", { "50%": { opacity: "0.55" } }],

    [
      "@media (prefers-reduced-motion: reduce)",
      {
        ":root": {
          "--poyraz-motion-duration-instant": "1ms",
          "--poyraz-motion-duration-fast": "1ms",
          "--poyraz-motion-duration-base": "1ms",
          "--poyraz-motion-duration-slow": "1ms",
          "--poyraz-motion-duration-deliberate": "1ms",
          "--poyraz-motion-duration-spinner": "1ms",
          "--poyraz-motion-duration-pulse": "1ms",
        },
        '[class*="animate-poyraz-"], .poyraz-toast-motion': {
          "animation-duration": "1ms !important",
          "animation-iteration-count": "1 !important",
          "transition-duration": "1ms !important",
        },
      },
    ],
    [
      ':root[data-poyraz-motion="reduced"], [data-poyraz-motion="reduced"]',
      {
        "--poyraz-motion-duration-instant": "1ms",
        "--poyraz-motion-duration-fast": "1ms",
        "--poyraz-motion-duration-base": "1ms",
        "--poyraz-motion-duration-slow": "1ms",
        "--poyraz-motion-duration-deliberate": "1ms",
        "--poyraz-motion-duration-spinner": "1ms",
        "--poyraz-motion-duration-pulse": "1ms",
      },
    ],
    [
      '[data-poyraz-motion="reduced"] [class*="animate-poyraz-"], [data-poyraz-motion="reduced"] .poyraz-toast-motion',
      {
        "animation-duration": "1ms !important",
        "animation-iteration-count": "1 !important",
        "transition-duration": "1ms !important",
      },
    ],
  ]);
}
