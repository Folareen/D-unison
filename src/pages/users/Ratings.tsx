import RatingsHeader from "../../components/Users/Ratings/RatingsHeader";
import RatingsCard from "../../components/Users/Ratings/RatingsCard";
import UserLayout from "../../components/UserLayout";
import ratings from "../../assets/ratings.png";

const RatingsPage = ()=>{
    const data = [
        { img: <img src={ratings} className="rating-img"/>, count: 75, for: "Provider's name" },
        { img: <img src={ratings} className="rating-img"/>, count: 357, for: "Provider's name" },
        { img: <img src={ratings} className="rating-img" />, count: 650, for: "Provider's name" },
        { img:  <img src={ratings} className="rating-img"/>, count: "$128000", for: "Provider's name" },
      ];
    return(
        <>
        <div className="dashboard-container">
            <UserLayout>
            <div className="main-contaner mx-2" style={{backgroundColor:'#F4F5FA'}}> 
            <RatingsHeader/>

            <div className="row-crd flex justify-between ">
            {data.map((item, index) => (
              <RatingsCard
                key={index}
                img={item.img}
                count={item.count}
                forText={item.for}
              />
            ))}
          </div>
        
            </div>

            </UserLayout>
        </div>
        
        </>
    )
}

export default RatingsPage;