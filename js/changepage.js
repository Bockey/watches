const goToAnalog = document.querySelector(".goToAnalog");
const goToDigital = document.querySelector(".goToDigital");
const analog = document.querySelector(".analog");
const digital = document.querySelector(".digital");
const siteName = document.querySelector(".siteName");

goToAnalog.addEventListener("click", function () {
  digital.style.display = "none";
  digital.style.opacity = "0";
  analog.style.display = "flex";
  analog.style.opacity = "1";
});

goToDigital.addEventListener("click", function () {
  analog.style.display = "none";
  analog.style.opacity = "0";
  digital.style.display = "flex";
  digital.style.opacity = "1";
});
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    analog.style.display = "none";
    digital.style.display = "flex";
    digital.style.opacity = "1";
    siteName.style.display = "none";
  }
  if (y.matches) {
    siteName.style.display = "block";
  }
}

var x = window.matchMedia("(max-width: 1024px)");
var y = window.matchMedia("(max-width: 675px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
myFunction(y); // Call listener function at run time
y.addListener(myFunction); // Attach listener function on state changes
