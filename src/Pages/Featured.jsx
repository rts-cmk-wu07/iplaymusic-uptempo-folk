import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedData from "../Component/Data";
import SearchHeader from "../Component/SearchHeader";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TokenContext from "../Contexts/TokenContext";
import FeaturedCard from "../Component/FeaturedCard";


const Featured = () => {
  var [token] = useContext(TokenContext);
  var [content, setContent] = useState([]);

  useEffect(
    function () {
      axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
          headers: {
            Authorization: "Bearer " + token.access_token,
          },
        })
        .then((response) => setContent(response.data.playlists.items));
    },
    [token, setContent]
  );



  const settings = {
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    speed: 700,
    slidesToShow: 1.95,
    slidesToScroll: 1.95,
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
    <div className="featured overflow-hidden">
      <div>
        <h1 className="font-bold text-[48px] pb-2 pl-8 pt-20 static">
          Featured
        </h1>
      </div>
      <div className="rounded-md">
        <Slider {...settings} className="h-[600px] ">
         
        {content?.map(item => (
					<FeaturedCard key={item.id} image={item.images[0].url} album={item.name} genre={item.type} id={item.id} />
				))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
