import { AiOutlineSetting } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { LuMessageSquareDashed } from "react-icons/lu";
import { IoMenu, IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import user_logo from "../../assets/images/user_logo.png"

const Navbar = ({ showSidebar, setShowSidebar, page }: { showSidebar: boolean, setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>, page: string }) => {
  return (
    <>
      <div className="desktop-navbar">
        <div className="navbar-container flex justify-content-between">
          <div className="nav-search">
            <input placeholder="Search..." />
            <button>
              <IoSearch color="white" />
            </button>
          </div>

          <div className="flex navbar-container-inner">
            <div className="icons-box flex">
              <div className="each-icon flex">
                <GoBell />
                <p className="counter-box flex">21</p>
              </div>
              <div className="each-icon flex">
                <LuMessageSquareDashed />
                <p className="counter-box flex">53</p>
              </div>
              <div
                className="each-icon flex"
                style={{ backgroundColor: "rgba(94, 108, 147, 0.15)" }}
              >
                <FaStar />
                <p
                  className="counter-box flex"
                  style={{ backgroundColor: "#5E6C93" }}
                >
                  15
                </p>
              </div>
              <div
                className="each-icon  flex"
                style={{
                  color: "#FF5B5B",
                  backgroundColor: "rgba(255, 91, 91, 0.15)",
                }}
              >
                <AiOutlineSetting />
                <p
                  className="counter-box flex"
                  style={{ backgroundColor: "#FF5B5B" }}
                >
                  19
                </p>
              </div>
            </div>

            <div className="nav-profile flex">
              <div
                className="welcome"
                style={{
                  color: "#464255",
                }}
              >
                Hello,{" "}
                <span
                  style={{
                    fontWeight: "600",
                  }}
                >
                  Samantha
                </span>
              </div>

              <div className="profile-pic">
                <img src="/images/very.png" alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="mobile-navbar navbar-container" >
        <button onClick={() => {
          setShowSidebar(true)
        }} className="">
          <IoMenu color="black" />
        </button>
        <h1>
          {page}
        </h1>
        <img src={user_logo} />
      </div >

    </>
  );
};

export default Navbar;
