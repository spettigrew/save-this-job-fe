import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./Cal.css";
export default function Cal(props) {
  //set a date to backend
  // can pull in date string and pass to new Date like
  //new Date("Wed Apr 08 2020")

  const [date, setDate] = useState(
    props.updatedJob.applicationDeadline || Date.now()
  );
  const onChange = date => {
    setDate(date);
    console.log(props.updatedJob, "CAL");
    props.setUpdatedJob({
      ...props.updatedJob,
      applicationDeadline: date
    });
  };
  return <Calendar onChange={onChange} value={date} />;
}
