//Toggle Item into array
function toggleItem(arr, id) {
  return arr.map((item) => {
    return item.id === id
      ? { ...item, status: true }
      : { ...item, status: false };
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

export { toggleItem, removeSpace, addZero, formatRemainingTime };
