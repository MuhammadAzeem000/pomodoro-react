import { softRed, softBlue, softPurple } from "./globalStyle";

const menuItems = [
  { title: "Pomodoro", status: false },
  { title: "Short Break", status: true },
  { title: "Long Break", status: false },
];

const timeValues = [
  { title: "Pomodoro", min: 0, max: 15 },
  { title: "Short Break", min: 0, max: 10 },
  { title: "Long Break", min: 0, max: 5 },
];

const fontValues = [
  { title: "Font One", status: false },
  { title: "Font Two", status: true },
  { title: "Font Three", status: false },
];

const themeColors = [
  { title: "Theme One", colorCode: softRed, status: false },
  { title: "Theme Two", colorCode: softBlue, status: true },
  { title: "Theme Three", colorCode: softPurple, status: false },
];

export { themeColors, timeValues, fontValues, menuItems };
