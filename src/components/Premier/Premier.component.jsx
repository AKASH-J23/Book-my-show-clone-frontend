import React from 'react'
import Poster from '../Poster/Poster.component'
import Slider from "react-slick"

const Premier = () => {
    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0,
        responsive: [
          {
            breakpoints: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoints: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              InitialSlide: 1,
            },
          },
          {
            breakpoints: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };

      const Postim =[
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni8xMCAgNS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365489-ccwqagabyn-portrait.jpg",
            alt: "Premier",
            title: "Iraivan",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni8xMCAgNS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365489-ccwqagabyn-portrait.jpg",
            alt: "Premier",
            title: "Iraivan",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni8xMCAgNS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365489-ccwqagabyn-portrait.jpg",
            alt: "Premier",
            title: "Iraivan",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni8xMCAgNS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365489-ccwqagabyn-portrait.jpg",
            alt: "Premier",
            title: "Iraivan",
            subtitle: "English",
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni8xMCAgNS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365489-ccwqagabyn-portrait.jpg",
            alt: "Premier",
            title: "Iraivan",
            subtitle: "English",
        },
      ]
  return (
    <>
    <Slider {...settings}>
        {Postim.map((sample)=>(
            <Poster {...sample} />
        ))}
    </Slider>
    </>
  )
}

export default Premier;
