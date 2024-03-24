"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Ifham ahmed khan";
let words = personName.split(" ");
let titleCaseName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
console.log("Lower case: ", personName.toLowerCase());
console.log("Upper case: ", personName.toUpperCase());
console.log("Title case: ", titleCaseName);
