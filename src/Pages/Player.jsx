import { useState, useRef } from "react";
import playerBg from "../assets/player-bgr.jpg";
import playerFg from "../assets/player-fg.jpg";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import audioFile from "../assets/penguin.mp3";
import { IoChevronBack } from "react-icons/io5";
import MaximizedAudioPlayer from "../Component/MaximizedAudioPlayer";
import { IoPlay } from "react-icons/io5";
import { IoPause } from "react-icons/io5";

const Player = () => {
  const [maximized, setMaximized] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const player = useRef();

  const pressPlay = () => {
    player.current.audio.current.play();
  };

  const pressPause = () => {
    player.current.audio.current.pause();
  };

  const artistName = "Willie Nelson";
  const songTitle = "On the Road Again";

  console.log("maximized", maximized);

  return (
    <>
      <>
        {!maximized && (
          <div className="fixed right-0 left-0 bottom-[7%] w-full h-14 bg-white dark:bg-pink-900">
            <div className="flex justify-around pt-1 pb-1">
              <div className="flex" onClick={(event) => setMaximized(true)}>
                <div className="w-12 h-12">
                  <img className="left-5 w-12 h-12" src={playerFg} alt="" />
                </div>
                <div className="px-3">
                  <p className="font-semibold dark:text-white">{songTitle}</p>
                  <p className="dark:text-white">{artistName}</p>
                </div>{" "}
              </div>{" "}
              <div>
                {!isPlaying && (
                  <button
                    className="pt-2"
                    onClick={(event) => {
                      setIsPlaying(true);
                      pressPlay();
                    }}
                  >
                    <IoPlay className="dark:text-white" size="25" />
                  </button>
                )}
                {isPlaying && (
                  <button
                    className="pt-2"
                    onClick={(event) => {
                      setIsPlaying(false);
                      pressPause();
                    }}
                  >
                    <IoPause className="dark:text-white" size="25" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        <div
          className={
            maximized
              ? "fixed right-0 top-0 bottom-0 w-screen h-screen"
              : "hidden"
          }
        >
          <img src={playerBg} alt="" className="w-full h-5/6 relative" />
          <div className="flex absolute left-2 top-5">
            <button onClick={(event) => setMaximized(false)}>
              <IoChevronBack color="white" size="30" />
            </button>
            {isPlaying ? (
              <h2 className="text-white text-xl px-32">Playing</h2>
            ) : (
              <h2 className="text-white text-xl px-32">Paused</h2>
            )}
          </div>
          <div className="absolute align-middle rounded-full w-60 h-60 left-20 top-40">
            <img className="w-full h-full rounded-full" src={playerFg} alt="" />
          </div>
          <div className="absolute text-white justify-self-center left-24 top-3/4 text-center">
            {" "}
            <p className="text-xl font-semibold">{songTitle}</p>
            <p className="text-xl font-medium">{artistName}</p>
          </div>

          <AudioPlayer
            autoPlay
            src={audioFile}
            onPlay={(e) => console.log("onPlay")}
            style={{
              backgroundColor: "transparent",
              position: "fixed",
              zIndex: "revert",
            }}
            ref={player}
            showSkipControls={true}

            // other props here
          />
        </div>
      </>
    </>
  );
};

export default Player;
