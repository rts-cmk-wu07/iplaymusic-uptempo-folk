import { Carousel } from "3d-react-carousal";
import FeaturedData from "../Component/Data";

const CarouselComp = () => {
  const slides = FeaturedData.map(function (album) {
    return (
      <img
        className="w-40 h-40 rounded-lg"
        src={album.linkImg}
        // alt={playlist.name}
      />
    );
  });

  const callback = function (index) {
    console.log("callback", index);
  };

  return (
    <>
      <Carousel
        className="w-full h-52"
        slides={slides}
        autoplay={false}
        arrows={false}
        interval={2000}
        onSlideChange={callback}
      />
    </>
  );
};

export default CarouselComp;
