import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs"; // Three dots icon
import { MdDashboard } from "react-icons/md"; // Center icon for mobile (example)

function Navbar({ pageTitle }) {
  return (
    <div className="bg-[#1E1E1E] h-16 flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50 w-full">

      {/* Left side (Desktop): Logo + Company Name */}
      <div className="hidden md:flex items-center space-x-3">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/056/329/404/small/the-logo-for-a-company-called-v-vector.jpg"
          alt="Vertxlabs"
          className="h-10 rounded-full"
        />
        <span className="text-white font-bold text-lg ml-2">
          Vertxlabs, Inc
        </span>
      </div>

      {/* Center (Both): Page title for desktop, Icon for mobile */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        {/* Desktop title */}
        <div className="hidden md:block text-white font-bold text-lg md:text-xl capitalize">
          {pageTitle}
        </div>
        {/* Mobile icon */}
        <div className="block md:hidden text-white text-2xl">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/056/329/404/small/the-logo-for-a-company-called-v-vector.jpg"
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover"
        />
        </div>
      </div>

      {/* Left side (Mobile): Profile Photo */}
      <div className="flex md:hidden items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHkqJXrylYd2gYO76VniLvPI32rkvamZPaQ&s"
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>

      {/* Right side (Desktop): Buttons */}
      <div className="hidden md:flex gap-4 ml-auto">
        <button className="text-white hover:bg-gray-700 px-4 py-2 rounded transition">
          Activity
        </button>
        <button className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition">
          Log out
        </button>
      </div>

      {/* Right side (Mobile): Three Dots */}
      <div className="flex md:hidden items-center">
        <BsThreeDotsVertical className="text-white text-2xl" />
      </div>

    </div>
  );
}

export default Navbar;
