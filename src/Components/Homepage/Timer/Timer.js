import React, { useState, useEffect } from "react";
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

  const [clockState, setClockState] = useState({ isPause: true, index: 0 });

  useEffect(() => {
    setClockState((prevState) => ({
      ...prevState,
      index: prevState.index + 1,
    }));
  }, [time]);

  const renderTime = ({ remainingTime }) => {
    return <TimerText>{formatRemainingTime(remainingTime)}</TimerText>;
  };

  return (
    <TimerCircle
      onClick={() =>
        setClockState((prevState) => ({
          ...prevState,
          isPause: !prevState.isPause,
        }))
      }
    >
      <CountdownCircleTimer
        key={clockState.index}
        isPlaying={clockState.isPause}
        strokeWidth={10}
        duration={time}
        colors={[[color]]}
        size={300}
        trailColor={"transparent"}
      >
        {renderTime}
      </CountdownCircleTimer>
      <TimerPause>{!clockState.isPause && "PAUSE"}</TimerPause>
    </TimerCircle>
  );
}

export default Timer;
