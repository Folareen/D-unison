import UserLayout from "../../components/UserLayout";
import Top from "../../components/Users/Dashboard/Top";
import Section from "../../components/Users/Dashboard/Section";
import NavTable from "../../components/Users/Dashboard/Table";
import ServiceTab from "../../components/Users/Dashboard/ServiceTab";
import MobileTopCard from "../../components/Users/Dashboard/MobileTopCard";
//import "../../components/Users/Dashboard/DashStyle.css"
const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <UserLayout>
        <div className="main-contaner mx-2" style={{backgroundColor:'#F4F5FA'}}> 
        <MobileTopCard className=""/>

        <Top className=""/>

        <Section/>

        <div className="container">
            <div className="row">
            <NavTable/>
           

            </div>

        </div>

        




        
        </div>
      </UserLayout>
    </div>
  );
};

export default UserDashboard;