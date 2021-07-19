import styled from "styled-components";
import { veryDarkBlue, white } from "../../../globalStyle";

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
  font-size: 16px;
  letter-spacing: 10px;
`;

export { TimerCircle, TimerText, TimerPause };
