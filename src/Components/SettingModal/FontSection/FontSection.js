import React from "react";
import { FontSelector, FontSelectorIcon } from "./style";
import { ModalSection, ModalHeading } from "../settingModalStyle";
import { SETTING_FONT_TOGGLE } from "../../../GlobalContext/actionType";

import { useGlobalContext } from "../../../GlobalContext/Context";

function FontSection() {
  const { fontValues, dispatch } = useGlobalContext();
  return (
    <ModalSection>
      <ModalHeading>FONTS</ModalHeading>
      <FontSelector>
        {fontValues.map((font) => {
          const { id, status } = font;
          return (
            <FontSelectorIcon
              key={id}
              isActive={status}
              onClick={() =>
                dispatch({ type: SETTING_FONT_TOGGLE, payload: id })
              }
            >
              Aa
            </FontSelectorIcon>
          );
        })}
      </FontSelector>
    </ModalSection>
  );
}

export default FontSection;
