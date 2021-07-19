import styled from "styled-components";
import { greyish, bold, darkBlue } from "../../../GlobalStyles/variables";

//Font Section

const FontSelector = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Label = styled.span`
  display: none;
  background-color: ${({ isActive }) => (isActive ? darkBlue : greyish)};
  color: ${({ isActive }) => (isActive ? greyish : darkBlue)};
  position: absolute;
  padding: 3px 5px 3px 5px;
  border-radius: 5px;
  top: 110%;
  font-size: 10px;
  font-weight: 400;
`;

const FontSelectorIcon = styled.span`
  position: relative;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${bold};
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? darkBlue : greyish)};
  color: ${({ isActive }) => (isActive ? greyish : darkBlue)};
  cursor: pointer;
  &:hover ${Label} {
    display: block;
  }
`;

export { FontSelector, FontSelectorIcon, Label };
