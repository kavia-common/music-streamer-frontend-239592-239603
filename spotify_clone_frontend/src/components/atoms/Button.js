import React from "react";

// PUBLIC_INTERFACE
export function Button({ variant = "primary", className = "", ...props }) {
  /** Reusable button atom with a couple variants. */
  const base = variant === "ghost" ? "btn-ghost" : "btn";
  return <button className={`${base} ${className}`} {...props} />;
}
