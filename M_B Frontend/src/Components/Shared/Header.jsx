import React, { useContext } from "react"
import mainlogo from "../../assets/main-icon.png";
import { FaSearch } from "react-icons/fa";

import map from "../../assets/pin.gif"
import { useLocation } from "../../Context/locationContext";


const Header = () => {

const {location, loading, error} = useLocation();
    
    return (
        <div className="w-full text-sm bg-white">
            {/* Top Navbar */}
            <div className="px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex  justify-between items-center py-3">

                    {/* left Part */}
                    <div className="flex items-center space-x-4">
                        <img src={mainlogo} alt="Movie Booking App Logo" className="h-12 object-contain cursor-pointer" />
                        <div className="relative">
                            <input type="text"
                                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                                className="border border-gray-300 rounded px-4 py-1.5 w-105 text-sm outline-none"
                            />
                            <FaSearch className="absolute right-2 top-2.5 text-gray-500" />
                        </div>
                    </div>

                    {/* Right Part */}
                    <div className="flex items-center space-x-6">
                        <div className="text-sm font-medium cursor-pointer ">
                            {loading && <img src ={map} alt="loading..." className="w-10 h-10" />}
                            {location && <p>{location} &nbsp;▼</p>}
                            {/* Karachi West &nbsp;▼ */}
                        </div>
                        <button className="bg-[#f84464] cursor-pointer text-white px-4 py-1.5 rounded text-sm">
                            Sign in
                        </button>
                    </div>
                </div>


            </div>
            {/* Bottom Navbar */}
            <div className="bg-[#f2f2f2] px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center py-2 text-gray-700">
                    <div className="flex items-center space-x-6 font-medium">
                        <span className="cursor-pointer hover:text-red-500">Movies</span>
                        <span className="cursor-pointer hover:text-red-500">Stream</span>
                        <span className="cursor-pointer hover:text-red-500">Events</span>
                        <span className="cursor-pointer hover:text-red-500">Plays</span>
                        <span className="cursor-pointer hover:text-red-500">Sports</span>
                        <span className="cursor-pointer hover:text-red-500">Activities</span>
                    </div>
                    <div className="flex items-center space-x-6 text-sm">
                        <span className="cursor-pointer hover:underline">ListYourShow</span>
                        <span className="cursor-pointer hover:underline">Corporates</span>
                        <span className="cursor-pointer hover:underline">Offers</span>
                        <span className="cursor-pointer hover:underline">Gift Cards</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header