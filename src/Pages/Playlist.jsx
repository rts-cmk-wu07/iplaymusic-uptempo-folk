import FeaturedData from "../Component/Data";
import wave from "../assets/wave.svg";
import { useState, useContext, useEffect } from "react";

import SearchHeader from "../Component/SearchHeader";
import TrackItem from "../Component/TrackItem";
import axios from "axios";
import TokenContext from "../Contexts/TokenContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoRemove } from "react-icons/io5";
import CarouselComp from "../Component/CarouselComp";
import { Carousel } from "3d-react-carousal";

const Playlist = () => {
  /*NB! ___Hvis vi skal følge designet, skal search-componentet have primaryColor som baggrundsfarve.
  const [coloredHero, setColoredHero] = useState(true);*/

  var [token] = useContext(TokenContext);

  var [playlist, setPlaylist] = useState([]);

  var [tracks, setTracks] = useState([]);

  const { id } = useParams();

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
        .get("https://api.spotify.com/v1/playlists/" + id + "/", {
          headers: {
            Authorization: "Bearer " + token.access_token,
          },
        })
        .then((response) => setPlaylist(response.data));
    },
    [token, id, setPlaylist]
  );

  useEffect(
    function () {
      axios
        .get("https://api.spotify.com/v1/playlists/" + id + "/tracks", {
          headers: {
            Authorization: "Bearer " + token.access_token,
          },
        })
        .then((response) => setTracks(response.data));
    },
    [token, id, setTracks]
  );

  // var trackItemsArray = tracks.items;

  console.log("playlist", playlist);

  console.log("tracks", tracks);
  // console.log("trackItemsArray", trackItemsArray);

  console.log("itemsArray", tracks.items);

  const [songPlaying, setSongPlaying] = useState("");

  const slides = FeaturedData.map(function (album) {
    return (
      <img
        className="w-40 h-40 rounded-lg"
        src={album.linkImg}
        alt={playlist.name}
      />
    );
  });

  const callback = function (index) {
    console.log("callback", index);
  };

  console.log("imagggges", playlist.images);

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
        Playlist
      </h2>

      <section className="h-52">
        {/* <CarouselComp images={playlist.images} /> */}
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
        {playlist.name ? <span>{playlist.name}</span> : <span>Loading...</span>}
      </h3>
      <section className="overflow-y-scroll h-[20.5rem]">
        <table>
          <tbody>
            {/* {FeaturedData[0].tracks.map((item) => (
              <TrackItem item={item} />
            ))} */}
            {tracks.items?.map((item) => (
              <>
                {/* <p>
                  {item.track.name ? (
                    <span>{item.track.name}</span>
                  ) : (
                    <span>{item.items.track.name}</span>
                  )}
                </p> */}

                <TrackItem
                  item={item}
                  key={item.track.id}
                  id={item.track.id}
                  // href={item.track.href}
                  artists={item.track.artists}
                  name={item.track.name}
                  duration={item.track.duration_ms}
                  preview_url={item.track.preview_url}
                />
              </>
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

export default Playlist;
