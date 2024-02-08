import { MdArrowOutward } from "react-icons/md";
const ReportSmall = () => {
  return (
    <div className="report-small-box">
      <div className="first-bx">
        <div className="rrow-icon">
          <MdArrowOutward />
        </div>
        <div className="disc-bdy-bx">
          <div className="dis-tst">Description</div>
          <div className="disc-bdy">Employee</div>
        </div>
      </div>
      <div className="second-txt">25/09/2023</div>
      <div className="amont-title">-N409.00</div>
      <div className="amont-title">Manager</div>
    </div>
  );
};

export default ReportSmall;
