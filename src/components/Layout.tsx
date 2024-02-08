import Navbar from "./Services/Navbar";
import Sidebar from "./Services/Sidebar";
import "../assets/css/layout.css";
import { useState } from "react";

const Layout = ({ children }) => {
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

export default Layout;
