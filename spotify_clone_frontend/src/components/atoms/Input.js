import React from "react";

// PUBLIC_INTERFACE
export function Input({ className = "", ...props }) {
  /** Text input atom with Spotify-like styling. */
  return (
    <input
      className={`w-full rounded-full bg-white/5 px-4 py-2 text-sm text-spotify-text placeholder:text-spotify-muted
      ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-spotify-green/40 ${className}`}
      {...props}
    />
  );
}
