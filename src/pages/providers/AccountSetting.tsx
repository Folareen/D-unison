import "../../styles/accountsetting.css";
import Layout from "../../components/Layout";
import { FaAngleDown, FaRegCalendarDays, FaRegEyeSlash } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";

const AccountSetting = () => {
  return (
    <div className="customer-container">
      <Layout>
        <div className="customer-main-box">
          <div className="main-sett-box bg-white">
            <div className="firs-sett-container mobil-des">
              <div className="titl-sett">Personal Details</div>
              <div className="input-sett-container">
                <div className="innp-labal-box full-bx">
                  {/* check invoice.css its style */}
                  <label htmlFor="" className="label-fil">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="inv-inp"
                    placeholder="Typing |"
                  />
                </div>
                <div className="sel-label-box full-bx">
                  <div className="choose-file-box">
                    <div className="lf-sd">
                      <div className="label-fil">Sex</div>
                      <span>Male</span>
                    </div>
                    <FaAngleDown />
                  </div>
                </div>
                <div className="sel-label-box full-bx">
                  <div className="choose-file-box">
                    <div className="lf-sd">
                      <div className="label-fil">Date</div>
                      <input
                        type="text"
                        className="inv-inp"
                        placeholder="12/12/2020|"
                      />
                    </div>
                    <FaRegCalendarDays />
                  </div>
                </div>
                <div className="innp-labal-box full-bx">
                  {/* check invoice.css its style */}
                  <label htmlFor="" className="label-fil">
                    Address
                  </label>
                  <input
                    type="text"
                    className="inv-inp"
                    placeholder="Lagos Ikeja"
                  />
                </div>
                <div className="sel-label-box full-bx">
                  <div className="choose-file-box">
                    <div className="lf-sd">
                      <div className="label-fil">Country</div>
                      <span>Nigeria</span>
                    </div>
                    <FaAngleDown />
                  </div>
                </div>

                <div className="innp-labal-box full-bx">
                  {/* check invoice.css its style */}
                  <label htmlFor="" className="label-fil">
                    Email
                  </label>
                  <input
                    type="text"
                    className="inv-inp"
                    placeholder="Your Email Address "
                  />
                </div>
                <div className="sel-label-box full-bx">
                  <div className="choose-file-box">
                    <div className="lock-bx flex">
                      <CiLock />
                      <div className="lf-sd">
                        <div className="label-fil">Password</div>
                        <input
                          type="text"
                          className="inv-inp"
                          placeholder="******"
                        />
                      </div>
                    </div>
                    <FaRegEyeSlash />
                  </div>
                </div>
                <div className="warn-pass">
                  Password must be at least <span>8 Characters</span> and must
                  contain at least a <span>Capital Letter</span>, a
                  <span> Number</span> and a <span>Special Character</span>.
                </div>

                <div className="subm-btn-ser">
                  <button className="subm-btn-m">Update Profile</button>
                </div>
              </div>
            </div>
            <div className="second-sett-container mobil-des">
              <div className="titl-sett">Submitted Documents</div>
              <div className="just-wed">
                <div className="all-ma-box">
                  <div className="image-ver-box">
                    <img
                      src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
                      alt=""
                    />
                    <div className="name-ma-txt">Verification Photo</div>
                  </div>
                  <div className="image-ver-box nil-dow mt-4">
                    <img
                      src="https://www.itedgenews.africa/wp-content/uploads/2018/01/NIN.jpg"
                      alt=""
                    />

                    <div className="name-ma-txt wt-fl">
                      <span>NIN</span>
                      <div className="fl-cn">1 file</div>
                    </div>
                  </div>
                  <div className="image-ver-box nil-dow mt-4">
                    <img
                      src="https://cdn.vanguardngr.com/wp-content/uploads/2021/02/GKLL.jpg"
                      alt=""
                    />

                    <div className="name-ma-txt wt-fl">
                      <span>CAC</span>
                      <div className="fl-cn">1 file</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="last-sett-container mobil-des">
              <div className="titl-sett">Account Tier</div>
              <div className="tier-container flex">
                <div className="tier-bx-cnt flex">
                  <div className="circ-bx"></div>
                  <div className="tier-txt">Tier 1</div>
                  <div className="fl-cn">Current</div>
                </div>
                <div className="bd-left"></div>
                <div className="tier-bx-cnt flex">
                  <div className="circ-bx"></div>
                  <div className="tier-txt">Tier 2</div>
                  <div className="fl-cn">Upgrade</div>
                </div>
                <div className="bd-left"></div>
                <div className="tier-bx-cnt flex">
                  <div className="circ-bx bgd"></div>
                  <div className="tier-txt">Tier 3</div>
                  <div className="fl-cn">Current</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AccountSetting;
