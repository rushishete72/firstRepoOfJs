/**
 * This script demonstrates various methods of accessing elements in a JavaScript array.
 * It includes examples of basic indexing, using array iterators, and loops.
 */

// Array declaration
let arr = [10, 20, 30, 40, 50];

// 1. Accessing elements by index
console.log("1. Accessing elements by index:");
console.log("First element:", arr[0]); // First element: 10
console.log("Third element:", arr[2]); // Third element: 30
console.log("Last element:", arr[arr.length - 1]); // Last element: 50

// 2. Using forEach() array iterator
console.log("\n2. Using forEach() array iterator:");
/**
 * The forEach() method executes a provided function once for each array element.
 * @param {number} element - The current element being processed in the array.
 * @param {number} index - The index of the current element being processed in the array.
 */
arr.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`);
});

// 3. Using for...of loop
console.log("\n3. Using for...of loop:");
/**
 * The for...of statement creates a loop iterating over iterable objects.
 */
for (let element of arr) {
    console.log("Element:", element);
}

// 4. Using for loop
console.log("\n4. Using for loop:");
/**
 * The for loop repeats until a specified condition evaluates to false.
 */
for (let i = 0; i < arr.length; i++) {
    console.log(`Element at index ${i}: ${arr[i]}`);
}

// 5. Using map() array iterator
console.log("\n5. Using map() array iterator:");
/**
 * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
 * @param {number} element - The current element being processed in the array.
 * @param {number} index - The index of the current element being processed in the array.
 * @returns {string} - A string representing the element at the specified index.
 */
let mappedArray = arr.map((element, index) => `Element at index ${index}: ${element}`);
console.log(mappedArray.join('\n'));
/*
//********************output of the code *********************\\
1. Accessing elements by index:
First element: 10
Third element: 30
Last element: 50

2. Using forEach() array iterator:
Element at index 0: 10
Element at index 1: 20
Element at index 2: 30
Element at index 3: 40
Element at index 4: 50

3. Using for...of loop:
Element: 10
Element: 20
Element: 30
Element: 40
Element: 50

4. Using for loop:
Element at index 0: 10
Element at index 1: 20
Element at index 2: 30
Element at index 3: 40
Element at index 4: 50

5. Using map() array iterator:
Element at index 0: 10
Element at index 1: 20
Element at index 2: 30
Element at index 3: 40
Element at index 4: 50



*/