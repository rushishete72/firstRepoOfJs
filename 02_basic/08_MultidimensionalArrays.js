/**
 * This script demonstrates Multidimensional Arrays concepts in JavaScript.
 */

/**
 * Creates a 2D array with the specified number of rows and columns, filled with a default value.
 * @param {number} rows - The number of rows in the 2D array.
 * @param {number} cols - The number of columns in the 2D array.
 * @param {*} defaultValue - The default value to fill the array with.
 * @returns {Array} - The 2D array.
 */
function create2DArray(rows, cols, defaultValue) {
    let array2D = [];
    for (let i = 0; i < rows; i++) {
        array2D[i] = new Array(cols).fill(defaultValue);
    }
    return array2D;
}

/**
 * Prints the contents of the 2D array.
 * @param {Array} arr2D - The 2D array to print.
 */
function print2DArray(arr2D) {
    console.log("Printing 2D array:");
    for (let i = 0; i < arr2D.length; i++) {
        console.log(arr2D[i].join(" "));
    }
}

// Creating a 2D array
let rows = 3;
let cols = 4;
let defaultValue = 0;
let my2DArray = create2DArray(rows, cols, defaultValue);

// Printing the 2D array
print2DArray(my2DArray);
