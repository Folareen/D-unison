import UserLayout from "../../components/UserLayout";
import UploadService from "../../components/Users/Service/UploadService";
import ProfilePic from "../../components/Users/Settings/ProfilePic";
import UploadedData from "../../components/Users/Service/UploadedData";
import "../../styles/user-service.css";
const ServicePage = () => {
  return (
    <div className="dashboard-container">
      <UserLayout>
        <div className="main-contaner mx-2" style={{ backgroundColor: '#F4F5FA' }}>

          <div className="container card" style={{ borderRadius: '1.5rem' }}>
            <div className="row">



              <div className="col-12 col-lg-6">

                <UploadService />

              </div>

              <div className="col-12 col-lg-6">
                <UploadedData />

              </div>

            </div>

          </div>







        </div>
      </UserLayout>
    </div>
  );
};

export default ServicePage;