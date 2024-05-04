/*
  JavaScript Data Types:

  1. Primitive:
    - String: A sequence of characters enclosed in single ('') or double ("") quotes.
    - Number: A numerical value, including integers and floating-point numbers.
    - Boolean: Represents a logical value, either true or false.
    - null: Represents the intentional absence of any object value.
    - undefined: Represents a variable that has been declared but not assigned a value.
    - Symbol: A unique and immutable data type used to create unique identifiers for object properties.
    - BigInt: A numeric data type representing integers with arbitrary precision.

  2. Reference (Non-Primitive):
    - Array: A data structure that stores a collection of elements, indexed by integers.
    - Objects: A collection of key-value pairs where keys are strings and values can be of any data type.
    - Functions: A block of reusable code that can be executed when called.

  Example usage:
*/

// Primitive data types
const score = 100; // Number
const scoreValue = 100.3; // Number

const isLoggedIn = false; // Boolean
const outsideTemp = null; // null

let undefinedVariable; // Declared but not assigned any value
console.log(undefinedVariable); // Output: undefined

const id = Symbol('123'); // Symbol
const anotherId = Symbol('123');
console.log(id === anotherId); // Output: false (Symbols with the same description are unique)
console.log(typeof id); // Output: symbol

// Non-Primitive data types
const heroes = ["shaktiman", "spiderman", "mary"]; // Array

let myObj = { // Object
    name: "rushi",
    age: 23,
};

let myFunction = function() { // Function
    console.log("Hello world");
};
console.log(typeof myFunction); // Output: function

// Stack (Primitive), Heap (Non-Primitive)

let firstNum = 90;
let secondNum = firstNum;
secondNum = 89;
console.table([firstNum, secondNum]); // Output: [90, 89]

let obj1 = {
    email: "rushis@gmail.com",
    upi: "fsdfsdf.ybl"
};
let obj2 = obj1; // obj2 references the same object as obj1

obj2.email = "Rufdsfsd@gmail.com"; // Changing email of obj2 also affects obj1
console.table([obj1, obj2]); // Output: [{email: "Rufdsfsd@gmail.com", upi: "fsdfsdf.ybl"}, {email: "Rufdsfsd@gmail.com", upi: "fsdfsdf.ybl"}]
