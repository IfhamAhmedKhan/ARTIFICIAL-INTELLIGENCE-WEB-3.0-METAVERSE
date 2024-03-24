"use strict";
// Question 32: Checking Usernames: Ensure uniqueness in usernames.
let nameList = ["Ifham", "Afnan", "Aayan"];
let ageList = [23, 16, 13];
let nameValue = false;
let ageValue = false;
for (let index = 0; index < nameList.length; index++) {
    if (nameList[index] == nameList[index + 1]) {
        nameValue = false;
    }
    else {
        nameValue = true;
    }
}
for (let index = 0; index < ageList.length; index++) {
    if (ageList[index] == ageList[index + 1]) {
        ageValue = false;
    }
    else {
        ageValue = true;
    }
}
// check for name
if (nameValue == true) {
    console.log("Names are unique");
}
else if (nameValue == false) {
    console.log("Names are not unique");
}
else {
    console.log("Wrong input!");
}
// check for age
if (ageValue == true) {
    console.log("Age are unique");
}
else if (ageValue == false) {
    console.log("Age are not unique");
}
else {
    console.log("Wrong input!");
}
