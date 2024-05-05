// Creating an array using array literal notation
const arr = [33, 3, 33];
console.log("Array arr:", arr); // Output: [33, 3, 33]

// Creating an array with predefined elements
const heroes = ["Shaktiman", "Nagraj"];
console.log("Array heroes:", heroes); // Output: ["Shaktiman", "Nagraj"]

// Creating an array using the Array constructor
const arr2 = new Array(1, "Rushi", 2, "Shete");
console.log("Array arr2:", arr2); // Output: [1, "Rushi", 2, "Shete"]

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

// Additional Example: Concatenating arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Concatenating array1 and array2 using the concat() method
const concatenatedArray = array1.concat(array2);
console.log("Concatenated array:", concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

// Joining array elements of array2 into a string using the join() method
const array3 = array2.join();
console.log(`array3 ${array3} and the array2  ${array2}`); // Output: array3 4,5,6 and the array2  [4, 5, 6]
console.log(`array3 ${typeof array3} and the array2  ${typeof array2}`); // Output: array3 string and the array2  object
console.log(typeof array3); // Output: string

// Slicing the first 4 elements from the concatenatedArray using the slice() method
const concatenatedArrayReverse = concatenatedArray.slice(0, 4);
console.log(concatenatedArrayReverse); // Output: [1, 2, 3, 4]

// Removing elements from index 5 onwards from the concatenatedArray using the splice() method
console.log(concatenatedArray.splice(5)); // Output: [6]
