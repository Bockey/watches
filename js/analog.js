const hourHand = document.querySelector(".hourHand");
const minuteHand = document.querySelector(".minuteHand");
const secondHand = document.querySelector(".secondHand");

// const time = new Date();
// console.log(time);
// let day = time.getDay();
// let date = time.getUTCDate();
// console.log(day);

// let hours = time.getHours();
// let minutes = time.getMinutes();
// let seconds = time.getSeconds();

// function moveTime() {
//   if (seconds === 59) {
//     minutes += 1;
//     seconds = -1;
//   }
//   if (minutes === 60) {
//     hours += 1;
//     minutes = 0;
//   }
//   if (hours === 24) {
//     hours = 0;
//     minutes = 0;
//     seconds = 0;
//   }

//   seconds += 1;

function moveTimeRolex() {
  if (seconds === 60) {
    minutes += 1;
    seconds = 0;
  }
  if (minutes === 60) {
    hours += 1;
    mins = 0;
  }
  seconds += 1;
  const hourDegree = hours * 30 + minutes / 2;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  const minuteDegree = minutes * 6;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  const secondDegree = seconds * 6;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
}

setInterval(moveTimeRolex, 1000);
