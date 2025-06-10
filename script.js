const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

let firstOperationNum = '';
let selectedOperator = '';
let secondOperationNum = '';
let result = false;

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
    } else {
        secondOperationNum = secondOperationNum.concat(numString);
        display.textContent = secondOperationNum;
    }
};

const numberButtons = document.querySelectorAll('.numberButton');
for (const button of numberButtons) {
    button.addEventListener('click', () => {
        if (result === true) {
            clearAll();
            result = false;
        }
        updateDisplay(button.textContent);
    });
};

const decimalButton = document.querySelector('#buttonDecimal');
decimalButton.addEventListener('click', () => {
    if (result === true) {
            clearAll();
            result = false;
    } 
    if (display.textContent.includes('.')) {
        return;
    } else if (display.textContent === '') {
        updateDisplay('0');
        updateDisplay('.');
    } else {
        updateDisplay('.');
    }
});

const operationSelect = function(event) {
    if (!selectedOperator || !secondOperationNum) {
        selectedOperator =  this.textContent;
        display.textContent = '';
        result = false;
    } else {
        performOperation();
        result = false;
        selectedOperator = this.textContent;
    }
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
    if (firstOperationNum && selectedOperator && secondOperationNum) {
        if (selectedOperator === '/' && secondOperationNum === '0') {
            alert('Do not divide by 0. You cannot imagine the consequences.');
            clearAll();
            return;
        }
        firstOperationNum = String(round(operate(+firstOperationNum, selectedOperator, +secondOperationNum)));
        selectedOperator = secondOperationNum = '';
        updateDisplay('');
        result = true;
    };
};

document.querySelector('#buttonEquals').addEventListener('click', performOperation);

const clearAll = () => {
    firstOperationNum = selectedOperator = secondOperationNum = '';
    display.textContent = '';
};

document.querySelector('#buttonClear').addEventListener('click', clearAll);

const round = (num) => Math.round(num * 1000000) / 1000000;

const backspaceButton = document.querySelector('#buttonBackspace');
backspaceButton.addEventListener('click', () => {
    if (result === false && display.textContent !== '') {
        if (!selectedOperator) {
            firstOperationNum = firstOperationNum.slice(0, -1);
            updateDisplay('');
        } else {
            secondOperationNum = secondOperationNum.slice(0, -1);
            updateDisplay('');
        }
    }
});

//extra credit
//TODO:
    //ADD KEYBOARD SUPPORT