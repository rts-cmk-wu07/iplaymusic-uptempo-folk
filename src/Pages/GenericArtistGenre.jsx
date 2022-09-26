import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedData from "../Component/Data";
import artistPhoto from "../assets/player-fg.jpg";
import artistHeroPhoto from "../assets/player-bg.jpg";
import wave from "../assets/wave.svg";
import { IoPlay } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { useState } from "react";
import SearchHeader from "../Component/SearchHeader";

const GenericArtistGenre = () => {
  const artistName = "Richard Nixon";

  /*NB! Hvis vi skal følge designet, skal search-componentet have primaryColor som baggrundsfarve.
  const [coloredHero, setColoredHero] = useState(true);*/

  const [songPlaying, setSongPlaying] = useState("");

  const settings = {
    infinite: false,
    speed: 800,
    slidesToShow: 2.5,
    slidesToScroll: 2.5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="h-full"
      /*style={{
        backgroundImage: `url(${wave})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}*/
    >
      <div className="relative h-64 z-0">
        <img src={artistHeroPhoto} alt="" className="h-full object-cover" />

        <h1 className="text-[48px] ml-10 -left-3 bottom-2 leading-tight font-extrabold z-20 text-white absolute">
          {artistName}
        </h1>
      </div>

      <section className="pt-8 pb-5">
        <div className="flex justify-between ">
          <h3 className=" text-[20px] ml-8 font-bold dark:text-white">
            Featured Albums
          </h3>
          <h5 className="text-[20px] mr-5 text-[#ff1168] ">View All</h5>
        </div>
        <Slider {...settings} className="albums ">
          {FeaturedData.map((item) => (
            <div className="card">
              <div className="card-top">
                <img src={item.linkImg} alt="" />
                <h2>{item.title}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <div className="flex justify-between pb-3">
        <h3 className=" text-[20px] ml-8 font-bold dark:text-white">
          Featured tracks
        </h3>
        <h5 className="text-[20px] mr-5 text-[#ff1168] ">View All</h5>
      </div>
      <section className="overflow-y-scroll h-[14rem]">
        <table>
          <tbody>
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
          </tbody>
        </table>{" "}
        <div className="flex justify-center mt-12 mb-16">
          <button className="text-[#FF1168] font-semibold text-lg m-auto rounded-full w-[90%] h-16 border-4 border-[#FF1168]">
            LISTEN ALL
          </button>
        </div>
      </section>

      <section>.</section>
    </div>
  );
};

export default GenericArtistGenre;
