import React from "react";
import { ModalSection, ModalHeading } from "../settingModalStyle";
import { TimerSettingInput, TimerSetting, Label } from "./style";
import { minToSec } from "../../../functions/function";
import { titles } from "../../../GlobalStyles/variables";

import { useGlobalContext } from "../../../GlobalContext/Context";

function TimeSection({ formSetting, setFormSetting }) {
  const { state, timeValues = state.timeValues } = useGlobalContext();
  function timeHandler(e, title) {
    if (title === titles[0]) {
      setFormSetting({
        ...formSetting,
        pomodoroTime: minToSec(Number(e.target.value)),
      });
    } else if (title === titles[1]) {
      setFormSetting({
        ...formSetting,
        shortTime: minToSec(Number(e.target.value)),
      });
    } else if (title === titles[2]) {
      setFormSetting({
        ...formSetting,
        longTime: minToSec(Number(e.target.value)),
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
              onChange={(e) => timeHandler(e, title)}
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
