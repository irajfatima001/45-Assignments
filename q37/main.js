"use strict";
//q37
function make_shirt(size = "large", text = "I love typescript") {
    console.log(`on ${size} size of shirt. ${text} is printed.`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love python.");
