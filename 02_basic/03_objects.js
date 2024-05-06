// Singleton pattern using object literals
const JsUser = {
    // Properties of the JsUser object
    fullName: "Rushikesh Shete", // User's full name
    name: "Rushikesh", // User's name
    age: 18, // User's age
    location: "Jaypur", // User's location
    email: "Rushikesh", // User's email
    isLoggedIn: false, // User's login status
    lastLoginDays: ["Monday", "Saturday"] // User's last login days
};

// Accessing properties of JsUser
console.log("User email:", JsUser.email); // Output: Rushikesh
console.log("User email (using brackets notation):", JsUser["email"]); // Output: Rushikesh
console.log("User full name:", JsUser.fullName); // Output: Rushikesh Shete

// Creating a symbol
const mySym = Symbol("key1");

// Singleton pattern using object literals with a Symbol property
const JsUser2 = {
    [mySym]: "key2", // Unique property using Symbol
};

// Accessing properties of JsUser2
console.log("Type of JsUser2's symbol property:", typeof JsUser2[mySym]); // Output: string symbol
console.log("JsUser2's symbol property:", JsUser2[mySym]); // Output: key2
console.log("JsUser2 object:", JsUser2); // Output: { [Symbol(key1)]: 'key2' }
