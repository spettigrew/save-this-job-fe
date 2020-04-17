import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Cal(props) {
  //set a date to backend
  // can pull in date string and pass to new Date like
  //new Date("Wed Apr 08 2020")
  const [date, setDate] = useState(new Date(props.dueDate));
  const onChange = date => setDate(date);
  return <Calendar onChange={onChange} value={date} />;
}
