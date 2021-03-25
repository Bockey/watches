/*watch hands*/
const hourHand = document.querySelector(".hourHand");
const minuteHand = document.querySelector(".minuteHand");
const secondHand = document.querySelector(".secondHand");

/*day letters*/
const firstLetter = document.querySelector(".firstLetter");
const secondLetter = document.querySelector(".secondLetter");
const thirdLetter = document.querySelector(".thirdLetter");
const fourthLetter = document.querySelector(".fourthLetter");
const fifthLetter = document.querySelector(".fifthLetter");
const sixthLetter = document.querySelector(".sixthLetter");
const seventhLetter = document.querySelector(".seventhLetter");
const eighthLetter = document.querySelector(".eighthLetter");
const ninthLetter = document.querySelector(".ninthLetter");
/*date*/
const dateNumber = document.querySelector(".dateRolex");

function moveTimeRolex() {
  if (seconds === 60) {
    minutes += 1;
    seconds = 0;
  }
  if (minutes === 60) {
    hours += 1;
    mins = 0;
  }
  const hourDegree = hours * 30 + minutes / 2;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  const minuteDegree = minutes * 6;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  const secondDegree = seconds * 6;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  if (day === 1) {
    firstLetter.textContent = "";
    secondLetter.textContent = "";
    thirdLetter.textContent = "M";
    fourthLetter.textContent = "O";
    fifthLetter.textContent = "N";
    sixthLetter.textContent = "D";
    seventhLetter.textContent = "A";
    eighthLetter.textContent = "Y";
    ninthLetter.textContent = "";
  } else if (day === 2) {
    firstLetter.textContent = "";
    secondLetter.textContent = "T";
    thirdLetter.textContent = "U";
    fourthLetter.textContent = "E";
    fifthLetter.textContent = "S";
    sixthLetter.textContent = "D";
    seventhLetter.textContent = "A";
    eighthLetter.textContent = "Y";
    ninthLetter.textContent = "";
  } else if (day === 3) {
    firstLetter.textContent = "W";
    secondLetter.textContent = "E";
    thirdLetter.textContent = "D";
    fourthLetter.textContent = "N";
    fifthLetter.textContent = "E";
    sixthLetter.textContent = "S";
    seventhLetter.textContent = "D";
    eighthLetter.textContent = "A";
    ninthLetter.textContent = "Y";
  } else if (day === 4) {
    firstLetter.textContent = "";
    secondLetter.textContent = "T";
    thirdLetter.textContent = "H";
    fourthLetter.textContent = "U";
    fifthLetter.textContent = "R";
    sixthLetter.textContent = "S";
    seventhLetter.textContent = "D";
    eighthLetter.textContent = "A";
    ninthLetter.textContent = "Y";
  } else if (day === 5) {
    firstLetter.textContent = "";
    secondLetter.textContent = "F";
    thirdLetter.textContent = "R";
    fourthLetter.textContent = "I";
    fifthLetter.textContent = "D";
    sixthLetter.textContent = "A";
    seventhLetter.textContent = "Y";
    eighthLetter.textContent = "";
    ninthLetter.textContent = "";
  } else if (day === 6) {
    firstLetter.textContent = "";
    secondLetter.textContent = "S";
    thirdLetter.textContent = "A";
    fourthLetter.textContent = "T";
    fifthLetter.textContent = "U";
    sixthLetter.textContent = "R";
    seventhLetter.textContent = "D";
    eighthLetter.textContent = "A";
    ninthLetter.textContent = "Y";
  } else if (day === 7) {
    firstLetter.textContent = "";
    secondLetter.textContent = "S";
    thirdLetter.textContent = "U";
    fourthLetter.textContent = "N";
    fifthLetter.textContent = "D";
    sixthLetter.textContent = "A";
    seventhLetter.textContent = "Y";
    eighthLetter.textContent = "";
    ninthLetter.textContent = "";
  }
  dateNumber.textContent = `${date}`;
  dateNumber.style.color = "black";
}

setInterval(moveTimeRolex, 1000);
