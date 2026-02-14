import React from "react";

const icons = {
  home: (
    <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5Z" />
  ),
  search: (
    <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm10 2-4.35-4.35" />
  ),
  library: (
    <path d="M4 19V6m5 13V6m10 13V6M9 6h12M9 10h12M9 14h12M9 18h12" />
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  heart: (
    <path d="M20.8 7.3a5.4 5.4 0 0 0-7.6 0L12 8.5l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6l1.2 1.2L12 23l7.6-6.9 1.2-1.2a5.4 5.4 0 0 0 0-7.6Z" />
  ),
  chevronLeft: <path d="M15 18 9 12l6-6" />,
  chevronRight: <path d="m9 18 6-6-6-6" />,
  play: <path d="M8 5v14l11-7-11-7Z" />,
  pause: <path d="M7 5h4v14H7zM13 5h4v14h-4z" />,
  skipNext: <path d="M7 6v12l9-6-9-6Zm10 0h2v12h-2V6Z" />,
  skipPrev: <path d="M17 6v12l-9-6 9-6ZM5 6h2v12H5V6Z" />,
  volume: (
    <path d="M11 5 6 9H3v6h3l5 4V5Zm8.5 7a4.5 4.5 0 0 0-2.5-4m2.5 4a4.5 4.5 0 0 1-2.5 4" />
  )
};

// PUBLIC_INTERFACE
export function Icon({ name, className = "w-5 h-5", strokeWidth = 1.8 }) {
  /** Small inline SVG icon component. */
  const path = icons[name];
  if (!path) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
