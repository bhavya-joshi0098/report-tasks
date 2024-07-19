// JavaScript logic for calculator

// Selecting elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calculator-button');

// State variables
let currentInput = '0';
let memory = 0;

// Function to update display
function updateDisplay() {
    display.textContent = currentInput;
}

// Function to handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        switch (value) {
            case 'clear':
                currentInput = '0';
                break;
            case 'equals':
                try {
                    currentInput = eval(currentInput);
                } catch (error) {
                    currentInput = 'Error';
                }
                break;
            case 'sqrt':
                currentInput = Math.sqrt(parseFloat(currentInput));
                break;
            case 'percent':
                currentInput = parseFloat(currentInput) / 100;
                break;
            case 'memory-store':
                memory = parseFloat(currentInput);
                break;
            case 'memory-recall':
                currentInput = memory.toString();
                break;
            case 'memory-clear':
                memory = 0;
                break;
            default:
                if (currentInput === '0' || currentInput === 'Error') {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
        }

        updateDisplay();
    });
});
