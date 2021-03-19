const hoursContainer = document.querySelector(".hours");
const minutesContainer = document.querySelector(".minutes");
const secondsContainer = document.querySelector(".seconds");
const dateContainer = document.querySelector(".date");
const dayContainer = document.querySelector(".day");

const time = new Date();
let day = time.getDay();
let date = time.getUTCDate();

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
  dateContainer.textContent = date;
  if (hours < 10) {
    hoursContainer.innerHTML = "0" + hours;
  }
  if (minutes < 10) {
    minutesContainer.innerHTML = "0" + minutes;
  }
  if (seconds < 10) {
    secondsContainer.innerHTML = "0" + seconds;
  }
  /*day name change*/
  if (day === 1) {
    dayContainer.textContent = "MO";
  }
  if (day === 2) {
    dayContainer.textContent = "TU";
  }
  if (day === 3) {
    dayContainer.textContent = "WE";
  }
  if (day === 4) {
    dayContainer.textContent = "TH";
  }
  if (day === 5) {
    dayContainer.textContent = "FR";
  }
  if (day === 6) {
    dayContainer.textContent = "SA";
  }
  if (day === 7) {
    dayContainer.textContent = "SU";
  }
}

setInterval(moveTime, 1000);
