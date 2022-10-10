import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import FeaturedData from "../Component/Data";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import SearchHeader from "../Component/SearchHeader";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../Contexts/TokenContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";




const Albums = (id) => {
  var [token] = useContext(TokenContext);
  var [content, setContent] = useState([]);

  const navigate = useNavigate();

  // var [album, setAlbum] = useState([]);
  var [tracks, setTracks] = useState([]);
  // const { id } = useParams();


  useEffect(
    function () {
      axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
          headers: {
            Authorization: "Bearer " + token.access_token,
            // "content-type": "application/json",         
           },
        })
        .then((response) => setContent(response.data.playlists.items));
    },
    [token, setContent]
  );

    
  
  useEffect(
    function () {
      axios
        .get("https://api.spotify.com/v1/browse/new-releases", {
          headers: {
            Authorization: "Bearer " + token.access_token,
          },
        })
        .then((response) => setTracks(response.data));
    },
    [token, id, setTracks]
  );

// var trackItemsArray = tracks.items;

console.log("content", content);

// console.log("tracks", tracks);

// console.log("itemsArray", tracks.items);


  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div>
      <div className="h-1/3">
        <h1 className="text-[48px] pl-10 pb-3 font-extrabold pt-20">
          All Albums
        </h1>
        <div className="flex justify-between w-4/5 m-auto">
          <h3 className=" text-[20px] font-bold dark:text-white">
            Featured Albums
          </h3>
          <h5 className="text-[20px]  text-[#ff1168] ">View All</h5>
        </div>

        <Slider {...settings} className="albums ">
          {content.map((item) => (
            <div className="card" >
              <div className="card-top"  onClick={() =>navigate(`/albumDetails`)}>
                <img src={item.images[0].url} alt="" key={item.id}/> 
                <p>{item.name}</p> 
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-between w-4/5 m-auto h-2/3">
        <h2 className="font-extrabold pt-10 text-[20px] dark:text-white ">
          New Releases
        </h2>
        <h3 className=" pt-10 text-[20px]  text-[#ff1168]">View All</h3>
      </div>
      <div className="flex overflow-y-scroll h-[38vh]">
        <div>
          {FeaturedData.map((item) => (
            <div className="album" onClick={() =>navigate(`/albumDetails`)} >
              <img src={item.linkImg} alt="" className="albumImg"/>
              <div className="pt-10 pl-3">
                <h2 className="font-bold dark:text-white">{item.title}</h2>
                <p className="dark:text-white">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="font-bold dark:text-white pt-8 pl-2">12 songs</div>
      </div>
    </div>
  );
};

export default Albums;
