import { useContext } from "react";
import { useState } from "react";
import { IoPlay } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { CurrentSongContext } from "../Contexts/CurrentSongContext";

const TrackItem = ({ item, name }) => {
  const [songPlaying, setSongPlaying] = useState(false);
  const { setCurrentSong } = useContext(CurrentSongContext);

  return (
    <tr className="my-11">
      <td className="px-5 py-4">
        {!songPlaying && (
          <button
            className="p-2 rounded-full w-8 h-8 bg-gradient-to-r from-[#FF1168] to-[#f2bc06]"
            onClick={(event) => {
              setSongPlaying(true);
              setCurrentSong(item.id /*eller 'item.src'??*/);
              //pressPlay();
            }}
          >
            <IoPlay className="text-white" size="15" />
          </button>
        )}
        {songPlaying && (
          <button
            className="p-2 rounded-full w-8 h-8 bg-gradient-to-r from-[#FF1168] to-[#f2bc06]"
            onClick={(event) => {
              setSongPlaying(false);
              //pressPause();
            }}
          >
            <IoPause className="text-white" size="15" />
          </button>
        )}
      </td>
      <td>
        <p
          onClick={() => setSongPlaying(true)}
          className="pb-1/2 font-bold text-lg dark:text-white"
        >
          {name}
        </p>
        <p
          onClick={() => setSongPlaying(true)}
          className="font-medium dark:text-white text-base"
        >
          {/* {item.artist} */}
        </p>
      </td>
      <td>
        <p className="mr-3 pl-20 font-medium dark:text-white text-base text-right">
          {/* {item.length} */}
        </p>
      </td>
    </tr>
  );
};

export default TrackItem;
