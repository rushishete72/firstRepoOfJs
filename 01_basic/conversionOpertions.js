/*
We declare a variable 'score' and check its type using two different syntaxes.
*/
let score = "33fsdfsd"; // Declare a variable 'score' and assign it a string value
console.log(typeof score); // Output the type of 'score'
console.log(typeof(score)); // Output the type of 'score' using another syntax

// Store the type of 'score' in another variable 'typeOfVariables'
let typeOfVariables = typeof score;
console.log(typeOfVariables); // Output the type of 'score'

// Convert 'score' to a number using the Number() function
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // Output the type of 'valueInNumber'
console.log(valueInNumber); // Output the value of 'valueInNumber'

// Convert undefined variable 'cons' to a boolean using the Boolean() function
let cons;
let con = Boolean(cons);
console.log(typeof con); // Output the type of 'con'
console.log(con); // Output the value of 'con'

/*
Arithmetic operations:
*/
console.log(8 * 8); // Output the result of multiplication
console.log(8 + 8); // Output the result of addition
console.log(8 - 8); // Output the result of subtraction
console.log(8 / 8); // Output the result of division
console.log(8 % 8); // Output the result of modulo operation

// Concatenate two strings
let str1 = "rushi";
let str2 = "shete";
let str3 = str1 + str2;
console.log(str3); // Output the concatenated string

// Concatenate strings and numbers
console.log(1 + "2"); // Output: "12"
console.log("1" + 2); // Output: "12"
console.log("1" + 2 + 2); // Output: "122"
console.log(2 + 2 + "1"); // Output: "41"
console.log("2" + 2 + "1"); // Output: "221"

/*
Increments and decrements:
*/
let num = 89; // Declare a variable 'num' and assign it the value 89
let num2; // Declare a variable 'num2' without initializing it
console.log([num++, num]); // Output the value of 'num' before and after post-increment
console.log([++num, num]); // Output the value of 'num' before and after pre-increment
console.log([num1 = num++, num]); // Output the value of 'num' after post-increment and assign the previous value to 'num1'
