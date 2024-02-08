import "../../assets/css/login.css";
import forgot from "../../assets/forgot.png";
import forgot_pc from "../../assets/forgot-pc.png";
import { FaRegCalendarDays, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";
const Forgot = () => {
  return (
    <div className="login-container flex">
      <div className="col-md-6 d-md-none  p-0 " style={{ backgroundColor: '' }}>
        <div className="text-center">
          <img src={forgot} alt="Login image-fluid m" className=" img-fluid rounded-circle" style={{
            objectFit: 'cover', objectPosition: 'left', zIndex: -1, marginTop: '', maxWidth: '70%', // Set the maximum width of the image
            maxHeight: '309px', marginBottom: ''
          }} />

        </div>
        <div className="text-center">

        </div>
      </div>
      <div className="left-login-box">
        <div className="login-top-txt">Forgot your password?</div>
        <div className="wel-bdy">
          Enter your Email and get OTP to verification.
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

          <Link to="/newpass"><button className="log-btn">GET OTP</button></Link>
        </form>
      </div>

      <div className=" right-login-box d-flex justify-content-center align-items-center">

        <div className="rounded-circle p-2 d-flex justify-content-center align-items-center " style={{ background: 'linear-gradient(#444CE7CF, #00000000)', width: '500px', height: '500px' }}>
          <img src={forgot_pc} style={{ width: '350px', height: '350px', borderRadius: '' }} className="img-fluid" alt="Login" />
        </div>

      </div>

    </div>
  );
};

export default Forgot;
