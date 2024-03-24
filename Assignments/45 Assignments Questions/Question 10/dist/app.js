"use strict";
//Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
//this is function to print the table of ten 
function table_of_ten() {
    let number = 10;
    // for loop to keep printing all the values of table till 10
    for (let index = 1; index < 11; index++) {
        let answer = number * index;
        console.log(number + " x " + index + " = " + answer);
    }
}
table_of_ten();
