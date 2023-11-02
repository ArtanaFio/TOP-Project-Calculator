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

        const numberArray = [];
        const calculateArray = [];
        let numberString;

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

        function pressOperator() {
            operationButton.forEach((button) => {
                button.addEventListener('mousedown', () => {
                    numberArray.length = 0;
                    calculateArray.push(parseInt(displayScreen.textContent));
                });
            }); 
        };
        pressOperator();

        function operate() {
            nonNumbericalButton.forEach((button) => {
                button.addEventListener('mousedown', () => {
                    if (button.id == "add") {
                        equalButton.addEventListener('mousedown', () => {
                            numberArray.length = 0;
                            calculateArray.push(parseInt(numberString));
                            const add = calculateArray.reduce(function(a, b) {
                                console.log(`${a} + ${b} = ${a + b}`);
                                displayScreen.textContent = a + b;
                            });
                            add;
                            calculateArray.length = 0;
                        });
                    } else if (button.id == "sub") {
                        equalButton.addEventListener('mousedown', () => {
                            const subtract = calculateArray.reduce(function(a, b) {
                                console.log(`${a} - ${b} = ${a - b}`);
                                return a - b;
                            });
                            displayScreen.textContent = subtract;
                            calculateArray.length = 0;
                        });
                    } else if (button.id == "mult") {
                        equalButton.addEventListener('mousedown', () => {
                            const multiply = calculateArray.reduce(function(a, b) {
                                console.log(`${a} * ${b} = ${a * b}`);
                                return a * b;
                            });
                            displayScreen.textContent = multiply;
                            calculateArray.length = 0;
                        });
                    } else if (button.id == "divi") {
                        equalButton.addEventListener('mousedown', () => {
                            const divide = calculateArray.reduce(function(a, b) {
                                console.log(`${a} / ${b} = ${a / b}`);
                                return a / b;
                            });
                            displayScreen.textContent = divide;
                            calculateArray.length = 0;
                        });
                    } else if (button.id == "clear") {
                        numberArray.length = 0;
                        calculateArray.length = 0;
                        displayScreen.textContent = "0";
                        console.log("Screen cleared");
                    } else if (button.id == "eql") {
                        displayScreen.textContent = numberString;
                        console.log("pressed =")
                    }
                });
            });
        };
        operate();


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