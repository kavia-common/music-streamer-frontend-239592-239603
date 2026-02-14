import React from "react";
import { formatDuration } from "../../utils/format";
import { usePlayer } from "../../context/PlayerContext";

// PUBLIC_INTERFACE
export function TrackRow({ track, index, queue }) {
  /** Row showing track metadata; clicking plays that track. */
  const { currentTrack, isPlaying, playTrack } = usePlayer();
  const isActive = currentTrack?.id === track.id;

  return (
    <div
      className={`group grid grid-cols-[32px_1fr_auto] items-center gap-3 rounded-lg px-3 py-2
      hover:bg-white/5 transition ${isActive ? "bg-white/6 ring-1 ring-white/10" : ""}`}
      role="button"
      tabIndex={0}
      onClick={() => playTrack(track, queue)}
      onKeyDown={(e) => (e.key === "Enter" ? playTrack(track, queue) : null)}
      aria-label={`Play ${track.title} by ${track.artist}`}
    >
      <div className="text-xs text-spotify-muted">
        {isActive && isPlaying ? <span className="text-spotify-green">▶</span> : index + 1}
      </div>

      <div className="min-w-0">
        <div className="truncate text-sm font-semibold">{track.title}</div>
        <div className="truncate text-xs text-spotify-muted">{track.artist} • {track.album}</div>
      </div>

      <div className="text-xs text-spotify-muted tabular-nums">{formatDuration(track.durationSec)}</div>
    </div>
  );
}
