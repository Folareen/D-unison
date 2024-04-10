import { NavLink, useLocation } from "react-router-dom";
import { IoIosClose, IoIosSpeedometer, IoMdClose } from "react-icons/io";
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
  FaChevronUp,
} from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import { useState } from "react";
import dunlogo from '../../assets/images/dunlogo.png'
import { AiFillDashboard } from "react-icons/ai";
import { BsGridFill } from "react-icons/bs";

const Sidebar = ({ showSidebar, setShowSidebar }: { showSidebar: boolean, setShowSidebar: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [isServiceDrop, setIsServiceDrop] = useState(false);
  const [isInvoiceDrop, setIsInvoiceDrop] = useState(false);
  const [isAccDrop, setIsAccDrop] = useState(false);

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
      className={`sidebar-container ${!showSidebar && 'hide-sidebar'}`}
    >
      <div className="header-sidebar-box d-flex ">
        <img
          src={dunlogo}
          alt=""
        />
        <h1 className="">
          D-unison
        </h1>
        {/* <IoMenu className="lo-icon" onClick={handleIsSmall} /> */}
        <button onClick={() => {
          setShowSidebar(false)
        }} className="sidebar-btn">
          <IoIosClose size={28} />
        </button>
      </div>
      <div className="menu-main-box">
        <div className="all-menu">
          <NavLink
            to="/providers/dashboard"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">
              <AiFillDashboard className="nav-con" />
              <span className='' >Dashboard</span>
            </div>
          </NavLink>
          <div className="drop-container">
            <div className={"menu-tab flex"} onClick={handleIsSerDrop}>
              <div className="icon-drop flex">
                <BsGridFill className="nav-con" />
                <span className={''}>Services</span>
              </div>
              {isServiceDrop ? (
                <FaChevronUp className="icon-down" />
              ) : (
                <FaChevronDown className="icon-down" />
              )}
            </div>
            {isServiceDrop && (
              <div className="dro-down-bx">
                <NavLink
                  to="/providers/my-service"
                  className={({ isActive }) =>
                    isActive ? "active-link menu-tab flex" : "menu-tab flex"
                  }
                >
                  <div className="drop-item">My Service</div>
                </NavLink>
                <NavLink to="/providers/add-service" className={({ isActive }) =>
                  isActive ? "active-link menu-tab flex" : "menu-tab flex"
                }>
                  <div className="drop-item">Add Service</div>
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/providers/orders"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">
              <IoCalendarClear className="nav-con" />
              <span className={''}>Orders</span>
            </div>
          </NavLink>
          <NavLink
            to="/providers/chat"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">
              <IoChatbubbles className="nav-con" />
              <span className={''}>Chat</span>
            </div>
          </NavLink>
          <NavLink
            to="/providers/customers"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">
              <FaAddressBook className="nav-con" />
              <span className={''}>Customers</span>
            </div>

          </NavLink>
          <NavLink
            to="/providers/my-rating"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">
              <FaStar className="nav-con" />
              <span className={''}>My Rating</span>
            </div>

          </NavLink>

          <div className="drop-container">
            <div className={"menu-tab flex"} onClick={handleIsInvoiceDrop}>
              <div className="icon-drop flex">
                <FaFileInvoiceDollar className="nav-con" />
                <span className={''}>Invoice</span>
              </div>
              {isInvoiceDrop ? (
                <FaChevronUp className="icon-down" />
              ) : (
                <FaChevronDown className="icon-down" />
              )}
            </div>
            {isInvoiceDrop && (
              <div className="dro-down-bx">
                <NavLink
                  to="/providers/my-invoices"
                  className={({ isActive }) =>
                    isActive ? "active-link menu-tab flex" : "menu-tab flex"
                  }
                >
                  <div className="drop-item">My Invoices</div>
                </NavLink>
                <NavLink to="/providers/create-invoice" className={({ isActive }) =>
                  isActive ? "active-link menu-tab flex" : "menu-tab flex"
                }>
                  <div className="drop-item">Create invoice</div>
                </NavLink>
              </div>
            )}
          </div>


          <div className="drop-container">
            <div className={"menu-tab flex"} onClick={handleIsAccDrop}>
              <div className="icon-drop flex">
                <BsGridFill className="nav-con" />
                <span className={''}>Accounting</span>
              </div>
              {isAccDrop ? (
                <FaChevronUp className="icon-down" />
              ) : (
                <FaChevronDown className="icon-down" />
              )}
            </div>
            {isAccDrop && (
              <div className="dro-down-bx">
                <NavLink
                  to="/providers/accounting-dashboard"
                  className={({ isActive }) =>
                    isActive ? "active-link menu-tab flex" : "menu-tab flex"
                  }
                >
                  <div className="drop-item">Dashboard</div>
                </NavLink>
                <NavLink to="/providers/income" className={({ isActive }) =>
                  isActive ? "active-link menu-tab flex" : "menu-tab flex"
                }>
                  <div className="drop-item">Income</div>
                </NavLink>
                <NavLink to="/providers/expenses" className={({ isActive }) =>
                  isActive ? "active-link menu-tab flex" : "menu-tab flex"
                }>
                  <div className="drop-item">Expenses</div>
                </NavLink>
                <NavLink to="/providers/report" className={({ isActive }) =>
                  isActive ? "active-link menu-tab flex" : "menu-tab flex"
                }>
                  <div className="drop-item">Report</div>
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/providers/settings"
            className={({ isActive }) =>
              isActive ? "active-link menu-tab flex" : "menu-tab flex"
            }
          >
            <div className="icon-drop flex">
              <IoSettings className="nav-con" />
              <span className={''}>Settings</span>
            </div>
          </NavLink>
        </div>
        <div className={"verify-continer flex mt-5"}>
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
