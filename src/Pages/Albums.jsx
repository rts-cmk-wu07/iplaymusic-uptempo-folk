import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from "react-router-dom";
import FeaturedData from "../Component/Data";
import { IoMdSettings } from 'react-icons/io'
import {Link } from "react-router-dom";
import { MdArrowBackIos } from 'react-icons/md'



const Albums = () => {
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
              slidesToScroll: 1
            }
          }
        ]
      };

    return ( 
        <div >
            <div >
              <h1 className="text-[48px] ml-10 pb-8 font-extrabold ">All Albums</h1>
              <div className="flex justify-between ">
              <h3 className=" text-[20px] ml-8 font-bold dark:text-white">Featured Albums</h3>
              <h5 className="text-[20px] mr-5 text-[#ff1168] " >View All</h5>

              </div>
           
            <Slider {...settings} className="albums ">
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
              <h2 className="font-bold ml-8 mt-20 text-[20px] dark:text-white ">New Releases</h2>
              <h3 className="ml-32 mt-20 text-[20px] dark:text-white text-[#ff1168]">View All</h3>
            </div>
            <div className="flex overflow-scroll h-[28rem]">
              
            <div >
            
              {FeaturedData.map((item)=>(
                <div className="album">
                <img src={item.linkImg} alt="" className="albumImg"/>
                <div className="mt-10 ml-3">
                <h2 className="font-bold dark:text-white">{item.title}</h2>
                <p className="dark:text-white">{item.category}</p>
                </div>
                </div>
              ))}
              
            
            </div>
            <div className="font-bold dark:text-white mt-8 ml-3">12 songs</div>
            </div>
        
        </div>
        
       )
  
}
 

export default Albums;
