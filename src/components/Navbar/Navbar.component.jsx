import React from "react";
import {BiChevronRight, BiMenu, BiChevronDown} from "react-icons/bi";
import {ImSearch} from "react-icons/im";

const NavSm = () => {
    return (
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold" >It All Starts Here !</h3>
                <span className="text-gray-400 text-xs flex items-center">Chennai
                    <BiChevronRight />
                </span>
            </div>
            <div className="w-8 h-8">
                <ImSearch className="w-full h-full"/>
            </div>
        </div>
        </>
    )
};
const NavMd = () => {
    return (
        <>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <ImSearch/>
            <input type="search" 
            className="w-full bg-transparent border-none focus:outline-none" 
            placeholder="Search for events, movies, sports, activities and plays" />
        </div>
        </>
    )
};
const NavLg = () => {
    return (
        <>
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center w-1/2 gap-3">
                <div className="w-12 h-12">
                    <img 
                    src="https://imgs.search.brave.com/0oXOwL0IlA_ZRJBngGWHs94hau6EM2EeI4OJKyZmiAs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzIwMTA5MTgucG5n" 
                    alt="Book My Show"
                    className="w-full h-full" />
                </div>
                <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                    <ImSearch/>
                    <input type="search" 
                    className="w-full bg-transparent border-none focus:outline-none" 
                    placeholder="Search for events, movies, sports, activities and plays" />
                </div>
            </div>
            <div className="flex items-center gap-3">
            <span className="text-gray-200 text-xs flex items-center hover:text-white cursor-pointer ">Chennai
                <BiChevronDown />
            </span>
            <button className="text-white bg-red-600 rounded text-sm px-2 py-1">
                Sign in
            </button>
            <div className="h-8 w-8 text-white">
            <BiMenu className="w-full h-full"/>
            </div>
            </div>
        </div>
        </>
    )
};
const Navbar = () => {
    return (
    <>
    <nav className="bg-BookMyShow-700 p-4">
        <div className="md:hidden">{/*Mobile Devices*/}
            <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">{/*Tablet */}
            <NavMd />
        </div>
        <div className="hidden lg:flex">{/*Desktop */}
            <NavLg />
        </div>
    </nav>
    </>
    );
};

export default Navbar;