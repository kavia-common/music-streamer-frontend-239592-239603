import React from "react";
import { useTheme } from "../theme/ThemeContext";

/**
 * PUBLIC_INTERFACE
 * Small button to toggle light/dark theme.
 * @returns {JSX.Element}
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <span
        className="inline-block h-2.5 w-2.5 rounded-full"
        style={{ background: theme === "dark" ? "#22c55e" : "#3b82f6" }}
        aria-hidden="true"
      />
      <span className="hidden sm:inline">{theme === "dark" ? "Dark" : "Light"}</span>
      <span className="sm:hidden">{theme === "dark" ? "D" : "L"}</span>
    </button>
  );
}
