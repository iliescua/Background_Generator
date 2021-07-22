var body = document.getElementById("webpageBody");
var rgbReport = document.querySelector("h3");
var firstColor = document.getElementById("firstColor");
var secondColor = document.getElementById("secondColor");

function displayValues(){
    var colorValue = Array.from(body.style.background.toString());
    var colorString = "";
    colorValue.pop();
    // Shift over to remove all words before the first instance of rgb
    for (var i = 0; i < 26; i++) {
        colorValue.shift();
    }
    // Convert arry to string manually because built in methods broke format
    for (var i = 0; i < colorValue.length; i++){
        colorString += colorValue[i];
    }
    rgbReport.innerHTML = colorString;
    colorValue = []
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ")";
    displayValues();
}

firstColor.addEventListener("input", setGradient);

secondColor.addEventListener("input", setGradient);