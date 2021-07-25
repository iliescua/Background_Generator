const body = document.getElementById("webpageBody");
const rgbReport = document.querySelector("h3");
const firstColor = document.getElementById("firstColor");
const secondColor = document.getElementById("secondColor");
const copy_btn = document.getElementById("copy_btn");
const rand_btn = document.getElementById("randomize");
let flag = 1;

// Function called to display the current rgb values to screen
const displayValues = () => {
    let colorValue = Array.from(body.style.background.toString());
    let colorString = "";
    colorValue.pop();
    // Shift over to remove all words before the first instance of rgb
    for (let i = 0; i < 26; i++) {
        colorValue.shift();
    }
    // Convert arry to string manually because built in methods broke format
    for (let i = 0; i < colorValue.length; i++){
        colorString += colorValue[i];
    }
    rgbReport.innerHTML = colorString;
    colorValue = []
    // Flag used to determine if the user clicks copy before changing color
    flag = 0;
}

// Function called to set the gradient colors for the background
const setGradient = (colorOne, colorTwo) => {
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
const generateColor = () => {
    let num = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + num.slice(0,6);
}

// When randomize is clicked it updates the color inputs and changes background
rand_btn.addEventListener("click", function(){
    firstColor.value = generateColor();
    secondColor.value = generateColor();
    setGradient(firstColor.value, secondColor.value);
});