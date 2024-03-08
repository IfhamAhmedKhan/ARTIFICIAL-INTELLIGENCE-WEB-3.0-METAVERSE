"use strict";
// Question 20: Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let myLanguages = ["Urdu", "English", "German", "Turkish", "Japanese"];
console.log("I can speak the following languages:");
myLanguages.forEach(language => {
    console.log(`\n${language}`);
});
