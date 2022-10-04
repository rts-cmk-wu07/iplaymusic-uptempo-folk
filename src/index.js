import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "./Pages/Player";
import { MaximizedContext } from "./Contexts/MaximizedContext";
import CurrentSongProvider from "./Contexts/CurrentSongContext";
/*
import { useState } from "react";

const [maximized, setMaximized] = useState(false);
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <CurrentSongProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* <Player /> */}
    </CurrentSongProvider>
  </>
);
