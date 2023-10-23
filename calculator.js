const calculator = document.getElementById("calc");
        const displayScreen = document.getElementById("screen");
        const numberButton = document.querySelectorAll(".num");
        const row = document.querySelectorAll(".row");
        const operationButton = document.querySelectorAll(".opr");
        const column = document.querySelector(".ops");

        numberButton.forEach((button) => {
            button.addEventListener('mousedown', () => {
                button.style.borderTop = "2px solid darkgrey"; 
                button.style.borderLeft = "2px solid lightgrey"; 
                button.style.borderRight = "none"; 
                button.style.borderBottom = "none";
            });

            button.addEventListener('mouseup', () => {
                button.style.borderTop = "none";
                button.style.borderLeft = "none";
                button.style.borderRight = "5px solid lightgrey";
                button.style.borderBottom = "5px solid darkgrey";
            })
        });

        operationButton.forEach((button) => {
            button.addEventListener('mousedown', () => {
                button.style.borderTop = "2px solid darkgrey"; 
                button.style.borderLeft = "2px solid lightgrey"; 
                button.style.borderRight = "none"; 
                button.style.borderBottom = "none";
            });

            button.addEventListener('mouseup', () => {
                button.style.borderTop = "none";
                button.style.borderLeft = "none";
                button.style.borderRight = "5px solid lightgrey";
                button.style.borderBottom = "5px solid darkgrey";
            })
        });

        //calculator.appendChild(displayScreen);
        row.appendChild(numberButton);
        column.appendChild(operationButton);