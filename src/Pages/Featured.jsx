import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FeaturedData from "../Component/Data";


const Featured = () => {
    const settings = {
        vertical: true,
        verticalSwiping: true,
        infinite: false,
        speed: 800,
        slidesToShow: 1.5,
        slidesToScroll: 1.5,
        initialSlide: 0,
        responsive: [
      
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1.5
            }
          }
        ]
      };
   
    return ( 
        <div className="featured overflow-scroll overflow-x-hidden">
            <h1 className="font-extrabold text-[48px] mb-6 ml-8">Featured</h1>
            <Slider {...settings}>
            {FeaturedData.map((item) =>(
            <div className="featured-card m-auto">
                <div className="featuredCard-top">
                    <img src={item.linkImg} alt="" className="w-[500px] rounded-md"/>
                    <h2 className="featuredText">{item.title}</h2>
                </div>
            </div>

            ))}
            </Slider>
            
           
        </div>
        
       )
  
}
 
export default Featured;


