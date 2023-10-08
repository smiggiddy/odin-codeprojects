let display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

const ops = {
 firstNum:  String(),
 secondNum:  String(),
 operator:  undefined,
 numFlag: false,
 onSecondNumber: false,

 updateNum: (num) => {
        if (!this.updateSecondNum){
            this.firstNum = num;
        } else {
            this.secondNum = num;
        }
 },
 toggleNumFlag: function() { 
    this.numFlag = !this.numFlag
 },
 clear: function(){
    this.firstNum = String();
    this.secondNum = String();
    this.operator = undefined;
    this.numFlag =  false;
    this.onSecondNumber = false;
    display.textContent = "0";
 }
};

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divede(x, y) {
    if (x === 0) {
        return 0
    } else if (y === 0) {
        alert("Cannot divide by 0!");
        return "Error"
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
            return divede(firstNum, secondNum);
    }
}

function handleOperation() {
    let first = Number(ops.firstNum);
    let second = Number(ops.secondNum);
    let result = operate(first, second, ops.operator);
    result = Math.round(result * (10^3)/(10^3));
    updateDisplay(result);
    ops.firstNum = result;
    ops.secondNum = String();
    if (ops.operator === '=') {
        ops.numFlag = false;
        ops.onSecondNumber = false;
    } else {
        ops.onSecondNumber = true;
    }
    ops.operator = undefined;
}

function updateDisplay(displayValue) {
    display.textContent = displayValue;
}

function handleOperatorClick(operatorClicked) {
    
    // TODO handle ops for = or clear
    if (operatorClicked === 'cls') {
        ops.clear();
        return;
    } else if (operatorClicked === '=') {
        handleOperation();
    } else {
        if(ops.secondNum && ops.numFlag){
            handleOperation();
        }
    }
    ops.operator = operatorClicked;
    //TODO fix this conditional should be if numFlag and a check if = or additional ops 
    if(!ops.onSecondNumber){
        ops.numFlag = true;
    } 
    ops.onSecondNumber = !ops.onSecondNumber;
}

function calculator(event){

    if(event.target.dataset.ops === "") {
        handleOperatorClick(event.target.value);
    } 
    else if(event.target.dataset.num === "") {
            if(!ops.numFlag) {
                ops.firstNum += event.target.value;
                updateDisplay(ops.firstNum);
            } else {
                ops.secondNum += event.target.value;
                updateDisplay(ops.secondNum);
            }
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', calculator);
});