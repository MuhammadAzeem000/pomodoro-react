import React, { useState } from "react";
import { TimerCircle, TimerText, TimerPause } from "./style";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { addZero, formatRemainingTime } from "../../../functions/function";

function Timer() {
  const [isPlay, setIsPlay] = useState(true);

  const renderTime = ({ remainingTime }) => {
    return <TimerText>{formatRemainingTime(remainingTime)}</TimerText>;
  };

  return (
    <TimerCircle onClick={() => setIsPlay(!isPlay)}>
      <CountdownCircleTimer
        isPlaying={isPlay}
        strokeWidth={10}
        duration={10}
        colors={[["#FB6B6F"]]}
        size={300}
        trailColor={"transparent"}
      >
        {renderTime}
      </CountdownCircleTimer>
      <TimerPause>{!isPlay && "PAUSE"}</TimerPause>
    </TimerCircle>
  );
}

export default Timer;
