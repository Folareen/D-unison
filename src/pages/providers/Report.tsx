import Layout from "../../components/Layout";
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import "../../styles/report.css";
import ChartCardAcc from "../../components/Providers/ChartCardAcc";

const Report = () => {
  return (
    <div className="expense-container">
      <Layout>
        <div className="expense-box-cont">
          <div className="dow-row-container flex new-row-rep ">
            <div className="first-report-coloum">
              <div className="filter-report">
                <div className="filtr-main-box rpt-fitl flex">
                  <div className="switch-filter-box  new-edt">
                    <div className={`eachv-filter  filt-act`}>All</div>
                    <div className={`eachv-filter `}>Income</div>
                    <div className={`eachv-filter `}>Expenses </div>
                  </div>
                </div>
              </div>
              <div className="report-dat-fil">
                <div className="choose-file-box rep-date-bx">
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
                <div className="choose-file-box rep-date-bx">
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
              <div className="filt-sett flex jsd-rt">
                <div className="fit-txt">Filter</div>
                <IoSettingsSharp />
              </div>
              <div className="down-btn-box">
                <button className="down-bttn">Download CSV</button>
                <button className="down-bttn exl">Download Excel</button>
                <button className="down-bttn pdff">Download PDF</button>
              </div>
            </div>
            <div className="secont-chart-coloum">
              <ChartCardAcc nill={"nill"} />
              <ChartCardAcc nill={"nill"} />
            </div>
            <div className="third-colum-report">
              <h6>
                <b>Quick Report</b>
              </h6>

              <div className="trd-rport-card">
                <div className="top-tsxt">Reports for Last Month</div>
                <div className="date-ran-txt">From 01 Jul - 31 Jul</div>
                <div className="down-view-container flex">
                  <button className="down-bttn pdff">Download PDF</button>
                  <div className="view-tsxt">View</div>
                </div>
              </div>

              <div className="trd-rport-card">
                <div className="top-tsxt">Tax & Deductions</div>
                <div className="date-ran-txt">Employee Tax & Deductions</div>
                <div className="down-view-container flex">
                  <button className="down-bttn exl">Download Excel</button>
                  <div className="view-tsxt exl-cl">View</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Report;
