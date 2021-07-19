import React from "react";
import { ModalSection, ModalHeading } from "../settingModalStyle";
import { TimerSettingInput, TimerSetting, Label } from "./style";
import { removeSpace } from "../../../functions/function";

import { useGlobalContext } from "../../../GlobalContext/Context";

function TimeSection({ formSetting, setFormSetting }) {
  const { state, timeValues = state.timeValues } = useGlobalContext();

  function timeHandler(e, title) {
    if (title === "Pomodoro") {
      setFormSetting({
        ...formSetting,
        pomodoroTime: Number(e.target.value),
      });
    } else if (title === "ShortBreak") {
      setFormSetting({
        ...formSetting,
        shortTime: Number(e.target.value),
      });
    } else if (title === "LongBreak") {
      setFormSetting({
        ...formSetting,
        longTime: Number(e.target.value),
      });
    }
  }
  return (
    <ModalSection>
      <ModalHeading>TIME (MINUTES)</ModalHeading>
      {timeValues.map((time, index) => {
        const { title, min, max } = time;
        return (
          <TimerSetting key={index}>
            <Label>{title}</Label>
            <TimerSettingInput
              type="number"
              defaultValue={0}
              onChange={(e) => timeHandler(e, removeSpace(title))}
              min={min}
              max={max}
            />
          </TimerSetting>
        );
      })}
    </ModalSection>
  );
}

export default TimeSection;
