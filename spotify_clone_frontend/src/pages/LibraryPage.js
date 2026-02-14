import React from "react";
import { libraryItems } from "../data/mockData";

// PUBLIC_INTERFACE
export function LibraryPage() {
  /** Library page: lists saved items from mock data. */
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">Your Library</h1>
      <p className="mt-1 text-sm text-spotify-muted">Playlists, artists, and albums (mock).</p>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-3">
        {libraryItems.map((it) => (
          <div key={it.id} className="card">
            <div className="text-sm font-bold">{it.name}</div>
            <div className="mt-1 text-xs text-spotify-muted">{it.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
