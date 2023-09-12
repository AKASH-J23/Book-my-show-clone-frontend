import React from "react";
import Slider from "react-slick";
import { Nextarrow,Prevarrow } from "./Arrow.component"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Herocarousel = () => {
    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        nextarrow: <Nextarrow />,
        prevarrow: <Prevarrow />
    }
    const settings = {
        arrows: true,
        centerMode: true,
        centerPadding: "2000px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextarrow: <Nextarrow />,
        prevarrow: <Prevarrow />
      };
    const images = ["https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
                    "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"]
                    
    return (
        <>
        <div className="lg:hidden">
            <Slider {...settings}>
                {images.map((image)=>(
                    <div className="w-full h-56 md:h-80 py-3">
                        <img src={image} alt="testing" className="w-full h-full " />
                    </div>
                ))}
            </Slider>
        </div>
        <div className="hidden lg:block">
            <Slider {...settingsLg}>
                {images.map((image)=>(
                    <div className="w-full h-96 px-2 py-3">
                        <img src={image} alt="testing" className="w-full h-full rounded-md" />
                    </div>
                ))}
            </Slider>
        </div>
        </>
    );
}

export default Herocarousel