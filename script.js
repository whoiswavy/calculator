const display = document.getElementById('display');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');

numberBtns.forEach((btn) => {
    btn.addEventListener('click', updateDisplayValue)
})

operatorBtns.forEach((btn) => {
    btn.addEventListener('click', updateOperatorValue)
})

equals.onclick = () => operate(operator, operandOne, operandTwo)

// console.log(numberBtns)

const add = function (a, b) {
    a = parseInt(a)
    b = parseInt(b)
    return a + b;
  };
  
const subtract = function (a, b) {
    a = parseInt(a)
    b = parseInt(b)
    return a - b;
  };

const multiply = function (a, b) {
    a = parseInt(a)
    b = parseInt(b)
    return a * b;
};

const divide = function (a, b) {
    a = parseInt(a)
    b = parseInt(b)
    return a / b;
}

let operandOne = ''
let operandTwo = ''
let operator = ''
let solution = ''

const operate = function (sign, a, b) {
    if (sign === '+') {
        solution = add(a,b)
    } if (sign === '-') {
        solution = subtract(a,b)
    } if (sign === ' × ') {
        solution = multiply(a,b)
    } if (sign === '÷') {
        solution = divide(a,b)
    }
    clearDisplay
    display.innerHTML = solution
}

function clearDisplay() {
    display.innerHTML = ''
    operandOne = ''
    operandTwo = ''
    operator = ''
    solution = ''
  }

function updateDisplayValue(e) {
    let clicked = e.target.textContent
    display.innerHTML += `${clicked}`
    if (operandOne && operator) {
        operandTwo += clicked
    } else {
        operandOne += clicked
    }
}

function updateOperatorValue(e) {
    let clicked = e.target.textContent
    display.innerHTML += `${clicked}`
    operator = clicked
}