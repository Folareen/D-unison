import { AiOutlineSetting } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { LuMessageSquareDashed } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const Navbar = ({ handleIsClicked }) => {
  return (
    <>
      <div className="navbar-container flex">
        <IoMenu className="cls-icon" onClick={handleIsClicked} />

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
    </>
  );
};

export default Navbar;
