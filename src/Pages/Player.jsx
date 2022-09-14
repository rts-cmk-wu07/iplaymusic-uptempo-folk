import { useState } from "react";
import playerBg from "../assets/player-bgr.jpg";
import playerFg from "../assets/player-fg.jpg";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import audioFile from "../assets/penguin.mp3";
import { IoChevronBack } from "react-icons/io5";
import MaximizedAudioPlayer from "../Component/MaximizedAudioPlayer";
import MinimizedAudioPlayer from "../Component/MinimizedAudioPlayer";

const Player = () => {
  const [maximized, setMaximized] = useState(true);

  const artistName = "Willie Nelson";
  const songTitle = "On the Road Again";

  return (
    <>
      <>
        {!maximized && (
          <div className="absolute right-2 bottom-20 w-full h-44 bg-yellow-400">
            <div className="flex">
              <div className="flex" onClick={(event) => setMaximized(true)}>
                <div className="w-2 h-2">
                  <img className="w-2 h-2" src={playerFg} alt="" />
                </div>
                <div>
                  <p>{artistName}</p>
                  <p>{songTitle}</p>
                </div>{" "}
              </div>
            </div>
            <MinimizedAudioPlayer />
          </div>
        )}
        {maximized && (
          <div className="absolute right-0 top-0 bottom-0 w-screen bg-cyan-300">
            <div className="flex">
              <button onClick={(event) => setMaximized(false)}>
                <IoChevronBack />
              </button>
              <h2>Playing</h2>
            </div>
            <div>
              <MaximizedAudioPlayer audioFile={audioFile} />
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default Player;
