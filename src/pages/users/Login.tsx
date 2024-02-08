import React, { useState, useContext } from "react";
import login from "../../assets/login.png";
import loginup from "../../assets/login-up.png";
import logindown from "../../assets/login-down.png";
import "../../assets/css/login.css";
import { BsLock } from 'react-icons/bs';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

const Login = () => {
  // let { loginUser } = useContext(AuthContext)
  const loginUser = () => { }
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="vh-100 p-0" style={{ marginTop: '0rem' }}>
      <div className="container-fluid p-0 py-0 mt-0">
        <div className="row">




          <div className="col-md-6 d-md-none  p-0 " style={{ backgroundColor: '' }}>
            <div className="text-center">
              <img src={login} alt="Login image-fluid mt-8" className=" img-fluid rounded-circle" style={{
                backgroundColor: 'rgba(64, 123, 255, 0.2)', objectFit: 'cover', objectPosition: 'left', zIndex: -1, marginTop: '5rem', maxWidth: '60%', // Set the maximum width of the image
                maxHeight: '309px', marginBottom: '.5rem'
              }} />

            </div>
            <div className="text-center">

            </div>
          </div>

          <div className="col-sm-12 col-md-6 text-black">

            <div className="px-5 ms-xl-4">
              <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }}></i>
              <h1 className="h1 fw-bold text-center login-text login-text-top " style={{ marginTop: '1rem' }}>Login to your Account</h1>

            </div>
            <div className='px-1 text-center'>
              <p style={{ color: '#71717A' }} className="login-text">Welcome back! Please login into your account:</p>
            </div>

            <div className="text-center">
              <div className="d-flex align-items-center mx-1">
                <hr className="flex-grow-1" style={{ borderTop: '1px solid #000', margin: '0 40px' }} />
                <p className="mb-0 login-text">Welcome to D-unison</p>
                <hr className="flex-grow-1" style={{ borderTop: '1px solid #000', margin: '0 40px' }} />
              </div>
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-4 pt-5 pt-xl-0 mt-xl-n5">







              <form style={{ width: '100%' }}>



                <div className="d-flex justify-content-center align-items-center">

                  <div className="form-outline login position-relative mb-4 " style={{ width: '30rem' }}>
                    <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="brandField" style={{ fontSize: '.8rem' }}>Email</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg pl-3"  // Added padding to the left
                      placeholder="test@mail.com"
                      style={{ paddingTop: '1.5rem', fontSize: '.8rem', color: '#ABAFB1' }}
                    />
                  </div>

                </div>



                <div className='d-flex justify-content-center align-items-center'>
                  <div className="form-outline position-relative mb-4" style={{ width: '30rem' }}>
                    <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="password" style={{ fontSize: '.8rem' }}>
                      Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text" style={{ backgroundColor: '#fff', borderRight: 0 }}>
                        <BsLock size={20} color="#ABAFB1" /> {/* Padlock icon */}
                      </span>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        className="form-control form-control-lg pl-3"  // Added padding to the left
                        placeholder="********"
                        style={{ paddingTop: '1.5rem', fontSize: '1rem', color: '#ABAFB1', borderLeft: 0 }}
                      />
                      <span className="input-group-text" style={{ backgroundColor: '#fff', borderLeft: 0 }}>
                        {/* Toggle switch */}
                        <button
                          type="button"
                          className="btn btn-link"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <AiFillEyeInvisible size={20} color="#ABAFB1" /> : <AiFillEye size={20} color="#ABAFB1" />}
                        </button>
                      </span>
                    </div>
                  </div>
                </div>














                <div className='d-flex justify-content-center align-items-center'>
                  <div className="form-outline position-relative mb-4" style={{ width: '30rem', marginBottom: '0rem' }}>
                    <div className="pt-1 mb-4 text-center">
                      <button className="btn btn-primary" type="button" style={{ width: '100%' }}>Login</button>

                    </div>
                  </div>
                </div>





                <div className='d-flex justify-content-center align-items-center'>
                  <div className="form-outline position-relative mb-0" style={{ width: '30rem', marginTop: '0rem' }}>
                    <div className='text-center'>
                      <p style={{ color: '#71717A' }}>Don't have an account? <Link to="/user/signup"><a href="#!" className="link-info">Signup</a></Link></p>

                    </div>
                  </div>
                </div>


              </form>

            </div>

          </div>


          <div className="col-md-6 .d-sm-none .d-md-block d-none d-sm-block   p-0 " style={{ backgroundColor: '#407BFFB2' }}>
            <div className="text-center">
              <img src={login} alt="Login image-fluid mt-8" className=" img-fluid rounded-circle" style={{
                backgroundColor: 'rgba(64, 123, 255, 0.2)', objectFit: 'cover', objectPosition: 'left', zIndex: -1, marginTop: '5rem', maxWidth: '60%', // Set the maximum width of the image
                maxHeight: '20%', marginBottom: '.5rem'
              }} />

            </div>
            <div className="text-center">
              <p style={{ color: 'white', fontSize: '1rem', marginBottom: '.1rem' }} >Connect with any device.</p>
              <p style={{ color: '#E0EAFF', fontSize: '.9rem' }}>Everything you need is an internet connection.</p>

            </div>
          </div>

          <div className="col-12 d-none">
            <div>
              <img src={logindown} className="mb-0" />
            </div>

          </div>




        </div>
      </div>
    </section>
  );
};

export default Login;
