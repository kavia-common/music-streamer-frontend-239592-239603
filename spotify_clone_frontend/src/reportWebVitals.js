/**
 * PUBLIC_INTERFACE
 * CRA web vitals hook (kept minimal).
 * @param {(metric: any) => void} onPerfEntry
 * @returns {void}
 */
export default function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Intentionally empty: app can wire in web-vitals later if desired.
  }
}
