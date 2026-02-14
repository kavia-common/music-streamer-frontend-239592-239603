import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/atoms/Button";

// PUBLIC_INTERFACE
export function NotFoundPage() {
  /** 404 page. */
  return (
    <div className="text-center py-14">
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Page not found</h1>
      <p className="mt-2 text-sm text-spotify-muted">
        That route doesn’t exist in this UI-only demo.
      </p>
      <div className="mt-6">
        <Link to="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
