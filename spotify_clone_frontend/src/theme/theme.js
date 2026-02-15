const THEME_STORAGE_KEY = "theme"; // "light" | "dark"

/**
 * PUBLIC_INTERFACE
 * Returns the preferred theme, based on localStorage if present, otherwise system preference.
 * @returns {"light" | "dark"}
 */
export function getInitialTheme() {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // Ignore storage errors (e.g., disabled storage).
  }

  if (typeof window !== "undefined" && window.matchMedia) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  return "light";
}

/**
 * PUBLIC_INTERFACE
 * Persists the theme preference to localStorage (best-effort).
 * @param {"light" | "dark"} theme
 * @returns {void}
 */
export function persistTheme(theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore storage errors.
  }
}

/**
 * PUBLIC_INTERFACE
 * Applies the theme to the document root using Tailwind's class-based dark mode.
 * @param {"light" | "dark"} theme
 * @returns {void}
 */
export function applyThemeClass(theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}
