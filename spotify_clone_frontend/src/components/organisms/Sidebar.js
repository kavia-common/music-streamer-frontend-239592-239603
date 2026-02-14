import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "../atoms/Icon";
import { libraryItems } from "../../data/mockData";

function navClass({ isActive }) {
  return `nav-link ${isActive ? "nav-link-active" : ""}`;
}

// PUBLIC_INTERFACE
export function Sidebar() {
  /** Persistent left navigation sidebar. */
  return (
    <aside className="hidden md:flex w-64 shrink-0 flex-col gap-4 p-4">
      <div className="app-panel p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-spotify-green/90" />
          <div className="text-sm font-extrabold tracking-tight">Spotify Clone</div>
        </div>

        <nav className="mt-4 flex flex-col gap-1">
          <NavLink to="/" className={navClass} end>
            <Icon name="home" />
            Home
          </NavLink>
          <NavLink to="/search" className={navClass}>
            <Icon name="search" />
            Search
          </NavLink>
          <NavLink to="/library" className={navClass}>
            <Icon name="library" />
            Your Library
          </NavLink>
        </nav>

        <div className="mt-4 flex items-center gap-2">
          <span className="chip">Dark</span>
          <span className="chip">Mock Data</span>
        </div>
      </div>

      <div className="app-panel p-3 overflow-auto">
        <div className="px-2 pb-2 text-xs font-semibold text-spotify-muted uppercase tracking-wider">
          Library
        </div>
        <div className="flex flex-col gap-1">
          {libraryItems.map((it) => (
            <div
              key={it.id}
              className="rounded-lg px-3 py-2 hover:bg-white/5 transition cursor-pointer"
            >
              <div className="text-sm font-semibold">{it.name}</div>
              <div className="text-xs text-spotify-muted">{it.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
