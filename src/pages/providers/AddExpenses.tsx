import { IoChevronDownOutline, IoAddOutline } from "react-icons/io5";
import Layout from "../../components/Layout";
import "../../styles/addexpenses.css";
const AddExpenses = () => {
  return (
    <div className="expense-container">
      <Layout>
        <div className="expense-box-cont">
          <h6>
            <b>Create Expenses</b>
          </h6>
          <div className="add-form-box ">
            <form action="" className="form-add-ex">
              <div className="lab-exp-inp-box">
                <label htmlFor="">Amount</label>
                <input type="text" className="exp-inp" placeholder="Typing |" />
              </div>
              <div className="sel-row-exp">
                <div className="lab-exp-inp-box">
                  <label htmlFor="">Expenses Category</label>
                  <div className="selec-icon-box">
                    <div className="sel-tst">Category</div>
                    <IoChevronDownOutline />
                  </div>
                </div>
                <div className="lab-exp-inp-box">
                  <label htmlFor="">Select One </label>
                  <div className="selec-icon-box">
                    <div className="sel-tst">Select</div>
                    <IoChevronDownOutline />
                  </div>
                </div>{" "}
                <div className="lab-exp-inp-box">
                  <label htmlFor="">Select Account</label>
                  <div className="selec-icon-box">
                    <div className="sel-tst">Cash</div>
                    <IoChevronDownOutline />
                  </div>
                </div>
              </div>

              <div className="row-item-ad">
                <div className="body-add-item-box">
                  <div className="head-add-itm">
                    <div className="frs-itm">ITEM</div>
                    <div className="sec-item">Qty.</div>
                    <div className="last-item">Price</div>
                    <div className="last-item">
                      <span>Charges / </span>Tax
                    </div>
                    <div className="last-item">Total</div>
                  </div>
                  <div className="bdy-add-itm">
                    <input
                      type="text"
                      className="exp-inp frs-itm"
                      placeholder="Item Name"
                    />
                    <input
                      type="text"
                      className="exp-inp sec-item"
                      placeholder="1"
                    />
                    <input
                      type="text"
                      className="exp-inp last-item"
                      placeholder="Typing |"
                    />
                    <input
                      type="text"
                      className="exp-inp last-item"
                      placeholder="Typing |"
                    />
                    <input
                      type="text"
                      className="exp-inp last-item"
                      placeholder="N500,000|"
                    />
                  </div>
                </div>
                <div className="add-icon">
                  <IoAddOutline />
                </div>
              </div>

              <div className="tot-btn-subm">
                <div className="total-exp-bx flex justify-between p-2">
                  <div className="idific-txt">
                    Total (<span>NGN</span>)
                  </div>
                  <div className="total-exp-amt">4,000.00</div>
                </div>
                <div className="but-box-exp">
                  <button className="canc-btn">CANCEL</button>
                  <button className="canc-btn subm">SUBMIT</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AddExpenses;
