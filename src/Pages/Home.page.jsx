import React from "react"
import Entertainmentcardslider from "../components/Entertainment/Entertainmentcard.component"
import Premier  from "../components/Premier/Premier.component"
const HomePage = () => {
    return (
        <>
        <div className="container mx-auto px-4">
            <h1 className="text-xl font-bold text-gray-800 m-3">The best of Entertainment</h1>
            <Entertainmentcardslider/>
            <Premier/>
        </div>
        </>
    )
}

export default HomePage