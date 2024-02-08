import React, { useState } from "react";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
const OrdersCard = () =>{
    const numberOfTimes = 4;
    const [isDraft, setIsDraft] = useState(false);
    const [isAll, setIsAll] = useState(false);
    
    const handleIsPublished = () => {
      setIsDraft(false);
      setIsAll(false);
    };
    
    const handleIsDraft = () => {
      setIsDraft(true);
      setIsAll(false);
    };
    
    const handleIsAll = () => {
      setIsDraft(false);
      setIsAll(true);
    };

    return(
        <>



            
        <div className="col-12 col-lg-4 py-3">
        <div className="card border-0 px-2 shadow " style={{borderRadius:'.5rem', padding:'.1em', width:'100%', backgroundColor:'#FFF'}}>
            <NavLink style={{textDecoration:'none', textDecorationColor:'black', color:'black'}} to="/user/order/details/1">
            <div className="container">
                <div className="row">
                    <div className="col-4 mt-2">
                        <button type="button" className="btn btn-primary btn-sm" style={{borderRadius:'1rem', borderColor:'#FFF5EB', width:'100%', fontSize:'.6rem', color:'#FC820A', backgroundColor:'#FFF5EB'}}>Pending</button>

                    </div>

                    <div className="col-4 mt-2">
                        <button type="button" className="btn btn-primary btn-sm" style={{borderRadius:'1rem', width:'100%', fontSize:'.6rem', backgroundColor:'#005ADE'}}>N50,000</button>

                    </div>

                    <div className="col-4 mt-2">
                        <button type="button" className="btn btn-primary btn-sm" style={{borderRadius:'1rem',borderColor:'#FFF5EB', width:'100%', fontSize:'.6rem', color:'#FC820A', backgroundColor:'#FFF5EB'}}>Not Paid</button>

                    </div>

                    <div className="col-12 mt-3">
                        <p><HiMiniBuildingStorefront size={20} color="#1A94FF" /> <span className="p-1" style={{fontSize:'.9rem', color:'#27272A'}}>Provider's Name</span></p>

                    </div>
                    <hr className="mb-2"/>
                    <div className="col-12">
                    <p style={{color:'#27272A'}}><CiLocationOn size={20} color="#00AB56"/><span className="p-2" style={{fontSize:'.9rem'}}>256, Clint avenue</span></p>

                    </div>

                    <div className="col-12">
                        <p style={{fontWeight:'600', fontSize:'.9rem'}}>Service: <span style={{fontWeight:'500', fontSize:'.9rem'}}>I will design a website in five days</span></p>

                    </div>

                    <div className="col-12">
                        <p style={{fontWeight:'600', fontSize:'.9rem'}}>Order id: <span style={{fontWeight:'500', fontSize:'.8rem'}}>456779550</span></p>

                    </div>

                    <div className="col-12">
                        <p style={{fontWeight:'600', fontSize:'.9rem'}}>Date: <span style={{fontWeight:'500', fontSize:'.8rem'}}>28/20/2023</span></p>

                    </div>

                    <div className="col-6">
                    <button type="button" className="btn btn-primary btn-sm mb-2" style={{borderRadius:'1rem', borderColor:'#FFF5EB', width:'100%', fontSize:'.6rem', color:'#FC820A', backgroundColor:'#FFF5EB'}}>Rate provider</button>

                    </div>

                </div>

            </div>
            </NavLink>
            </div>

        </div>



                
  
        </>
    )
}

export default OrdersCard;