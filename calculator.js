const calculator = document.getElementById("calc");
const displayScreen = document.getElementById("screen");
const allButtons = document.querySelector(".all-buttons");
const allOfTheButtons = document.querySelectorAll("button");
const numberSection = document.getElementById("nums");
const numberButton = document.querySelectorAll(".num");
const section = document.querySelector('section');
const equationExpression = document.getElementById('expression');

const firstRow = document.querySelector(".first");
const secondRow = document.querySelector(".second");
const thirdRow = document.querySelector(".third");
const fourthRow = document.querySelector(".fourth");

const oneButton = document.querySelector(".one");
const twoButton = document.querySelector(".two");
const threeButton = document.querySelector(".three");
const fourButton = document.querySelector(".four");
const fiveButton = document.querySelector(".five");
const sixButton = document.querySelector(".six");
const sevenButton = document.querySelector(".seven");
const eightButton = document.querySelector(".eight");
const nineButton = document.querySelector(".nine");
const zeroButton = document.querySelector(".zero");
const decimalButton = document.querySelector(".decimal");
const toggleButton = document.getElementById("sign");
        
const nonNumbericalButton = document.querySelectorAll(".non");
const operationButton = document.querySelectorAll(".opr");
const column = document.getElementById("ops");
const clearButton = document.getElementById("clear");
const plusButton = document.getElementById("add");
const minusButton = document.getElementById("sub");
const multiplyButton = document.getElementById("mult");
const divideButton = document.getElementById("divi");
const equalButton = document.getElementById("eql");

let numberString = '';
let firstNumber = null;
let secondNumber = null;
let operator = null;


function pressAnyButton() {
    allOfTheButtons.forEach((button) => {
        button.addEventListener('mousedown', () => {
            button.classList.add('active');
        });

        button.addEventListener('mouseup', () => {
            button.classList.remove('active');
        });
    });
};
pressAnyButton();

function displayNumbers() {
    if (numberString === '') {
        displayScreen.textContent = '0';
    } else {
        displayScreen.textContent = numberString;
    }
};
displayNumbers();

// To enter numbers
numberButton.forEach((button) => {
    button.addEventListener('mousedown', () => {
        numberString += button.textContent;
        displayNumbers();
    });
});

decimalButton.addEventListener('mousedown', () => {
    if (numberString === '') {
        numberString += 0 + decimalButton.textContent;
    } else {
        numberString += decimalButton.textContent;
    }
    displayNumbers();

    decimalButton.addEventListener('mouseup', () => {
        // Returns default style to button before disabling button
        decimalButton.classList.remove('active');
        decimalButton.disabled = true;
    });
});


toggleButton.addEventListener('mousedown', () => {
    if (numberString === '') {
        numberString += '-';

        toggleButton.addEventListener('mouseup', () => {
            // Returns default style to button before disabling button
            toggleButton.classList.remove('active');
            toggleButton.disabled = true;
        });
    }
});

function operate() {
    operationButton.forEach((button) => {
        button.addEventListener('mousedown', () => {
            decimalButton.disabled = false;
            toggleButton.disabled = false;
            if (numberString !== '') {
                if (firstNumber === null) {
                    firstNumber = parseFloat(numberString);
                    console.log("firstNumber: " + firstNumber);
                    displayNumbers();
                    if (button.id == "add") {
                        operator = '+';
                        console.log("adding");
                    } else if (button.id == "sub") {
                        operator = '-';
                        console.log("subtracting");
                    } else if (button.id == "mult") {
                        operator = '*';
                        console.log("multiplying");
                    } else if (button.id == "divi") {
                        operator = '/';
                        console.log("dividing");
                    }
                    numberString = '';
                } else if (firstNumber !== null) {
                    secondNumber = parseFloat(numberString);
                    console.log(`secondNumber: ${secondNumber}`);
                    if (operator === '+') {
                        firstNumber += secondNumber;
                    } else if (operator === '-') {
                        firstNumber -= secondNumber;
                    } else if (operator === '*') {
                        firstNumber *= secondNumber;
                    } else if (operator === '/' && secondNumber !== 0) {
                        firstNumber /= secondNumber;
                    } else if (operator === '/' && secondNumber === 0) {
                        displayScreen.textContent = "Don't be contradictory";
                        console.log(displayScreen.textContent);
                        console.log(`firstNumber: ${firstNumber}`);
                        console.log(`operator: ${operator}`);
                        console.log(`secondNumber: ${secondNumber}`);
                        console.log('*******************');
                    }
                    console.log(`new firstNumber: ${firstNumber}`);
                    if (button.id === "add") {
                        operator = '+';
                    } else if (button.id === "sub") {
                        operator = '-';
                    } else if (button.id === "mult") {
                        operator = '*';
                    } else if (button.id === "divi") {
                        operator = '/';
                    }
                    console.log(`new operator: ${operator}`);
                    numberString = '';
                }
            }
        });
    });            

    equalButton.addEventListener('mousedown', () => {
        if (firstNumber !== null && operator !== null && numberString !== '') {
            secondNumber = parseFloat(numberString);
            console.log("secondNumber: " + secondNumber);
            let result;
            switch (operator) {
                case '+':
                    result = firstNumber + secondNumber;
                    console.log(`${firstNumber} + ${secondNumber} = ${result}`);
                    break;
                case '-':
                    result = firstNumber - secondNumber;
                    console.log(`${firstNumber} - ${secondNumber} = ${result}`);
                    break;
                case '*':
                    result = firstNumber * secondNumber;
                    console.log(`${firstNumber} * ${secondNumber} = ${result}`);
                    break;
                case '/':
                    if (secondNumber === 0) {
                        result = "Don't be contradictory";
                        break;
                    } else {
                        result = firstNumber / secondNumber;
                        console.log(`${firstNumber} / ${secondNumber} = ${result}`);
                        break;
                    }
            }
            numberString = result.toString();
            firstNumber = null;
            secondNumber = null;
            operator = null;
            displayNumbers();
            decimalButton.disabled = false;
            toggleButton.disabled = false;
        }
    });  
};
operate();

clearButton.addEventListener('mousedown', () => {
    numberString = '';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    displayNumbers();
    decimalButton.disabled = false;
    toggleButton.disabled = false;
    console.log("Everything cleared");
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
fourthRow.appendChild(decimalButton);
fourthRow.appendChild(toggleButton);