import Layout from "../../components/Layout";
import "../../assets/css/chat.css";
import { FiChevronDown } from "react-icons/fi";
import { RiAttachmentLine } from "react-icons/ri";
import { BsFillSendFill } from "react-icons/bs";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";



const Chat = () => {
  const [showSecondColumn, setShowSecondColumn] = useState(false);
 
 


  
 
  
  

  const toggleSecondColumn = () => {
    setShowSecondColumn(true);
    scrollToBottom()
  };
  const toggleSecondColumnfalse = () => {
    setShowSecondColumn(false);
  };
  return (
    <div className="expense-container">
      <Layout>
        <div className="expense-box-cont">
          <div className="dow-row-container flex new-row-cat">
            <div
              className={`chat-first-coloum ${
                showSecondColumn ? " hidden" : "visible"
              }`}
            >
              <div className="mess-count-box flex">
                <div className="mess-txt">Messages</div>
                <FiChevronDown />
                <div className="count-mes">12</div>
              </div>
              <div className="search-chat-box">
                <div className="sear-tst"><CiSearch/></div>
                <input
                  type="text"
                  className="sear-inp-bx"
                  placeholder="Search messages"
                />
              </div>

              <div className="all-vistor-mess-box">
                <div className="mess-preview-box " onClick={toggleSecondColumn}>
                  <div className="each-vistor-mess flex">
                    <div className="profil-vist-mess flex">
                      <img
                        src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                        alt=""
                      />
                      <div className="name-mess-box">
                        <div className="name-mess-txt">Elmer Laverty</div>
                        <div className="mess-body-min">Haha oh man 🔥</div>
                      </div>
                    </div>

                    <div className="time-mess-enter">12m</div>
                  </div>
                </div>
                <div
                  className="mess-preview-box  active-mess"
                  onClick={toggleSecondColumn}
                >
                  <div className="each-vistor-mess flex">
                    <div className="profil-vist-mess flex">
                      <img
                        src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                        alt=""
                      />
                      <div className="name-mess-box">
                        <div className="name-mess-txt">Florencio Dorrance</div>
                        <div className="mess-body-min">Haha oh man 🔥</div>
                      </div>
                    </div>

                    <div className="time-mess-enter">24m</div>
                  </div>
                </div>
                <div className="mess-preview-box " onClick={toggleSecondColumn}>
                  <div className="each-vistor-mess flex">
                    <div className="profil-vist-mess flex">
                      <img
                        src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                        alt=""
                      />
                      <div className="name-mess-box">
                        <div className="name-mess-txt">Lavern Laboy</div>
                        <div className="mess-body-min">
                          Haha that's terrifying 😂
                        </div>
                      </div>
                    </div>

                    <div className="time-mess-enter">2h</div>
                  </div>
                </div>
                <div className="mess-preview-box " onClick={toggleSecondColumn}>
                  <div className="each-vistor-mess flex">
                    <div className="profil-vist-mess flex">
                      <img
                        src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                        alt=""
                      />
                      <div className="name-mess-box">
                        <div className="name-mess-txt">Titus Kitamura</div>
                        <div className="mess-body-min">
                          omg, this is amazing
                        </div>
                      </div>
                    </div>

                    <div className="time-mess-enter">15h</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`chat-sencond-coloum ${
                showSecondColumn ? "visible" : "hidden"
              }`}
            >
              <div className="profil-vist-mess flex mainc">
                <IoMdArrowRoundBack
                  className="back-arr"
                  onClick={toggleSecondColumnfalse}
                />
                <img
                  src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                  alt=""
                />
                <div className="name-mess-box">
                  <div className="name-mess-txt">Florencio Dorrance</div>
                  <div className="mess-body-min">
                    <div className="cirle-onl"></div>Online
                  </div>
                </div>
              </div>
              <div className="main-chat-box">
                <div className="visitor-chat-mess-cont">
                  <div className="first-mess-from flex">
                    <img
                      src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                      alt=""
                    />
                    <div className="at-same-time-mess flex">
                      <div className="mess-body-from">omg, this is amazing</div>
                      <div className="mess-body-from">perfect! ✅</div>
                      <div className="mess-body-from">
                        Wow, this is really epic
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" owner-mess">
                  <div className="first-mess-from flex wid-nrs ">
                    <div className="at-same-time-mess flex  end-js">
                      <div className="mess-body-from owner-wid">
                        How are you?
                      </div>
                    </div>
                    <img
                      src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="visitor-chat-mess-cont">
                  <div className="first-mess-from flex">
                    <img
                      src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                      alt=""
                    />
                    <div className="at-same-time-mess flex">
                      <div className="mess-body-from">
                        just ideas for next time
                      </div>
                      <div className="mess-body-from">
                        I'll be there in 2 mins ⏰
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" owner-mess">
                  <div className="first-mess-from flex wid-nrs ">
                    <div className="at-same-time-mess flex end-js">
                      <div className="mess-body-from owner-wid">woohoooo</div>
                      <div className="mess-body-from owner-wid">
                        Haha oh man
                      </div>
                      <div className="mess-body-from owner-wid">
                        Haha that's terrifying 😂
                      </div>
                    </div>
                    <img
                      src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="visitor-chat-mess-cont">
                  <div className="first-mess-from flex">
                    <img
                      src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                      alt=""
                    />
                    <div className="at-same-time-mess flex">
                      <div className="mess-body-from">aww</div>
                      <div className="mess-body-from">woohoooo 🔥</div>
                    </div>
                  </div>
                </div>

                <div className="visitor-chat-mess-cont">
                  <div className="first-mess-from flex">
                    <img
                      src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                      alt=""
                    />
                    <div className="at-same-time-mess flex">
                      <div className="mess-body-from">aww</div>
                      <div className="mess-body-from">woohoooo 🔥</div>
                    </div>
                  </div>
                </div>

                <div className="visitor-chat-mess-cont">
                  <div className="first-mess-from flex">
                    <img
                      src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                      alt=""
                    />
                    <div className="at-same-time-mess flex">
                      <div className="mess-body-from">aww</div>
                      <div className="mess-body-from">woohoooo 🔥</div>
                    </div>
                  </div>
                </div>

                <div className="visitor-chat-mess-cont">
                  <div className="first-mess-from flex">
                    <img
                      src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                      alt=""
                    />
                    <div className="at-same-time-mess flex">
                      <div className="mess-body-from">aww</div>
                      <div className="mess-body-from">woohoooo 🔥</div>
                    </div>
                  </div>
                </div>

                <div className="send-mess-box flex">
                <RiAttachmentLine className="icn" />
                <div className="sen-input-main-cont flex">
                  <input
                    type="text"
                    className="inp-send-bx"
                    placeholder="Type a message"
                  />
                  <BsFillSendFill className="icn" />
                </div>
              </div>




                


              </div>
              <div className="send-mess-box flex">
                <RiAttachmentLine className="icn" />
                <div className="sen-input-main-cont flex">
                  <input
                    type="text"
                    className="inp-send-bx"
                    placeholder="Type a message"
                  />
                  <BsFillSendFill className="icn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Chat;
