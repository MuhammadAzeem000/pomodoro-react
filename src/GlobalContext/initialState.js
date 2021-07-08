import { softRed, softBlue, softPurple } from "../globalStyle";

const initialState = {
  menuItems: [
    { id: 0, title: "Pomodoro", status: true },
    { id: 1, title: "Short Break", status: false },
    { id: 2, title: "Long Break", status: false },
  ],
  timeValues: [
    { id: 0, title: "Pomodoro", min: 0, max: 15, value: 0 },
    { id: 1, title: "Short Break", min: 0, max: 10, value: 0 },
    { id: 2, title: "Long Break", min: 0, max: 5, value: 0 },
  ],
  fontValues: [
    { id: 0, title: "Font One", status: true },
    { id: 1, title: "Font Two", status: false },
    { id: 2, title: "Font Three", status: false },
  ],
  themeColors: [
    { id: 0, title: "Theme One", colorCode: softRed, status: false },
    { id: 1, title: "Theme Two", colorCode: softBlue, status: true },
    { id: 2, title: "Theme Three", colorCode: softPurple, status: false },
  ],
  isModalOpen: false,
};

export { initialState };
