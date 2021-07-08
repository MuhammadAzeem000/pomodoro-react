import { createGlobalStyle } from "styled-components";
//Theme Colors
const softRed = "#fb6b6f";
const softBlue = "#72F1F8";
const softPurple = "#D883FC";

//Other Colors
const darkBlue = "#1e2142";
const veryDarkBlue = "#141a30";
const white = "#fff";
const greyish = "#eef0fc";
const medium = 500;
const bold = 700;
const borderBottom = `2px solid ${greyish}`;

const GlobalStyle = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
}
body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${darkBlue};
    color: ${white};
    height: 100vh;
}
  input {
  font-weight: ${bold};
}

input[type="number"]::-webkit-inner-spin-button {
  opacity: 1;
}

ul {
  padding: 0px;
  margin: 0px;
  li {
    list-style: none;
  }
}
`;

export {
  GlobalStyle,
  softRed,
  softBlue,
  softPurple,
  darkBlue,
  veryDarkBlue,
  white,
  greyish,
  medium,
  bold,
  borderBottom,
};
