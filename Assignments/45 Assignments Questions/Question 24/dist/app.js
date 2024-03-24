"use strict";
// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
let car = ["BMW", "Toyota", "Honda", "Ford", "Chevrolet"];
// Equality with strings
console.log("Is car[0] == 'BMW'? I predict True.");
console.log(car[0] == "BMW"); // True
console.log("Is car[1] == 'Toyota'? I predict True.");
console.log(car[1] == "Toyota"); // True
console.log("Is car[2] == 'Honda'? I predict True.");
console.log(car[2] == "Honda"); // True
// Using the lower case function
console.log("Is car[0] in lower case == 'bmw'? I predict True.");
console.log(car[0].toLowerCase() == "bmw"); // True
// Numerical tests
console.log("Is car.length > 3? I predict True.");
console.log(car.length > 3); // True
console.log("Is car.length < 5? I predict False.");
console.log(car.length < 5); // False
// Tests using "and" and "or" operators
console.log("Is car[0] == 'BMW' and car[1] == 'Toyota'? I predict True.");
console.log(car[0] == "BMW" && car[1] == "Toyota"); // True
console.log("Is car[0] == 'BMW' or car[1] == 'Ford'? I predict True.");
console.log(car[0] == "BMW" || car[1] == "Ford"); // True
// Test whether an item is in the array
console.log("Is 'BMW' in car?");
console.log(car.includes("BMW")); // True
// Test whether an item is not in the array
console.log("Is 'Mercedes' not in car?");
console.log(!car.includes("Mercedes")); // True
