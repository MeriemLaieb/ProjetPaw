import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div className="nouv">
     <div className="cal-title"><h1>Calendar</h1></div> 
      <Calendar onChange={onChange} value={date} />
    </div>
  );
}

export default MyCalendar;
