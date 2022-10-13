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
import TrackItem from "../Component/TrackItem";
import { useParams } from "react-router-dom";
import TokenContext from "../Contexts/TokenContext";
import { useEffect, useContext } from "react";
import axios from "axios";
import { CurrentSongContext } from "../Contexts/CurrentSongContext";
import { isPlayingContext } from "../Contexts/isPlayingContext";
import { useNavigate } from "react-router-dom";

const Artist = () => {
  const artistName = "Richard Nixon";

  /*NB! Hvis vi skal følge designet, skal search-componentet have primaryColor som baggrundsfarve.
  const [coloredHero, setColoredHero] = useState(true);*/

  const [songPlaying, setSongPlaying] = useState("");

  const { currentSong } = useContext(CurrentSongContext);
  const { setIsPlaying } = useContext(isPlayingContext);
  var [token] = useContext(TokenContext);
  const [artistDetails, setArtistDetails] = useState([]);
  const [artistAlbums, setArtistAlbums] = useState([]);
  const [relatedArtists, setRelatedArtists] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(
    function () {
      axios
        .get("https://api.spotify.com/v1/artists/" + id + "/albums", {
          headers: {
            Authorization: "Bearer " + token.access_token,
          },
        })
        .then((response) => setArtistAlbums(response.data));
    },
    [token, id, setArtistAlbums]
  );

  useEffect(
    function () {
      axios
        .get("https://api.spotify.com/v1/artists/" + id, {
          headers: {
            Authorization: "Bearer " + token.access_token,
          },
        })
        .then((response) => setArtistDetails(response.data));
    },
    [token, id, setArtistDetails]
  );

  useEffect(
    function () {
      axios
        .get("https://api.spotify.com/v1/artists/" + id + "/related-artists", {
          headers: {
            Authorization: "Bearer " + token.access_token,
          },
        })
        .then((response) => setRelatedArtists(response.data));
    },
    [token, id, setRelatedArtists]
  );

  console.log("artistDetails", artistDetails);
  console.log("artistAlbums", artistAlbums);
  console.log("relatedArtists", relatedArtists);

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
      <section className="relative h-72 z-0">
        <img
          src={artistDetails.images && artistDetails.images[0].url}
          alt={artistDetails.name && artistDetails.name}
          className="h-full w-screen object-cover"
        />
        <div className="-left-3 top-20 absolute">
          {" "}
          <h2 className="text-[36px] ml-10  leading-tight font-extrabold z-20 text-white ">
            {artistDetails.name && artistDetails.name}
          </h2>
          {/* <h3 className="text-[20px] ml-10 mt-2 leading-tight font-extrabold z-20 text-white absolute">
            <>
              {album.album_type === "single" ? (
                <span>Single</span>
              ) : (
                <span>{album.tracks?.items?.length} songs</span>
              )}
            </>
          </h3> */}
        </div>

        <div className="-left-3 ml-10 absolute block bottom-3">
          <h4 className="text-[15px] font-light  text-white mb-2">
            genres hashtags
          </h4>
          <div className="flex-wrap">
            {artistDetails.genres &&
              artistDetails.genres.slice(0, 3).map((genre) => (
                <button
                  onClick={() => navigate(`/category/${genre.id}`)}
                  className="m-1 h-2 p-2 pb-8 pr-6 rounded-full font-semibold bg-primaryColor text-white"
                >
                  #{genre}
                </button>
              ))}
          </div>
        </div>
      </section>
      <section className="pt-8 pb-5">
        <div className="flex justify-between ">
          <h3 className=" text-[20px] ml-8 font-bold dark:text-white">
            Featured Albums
          </h3>
          <h5 className="text-[20px] mr-5 text-[#ff1168] ">View All</h5>
        </div>
        <Slider {...settings} className="albums ">
          {artistAlbums.items &&
            artistAlbums.items.map((item) => (
              <div className="card">
                <div
                  className="card-top"
                  onClick={() => navigate(`/albumDetails/${item.id}`)}
                >
                  <img src={item.images[1].url} alt="" />
                  <h2>{item.name}</h2>
                </div>
              </div>
            ))}
        </Slider>
      </section>
      >
      <section className="pt-0 pb-5">
        <div className="flex justify-between ">
          <h3 className=" text-[20px] ml-8 font-bold dark:text-white">
            Related Artists
          </h3>
          <h5 className="text-[20px] mr-5 text-[#ff1168] ">View All</h5>
        </div>
        <Slider {...settings} className="albums ">
          {relatedArtists.artists &&
            relatedArtists.artists.map((item) => (
              <div className="card">
                <div
                  className="card-top"
                  onClick={() => navigate(`/artist/${item.id}`)}
                >
                  <img src={item.images[1].url} alt="" />
                  <h2>{item.name}</h2>
                </div>
                <h2 className="text-[12px] ml-8 font-bold dark:text-white">
                  {item.name}
                </h2>
              </div>
            ))}
        </Slider>
      </section>
      <section>.</section>
    </div>
  );
};

export default Artist;
