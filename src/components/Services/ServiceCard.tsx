import { FaStar } from "react-icons/fa";
const ServiceCard = () => {
  return (
    <div className="service-card-container mt-4">
      <div className="top-cars-box">
        <div className="all-serv-img-box">
          <div className="rate-star">
            <FaStar className="all-cl" />
            <div className="cout-tst">5.0</div>
          </div>
          <img
           className="img-fluid"
            src="https://st4.depositphotos.com/19324802/25544/i/450/depositphotos_255449514-stock-photo-waves-crushing-a-rock-during.jpg"
            alt=""
          />
          <img src="/images/low.png" alt="" className="low-ma" />
        </div>
        <div className="txt-tp-btm">
          <div className="all-ser-card-top">
            I will Create a Landing Page For you using Abobe Xd
          </div>
          <div className="all-ser-card-bdy">Description Here </div>
        </div>
      </div>
      <div className="bttom-card-bx flex justify-between">
        <div className="price-box">
          <div className="fixed-txt">Fixed Price</div>
          <div className="price-txt">N380,000</div>
        </div>
        <button className="see-more-btn">See More</button>
      </div>
    </div>
  );
};

export default ServiceCard;
