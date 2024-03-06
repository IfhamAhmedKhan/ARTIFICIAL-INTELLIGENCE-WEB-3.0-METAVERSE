//Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.

let friendsArray: string[] = ["Asad", "Mubashir", "Afnan", "Aayan"];

for (let index = 0; index < friendsArray.length; index++) {
    console.log(`Greetings ${friendsArray[index]}`);
}
