// Adding/Removing Elements
const array1 = [1, 2, 3];
console.log("Original array:", array1); // Output: [1, 2, 3]

// push(): Adds one or more elements to the end of an array and returns the new length.
array1.push(4, 5);
console.log("After push:", array1); // Output: [1, 2, 3, 4, 5]

// pop(): Removes the last element from an array and returns that element.
const poppedElement = array1.pop();
console.log("After pop:", array1); // Output: [1, 2, 3, 4]
console.log("Popped element:", poppedElement); // Output: 5

// unshift(): Adds one or more elements to the beginning of an array and returns the new length.
array1.unshift(0);
console.log("After unshift:", array1); // Output: [0, 1, 2, 3, 4]

// shift(): Removes the first element from an array and returns that element.
const shiftedElement = array1.shift();
console.log("After shift:", array1); // Output: [1, 2, 3, 4]
console.log("Shifted element:", shiftedElement); // Output: 0

// Accessing Elements
const array2 = ["a", "b", "c"];
console.log("Array 2:", array2); // Output: ["a", "b", "c"]

// concat(): Returns a new array that concatenates the original array with other arrays or values.
const concatenatedArray = array1.concat(array2);
console.log("Concatenated array:", concatenatedArray); // Output: [1, 2, 3, 4, "a", "b", "c"]

// join(): Joins all elements of an array into a string.
const joinedString = array2.join("-");
console.log("Joined string:", joinedString); // Output: "a-b-c"

// slice(): Returns a shallow copy of a portion of an array into a new array.
const slicedArray = concatenatedArray.slice(2, 5);
console.log("Sliced array:", slicedArray); // Output: [3, 4, "a"]

// splice(): Changes the contents of an array by removing or replacing existing elements.
const splicedArray = array1.splice(1, 2, "x", "y");
console.log("After splice:", array1); // Output: [1, "x", "y", 4]
console.log("Spliced elements:", splicedArray); // Output: [2, 3]

// Searching and Filtering
const numbers = [1, 2, 3, 4, 5, 6];

// indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log("Index of 3:", numbers.indexOf(3)); // Output: 2

// lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present.
console.log("Last index of 3:", numbers.lastIndexOf(3)); // Output: 2

// includes(): Determines whether an array includes a certain element, returning true or false as appropriate.
console.log("Includes 3:", numbers.includes(3)); // Output: true

// find(): Returns the first element in the array that satisfies the provided testing function.
const foundNumber = numbers.find(num => num > 3);
console.log("First number greater than 3:", foundNumber); // Output: 4

// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
const filteredNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", filteredNumbers); // Output: [2, 4, 6]

// Iteration
const words = ["hello", "world"];

// forEach(): Executes a provided function once for each array element.
words.forEach(word => console.log(word.toUpperCase())); // Output: HELLO, WORLD

// map(): Creates a new array populated with the results of calling a provided function on every element in the array.
const capitalizedWords = words.map(word => word.toUpperCase());
console.log("Capitalized words:", capitalizedWords); // Output: ["HELLO", "WORLD"]

// reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum); // Output: 21

// reduceRight(): Executes a reducer function on each element of the array (right-to-left), resulting in a single output value.
const reversedString = words.reduceRight((acc, curr) => acc + curr);
console.log("Reversed string:", reversedString); // Output: worldhello

// every(): Tests whether all elements in the array pass the test implemented by the provided function.
const allNumbersPositive = numbers.every(num => num > 0);
console.log("All numbers positive:", allNumbersPositive); // Output: true

// some(): Tests whether at least one element in the array passes the test implemented by the provided function.
const hasNegativeNumber = numbers.some(num => num < 0);
console.log("Has negative number:", hasNegativeNumber); // Output: false

// Ordering
const unorderedNumbers = [5, 2, 8, 1, 4];

// sort(): Sorts the elements of an array in place and returns the sorted array.
unorderedNumbers.sort((a, b) => a - b);
console.log("Sorted numbers:", unorderedNumbers); // Output: [1, 2, 4, 5, 8]

// Transforming
const originalArray = [1, 2, 3, 4, 5];

// reverse(): Reverses the elements of an array in place.
const reversedArray = originalArray.reverse();
console.log("Reversed array:", reversedArray); // Output: [5, 4, 3, 2, 1]

// fill(): Changes all elements in an array to a static value from a start index to an end index.
const filledArray = Array(5).fill(0);
console.log("Filled array:", filledArray); // Output: [0, 0, 0, 0, 0]

// copyWithin(): Copies a sequence of elements within the array to the target position.
const copiedArray = originalArray.copyWithin(1, 0, 2);
console.log("Copied array:", copiedArray); // Output: [1, 1, 2, 4, 5]

// Length and Iterability
console.log("Length of original array:", originalArray.length); // Output: 5

// Symbol.iterator: Returns a new iterator object that iterates over the values in the array.
const iterator = originalArray[Symbol.iterator]();
console.log("Iterator values:");
for (const value of iterator) {
  console.log(value);
}

// Conversion
console.log("String representation of original array:", originalArray.toString()); // Output: "1,2,3,4,5"
console.log("Localized string representation of original array:", originalArray.toLocaleString()); // Output: "1,2,3,4,5"
console.log("Primitive value of original array:", originalArray.valueOf()); // Output: [1, 2, 3, 4, 5]
