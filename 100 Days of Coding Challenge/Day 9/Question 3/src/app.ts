// Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.

let alien_color = "purple";
if (alien_color == "green") {
    console.log("You earned 10 points for guessing green.");
} 
else if (alien_color == "yellow") {
    console.log("You earned 10 points for guessing yellow.");
} 
else if (alien_color == "red") {
    console.log("You earned 10 points for guessing red.");
}
else {
    console.log(`You are not smart! You guessed ${alien_color} seriously?`)
}