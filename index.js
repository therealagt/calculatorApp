// basic calculating functions //

const add = (a, b) => { 
    return a + b;
}; 

const subtract = (a, b) => {
    return a - b; 
};

const multiply = (a, b) => {
    return a * b; 
};

const divide = (a, b) => {
    if (b === 0) {
        return "ERROR";
    }
    return a / b; 
};

// operateFunction //

const operate = function(a, b, operator) {
    let result;
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
        default:
            return "Invalid operator";
    }
    display.textContent = result; 
    return result; 
}

// eventListener & display //

const display = document.querySelector('.display');
let firstNum = '';
let secondNum = '';
let operator = '';
let waitingForSecondNum = false;

document.querySelectorAll('.number').forEach(btn => {
    btn.addEventListener('click', () => {
         if (btn.textContent === ".") {
            if (!waitingForSecondNum) {
                if (firstNum.includes(".")) return; 
                if (firstNum === "") firstNum = "0"; 
                firstNum += ".";
            } else {
                if (secondNum.includes(".")) return;
                if (secondNum === "") secondNum = "0";
                secondNum += ".";
            }
        } else {
            if (!waitingForSecondNum) {
                firstNum += btn.textContent;
            } else {
                secondNum += btn.textContent;
            }
        }
        display.textContent = waitingForSecondNum ? secondNum : firstNum;
    });
});


document.querySelectorAll('.operator').forEach(btn => {
    btn.addEventListener('click', () => {
        let op = btn.textContent;
        if (op === "÷") op = "/";
        if (op === "x") op = "*";
        operator = op;
        waitingForSecondNum = true;
    });
});

document.getElementById('equals').addEventListener('click', () => {
    if (firstNum && secondNum && operator) {
        operate(Number(firstNum), Number(secondNum), operator);
        firstNum = '';
        secondNum = '';
        operator = '';
        waitingForSecondNum = false;
    }
});

document.getElementById('clear').addEventListener('click', () => {
    firstNum = '';
    secondNum = '';
    operator = '';
    waitingForSecondNum = false;
    display.textContent = '';
});

// keyboard eventListener //

document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        inputNumber(e.key);
    } else if (e.key === '+') {
        setOperation('add');
    } else if (e.key === '-') {
        setOperation('subtract');
    } else if (e.key === 'x') {
        setOperation('multiply');
    } else if (e.key === '/') {
        setOperation('divide');
    } else if (e.key === 'Enter' || e.key === '=') {
        calculate();
    } else if (e.key === 'Escape') {
        clearDisplay();
    }
});