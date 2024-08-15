"use strict";
//q19
let guestList = ["Fatima", "Nida", "Areesha"];
let message = "You are invited for dinner.";
for (let i = 0; i < guestList.length; i++) {
    console.log("Miss " + guestList[i] + ',' + '' + message);
    //console.log("Miss" + ` ${guestList[i]}, ${message} `);
}
let guest = guestList[2];
console.log("\nSorry," + `${guest}` + " can't come for dinner.");
guestList.splice(2, 1, `Alina`);
console.log(guestList);
let newguestList = guest;
let message1 = "You are invited for dinner.";
for (let i = 0; i < guestList.length; i++) {
    console.log("Miss " + guestList[i] + ',' + '' + message);
    //console.log("Miss" + ` ${guestList[i]}, ${message} `);
}
console.log("\nwe found a bigger table");
guestList.unshift("Ayesha");
guestList.splice(2, 0, "Aiza");
guestList.push("Hania");
for (let i = 0; i < guestList.length; i++) {
    console.log("Miss " + guestList[i] + ',' + '' + message);
    //console.log("Miss" + ` ${guestList[i]}, ${message} `);
}
let message2 = "\nSorry,We cannot arrange the big table.We can invite only two people for dinner.";
console.log(message2);
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry, Mr ${removeGuest} you are not invited to dinner`);
}
console.log(guestList);
for (let i = 0; i < guestList.length; i++) {
    console.log("Miss " + guestList[i] + ',' + '' + message);
    //console.log("Miss" + ` ${guestList[i]} you are still invited `);
}
let removeGuest = guestList.splice(0, 2);
console.log(guestList);
console.log(`Currently we are inviting ${guestList.length} guest to the dinner.`);
