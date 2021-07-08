import React from "react";
import { TimerCircle, TimerText, TimerPause } from "./timerStyle";

function Timer() {
  return (
    <TimerCircle>
      <TimerText>17:59</TimerText>
      <TimerPause>PAUSE</TimerPause>
    </TimerCircle>
  );
}

export default Timer;
