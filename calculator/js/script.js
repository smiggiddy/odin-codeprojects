let screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');

const ops = {
 firstNum:  String(),
 secondNum:  String(),
 operator:  undefined,
 numFlag: false,

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
    this.firstNum = Number();
    this.secondNum = Number();
    this.operator = undefined;
    this.numFlag =  false;
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
    screen.textContent = displayValue;
}

function calculator(event){

    if(event.target.dataset.ops === "") {
        // TODO handle ops for = or clear
        // TODO other ops should indicate a swap to second number
        ops.operator = event.target.value;
        //TODO fix this conditional should be if numFlag and a check if = or additional ops 
        if(ops.secondNum){
        console.log(operate(ops.firstNum, ops.secondNum, ops.operator));
        console.log(ops.operator);
        } else {
            ops.toggleNumFlag();
            console.log(ops.numFlag);
            console.log('set second num');
        }
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

    // if (currentScreen.length >= 8) return;

}



buttons.forEach(btn => {
    btn.addEventListener('click', calculator);
});
    

/*

user imputs 1stNumber up to 8 digits or until user presses operator
number should be stored. each input evauluating for operator
1st number constantly updating
operator stored 
user then enters 2nd Number up to 8 digits or until operator pressed
if user presses equals result is stored 
if user presses operator result is saved to 1st number 


*/