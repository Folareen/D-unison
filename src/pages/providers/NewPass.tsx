import "../../assets/css/login.css";
import forgot from "../../assets/setpass.png";
import forgot_pc from "../../assets/setpass-pc.png";
import { FaEye } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
const NewPass = () => {
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
        <div className="login-top-txt">Enter your new password</div>
        <div className="wel-bdy">
          This is the last step in recovering your password.
        </div>

        <form action="" className="aut-form">
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
                type="Confirm Password"
                className="inv-inp"
                placeholder="***********"
              />
            </div>
            <FaEye />
          </div>
          <Link to="/login"><button className="log-btn">SUBMIT</button></Link>
        </form>
      </div>
      <div className=""></div>


      <div className=" right-login-box d-flex justify-content-center align-items-center">

        <div className="rounded-circle p-2 mx-4 d-flex justify-content-center align-items-center " style={{ background: 'linear-gradient(#444CE7CF, #00000000)', width: '500px', height: '500px' }}>
          <img src={forgot_pc} style={{ width: '350px', height: '350px', borderRadius: '' }} className="img-fluid" alt="Login" />
        </div>

      </div>

    </div>
  );
};

export default NewPass;
