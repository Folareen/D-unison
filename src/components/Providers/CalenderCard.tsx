import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const CalenderCard = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="cal-box-container">
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} selectRange={true} />
      </div>

      {/* {date.length > 0 ? (
        <p className="text-center">
          <span className="bold">Start:</span> {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className="bold">End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">
          <span className="bold">Default selected date:</span>{" "}
          {date.toDateString()}
        </p>
      )} */}

      <div className="filter-cancel-btn">
        <button className="btn-fil-can">Cancel</button>
        <button className="btn-fil-can fil-btn">Filter</button>
      </div>
    </div>
  );
};

export default CalenderCard;
