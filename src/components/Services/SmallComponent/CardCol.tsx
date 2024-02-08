import { FaStar } from "react-icons/fa";

const CardCol = ({ data }: { data?: any }) => {
  return (
    <div className="card-col-box">
      <div className="mini-col-bx">
        <div className="profil-det flex">
          <img
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
            alt=""
          />
          <div className="name-date">
            <div className="nm-txt">Jons Sena</div>
            <div className="tm-txt">2 days ago</div>
          </div>
        </div>
        <div className="comment-sp">Comment Here</div>

        <div className="rate-stars-tot flex">
          <div className="star-row flex">
            <FaStar className="fill-st" />
            <FaStar className="fill-st" />
            <FaStar className="fill-st" />
            <FaStar className="fill-st" />
            <FaStar className="no-fill-st" />
          </div>
          <div className="tot-star">4.5 {data}</div>
        </div>
      </div>
      <div className="prod-image">
        <img
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/6152wS4BKxL._AC_UF1000,1000_QL80_.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CardCol;
