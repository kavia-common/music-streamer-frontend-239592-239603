import React from "react";

/**
 * PUBLIC_INTERFACE
 * Search page.
 * @returns {JSX.Element}
 */
export default function Search() {
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-semibold">Search</h1>
      <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <label className="block text-sm font-medium text-slate-700 dark:text-neutral-200">
          Search
          <input
            className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500 dark:border-neutral-800 dark:bg-neutral-950"
            placeholder="Artists, songs, or podcasts"
          />
        </label>
      </div>
    </section>
  );
}
