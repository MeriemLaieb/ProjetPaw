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
      
      <Calendar onChange={onChange} value={date} />
    </div>
  );
}

export default MyCalendar;
