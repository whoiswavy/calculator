const add = function (a, b) {
    return a + b;
  };
  
const subtract = function (a, b) {
    return a - b;
  };

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
}

let operandOne = 0
let operandTwo = 0
let operator = ''

const operate = function (sign, a, b) {
    if (sign === '+') {
        return add(a,b)
    } if (sign === '-') {
        return subtract(a,b)
    } if (sign === '*') {
        return multiply(a,b)
    } if (sign === '/') {
        return divide(a,b)
    }
}