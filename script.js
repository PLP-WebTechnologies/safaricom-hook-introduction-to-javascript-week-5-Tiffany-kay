// Part 1: JavaScript Basics

let name = "Tiffany Gathoni"; 
let age = 25; 
let isStudent = true; 
let hobbies = ["reading", "gaming", "coding"]; // Array
let person = { firstName: "John", lastName: "Doe" }; // Object

// Print values and types in the browser console
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${person.firstName} ${person.lastName} (Type: ${typeof person})`);

// Operators: Simple Calculator Function
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation!");
            return;
    }

    alert(`Result: ${result}`);
}

// Functions: Greet User
function greetUser(name) {
    return `Hello, ${name}! Welcome to my trial in JavaScript.`;
}

// Part 2: JavaScript Control Structures

// If Statements: Check Voting Eligibility
function checkVotingEligibility() {
    let userAge = parseInt(prompt("Enter your age:"));
    let message;

    if (userAge >= 18) {
        message = "You are eligible to vote.";
    } else {
        message = "You are not eligible to vote.";
    }

    document.getElementById("dynamic-content").innerHTML += `<p>${message}</p>`;
}

// Loops: Display Numbers 1 to 10
function displayNumbers() {
    let list = "<ol>";
    for (let i = 1; i <= 10; i++) {
        list += `<li>${i}</li>`;
    }
    list += "</ol>";
    document.getElementById("dynamic-content").innerHTML += list;
}

// Part 3: Introduction to the DOM

// Selecting and Modifying HTML Elements
document.querySelector("h1").textContent = "bruuuhhhhhh🙂🙂🙂";
document.getElementById("dynamic-content").innerHTML += '<p>Trying to keep up😪</p>';


calculator(); // Call the calculator function to perform operations
console.log(greetUser(name)); // Log the greeting message
checkVotingEligibility(); // Check and display voting eligibility
displayNumbers(); // Display numbers from 1 to 10
