"use strict";
// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
let yourNumber = 3;
let lastDigit = yourNumber % 10;
if (yourNumber == 1) {
    console.log(`${yourNumber}st`);
}
else if (yourNumber == 2) {
    console.log(`${yourNumber}nd`);
}
else if (yourNumber == 3) {
    console.log(`${yourNumber}rd`);
}
else {
    console.log(`${yourNumber}th`);
}
