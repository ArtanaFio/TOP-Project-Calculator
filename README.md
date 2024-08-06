# TOP-Project-Calculator

## Description
On-screen calculator programmed with JavaScript, HTML, and CSS. Uses functions to perform basic math operations.

## Table of Contents
- [Description] (#description)
- [Technologies Used] (#technologies-used)
- [Project Structure] (#project-structure)
- [Instructions] (#instructions)
- [Acknowledgments] (#acknowledgments)
- [Deverloper Notes] (#developer-notes)

## Technologies Used
- HTML5
- CSS3
- JavaScript

## Project Structure
```
TOP-Project-Calculator/
├--calculator.css
├--calculator.js
├--index.html
└--README.md
```

## Instructions
1. Create functions for addition, subtraction, multiplication, and division. Test these functions in the browser's console.
2. Create three variables for each part of a calculator operation: first number, operator, second number. These variables are used to update the display later.
3. Create a new function 'operate' that takes an operator and two numbers and then calls one of the above functions on the numbers.
4. Create a basic HTML calculator with buttons for each digit, each of the above functions, and an 'Equals' key.
    - Wait to connect the JS to the respective HTML buttons.
    - Create a display for the calculator. Test the appearance with placeholder numbers.
5. Create the functions that populate the display when clicking the number buttons. The 'display value' should be stored in a variable somewhere for use in the next step.
6. Ensure the caculator functions as expected. The first number and second number that are inputed into the calculator must be stored, and the selected operator must be used such that the function 'operate' is executed when the 'Equals' key is clicked.
    - Once the 'operate' function is called, the display should be updated with the solution to the operation.
7. Ensure your calculator:
    - does not evaluate more than a single pair of numbers at a time,
    - rounds numbers with long decimals so the screen does not overflow,
    - clears any existing data when the 'clear' button is clicked.
    - displays a snarky error message if the user tries to divide by 0 while not crashing the calculator.
8. Note that clicking the 'Equals' key before entering all the numbers or an operator could cause problems.

**Extra Credit:**
- Add a 'decimal' button to allow users to input decimals. Make sure the decimal point can only be inputted once.
- Use CSS to make the calculator look nice.
- Add a 'backspace' button to allow users to removed numbers or operators if they make a mistake.
- Add keyboard support.

## Acknowledgments
- **Fonts:**
    - Kelly Slab, https://fonts.google.com/specimen/Kelly+Slab/about?query=kelly by Denis Masharov
    - Thasadith, https://fonts.google.com/specimen/Thasadith/about?preview.text=0123456789&classification=Display by Cadon Demak

## Developer Notes
Ongoing issues to address:
- Include a "backspace" button to undo typos.
- Include keyboard support.
