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

console.log(name == name2); // Output: true
console.log(name === name2); // Output: false
