import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

function navLinkClass({ isActive }) {
  return [
    "px-3 py-2 rounded-md text-sm font-medium transition",
    isActive
      ? "bg-slate-200 text-slate-900 dark:bg-neutral-800 dark:text-neutral-50"
      : "text-slate-700 hover:bg-slate-200/70 dark:text-neutral-200 dark:hover:bg-neutral-800/70"
  ].join(" ");
}

/**
 * PUBLIC_INTERFACE
 * Global app layout with a sticky header and theme toggle.
 * @returns {JSX.Element}
 */
export default function AppLayout() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="text-base font-semibold tracking-tight">Spotify Clone</div>
            <nav className="hidden items-center gap-1 sm:flex">
              <NavLink to="/" className={navLinkClass} end>
                Home
              </NavLink>
              <NavLink to="/search" className={navLinkClass}>
                Search
              </NavLink>
              <NavLink to="/library" className={navLinkClass}>
                Library
              </NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 px-4 py-4 text-sm text-slate-500 dark:border-neutral-800 dark:text-neutral-400">
        <div className="mx-auto max-w-6xl">Mock Spotify clone UI.</div>
      </footer>
    </div>
  );
}
