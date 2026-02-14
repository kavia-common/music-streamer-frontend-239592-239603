import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { featuredPlaylists, tracksByPlaylist } from "../data/mockData";
import { Button } from "../components/atoms/Button";
import { TrackRow } from "../components/molecules/TrackRow";
import { usePlayer } from "../context/PlayerContext";

// PUBLIC_INTERFACE
export function PlaylistPage() {
  /** Playlist page: header + track list; plays tracks via PlayerContext. */
  const { id } = useParams();
  const { setQueueAndPlay } = usePlayer();

  const playlist = featuredPlaylists.find((p) => p.id === id) ?? null;
  const tracks = useMemo(() => tracksByPlaylist[id] ?? [], [id]);

  if (!playlist) {
    return (
      <div>
        <h1 className="text-xl font-extrabold">Playlist not found</h1>
        <p className="mt-2 text-sm text-spotify-muted">This is mock data; try another playlist.</p>
      </div>
    );
  }

  return (
    <div>
      <div className={`rounded-2xl bg-gradient-to-br ${playlist.color} p-5 ring-1 ring-white/10`}>
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <img
            src={playlist.cover}
            alt=""
            className="h-28 w-28 rounded-xl object-cover ring-1 ring-white/10"
            loading="lazy"
          />
          <div className="min-w-0 flex-1">
            <div className="text-xs uppercase tracking-wider text-spotify-muted">Playlist</div>
            <h1 className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight">
              {playlist.name}
            </h1>
            <p className="mt-2 text-sm text-spotify-muted">{playlist.description}</p>

            <div className="mt-4 flex items-center gap-2">
              <Button onClick={() => setQueueAndPlay(tracks, 0)} disabled={tracks.length === 0}>
                Play
              </Button>
              <Button variant="ghost" onClick={() => setQueueAndPlay(tracks, 0)}>
                Shuffle (mock)
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-xs font-semibold text-spotify-muted uppercase tracking-wider px-1">
          Tracks
        </div>
        <div className="mt-2 flex flex-col gap-1">
          {tracks.map((t, idx) => (
            <TrackRow key={t.id} track={t} index={idx} queue={tracks} />
          ))}
        </div>
      </div>
    </div>
  );
}
