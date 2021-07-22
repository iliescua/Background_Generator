var body = document.getElementById("webpageBody");
var rgbRepot = document.querySelector("h3");
var firstColor = document.getElementById("firstColor");
var secondColor = document.getElementById("secondColor");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ")";
}

firstColor.addEventListener("input", setGradient);

secondColor.addEventListener("input", setGradient);