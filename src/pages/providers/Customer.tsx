import Layout from "../../components/Layout";
import "../../assets/css/customer.css";
import { FiSearch } from "react-icons/fi";
import CustomerCard from "../../components/Services/CustomerCard";
import PaginationBox from "../../components/Services/SmallComponent/Pagination";

const Customer = () => {
  return (
    <div className="customer-container">
      <Layout>
        <div className="customer-main-box">
          <div className="cus-search-box flex justify-between">
            <h6>
              <b>Customers</b>
            </h6>
            <div className="input-container-box">
              <input
                type="text"
                className="bx-inp"
                placeholder="Search Customer  here "
              />
              <FiSearch className="seac-icon" />
            </div>
            <div className=""></div>
          </div>
          <div className="customer-card-row-box">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            
          </div>
          <div className="total-page-box">
            <div className="show-txt">
              Showing <b>1-10</b> from <b>46</b> data
            </div>
            <div className="pagination-container">
              { <PaginationBox  /> }
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Customer;
