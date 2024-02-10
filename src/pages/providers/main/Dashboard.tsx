import "../../../styles/dash.css";
import user_logo from "../../assets/images/user_logo.png";
import Layout from "../../../components/Layout";
import { IoCalendarClear, IoChevronDown } from "react-icons/io5";
import RecAdx from "../../../components/Services/SmallComponent/recAdx";
import DasCrd from "../../../components/Services/SmallComponent/dasCrd";
import PieCard from "../../../components/Services/SmallComponent/PieCard";
import ChartOrder from "../../../components/Services/SmallComponent/ChartOrder";
import SliderBox from "../../../components/Services/SmallComponent/Slider";

import { AiOutlineSetting } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { LuMessageSquareDashed } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { FaChevronDown, FaStar, FaUndo } from "react-icons/fa";
import { HiOutlineFunnel } from "react-icons/hi2";

const data = [
  { img: "/images/l3.png", count: 75, for: "Total Customers" },
  { img: "/images/l2.png", count: 357, for: "Total Service Delivered" },
  { img: "/images/l1.png", count: 650, for: "Total Orders" },
  { img: "/images/l4.png", count: "$128000", for: "Total Revenue" },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Layout page="Dashboard">
        <div className="main-contaner">
          <div className="greeting-fiter-container flex justify-between mb-3">

            <div className="greet-cont">
              <div className="greet-bx d-none d-lg-block">
                <h6>
                  Dashboard
                </h6>
                <div className="txt-grt">
                  Hi, Samantha. Welcome back to your Service Dashboard!
                </div>
              </div>
              <div className="filter-cont">
                <div className="filter-btn">
                  <div>
                    <HiOutlineFunnel size={24} />
                  </div>
                </div>
                <div className="filter-btn">
                  <div>
                    Filter By
                  </div>
                </div>
                <button className="filter-btn ">
                  <div style={{ marginRight: '20px' }}>
                    Date
                  </div>
                  <FaChevronDown />
                </button>
                <button className="filter-btn" style={{ borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>
                  <FaUndo color="#EA0234" size={18} />
                  <div style={{ color: "#EA0234", marginLeft: '8px' }}>
                    Reset Filter
                  </div>
                </button>
              </div>

            </div>


            <div className="d-lg-none">
              <div className="filter-bx ">
                <div className="each-icon flex">
                  <IoCalendarClear />
                </div>
                <div className="filt-perd">
                  <div className="flt-txt">Filter Period</div>
                  <div className="flt-dat">17 April 2023 - 21 May 2023</div>
                </div>
                <IoChevronDown />
              </div>
            </div>
          </div>
          <RecAdx />



          <div className="container card d-md-none " style={{ backgroundColor: 'white', borderRadius: '1.5rem', height: '200px' }}>
            <div className="row">
              {data.map((item, index) => (

                <div className="col-6 dash-sm">

                  <div className="container mt-4 px-3 " style={{ padding: '0px' }}> <div className="row">
                    <div className="col-4">
                      <img src={item.img} style={{ width: '65px' }} />
                    </div> <div className="col-8">
                      <p className="mt-2" style={{ marginLeft: '20px', marginBottom: '2px', fontSize: '16px', color: 'black', fontWeight: '600' }}>{item.count}</p> <div> <h6 style={{ marginLeft: '20px', fontSize: '12px', color: 'black', fontWeight: '' }}>{item.for}</h6>
                      </div>
                    </div>
                  </div>
                  </div>

                </div>
              ))}

            </div>

          </div>

          <div className="row-crd flex justify-between serv-lg">
            {data.map((item, index) => (
              <DasCrd
                key={index}
                img={item.img}
                count={item.count}
                forText={item.for}
              />
            ))}
          </div>

          <div className="chart-box">
            <div
              className="pie-main-box justify-between"
              style={{ marginTop: "40px" }}
            >
              <PieCard />
              <ChartOrder />
            </div>
          </div>
          <div className="slidw-box">
            <SliderBox />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
