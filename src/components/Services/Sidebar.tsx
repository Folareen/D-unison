import { NavLink } from "react-router-dom";
import "../../assets/css/layout.css";
import { IoIosSpeedometer, IoMdClose } from "react-icons/io";
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
const Sidebar = ({ isClicked, handleIsClose }) => {
  const [isServiceDrop, SetIsServiceDrop] = useState(false);
  const [isInvoiceDrop, SetIsInvoiceDrop] = useState(false);
  const [isAccDrop, SetIsAccDrop] = useState(false);
  const [isSmall, SetIsSmall] = useState(false);
  const handleIsSmall = () => {
    SetIsSmall(!isSmall);
  };

  const handleIsAccDrop = () => {
    SetIsAccDrop(!isAccDrop);
  };
  const handleIsInvoiceDrop = () => {
    SetIsInvoiceDrop(!isInvoiceDrop);
  };
  const handleIsSerDrop = () => {
    SetIsServiceDrop(!isServiceDrop);
  };
  return (
    <div
      className={
        isSmall
          ? `small-sidber`
          : isClicked
            ? `sidebar-container`
            : "small-sidber"
      }
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
            to="/service-dash"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">
              <IoIosSpeedometer className="nav-con" />
              <span className={isSmall ? `niln` : ""}>Dashboard</span>
            </div>
          </NavLink>
          <div className="drop-container">
            <div className={"menu-tab flex"} onClick={handleIsSerDrop}>
              <div className="icon-drop flex">
                <MdWindow className="nav-con" />
                <span className={isSmall ? `niln` : ""}>Services</span>
              </div>
              {isServiceDrop ? (
                <FaChevronDown className="icon-down" />
              ) : (
                <FaChevronRight className={isSmall ? `niln` : "icon-down"} />
              )}
            </div>
            {isServiceDrop && (
              <div className="dro-down-bx">
                <NavLink
                  exact
                  to="/all-services"
                  className={({ isActive }) =>
                    isActive ? "active-link menu-tab flex" : "menu-tab flex"
                  }
                >
                  <div className="drop-item">My Service</div>
                </NavLink>
                <NavLink exact to="/add-service" className={({ isActive }) =>
                  isActive ? "active-link menu-tab flex" : "menu-tab flex"
                }>
                  <div className="drop-item">Add Service</div>
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/order-services"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">
              <IoCalendarClear className="nav-con" />
              <span className={isSmall ? `niln` : ""}>Orders</span>
            </div>
          </NavLink>
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">
              <IoChatbubbles className="nav-con" />
              <span className={isSmall ? `niln` : ""}>Chat</span>
            </div>
          </NavLink>
          <NavLink
            to="/customer"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">
              <FaAddressBook className="nav-con" />
              <span className={isSmall ? `niln` : ""}>Customers</span>
            </div>

          </NavLink>
          <NavLink
            to="/myrating"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">
              <FaStar className="nav-con" />
              <span className={isSmall ? `niln` : ""}>My Rating</span>
            </div>

          </NavLink>
          <div className="drop-container">
            <div className={"menu-tab flex"} onClick={handleIsInvoiceDrop}>
              <div className="icon-drop flex">
                <FaFileInvoiceDollar className="nav-con" />
                <span className={isSmall ? `niln` : ""}>Invoice</span>
              </div>
              {isInvoiceDrop ? (
                <FaChevronDown className="icon-down" />
              ) : (
                <FaChevronRight className={isSmall ? `niln` : "icon-down"} />
              )}
            </div>
            {isInvoiceDrop && (
              <div className="dro-down-bx">
                <NavLink
                  exact
                  to="/create-invoice"
                  className={({ isActive }) =>
                    isActive ? "active-link menu-tab flex" : "menu-tab flex"
                  }
                >
                  <div className="drop-item">My Invoices</div>
                </NavLink>
                <NavLink to="/create-invoice" className={({ isActive }) =>
                  isActive ? "active-link menu-tab flex" : "menu-tab flex"
                }>
                  <div className="drop-item">Create invoice</div>
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/accounting"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">
              <MdWindow className="nav-con" />
              <span className={isSmall ? `niln` : ""}>Accounting</span>
            </div>
          </NavLink>

          <NavLink
            to="/acc-setting"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">
              <IoSettings className="nav-con" />
              <span className={isSmall ? `niln` : ""}>Settings</span>
            </div>
          </NavLink>
        </div>
        <div className={isSmall ? `niln` : "verify-continer flex mt-5"}>
          <div className="left-cnt">
            Get more Orders when your freelance Account is Verified
            <div className="very-btn mt-2">Verify My Account</div>
          </div>
          <div className="right-cnt">
            <img src="/images/very.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
