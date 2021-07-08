import React from "react";
import CloseIconURL from "../../assets/close.svg";

import TimeSection from "./TimeSection/TimesSection";
import FontSection from "./FontSection/FontSection";
import ColorSection from "./ColorSection/ColorSection";
import {
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  CloseIcon,
  ModalBody,
  ApplyButton,
} from "./settingModalStyle";

function SettingModal() {
  return (
    <ModalWrapper>
      <ModalHeader>
        <ModalTitle>Setting</ModalTitle>
        <CloseIcon src={CloseIconURL} />
      </ModalHeader>
      <ModalBody>
        <TimeSection />
        <FontSection />
        <ColorSection />
        <ApplyButton class="setting_apply">Apply</ApplyButton>
      </ModalBody>
    </ModalWrapper>
  );
}

export default SettingModal;
