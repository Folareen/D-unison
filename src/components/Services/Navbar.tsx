import { AiOutlineSetting } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { LuMessageSquareDashed } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import user_logo from "../../assets/user_logo.png"

const Navbar = ({ handleIsClicked }) => {
  return (
    <>
    

      <div className="d-none d-lg-block">
      <div className="navbar-container flex ">
      

      <IoMenu className="cls-icon " onClick={handleIsClicked} />

      <div className="icons-box flex">
        <div className="each-icon flex">
          <GoBell />
          <div className="counter-box flex">21</div>
        </div>
        <div className="each-icon flex">
          <LuMessageSquareDashed />
          <div className="counter-box flex">53</div>
        </div>
        <div
          className="each-icon flex"
          style={{ backgroundColor: "rgba(94, 108, 147, 0.15)" }}
        >
          <FaStar />
          <div
            className="counter-box flex"
            style={{ backgroundColor: "#5E6C93" }}
          >
            15
          </div>
        </div>
        <div
          className="each-icon  flex"
          style={{
            color: "#FF5B5B",
            backgroundColor: "rgba(255, 91, 91, 0.15)",
          }}
        >
          <AiOutlineSetting />
          <div
            className="counter-box flex"
            style={{ backgroundColor: "#FF5B5B" }}
          >
            19
          </div>
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

      <div className="d-lg-none">
      <div className="container bg-white" style={{borderBottomLeftRadius:'2rem', borderBottomRightRadius:'2rem'}}>
              <div className="row">
                <div className="col-3 ">
                  <img src={user_logo} style={{height:'80px'}}/>


                </div>
                <div className="col-7">
                  <p className="text-left mt-4" style={{fontSize:'16px'}}>Hello <span style={{fontWeight:'700'}}>Samantha</span></p>

                </div>

                <div className="col-2">
                <div className="card shadow-lg text-center mt-3" style={{ width: 'fit-content', backgroundColor:'white' }}>
            <div className="card-body p-2">
                <IoMenu className="cls-icon" color="blue" onClick={handleIsClicked} />
            </div>
        </div>

                </div>

              </div>

            </div>
      </div>
    </>
  );
};

export default Navbar;
