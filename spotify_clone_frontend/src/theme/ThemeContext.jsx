import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { applyThemeClass, getInitialTheme, persistTheme } from "./theme";

const ThemeContext = createContext(null);

/**
 * PUBLIC_INTERFACE
 * Provides theme state and actions for the app.
 * @param {{ children: React.ReactNode }} props
 * @returns {JSX.Element}
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => getInitialTheme());

  useEffect(() => {
    applyThemeClass(theme);
    persistTheme(theme);
  }, [theme]);

  const value = useMemo(() => {
    return {
      theme,
      setTheme,
      toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark"))
    };
  }, [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/**
 * PUBLIC_INTERFACE
 * Hook to access theme state and actions.
 * @returns {{ theme: "light" | "dark", setTheme: (t: "light" | "dark") => void, toggleTheme: () => void }}
 */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
