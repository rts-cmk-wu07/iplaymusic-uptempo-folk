import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Featured from "./Pages/Featured";
import AlbumDetails from "./Pages/AlbumDetails";
import Albums from "./Pages/Albums";
import Playlists from "./Pages/Playlists";
import Playlist from "./Pages/Playlist";
import Categories from "./Pages/Categories";
import Player from "./Pages/Player";
import GenericArtistGenre from "./Pages/GenericArtistGenre";
import GenericPlaylistAlbum from "./Pages/GenericPlaylistAlbum";
import Category from "./Pages/Category";
import Artist from "./Pages/Artist";

import Login from "./Pages/Login";
import Callback from "./Pages/Callback";
import TokenContext from "./Contexts/TokenContext";
import { isPlayingContext } from "./Contexts/isPlayingContext";

import { useState } from "react";
import CurrentSongProvider, {
  CurrentSongContext,
} from "./Contexts/CurrentSongContext";

// function App() {
//   return (
//     <div className="App">
//       <>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Featured />} />
//             <Route path="/albumDetails" element={<AlbumDetails />} />
//             <Route path="/albums" element={<Albums />} />
//             <Route path="/playlists" element={<Playlists />} />
//             <Route path="/categories" element={<Categories />} />
//             <Route path="/login" element={<Login />} />
//             <Route
//               path="/genericArtistGenre"
//               element={<GenericArtistGenre />}
//             />
//             <Route
//               path="/genericPlaylistAlbum"
//               element={<GenericPlaylistAlbum />}
//             />
//           </Route>
//           *
//         </Routes>
//       </>
//     </div>
//   );
// }

function App() {
  var tokenState = useState(null);
  var [isPlaying, setIsPlaying] = useState(false);

  return (
    <TokenContext.Provider value={tokenState}>
      <CurrentSongProvider>
        <isPlayingContext.Provider value={{ isPlaying, setIsPlaying }}>
          <>
            <Routes>
              {tokenState[0]?.access_token ? (
                <Route path="/" element={<Layout />}>
                  <Route path="/featured" element={<Featured />} />
                  <Route path="/albumDetails/:id" element={<AlbumDetails />} />
                  <Route path="/albums" element={<Albums />} />
                  <Route path="/playlist/:id" element={<Playlist />} />
                  <Route path="/playlists" element={<Playlists />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/category/:id" element={<Category />} />
                  <Route path="/artist/:id" element={<Artist />} />

                  <Route
                    path="/genericArtistGenre"
                    element={<GenericArtistGenre />}
                  />
                  <Route
                    path="/genericPlaylistAlbum"
                    element={<GenericPlaylistAlbum />}
                  />
                </Route>
              ) : (
                <>
                  <Route path="/" element={<Login />}></Route>
                  <Route path="/callback" element={<Callback />}></Route>
                </>
              )}
            </Routes>

            {tokenState[0]?.access_token && <Player />}
          </>
        </isPlayingContext.Provider>
      </CurrentSongProvider>
    </TokenContext.Provider>
  );
}
export default App;
