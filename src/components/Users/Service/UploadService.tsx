import React, { useState } from 'react';
import signup from "../../../assets/signup.png";
import { BsLock } from 'react-icons/bs';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import "./service.css"
const UploadService = () =>{
    const [showPassword, setShowPassword] = useState(false);

    return(
        <>
        <div className='text-left'>
            <p style={{color:'#2F80ED'}}>Upload Service</p>

        </div>
        <form className='settings-form' style={{ width: '85%', borderColor:'red' }}>

                

                <div className="d-flex justify-content-center align-items-center">

                <div className="form-outline full position-relative mb-4 " style={{width:'30rem'}}>
                
                <input
                    type="text"
                    id="title"
                    className="form-control form-control-lg pl-3"  // Added padding to the left
                    placeholder="I need a criminal lawyer"
                    style={{ paddingTop: '1.5rem', fontSize:'.8rem', color:'#ABAFB1' }}
                />
                <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="firstName" style={{fontSize:'.8rem'}}>Title</label>
                </div>

                </div>


                

                <div className='d-flex justify-content-center align-items-center'>
                <div className="form-outline full position-relative mb-4 form-width" style={{ width: '30rem' }}>
            
                    <select
                        id="genderField"
                        className="form-select form-select-lg pl-3"
                        style={{ paddingTop: '1.5rem', fontSize: '.8rem', color: '#ABAFB1' }}
                    >
                        <option value="" disabled selected>Select Category</option>
                        <option value="male">Lega</option>
                        <option value="female">Tech & IT</option>
                        <option value="other">Other</option>
                    </select>
                    <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="genderField" style={{ fontSize: '.8rem' }}>Category</label>
                </div>
            </div>


            <div className='d-flex justify-content-center align-items-center'>
                <div className="form-outline full position-relative mb-4 form-width" style={{ width: '30rem' }}>
            
                    <select
                        id="genderField"
                        className="form-select form-select-lg pl-3"
                        style={{ paddingTop: '1.5rem', fontSize: '.8rem', color: '#ABAFB1' }}
                    >
                        <option value="" disabled selected>Select Sub-Category</option>
                        <option value="male">Lawyer</option>
                        <option value="female">Judge</option>
                        <option value="other">Other</option>
                    </select>
                    <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="genderField" style={{ fontSize: '.8rem' }}>Sub-Category</label>
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
                <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="addressField" style={{fontSize:'.8rem'}}>Delivery Time</label>
                </div>

                </div>



            
            



            <div className='d-flex justify-content-center align-items-center'>
                <div className="form-outline full position-relative mb-4" style={{width:'30rem'}}>
                <textarea
                    type="text"
                    id="emailField"
                    className="form-control form-control-lg pl-3"  // Added padding to the left
                    placeholder="I need someone to do this and that"
                    style={{ paddingTop: '1.5rem', fontSize:'.8rem', color:'#ABAFB1' }}
                />
                <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="emailField" style={{fontSize:'.8rem'}}>Detailed description</label>
                </div>

                </div>



                


                


                



                <div className='d-flex justify-content-center align-items-center'>
                
                </div>



                <div className='d-flex justify-content-center align-items-center'>
                <div className="form-outline full position-relative mb-4" style={{width:'30rem', marginBottom:'0rem'}}>
                <div className="pt-1 mb-4 text-center">


                </div>
                </div>
                </div>





                


</form>
        </>
    )

}

export default UploadService;