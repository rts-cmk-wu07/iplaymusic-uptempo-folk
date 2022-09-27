import FeaturedData from "../Component/Data";
import { useState } from "react";
import { IoPlay } from "react-icons/io5";
import { IoPause } from "react-icons/io5";

const AlbumDetails = () => {
  const [songPlaying, setSongPlaying] = useState("");

  const relatedGenres = [
    { name: "#bluegrass" },
    { name: "#country" },
    { name: "#folk" },
    { name: "#bossanova'n'soul" },
  ];

  return (
    <div className="h-full">
      <section className="relative h-96 z-0">
        <img
          src={FeaturedData[4].linkImg}
          alt={FeaturedData[4].title}
          className="h-full object-cover"
        />
        <div className="-left-3 top-20 absolute">
          {" "}
          <h2 className="text-[48px] ml-10  leading-tight font-extrabold z-20 text-white ">
            {FeaturedData[4].title}
          </h2>
          <h3 className="text-[20px] ml-10 mt-2 leading-tight font-extrabold z-20 text-white absolute">
            {FeaturedData[4].tracks.length} songs
          </h3>
        </div>
        <div className="-left-3 ml-10 absolute block bottom-3">
          <h4 className="text-[15px] font-light  text-white mb-2">
            genres hashtags
          </h4>
          <div className="flex-wrap">
            {relatedGenres.map((genre) => (
              <button
                /*onClick={}*/ className="m-1 h-2 p-2 pb-8 pr-6 rounded-full font-semibold bg-primaryColor text-white"
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <h3 className="text-[20px] ml-10 mt-8 mb-2 font-extrabold text-black dark:text-white">
        All songs
      </h3>

      <section className="overflow-y-scroll h-[35vh]">
        <table>
          <tbody>
            {FeaturedData[4].tracks.map((item) => (
              <tr onClick={() => setSongPlaying(item.id)} className="my-11">
                <td className="px-5 py-4">
                  {!songPlaying && (
                    <button
                      className="p-2 rounded-full w-8 h-8 bg-gradient-to-r from-[#FF1168] to-[#f2bc06]"
                      onClick={(event) => {
                        setSongPlaying(true);
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
                  <p className="pb-1/2 font-bold text-lg dark:text-white">
                    {item.title}
                  </p>
                  <p className="font-medium dark:text-white text-base">
                    {item.artist}
                  </p>
                </td>
                <td>
                  <p className="mr-3 pl-20 font-medium dark:text-white text-base text-right">
                    {item.length}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
      </section>

      <section>.</section>
    </div>
  );
};

export default AlbumDetails;
