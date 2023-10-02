import React from "react"
import Poster from "../Poster/Poster.component"
import Slider from "react-slick"
import PosterCarousel from "../../config/PosterCarousel.config"

const PosterSlider = (props) => {
    return (
        <>
        <div className='flex flex-col items-start my-2 mx-3'>
      <h3 className={`text-2xl font-bold
      ${props.isDark ? "text-white" : "text-gray-800"}`}>
        {props.title}
      </h3>
      <p className={`text-sm
      ${props.isDark ? "text-white" : "text-gray-800"}`}>
        {props.subtitle}
      </p>
    </div>
    <Slider {...PosterCarousel}>
        {props.images.map((sample)=>(
            <Poster {...sample} isDark={props.isDark}/>
        ))}
    </Slider>
        </>
    )
}

export default PosterSlider