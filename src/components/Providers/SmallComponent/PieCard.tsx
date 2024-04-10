import { HiDotsVertical } from "react-icons/hi";
import PiePro from "./PiePro";

const data = [
  { percentage: 100, pathbg: "#00B074", bg: "rgba(255, 91, 91, 0.15)", status:"Completed" },
  {
    percentage: 65,
    pathbg: "rgba(45, 156, 219, 0.3)",
    bg: "rgba(45, 156, 219, 0.3)",
    status:"Processing"
  },
  { percentage: 20, pathbg: "#DB2D2D", bg: "rgba(45, 156, 219, 0.15)", status:"Cancelled" },
];

const PieCard = () => {
  return (
    <div className="pie-card-container ">
      <div className="pie-bx-flx flex justify-between">
        <h6>
          <b>Pie Chart</b>
        </h6>
        <HiDotsVertical className="dot-icon" />
      </div>
      <div className="row-box-pie">
        {data.map(({ percentage, pathbg, bg,status }, index) => (
          <div key={index} className="pie-card-nm">
            <PiePro percentage={percentage} pathbg={pathbg} bg={bg} />
            <p className="mt-3" style={{marginLeft:'', fontSize:'.8rem'}}>{status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieCard;
