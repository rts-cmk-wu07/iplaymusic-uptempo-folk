import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedData from "../Component/Data";
import SearchHeader from "../Component/SearchHeader";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TokenContext from "../Contexts/TokenContext";

const Featured = () => {
  var [token] = useContext(TokenContext);
  var [content, setContent] = useState({});

  useEffect(
    function () {
      axios
        .get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: "Bearer " + token.access_token,
          },
        })
        .then((response) => setContent(response.data));
    },
    [token, setContent]
  );

  const settings = {
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    speed: 600,
    slidesToShow: 1.5,
    slidesToScroll: 1,
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
        <h1 className="font-extrabold text-[48px] pb-2 pl-8 pt-20 static">
          Featured
        </h1>
      </div>
      <div className="rounded-md">
        <Slider {...settings} className="h-[600px] ">
          {FeaturedData.map((item) => (
            <div className="featured-card m-auto ">
              <div className="featuredCard-top rounded-md relative">
                <img
                  src={item.image}
                  alt=""
                  className=" m-auto w-[330px] h-[500px] pt-10 rounded-md shadow-black shadow-lg "
                />
                <h2 className="featuredText absolute text-3xl font-extrabold text-white top-3/4 left-1/2 -translate-x-2/3 -translate-y-1/3 ">
                  {item.genre}
                </h2>
                {/* <h5 className="featuredText absolute text-xl font-extrabold text-white top-4/5 left-1/2 -translate-x-2/3 -translate-y-2/3 ">{item.title}</h5> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
