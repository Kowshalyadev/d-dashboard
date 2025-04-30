// src/components/Sidebar.jsx
import React from "react";
import { FaPlus } from "react-icons/fa";
import { MdDashboard, MdNotificationsActive } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { FaGlobeAsia } from "react-icons/fa";
import { LuSettings } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
import { AiFillSetting } from "react-icons/ai";

function Sidebar({ setActivePage }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-row w-64 bg-[#2A2A2A] min-h-screen fixed left-0 top-10 py-6 px-4 z-50">
        {/* Top Section - Profile Image and + Button Side by Side */}
        <div className="flex flex-col items-center justify-between space-x-4 mt-5 mb-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHkqJXrylYd2gYO76VniLvPI32rkvamZPaQ&s"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <button className="bg-[#2A2A2A] border border-gray-500 p-2 rounded-full hover:bg-gray-700">
            <FaPlus className="text-white" />
          </button>
        </div>

        {/* Bottom Section - Menu Items */}
        <div className="flex flex-col justify-between flex-1">
          <ul className="text-white font-bold space-y-6">
            <li onClick={() => setActivePage("dashboard")} className="hover:bg-blue-500 rounded px-3 py-2 cursor-pointer flex items-center">
              <MdDashboard className="w-5 h-5 mr-3" /> Dashboard
            </li>
            <li onClick={() => setActivePage("analytics")} className="hover:bg-blue-500 rounded px-3 py-2 cursor-pointer flex items-center">
              <SiSimpleanalytics className="w-5 h-5 mr-3" /> Analytics
            </li>
            <li onClick={() => setActivePage("connect")} className="hover:bg-blue-500 rounded px-3 py-2 cursor-pointer flex items-center">
              <FaGlobeAsia className="w-5 h-5 mr-3" /> Connect
            </li>
            <li onClick={() => setActivePage("activity")} className="hover:bg-blue-500 rounded px-3 py-2 cursor-pointer flex items-center">
              <MdNotificationsActive className="w-5 h-5 mr-3" /> Activity
            </li>
            <li onClick={() => setActivePage("dealroom")} className="hover:bg-blue-500 rounded px-3 py-2 cursor-pointer flex items-center">
              <LuSettings className="w-5 h-5 mr-3" /> Dealroom
            </li>
            <li onClick={() => setActivePage("profile")} className="hover:bg-blue-500 rounded px-3 py-2 cursor-pointer flex items-center">
              <ImProfile className="w-5 h-5 mr-3" /> Profile
            </li>
            <li onClick={() => setActivePage("setting")} className="hover:bg-blue-500 rounded px-3 py-2 cursor-pointer flex items-center">
              <AiFillSetting className="w-5 h-5 mr-3" /> Setting
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#2A2A2A] flex justify-around items-center py-2 md:hidden z-50 overflow-y-auto h-20">
        <button onClick={() => setActivePage("dashboard")} className="text-white flex flex-col items-center text-xs">
          <MdDashboard className="w-5 h-5" /> Dashboard
        </button>
        <button onClick={() => setActivePage("analytics")} className="text-white flex flex-col items-center text-xs">
          <SiSimpleanalytics className="w-5 h-5" /> Analytics
        </button>
        <button onClick={() => setActivePage("connect")} className="text-white flex flex-col items-center text-xs">
          <FaGlobeAsia className="w-5 h-5" /> Connect
        </button>
        <button onClick={() => setActivePage("activity")} className="text-white flex flex-col items-center text-xs">
          <MdNotificationsActive className="w-5 h-5" /> Activity
        </button>
        <button onClick={() => setActivePage("dealroom")} className="text-white flex flex-col items-center text-xs">
          <LuSettings className="w-5 h-5" /> Dealroom
        </button>
        <button onClick={() => setActivePage("profile")} className="text-white flex flex-col items-center text-xs">
          <ImProfile className="w-5 h-5" /> Profile
        </button>
      </div>
    </>
  );
}

export default Sidebar;
