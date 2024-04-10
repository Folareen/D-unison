import React, { useState } from "react";
import Navbar from "./Users/Navbar";
import Sidebar from "./Users/Sidebar";
import "../styles/layout.css";

const UserLayout = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleIsClicked = () => {
    setIsClicked(true);
  };
  const handleIsClose = () => {
    setIsClicked(false);
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