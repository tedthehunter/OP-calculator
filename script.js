const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

let firstOperationNum;
let selectedOperator;
let secondOperationNum;

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

const displayNumber = function(event) {
    display.textContent += this.textContent;
    firstOperationNum = display.textContent;
};

const numberButtons = document.querySelectorAll('.numberButton');
for (const button of numberButtons) {
    button.addEventListener('click', displayNumber);
};

const operationSelect = function(event) {
    selectedOperator = this.textContent;
    display.textContent = '';
}

const operationButtons = [];
operationButtons.push(document.querySelector('#buttonPlus'));
operationButtons.push(document.querySelector('#buttonMinus'));
operationButtons.push(document.querySelector('#buttonTimes'));
operationButtons.push(document.querySelector('#buttonDivide'));

for (const button of operationButtons) {
    button.addEventListener('click', operationSelect);
};