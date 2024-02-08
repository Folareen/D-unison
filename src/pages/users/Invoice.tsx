import UserLayout from "../../components/UserLayout";
import InvoiceCard from "../../components/Users/Invoice/InvoiceCard"
import { IoSearch, IoSettingsSharp } from "react-icons/io5";
const InvoicePage =() =>{
    return(
        <div className="dashboard-container">
            <UserLayout>
            <div className="main-contaner mx-2" style={{backgroundColor:'#F4F5FA'}}> 

            <div className="orders-main-box" style={{marginBottom:'0px'}}>
          <div className="top-all-serv flex justify-between">
            <h6 style={{marginBottom:'2px'}}>
              <b>Invoice</b>
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
                <div className={`eachv-filter `}>Paid</div>
                <div className={`eachv-filter `}>Unpaid</div>
                
              </div>
             
            </div>
          </div>

          </div>

            <InvoiceCard/>
            </div>

            </UserLayout>
            
        </div>
    )
}

export default InvoicePage;