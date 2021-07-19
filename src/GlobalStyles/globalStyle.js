import { createGlobalStyle } from "styled-components";
import { darkBlue, bold, white } from "./variables";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  font-family: ${({ theme }) => theme.mainFont};
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

export { GlobalStyle };
