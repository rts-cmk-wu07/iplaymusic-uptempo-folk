import { useState } from "react";
import { createContext } from "react";
const CurrentSongContext = createContext();

export { CurrentSongContext };

export default function CurrentSongProvider({ children }) {
  const [currentSong, setCurrentSong] = useState(false);
  return (
    <CurrentSongContext.Provider value={{ currentSong, setCurrentSong }}>
      {children}
    </CurrentSongContext.Provider>
  );
}
