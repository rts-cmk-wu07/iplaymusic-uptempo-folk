import { useContext } from "react";
import { useState } from "react";
import { IoPlay } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { CurrentSongContext } from "../Contexts/CurrentSongContext";

const TrackItem = ({ item, name, key, id, artists, duration, preview_url }) => {
  const [songPlaying, setSongPlaying] = useState(false);
  const { setCurrentSong } = useContext(CurrentSongContext);
  

  var minutes = Math.floor(duration / 60000);
  var seconds = ((duration % 60000) / 1000).toFixed(0);

  return (
    <tr key={key} className="my-11">
      <td className="pl-4 pr-3 py-4">
        {!songPlaying && (
          <button
            className="p-2 rounded-full w-8 h-8 bg-gradient-to-r from-[#FF1168] to-[#f2bc06]"
            onClick={(event) => {
              setSongPlaying(true);
              setCurrentSong(preview_url);
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
          {artists?.map((item, index) =>
            index + 1 === artists.length ? (
              <span key={index}>{item.name} </span>
            ) : (
              <span key={index}>{item.name}, </span>
            )
          )}
        </p>
      </td>
      <td>
        <p className="mr-3 pl-16 font-medium dark:text-white text-base text-right">
          {minutes}:{(seconds < 10 ? "0" : "") + seconds}
        </p>
      </td>
    </tr>
  );
};

export default TrackItem;
