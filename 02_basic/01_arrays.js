// Creating an array using array literal notation
const arr = [33, 3, 33];
console.log("Array arr:", arr); // Output: [33, 3, 33]

// Creating an array with predefined elements
const heroes = ["Shaktiman", "Nagraj"];
console.log("Array heroes:", heroes); // Output: ["Shaktiman", "Nagraj"]

// Creating an array using the Array constructor
const arr2 = new Array(1, "Rushi", 3, "Shete");
console.log("Array arr2:", arr2); // Output: [1, "Rushi", 3, "Shete"]

// Array Methods

// Creating an array using array literal notation
const myArray = [2, 3, 4, 5];
console.log("Original array:", myArray); // Output: [2, 3, 4, 5]

// Adding an element to the end of the array using push()
myArray.push(6);
console.log("After pushing 6:", myArray); // Output: [2, 3, 4, 5, 6]

// Removing the last element from the array using pop()
myArray.pop();
console.log("After popping:", myArray); // Output: [2, 3, 4, 5]

// Adding an element to the beginning of the array using unshift()
myArray.unshift(1);
console.log("After unshifting 1:", myArray); // Output: [1, 2, 3, 4, 5]

// Adding null to the beginning of the array using unshift()
myArray.unshift(null);
console.log("After unshifting null:", myArray); // Output: [null, 1, 2, 3, 4, 5]

// Removing the first element from the array using shift()
myArray.shift();
console.log("After shifting:", myArray); // Output: [1, 2, 3, 4, 5]

// Checking if the array includes a specific element using includes()
console.log("Array includes 9:", myArray.includes(9)); // Output: false

// Additional Example: Sorting an array
const unsortedArray = [5, 2, 8, 1, 4];
console.log("Unsorted array:", unsortedArray); // Output: [5, 2, 8, 1, 4]
const sortedArray = unsortedArray.sort();
console.log("Sorted array:", sortedArray); // Output: [1, 2, 4, 5, 8]

// Additional Example: Reversing an array
const originalArray = [1, 2, 3, 4, 5];
console.log("Original array:", originalArray); // Output: [1, 2, 3, 4, 5]
const reversedArray = originalArray.reverse();
console.log("Reversed array:", reversedArray); // Output: [5, 4, 3, 2, 1]

// Additional Example: Concatenating arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = array1.concat(array2);
console.log("Concatenated array:", concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]
