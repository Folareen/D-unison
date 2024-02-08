import React, { useState } from "react";
import Navbar from "./Users/Navbar";
import Sidebar from "./Users/Sidebar";
import "../assets/css/layout.css";

const UserLayout = ({ children }) => {
  const [isClicked, SetIsClicked] = useState(false);
  const handleIsClicked = () => {
    SetIsClicked(true);
  };
  const handleIsClose = () => {
    SetIsClicked(false);
  };
  return (
    <div className="layout-container">
      <Sidebar isClicked={isClicked} handleIsClose={handleIsClose} />
      <div className="nav-main-box">
        <Navbar handleIsClicked={handleIsClicked} />
        {children}
      </div>
    </div>
  );
};

export default UserLayout;