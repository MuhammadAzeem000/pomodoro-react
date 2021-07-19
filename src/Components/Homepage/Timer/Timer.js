import React from "react";
import { TimerCircle, TimerText, TimerPause } from "./style";

function Timer() {
  return (
    <TimerCircle>
      <TimerText>00:00</TimerText>
      <TimerPause>PAUSE</TimerPause>
    </TimerCircle>
  );
}

export default Timer;
