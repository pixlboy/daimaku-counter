import React from "react";
import Countdown from "react-countdown";

export default function Counter(){
  return(<Countdown date={new Date(process.env.REACT_APP_COUNTER_DATE)} />)
};