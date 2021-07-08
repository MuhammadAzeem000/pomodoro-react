import React from "react";
import { fontValues } from "../../../data";
import { FontSelector, FontSelectorIcon } from "./fontSectionStyle";
import { ModalSection, ModalHeading } from "../settingModalStyle";

function FontSection() {
  return (
    <ModalSection>
      <ModalHeading>FONTS</ModalHeading>
      <FontSelector>
        {fontValues.map((font, index) => {
          return (
            <FontSelectorIcon key={index} isActive={font.status}>
              Aa
            </FontSelectorIcon>
          );
        })}
      </FontSelector>
    </ModalSection>
  );
}

export default FontSection;
