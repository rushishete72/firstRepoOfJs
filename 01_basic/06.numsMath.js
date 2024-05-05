// Declaration and initialization of a numeric variable `score` with a value of 400.
const score = 400;
// Printing the value of `score` to the console.
console.log(score); // Output: 400

// Creating a Number object `balance` with a value of 100 using the `new` keyword and the Number constructor.
const balance = new Number(100);
// Printing the `balance` object to the console.
console.log(balance); // Output: [Number: 100]

// Determining the data type of the variable `score` and printing it to the console.
console.log(typeof score); // Output: number
// Determining the data type of the variable `balance` and printing it to the console.
console.log(typeof balance); // Output: object (because `balance` is an instance of the Number object)

// Converting the `balance` object to a string using the `toString()` method and printing it to the console.
console.log(balance.toString()); // Output: "100"
// Converting the `balance` object to a string with 2 decimal places using the `toFixed()` method and printing it to the console.
console.log(balance.toFixed(2)); // Output: "100.00"

// Determining the data type of the variable `balance` after performing operations and printing it to the console.
console.log(typeof balance); // Output: object (still an instance of the Number object)

// Declaring and initializing a numeric variable `otherNumber` with a value of 23.8966.
const otherNumber = 23.8966;
// Converting `otherNumber` to a string with 4 significant digits using the `toPrecision()` method and printing it to the console.
console.log(otherNumber.toPrecision(4)); // Output: "23.90"

// Declaring and initializing a numeric variable `thousands` with a value of 100000.
const thousands = -100000;
// Formatting `thousands` with locale-specific separators using the `toLocaleString()` method and printing it to the console.
// console.log(thousands.toLocaleString('en-IN')); // Output: "1,00,000"

// Math operations
console.log(Math); // Accessing the Math object
console.log(Math.abs(thousands)); // Getting the absolute value of `thousands`
console.log(Math.round(4.2)); // Rounding 4.2 to the nearest integer
console.log(Math.round(4.6)); // Rounding 4.6 to the nearest integer
console.log(Math.ceil(4.2)); // Ceil function to round up 4.2
console.log(Math.floor(4.7)); // Floor function to round down 4.7
console.log(Math.min(4.6)); // Finding the minimum of one number (does not work as expected)
console.log(Math.max(4.6)); // Finding the maximum of one number (does not work as expected)
console.log(Math.random()); // Generating a random number between 0 and 1
console.log(Math.random() * 10 + 1); // Generating a random number between 1 and 10
 console.log(Math.ceil(Math.random() * 10 + 1)); // Generating a random number  use ceil

const min = 10;
const max = 20;

// Generating a random integer between `min` and `max` (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
