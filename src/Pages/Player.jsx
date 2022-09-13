import { useState } from "react";
import playerBg from "../assets/player-bg.jpg";

const Player = () => {
  const [maximized, setMaximized] = useState(true);

  return (
    <>
      <>
        {!maximized && (
          <div className="absolute right-2 bottom-20 w-full h-14 bg-yellow-400">
            <div className="flex">
              <div className="flex" onClick={(event) => setMaximized(true)}>
                {" "}
                <img src="" alt="" />{" "}
                <div>
                  <p>Song title</p>
                  <p>Artist name</p>
                </div>{" "}
              </div>
              <h2>Playing</h2>
            </div>
          </div>
        )}
        {maximized && (
          <div className="absolute right-0 top-0 bottom-0 w-screen bg-cyan-300">
            <button onClick={(event) => setMaximized(false)}>
              Du kan altid afbryde din forbindelse hér, og miste alt
            </button>
          </div>
        )}
      </>
    </>
  );
};

export default Player;
