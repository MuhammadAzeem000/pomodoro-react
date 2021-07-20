import styled from "styled-components";
import { veryDarkBlue, white } from "../../../GlobalStyles/variables";

const TimerCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 350px;
  width: 350px;
  border-radius: 50%;
  background-color: ${veryDarkBlue};
  color: ${white};
  margin: 30px 0px 30px 0px;
  cursor: pointer;
`;

const TimerText = styled.h1`
  font-size: 75px;
  margin: 0px;
  text-align: center;
`;

const TimerPause = styled.p`
  position: absolute;
  bottom: 33%;
  font-size: 16px;
  letter-spacing: 10px;
`;

export { TimerCircle, TimerText, TimerPause };
