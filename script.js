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

const updateDisplay = (numString) => {
    if (!selectedOperator) {
        firstOperationNum = firstOperationNum.concat(numString);
        display.textContent = firstOperationNum;
        console.log(`firstOperationNum: ${firstOperationNum}`);
        console.log(`Type: ${typeof firstOperationNum}`)
    } else {
        secondOperationNum = secondOperationNum.concat(numString);
        display.textContent = secondOperationNum;
        console.log(`secondOperationNum: ${secondOperationNum}`);
        console.log(`Type: ${typeof secondOperationNum}`)
    }
};

const numberButtons = document.querySelectorAll('.numberButton');
for (const button of numberButtons) {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent);
    });
};

const operationSelect = function(event) {
    //IF operator OR second num is blank do below
    selectedOperator =  this.textContent;
    display.textContent = '';
    console.log(`selectedOperator: ${selectedOperator}`);
    //ELSE if operator AND second number is already selected
        //calculate result of operation on 1stnum 2ndnum with selected operator
        //update display with result of above
        //make first num equal to result of above
        //then select clicked operator
};

const operationButtons = [];
operationButtons.push(document.querySelector('#buttonPlus'));
operationButtons.push(document.querySelector('#buttonMinus'));
operationButtons.push(document.querySelector('#buttonTimes'));
operationButtons.push(document.querySelector('#buttonDivide'));

for (const button of operationButtons) {
    button.addEventListener('click', operationSelect);
};

const performOperation = function(event) {
    firstOperationNum = String(operate(+firstOperationNum, selectedOperator, +secondOperationNum));
    selectedOperator = secondOperationNum = '';
    updateDisplay('');
    console.log(`firstOperationNum: ${firstOperationNum}`);
    console.log(`selectedOperator: ${selectedOperator}`);
    console.log(`secondOperationNum: ${secondOperationNum}`);
    console.log(`Type: ${typeof secondOperationNum}`)
};

document.querySelector('#buttonEquals').addEventListener('click', performOperation);

const clearAll = () => {
    firstOperationNum = selectedOperator = secondOperationNum = '';
    display.textContent = '';
    console.log(`firstOperationNum: ${firstOperationNum}`);
    console.log(`selectedOperator: ${selectedOperator}`);
    console.log(`secondOperationNum: ${secondOperationNum}`);
};

document.querySelector('#buttonClear').addEventListener('click', clearAll);