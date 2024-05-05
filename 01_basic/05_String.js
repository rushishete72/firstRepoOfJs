/*
Declaring variables:
- `name`: Represents a string primitive storing the name "Rushi".
- `repocount`: Represents a number storing the value 50.
- `name2`: Represents a String object created using the `new` keyword and the `String()` constructor.

When comparing `name` and `name2`:
- Using `==`, JavaScript compares just the values of the variables, disregarding their types. 
  So, `name == name2` returns `true` because both have the same value, which is `"Rushi"`.
- However, when using `===`, JavaScript compares both the values and the types of the variables. 
  So, `name === name2` returns `false` because even though they have the same value, they are of different types. 
  `name` is a string primitive, whereas `name2` is a String object.

This distinction is crucial because it affects how operations and comparisons behave, particularly when dealing with strings and String objects.
*/
const name = "Rushi"; // Declaring a string primitive
const repocount = 50; // Declaring a number

// Creating a String object
const name2 = new String('Rushi');

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);
console.log(`the name of the guy is ${name2}`); // Outputting the String object

// Comparing `name` and `name2`
console.log(name == name2); // Output: true
console.log(name === name2); // Output: false

// String methods
console.log(`Length method: ${name2.length}`); // Getting the length of the string
console.log(`toUpperCase method: ${name2.toUpperCase()}`); // Converting the string to uppercase
console.log(`toLocaleLowerCase method: ${name2.toLocaleLowerCase()}`); // Converting the string to lowercase based on the locale
console.log(`toLowerCase method: ${name2.toLowerCase()}`); // Converting the string to lowercase
console.log(`toLocaleUpperCase method: ${name2.toLocaleUpperCase()}`); // Converting the string to uppercase based on the locale
console.log(`lastIndexOf method: ${name2.lastIndexOf('u')}`); // Getting the last index of a specified character in the string
console.log(`charAt method: ${name2.charAt(0)}`); // Getting the character at a specified index
console.log(`indexOf method: ${name2.indexOf('s')}`); // Getting the first index of a specified character in the string

// Additional String methods
console.log(`trim method: ${name2.trim()}`); // Removing whitespace from both ends of the string
console.log(`replace method: ${name2.replace('R', 'S')}`); // Replacing a specified value with another value in the string
console.log(`repeat method: ${name2.repeat(2)}`); // Repeating the string a specified number of times
console.log(`trimEnd method: ${name2.trimEnd()}`); // Removing whitespace from the end of the string
console.log(`trimStart method: ${name2.trimStart()}`); // Removing whitespace from the start of the string
