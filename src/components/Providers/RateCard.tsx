import { FaStar } from "react-icons/fa";
const RateCard = ({ toggleSecondColumn }) => {
  return (
    <div className="rate-cart-container flex" onClick={toggleSecondColumn}>
      <div className="profile-rate-box flex ">
        <div className="pro-pic-bx">
          <img
            src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
            alt=""
          />
        </div>
        <div className="name-txt-rate">
          <div className="name-rat">John Okafo </div>
          <div className="star-rate">
            <FaStar className="fill-st" />
            <FaStar className="fill-st" />
            <FaStar className="fill-st" />
            <FaStar className="fill-st" />
            <FaStar className="no-fill-st" />
          </div>
        </div>
      </div>

      <div className="rate-bdy-txt">
        I so Much love his service customer support is top notch. I recommend
        him to everyone
      </div>
      <div className="rep-btbn">
        <button className="reply-btn">Reply</button>
      </div>
    </div>
  );
};

export default RateCard;
