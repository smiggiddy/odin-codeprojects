let display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

const ops = {
 firstNum:  String(),
 secondNum:  String(),
 operator:  undefined,
 lastOperator: undefined,
 numFlag: false,
 onSecondNumber: false,
 stringLength: 8,
 periodClicked: false,
 result: String(),

 toggleNumFlag: function() { 
    this.numFlag = !this.numFlag
 },
 clear: function(){
    this.firstNum = String();
    this.secondNum = String();
    this.operator = undefined;
    this.numFlag =  false;
    this.onSecondNumber = false;
    this.result = String();
    display.textContent = "0";
 },
 appendNumber: function(num) {
    if(num === "0" && display.textContent.trim() === "0") return
    if(!ops.numFlag && ops.checkLength(ops.firstNum)) {
        ops.firstNum += num;
        updateDisplay(ops.firstNum);
    } else if(this.numFlag) {
        if (this.checkLength(ops.secondNum)) {
            ops.secondNum += num;
            updateDisplay(ops.secondNum);
         }
    }
 },
 checkLength: function(string) {
    return string.length < this.stringLength;
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
    const first = Number(ops.firstNum);
    const second = Number(ops.secondNum);
    let result = operate(first, second, ops.operator);

    if (result === "error") {
        ops.clear();
        return;
    }

    result = roundThreeDecimals(result);
    updateDisplay(result);
    
    // store result
    ops.result = result;

    if (ops.lastOperator === '=') {
        ops.firstNum = String();
        ops.secondNum = String();
        ops.numFlag = false;
        ops.onSecondNumber = !ops.onSecondNumber;
    } else {
        ops.firstNum = ops.result;
        ops.secondNum = "";
        ops.onSecondNumber = true;
    }
    // ops.operator = undefined;
}

function updateDisplay(displayValue) {
    display.textContent = displayValue;
}

function roundThreeDecimals(number) {
    if (!Number.isInteger(number) && Number.isFinite(number)
    ) {
        return parseFloat(number.toPrecision(3));
    } else {
        return number;
    }
}

function handleOperatorClick(operatorClicked) {
   
    ops.lastOperator = operatorClicked;
    // TODO handle ops for = or clear
    if (operatorClicked === 'cls') {
        ops.clear();
        return;
    } else if (operatorClicked === '=') {
        ops.lastOperator = '=';
        handleOperation();
        return;
    } else if (operatorClicked === '+/-') {
        negateNumber();
        return;
    } else if (operatorClicked === '%') {
        percentageNumber();
        return;
    } else {
        if(ops.secondNum && ops.numFlag){
            handleOperation();
            return;
        }
    }
    ops.operator = operatorClicked;
    //TODO fix this conditional should be if numFlag and a check if = or additional ops 
    if(!ops.onSecondNumber ){
        ops.numFlag = true;
    } else if (ops.result !== undefined ) {
        console.log('this is running the ops.result');
        ops.firstNum = ops.result;
        ops.onSecondNumber = true;
        return
    }
    ops.onSecondNumber = !ops.onSecondNumber;
}

function calculator(event){

    if(event.target.dataset.ops === "") {
        handleOperatorClick(event.target.value);
    } else if (event.target.value === '.') {
        if (display.textContent.includes('.')) {
            return
       } else {
        ops.appendNumber(event.target.value)
       }

    } else if(event.target.dataset.num === "") {
        ops.appendNumber(event.target.value)
    }
}

function negateNumber(){
    // returns a negated number
    let negated;
    if (!ops.numFlag || !ops.onSecondNumber) {
        negated =  Number(ops.firstNum) * -1;
        ops.firstNum = String(negated);
    } else {
        negated = Number(ops.secondNum) * -1;
        ops.secondNum = String(negated);
    }
    updateDisplay(negated);
}

function percentageNumber() {
    let percent;
    if (!ops.numFlag || !ops.onSecondNumber) {
        percent = Number(ops.firstNum) / 100;
        ops.firstNum = String(percent);
    } else {
        percent = Number(ops.secondNum) / 100;
        ops.secondNum = String(percent);
    }
    updateDisplay(percent);
}

buttons.forEach(btn => {
    btn.addEventListener('click', calculator);
});
