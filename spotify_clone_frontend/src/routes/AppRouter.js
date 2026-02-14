import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";
import { LibraryPage } from "../pages/LibraryPage";
import { PlaylistPage } from "../pages/PlaylistPage";
import { NotFoundPage } from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "library", element: <LibraryPage /> },
      { path: "playlist/:id", element: <PlaylistPage /> },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
]);

// PUBLIC_INTERFACE
export function AppRouter() {
  /** Router provider for the app. */
  return <RouterProvider router={router} />;
}
