"use strict";
// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
//previous array
let guests = ["Aayan", "Afnan", "Farman"];
console.log("Great news! I found a bigger dinner table!");
guests.unshift("Ifham");
guests.splice(guests.length / 2, 0, "Sana");
guests.push("Sahar");
for (let index = 0; index < guests.length; index++) {
    console.log(`Dear ${guests[index]}, would you like to join me for dinner?`);
}
