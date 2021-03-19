const hoursContainer = document.querySelector(".hours");
const minutesContainer = document.querySelector(".minutes");
const secondsContainer = document.querySelector(".seconds");

const time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

function moveTime() {
  if (seconds === 59) {
    minutes += 1;
    seconds = -1;
  }
  if (minutes === 60) {
    hours += 1;
    minutes = 0;
  }
  if (hours === 24) {
    hours = 0;
    minutes = 0;
    seconds = 0;
  }

  seconds += 1;
  hoursContainer.innerHTML = hours;
  minutesContainer.innerHTML = minutes;
  secondsContainer.innerHTML = seconds;
  if (hours < 10) {
    hoursContainer.innerHTML = "0" + hours;
  }
  if (minutes < 10) {
    minutesContainer.innerHTML = "0" + minutes;
  }
  if (seconds < 10) {
    secondsContainer.innerHTML = "0" + seconds;
  }
}

setInterval(moveTime, 1000);
