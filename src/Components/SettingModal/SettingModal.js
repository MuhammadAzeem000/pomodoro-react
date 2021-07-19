import React, { useState } from "react";
import TimeSection from "./TimeSection/TimesSection";
import FontSection from "./FontSection/FontSection";
import ColorSection from "./ColorSection/ColorSection";
import { SETTING_TOGGLE } from "../../GlobalContext/actionType";
import { useGlobalContext } from "../../GlobalContext/Context";

import CloseIconURL from "../../assets/close.svg";

import {
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  CloseIcon,
  ModalBody,
  ApplyButton,
} from "./settingModalStyle";

function SettingModal() {
  const [formSetting, setFormSetting] = useState({
    pomodoroTime: null,
    shortTime: null,
    longTime: null,
    fontName: null,
    colorName: null,
  });
  const { dispatch } = useGlobalContext();
  const Components = [TimeSection, FontSection, ColorSection];
  console.log(Components);
  return (
    <ModalWrapper>
      <ModalHeader>
        <ModalTitle>Setting</ModalTitle>
        <CloseIcon
          src={CloseIconURL}
          onClick={() =>
            dispatch({
              type: SETTING_TOGGLE,
              payload: false,
            })
          }
        />
      </ModalHeader>
      <ModalBody>
        {Components.map((Component, index) => {
          return (
            <Component
              key={index}
              formSetting={formSetting}
              setFormSetting={setFormSetting}
            />
          );
        })}

        <ApplyButton type="submit">Apply</ApplyButton>
      </ModalBody>
    </ModalWrapper>
  );
}

export default SettingModal;
