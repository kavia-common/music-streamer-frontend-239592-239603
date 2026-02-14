import React from "react";
import { useNavigate } from "react-router-dom";

// PUBLIC_INTERFACE
export function PlaylistCard({ playlist }) {
  /** Clickable playlist card. */
  const navigate = useNavigate();

  return (
    <div
      className={`card animate-floatIn bg-gradient-to-br ${playlist.color}`}
      role="button"
      tabIndex={0}
      onClick={() => navigate(`/playlist/${playlist.id}`)}
      onKeyDown={(e) => (e.key === "Enter" ? navigate(`/playlist/${playlist.id}`) : null)}
      aria-label={`Open playlist ${playlist.name}`}
    >
      <div className="flex items-start gap-4">
        <img
          src={playlist.cover}
          alt=""
          className="h-16 w-16 rounded-lg object-cover ring-1 ring-white/10"
          loading="lazy"
        />
        <div className="min-w-0">
          <div className="truncate text-sm font-bold">{playlist.name}</div>
          <div className="mt-1 line-clamp-2 text-xs text-spotify-muted">{playlist.description}</div>
        </div>
      </div>
    </div>
  );
}
