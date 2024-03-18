"use strict";
// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
let magicians = ["Ifham", "Afnan", "Aayan"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}
console.log("Original magicians:");
show_magicians(magicians);
let greatMagicians = make_great(magicians.slice());
console.log("Great magicians:");
show_magicians(greatMagicians);
