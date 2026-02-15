import React from "react";

/**
 * PUBLIC_INTERFACE
 * Library page.
 * @returns {JSX.Element}
 */
export default function Library() {
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-semibold">Your Library</h1>
      <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="text-sm text-slate-600 dark:text-neutral-300">Playlists</div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-800 dark:text-neutral-100">
          <li>Liked Songs</li>
          <li>Chill Vibes</li>
          <li>Workout</li>
        </ul>
      </div>
    </section>
  );
}
