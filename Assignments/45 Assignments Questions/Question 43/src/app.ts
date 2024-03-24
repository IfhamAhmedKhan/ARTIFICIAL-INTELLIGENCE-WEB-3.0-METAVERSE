// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

let magicians: string[] = ["Ifham", "Afnan", "Aayan"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = []; 
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
