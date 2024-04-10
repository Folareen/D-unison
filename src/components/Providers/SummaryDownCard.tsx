import { GoArrowDownLeft } from "react-icons/go";
const SummaryDownCard = ({ title }) => {
  return (
    <div className="summary-top-box">
      <div className="top-cht-tst flex justify-between">
        <div className="lsef-row-txt">
          <div className="lft-tstx">{title}</div>
        </div>
        <div className="rgt-tstx-c">See all</div>
      </div>
      <div className="each-time-summ-box">
        <div className="lft-tstx">5 August, 2023</div>
        <div className="each-summ-card-b flex justify-between">
          <div className="text-line-box flex">
            <div className="icon-bx-summ">
              <GoArrowDownLeft />
            </div>
            <div className="text-line-body ">
              <div className="txt-line">Text line</div>
              <div className="txt-body-summ">Income</div>
            </div>
          </div>

          <div className="time-summ">10:42 PM</div>
          <div className="time-summ">+ $409.00</div>
        </div>
        <div className="each-summ-card-b flex justify-between">
          <div className="text-line-box flex">
            <div className="icon-bx-summ expenses-txt">
              <GoArrowDownLeft />
            </div>
            <div className="text-line-body ">
              <div className="txt-line">Text line</div>
              <div className="txt-body-summ ">Expenses</div>
            </div>
          </div>

          <div className="time-summ">10:42 PM</div>
          <div className="time-summ">+ $409.00</div>
        </div>
      </div>
      <div className="each-time-summ-box">
        <div className="lft-tstx">4 August, 2023</div>
        <div className="each-summ-card-b flex justify-between">
          <div className="text-line-box flex">
            <div className="icon-bx-summ">
              <GoArrowDownLeft />
            </div>
            <div className="text-line-body ">
              <div className="txt-line">Text line</div>
              <div className="txt-body-summ">Income</div>
            </div>
          </div>

          <div className="time-summ">10:42 PM</div>
          <div className="time-summ">+ $409.00</div>
        </div>
        <div className="each-summ-card-b flex justify-between">
          <div className="text-line-box flex">
            <div className="icon-bx-summ expenses-txt">
              <GoArrowDownLeft />
            </div>
            <div className="text-line-body ">
              <div className="txt-line">Text line</div>
              <div className="txt-body-summ ">Expenses</div>
            </div>
          </div>

          <div className="time-summ">10:42 PM</div>
          <div className="time-summ">+ $409.00</div>
        </div>
      </div>
    </div>
  );
};

export default SummaryDownCard;
