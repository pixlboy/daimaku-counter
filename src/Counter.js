import React from "react";
import Countdown from "react-countdown";

export default function Counter(){
  return(<Countdown date={new Date('2021-03-16')} />)
};