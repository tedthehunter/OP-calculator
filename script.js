const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

let firstDisplayNum;
let displayOperator;
let secondDisplayNum;

const operate = (num1, num2, operator) => {
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

for (let i = 0; i <= 9; i++) {
    const calculator = document.querySelector('#calculator');
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.add('numberButton');
    button.id = `button${i}`;
    calculator.appendChild(button);
}