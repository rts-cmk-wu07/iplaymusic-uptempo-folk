import { useState, useRef } from "react";
import playerBg from "../assets/player-bgr.jpg";
import playerFg from "../assets/player-fg.jpg";
import AudioPlayer from "react-h5-audio-player";

import "../playerStyle.css";
import audioFile from "../assets/penguin.mp3";
import { IoChevronBack } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { IoPlaySharp } from "react-icons/io5";
import { IoPauseSharp } from "react-icons/io5";
import { useContext } from "react";
import { CurrentSongContext } from "../Contexts/CurrentSongContext";

const Player = () => {
  const [maximized, setMaximized] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { currentSong } = useContext(CurrentSongContext);

  //replace 'audioFile' with 'currentSong'

  const player = useRef();

  const pressPlay = () => {
    player.current.audio.current.play();
  };

  const pressPause = () => {
    player.current.audio.current.pause();
  };

  /*
  require("react/package.json"); // react is a peer dependency.
  var useSwipeable = require("react-swipeable");

  const maximizedSwipeHandler = useSwipeable({
    onSwipedDown: (eventData) => console.log("User Swiped!", eventData),
    ...config,
  });

  

  const config = {
    delta: 10, // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false, // prevents scroll during swipe (*See Details*)
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
    swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true }, // options for touch listeners (*See Details*)
  };
  */

  const artistName = "Willie Nelson";
  const songTitle = "On the Road Again";

  console.log("maximized", maximized);

  return (
    <>
      <>
        {!maximized && (
          <div
            /*{...maximizedSwipeHandler}*/
            className="fixed right-0 left-0 bottom-[7%] w-screen h-16 px-1 pb-5 bg-white dark:bg-[#341931]"
          >
            <div className="flex justify-around pt-1 pb-1 border-2 border-[#FF1168] rounded-lg">
              <div className="flex" onClick={(event) => setMaximized(true)}>
                <div className="w-12 h-12">
                  <img
                    className="left-5 w-12 h-12 object-cover rounded-full shadow-[0_0_0_2px_hsla(338,100,60,0.501)]"
                    src={playerFg}
                    alt={artistName}
                  />
                </div>
                <div className="px-3">
                  <p className="font-semibold dark:text-white">{songTitle}</p>
                  <p className="dark:text-white">{artistName}</p>
                </div>{" "}
              </div>{" "}
              <div className="pt-1">
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
              ? "fixed right-0 top-0 bottom-0 w-screen h-screen z-20"
              : "hidden"
          }
        >
          <img
            src={playerBg}
            alt=""
            className="w-full h-screen relative object-cover grayscale-0"
          />
          <div className="flex absolute left-2 top-5">
            <button onClick={(event) => setMaximized(false)}>
              <IoChevronBack color="white" size="30" />
            </button>
            {isPlaying ? (
              <h2 className="text-white text-xl px-32 tracking-wider">
                PLAYING
              </h2>
            ) : (
              <h2 className="text-white text-xl px-32 tracking-wider">
                PAUSED
              </h2>
            )}
          </div>
          <div className="absolute align-middle rounded-full w-60 h-60 left-20 top-40 shadow-doubleShadow">
            <img
              className="w-full h-full rounded-full object-cover"
              src={playerFg}
              alt=""
            />
          </div>
          <div className="absolute text-white justify-self-center left-24 top-[60%] text-center">
            {" "}
            <p className="text-xl font-bold">{songTitle}</p>
            <p className="text-l font-medium">{artistName}</p>
          </div>

          <AudioPlayer
            className="absolute"
            autoPlay
            src={currentSong}
            onPlay={(e) => {
              console.log("onPlay");
              setIsPlaying(true);
            }}
            ref={player}
            showSkipControls={true}
            customVolumeControls={[]}
            customAdditionalControls={[]}
            customIcons={{
              play: (
                <IoPlaySharp
                  /*color="bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"*/
                  size={90}
                />
              ),
              pause: <IoPauseSharp size={90} />,
            }}

            // other props here
          />
        </div>
      </>
    </>
  );
};

export default Player;
