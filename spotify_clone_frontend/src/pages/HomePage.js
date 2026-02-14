import React from "react";
import { featuredPlaylists } from "../data/mockData";
import { PlaylistCard } from "../components/organisms/PlaylistCard";

// PUBLIC_INTERFACE
export function HomePage() {
  /** Home page: featured playlists grid. */
  return (
    <div>
      <div className="flex items-end justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">Good afternoon</h1>
          <p className="mt-1 text-sm text-spotify-muted">
            Jump back in with a few playlists. (Mock data)
          </p>
        </div>

        <div className="hidden md:block text-xs text-spotify-muted">
          Tip: open a playlist and click a track to play
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {featuredPlaylists.map((p) => (
          <PlaylistCard key={p.id} playlist={p} />
        ))}
      </div>
    </div>
  );
}
