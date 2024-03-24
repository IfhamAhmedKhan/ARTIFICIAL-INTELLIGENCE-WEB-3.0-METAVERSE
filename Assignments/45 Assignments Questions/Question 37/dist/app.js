"use strict";
// Question 37: Large Shirts: Default values in make_shirt().
function make_shirt(color = "red", size = "medium", message = "I like coding") {
    console.log(`${color} Color shirt size is ${size} and a message "${message}" on the front side.`);
}
make_shirt();
make_shirt("blue", "small");
make_shirt("black", "large", "I never quit!");
