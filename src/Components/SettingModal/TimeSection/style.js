import styled from "styled-components";
import { greyish, medium } from "../../../GlobalStyles/variables";

//Timer Section
const TimerSetting = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 15px;
`;

const TimerSettingInput = styled.input`
  border: none;
  background-color: ${greyish};
  width: 150px;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: ${medium};
`;

export { TimerSetting, TimerSettingInput, Label };
