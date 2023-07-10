const display = document.getElementById('display');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
// const equals = document.querySelector('.equal');

const decimalCount = num => {
    // Convert to String
    const numStr = String(num);
    // String Contains Decimal
    if (numStr.includes('.')) {
       return numStr.split('.')[1].length;
    };
    // String Does Not Contain Decimal
    return 0;
 }

numberBtns.forEach((btn) => {
    btn.addEventListener('click', updateDisplayValue)
})

operatorBtns.forEach((btn) => {
    btn.addEventListener('click', updateOperatorValue)
})

// equals.onclick = () => operate(operator, operandOne, operandTwo)

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

function handleEqual(){
    const solution = operate(operator, operandOne, operandTwo)
    display.innerHTML = solution
    operandOne = solution
    operandTwo = ''
    operator = ''
}

function handleEqualNext(sign){
    const solution = operate(operator, operandOne, operandTwo)
    display.innerHTML = solution + sign
    operandOne = solution
    operandTwo = ''
    operator = sign
}

const operate = function (sign, a, b) {
    if (sign === '+') {
        return add(a,b)
    } if (sign === '-') {
        return subtract(a,b)
    } if (sign === '×') {
        return multiply(a,b)
    } if (sign === '÷') {
        return divide(a,b)
    }
    clearDisplay()
}

function clearDisplay() {
    display.innerHTML = '0'
    operandOne = ''
    operandTwo = ''
    operator = ''
    solution = ''
  }

function updateDisplayValue(e) {
    let clicked = e.target.textContent

    if (display.innerHTML === '0') {
        display.innerHTML = `${clicked}`
    } else {
        display.innerHTML += `${clicked}`
    }

    if (operandOne && operator) {
        operandTwo += clicked
    } else {
        operandOne += clicked
    }

}

function updateOperatorValue(e) {
    let clicked = e.target.textContent

    if (operandOne && operandTwo) {
        if (clicked === '=') {
            handleEqual()
        } else {
            handleEqualNext(clicked)
        }
    } else {
        if (clicked !== '='){
            display.innerHTML += `${clicked}`
            operator = clicked
        }
    }
}