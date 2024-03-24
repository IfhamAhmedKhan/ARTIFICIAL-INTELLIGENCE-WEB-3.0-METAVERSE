"use strict";
// Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
let favFruit = ["Apple", "Banana", "Orange", "Mango"];
let friendFavFruit = "Banana";
let value = false;
for (let index = 0; index < favFruit.length; index++) {
    if (friendFavFruit = favFruit[index]) {
        value = true;
    }
    else {
        value = false;
    }
}
if (value == true) {
    console.log(`Wow you an I both like ${friendFavFruit}`);
}
else if (value == false) {
    console.log(`We don't have anything in common for fruit!`);
}
else {
    console.log("You have made a big mistake!");
}
