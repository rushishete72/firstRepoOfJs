/**
 * This script demonstrates Array Iteration, Searching, and Sorting concepts in JavaScript.
 */

/**
 * Iterates through the elements of the array and prints each element.
 * @param {Array} arr - The array to iterate through.
 */
function iterateArray(arr) {
    console.log("Iterating through the array:");
    arr.forEach((element, index) => {
        console.log(`Element at index ${index}: ${element}`);
    });
}

/**
 * Searches for an element in the array using linear search algorithm.
 * @param {Array} arr - The array to search in.
 * @param {number} target - The element to search for.
 * @returns {number} - The index of the element if found, -1 otherwise.
 */
function linearSearch(arr, target) {
    console.log(`\nPerforming linear search for element ${target}:`);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(`Element ${target} found at index ${i}`);
            return i;
        }
    }
    console.log(`Element ${target} not found in the array.`);
    return -1;
}

/**
 * Sorts the array in ascending order using the Array.prototype.sort() method.
 * @param {Array} arr - The array to be sorted.
 */
function sortArray(arr) {
    console.log("\nSorting the array in ascending order:");
    arr.sort((a, b) => a - b);
    console.log("Sorted array:", arr);
}

// Example array
let array = [5, 3, 9, 1, 7, 2, 8, 4, 6];

// Array iteration
iterateArray(array);

// Linear search
let targetElement = 7;
let index = linearSearch(array, targetElement);

// Sorting the array
sortArray(array);
