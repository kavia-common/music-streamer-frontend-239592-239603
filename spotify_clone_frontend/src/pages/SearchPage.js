import React, { useMemo, useState } from "react";
import { Input } from "../components/atoms/Input";
import { searchableTracks } from "../data/mockData";
import { TrackRow } from "../components/molecules/TrackRow";

// PUBLIC_INTERFACE
export function SearchPage() {
  /** Search page: filters mock tracks by title/artist/album. */
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchableTracks.filter((t) => {
      const blob = `${t.title} ${t.artist} ${t.album}`.toLowerCase();
      return blob.includes(q);
    });
  }, [query]);

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">Search</h1>
      <p className="mt-1 text-sm text-spotify-muted">Try searching for “focus”, “city”, “atlas”...</p>

      <div className="mt-5 max-w-xl">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What do you want to listen to?"
          aria-label="Search tracks"
        />
      </div>

      <div className="mt-6">
        {query.trim().length === 0 ? (
          <div className="text-sm text-spotify-muted">Start typing to see results.</div>
        ) : results.length === 0 ? (
          <div className="text-sm text-spotify-muted">No results.</div>
        ) : (
          <div className="flex flex-col gap-1">
            {results.map((t, idx) => (
              <TrackRow key={t.id} track={t} index={idx} queue={results} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
