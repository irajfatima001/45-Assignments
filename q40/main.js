"use strict";
function make_album(artist_name, album_title, track) {
    let album = {
        Name: artist_name,
        Album: album_title,
    };
    if (track !== undefined) {
        album.Track_num = track;
    }
    return album;
}
console.log(make_album("atif", "Meri kahani"));
console.log(make_album("Ali Zafar", "Ali album"));
console.log(make_album("Shaan", "shaan album", 10));
