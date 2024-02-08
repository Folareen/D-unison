import React, { useState } from 'react';
import signup from "../../../assets/signup.png";
import { BsLock } from 'react-icons/bs';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import "./signup.css"
const UpdateForm = () =>{
    const [showPassword, setShowPassword] = useState(false);

    return(
        <>
        <div className='text-left'>
            <p style={{color:'#2F80ED'}}>Personal Details</p>

        </div>
        <form className='settings-form' style={{ width: '85%', borderColor:'red' }}>

                

                <div className="d-flex justify-content-center align-items-center">

                <div className="form-outline full position-relative mb-4 " style={{width:'30rem'}}>
                
                <input
                    type="text"
                    id="firstName"
                    className="form-control form-control-lg pl-3"  // Added padding to the left
                    placeholder="Typing"
                    style={{ paddingTop: '1.5rem', fontSize:'.8rem', color:'#ABAFB1' }}
                />
                <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="firstName" style={{fontSize:'.8rem'}}> First name</label>
                </div>

                </div>


                <div className='d-flex justify-content-center align-items-center'>
                <div className="form-outline full position-relative mb-4" style={{width:'30rem'}}>
                
                <input
                    type="text"
                    id="lastName"
                    className="form-control form-control-lg pl-3"  // Added padding to the left
                    placeholder="Typing"
                    style={{ paddingTop: '1.5rem', fontSize:'.8rem', color:'#ABAFB1' }}
                />
                <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="brandField" style={{fontSize:'.8rem'}}>Last name</label>
                </div>

                </div>

                <div className='d-flex justify-content-center align-items-center'>
                <div className="form-outline full-2 position-relative mb-4 form-width" style={{ width: '30rem' }}>
            
                    <select
                        id="genderField"
                        className="form-select form-select-lg pl-3"
                        style={{ paddingTop: '1.5rem', fontSize: '.8rem', color: '#ABAFB1' }}
                    >
                        <option value="" disabled selected>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="genderField" style={{ fontSize: '.8rem' }}>Gender</label>
                </div>
            </div>


            <div className='d-flex justify-content-center align-items-center'>
                    <div className="form-outline full position-relative mb-4 form-width" style={{ width: '30rem' }}>
                        <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="dateField" style={{ fontSize: '.8rem' }}>Date of Birth</label>
                        <input
                            type="date"
                            id="dateField"
                            className="form-control form-control-lg pl-3"
                            style={{ paddingTop: '1.5rem', fontSize: '.8rem', color: '#ABAFB1' }}
                        />
                    </div>
                </div>



            <div className='d-flex justify-content-center align-items-center'>
                <div className="form-outline full position-relative mb-4" style={{width:'30rem'}}>
                <input
                    type="text"
                    id="addressField"
                    className="form-control form-control-lg pl-3"  // Added padding to the left
                    placeholder="Lagos, Ikeja"
                    style={{ paddingTop: '1.5rem', fontSize:'.8rem', color:'#ABAFB1' }}
                />
                <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="addressField" style={{fontSize:'.8rem'}}>Address</label>
                </div>

                </div>


                <div className='d-flex justify-content-center align-items-center'>
                <div className="form-outline full-2 position-relative mb-4 form-width" style={{ width: '30rem' }}>
                    <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="countryField" style={{ fontSize: '.8rem' }}>Select Country</label>
                    <select
                        id="countryField"
                        className="form-select form-select-lg pl-3"
                        style={{ paddingTop: '1.5rem', fontSize: '.8rem', color: '#ABAFB1' }}
                    >
                        <option value="" disabled selected>Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                        {/* Add more countries as needed */}
                    </select>
                </div>
            </div>


            
            





            <div className='d-flex justify-content-center align-items-center'>
                <div className="form-outline full position-relative mb-4" style={{width:'30rem'}}>
                <input
                    type="email"
                    id="emailField"
                    className="form-control form-control-lg pl-3"  // Added padding to the left
                    placeholder="Your email address"
                    style={{ paddingTop: '1.5rem', fontSize:'.8rem', color:'#ABAFB1' }}
                />
                <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="emailField" style={{fontSize:'.8rem'}}>Email</label>
                </div>

                </div>



                <div className='d-flex justify-content-center align-items-center'>
                <div className="form-outline full-2 position-relative mb-4" style={{width:'30rem'}}>
                <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="password" style={{fontSize:'.8rem'}}>
                Password
                </label>
                <div className="input-group">
                <span className="input-group-text" style={{ backgroundColor: '#fff', borderRight: 0 }}>
                <FiLock size={20} color="black" /> {/* Padlock icon */}
                </span>
                <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="form-control form-control-lg pl-3"  // Added padding to the left
                placeholder="********"
                style={{ paddingTop: '1.5rem', fontSize:'1rem', color:'#ABAFB1', borderLeft: 0 }}
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
                <div className="form-outline position-relative mb-4" style={{width:'30rem'}}>

                <div style={{width:''}}>
                <div className='text-center'>
        <p style={{fontSize:'.8rem', color:'#ABAFB1'}}>Password must be at least <span style={{color:'#32936F'}}>8 Characters</span> and must contain at least a <span style={{color:'#ABAFB1'}}>Capital Letter, </span> a Number and a Special Character.</p>

    </div>


                </div>

                </div>

                </div>



                <div className='d-flex justify-content-center align-items-center'>
                
                </div>



                <div className='d-flex justify-content-center align-items-center'>
                <div className="form-outline full position-relative mb-4" style={{width:'30rem', marginBottom:'0rem'}}>
                <div className="pt-1 mb-4 text-center">
                <button className="btn btn-primary" type="button" style={{width:'100%'}}>Update profile</button>

                </div>
                </div>
                </div>





                


</form>
        </>
    )

}

export default UpdateForm;