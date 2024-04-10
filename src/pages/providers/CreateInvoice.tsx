import { IoIosPerson } from "react-icons/io";
import Layout from "../../components/Layout";
import "../../styles/invoice.css";
import { FcCalendar } from "react-icons/fc";
import { FiFilePlus } from "react-icons/fi";
import { FaRegCalendarDays, FaAngleDown } from "react-icons/fa6";

const CreateInvoice = () => {
  return (
    <div className="customer-container">
      <Layout>
        <div className="customer-main-box">
          <div className="invoice-container flex justify-between">
            <div className="side-first-container bg-white">
              <div className="top-box-container">
                <div className="line-first-box">
                  <div className="first-abs ">
                    <img src="/images/fir.png" alt="" />
                  </div>
                  <div className="second-abs ">
                    <img src="/images/sec.png" alt="" />
                  </div>
                </div>
                <div className="details-row flex justify-between">
                  <div className="first-box-side flex gap-2 ">
                    <div className="logo-cont-invoice">
                      <img src="/images/alo.png" alt="" />
                    </div>
                    <div className="comp-deatils text-white">
                      <div className="name-comp">Company Name</div>
                      <div className="email-comp-no">email@email.com</div>
                      <div className="email-comp-no">09099887766</div>
                    </div>
                  </div>
                  <div className="loct-deat">Nigeria Nigeria</div>

                  <div className="id-box">Nº: 000027</div>
                </div>
              </div>

              <div className="bill-to-date-box flex ">
                <div className="bil-box-">
                  <div className="to-bill">
                    <IoIosPerson className="" /> Bill To:
                  </div>
                  <div className="name-cust">Customer Name</div>
                </div>
                <div className="date-box-cont">
                  <div className="to-bill">
                    <FcCalendar /> Date:
                  </div>

                  <div className="invoice-date">
                    <span>Invoice date: </span>June 26, 2024
                  </div>
                  <div className="invoice-date">
                    <span>Due date: </span>June 26, 2024
                  </div>
                </div>{" "}
              </div>
              <div className="item-contain-bx">
                <div className="head-line flex ">
                  <div className="each-tem-box">
                    <div className="itm-bx">
                      <img src="/images/itm1.png" alt="" />
                      <span>Item</span>
                    </div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-bx tw-ts">
                      <img src="/images/itm2.png" alt="" />
                      <span>Quantity</span>
                    </div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-bx tw-tre">
                      <img src="/images/itm3.png" alt="" />
                      <span>Price</span>
                    </div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-bx tw-for">
                      <img src="/images/itm4.png" alt="" />
                      <span>Total</span>
                    </div>
                  </div>
                </div>
                <div className="body-line-itm flex">
                  <div className="each-tem-box">
                    <div className="itm-tst">Web design</div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-qua">1</div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-pric">$ 5,250.00</div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-tst">$ 5,250.00</div>
                  </div>
                </div>
                <div className="body-line-itm flex">
                  <div className="each-tem-box">
                    <div className="itm-tst">Web design</div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-qua">1</div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-pric">$ 5,250.00</div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-tst">$ 5,250.00</div>
                  </div>
                </div>
              </div>
              <div className="tot-full-box">
                <div className="invoice-total-container">
                  <div className="sub-amount-bx flex justify-between">
                    <div className="sub-tst">Subtotal</div>
                    <div className="price-sub-inv">$ 18,320.00</div>
                  </div>
                  <div className="sub-amount-bx flex justify-between">
                    <div className="sub-tst">TAX</div>
                    <div className="price-sub-inv">$ 916.00</div>
                  </div>
                  <div className="sub-amount-boxx flex justify-between">
                    <div className="tot-inv-total-txt">Invoice Total</div>
                    <div className="don-tot">$ 19,236.00</div>
                  </div>
                </div>
              </div>
              <div className="btn-pay">
                <button className="btn-pat-nw">Pay Now</button>
              </div>
            </div>


            <div className="last-side-container bg-whiteh">
              <div className="row-full-box flex justify-between">
                <div className="file-label-box mt-3">
                  <div className="label-fil">Upload Logo</div>
                  <div className="choose-file-box">
                    <span>Choose File</span>
                    <FiFilePlus />
                  </div>
                </div>
                <div className="innp-labal-box mt-2">
                  <label htmlFor="" className="label-fil">
                    Invoice Id
                  </label>
                  <input
                    type="text"
                    className="inv-inp"
                    placeholder="0000027"
                  />
                </div>
              </div>
              <div className="row-full-box flex justify-between">
                <div className="innp-labal-box ">
                  <label htmlFor="" className="label-fil">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="inv-inp"
                    placeholder="Company Name"
                  />
                </div>
                <div className="innp-labal-box flex gap-2 mt-2">
                  <FaRegCalendarDays />
                  <div className="inp-bx-con">
                    <label htmlFor="" className="label-fil">
                      Invoice Date
                    </label>
                    <input
                      type="text"
                      className="inv-inp"
                      placeholder="12/12/2020 |"
                    />
                  </div>
                </div>
              </div>
              <div className="row-full-box flex justify-between">
                <div className="innp-labal-box  ">
                  <label htmlFor="" className="label-fil">
                    Email
                  </label>
                  <input
                    type="text"
                    className="inv-inp"
                    placeholder="email@email.com"
                  />
                </div>
                <div className="innp-labal-box flex gap-2 mt-2">
                  <FaRegCalendarDays />
                  <div className="inp-bx-con">
                    <label htmlFor="" className="label-fil">
                      Due Date
                    </label>
                    <input
                      type="text"
                      className="inv-inp"
                      placeholder="12/12/2020 |"
                    />
                  </div>
                </div>
              </div>
              <div className="row-full-box flex justify-between">
                <div className="innp-labal-box ">
                  <label htmlFor="" className="label-fil">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="inv-inp"
                    placeholder="8023456789"
                  />
                </div>
                <div className="innp-labal-box flex gap-2 mt-2">
                  <FaRegCalendarDays />
                  <div className="inp-bx-con">
                    <label htmlFor="" className="label-fil">
                      Address
                    </label>
                    <input
                      type="text"
                      className="inv-inp"
                      placeholder="Nigeria Nigeria "
                    />
                  </div>
                </div>
              </div>
              <div className="row-full-box flex justify-between">
                <div className="sel-label-box">
                  <div className="label-fil">Bill TO </div>
                  <div className="choose-file-box">
                    <span>Select Customer</span>
                    <FaAngleDown />
                  </div>
                </div>
              </div>

              <div className="each-tem-bxx">
                <div className="itm-bx twfld">
                  <span>Add Field</span>
                </div>
              </div>

              <div className="item-contain-x my-4">
                <div className="head-line flex ">
                  <div className="each-tem-box">
                    <div className="itm-bx">
                      <img src="/images/itm1.png" alt="" />
                      <span>Item</span>
                    </div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-bx tw-ts">
                      <img src="/images/itm2.png" alt="" />
                      <span>Quantity</span>
                    </div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-bx tw-tre">
                      <img src="/images/itm3.png" alt="" />
                      <span>Price</span>
                    </div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-bx tw-for">
                      <img src="/images/itm4.png" alt="" />
                      <span>Total</span>
                    </div>
                  </div>
                </div>
                <div className="body-line-it my-3 flex">
                  <div className="each-tem-box">
                    <div className="itm-tst">Web design</div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-qua">1</div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-pric">$ 5,250.00</div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-tst">$ 5,250.00</div>
                  </div>
                </div>
                <div className="body-line-it my-3 flex">
                  <div className="each-tem-box">
                    <div className="itm-tst">Web design</div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-qua">1</div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-pric">$ 5,250.00</div>
                  </div>
                  <div className="each-tem-box-two">
                    <div className="itm-tst">$ 5,250.00</div>
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

export default CreateInvoice;
