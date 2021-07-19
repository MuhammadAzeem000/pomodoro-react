import React from "react";
import { FontSelector, FontSelectorIcon, Label } from "./style";
import { ModalSection, ModalHeading } from "../settingModalStyle";
import { SETTING_FONT_TOGGLE } from "../../../GlobalContext/actionType";

import { useGlobalContext } from "../../../GlobalContext/Context";

function FontSection({ formSetting, setFormSetting }) {
  const { dispatch, state, fontValues = state.fontValues } = useGlobalContext();
  function fontHandler(id, title) {
    dispatch({ type: SETTING_FONT_TOGGLE, payload: id });
    setFormSetting({ ...formSetting, fontName: title });
  }
  return (
    <ModalSection>
      <ModalHeading>FONTS</ModalHeading>
      <FontSelector>
        {fontValues.map((font) => {
          const { id, title, status } = font;
          return (
            <div key={id}>
              <FontSelectorIcon
                isActive={status}
                onClick={() => fontHandler(id, title)}
              >
                Aa
                <Label isActive={status}>{title}</Label>
              </FontSelectorIcon>
            </div>
          );
        })}
      </FontSelector>
    </ModalSection>
  );
}

export default FontSection;
