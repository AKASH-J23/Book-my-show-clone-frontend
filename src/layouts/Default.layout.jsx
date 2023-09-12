import React from "react";
import Navbar from "../components/Navbar/Navbar.component"
import Herocarousel from "../components/HeroCarousel/Herocarousel.component";
const DefaultLayout = (props) => {
    return (
    <>
    <Navbar/>
    <Herocarousel />
    {props.children}
    </>
    )
};
export default DefaultLayout;