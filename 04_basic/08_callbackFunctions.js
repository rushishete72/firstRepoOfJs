/**
 * Callback Functions: In JavaScript, functions can be passed as arguments to other functions, called callback functions.
 * Callback functions are commonly used in asynchronous operations like event handling, AJAX requests, and timeouts.
 * Example:
 */
function fetchData(callback) {
    // Simulate fetching data
    let data = { name: "John", age: 30 };
    // Invoke callback with the fetched data
    callback(data);
}
