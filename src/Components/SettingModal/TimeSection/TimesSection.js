import React from "react";
import { ModalSection, ModalHeading } from "../settingModalStyle";
import { TimerSettingInput, TimerSetting, Label } from "./timerSectionStyle";
import { timeValues } from "../../../data";

function TimeSection() {
  return (
    <ModalSection>
      <ModalHeading>TIME (MINUTES)</ModalHeading>
      {timeValues.map((time, index) => {
        return (
          <TimerSetting key={index}>
            <Label>{time.title}</Label>
            <TimerSettingInput
              type="number"
              defaultValue={0}
              min={time.min}
              max={time.max}
            />
          </TimerSetting>
        );
      })}
    </ModalSection>
  );
}

export default TimeSection;
