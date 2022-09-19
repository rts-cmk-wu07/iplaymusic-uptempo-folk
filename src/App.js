import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Featured from "./Pages/Featured";
import AlbumDetails from "./Pages/AlbumDetails";
import Albums from "./Pages/Albums";
import Playlists from "./Pages/Playlists";
import Categories from "./Pages/Categories";
import Player from "./Pages/Player";
import GenericArtistGenre from "./Pages/GenericArtistGenre";
import GenericPlaylistAlbum from "./Pages/GenericPlaylistAlbum";

import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Featured />} />
            <Route path="/albumDetails" element={<AlbumDetails />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/genericArtistGenre"
              element={<GenericArtistGenre />}
            />
            <Route
              path="/genericPlaylistAlbum"
              element={<GenericPlaylistAlbum />}
            />
          </Route>
          *
        </Routes>
      </>
    </div>
  );
}
/*<Route path="/" element={Login} /> This Rote should be placed below the main route component*/
export default App;
