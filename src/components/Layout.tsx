import Navbar from "./Services/Navbar";
import Sidebar from "./Services/Sidebar";
import "../styles/layout.css";
import React, { useState } from "react";

const Layout = ({ children, page }: { children: React.ReactNode, page: string }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="layout-container">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} page={page} />
      <div className="main-box">
        {children}
      </div>
    </div>
  );
};

export default Layout;
