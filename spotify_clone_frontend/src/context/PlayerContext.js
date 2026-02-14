import React, { createContext, useContext, useMemo, useState } from "react";
import { tracksByPlaylist, featuredPlaylists } from "../data/mockData";

const PlayerContext = createContext(null);

function buildInitialQueue() {
  const firstPlaylist = featuredPlaylists[0]?.id;
  const queue = firstPlaylist ? tracksByPlaylist[firstPlaylist] ?? [] : [];
  return queue;
}

// PUBLIC_INTERFACE
export function PlayerProvider({ children }) {
  /** Provider for global player state (mock playback, queue, track selection). */
  const [queue, setQueue] = useState(buildInitialQueue());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8); // 0..1

  const currentTrack = queue[currentIndex] ?? null;

  // PUBLIC_INTERFACE
  const playTrack = (track, nextQueue = queue) => {
    /** Set a track as current and start playback. */
    const idx = nextQueue.findIndex((t) => t.id === track.id);
    setQueue(nextQueue);
    setCurrentIndex(Math.max(0, idx));
    setIsPlaying(true);
  };

  // PUBLIC_INTERFACE
  const togglePlay = () => {
    /** Toggle playback state. */
    setIsPlaying((p) => !p);
  };

  // PUBLIC_INTERFACE
  const next = () => {
    /** Go to next track in queue (wrap around). */
    setCurrentIndex((i) => (queue.length ? (i + 1) % queue.length : 0));
    setIsPlaying(true);
  };

  // PUBLIC_INTERFACE
  const previous = () => {
    /** Go to previous track in queue (wrap around). */
    setCurrentIndex((i) => (queue.length ? (i - 1 + queue.length) % queue.length : 0));
    setIsPlaying(true);
  };

  // PUBLIC_INTERFACE
  const setQueueAndPlay = (newQueue, startIndex = 0) => {
    /** Replace queue and start playback from a given index. */
    setQueue(newQueue);
    setCurrentIndex(Math.max(0, Math.min(startIndex, Math.max(0, newQueue.length - 1))));
    setIsPlaying(true);
  };

  // PUBLIC_INTERFACE
  const setPlayerVolume = (v) => {
    /** Set volume between 0..1. */
    const clamped = Math.max(0, Math.min(1, v));
    setVolume(clamped);
  };

  const value = useMemo(
    () => ({
      queue,
      currentIndex,
      currentTrack,
      isPlaying,
      volume,
      playTrack,
      togglePlay,
      next,
      previous,
      setQueueAndPlay,
      setPlayerVolume
    }),
    [queue, currentIndex, currentTrack, isPlaying, volume]
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

// PUBLIC_INTERFACE
export function usePlayer() {
  /** Hook to access the global player state. */
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
  return ctx;
}
