import React, { useState } from 'react';
import signup from "../../assets/signup.png";
import { BsLock } from 'react-icons/bs';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FaEye } from "react-icons/fa";



const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="vh-100 p-0" style={{ marginTop: '0rem' }}>
      <div className="container-fluid p-0 py-0 mt-0">
        <div className="row">

          <div className="col-5 .d-sm-none .d-md-block d-none d-sm-block px-5  p-0 " style={{ backgroundColor: '#407BFFB2' }}>
            <img src={signup} alt="Login image-fluid mt-8" className=" img-fluid rounded-circle" style={{
              backgroundColor: 'rgba(64, 123, 255, 0.2)', objectFit: 'cover', objectPosition: 'left', zIndex: -1, marginTop: '5rem', maxWidth: '90%', // Set the maximum width of the image
              maxHeight: '50%', marginBottom: '.5rem'
            }} />
            <p style={{ color: 'white', fontSize: '1rem', marginBottom: '.1rem' }} >Join us</p>
            <p style={{ color: '#E0EAFF', fontSize: '.9rem' }}>Just go through the boring process of creating an account.</p>
          </div>



          <div className="col-sm-12 col-md-7 text-black">

            <div className="px-5 ms-xl-4">
              <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }}></i>
              <h1 className="h1 fw-bold text-center " style={{ marginTop: '1rem' }}>Create your account</h1>

            </div>
            <div className='px-1 text-center'>
              <p style={{ color: '#71717A' }}>Start Offering Services</p>
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-4 pt-5 pt-xl-0 mt-xl-n5">



              <form style={{ width: '100%' }}>



                <div className="d-flex justify-content-center align-items-center">

                  <div className="form-outline position-relative mb-4 " style={{ width: '30rem' }}>
                    <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="brandField" style={{ fontSize: '.8rem' }}>Brand name</label>
                    <input
                      type="text"
                      id="brandField"
                      className="form-control form-control-lg pl-3"  // Added padding to the left
                      placeholder="Typing"
                      style={{ paddingTop: '1.5rem', fontSize: '.8rem', color: '#ABAFB1' }}
                    />
                  </div>

                </div>

                <div className='d-flex justify-content-center align-items-center'>
                  <div className="form-outline position-relative mb-4 form-width" style={{ width: '30rem' }}>
                    <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="brandField" style={{ fontSize: '.8rem' }}>First name</label>
                    <input
                      type="text"
                      id="brandField"
                      className="form-control form-control-lg pl-3"  // Added padding to the left
                      placeholder="Typing"
                      style={{ paddingTop: '1.5rem', fontSize: '.8rem', color: '#ABAFB1' }}
                    />
                  </div>

                </div>

                <div className='d-flex justify-content-center align-items-center'>
                  <div className="form-outline position-relative mb-4" style={{ width: '30rem' }}>
                    <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="brandField" style={{ fontSize: '.8rem' }}>Last name</label>
                    <input
                      type="text"
                      id="brandField"
                      className="form-control form-control-lg pl-3"  // Added padding to the left
                      placeholder="Typing"
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
                  <div className="form-outline position-relative mb-4" style={{ width: '30rem' }}>

                    <div style={{ width: '30rem' }}>
                      <div className='text-center'>
                        <p style={{ fontSize: '.8rem', color: '#ABAFB1' }}>Password must be at least <span style={{ color: '#32936F' }}>8 Characters</span> and must contain at least a <span style={{ color: '#ABAFB1' }}>Capital Letter, </span> a Number and a Special Character.</p>

                      </div>

                    </div>

                  </div>

                </div>



                <div className='d-flex justify-content-center align-items-center'>
                  <div className="form-check d-flex justify-content-start align-items-center mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="acceptAgreementCheckbox"
                      style={{ marginRight: '0.5rem' }}
                    />
                    <label className="form-check-label" htmlFor="acceptAgreementCheckbox" style={{ fontSize: '.9rem', marginLeft: '0.5rem' }}>
                      I hereby accept D-unison T&C
                    </label>
                  </div>
                </div>



                <div className='d-flex justify-content-center align-items-center'>
                  <div className="form-outline position-relative mb-4" style={{ width: '30rem', marginBottom: '0rem' }}>
                    <div className="pt-1 mb-4 text-center">
                      <button className="btn btn-primary" type="button" style={{ width: '100%' }}>Signup</button>

                    </div>
                  </div>
                </div>





                <div className='d-flex justify-content-center align-items-center'>
                  <div className="form-outline position-relative mb-4" style={{ width: '30rem', marginBottom: '0rem' }}>
                    <div className='text-center'>
                      <p style={{ color: '#71717A' }}>Don't have an account? <a href="#!" className="link-info">Login</a></p>

                    </div>
                  </div>
                </div>


              </form>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Signup;
