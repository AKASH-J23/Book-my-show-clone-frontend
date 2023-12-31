import React from "react"
import Entertainmentcardslider from "../components/Entertainment/Entertainmentcard.component"
// import Premier  from "../components/Premier/Premier.component"
import TempPoster from "../config/TempPosters.config"
import PosterSlider from "../components/PosterSlider/PosterSlider.component"
const HomePage = () => {
    return (
        <>
        <div className="flex flex-col gap-10">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800 m-3">The best of Entertainment</h1>
                <Entertainmentcardslider/>
            </div>
            <div className="bg-Sample-400 py-12">
                <div className="container mx-auto px-4 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <div>
                            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                            alt="rupay" 
                            className="w-full h-full"/>
                        </div>
                    </div>
                    <PosterSlider images={TempPoster} title="Premieres" subtitle="Brand new movies from friday" isDark/>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-4 my-8">
            <PosterSlider 
            images={TempPoster}
            title="Online Streaming Events"
            isDark={false}
            />
        </div>
        <div className="container mx-auto px-4 my-8">
            <PosterSlider 
            images={TempPoster}
            title="Outdoor Events"
            isDark={false}
            />
        </div>
        </>
    )
}

export default HomePage