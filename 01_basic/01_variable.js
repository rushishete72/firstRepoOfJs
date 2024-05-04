/*
Prefer not to use var kewords to declare the variables
because of issues in block scope and functional scope


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