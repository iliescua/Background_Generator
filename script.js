var body = document.getElementById("webpageBody");
var rgbReport = document.querySelector("h3");
var firstColor = document.getElementById("firstColor");
var secondColor = document.getElementById("secondColor");
var copy_btn = document.getElementById("copy_btn");
var rand_btn = document.getElementById("randomize");
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
function setGradient(colorOne, colorTwo) {
    console.log(colorOne, colorTwo);
    body.style.background = "linear-gradient(to right, " + colorOne + ", " + colorTwo + ")";
    displayValues();
}

firstColor.addEventListener("input", function() {
    setGradient(firstColor.value, secondColor.value)
});

secondColor.addEventListener("input", function(){
    setGradient(firstColor.value, secondColor.value)
});

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

// Function to generate a 6 digit hex value for the color and return it
function generateColor() {
    var num = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + num.slice(0,6);
}

// When randomize is clicked it updates the color inputs and changes background
rand_btn.addEventListener("click", function(){
    firstColor.value = generateColor();
    secondColor.value = generateColor();
    setGradient(firstColor.value, secondColor.value);
});