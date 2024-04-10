import Layout from "../../components/Layout";
import "../../styles/allservice.css";
import { IoSearch, IoSettingsSharp } from "react-icons/io5";
import ServiceCard from "../../components/Providers/ServiceCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import PaginationBox from "../../components/Providers/SmallComponent/Pagination";

const AllServices = () => {
  const [isDraft, setIsDraft] = useState(false);

  const handleIsDraft = () => {
    setIsDraft(true);
  };
  const handleIsDraftClose = () => {
    setIsDraft(false);
  };

  return (
    <div className="all-service-container">
      <Layout>
        <div className="all-service-box-container">
          <div className="top-all-serv flex justify-between">
            <h6>
              <b>My services</b>
            </h6>
            <Link to="/add-service">
              <button className="add-new-btn">Add New</button>
            </Link>
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
            <div className="filtr-main-box serv-mob d-flex justify-content-center align-items-center flex">
              <div className="switch-filter-box">
                <div
                  className={isDraft ? `each-filter` : `each-filter  filt-act`}
                  onClick={handleIsDraftClose}
                >
                  Published
                </div>
                <div
                  className={isDraft ? `each-filter filt-act` : `each-filter `}
                  onClick={handleIsDraft}
                >
                  Draft
                </div>
              </div>
              <div className="filt-sett flex">
                <div className="fit-txt">Filter</div>
                <IoSettingsSharp />
              </div>
            </div>
          </div>
          {isDraft && (
            <div className="">
              <div className="">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-4">
                      <ServiceCard />


                    </div>
                    <div className="col-12 col-lg-4">
                      <ServiceCard />


                    </div>
                    <div className="col-12 col-lg-4">
                      <ServiceCard />


                    </div>

                  </div>

                </div>
              </div>

            </div>
          )}
          {!isDraft && (
            <div className="">
              <div className="">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                      <ServiceCard />


                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <ServiceCard />


                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <ServiceCard />


                    </div>

                  </div>

                </div>
              </div>

            </div>
          )}

          <div className="total-page-box">
            <div className="show-txt mx-4">
              Showing <b>1-10</b> from <b>46</b> data
            </div>
            <div className="pagination-container mx-4">
              {<PaginationBox />}
            </div>
          </div>


        </div>
      </Layout>
    </div>
  );
};

export default AllServices;
