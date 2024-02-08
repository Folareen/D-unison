import OrdersCard from "../Orders/OrdersCard"
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
const MainDetails =()=>{
    return(
        <>
        <div className="container">
            <div className="row">

                <div className="col-12 d-flex justify-content-center align-items-center">
                <div className="d-flex align-items-center">
                        <div className="d-lg-none">
                        <div className="star-row flex" style={{gap:'10px'}}>
            <FaStar className="fill-st" size={10}/>
            <FaStar className="fill-st" size={10} />
            <FaStar className="fill-st" size={10}/>
            <FaStar className="fill-st" size={10} />
            <FaStar className="no-fill-st" size={10} />
          </div>

                        </div>
                    
                        <p className="pt-3 mx-4 d-lg-none" style={{color:'#FC820A'}}>Rate seller</p>
                    </div>

                </div>

                
                    <OrdersCard/>



                    <div className="col-8 py-3 d-flex flex-column justify-content-start align-items-center">
                    <div className="d-flex align-items-center">
                        <div className="d-none d-md-block">
                        <div className="star-row flex" style={{gap:'10px'}}>
            <FaStar className="fill-st" size={10}/>
            <FaStar className="fill-st" size={10} />
            <FaStar className="fill-st" size={10}/>
            <FaStar className="fill-st" size={10} />
            <FaStar className="no-fill-st" size={10} />
          </div>

                        </div>
                    
                        <p className="pt-3 mx-4 d-none d-md-block" style={{color:'#FC820A'}}>Rate seller</p>
                    </div>
                </div>


                <div className="col-6">
                <div className="card border-0 px-4 shadow " style={{borderRadius:'1.5rem', padding:'.5em', width:'100%', backgroundColor:'#FFF'}}>

                    <div className="">
                        <p className="" style={{fontWeight:'700'}}>Payment Information</p>

                        <p className="mb-2" style={{opacity:'0.5', fontSize:'.8rem'}}>Payment method</p>

                        <p className="mb-2" style={{fontWeight:'700'}}>Online Payment</p>
                        <p style={{opacity:'0.5', fontSize:'.8rem'}}>Total Amount</p>
                        <p className="mb-2" style={{fontWeight:'700'}}>N55,000</p>

                    </div>

                    </div>

                </div>



                <div className="col-6">
                <div className="card border-0 px-4 shadow " style={{borderRadius:'1.5rem', padding:'.5em', width:'100%', backgroundColor:'#FFF'}}>

                    <div className="">
                        <p className="" style={{fontWeight:'700'}}>Delivery Information</p>

                        <p className="mb-2" style={{opacity:'0.5', fontSize:'.8rem'}}>Payment Date</p>

                        <p className="mb-2" style={{fontWeight:'700'}}>22/05/2023</p>
                        <p style={{opacity:'0.5', fontSize:'.8rem'}}>Completion date</p>
                        <p className="mb-2" style={{fontWeight:'700'}}>22/07/2024</p>

                    </div>

                    </div>

                </div>


                    
                    </div>

        </div>
        </>
    )
}

export default MainDetails