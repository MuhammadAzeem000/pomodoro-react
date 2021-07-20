import React, { useState } from "react";
import TimeSection from "./TimeSection/TimesSection";
import FontSection from "./FontSection/FontSection";
import ColorSection from "./ColorSection/ColorSection";
import {
  SETTING_TOGGLE,
  SETTING_FORM_SUBMIT,
} from "../../GlobalContext/actionType";
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
  const Components = [TimeSection, FontSection, ColorSection];
  const { state, dispatch } = useGlobalContext();
  const [formSetting, setFormSetting] = useState({
    pomodoroTime: 0,
    shortTime: 0,
    longTime: 0,
    fontName: state.theme.mainFont,
    colorName: state.theme.mainColor,
  });
  function formHandler(e) {
    e.preventDefault();
    dispatch({
      type: SETTING_FORM_SUBMIT,
      payload: formSetting,
    });
  }
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

        <ApplyButton onClick={formHandler}>Apply</ApplyButton>
      </ModalBody>
    </ModalWrapper>
  );
}

export default SettingModal;
