import React from "react";
import { ModalSection, ModalHeading } from "../settingModalStyle";
import { ColorSelector, ColorSelectorIcon, TickIcon } from "./style";

import checkIcon from "../../../assets/check.svg";
import { useGlobalContext } from "../../../GlobalContext/Context";
import { SETTING_COLOR_TOGGLE } from "../../../GlobalContext/actionType";

function ColorSection({ formSetting, setFormSetting }) {
  const {
    state,
    dispatch,
    themeColors = state.themeColors,
  } = useGlobalContext();
  function colorHandler(id, colorCode) {
    dispatch({ type: SETTING_COLOR_TOGGLE, payload: id });
    setFormSetting({ ...formSetting, colorName: colorCode });
  }
  return (
    <ModalSection>
      <ModalHeading>COLOR</ModalHeading>
      <ColorSelector>
        {themeColors.map((color) => {
          const { id, colorCode, status, title } = color;
          return (
            <ColorSelectorIcon
              key={id}
              color={colorCode}
              isActive={status}
              onClick={() => colorHandler(id, colorCode)}
            >
              {status && <TickIcon src={checkIcon} />}
            </ColorSelectorIcon>
          );
        })}
      </ColorSelector>
    </ModalSection>
  );
}

export default ColorSection;
