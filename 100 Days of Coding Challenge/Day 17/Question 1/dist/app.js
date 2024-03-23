"use strict";
// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function userHobby(...hobby) {
    for (let index = 0; index < hobby.length; index++) {
        console.log(`You enjoy ${hobby[index]} hobby alot`);
    }
}
userHobby("coding", "watching anime", "traveling", "playing games");
