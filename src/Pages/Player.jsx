import { useState, useRef, useEffect } from "react";
import playerBg from "../assets/player-bgr.jpg";
import playerFg from "../assets/player-fg.jpg";
import AudioPlayer from "react-h5-audio-player";
import axios from "axios";

import "../playerStyle.css";
import audioFile from "../assets/penguin.mp3";
import { IoChevronBack } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { IoPlaySharp } from "react-icons/io5";
import { IoPauseSharp } from "react-icons/io5";
import { useContext } from "react";
import TokenContext from "../Contexts/TokenContext";
import { CurrentSongContext } from "../Contexts/CurrentSongContext";
import { isPlayingContext } from "../Contexts/isPlayingContext";

const Player = () => {
  var [token] = useContext(TokenContext);
  const [maximized, setMaximized] = useState(false);
  const [IsOnModalPlay, setIsOnModalPlay] = useState(false);
  const { currentSong } = useContext(CurrentSongContext);

  const [artistData, setArtistData] = useState([]);
  const { setIsPlaying } = useContext(isPlayingContext);

  useEffect(
    function () {
      axios
        .get("https://api.spotify.com/v1/artists/" + currentSong.artist, {
          headers: {
            Authorization: "Bearer " + token.access_token,
          },
        })
        .then((response) => setArtistData(response.data));
    },
    [token, currentSong, setArtistData]
  );

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
  console.log("currentsongArtsists", currentSong.artists);
  console.log("token", token);

  return (
    <>
      {!currentSong === false && (
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
                      //src={playerFg}
                      src={artistData.images && artistData.images[0].url}
                      // alt={artistName}
                    />
                  </div>
                  <div className="px-3 w-52 max-h-14">
                    <p className="font-semibold dark:text-white max-h-6 overflow-x-hidden">
                      {currentSong.name}
                    </p>
                    <p className="dark:text-white max-h-6 overflow-x-hidden">
                      {currentSong.artists?.map((item, index) =>
                        index + 1 === currentSong.artists.length ? (
                          <span key={index}>{item.name} </span>
                        ) : (
                          <span key={index}>{item.name}, </span>
                        )
                      )}
                    </p>
                  </div>{" "}
                </div>{" "}
                <div className="pt-1">
                  {!IsOnModalPlay && (
                    <button
                      className="pt-2"
                      onClick={(event) => {
                        setIsOnModalPlay(true);
                        pressPlay();
                      }}
                    >
                      <IoPlay className="dark:text-white" size="25" />
                    </button>
                  )}
                  {IsOnModalPlay && (
                    <button
                      className="pt-2"
                      onClick={(event) => {
                        setIsOnModalPlay(false);
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
              //src={playerBg}
              src={artistData.images && artistData.images[0].url}
              alt=""
              className="w-full h-screen relative object-cover grayscale-0"
            />
            <div className="flex absolute left-2 top-5">
              <button onClick={(event) => setMaximized(false)}>
                <IoChevronBack color="white" size="30" />
              </button>
              {IsOnModalPlay ? (
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
                //src={playerFg}
                src={artistData.images && artistData.images[0].url}
                alt="Artist"
              />
            </div>
            <div className="absolute text-white justify-self-center left-0 w-screen top-[60%] text-center">
              {" "}
              <p className="text-xl font-bold justify-self-center w-full px-6">
                {currentSong.name}
              </p>
              <p className="text-l font-medium justify-self-center w-full px-6">
                {currentSong.artists?.map((item, index) =>
                  index + 1 === currentSong.artists.length ? (
                    <span key={index}>{item.name} </span>
                  ) : (
                    <span key={index}>{item.name}, </span>
                  )
                )}
              </p>
            </div>

            <AudioPlayer
              className="absolute"
              autoPlay
              src={currentSong.preview_url}
              onPlay={(e) => {
                console.log("onPlay");
                setIsOnModalPlay(true);
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
      )}
    </>
  );
};

export default Player;
