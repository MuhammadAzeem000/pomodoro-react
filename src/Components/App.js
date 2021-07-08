import React from "react";
import Homepage from "./Homepage/Homepage";
import SettingModal from "./SettingModal/SettingModal";
import { useGlobalContext } from "../GlobalContext/Context";

function App() {
  const { isModalOpen } = useGlobalContext();
  return <>{isModalOpen ? <SettingModal /> : <Homepage />}</>;
}

export default App;
