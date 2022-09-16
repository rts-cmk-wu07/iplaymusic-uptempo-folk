import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FeaturedData from "../Component/Data";


const Featured = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
      
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
   
    return ( 
        <div className="featured overflow-scroll overflow-x-hidden">
            <h1 className="font-bold text-3xl mb-6 dark:text-white">Recommended</h1>
            <Slider {...settings}>
            {FeaturedData.map((item) =>(
            <div className="card">
                <div className="card-top">
                    <img src={item.linkImg} alt="" />
                    <h2>{item.title}</h2>
                </div>
            </div>

            ))}
            </Slider>
            <h1 className="font-bold text-3xl mb-6 mt-10 dark:text-white">Best of artists</h1>
            <Slider {...settings}>
            {FeaturedData.map((item) =>(
            <div className="card">
                <div className="card-top">
                    <img src={item.linkImg} alt="" />
                    <h2>{item.title}</h2>
                </div>
            </div>

            ))}
            </Slider>
            <h1 className="font-bold text-3xl mb-6 mt-10 dark:text-white">New releases for you</h1>
            <Slider {...settings}>
            {FeaturedData.map((item) =>(
            <div className="card">
                <div className="card-top">
                    <img src={item.linkImg} alt="" />
                    <h2>{item.title}</h2>
                </div>
            </div>

            ))}
            </Slider>
        </div>
        
       )
  
}
 
export default Featured;


