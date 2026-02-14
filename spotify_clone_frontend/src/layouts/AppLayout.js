import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../components/organisms/Sidebar";
import { TopNav } from "../components/organisms/TopNav";
import { BottomPlayer } from "../components/organisms/BottomPlayer";

function titleFromPath(pathname) {
  if (pathname.startsWith("/search")) return "Search";
  if (pathname.startsWith("/library")) return "Your Library";
  if (pathname.startsWith("/playlist/")) return "Playlist";
  return "Home";
}

// PUBLIC_INTERFACE
export function AppLayout() {
  /** Persistent application shell that wraps all routed pages. */
  const location = useLocation();
  const title = titleFromPath(location.pathname);

  return (
    <div className="min-h-screen bg-spotify-black">
      <div className="flex">
        <Sidebar />

        <main className="flex-1 min-w-0">
          <TopNav title={title} />
          <div className="px-4 pb-28 pt-4">
            <div className="app-panel p-4 md:p-6">
              <Outlet />
            </div>
          </div>
        </main>
      </div>

      <BottomPlayer />
    </div>
  );
}
