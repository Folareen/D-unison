import Layout from "../../components/Layout";
import { MdDateRange } from "react-icons/md";
import "../../styles/expenses.css";
import { IoSettingsSharp } from "react-icons/io5";
import SmallExpCard from "../../components/Providers/SmallExpCard";
import ReportSmall from "../../components/Providers/SmallComponent/ReportSmall";

const Expenses = () => {
  return (
    <div className="expense-container">
      <Layout>
        <div className="expense-box-cont">
          <div className="title-filter-box flex justify-between">
            <h6>
              <b>Income Overview</b>
            </h6>
            <div className="filter-expenses flex justify-between">
              <div className="date-filter-box flex">
                <MdDateRange />
                <div className="date-from-to">
                  <input
                    type="text"
                    placeholder="12/12/2020"
                    className="date-fit"
                  />
                  <div className="das">-</div>
                  <input
                    type="text"
                    placeholder="12/12/2020"
                    className="date-fit"
                  />
                </div>
              </div>
              <div className="exp-filt-bx flex">
                <div className="filt-sett flex">
                  <div className="fit-txt">Filter</div>
                  <IoSettingsSharp />
                </div>
                <button className="new-exp-btn">New Expenses</button>
              </div>
            </div>
          </div>

          <div className="tot-exp-box">
            <SmallExpCard
              imgUrl={"images/dollar.png"}
              txt={"Total Expenses"}
              amt={"N30,151"}
            />
          </div>
          <div className="cate-exp mt-3">
            <h6>
              <b>Expenses Categories</b>
            </h6>
            <div className="expen-cate-row mt-2 flex ">
              <SmallExpCard
                imgUrl={"images/map.png"}
                txt={"Product Restock"}
                amt={"N20,001"}
              />
              <SmallExpCard
                imgUrl={"images/map.png"}
                txt={"New Product"}
                amt={"N20,001"}
              />{" "}
              <SmallExpCard
                imgUrl={"images/map.png"}
                txt={"Shipping / Fulfillment"}
                amt={"N20,001"}
              />{" "}
              <SmallExpCard
                imgUrl={"images/map.png"}
                txt={"Advertisement"}
                amt={"N20,001"}
              />{" "}
              <SmallExpCard
                imgUrl={"images/map.png"}
                txt={"Employee"}
                amt={"N20,001"}
              />{" "}
              <SmallExpCard
                imgUrl={"images/map.png"}
                txt={"Bills & Utilities"}
                amt={"N20,001"}
              />{" "}
              <SmallExpCard
                imgUrl={"images/map.png"}
                txt={"Tax"}
                amt={"N20,001"}
              />{" "}
              <SmallExpCard
                imgUrl={"images/map.png"}
                txt={"Miscellaneous / Emergency"}
                amt={"N20,001"}
              />
            </div>
          </div>

          <div className="report-container">
            <div className="top-report-bx">
              <h6>
                <b>Recent Espenses</b>
              </h6>
              <div className="downl-rep">Download Report</div>
            </div>
            <div className="report-row-bx">
              <div className="date-con">5 August, 2023</div>
              <div className="row-rep-box">
                <ReportSmall />
                <ReportSmall />
              </div>
            </div>
            <div className="report-row-bx">
              <div className="date-con">4 August, 2023</div>
              <div className="row-rep-box">
                <ReportSmall />
                <ReportSmall />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Expenses;
