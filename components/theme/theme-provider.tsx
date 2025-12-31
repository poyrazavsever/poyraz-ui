"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  useRef,
} from "react";

export const APP_THEMES = [
  {
    id: "obsidian",
    label: "Obsidian Neon",
    description: "Saf siyah üzerine neon vurgular. Portföyün ana modu.",
    preview: {
      colors: ["#03060d", "#090f1c", "#7be9ff"],
      mood: "Dark",
    },
  },
  {
    id: "aurora",
    label: "Aurora",
    description: "Kuzey ışıklarından ilham alan yeşil ve deniz mavileri.",
    preview: {
      colors: ["#030812", "#0a1e29", "#47f2a2"],
      mood: "Neon",
    },
  },
  {
    id: "sunset",
    label: "Sunset",
    description: "Turuncu ve şarap tonlarının sıcak paleti.",
    preview: {
      colors: ["#120308", "#2b0d13", "#ff7a18"],
      mood: "Warm",
    },
  },
  {
    id: "oceanic",
    label: "Oceanic",
    description: "Derin deniz mavisi arka plan, buz mavisi aksan.",
    preview: {
      colors: ["#010a13", "#03213a", "#63b3ed"],
      mood: "Cool",
    },
  },
  {
    id: "forest",
    label: "Forest",
    description: "Doğa esintili, koyu yeşil yüzeyler ve pastel yeşil aksan.",
    preview: {
      colors: ["#030c07", "#0b2212", "#6ee7b7"],
      mood: "Calm",
    },
  },
  {
    id: "midnight",
    label: "Midnight",
    description: "Mor tabanlı gece teması, parlak lavanta dokunuşu.",
    preview: {
      colors: ["#050218", "#0d0a2f", "#c084fc"],
      mood: "Vivid",
    },
  },
  {
    id: "desert",
    label: "Desert",
    description: "Kızıl kahveler üzerinde altın sarısı enerji.",
    preview: {
      colors: ["#120b03", "#2c1507", "#fbbf24"],
      mood: "Bold",
    },
  },
  {
    id: "rose",
    label: "Rose Fuzz",
    description: "Fuşya temelli romantik bir görünüm.",
    preview: {
      colors: ["#14040e", "#370f21", "#ff4d8d"],
      mood: "Soft",
    },
  },
  {
    id: "nebula",
    label: "Nebula Pulse",
    description: "Mor ve uzay mavisiyle kozmik bir neon taban.",
    preview: {
      colors: ["#040214", "#110b2a", "#a855f7"],
      mood: "Mystic",
    },
  },
  {
    id: "cyberpunk",
    label: "Cyberpunk Flux",
    description: "Parlak pembe lazerler ve koyu mor arka plan.",
    preview: {
      colors: ["#050013", "#160026", "#ff00bf"],
      mood: "Lazer",
    },
  },
  {
    id: "solstice",
    label: "Solstice Glow",
    description: "Sıcak krem tonları ve turuncu aksanlı bir gündüz teması.",
    preview: {
      colors: ["#fff7ee", "#fff0e1", "#ff914d"],
      mood: "Sunny",
    },
  },
  {
    id: "daybreak",
    label: "Daybreak Sky",
    description: "Serin maviler, pastel morlar ve net ışık modu.",
    preview: {
      colors: ["#f4f7ff", "#edf3ff", "#4f46e5"],
      mood: "Calm",
    },
  },
  {
    id: "glacier",
    label: "Glacier Mist",
    description: "Buzul beyazı yüzeyler ve cam mavisi aksan.",
    preview: {
      colors: ["#f9fdff", "#f1f8fb", "#0ea5e9"],
      mood: "Fresh",
    },
  },
  {
    id: "mint",
    label: "Mint Cream",
    description: "Pastel yeşil taban ve tropical aksanlı hafif bir ışık modu.",
    preview: {
      colors: ["#f1fff6", "#e5fbec", "#2dd4bf"],
      mood: "Fresh",
    },
  },
  {
    id: "mono",
    label: "Mono Light",
    description: "Minimum beyaz/siyah kontrastlı ışık modu.",
    preview: {
      colors: ["#fcfcfc", "#e7e7ea", "#18181b"],
      mood: "Light",
    },
  },
  {
    id: "slate",
    label: "Slate Pulse",
    description: "Lacivert taban uzerinde buz mavisi neon vurgular.",
    preview: { colors: ["#0a0f17", "#111927", "#5ea0ff"], mood: "Dark" },
  },
  {
    id: "ember",
    label: "Ember Night",
    description: "Kizil siyah zemin, kor turuncu isi vurgular.",
    preview: { colors: ["#120608", "#1f0b0f", "#ff6b5a"], mood: "Warm" },
  },
  {
    id: "abyss",
    label: "Abyss Blue",
    description: "Derin mavi katmanlar, serin neon deniz isi.",
    preview: { colors: ["#030712", "#0a1224", "#7296ff"], mood: "Cool" },
  },
  {
    id: "nocturne",
    label: "Nocturne Violet",
    description: "Gece moru taban ve lavanta parlamalari.",
    preview: { colors: ["#0d0616", "#160a24", "#b388ff"], mood: "Mystic" },
  },
  {
    id: "circuit",
    label: "Circuit Mint",
    description: "Yesil temelli tech noir, neon mint aksanlar.",
    preview: { colors: ["#04100a", "#061a0f", "#34d399"], mood: "Neon" },
  },
  {
    id: "bourbon",
    label: "Bourbon Glow",
    description: "Kehribar izleri, viski tonlari ve yumusak isi.",
    preview: { colors: ["#150b03", "#261207", "#f59e0b"], mood: "Cozy" },
  },
  {
    id: "lunar",
    label: "Lunar Mist",
    description: "Ay mavisi tonlar ve sisli gece atmosferi.",
    preview: { colors: ["#05070f", "#0c101f", "#99b7ff"], mood: "Calm" },
  },
  {
    id: "moss",
    label: "Moss Dark",
    description: "Toprak yesilleri, orman esintili koyu palet.",
    preview: { colors: ["#050c08", "#0a170f", "#76d28b"], mood: "Earthy" },
  },
  {
    id: "storm",
    label: "Storm Drift",
    description: "Gri-mavi firtina tabani, serin neon cizgiler.",
    preview: { colors: ["#080b11", "#101725", "#7da6ff"], mood: "Moody" },
  },
  {
    id: "ink",
    label: "Ink Noir",
    description: "Saf siyah uzerine mor-mavi elektro parlamalar.",
    preview: { colors: ["#050505", "#0f0f12", "#8b8cf4"], mood: "Minimal" },
  },
  {
    id: "alpine",
    label: "Alpine Sky",
    description: "Serin dag havasi, acik mavi ve kar beyazi tonlar.",
    preview: { colors: ["#f7fbff", "#edf5ff", "#3b82f6"], mood: "Fresh" },
  },
  {
    id: "lavender",
    label: "Lavender Bloom",
    description: "Yumusak leylak taban, toz pembe vurgular.",
    preview: { colors: ["#fcf8ff", "#f5edff", "#a855f7"], mood: "Soft" },
  },
  {
    id: "sandbar",
    label: "Sandbar",
    description: "Kum beji ve altin sarisi ile gunesli isik modu.",
    preview: { colors: ["#fffaf3", "#f6efe2", "#f59e0b"], mood: "Warm" },
  },
  {
    id: "citrus",
    label: "Citrus Zest",
    description: "Limon-amber palet, enerjik ve ferah.",
    preview: { colors: ["#fffdf5", "#fff7e6", "#fbbf24"], mood: "Bright" },
  },
  {
    id: "porcelain",
    label: "Porcelain",
    description: "Kucuk gri tonlar, notr ve derli toplu.",
    preview: { colors: ["#f8f9fb", "#f1f3f6", "#475569"], mood: "Neutral" },
  },
  {
    id: "meadow",
    label: "Meadow Dew",
    description: "Acik yesil cimler, ferah bahar hissi.",
    preview: { colors: ["#f6fff9", "#e9f7ee", "#22c55e"], mood: "Calm" },
  },
  {
    id: "horizon",
    label: "Horizon",
    description: "Pastel mavi ufuk, berrak ve dengeli.",
    preview: { colors: ["#f5f9ff", "#eaf2ff", "#4f82f8"], mood: "Clear" },
  },
  {
    id: "blossom",
    label: "Blossom",
    description: "Pembe cicekler, tatli ve canli isik palet.",
    preview: { colors: ["#fff8fb", "#ffeef6", "#ec4899"], mood: "Playful" },
  },
  {
    id: "lagoon",
    label: "Lagoon",
    description: "Turkuaz sular, serin ve parlak bir isik modu.",
    preview: { colors: ["#f3fbff", "#e7f5ff", "#0ea5e9"], mood: "Cool" },
  },
  {
    id: "parchment",
    label: "Parchment",
    description: "Krem kagidin, kucuk sari ve sicak tutamlar.",
    preview: { colors: ["#fffef8", "#f8f2e6", "#d4a15c"], mood: "Cozy" },
  },
  {
    id: "crimson-dark",
    label: "Crimson Night",
    description: "Kizil siyah zemin uzerinde parlak kirmizi neon vurgular.",
    preview: { colors: ["#0d0203", "#1a0508", "#e33333"], mood: "Bold" },
  },
  {
    id: "crimson-light",
    label: "Crimson Dawn",
    description: "Acik kirmizi tonlar, ferah ve enerjik bir isik modu.",
    preview: { colors: ["#fff5f5", "#ffeded", "#e33333"], mood: "Energetic" },
  },
] as const;

export type ThemeId = (typeof APP_THEMES)[number]["id"];
const DEFAULT_THEME: ThemeId = "crimson-light";
const LIGHT_THEMES: ThemeId[] = [
  "solstice",
  "daybreak",
  "glacier",
  "mint",
  "mono",
  "crimson-light",
  "alpine",
  "lavender",
  "sandbar",
  "citrus",
  "porcelain",
  "meadow",
  "horizon",
  "blossom",
  "lagoon",
  "parchment",
];

const isLightTheme = (themeId: ThemeId) => LIGHT_THEMES.includes(themeId);

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "uikit.theme";
const applyThemeToRoot = (themeId: ThemeId) => {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  root.dataset.theme = themeId;
  root.classList.toggle("dark", !isLightTheme(themeId));
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeId>(DEFAULT_THEME);
  const isFirstPaint = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    if (stored && APP_THEMES.some((item) => item.id === stored)) {
      applyThemeToRoot(stored);
      setTheme(stored);
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, DEFAULT_THEME);
    applyThemeToRoot(DEFAULT_THEME);
  }, []);

  useEffect(() => {
    if (isFirstPaint.current) {
      isFirstPaint.current = false;
      return;
    }

    applyThemeToRoot(theme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, theme);
    }
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
