import React from "react";
import "./App.css";
import { PlayerProvider } from "./context/PlayerContext";
import { AppRouter } from "./routes/AppRouter";

// PUBLIC_INTERFACE
function App() {
  /** Application root: providers + router. */
  return (
    <PlayerProvider>
      <AppRouter />
    </PlayerProvider>
  );
}

export default App;
