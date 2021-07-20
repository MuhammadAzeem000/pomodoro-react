import {
  colorOne,
  colorTwo,
  colorThree,
  fontOne,
  fontTwo,
  fontThree,
  titles,
} from "../GlobalStyles/variables";

const initialState = {
  menuItems: [
    { id: 0, title: titles[0], status: true, time: 0 },
    { id: 1, title: titles[1], status: false, time: 0 },
    { id: 2, title: titles[2], status: false, time: 0 },
  ],
  timeValues: [
    { id: 0, title: titles[0], min: 0, max: 15 },
    { id: 1, title: titles[1], min: 0, max: 10 },
    { id: 2, title: titles[2], min: 0, max: 5 },
  ],
  fontValues: [
    { id: 0, title: fontOne, status: true },
    { id: 1, title: fontTwo, status: false },
    { id: 2, title: fontThree, status: false },
  ],
  themeColors: [
    { id: 0, colorCode: colorOne, status: true },
    { id: 1, colorCode: colorTwo, status: false },
    { id: 2, colorCode: colorThree, status: false },
  ],
  theme: { mainColor: colorOne, mainFont: fontOne },
  currentTime: 60,
  isModalOpen: false,
};

export { initialState };
