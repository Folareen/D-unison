import UserLayout from "../../components/UserLayout";
import UpdateForm from "../../components/Users/Settings/UpdateForm";
import ProfilePic from "../../components/Users/Settings/ProfilePic";
const SettingsPage = () => {
  return (
    <div className="dashboard-container">
      <UserLayout>
        <div className="main-contaner mx-2" style={{backgroundColor:'#F4F5FA'}}> 

            <div className="container card" style={{borderRadius:'1.5rem'}}>
                <div className="row">
                    <div className="col-12 d-lg-none">
                        <ProfilePic/>

                    </div>
                    
                    
                        <div className="col-12 col-lg-6">
                            
                            <UpdateForm/>

                        </div>

                        <div className="col-12 col-lg-6 d-none d-md-block">
                            <ProfilePic/>

                        </div>

                </div>

            </div>
        
        




        
        </div>
      </UserLayout>
    </div>
  );
};

export default SettingsPage;