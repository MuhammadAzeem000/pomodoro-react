import React from "react";
import Timer from "./Timer/Timer";
import { useGlobalContext } from "../../GlobalContext/Context";
import SettingIconURL from "../../assets/setting.svg";
import { Logo, Menu, MenuItem, SettingIcon } from "./style";
import {
  HOMEPAGE_MENU_TOGGLE,
  SETTING_TOGGLE,
} from "../../GlobalContext/actionType";

function Homepage() {
  const { dispatch, state, menuItems = state.menuItems } = useGlobalContext();
  return (
    <>
      <Logo>Pomodoro</Logo>
      <Menu>
        {menuItems.map((item) => {
          const { id, title, status } = item;
          return (
            <MenuItem
              key={id}
              isActive={status}
              onClick={() =>
                dispatch({
                  type: HOMEPAGE_MENU_TOGGLE,
                  payload: id,
                })
              }
            >
              {title}
            </MenuItem>
          );
        })}
      </Menu>
      <Timer />
      <SettingIcon
        src={SettingIconURL}
        onClick={() =>
          dispatch({
            type: SETTING_TOGGLE,
            payload: true,
          })
        }
      />
    </>
  );
}

export default Homepage;
