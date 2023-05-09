const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const name = prompt("What's your name? ");
console.log(`Hi, I'm ${name}.`);
let firstValue = prompt("Please enter the first number: ");
let secondValue = prompt("Please enter the second number: ");
let operation = prompt("Please choose the operation (+, -, /, *): ");


function add(firstValue, secondValue) {
    return +firstValue + +secondValue;
}

function subtract(firstValue, secondValue) {
    return +firstValue - +secondValue;
}

function divide(firstValue, secondValue) {
    return +firstValue / +secondValue;
}

function multiply(firstValue, secondValue) {
    return +firstValue * +secondValue;
}

if (operation == "+") {
    console.log(add(firstValue, secondValue));
} else if (operation == "-") {
    console.log(subtract(firstValue, secondValue));
} else if (operation == "*") {
    console.log(multiply(firstValue, secondValue));
} else if (operation == "/") {
    console.log(divide(firstValue, secondValue));
} else {
    console.log("Invalid operation");
}

