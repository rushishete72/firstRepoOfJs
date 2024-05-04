/*
* Comparison operators in JavaScript are used to compare values and return a boolean result.
*
* > (greater than)
* >= (greater than or equal to)
* < (less than)
* <= (less than or equal to)
* == (equality)
* != (inequality)
*
* When comparing null with a number, null is treated as a non-existent value and doesn't coerce into a number,
* resulting in false for >, ==, and === comparisons. However, >= operator performs type coercion, and null is coerced to 0,
* so null >= 0 evaluates to true.
*
* Undefined is always considered as not comparable with any other type, resulting in false for all comparisons.
*
* When comparing a string and a number using the == operator, JavaScript coerces the string to a number,
* resulting in a true equality if the values are numerically equal. However, with the === operator,
* strict comparison fails due to differing types.
*/

console.log(1 > 2); // Output: false
console.log(1 >= 2); // Output: false
console.log(1 < 2); // Output: true
console.log(1 <= 2); // Output: true
console.log(1 == 2); // Output: false
console.log(1 != 2); // Output: true

// Comparison with null
console.log(null > 0); // Output: false
console.log(null == 0); // Output: false
console.log(null <= 0); // Output: true

// Comparison with undefined
console.log(undefined == 0); // Output: false
console.log(undefined === 0); // Output: false
console.log(undefined <= 0); // Output: false
console.log(undefined >= 0); // Output: false
console.log(undefined < 0); // Output: false
console.log(undefined > 0); // Output: false

// Comparison between string and number
console.log("2" == 2); // Output: true
console.log("2" === 2); // Output: false
console.log(2 == 2); // Output: true
