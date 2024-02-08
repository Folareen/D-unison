import Layout from "../../components/Layout";
import { IoSearch, IoSettingsSharp } from "react-icons/io5";
import "../../assets/css/orders.css";

const Orders = () => {
  return (
    <div className="orders-service-box">
      <Layout>
        <div className="orders-main-box">
          <div className="top-all-serv flex justify-between">
            <h6>
              <b>Orders</b>
            </h6>
            <button className="add-new-btn">Add New Order</button>
          </div>
          <div className="search-filter-box ">
            <div className="search-service-box">
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
              <div className="filt-sett flex">
                <div className="fit-txt">Filter</div>
                <IoSettingsSharp />
              </div>
            </div>
          </div>
          <div className="tav-cont">
            <table className="table">
              <thead className="tab-head">
                <tr>
                  <th scope="col">Order</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Status</th>
                  <th scope="col">Payment Method</th>
                  <th scope="col">Payment Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="bdy-tabb">
                <tr>
                  <th scope="row" className="frs">
                    #1006H
                  </th>
                  <td>Darlene Robertson</td>
                  <td>
                    <p className="bbrd-col">Completed</p>
                  </td>
                  <td>
                    <p className="bbrd-col">Bank Transfer</p>
                  </td>
                  <td>
                    <p className="sta-pay">Paid</p>
                  </td>
                  <td>
                    <p className="sta-pay">Modify</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="frs">
                    #1006H
                  </th>
                  <td>Darlene Robertson</td>
                  <td>
                    <p className="bbrd-col">Pending</p>
                  </td>
                  <td>
                    <p className="bbrd-col">Card</p>
                  </td>
                  <td>
                    <p className="sta-pay unpaid">Unpaid</p>
                  </td>
                  <td>
                    <p className="sta-pay">Modify</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="frs">
                    #1006H
                  </th>
                  <td>Darlene Robertson</td>
                  <td>
                    <p className="bbrd-col">Processing</p>
                  </td>
                  <td>
                    <p className="bbrd-col">Bank Transfer</p>
                  </td>
                  <td>
                    <p className="sta-pay">Paid</p>
                  </td>
                  <td>
                    <p className="sta-pay">Modify</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Orders;
