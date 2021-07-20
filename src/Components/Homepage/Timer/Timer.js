import React, { useState } from "react";
import { TimerCircle, TimerText, TimerPause } from "./style";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { formatRemainingTime } from "../../../functions/function";
import { useGlobalContext } from "../../../GlobalContext/Context";

function Timer() {
  const {
    state,
    color = state.theme.mainColor,
    time = state.currentTime,
  } = useGlobalContext();
  const [isPlay, setIsPlay] = useState(true);

  const renderTime = ({ remainingTime }) => {
    return <TimerText>{formatRemainingTime(remainingTime)}</TimerText>;
  };

  return (
    <TimerCircle onClick={() => setIsPlay(!isPlay)}>
      <CountdownCircleTimer
        isPlaying={isPlay}
        strokeWidth={10}
        duration={time}
        colors={[[color]]}
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
