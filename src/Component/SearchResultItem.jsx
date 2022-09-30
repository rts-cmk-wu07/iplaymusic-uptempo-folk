import { useContext } from "react";
import { useState } from "react";
import { IoPlay } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { CurrentSongContext } from "../Contexts/CurrentSongContext";

const SearchResultItem = ({ item }) => {
  const [songPlaying, setSongPlaying] = useState(false);
  const { setCurrentSong } = useContext(CurrentSongContext);

  return (
    <>
      {item.type === "song" ? (
        <tr className="px-5 py-5">
          <td className="p-2">
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
          <td className="p-2">
            <p className="pb-1/2 font-bold text-lg dark:text-white">
              {item.name}
            </p>
            <p className="font-medium dark:text-white text-base">
              {item.type} • {item.feat}
            </p>
          </td>
        </tr>
      ) : (
        <tr className="px-5 py-4">
          <td className="p-2">
            <img
              className="w-10 h-10 object-cover rounded-md"
              src={item.imgSrc}
              alt={item.name}
            />
          </td>
          <td className="p-2">
            <p className="pb-1/2 font-bold text-lg dark:text-white">
              {item.name}
            </p>
            <p className="font-medium dark:text-white text-base">
              {item.type} • {item.feat}
            </p>
          </td>
        </tr>
      )}
    </>
  );
};

export default SearchResultItem;
