import character from "../../../assets/character-full.png";
import dash_avatar from "../../../assets/dash-avatar.png";
import { CiLocationOn } from "react-icons/ci";

const Section = () => {
    return(
        <>
        <div className="container py-4">
            <div className="row">





                



            <div className="col-12 col-md-12 col-lg-8 d-none d-md-block">
                <div className="card border-0" style={{borderRadius:'1.5rem', width:'100%', backgroundColor:'#FFECC8'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <h3 className="pt-4" style={{marginLeft:'0rem', color:'#C45A01', fontWeight:'700'}}>
                                   Hello, Scarlett!
                                </h3>
                                <p style={{marginLeft:'0rem', color:'#C45A01'}}>Welcome to your Dashboard </p>

                            </div>

                            <div className="col-4 d-flex justify-content-center align-items-center ">
                                <div className="">
                                    <img className="" src={character} style={{ width: '230px', height:'', marginBottom:'-25px'}} />
                                </div>
                            </div>

                        </div>

                    </div>
           </div>


         
           </div>


           <div className="col-12 col-md-12 col-lg-4">
           <div className="card border-0 " style={{borderRadius:'1.5rem', width:'100%', backgroundColor:'white'}}>
                <div className="text-center">
                    <img src={dash_avatar} />
                    <h4 style={{fontWeight:'700', color:'#1B2559'}}>Charles Robbie</h4>
                    <p style={{color:'#A3AED0'}}><CiLocationOn/>Lagos state</p>
                </div>
                <div className="container">
                    <div className="row" style={{}}>
                        <div className="col-4">
                            <p className="mb-1 text-center" style={{fontSize:'.6rem', color:'#A3AED0'}}>Posted jobs</p>
                            <h5 className="text-center" style={{fontWeight:'700'}}>28</h5>

                        </div>

                        <div className="col-4">
                        <p className="mb-1 text-center" style={{fontSize:'.6rem', color:'#A3AED0'}}>Completed jobs</p>
                            <h5 className="text-center" style={{fontWeight:'700'}}>643</h5>

                        </div>

                        <div className="col-4">
                        <p className="mb-1 text-center" style={{fontSize:'.6rem', color:'#A3AED0'}}>Invoices</p>
                            <h5 className="text-center" style={{fontWeight:'700'}}>760</h5>

                        </div>

                    </div>

                </div>
            </div>
            
           </div>


           
            </div>

        </div>
        </>
    )
} 

export default Section;