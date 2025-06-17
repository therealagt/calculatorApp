// calculating functions //

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

// operating & display //

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