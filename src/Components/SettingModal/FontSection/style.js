import styled from "styled-components";
import { greyish, bold, darkBlue } from "../../../globalStyle";

//Font Section

const FontSelector = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const FontSelectorIcon = styled.span`
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${bold};
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${(prop) => (prop.isActive ? darkBlue : greyish)};
  color: ${(prop) => (prop.isActive ? greyish : darkBlue)};
  cursor: pointer;
`;

export { FontSelector, FontSelectorIcon };
