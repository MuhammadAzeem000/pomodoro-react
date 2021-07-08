import styled from "styled-components";
import { greyish, bold } from "../../../globalStyle";

//Font Section

const ColorSelector = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ColorSelectorIcon = styled.span`
  ${(prop) => console.log(prop.color)}
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${bold};
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${(prop) => prop.color};
`;

const TickIcon = styled.img`
  width: 18px;
`;

export { ColorSelector, ColorSelectorIcon, TickIcon };
