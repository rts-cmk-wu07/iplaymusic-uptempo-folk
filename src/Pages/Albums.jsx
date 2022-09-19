import Slider from "react-slick";
import CenterMode from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from "react-router-dom";
import FeaturedData from "../Component/Data";



const Albums = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
      
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

    return ( 
        <div >
            <div className="featured">
            <h1 className="font-bold text-2xl mb-6 dark:text-white">Featured Albums</h1>
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

            <div className="flex">
              <h1 className="font-bold ml-10 mt-40 mb-10 text-xl dark:text-white ">New Releases</h1>
              <h2 className="font-bold ml-40 mt-40 mb-10 text-l dark:text-white">View All</h2>
            </div>
            <div className="flex overflow-scroll h-[32rem]">
              
            <div >
            
              {FeaturedData.map((item)=>(
                <div className="album">
                <img src={item.linkImg} alt="" className="albumImg"/>
                <div className="mt-10 ml-2">
                <h2 className="font-bold dark:text-white">{item.title}</h2>
                <p className="dark:text-white">{item.category}</p>
                </div>
                </div>
              ))}
              
            
            </div>
            <div className="font-bold dark:text-white">12 songs</div>
            </div>
        
        </div>
        
       )
  
}
 

export default Albums;
