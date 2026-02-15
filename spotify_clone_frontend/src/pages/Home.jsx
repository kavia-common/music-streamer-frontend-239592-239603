import React from "react";

/**
 * PUBLIC_INTERFACE
 * Home page.
 * @returns {JSX.Element}
 */
export default function Home() {
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-semibold">Home</h1>
      <p className="text-slate-700 dark:text-neutral-300">
        Use the theme toggle in the header to switch between Light/Dark. Preference is persisted.
      </p>
      <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="text-sm text-slate-600 dark:text-neutral-300">Featured</div>
        <div className="mt-2 text-lg font-medium">Daily Mix</div>
      </div>
    </section>
  );
}
