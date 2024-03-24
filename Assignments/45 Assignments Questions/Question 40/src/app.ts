// Question 40: Album: Create objects for music albums.

function make_album(artist: string, title: string, tracks?: number) {
    let album: { artist: string, title: string, tracks?: number } = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

console.log(make_album("Taylor Swift", "Fearless"));
console.log(make_album("Beyonce", "Lemonade", 10));
