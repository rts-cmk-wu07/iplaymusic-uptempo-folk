import FeaturedData from "../Component/Data";
import wave from "../assets/wave.svg";
import { useState, useContext, useEffect } from "react";
import { Carousel } from "3d-react-carousal";
import SearchHeader from "../Component/SearchHeader";
import TrackItem from "../Component/TrackItem";
import axios from "axios";
import TokenContext from "../Contexts/TokenContext";

const Playlists = () => {
  /*NB! Hvis vi skal følge designet, skal search-componentet have primaryColor som baggrundsfarve.
  const [coloredHero, setColoredHero] = useState(true);*/

  var [token] = useContext(TokenContext);

  var [tracks, setTracks] = useState({});

  var playlistID =
    "https://api.spotify.com/v1/playlists/37i9dQZF1DWT9XEOPDgFX3?si=HuQ-Wy9XS4-B2HbI014GXg";

  useEffect(
    function () {
      // if (token.expires_in < new Date().valueOf()){
      //   axios
      //     .post(
      //       "https://accounts.spotify.com/api/token",
      //       {
      //         headers: {

      //         },
      //       }
      //     )
      //     // .then((response) => setTracks(response.data));

      // }

      axios
        .get(
          "https://api.spotify.com/v1/playlists/6rqhFgbbKwnb9MLmUQDhG6/tracks/",
          {
            headers: {
              Authorization: "Bearer " + token.access_token,
            },
          }
        )
        .then((response) => setTracks(response.data));
    },
    [token, setTracks]
  );

  console.log("tracks", tracks);

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
      <SearchHeader />
      <h2 className="text-[48px] ml-10 pt-20 pb-8 font-extrabold text-white">
        Playlists
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
      <h3 className="flex justify-center pt-0 pb-6 text-2xl font-extrabold  dark:text-white">
        {FeaturedData[0].title}
      </h3>
      <section className="overflow-y-scroll h-[17rem]">
        <table>
          <tbody>
            {FeaturedData[0].tracks.map((item) => (
              <TrackItem item={item} />
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-10 mb-10">
          <button className="text-[#FF1168] font-semibold text-lg m-auto rounded-full w-[90%] h-16 border-4 border-[#FF1168]">
            LISTEN ALL
          </button>
        </div>
      </section>

      <section>.</section>
    </div>
  );
};

export default Playlists;
