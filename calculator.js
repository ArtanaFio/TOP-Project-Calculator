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
let operator = null;


function pressAnyButton() {
    allOfTheButtons.forEach((button) => {
        button.addEventListener('mousedown', () => {
            // Remove "active" class from all buttons
            button.classList.add('active');
        });

        button.addEventListener('mouseup', () => {
            // Add "active" class to the clicked button
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
        

function operate() {
    operationButton.forEach((button) => {
        button.addEventListener('mousedown', () => {
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
                } 
            }
        });
    });            

    equalButton.addEventListener('mousedown', () => {
        if (firstNumber !== null && operator !== null && numberString !== '') {
            const secondNumber = parseFloat(numberString);
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
                    result = firstNumber / secondNumber;
                    console.log(`${firstNumber} / ${secondNumber} = ${result}`);
                    break;
            }
            numberString = result.toString();
            firstNumber = null;
            operator = null;
            displayNumbers();
        }
    });  
};
operate();

clearButton.addEventListener('mousedown', () => {
    numberString = '';
    firstNumber = null;
    operator = null;
    displayNumbers();
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