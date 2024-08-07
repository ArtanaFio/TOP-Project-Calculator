const calculator = document.getElementById("calc");
const displayScreen = document.getElementById("screen");
const allButtons = document.querySelector(".all-buttons");

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
let result = null;
let division = null;

function pressAnyButton() {
    const allOfTheButtons = document.querySelectorAll("button");
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
    if (numberString.length === 0) {
        displayScreen.textContent = '0';
    } else if (numberString.length <= 14) {
        displayScreen.textContent = numberString;
    } else if (numberString.length > 14) {
        displayScreen.textContent = numberString.slice(0, 14);
    }
};
displayNumbers();

// To enter numbers
function enterNumbers() {
    numberButton.forEach((button) => {
        button.addEventListener('mousedown', () => {
            if (result === null) {
                numberString += button.textContent;
            } else if (result !== null) {
                numberString = '';
                numberString += button.textContent;
                result = null;
            }
            displayNumbers();
        });
    });

    document.addEventListener('keydown', event => {
        const numberKey = event.key;
        switch (numberKey) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (result === null) {
                    numberString += numberKey;
                } else if (result !== null) {
                    numberString = '';
                    numberString += numberKey;
                    result = null;
                }
                displayNumbers();
                break;
            case '.':
                if(!numberString.includes('.')) {
                    numberString += '.';
                    displayNumbers();
                }
                break;
        }
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
};
enterNumbers();

function operate() {
    function addNumbers(a, b) {
        return a += b;
    };

    function subtractNumbers(a, b) {
        return a -= b;
    };

    function multiplyNumbers(a, b) {
        return a *= b;
    }

    function divideNumbers(a, b) {
        if (b !== 0) {
            return a /= b;
        } else {
            firstNumber = null;
            numberString = '';
            return "JUST NO";
        }
    }

    if (operator === '+') {
        return addNumbers(firstNumber, secondNumber);
    } else if (operator === '-') {
        return subtractNumbers(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiplyNumbers(firstNumber, secondNumber);
    } else if (operator === '/') {
        return divideNumbers(firstNumber, secondNumber);
    }
};

function setValues() {
    if (firstNumber === null && numberString !== "JUST NO") {
        firstNumber = parseFloat(numberString);
    } else if (firstNumber !== null) {
        secondNumber = parseFloat(numberString);
        if (operate() === 'JUST NO') {
            numberString = operate();
            firstNumber;
        } else {
            firstNumber = parseFloat(operate());
            numberString = firstNumber.toString();
            displayNumbers();
        }
    } else if (numberString === "JUST NO") {
        numberString = '';
    }
};

function getResults() {
    if (firstNumber !== null && operator !== null && numberString !== '') {
        secondNumber = parseFloat(numberString);
        result = parseFloat(operate());
        if (operate() === "JUST NO") {
            numberString = operate();
            result = null;
        } else {
            result = parseFloat(operate());
            numberString = result.toString();
        }
        displayNumbers();
        firstNumber = null;
        secondNumber = null;
        operator = null;
        decimalButton.disabled = false;
        toggleButton.disabled = false;
    } else {
        result = numberString;
    }
};

operationButton.forEach((button) => {
    button.addEventListener('mousedown', () => {
        decimalButton.disabled = false;
        toggleButton.disabled = false;
                
        setValues();

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
        displayNumbers();
        numberString = '';
    });
});

document.addEventListener('keydown', event => {
    const operatorKey = event.key;
    switch (operatorKey) {
        case '+':
            setValues();
            operator = '+';
            console.log("adding");
            displayNumbers();
            numberString = '';
            break;
        case '-':
            setValues();
            operator = '-';
            console.log("subtracting");
            displayNumbers();
            numberString = '';
            break;
        case '*':
            setValues();
            operator = '*';
            console.log("multiplying");
            displayNumbers();
            numberString = '';
            break;
        case '/':
            setValues();
            operator = '/';
            console.log("dividing");
            displayNumbers();
            numberString = '';
            break;
        case '=':
            getResults();
            numberString = result;
            displayNumbers();
        case 'Enter':
            getResults();
            numberString = result;
            displayNumbers();
        case 'Backspace':
            if (numberString.length > 0) {
                numberString = numberString.slice(0, -1);
                displayNumbers();12
            }
            break;
    }
});

equalButton.addEventListener('mousedown', () => {
    getResults();
});

function clearCalculator() {
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
};
clearCalculator();

function updateCopyrightYear() {
    const copyrightYear = document.querySelector(".year");

    copyrightYear.textContent = new Date().getFullYear();
};
updateCopyrightYear();