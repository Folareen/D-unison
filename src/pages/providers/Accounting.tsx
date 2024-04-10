import Layout from "../../components/Layout";
import { MdDateRange } from "react-icons/md";
import "../../styles/accounting.css";
import { IoSettingsSharp } from "react-icons/io5";
import AccountingSmallCard from "../../components/Providers/AccountingSmallCard";
import ChartCardAcc from "../../components/Providers/ChartCardAcc";
import SummaryTopAccCard from "../../components/Providers/SummaryTopAccCard";
import SummaryDownCard from "../../components/Providers/SummaryDownCard";
import CalenderCard from "../../components/Providers/CalenderCard";

const data = [
  {
    name: "Income",
    tot: "$30,400",
    imgUrl: "/images/inc.png",
  },
  {
    name: "Expenses",
    tot: "$42,000",
    imgUrl: "/images/bag.png",
    col: "amr",
  },
  {
    name: "Profit",
    tot: "$30,400",
    imgUrl: "/images/inc.png",
  },
];
const Accounting = () => {
  return (
    <div className="expense-container">
      <Layout>
        <div className="expense-box-cont">
          <div className="title-filter-box flex justify-between">
            <h6>
              <b>Overview</b>
            </h6>
            <div className="filter-expenses flex  acc-filter-bx ">
              <div className="date-filter-box flex acc-date-filt">
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
              <div className="filt-sett flex">
                <div className="fit-txt">Filter</div>
                <IoSettingsSharp />
              </div>
            </div>
          </div>
          <div className="acc-row-for-cards flex">
            {data.map((item, index) => (
              <AccountingSmallCard
                key={index} // Add a unique key for each iteration
                item={item}
              />
            ))}
          </div>
          <div className="dow-row-container flex account-row">
            <div className="chart-acc-coloum">
              <ChartCardAcc />
              <ChartCardAcc />
            </div>
            <div className="summary-acc-coloum">
              <SummaryTopAccCard />
              <SummaryDownCard title={"Recent Transactions"} />
            </div>
            <div className="calender-coloum">
              <CalenderCard />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Accounting;
