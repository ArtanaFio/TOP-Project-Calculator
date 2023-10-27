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

function enterNumber() {
    numberButton.forEach((button) => {
        button.addEventListener('mousedown', () => {
            numberArray.push(parseInt(button.textContent));
            numberString = parseInt(numberArray.join(''));
            displayScreen.textContent = numberString;
        });
    });
};
enterNumber();


function add() {
    plusButton.addEventListener('mousedown', () => {
        numberArray.length = 0;
        addArray.push(displayScreen.textContent);
        console.log("addArray: " + addArray);
    });

    equalButton.addEventListener('mousedown', () => {
        addArray.push(displayScreen.textContent);
        console.log("addArray: " + addArray);
        numberArray.length = 0;
        sumation = addArray.reduce(function(a, b) {
            return parseInt(a) + parseInt(b);
        });
        console.log("sum: " + sumation);
        
        displayScreen.textContent = sumation;
        addArray.length = 0;
    });
};
add();

function subtract() {
    minusButton.addEventListener('mousedown', () => {
        numberArray.length = 0;
        subtractArray.push(displayScreen.textContent);
        console.log("subtractArray: " + subtractArray);
    });

    equalButton.addEventListener('mousedown', () => {
        subtractArray.push(displayScreen.textContent);
        console.log("subtractArray: " + subtractArray);
        numberArray.length = 0;
        deduction = subtractArray.reduce(function(a, b) {
            return parseInt(a) - parseInt(b);
        });
        console.log("subtraction: " + deduction);

        displayScreen.textContent = deduction;
        subtractArray.length = 0;
    });
};
subtract();


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
