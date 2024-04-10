// import "../../../styles/auth.css";
import { FaRegCalendarDays, FaEye } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import signup from "../../../assets/images/signup.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="auth-container flex">

      <div className="col-md-6 d-md-none  p-0 " style={{ backgroundColor: '' }}>
        <div className="text-center">
          <img src={signup} alt="auth image-fluid m" className=" img-fluid rounded-circle" style={{
            backgroundColor: 'rgba(64, 123, 255, 0.2)', objectFit: 'cover', objectPosition: 'left', zIndex: -1, marginTop: '', maxWidth: '60%', // Set the maximum width of the image
            maxHeight: '309px', marginBottom: ''
          }} />

        </div>
        <div className="text-center">

        </div>
      </div>

      <div className="left-auth-box">
        <div className="auth-top-txt mt-3">Create your Account</div>
        <div className="wel-bdy">
          Start offering services
        </div>


        <form action="" className="aut-form" style={{ marginTop: '18px' }}>
          <div className="innp-labal-box aut-inp ">
            <label htmlFor="" className="label-fil">
              First Name
            </label>
            <input
              type="text"
              className="inv-inp "
              placeholder="Sammy"
            />
          </div>
          <div className="innp-labal-box aut-inp ">
            <label htmlFor="" className="label-fil">
              Last Name
            </label>
            <input
              type="text"
              className="inv-inp "
              placeholder="Crown "
            />
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
                ConfirmPassword
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

          <div className='text-center'>
            <p style={{ fontSize: '.8rem', color: '#ABAFB1' }}>Password must be at least <span style={{ color: '#32936F' }}>8 Characters</span> and must contain at least a <span style={{ color: '#ABAFB1' }}>Capital Letter, </span> a Number and a Special Character.</p>

          </div>

          <div className=" flex gap-1 d-flex justify-content-center align-items-center">
            <input type="checkbox" name="" id="" />
            <div className="rem-txt">I hereby accept D-unison T&C</div>
          </div>

          <Link to="/"><button className="log-btn" style={{ marginTop: '20px' }}>Signup</button></Link>

          <div className="dont-have">
            You have an account?
            <span className="link-forgot"><a href="/user/auth" className="" style={{ marginLeft: '3px' }}>LOG IN</a></span>
          </div>
        </form>
      </div>


      <div className=" right-auth-box d-flex justify-content-center align-items-center">

        <div className="rounded-circle p-2 " style={{ background: 'linear-gradient(#444CE7CF, #00000000)' }}>
          <img src={signup} style={{ width: '400px', height: '400px', borderRadius: '50%' }} className="img-fluid" alt="auth" />
        </div>

      </div>



    </div>
  );
};

export default Signup;