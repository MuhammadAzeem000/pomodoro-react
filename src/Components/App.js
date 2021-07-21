import React from "react";
import Homepage from "./Homepage/Homepage";
import SettingModal from "./SettingModal/SettingModal";
import { useGlobalContext } from "../GlobalContext/Context";
import { GlobalStyle } from "../GlobalStyles/globalStyle";
import { ThemeProvider } from "styled-components";
function App() {
  const {
    state,
    isModalOpen = state.isModalOpen,
    theme = state.theme,
  } = useGlobalContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Homepage />
        {isModalOpen && <SettingModal />}
      </ThemeProvider>
    </>
  );
}

export default App;
