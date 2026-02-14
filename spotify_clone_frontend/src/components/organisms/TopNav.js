import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "../atoms/Icon";
import { Button } from "../atoms/Button";

// PUBLIC_INTERFACE
export function TopNav({ title }) {
  /** Sticky top navigation for back/forward and quick actions. */
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-20 px-4 pt-4">
      <div className="app-panel px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 flex items-center justify-center transition"
            onClick={() => navigate(-1)}
            aria-label="Back"
          >
            <Icon name="chevronLeft" />
          </button>
          <button
            className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 flex items-center justify-center transition"
            onClick={() => navigate(1)}
            aria-label="Forward"
          >
            <Icon name="chevronRight" />
          </button>

          <div className="ml-2">
            <div className="text-sm font-extrabold tracking-tight">{title}</div>
            <div className="text-xs text-spotify-muted">A modern, UI-only Spotify clone</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={() => navigate("/search")}>
            Search
          </Button>
          <Button onClick={() => navigate("/library")}>Library</Button>
        </div>
      </div>
    </div>
  );
}
