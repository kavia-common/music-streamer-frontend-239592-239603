// PUBLIC_INTERFACE
export function formatDuration(durationSec) {
  /** Convert duration in seconds to m:ss. */
  const m = Math.floor(durationSec / 60);
  const s = durationSec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}
