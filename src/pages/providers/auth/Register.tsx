import "../../assets/css/login.css";
import { FaEye } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
const Register = () => {
  return (
    <div className="login-container flex">
      <div className="left-login-box">
        <div className="login-top-txt">Create your account</div>
        <div className="wel-bdy">Start Offering Services</div>
        <form action="" className="aut-form rei-aut">
          <div className="innp-labal-box aut-inp ">
            <label htmlFor="" className="label-fil">
              Brand Name
            </label>
            <input type="email" className="inv-inp " placeholder="Typing |" />
          </div>
          <div className="avail">Brand name is Available </div>
          <div className="innp-labal-box aut-inp ">
            <label htmlFor="" className="label-fil">
              First Name
            </label>
            <input type="email" className="inv-inp " placeholder="Typing |" />
          </div>
          <div className="innp-labal-box aut-inp ">
            <label htmlFor="" className="label-fil">
              Last Name
            </label>
            <input type="email" className="inv-inp " placeholder="Typing |" />
          </div>
          <div className="innp-labal-box aut-inp ">
            <label htmlFor="" className="label-fil">
              Email
            </label>
            <input
              type="email"
              className="inv-inp "
              placeholder="Your Email Address "
            />
          </div>
          <div className="innp-labal-box aut-inp ">
            <label htmlFor="" className="label-fil">
              Phone Number
            </label>
            <input
              type="email"
              className="inv-inp "
              placeholder="+2348023456789"
            />
          </div>
          <div className="innp-labal-box flex gap-2 mt-2 wid-aut">
            <CiLock />
            <div className="inp-bx-con aut-inp">
              <label htmlFor="" className="label-fil">
                Password
              </label>
              <input
                type="password"
                className="inv-inp"
                placeholder="***********"
              />
            </div>
            <FaEye />
          </div>
          <div className="innp-labal-box flex gap-2 mt-2 wid-aut">
            <CiLock />
            <div className="inp-bx-con aut-inp">
              <label htmlFor="" className="label-fil">
                Confirm Password
              </label>
              <input
                type="password"
                className="inv-inp"
                placeholder="***********"
              />
            </div>
            <FaEye />
          </div>
          <div className="warn-pass">
            Password must be at least <span>8 Characters</span> and must contain
            at least a <span>Capital Letter</span>, a<span> Number</span> and a{" "}
            <span>Special Character</span>.
          </div>

          <div className="rember-forgot flex agree-bx">
            <div className="remb-box flex gap-1">
              <input type="checkbox" name="" id="" />
              <div className="aree-txt">
                I hereby accept D-unison <span>T&C</span>
              </div>
            </div>
          </div>
          <button className="log-btn res-btn">Register</button>
          <div className="dont-have">
            You have account?
            <span className="link-forgot"> Login now</span>
          </div>
        </form>
      </div>
      <div className="right-login-box"></div>
    </div>
  );
};

export default Register;
