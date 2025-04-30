import React, { useState } from "react";
import { FaLinkedin, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi"; // More icon

function Profile() {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Portfolio", "Experience", "Media"];

  return (
    <div className="flex">
      {/* Sidebar placeholder */}
      {/* <Sidebar /> */}

      {/* Main content */}
      <div className="pt-20 pb-10 pl-4 pr-2 md:pl-6 md:pr-10 bg-black min-h-screen text-white w-full">

        {/* Tabs Navbar */}
        <div className="flex items-center overflow-x-auto border-b border-gray-700 mb-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm md:text-base font-semibold whitespace-nowrap ${
                  activeTab === tab
                    ? "border-b-2 border-white text-white"
                    : "text-gray-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2 pr-2">
            <p className="text-gray-400 text-sm md:text-base">More</p>
            {/* <FiMoreHorizontal className="w-6 h-6 text-gray-400" /> */}
          </div>
        </div>

        {/* Content based on Active Tab */}
        {activeTab === "Overview" && (
          <>
            {/* Profile Section */}
            <div className="bg-[#1E1E1E] rounded-lg p-6 mb-8 min-h-[200px] md:min-h-[300px]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 h-full">
                <div className="flex flex-col items-center md:flex-row gap-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyb-20ihVRPmRieKEtuyFXoeqp6puC2yuHY7xUFjtCY9ukoNRj7MyQQHKf3Iu5UaGhERM&usqp=CAU"
                    alt="Profile"
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold">Mr A</h2>
                    <p className="text-gray-400">Co-Founder & CEO @ Vertx</p>
                    <span className="inline-block mt-2 bg-white text-black text-xs px-2 py-1 rounded">
                      Entrepreneur
                    </span>

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-start gap-4 mt-4">
                      <a href="#"><FaLinkedin className="w-6 h-6" /></a>
                      <FaTimes className="w-6 h-6" />
                      <MdEmail className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founded Companies & Experience */}
            <div className="flex flex-col md:flex-row gap-6">
              
              {/* Founded Companies */}
              <div className="flex-1 bg-[#1E1E1E] rounded-lg p-6 max-h-80 md:max-h-none overflow-y-auto md:overflow-visible">
                <h3 className="text-lg font-bold mb-6">Founded Companies</h3>
                <h1 className="text-5xl font-bold mb-6">02</h1>
                <div className="space-y-4">
                  {/* Company 1 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src="https://vcs.ind.in/wp-content/uploads/2024/08/Logo-removebg-preview.png" alt="Company Logo" className="w-10 h-10 rounded" />
                      <div>
                        <h4 className="font-bold flex items-center gap-2">
                          Vertx
                          <span className="bg-green-600 text-xs px-2 py-1 rounded">CEO</span>
                        </h4>
                        <p className="text-gray-400 text-xs">
                          Founded in 2025. in <b>Fintech</b>.
                        </p>
                      </div>
                    </div>
                    <button className="text-blue-500 text-sm">View Profile</button>
                  </div>

                  {/* Company 2 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src="https://w7.pngwing.com/pngs/779/1011/png-transparent-vertex-venture-holdings-venture-capital-investment-management-temasek-holdings-venture-miscellaneous-blue-angle-thumbnail.png" alt="Company Logo" className="w-10 h-10 rounded" />
                      <div>
                        <h4 className="font-bold flex items-center gap-2">
                          Company
                          <span className="bg-blue-600 text-xs px-2 py-1 rounded">Proprietor</span>
                        </h4>
                        <p className="text-gray-400 text-xs">
                          Details/Information like acquired/exit/m&a
                        </p>
                      </div>
                    </div>
                    <button className="text-blue-500 text-sm">View Profile</button>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="flex-1 bg-[#1E1E1E] rounded-lg p-6 max-h-80 md:max-h-none overflow-y-auto md:overflow-visible">
                <h3 className="text-lg font-bold mb-6">Experience</h3>
                <h1 className="text-5xl font-bold mb-6">03</h1>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbbKdecJESfgbruBRP92HQclLKr93nPkOvhg&s" alt="Company Logo" className="w-10 h-10 rounded" />
                        <div>
                          <h4 className="font-bold">Company {item}</h4>
                        </div>
                      </div>
                      <button className="text-blue-500 text-sm">View Profile</button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </>
        )}

        {/* Other Tabs */}
        {activeTab !== "Overview" && (
          <div className="text-center text-xl mt-10">{activeTab} Page Coming Soon</div>
        )}
      </div>
    </div>
  );
}

export default Profile;
