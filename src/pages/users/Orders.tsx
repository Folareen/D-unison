import React, { useState } from "react"
import OrdersCard from "../../components/Users/Orders/OrdersCard"
import UserLayout from "../../components/UserLayout"
import { FiSearch } from "react-icons/fi";
import { IoSearch, IoSettingsSharp } from "react-icons/io5";
import "../../styles/orders.css";
import PaginationBox from "../../components/Providers/SmallComponent/Pagination";


const OrdersPage = () => {
  const numberOfTimes = 4;
  const [isCompleted, setIsCompleted] = useState(false);
  const [isAll, setIsAll] = useState(false);

  const handleIsPublished = () => {
    setIsCompleted(false);
    setIsAll(false);
  };

  const handleIsCompleted = () => {
    setIsCompleted(true);
    setIsAll(false);
  };

  const handleIsAll = () => {
    setIsComp(false);
    setIsAll(true);
  };

  return (
    <>
      <div className="dashboard-container">
        <UserLayout>
          <div className="main-contaner mx-2" style={{ backgroundColor: '#F4F5FA', }}>
            <div className="orders-main-box" style={{ marginBottom: '0px' }}>
              <div className="top-all-serv flex justify-between">
                <h6 style={{ marginBottom: '0px' }}>
                  <b>Orders</b>
                </h6>

              </div>
              <div className="search-filter-box ">
                <div className="search-service-box search-order">
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
                <div className="filtr-main-box flex">
                  <div className="switch-filter-box">
                    <div className={`eachv-filter  filt-act`}>All</div>
                    <div className={`eachv-filter `}>Pending</div>
                    <div className={`eachv-filter `}>In progress</div>
                    <div className={`eachv-filter `}>Completed</div>
                  </div>

                </div>
              </div>

            </div>

            <div className="container">
              <div className="row">

                {Array.from({ length: numberOfTimes }, (_, index) => (
                  <OrdersCard />
                ))}

              </div>

            </div>
          </div>

          <div className="total-page-box">
            <div className="show-txt mx-4">
              Showing <b>1-10</b> from <b>46</b> data
            </div>
            <div className="pagination-container mx-4">
              {<PaginationBox />}
            </div>
          </div>

        </UserLayout>

      </div>
    </>
  )
}

export default OrdersPage