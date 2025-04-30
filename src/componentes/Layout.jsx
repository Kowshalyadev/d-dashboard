// import React, { useState } from 'react';
// import Sidebar from './sidebar';
// import Navbar from './navbar';
// import Content from './Content';

// function Layout() {
//   const [activePage, setActivePage] = useState('Dashboard');

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar */}
//       <Sidebar setActivePage={setActivePage} />

//       {/* Main Content Area */}
//       <div className="flex flex-col flex-1 ml-56">
//         {/* Navbar */}
//         <Navbar pageTitle={activePage} /> {/* <-- pass pageTitle here */}

//         {/* Content */}
//         <div className="flex-1 overflow-auto bg-[#1E1E1E] text-white p-6">
//           <Content activePage={activePage} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Layout;

// src/components/MainLayout.jsx
import React from "react";
import Sidebar from "./Sidebar";

function MainLayout({ activePage, setActivePage, children }) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar setActivePage={setActivePage} />

      {/* Main Content */}
      <div className="flex-1 w-full md:ml-64 p-4 sm:p-6 overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
