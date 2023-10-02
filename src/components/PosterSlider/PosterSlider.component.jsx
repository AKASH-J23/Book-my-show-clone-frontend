import React from "react"
import Poster from "../Poster/Poster.component"
import Slider from "react-slick"
import PosterCarousel from "../../config/PosterCarousel.config"

const PosterSlider = (props) => {
    return (
        <>
        <div className='flex flex-col items-start'>
      <h3 className='text-white text-xl font-bold'>
        {props.title}
      </h3>
      <p className='text-white'>
        {props.subtitle}
      </p>
    </div>
    <Slider {...PosterCarousel}>
        {props.images.map((sample)=>(
            <Poster {...sample} isDark/>
        ))}
    </Slider>
        </>
    )
}

export default PosterSlider