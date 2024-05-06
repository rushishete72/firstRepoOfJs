/**
 * Arrow Functions: Arrow functions provide a concise syntax for writing functions. They are especially useful for functions
 * that do not have a complex body or that do not require a separate 'this' context. Arrow functions do not have their own 'this'
 * context; instead, they inherit 'this' from the surrounding lexical context.
 * Example:
 */
let greet = (name) => {
    console.log("Hello, " + name + "!");
};
