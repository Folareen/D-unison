import { BsFillSendFill } from "react-icons/bs";
import { useState } from "react";
import Layout from "../../components/Layout";
import { IoSearch, IoSettingsSharp } from "react-icons/io5";
import RateCard from "../../components/Providers/RateCard";
import "../../styles/myrating.css";
import { FaStar } from "react-icons/fa";
import { IoMdHappy, IoMdArrowRoundBack } from "react-icons/io";

const MyRating = () => {
  const [isDraft, setIsDraft] = useState(false);
  const [showSecondColumn, setShowSecondColumn] = useState(false);

  const toggleSecondColumn = () => {
    setShowSecondColumn(true);
  };
  const toggleSecondColumnfalse = () => {
    setShowSecondColumn(false);
  };

  const handleIsDraft = () => {
    setIsDraft(true);
  };
  const handleIsDraftClose = () => {
    setIsDraft(false);
  };
  return (
    <div className="all-service-container">
      <Layout>
        <div className="all-service-box-container">
          <div className="top-all-serv flex justify-between">
            <h6>
              <b>My Ratings</b>
            </h6>
          </div>
          <div className="search-filter-box ">
            <div className="search-service-box">
              <div className="search-serv-input flex">

                <input
                  type="text"
                  className="inp-all-serv"
                  placeholder="Search"
                />
              </div>
              <button className="search-all-btn">
                <IoSearch />
              </button>
            </div>
            <div className={` ${showSecondColumn ? "hidden" : "visible"
              }`}>
              <div className="filtr-main-box flex" >
                <div className="switch-filter-box">
                  <div
                    className={isDraft ? `each-filter` : `each-filter  filt-act`}
                    onClick={handleIsDraftClose}
                  >
                    Read
                  </div>
                  <div
                    className={isDraft ? `each-filter filt-act` : `each-filter `}
                    onClick={handleIsDraft}
                  >
                    Unread
                  </div>
                </div>
                <div className="filt-sett flex">
                  <div className="fit-txt">Filter</div>
                  <IoSettingsSharp />
                </div>
              </div>
            </div>
          </div>

          <div className="invoice-container flex justify-between pat-cont">
            <div
              className={`last-side-container bg-white chan-brd rate-rgt ${showSecondColumn ? " hidden" : "visible"
                }`}
            >
              <div className="reply-bxbx">
                <div className="rate-row-container">
                  <RateCard toggleSecondColumn={toggleSecondColumn} />
                  <RateCard toggleSecondColumn={toggleSecondColumn} />
                  <RateCard toggleSecondColumn={toggleSecondColumn} />
                  <RateCard toggleSecondColumn={toggleSecondColumn} />
                  <RateCard toggleSecondColumn={toggleSecondColumn} />
                  <RateCard toggleSecondColumn={toggleSecondColumn} />
                  <RateCard toggleSecondColumn={toggleSecondColumn} />
                </div>
              </div>
            </div>
            <div
              className={`side-first-container ratbd bg-white chan-brd rate-rgt ${showSecondColumn ? "visible" : "hidden"
                }`}
            >
              <div className="profile-rate-box flex ">
                <IoMdArrowRoundBack
                  className="back-arr"
                  onClick={toggleSecondColumnfalse}
                />
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
              <div className="name-rat" style={{ marginTop: "10px" }}>
                Comment Posted on:
              </div>
              <div className="title-rate-txt">
                Build a Professional Website with WordPress.com
              </div>
              <div className="coment-box-container">
                <div className="visitor-comment-box">
                  <div className="profile-rate-box flex ">
                    <div className="pro-pic-bx">
                      <img
                        src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                        alt=""
                      />
                    </div>
                    <div className="name-txt-rate">
                      <div className="name-rat">John Okafo </div>
                    </div>
                  </div>
                  <div className="bdy-cmmt-txt">
                    I so Much love his service customer support is top notch. I
                    recommend him to everyone.
                  </div>
                </div>
                <div className="you-main-coment-bx">
                  <div className="you-comment-box">
                    <div className="profile-rate-box flex ">
                      <div className="name-txt-rate">
                        <div className="name-rat">You</div>
                      </div>
                      <div className="pro-pic-bx">
                        <img
                          src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="bdy-cmmt-txt">
                      Thanks alot we hope to see you next time
                    </div>
                  </div>
                </div>

                <div className="visitor-comment-box">
                  <div className="profile-rate-box flex ">
                    <div className="pro-pic-bx">
                      <img
                        src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                        alt=""
                      />
                    </div>
                    <div className="name-txt-rate">
                      <div className="name-rat">John Okafo </div>
                    </div>
                  </div>
                  <div className="bdy-cmmt-txt">
                    I so Much love his service customer support is top notch. I
                    recommend him to everyone.
                  </div>
                </div>
                <div className="you-main-coment-bx">
                  <div className="you-comment-box">
                    <div className="profile-rate-box flex ">
                      <div className="name-txt-rate">
                        <div className="name-rat">You</div>
                      </div>
                      <div className="pro-pic-bx">
                        <img
                          src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="bdy-cmmt-txt">
                      Thanks alot we hope to see you next time
                    </div>
                  </div>
                </div>
              </div>
              <div className="send-comment-box flex">
                <div className="send-comment-box flex">
                  <div className="input-emoji-bx">
                    <input
                      type="text"
                      className="comm-inp"
                      placeholder="Type your message here..."
                    />
                    <IoMdHappy className="emj" />
                  </div>
                  <div className="sent-btn-comm">
                    <button className="sen-com-btn">
                      <BsFillSendFill />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default MyRating;
