import { NavLink } from "react-router-dom";
import "../../styles/layout.css";
import { IoMdClose } from "react-icons/io";
import { LiaFileInvoiceSolid, LiaLifeRing } from "react-icons/lia";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoBagRemoveOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { IoHeadset } from "react-icons/io5";
import { LuGift } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";

import "./Sidebar.css"
import {
  IoMenu,
  IoCalendarClear,
  IoChatbubbles,
  IoSettings,
} from "react-icons/io5";
import {
  FaAddressBook,
  FaStar,
  FaFileInvoiceDollar,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import { useState } from "react";
import { FaGift } from "react-icons/fa6";
const Sidebar = ({ isClicked, handleIsClose }) => {
  const [isServiceDrop, setIsServiceDrop] = useState(false);
  const [isInvoiceDrop, setIsInvoiceDrop] = useState(false);
  const [isAccDrop, setIsAccDrop] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const handleIsSmall = () => {
    setIsSmall(!isSmall);
  };

  const handleIsAccDrop = () => {
    setIsAccDrop(!isAccDrop);
  };
  const handleIsInvoiceDrop = () => {
    setIsInvoiceDrop(!isInvoiceDrop);
  };
  const handleIsSerDrop = () => {
    setIsServiceDrop(!isServiceDrop);
  };
  return (
    <div
      className={`${isSmall
        ? `small-sidber`
        : isClicked
          ? `sidebar-container`
          : "small-sidber"
        }
  }`}
    >
      <div className="header-sidebar-box d-flex ">
        <img
          src="/images/dunlogo.png"
          alt=""
          className={isSmall ? `niln` : ""}
        />
        <div className="name-im">
          <img
            src="images/duname.png"
            alt=""
            className={isSmall ? `niln` : ""}
          />
        </div>
        <IoMenu className="lo-icon" onClick={handleIsSmall} />
        <IoMdClose className="cls-icon" onClick={handleIsClose} />
      </div>
      <div className="menu-main-box">
        <div className={isSmall ? `niln ` : "ma-txt"}></div>
        <div className="all-menu">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">

              <RxDashboard className="nav-con" />
              <span className={isSmall ? `niln` : ""}>Dashboard</span>
            </div>
          </NavLink>

          <NavLink
            to="/user/orders"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">
              <IoBagRemoveOutline className="nav-con" />

              <span className={isSmall ? `niln` : ""}>Orders</span>
              <span className="" style={{
                backgroundColor: '#FFCC91',
                borderRadius: '50%',
                padding: '0.2em 0.5em',
                color: 'black',
                fontWeight: 'bold',
              }}>
                4
              </span>
            </div>
          </NavLink>


          <NavLink
            to="/user/invoice"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">

              <LiaFileInvoiceSolid className="nav-con" />

              <span className={isSmall ? `niln` : ""}>Invoice</span>
            </div>
          </NavLink>

          <NavLink
            to="/user/upload-service"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">

              <IoEyeOutline className="nav-con" />

              <span className={isSmall ? `niln` : ""}>Post a service</span>
            </div>
          </NavLink>

          <NavLink
            to="/user/chats"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">
              <IoChatbubbleEllipsesOutline className="nav-con" />
              <span className={isSmall ? `niln` : ""}>Chat</span>
              <span className="" style={{
                backgroundColor: '#FFCC91',
                borderRadius: '50%',
                padding: '0.2em 0.5em',
                color: 'black',
                fontWeight: 'bold',
              }}>
                4
              </span>
            </div>
          </NavLink>

          <NavLink
            to="/user/ratings"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">
              <CiStar className="nav-con" />
              <span className={isSmall ? `niln` : ""}>My Ratings</span>
            </div>

          </NavLink>


          <NavLink
            to="/user/settings"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">
              <IoSettings className="nav-con" />
              <span className={isSmall ? `niln` : ""}>Account Settings</span>
            </div>
          </NavLink>
        </div>

        <div className="text-left side-support" style={{ marginTop: '5rem' }}>
          <button className="btn btn-primary" style={{ width: '200px', height: '40px', backgroundColor: 'rgba(94, 99, 102, 0.10)', borderRadius: '.8rem', borderColor: 'rgba(94, 99, 102, 0.10)', color: '#1C1D22' }}>
            <IoHeadset className="" size={25} /><span style={{ fontSize: '14px', marginLeft: '.9rem' }}>Contact support</span>
          </button>
        </div>











      </div>
    </div>
  );
};

export default Sidebar;
