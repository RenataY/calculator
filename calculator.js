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

const firstNumber = prompt("First number: ");
const operator = prompt("Operator: ");
const secondNumber = prompt("Second number: ");

alert(`${firstNumber} ${operator} ${secondNumber}`);

// CODE GOES HERE