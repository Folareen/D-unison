import Layout from "../../components/Layout";
import { MdDateRange } from "react-icons/md";
import "../../assets/css/income.css";
import { IoSettingsSharp } from "react-icons/io5";
import SummaryDownCard from "../../components/Services/SummaryDownCard";
import CalenderCard from "../../components/Services/CalenderCard";
import SmallExpCard from "../../components/Services/SmallExpCard";
import IncomeTopCard from "../../components/Services/IncomeTopCard";

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
const Income = () => {
  return (
    <div className="expense-container">
      <Layout>
        <div className="expense-box-cont">
          <div className="title-filter-box flex justify-between">
            <h6>
              <b>Income Overview</b>
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
          <div className="first-row-income flex">
            <SmallExpCard
              imgUrl={"images/dollar.png"}
              txt={"Total Income"}
              amt={"N30,151"}
            />
            <SmallExpCard
              imgUrl={"images/map.png"}
              txt={"Cost of Goods Sold"}
              amt={"N20,001"}
            />
            <SmallExpCard
              imgUrl={"images/dollar.png"}
              txt={"Balance"}
              amt={"N30,151"}
            />
          </div>
          <div className="first-row-income flex">
            <SmallExpCard
              imgUrl={"images/map.png"}
              txt={"Cah at Hand "}
              amt={"N20,001"}
            />
            <SmallExpCard
              imgUrl={"images/map.png"}
              txt={"Card Payment"}
              amt={"N20,001"}
            />{" "}
            <SmallExpCard
              imgUrl={"images/map.png"}
              txt={"Bank Account"}
              amt={"N20,001"}
            />{" "}
            <SmallExpCard
              imgUrl={"images/map.png"}
              txt={"Other"}
              amt={"N20,001"}
            />
          </div>
          <div className="acc-row-for-cards flex">
            <div className="dow-row-container flex just-new ">
              <div className="summary-acc-coloum wid-inc">
                <IncomeTopCard />
                <SummaryDownCard title={"Recent Paid Orders"} />
              </div>
              <div className="calender-coloum cal-inc-wid">
                <CalenderCard />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Income;
