import { MdCall, MdEmail } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
const CustomerCard = () => {
  return (
    <div className="customer-card-container">
      <div className="cust-details">
        <div className="cus-image-box">
          <img
            src="https://www.nineforbrands.com.au/wp-content/uploads/2020/06/Guy-778x438.jpg"
            alt=""
          />
          <div className="intial-name">Hs</div>
        </div>
        <div className="customer-name">Angela Moss</div>
        <div className="post-cus">Marketing Manager at</div>
        <div className="comp-cus">Highspeed Studios</div>
      </div>
      <div className="contact-details mt-3 ">
        <div className="pon-email d-flex justify-content-center align-items-center">
          <div className="cont-icon">
            <MdCall />
          </div>
          <div className="contact-txt">+12 345 6789 0</div>
        </div>
        <div className="pon-email d-flex justify-content-center align-items-center">
          <div className="cont-icon">
            <MdEmail />
          </div>
          <div className="contact-txt ">angelamoss@mail.com</div>
        </div>
      </div>
      <HiDotsVertical className="dt-icn" />
    </div>
  );
};

export default CustomerCard;
