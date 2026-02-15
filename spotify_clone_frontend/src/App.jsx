import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeContext";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";

/**
 * PUBLIC_INTERFACE
 * Application root; provides routing and global theme provider.
 * @returns {JSX.Element}
 */
export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
