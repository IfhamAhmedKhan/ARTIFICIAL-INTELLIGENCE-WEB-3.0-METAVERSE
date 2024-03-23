"use strict";
// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
let AreaOfRectangle = (len, width) => len * width;
let len = 5;
let width = 3;
let area = AreaOfRectangle(len, width);
console.log(area);
