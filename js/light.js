const turnOn = document.querySelector(".pressLight");
const lightSwitch = document.querySelector(".light");
const screen = document.querySelector(".screen");
const hold = document.querySelector(".hold");
var mediaQ = window.matchMedia("(max-width: 675px)");

turnOn.addEventListener("mousedown", function () {
  screen.style.backgroundColor = "rgb(3, 116, 18)";
  lightSwitch.style.left = "-5";
  hold.style.display = "block";
});
turnOn.addEventListener("mouseup", function () {
  screen.style.backgroundColor = "rgb(153, 160, 145)";
  lightSwitch.style.left = "-20";
  hold.style.display = "none";
});

/*meida query */

function myFunction(mediaQ) {
  if (mediaQ.matches) {
    // If media query matches
    turnOn.addEventListener("touchstart", function (event) {
      event.preventDefault();
      screen.style.backgroundColor = "rgb(3, 116, 18)";
      lightSwitch.style.left = "-4";
      hold.style.display = "block";
    });
    turnOn.addEventListener("touchend", function (event) {
      event.preventDefault();
      screen.style.backgroundColor = "rgb(153, 160, 145)";
      lightSwitch.style.left = "-15";
      hold.style.display = "none";
    });
  }
}
myFunction(mediaQ);
