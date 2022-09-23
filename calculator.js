// User clicks a number button
    // User continues to click numbers
    // Each number is added to the FIRST NUMBER
    // FIRST NUMBER is shown on the screen
// User clicks an operator button
    // OPERATOR is stored in a variable
// User clicks more number buttons
    // Creating SECOND NUMBER
    // SECOND NUMBER is shown on the screen
// User clicks equals button
    // CALCULATE function uses FIRST NUMBER, SECOND NUMBER and OPERATOR to create the RESULT
// RESULT is shown on the screen

// CALCULATE FUNCTION
    // - can ADD, SUBTRACT, DIVIDE or MULTIPLY
    // - can PERCENTAGE
    // - can SQUARE ROOT
    // - can handle three or more numbers

// const firstNumber = Number(prompt("First number: "));
// const operator = prompt("Operator: ");
// const secondNumber = Number(prompt("Second number: "));

// console.log (typeof firstNumber);
// console.log (typeof secondNumber);

const supportedOperators = ["+", "-", "*", "/" ];
// const firstNumber = 5;
// const operator = "/";
// const secondNumber = 6;

// CODE GOES HERE
//get input text
let firstNumberEntered = false;
let secondNumberEntered = false;
let operatorEntered = false;
let equalEntered = false;
let firstNumberValue = "";
let secondNumberValue = "";
let globalOperatorValue = "";
let result = "";

let displayInput = document.querySelector (".result__display__input");
console.log (displayInput.value);

//get result text
const displayResult = document.querySelector (".result__display__result");

//get numbers buttons 
const clickedNumber = document.querySelectorAll(".buttons__number");

//get operators buttons 
const operators = document.querySelectorAll(".buttons__operator");

//get = button 
const equal = document.querySelector(".buttons__calc");
console.log (equal);

//get reset button 
const reset = document.querySelector(".buttons__reset");
console.log(reset);

//function to enable operators
const enableOperators = () => {
    operators.forEach ((operator) => {
        operator.disabled = false;
    } );
}
//function to disable operators
const disableOperators = () => {
    operators.forEach ((operator) => {
        operator.disabled = true;
    } );
}

//function to enable numbers
const enableNumbers = () => {
    clickedNumber.forEach ((number) => {
        number.disabled = false;
    } );
}
//function to disable numbers
const disableNumbers = () => {
    clickedNumber.forEach ((number) => {
        number.disabled = true;
    } );
}

// add clicked numbers to input section of the calculator and enable operators
clickedNumber.forEach((number) => {
    number.addEventListener ("click", (event) => {
        const tempNumber = number.innerHTML;
        if (!operatorEntered) enableOperators(); // enable operators if entering first number
        if (operatorEntered && !secondNumberEntered) {
            displayInput.value = displayInput.value + " " + tempNumber;
        } else displayInput.value  = displayInput.value + tempNumber;
               
        if (firstNumberEntered) {
            secondNumberEntered = true ;
            secondNumberValue += tempNumber; //keep adding to the second number value for the calculation function use
        } else firstNumberValue += tempNumber; // keep adding to the first number value for the calculation function use
           
        // console.log (firstNumberValue + " " + secondNumberValue);
    })
}
)
// add operator to the input section of the calculator
operators.forEach((operator) => {
    operator.addEventListener ("click", (event) => {
        let operatorValue = operator.innerHTML;
        displayInput.value = displayInput.value + " " + operatorValue;
        operatorEntered = true;
        firstNumberEntered = true;
        globalOperatorValue = operatorValue;
        disableOperators();
    })
})

// add " = " to the input section of the calculator

equal.addEventListener ("click", (event) => {
    if (!equalEntered) {
        let equalValue = equal.innerHTML;
        displayInput.value = displayInput.value + " " + equalValue;
        result = calculate (Number(firstNumberValue), Number(secondNumberValue), globalOperatorValue );
        displayResult.value = result;
        console.log (result);
        equalEntered = true;
        disableOperators();
        disableNumbers();
    }        
})

reset.addEventListener ("click", (event) => {
    firstNumberEntered = false;
    secondNumberEntered = false;
    operatorEntered = false;
    equalEntered = false;
    firstNumberValue = "";
    secondNumberValue = "";
    globalOperatorValue = "";
    result = "";
    displayInput.value = ""
    displayResult.value = "";
    disableOperators();
    enableNumbers();          
})

const calculate = (firstNumber, secondNumber, operator) => {
    if (!supportedOperators.includes(operator)) {
        return "Operation is not supported" ;
    }
    else if (typeof firstNumber != "number" || typeof secondNumber != "number" ) {
        return "Please provide two numbers" ;
    }
    else {
        switch (operator) {
            case "+": 
                return firstNumber + secondNumber ;
                break;
            case "-": 
                return firstNumber - secondNumber ;
                break;
            case "*": 
                return firstNumber * secondNumber ;
                break;
            case "/": 
                return firstNumber / secondNumber ;
                break;    
        }
        
    }
}
