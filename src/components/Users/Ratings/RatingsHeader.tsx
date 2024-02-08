import { FiSearch } from "react-icons/fi";
const RatingsHeader =()=>{
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6 mt-2">

                    <h6 className="rating-text-top text-left" style={{fontWeight:'700'}}>Recent Providers that You Rated</h6>

                </div>

                <div className="col-12 col-lg-6">
                <div className="input-container-box rating-input "  style={{width:'80%', height:'40px'}}>
              <input
                type="text"
                className="bx-inp"

                placeholder="Search store  here "
                style={{fontSize:'.7rem'}}
               
              />
              <FiSearch className="seac-icon" />
            </div>

                </div>

            </div>

        </div>
        </>       
    )
}

export default RatingsHeader;