"use strict";
// Question 40: Album: Create objects for music albums.
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Taylor Swift", "Fearless"));
console.log(make_album("Beyonce", "Lemonade", 10));
