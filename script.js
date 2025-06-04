const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

let firstOperationNum = '';
let selectedOperator = '';
let secondOperationNum = '';

const display = document.querySelector('#display');

const operate = (num1, operator, num2) => {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
};

// populates 1-9 buttons
for (let i = 1; i <= 9; i++) {
    const calculator = document.querySelector('#numberButtons');
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.add('numberButton');
    button.id = `button${i}`;
    calculator.appendChild(button);
}

//Change name to updateDisplay
const updateDisplay = (numString) => {
    //want to read display FROM number variables, not the other way
    //need to include if statement, or switch case
        //if operator is empty
            //concat to firstOperationNum, then read to display
        //if operator exists, read secondOperationNum
            //concat to secondOperationNum, then read to display
    if (!selectedOperator) {
        firstOperationNum = firstOperationNum.concat(numString);
        display.textContent = firstOperationNum;
    } else {
        secondOperationNum = secondOperationNum.concat(numString);
        display.textContent = secondOperationNum;
    }
};

const numberButtons = document.querySelectorAll('.numberButton');
for (const button of numberButtons) {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent);
    });
};

const operationSelect = function(event) {
    //don't want to read num variables from display, reverse
    //operation select needs to only select an operator and clear display
    selectedOperator =  this.textContent;
    display.textContent = '';
};

const operationButtons = [];
operationButtons.push(document.querySelector('#buttonPlus'));
operationButtons.push(document.querySelector('#buttonMinus'));
operationButtons.push(document.querySelector('#buttonTimes'));
operationButtons.push(document.querySelector('#buttonDivide'));

for (const button of operationButtons) {
    button.addEventListener('click', operationSelect);
};

//change name to performOperation
const performOperation = function(event) {
    //assign firstOperationNum to result of operate
    //clear selectedOperator and secondOperationNum
    //call updateDisplay
};

document.querySelector('#buttonEquals').addEventListener('click', updateDisplay);