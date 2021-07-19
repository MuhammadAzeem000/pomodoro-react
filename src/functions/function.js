//Toggle Item into array
function toggleItem(arr, id) {
  return arr.map((item) => {
    if (item.id === id) {
      return { ...item, status: true };
    } else {
      return { ...item, status: false };
    }
  });
}

//removeSpace

function removeSpace(str) {
  return str.replace(/\s/g, "");
}
//count down timer;
function countDownTimer(minutes, setTimer, timer) {
  let second = 60;

  //Add Zero if Number is less than 10
  function addZero(num) {
    return num < 10 ? "0" + num : num;
  }

  //Logic Start Here
  const t = setInterval(() => {
    //Timer Logic
    second = second - 1;
    if (second < 0) {
      second = 60;
      minutes = minutes - 1;
    }

    //if time is 00:00
    if (minutes === 0 && second === 0) {
      clearInterval(t);
    }

    //Output
    setTimer({ ...timer, time: `${addZero(minutes)}:${addZero(second)}` });
  }, 1000);
}

export { toggleItem, countDownTimer, removeSpace };
