//Set Menu Items
function toggleItem(arr, id) {
  return arr.map((item) => {
    return item.id === id
      ? { ...item, status: true }
      : { ...item, status: false };
  });
}

//Set Timings on current state

function findItemById(arr, id) {
  const Item = arr.find((item) => item.id === id);
  return Item.time;
}

// Set timing on Menu Items

function setTimings(arr, obj) {
  const { pomodoroTime, shortTime, longTime } = obj;
  return arr.map((eachTime) => {
    if (eachTime.title === "Pomodoro") {
      return { ...eachTime, time: pomodoroTime };
    } else if (eachTime.title === "Short Break") {
      return { ...eachTime, time: shortTime };
    } else if (eachTime.title === "Long Break") {
      return { ...eachTime, time: longTime };
    }
    return eachTime;
  });
}

//removeSpace

function removeSpace(str) {
  return str.replace(/\s/g, "");
}

//Add Zero if Number is less than 10
function addZero(num) {
  return num < 10 ? "0" + num : num;
}

//Time Formattting
const formatRemainingTime = (time) => {
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return `${addZero(minutes)}:${addZero(seconds)}`;
};

const minToSec = (num) => {
  return num * 60;
};
export {
  toggleItem,
  removeSpace,
  formatRemainingTime,
  minToSec,
  findItemById,
  setTimings,
};
