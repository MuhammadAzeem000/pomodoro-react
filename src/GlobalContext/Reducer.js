import { toggleItem } from "../functions/function";
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
      const { fontName, colorName } = action.payload;
      console.log({ fontName, colorName });
      return {
        ...state,
        theme: { ...state.theme, mainColor: colorName, mainFont: fontName },
        isModalOpen: false,
      };
    }
    default: {
      return state;
    }
  }
};
