var body = document.getElementById("webpageBody");
var rgbReport = document.querySelector("h3");
var firstColor = document.getElementById("firstColor");
var secondColor = document.getElementById("secondColor");
var copy_btn = document.querySelector("button");
var flag = 1;

// Function called to display the current rgb values to screen
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
    // Flag used to determine if the user clicks copy before changing color
    flag = 0;
}

// Function called to set the gradient colors for the background
function setGradient() {
    body.style.background = "linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ")";
    displayValues();
}

firstColor.addEventListener("input", setGradient);

secondColor.addEventListener("input", setGradient);

// Button is used to determine if the CSS code for background gets copied to clipboard
copy_btn.addEventListener("click", function(){
    // Check to see if user wants to copy CSS background code before changing a color
    if (flag === 1){
        copyText = "linear-gradient(to right, rgb(0, 201, 255), rgb(256, 254, 157));";
    } else {
        copyText = body.style.background + ";";
    }
    navigator.clipboard.writeText(copyText);
});