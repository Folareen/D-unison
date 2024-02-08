import "../../../assets/css/login.css";
import { FaRegCalendarDays, FaEye } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import login from "../../../assets/login.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container flex">

      <div className="col-md-6 d-md-none  p-0 " style={{ backgroundColor: '' }}>
        <div className="text-center">
          <img src={login} alt="Login image-fluid m" className=" img-fluid rounded-circle" style={{
            backgroundColor: 'rgba(64, 123, 255, 0.2)', objectFit: 'cover', objectPosition: 'left', zIndex: -1, marginTop: '', maxWidth: '60%', // Set the maximum width of the image
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



        <div className="text-center mt-3">
          <div className="d-flex align-items-center mx-1">
            <hr className="flex-grow-1" style={{ borderTop: '1px solid #000', margin: '0 15px', width: '20px' }} />
            <p className="mb-0 login-text">Welcome to D-unison</p>
            <hr className="flex-grow-1" style={{ borderTop: '1px solid #000', margin: '0 15px', width: '20px' }} />
          </div>
        </div>

        <form action="" className="aut-form">
          <div className="innp-labal-box log-inp aut-inp ">
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
            <div className="link-forgot">Forgot Password?</div>
          </div>
          <Link to="/dashboard"><button className="log-btn">LOG IN</button></Link>
          <div className="dont-have">
            Don’t have account?
            <span className="link-forgot"> <a href="/user/signup">Create an account</a></span>
          </div>
        </form>
      </div>


      <div className=" right-login-box d-flex justify-content-center align-items-center">

        <div className="rounded-circle p-2 " style={{ background: 'linear-gradient(#444CE7CF, #00000000)' }}>
          <img src={login} style={{ width: '400px', height: '400px', borderRadius: '50%' }} className="img-fluid" alt="Login" />
        </div>

      </div>



    </div>
  );
};

export default Login;