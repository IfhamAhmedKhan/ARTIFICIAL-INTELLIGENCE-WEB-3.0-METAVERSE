// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

let guests: string[] = ["Aayan", "Afnan", "Farman"];
console.log("Great news! I found a bigger dinner table!");

guests.unshift("Ifham");
guests.splice(guests.length / 2, 0, "Sana");
guests.push("Sahar");

console.log(`Sorry, but unfortunately the new table won't arrive in time, so only ${guests[0]} & ${guests[1]} are invited`)
