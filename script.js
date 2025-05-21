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

console.log(operate(2, 2, '+'));
console.log(operate(7, 2, '-'));
console.log(operate(3, 5, '*'));
console.log(operate(21, 7, '/'));