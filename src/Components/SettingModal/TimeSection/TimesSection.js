import React from "react";
import { ModalSection, ModalHeading } from "../settingModalStyle";
import { TimerSettingInput, TimerSetting, Label } from "./style";
import { timeValues } from "../../../data";

function TimeSection() {
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
