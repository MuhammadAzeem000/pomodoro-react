import styled from "styled-components";
import {
  darkBlue,
  white,
  softRed,
  bold,
  borderBottom,
} from "../../globalStyle";

//Main Body
const ModalWrapper = styled.form`
  position: relative;
  background-color: ${white};
  border-radius: 5px;
  color: ${darkBlue};
  min-width: 365px;
`;

//Header
const ModalHeader = styled.div`
  padding: 10px 20px 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${borderBottom};
`;

const ModalTitle = styled.h1`
  font-size: 18px;
`;

const CloseIcon = styled.img`
  width: 14px;
  cursor: pointer;
`;

//Body

const ModalBody = styled.div`
  padding: 0px 0px 30px 0px;
`;

//Default Modal Settings

const ModalHeading = styled.h1`
  font-size: 14px;
  letter-spacing: 5px;
  text-align: center;
  margin-bottom: 10px;
`;

const ModalSection = styled.div`
  padding: 10px;
  border-bottom: ${borderBottom};
  :nth-child(3) {
    border-bottom: none;
  }
`;

const ApplyButton = styled.button`
  position: absolute;
  bottom: -30px;
  transform: translateX(100%);
  border: none;
  padding: 15px 30px 15px 30px;
  background-color: ${softRed};
  color: ${white};
  font-weight: ${bold};
  border-radius: 50px;
  font-size: 18px;
  cursor: pointer;
`;

export {
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  CloseIcon,
  ModalBody,
  ModalSection,
  ModalHeading,
  ApplyButton,
};