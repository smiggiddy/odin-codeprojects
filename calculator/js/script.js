let firstNum = undefined;
let secondNum = undefined;
let operator = undefined;
let screen = document.querySelector('.screen');


const buttons = document.querySelectorAll('.btn');

function add(x, y) {
    return Number(x + y);
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divive(x, y) {
    if (x === 0) {
        return 0
    } else if (y === 0) {
        alert("Cannot divide by 0!");
    }
    return x / y;
}

function operate(firstNum, secondNum, operator) {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divive(firstNum, secondNum);
    }
}

function updateDisplay(displayValue) {
    let currentScreen = screen.textContent.trim();
    console.log(currentScreen);
    if (currentScreen.length >= 8) return;

    if (Number(currentScreen) === 0) {
        screen.textContent = displayValue;
    } else {
        screen.textContent += displayValue;
    }
}



buttons.forEach(btn => {
    btn.addEventListener('click', e => {
         updateDisplay(e.target.value);
    });
});