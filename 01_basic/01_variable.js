/*
Prefer not to use var kewords to declare the variables
because of issues in block scope and functional scope

// Avoid using the var keyword to declare variables due to issues with block scope and functional scope

// Declare variables using let or const
let accoundstate; 
const accountId = 12232;
let accountEmail = "rushishete@gmail.com";
let accountCity = "Jaypur"; // Declare accountCity using let, as it's being assigned without a constant value
console.log(accountId, accountEmail, accountCity);

// Attempting to reassign a value to a const variable will result in an error
// accountId = 2; // This is not allowed

// Reassign values to variables declared with let
accountEmail = "hc@ch.com";
let accountPassword = "34234"; // Declare accountPassword using let
accountCity = "Bengluru"; // Reassign value to accountCity
console.log([accountId, accountEmail, accountPassword, accountCity]);

// Display variables in a table format
console.table([accoundstate, accountId, accountEmail, accountPassword, accountCity]);

*/
let accoundstate; 
const accountId=12232;
let accountEmail="rushishete@gmail.com";
var accountPassword="123456";
accountCity="Jaypur";
console.log(accountId,accountEmail,accountPassword,accountCity);
// accountId=2; // not allowed
console.log(accountId);
accountEmail="hc@ch.com";
accountPassword="34234";
accountCity="Bengluru";
console.log([accountId,accountEmail,accountPassword,accountCity]);
console.table([accoundstate, accountId,accountEmail,accountPassword,accountCity]);