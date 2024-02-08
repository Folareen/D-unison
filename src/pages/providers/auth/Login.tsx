import "../../../assets/css/login.css";
import login from "../../../assets/serv-signin.png";
import { FaRegCalendarDays, FaEye } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container flex ">

      <div className="col-md-6 d-md-none  p-0  " style={{ backgroundColor: '' }}>
        <div className="text-center">
          <img src={login} alt="Login image-fluid m" className=" img-fluid rounded-circle" style={{
            objectFit: 'cover', objectPosition: 'left', zIndex: -1, marginTop: '', maxWidth: '70%', // Set the maximum width of the image
            maxHeight: '309px', marginBottom: ''
          }} />

        </div>
        <div className="text-center">

        </div>
      </div>

      <div className="left-login-box">
        <div className="login-top-txt">Login to your Account</div>
        <div className="wel-bdy">
          Welcome back! Please login into your account:
        </div>

        <div className="hr-wel-box welc">
          <hr className="line-hr" />
          <div className="wel-txt-hr">
            Welcome to D-unison Service Provider <br />
            Portal
          </div>
        </div>

        <form action="" className="aut-form">
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

          <div className="rember-forgot flex justify-between">
            <div className="remb-box flex gap-1">
              <input type="checkbox" name="" id="" />
              <div className="rem-txt">Remember me</div>
            </div>
            <div className="link-forgot"><Link to="/forgot">Forgot Password?</Link></div>
          </div>
          <Link to="/service-dash"><button className="log-btn">LOG IN</button></Link>
          <div className="dont-have">
            Don’t have account?
            <Link to="signup"><span className="link-forgot"> Create an account</span></Link>
          </div>
        </form>
      </div>

      <div className=" right-login-box d-flex justify-content-center align-items-center">


        <img src={login} style={{ width: '400px', height: '400px', borderRadius: '' }} className="img-fluid" alt="Login" />


      </div>

    </div>
  );
};

export default Login;
