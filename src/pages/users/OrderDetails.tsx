import UserLayout from "../../components/UserLayout";
import MainDetails from "../../components/Users/OrderDetails/MainDetails";
const OrderDetailsPage =()=>{
    return(
        <>
        <div className="dashboard-container">
      <UserLayout>
        <div className="main-contaner mx-2" style={{backgroundColor:'#F4F5FA'}}>

            <MainDetails/>

        </div>
        </UserLayout>
        </div>

        </>
    )
}

export default OrderDetailsPage;