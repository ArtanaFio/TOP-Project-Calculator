const calculator = document.getElementById("calc");
const displayScreen = document.getElementById("screen");
const allButtons = document.querySelector(".all-buttons");
const allOfTheButtons = document.querySelectorAll(".button");
const numberSection = document.getElementById("nums");
const numberButton = document.querySelectorAll(".num");

const firstRow = document.querySelector(".first");
const secondRow = document.querySelector(".second");
const thirdRow = document.querySelector(".third");
const fourthRow = document.querySelector(".fourth");

const oneButton= document.querySelector(".one");
const twoButton= document.querySelector(".two");
const threeButton= document.querySelector(".three");
const fourButton= document.querySelector(".four");
const fiveButton= document.querySelector(".five");
const sixButton= document.querySelector(".six");
const sevenButton= document.querySelector(".seven");
const eightButton= document.querySelector(".eight");
const nineButton= document.querySelector(".nine");
const zeroButton= document.querySelector(".zero");
        
const operationButton = document.querySelectorAll(".opr");
const column = document.getElementById("ops");
const clearButton = document.getElementById("clear");
const plusButton = document.getElementById("add");
const minusButton = document.getElementById("sub");
const multiplyButton = document.getElementById("mult");
const divideButton = document.getElementById("divi");
const equalButton = document.getElementById("eql");

const numberArray = [];
const addArray = [];
const subtractArray = [];
let numberString;
let sumation;
let deduction;

displayScreen.textContent = '0';

function pressAnyButton() {
    allOfTheButtons.forEach((button) => {
        button.addEventListener('mousedown', () => {
            button.style.borderTop = "0.4vw solid darkgrey"; 
            button.style.borderLeft = "0.4vw solid lightgrey"; 
            button.style.borderRight = "0.4vw solid transparent"; 
            button.style.borderBottom = "0.4vw solid transparent";
        });

        button.addEventListener('mouseup', () => {
            button.style.borderTop = "0.4vw solid transparent";
            button.style.borderLeft = "0.4vw solid transparent";
            button.style.borderRight = "0.4vw solid lightgrey";
            button.style.borderBottom = "0.4vw solid darkgrey";
        })
    });
};
pressAnyButton();

numberButton.forEach((button) => {
    button.addEventListener('mousedown', () => {
        numberArray.push(parseInt(button.textContent));
        numberString = parseInt(numberArray.join(''));
        displayScreen.textContent= numberString;
    });
});


function add() {

    plusButton.addEventListener('mousedown', () => {
        numberArray.length = 0;
        addArray.push(parseInt(displayScreen.textContent));
    });

    equalButton.addEventListener('mousedown', () => {
        addArray.push(parseInt(displayScreen.textContent));
        sumation = addArray.reduce(function(a, b) {
            return a + b;
        });
        displayScreen.textContent = sumation;
        
    });
};
add();

function subtract() {

    minusButton.addEventListener('mousedown', () => {
        numberArray.length = 0;
        subtractArray.push(parseInt(displayScreen.textContent));
    });

    equalButton.addEventListener('mousedown', () => {
        subtractArray.push(parseInt(displayScreen.textContent));
        deduction = subtractArray.reduce(function(a, b) {
            return a - b;
        });
        displayScreen.textContent = deduction;
        
    });
};
subtract();


const sum = function(arr) {
  return arr.reduce((total, arg) => total + arg, 0);
};

const multiply = function(arr) {
  return arr.reduce((a, b) => parseInt(a) * parseInt(b));
};

clearButton.addEventListener('click', () => {
    numberArray.length = 0;
    addArray.length = 0;
    subtractArray.length = 0;
    displayScreen.textContent = "0";
    console.log("Screen cleared");
    console.log(numberArray);
    console.log(numberString);
});


calculator.appendChild(displayScreen);
calculator.appendChild(allButtons);
allButtons.appendChild(numberSection);
allButtons.appendChild(column);
numberSection.appendChild(firstRow);
numberSection.appendChild(secondRow);
numberSection.appendChild(thirdRow);
numberSection.appendChild(fourthRow);
column.appendChild(clearButton);
column.appendChild(plusButton);
column.appendChild(minusButton);
column.appendChild(multiplyButton);
column.appendChild(divideButton);
column.appendChild(equalButton);
firstRow.appendChild(oneButton);
firstRow.appendChild(twoButton);
firstRow.appendChild(threeButton);
secondRow.appendChild(fourButton);
secondRow.appendChild(fiveButton);
secondRow.appendChild(sixButton);
thirdRow.appendChild(sevenButton);
thirdRow.appendChild(eightButton);
thirdRow.appendChild(nineButton);
fourthRow.appendChild(zeroButton);
