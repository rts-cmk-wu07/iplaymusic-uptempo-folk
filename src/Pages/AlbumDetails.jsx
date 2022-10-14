import FeaturedData from "../Component/Data";
import { IoPlay } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import TrackItem from "../Component/TrackItem";
import { useParams } from "react-router-dom";
import TokenContext from "../Contexts/TokenContext";
import { useState, useContext, useEffect } from "react";

import axios from "axios";

const AlbumDetails = () => {
  const [songPlaying, setSongPlaying] = useState("");

  var [token] = useContext(TokenContext);

  var [album, setAlbum] = useState([]);

  var [albumTracks, setAlbumTracks] = useState([]);
  const { id } = useParams();

  useEffect(
    function () {
      axios

        .get("https://api.spotify.com/v1/albums/" + id, {
          headers: {
            Authorization: "Bearer " + token.access_token,
          },
        })
        .then((response) => setAlbum(response.data));
    },
    [token, id, setAlbum]
  );

  console.log("album", album);

  useEffect(
    function () {
      axios
        .get("https://api.spotify.com/v1/albums/" + id + "/tracks", {
          headers: {
            Authorization: "Bearer " + token.access_token,
          },
        })
        .then((response) => setAlbumTracks(response.data));
    },
    [token, id, setAlbumTracks]
  );

  console.log("albumTracks", albumTracks);

  const relatedGenres = [
    { name: "bluegrass" },
    { name: "soul" },
    { name: "folk" },
  ];

  console.log("howmanysongs", album.tracks && album.tracks.items.length);

  console.log("genres", album.genres);

  return (
    <div className="h-full">
      <section className="relative h-72 z-0">
        <img
          src={album.images && album.images[0].url}
          alt={album.name && album.name}
          className="h-full w-screen object-cover"
        />
        <div className="-left-3 top-20 absolute">
          {" "}
          <h2 className="text-[36px] ml-10  leading-tight font-extrabold z-20 text-white ">
            {album.name && album.name}
          </h2>
          <h3 className="text-[20px] ml-10 mt-2 leading-tight font-extrabold z-20 text-white absolute">
            <>
              {album.album_type === "single" ? (
                <span>Single</span>
              ) : (
                <span>{album.tracks?.items?.length} songs</span>
              )}
            </>
          </h3>
        </div>

        {/* <div className="-left-3 ml-10 absolute block bottom-3">
          <h4 className="text-[15px] font-light  text-white mb-2">
            genres hashtags
          </h4>
          <div className="flex-wrap">
            {relatedGenres.map((genre) => (
              <button
                onClick={} className="m-1 h-2 p-2 pb-8 pr-6 rounded-full font-semibold bg-primaryColor text-white"
              >
                #{genre.name}
              </button>
            ))}
          </div>
        </div> */}
      </section>

      <h3 className="text-[20px] ml-10 mt-8 mb-2 font-extrabold text-black dark:text-white">
        All songs
      </h3>

      <section className="overflow-y-scroll h-[48.7vh] pb-16">
        <table>
          <tbody>
            {albumTracks.items &&
              albumTracks.items.map((item) => (
                <TrackItem
                  item={item}
                  key={item.id}
                  id={item.id}
                  href={item.href}
                  artists={item.artists}
                  name={item.name}
                  duration={item.duration_ms}
                  preview_url={item.preview_url}
                />
              ))}
          </tbody>
        </table>{" "}
      </section>

      <section className="pt-20">.</section>
    </div>
  );
};

export default AlbumDetails;
