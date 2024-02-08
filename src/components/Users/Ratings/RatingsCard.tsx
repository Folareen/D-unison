import ratings from "../../../assets/ratings.png";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import "./ratings.css"
const data = [
    { img: `/images/l3.png`, count: 75, for: "Total Customers" },
    { img: `/images/l2.png`, count: 357, for: "Total Service Delivered" },
    { img: `/images/l1.png`, count: 650, for: "Total Orders" },
    { img: `/images/l4.png`, count: "$128000", for: "Total Revenue" },
  ];
  const RatingsCard = ({ img, count, forText }) => {
    return (
      <div className="each-card-box each-card-box-2 flex mt-4">
        <div className="rating-img">
        {img}
        </div>
        <div className="count-txt">
          <h5>
            
            <div className=" rating-text-bld" style={{fontWeight:'700', marginLeft:''}}> <div className="d-none d-md-block"></div>{forText}</div>
            <div className=" mt-2 rating-text">Service name: <span className=" rating-text-bld" style={{fontWeight:'700'}} >Flower</span></div>
            
          </h5>
          
          <div className=" rating-text">Price: <b className="count">N {count}</b></div>
          
          <div className="star-row flex d-none d-md-block" style={{gap:'10px'}}>
            <FaStar className="fill-st" size={10}/>
            <FaStar className="fill-st" size={10} />
            <FaStar className="fill-st" size={10}/>
            <FaStar className="fill-st" size={10} />
            <FaStar className="no-fill-st" size={10} />
          </div>
          <div className="star-row flex d-lg-none" style={{gap:'5px'}}>
            <FaStar className="fill-st" size={10}/>
            <FaStar className="fill-st" size={10} />
            <FaStar className="fill-st" size={10}/>
            <FaStar className="fill-st" size={10} />
            <FaStar className="no-fill-st" size={10} />
          </div>
        </div>
        
      </div>
    );
  };
  
  export default RatingsCard;