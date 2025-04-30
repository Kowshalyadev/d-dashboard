// src/App.jsx
import React, { useState } from "react";
import MainLayout from "./componentes/Layout";
import Analytics from "./componentes/Analytics";
import Navbar from "./componentes/navbar";
import Dashboard from "./componentes/Dashboard";
import Activity from "./componentes/activity";
import Profile from "./componentes/Profile";
import Connect from "./componentes/conncet";
import Dealroom from "./componentes/Dealroom";
import Setting from "./componentes/setting";

function App() {
  const [activePage, setActivePage] = useState("analytics"); // Default

  return (
    <MainLayout activePage={activePage} setActivePage={setActivePage}>
      <Navbar pageTitle={activePage} /> {/* Pass activePage as pageTitle */}
      
      {activePage === "dashboard" && <Dashboard />}
      {activePage === "analytics" && <Analytics />}
      {activePage === "activity" && <Activity />}
      {activePage === "profile" && <Profile />}
      {activePage === "connect" && <Connect />}
      {activePage === "dealroom" && <Dealroom />}
      {activePage === "setting" && <Setting />}
      
      {/* Add other pages here */}
    </MainLayout>
  );
}

export default App;
