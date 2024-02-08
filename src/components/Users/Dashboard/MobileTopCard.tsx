import character from "../../../assets/character-full.png";
import dash_avatar from "../../../assets/dash-avatar.png";
import { CiLocationOn } from "react-icons/ci";

const MobileTopCard = () =>{

    return(
        <div className="container mb-3">
            <div className="row">
            <div className="col-12 col-md-12 col-lg-8 d-md-none">
                <div className=" tes border-0 p-0" style={{borderRadius:'1.5rem', width:'100%', height:'', backgroundColor:'#FFECC8'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-7 p-4">
                                <h3 className="" style={{marginLeft:'0rem', color:'#C45A01', fontWeight:'800', fontSize:'20px'}}>
                                   Hello, Scarlett!
                                </h3>
                                <p style={{marginLeft:'0rem', color:'#C45A01', fontSize:'14px'}}>Welcome to your Dashboard </p>

                            </div>

                            <div className="col-5 d-flex justify-content-center align-items-center">
                                <div>
                                    <img className="" src={character} style={{ width: '100%', height:'100px', marginRight:''}} />
                                </div>
                            </div>


                        </div>

                    </div>
           </div>


         
           </div>

            </div>

        </div>
    )

}

export default MobileTopCard;