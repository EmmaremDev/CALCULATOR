// Clear Display
// Append Number
// Set Operation
// Calculate

// Storing variables for current input
let currentInput = "";
let previousInput = "";
let operation = "";

// Function to update the display with current input
function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

// Function to append number or decimal to current input
function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return; // Prevent multiple dots
    currentInput += number; // Use `+=` to append numbers correctly
    updateDisplay();
}

// Function to clear the calculator display
function clearDisplay() {  // Fixed function name from 'claerDisplay' to 'clearDisplay'
    currentInput = "";
    previousInput = "";
    operation = "";
    updateDisplay();
}

// Function to set the operation (*, -, +, /)
function setOperation(op) {
    if (currentInput === "") return; // Do nothing if no input value
    if (previousInput !== "") { 
        calculate(); // Compute values if previous input exists
    }
    operation = op;
    previousInput = currentInput;
    currentInput = "";
}

// Function to perform calculation based on input
function calculate() {  // Fixed function name from 'calculat' to 'calculate'
    const previous = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result;

    if (isNaN(previous) || isNaN(current)) return; // Check for invalid input

    switch (operation) {
        case "*":
            result = previous * current;
            break;
        case "-":
            result = previous - current;
            break;
        case "+":
            result = previous + current;
            break;
        case "/":
            if (current === 0) {
                result = "Error"; // Prevent division by zero
            } else {
                result = previous / current;
            }
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = "";
    operation = "";
    updateDisplay();
}