const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Concatenating arrays using concat() method
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// Concatenating arrays using spread operator
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const Another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
console.log(Another_Array);

// Flattening the nested array using flat() method
const real_another_array = Another_Array.flat(2); // We can use Infinity as well
console.log(real_another_array);

// Checking if a value is an array
console.log(Array.isArray("Rushi")); // Output: false

// Creating an array from a string
console.log(Array.from("Rushikesh")); // Output: ['R', 'u', 's', 'h', 'i', 'k', 'e', 's', 'h']

// Creating an array from an array-like object
console.log(Array.from({ name: "rushi" })); // Output: []

let score1 = 1;
let score2 = 1;
let score3 = 1;
// Creating an array from a set of values
console.log(Array.of(score1, score2, score3)); // Output: [1, 1, 1]
