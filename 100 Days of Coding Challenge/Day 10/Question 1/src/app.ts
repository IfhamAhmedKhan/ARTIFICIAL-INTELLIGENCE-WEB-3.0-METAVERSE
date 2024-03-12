// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.

let personLife: number = 23;

if (personLife < 5) {
    console.log("You are a kid.");
} 
else if (personLife < 10) {
    console.log("You are growing up.");
} 
else if (personLife < 14) {
    console.log("You are soon going to be an adult.");
}
else if (personLife < 18) {
    console.log("You are a teenager.");
} 
else if (personLife < 27) {
    console.log("You should get married.");
} 
else if (personLife < 40) {
    console.log("You are getting old.");
}
else {
    console.log("Soon, your time is going to come get ready to die!")
}