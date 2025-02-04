import React, { useState } from "react";
import logo from "../assets/images/netflix.png";
import prof from "../assets/images/prof.png";
import { FaBell, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

export default function Navbar() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent text-white fixed top-0 w-full z-50">
      <div className=" flex items-center">
        <img src={logo} alt="netflix logo" className="h-16 w-auto" />

        <div>
          <button
            className="md:hidden text-white text-large relative ml-4"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 ml-8 text-sm font-light">
          <li className=" cursor-pointer">Home</li>
          <li className=" cursor-pointer">Series</li>
          <li className=" cursor-pointer">Films</li>
          <li className=" cursor-pointer">News&Popular</li>
          <li className=" cursor-pointer">My List</li>
          <li className=" cursor-pointer">Browse by Languages</li>
        </ul>
      </div>

      <div className=" flex items-center space-x-6">
        <FaSearch className="h-6 w-6 cursor-pointer" />
        <span className="text-sm font-medium hover:bg-gray-400 cursor-pointer md:block">
          Children
        </span>
        <FaBell className=" h-6 w-6 cursor-pointer" />

        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleDropDown}
          >
            <img src={prof} alt="Profile" className=" h-9 w-9" />
            <MdArrowDropDown className=" h-6 w-6" />
          </div>

          {isDropDownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg text-white">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Profile 1
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Profile 2
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Kids
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Manage Profiles
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Account
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Help Center
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Sign Out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className=" absolute top-14 left-4 bg-opacity-90 rounded-lg z-40 bg-black shadow-lg ">
          <ul className="space-y-4 text-center">
            <li className=" cursor-pointer hover:bg-gray-700 p-2 rounded">
              Home
            </li>
            <li className=" cursor-pointer  hover:bg-gray-700 p-2 rounded">
              Series
            </li>
            <li className=" cursor-pointer hover:bg-gray-700 p-2 rounded">
              Films
            </li>
            <li className=" cursor-pointer hover:bg-gray-700 p-2 rounded">
              News&Popular
            </li>
            <li className=" cursor-pointer hover:bg-gray-700 p-2 rounded">
              My List
            </li>
            <li className=" cursor-pointer hover:bg-gray-700 p-2 rounded">
              Browse by Languages
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
