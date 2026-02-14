/**
 * Mock data for the Spotify Clone.
 * No backend is used; all pages consume this static dataset.
 */

export const featuredPlaylists = [
  {
    id: "pl_focus",
    name: "Focus Flow",
    description: "Keep calm and code on.",
    cover:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=60",
    color: "from-blue-500/20 to-cyan-500/10"
  },
  {
    id: "pl_chill",
    name: "Chill Hits",
    description: "Laid back favorites.",
    cover:
      "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=600&q=60",
    color: "from-emerald-500/15 to-slate-50/5"
  },
  {
    id: "pl_workout",
    name: "Workout",
    description: "High energy, all day.",
    cover:
      "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=600&q=60",
    color: "from-pink-500/20 to-orange-500/10"
  },
  {
    id: "pl_discover",
    name: "Discover Weekly",
    description: "Your weekly mixtape of fresh music.",
    cover:
      "https://images.unsplash.com/photo-1524666041070-9d87656c25bb?auto=format&fit=crop&w=600&q=60",
    color: "from-violet-500/20 to-fuchsia-500/10"
  }
];

export const libraryItems = [
  { id: "lib_1", type: "playlist", name: "Liked Songs", subtitle: "Playlist • 128 songs" },
  { id: "lib_2", type: "artist", name: "Daft Punk", subtitle: "Artist" },
  { id: "lib_3", type: "playlist", name: "Late Night Coding", subtitle: "Playlist • 52 songs" },
  { id: "lib_4", type: "album", name: "Random Access Memories", subtitle: "Album • 2013" }
];

export const tracksByPlaylist = {
  pl_focus: [
    {
      id: "t_1",
      title: "Neon Lines",
      artist: "Kavia System",
      album: "Focus Flow",
      durationSec: 198
    },
    { id: "t_2", title: "Deep Work", artist: "Synth Lab", album: "Focus Flow", durationSec: 224 },
    {
      id: "t_3",
      title: "Terminal Dreams",
      artist: "Night Runner",
      album: "Focus Flow",
      durationSec: 245
    }
  ],
  pl_chill: [
    { id: "t_4", title: "Sea Glass", artist: "Luna Waves", album: "Chill Hits", durationSec: 213 },
    { id: "t_5", title: "Soft Focus", artist: "Amber Lights", album: "Chill Hits", durationSec: 189 },
    { id: "t_6", title: "City Rain", artist: "Mono Tone", album: "Chill Hits", durationSec: 238 }
  ],
  pl_workout: [
    { id: "t_7", title: "Sprint", artist: "Pulse Unit", album: "Workout", durationSec: 176 },
    { id: "t_8", title: "No Limits", artist: "Amped", album: "Workout", durationSec: 201 },
    { id: "t_9", title: "Peak", artist: "Motion", album: "Workout", durationSec: 193 }
  ],
  pl_discover: [
    { id: "t_10", title: "First Light", artist: "Atlas", album: "Discover Weekly", durationSec: 204 },
    { id: "t_11", title: "Cyan Skies", artist: "Mira", album: "Discover Weekly", durationSec: 231 },
    { id: "t_12", title: "Polaroid", artist: "Nova", album: "Discover Weekly", durationSec: 215 }
  ]
};

// Simple "search index" for demo purposes
export const searchableTracks = Object.values(tracksByPlaylist).flat();
