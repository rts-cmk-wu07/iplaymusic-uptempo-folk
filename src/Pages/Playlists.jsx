import FeaturedData from "../Component/Data";
import artistPhoto from "../assets/player-fg.jpg";
import wave from "../assets/wave.svg";
import { IoPlay } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { useState } from "react";
import { Carousel } from "3d-react-carousal";

const Playlists = () => {
  /*NB! Hvis vi skal følge designet, skal search-componentet have primaryColor som baggrundsfarve.
  const [coloredHero, setColoredHero] = useState(true);*/

  const [songPlaying, setSongPlaying] = useState("");

  const slides = FeaturedData.map(function (album) {
    return (
      <img
        className="w-40 h-40 rounded-lg"
        src={album.linkImg}
        alt={album.title}
      />
    );
  });

  const callback = function (index) {
    console.log("callback", index);
  };

  return (
    <div
      className="h-full"
      style={{
        backgroundImage: `url(${wave})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-[48px] ml-10 pt-8 pb-8 font-extrabold text-white">
        Album or playlist
      </h2>

      <section className="h-52">
        <Carousel
          className="w-full h-52"
          slides={slides}
          autoplay={false}
          arrows={false}
          interval={2000}
          onSlideChange={callback}
        />
      </section>

      <section>
        <h3 className="flex justify-center pt-0 pb-6 text-2xl font-extrabold  dark:text-white">
          {FeaturedData[0].title}
        </h3>

        <table>
          {FeaturedData[0].tracks.map((item) => (
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
                <p className="mr-3 pl-20 font-medium dark:text-white text-base">
                  {item.length}
                </p>
              </td>
            </tr>
          ))}
        </table>
      </section>
      <section className="flex justify-center mt-12 mb-16">
        <button className="text-[#FF1168] font-semibold text-lg m-auto rounded-full w-[90%] h-16 border-4 border-[#FF1168]">
          LISTEN ALL
        </button>
      </section>
      <section>.</section>
    </div>
  );
};

export default Playlists;
