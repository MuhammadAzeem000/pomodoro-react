import { toggleItem, findItemById, setTimings } from "../functions/function";
import {
  HOMEPAGE_MENU_TOGGLE,
  SETTING_TOGGLE,
  SETTING_FONT_TOGGLE,
  SETTING_COLOR_TOGGLE,
  SETTING_FORM_SUBMIT,
} from "./actionType";

export default (state, action) => {
  switch (action.type) {
    case HOMEPAGE_MENU_TOGGLE: {
      return {
        ...state,
        menuItems: toggleItem(state.menuItems, action.payload),
        currentTime: findItemById(state.menuItems, action.payload),
      };
    }
    case SETTING_FONT_TOGGLE: {
      return {
        ...state,
        fontValues: toggleItem(state.fontValues, action.payload),
      };
    }
    case SETTING_COLOR_TOGGLE: {
      return {
        ...state,
        themeColors: toggleItem(state.themeColors, action.payload),
      };
    }
    case SETTING_TOGGLE: {
      return {
        ...state,
        isModalOpen: action.payload,
      };
    }
    case SETTING_FORM_SUBMIT: {
      const { pomodoroTime, fontName, colorName } = action.payload;
      return {
        ...state,
        menuItems: setTimings(state.menuItems, action.payload),
        theme: { ...state.theme, mainColor: colorName, mainFont: fontName },
        currentTime: pomodoroTime,
        isModalOpen: false,
      };
    }
    default: {
      return state;
    }
  }
};
