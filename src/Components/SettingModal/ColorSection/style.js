import styled from "styled-components";
import { bold, darkBlue, greyish } from "../../../GlobalStyles/variables";

//Font Section

const ColorSelector = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Label = styled.span`
  display: none;
  background-color: ${darkBlue};
  color: ${greyish};
  position: absolute;
  padding: 3px 5px 3px 5px;
  border-radius: 5px;
  top: 78%;
  font-size: 10px;
  font-weight: 400;
`;

const ColorSelectorIcon = styled.span`
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${bold};
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${(prop) => prop.color};
  cursor: pointer;
  &:hover ${Label} {
    display: block;
  }
`;

const TickIcon = styled.img`
  width: 18px;
`;

export { ColorSelector, ColorSelectorIcon, TickIcon, Label };
