import { Logo, Menu, MenuItem, SettingIcon } from "./appStyle";
import SettingIconURL from "../assets/setting.svg";
import { menuItems } from "../data";
import Timer from "./Timer/Timer";

function App() {
  return (
    <>
      <Logo>Pomodoro</Logo>
      <Menu>
        {menuItems.map((item, index) => {
          return (
            <MenuItem key={index} isActive={item.status}>
              {item.title}
            </MenuItem>
          );
        })}
      </Menu>
      <Timer />
      <SettingIcon src={SettingIconURL} />
    </>
  );
}

export default App;
