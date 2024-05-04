/*
  Author: Rushikes shete
  Date: 4-5-2024

  Description: This file demonstrates basic JavaScript concepts with examples and comments.
*/

// Example 1: Logging a string to the console
console.log("Rushi Shete");

/*
  Example 2: Declaring and initializing variables
  - Demonstrates primitive data types: string, number, boolean, null, undefined
*/

// String
const name = "Rushi";

// Number
const age = 23;

// Boolean
const isStudent = true;

// Null
const car = null;

// Undefined
let address;

/*
  Example 3: Arrays
  - Demonstrates the creation and manipulation of arrays
*/

const fruits = ["apple", "banana", "orange"];

// Accessing elements
console.log(fruits[0]); // Output: apple

// Adding elements
fruits.push("grape");

// Removing elements
fruits.pop();

/*
  Example 4: Objects
  - Demonstrates the creation and manipulation of objects
*/

const person = {
  name: "Rushi",
  age: 23,
  isStudent: true,
};

// Accessing object properties
console.log(person.name); // Output: Rushi

// Adding new properties
person.email = "rushi@example.com";

// Removing properties
delete person.isStudent;

/*
  Example 5: Functions
  - Demonstrates the creation and execution of functions
*/

// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function expression
const add = function (a, b) {
  return a + b;
};

// Function invocation
console.log(greet("Rushi")); // Output: Hello, Rushi!
console.log(add(2, 3)); // Output: 5

/*
  Example 6: Control Flow
  - Demonstrates conditional statements and loops
*/

// Conditional statement (if-else)
const num = 10;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// Loop (for)
for (let i = 0; i < 5; i++) {
  console.log("Iteration " + i);
}
