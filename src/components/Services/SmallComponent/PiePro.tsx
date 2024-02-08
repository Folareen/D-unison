import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const PiePro = ({ percentage, pathbg, bg }) => {
  return (
    <div className="pieceas">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          rotation: 1,
          strokeLinecap: "butt",
          textSize: "12px",
          pathTransitionDuration: 0.25,
          pathColor: pathbg,
          textColor: "#000",
          trailColor: bg,
          backgroundColor: bg,
          width: "90px",
        })}
      />
    </div>
  );
};

export default PiePro;
