// Get the elements from html
var screen = document.getElementById("screen");
let on = document.getElementById("on");
let off = document.getElementById("off");
let clearEntry = document.getElementById("CE");
let clear = document.getElementById("Clear");
let deleteNumber = document.getElementById("Delete");
let addNumber = document.getElementById("plus");
let minusNumber = document.getElementById("minus");
let multiplyNumber = document.getElementById("multiply");
let divideNumber = document.getElementById("divide");
let negativePositive = document.getElementById("negative-positive");
let equals = document.getElementById("equals");
let powerIndicator = document.getElementById("power");
let keys = document.getElementsByClassName("key");
var firstOperand = [];

// Iterate 0-9 keys
for (let i = 0; i <= 9; i++) {
  attachNumberClickEvent(i);
}

function displayScreen() {
  // Remove tne commas in string
  const stringWithoutCommas = firstOperand.join("");
  // Put the string into screen in html
  screen.innerText = stringWithoutCommas;
}

function attachNumberClickEvent(number) {
  // Get the numerical keys
  const button = document.getElementById(number);
  // Attach listener to all numerical keys
  button.addEventListener("click", () => {
    firstOperand.push(number);
    displayScreen();
  });
}


off.addEventListener("click", () => {
    powerIndicator.style.backgroundColor = "gray";
    
    for (let i = 0; i < keys.length; i++) {
        keys[i].disabled = true;
    }

    firstOperand = [];
    screen.innerText = "0";
    screen.style.color = "#c0fbf0";
});

on.addEventListener("click", () => {
    powerIndicator.style.backgroundColor = "red";
    firstOperand = [];
    screen.innerText = "0";

    for (let i = 0; i < keys.length; i++) {
        keys[i].disabled = false;
    }

    screen.style.color = "#1d0029";
});

addNumber.addEventListener("click", () => {
    addNumber.style.color = "white";
});