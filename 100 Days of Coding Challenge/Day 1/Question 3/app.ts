//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let myName = "Ifham ahmed khan";
let words = myName.split(" ");
let titleCaseName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
console.log("Lower case: " + myName.toLowerCase());
console.log("Upper case: " + myName.toUpperCase());
console.log("Title case: " + titleCaseName);
