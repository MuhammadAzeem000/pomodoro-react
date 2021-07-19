// 10 minutes from now
const time_in_minutes = 10;
const current_time = Date.parse(new Date());
let deadline = new Date(current_time + time_in_minutes * 60 * 1000);

// Remaing time total, day, hr, min, sec
function time_remaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

//Add Zero When value is less than 10
function addZero(num) {
  return num < 10 ? "0" + num : num;
}

let timeinterval;
function run_clock(id, endtime) {
  const clock = document.getElementById(id);
  function update_clock() {
    const t = time_remaining(endtime);
    clock.innerText = `${addZero(t.minutes)} : ${addZero(t.seconds)}`;
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  update_clock(); // run function once at first to avoid delay
  timeinterval = setInterval(update_clock, 1000);
}

//run_clock("clockdiv", deadline);

let paused = false; // is the clock paused?
let time_left; // time left on the clock when paused

function pause_clock() {
  if (!paused) {
    paused = true;
    clearInterval(timeinterval); // stop the clock
    time_left = time_remaining(deadline).total; // preserve remaining time
  }
}

function resume_clock() {
  if (paused) {
    paused = false;

    // update the deadline to preserve the amount of time remaining
    deadline = new Date(Date.parse(new Date()) + time_left);

    // start the clock
    run_clock("clockdiv", deadline);
  }
}

// handle pause and resume button clicks
document.getElementById("pause").onclick = pause_clock;
document.getElementById("resume").onclick = resume_clock;

export { run_clock };
