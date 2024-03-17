// Question 42: Great Magicians: Add "the Great" to magician names.

let magicianNames : string[] = ["Pablo", "Amr", "Jackson"]
// function to display names of magicians
function DisplayNames (){
    for (let index = 0; index < magicianNames.length; index++) {
        console.log(magicianNames[index], "Welcome you are such an amazing magician");
    }
}

DisplayNames();