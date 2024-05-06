/**
 * Object Constructors:  JavaScript allows defining object constructors using functions. Constructors are templates for creating
 * objects with similar properties and methods.
 * Example:
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello!");
    };
}
let person1 = new Person("Alice", 25);
