/**
 * This script demonstrates various methods of accessing elements in a JavaScript array.
 * It includes examples of basic indexing, using array iterators, and loops.
 *
 * Note: In this script, the term "cro" represents an example array used for demonstration purposes.
 */

/**
 * Retrieves the length of the given array.
 * @param {Array} array - The array whose length is to be retrieved.
 * @returns {number} - The length of the array.
 */
function getArrayLength(array) {
    return array.length;
}

/**
 * JavaScript provides several useful array methods for manipulating arrays.
 * Some commonly used array methods include: push(), pop(), shift(), unshift(), 
 * splice(), slice(), concat(), join(), map(), filter(), and reduce().
 * Here's a brief overview of each method:
 * 
 * - push(): Adds one or more elements to the end of an array and returns the new length of the array.
 * - pop(): Removes the last element from an array and returns that element.
 * - shift(): Removes the first element from an array and returns that element.
 * - unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
 * - splice(): Adds or removes elements from an array at a specified index.
 * - slice(): Extracts a section of an array and returns a new array.
 * - concat(): Joins two or more arrays and returns a new array.
 * - join(): Joins all elements of an array into a string.
 * - map(): Calls a provided function once for each element in an array, and returns an array of the results.
 * - filter(): Creates a new array with all elements that pass the test implemented by the provided function.
 * - reduce(): Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
 */

// Example array
let cro = [1, 2, 3, 4, 5];

// Retrieving the length of the array
console.log("Length of the array:", getArrayLength(cro));

// Demonstrating various array methods
console.log("Using array methods:");
console.log("Original array:", cro);

// push() method
cro.push(6);
console.log("After push(6):", cro);

// pop() method
let poppedElement = cro.pop();
console.log("Popped element:", poppedElement);
console.log("After pop():", cro);

// shift() method
let shiftedElement = cro.shift();
console.log("Shifted element:", shiftedElement);
console.log("After shift():", cro);

// unshift() method
cro.unshift(0);
console.log("After unshift(0):", cro);

// splice() method
let splicedArray = cro.splice(2, 1, 100);
console.log("After splice(2, 1, 100):", cro);

// slice() method
let slicedArray = cro.slice(1, 3);
console.log("Slice(1, 3):", slicedArray);

// concat() method
let concatenatedArray = cro.concat([6, 7, 8]);
console.log("Concatenated with [6, 7, 8]:", concatenatedArray);

// join() method
let joinedString = cro.join("-");
console.log("Joined string:", joinedString);

// map() method
let mappedArray = cro.map((element) => element * 2);
console.log("Mapped array (doubling each element):", mappedArray);

// filter() method
let filteredArray = cro.filter((element) => element > 3);
console.log("Filtered array (elements > 3):", filteredArray);

// reduce() method
let reducedValue = cro.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Reduced value (sum of elements):", reducedValue);
