import React from "react";
import { ModalSection, ModalHeading } from "../settingModalStyle";
import {
  ColorSelector,
  ColorSelectorIcon,
  TickIcon,
} from "./colorSectionStyle";
import { themeColors } from "../../../data";
import checkIcon from "../../../assets/check.svg";

function ColorSection() {
  return (
    <ModalSection>
      <ModalHeading>COLOR</ModalHeading>
      <ColorSelector>
        {themeColors.map((color, index) => {
          return (
            <ColorSelectorIcon
              key={index}
              color={color.colorCode}
              isActive={color.status}
            >
              {color.status && <TickIcon src={checkIcon} />}
            </ColorSelectorIcon>
          );
        })}
      </ColorSelector>
    </ModalSection>
  );
}

export default ColorSection;
