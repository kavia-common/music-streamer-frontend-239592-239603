import React from "react";
import { Icon } from "../atoms/Icon";
import { usePlayer } from "../../context/PlayerContext";

// PUBLIC_INTERFACE
export function BottomPlayer() {
  /** Persistent bottom player bar (mock controls). */
  const { currentTrack, isPlaying, togglePlay, next, previous, volume, setPlayerVolume } =
    usePlayer();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 px-3 pb-3 md:px-4">
      <div className="app-panel px-4 py-3">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div className="min-w-0">
            <div className="truncate text-sm font-bold">
              {currentTrack ? currentTrack.title : "Nothing playing"}
            </div>
            <div className="truncate text-xs text-spotify-muted">
              {currentTrack ? `${currentTrack.artist} • ${currentTrack.album}` : "Pick a playlist"}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <button
              className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 flex items-center justify-center transition"
              onClick={previous}
              aria-label="Previous"
            >
              <Icon name="skipPrev" />
            </button>

            <button
              className="h-11 w-11 rounded-full bg-spotify-green text-black hover:brightness-110 active:brightness-95 flex items-center justify-center transition"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              <Icon name={isPlaying ? "pause" : "play"} className="w-6 h-6" strokeWidth={2.2} />
            </button>

            <button
              className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 flex items-center justify-center transition"
              onClick={next}
              aria-label="Next"
            >
              <Icon name="skipNext" />
            </button>
          </div>

          <div className="flex items-center justify-end gap-2">
            <div className="hidden md:flex items-center gap-2 text-spotify-muted">
              <Icon name="volume" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setPlayerVolume(Number(e.target.value))}
                aria-label="Volume"
                className="w-32 accent-spotify-green"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
