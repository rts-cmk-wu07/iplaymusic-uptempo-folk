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
      const settingsCenterMode = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };


   
    return ( 
        <div >
            <div className="featured overflow-scroll">
            <h1 className="font-bold text-3xl mb-6 dark:text-white">Featured Albums</h1>
            <Slider {...settings} className="cente">
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
              <h1 className="font-bold ml-20 mt-40 mb-10 text-3xl dark:text-white ">New Releases</h1>
              <h2 className="font-bold ml-40 mt-40 mb-10 text-2xl dark:text-white">View All</h2>
            </div>
            <div className="flex overflow-scroll h-[32rem]">
              
            <div >
            
              {FeaturedData.map((item)=>(
                <div className="album">
                <img src={item.linkImg} alt="" className="albumImg"/>
                <div className="mt-12 ml-10">
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
