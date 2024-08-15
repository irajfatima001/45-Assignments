"use strict";
//q15
let guestList = ["Fatima", "Nida", "Areesha"];
let message = "You are invited for dinner.";
for (let i = 0; i < guestList.length; i++) {
    console.log("Miss " + guestList[i] + ',' + '' + message);
}
let guest = guestList[2];
console.log("\nSorry," + `${guest}` + " can't come for dinner.");
guestList.splice(2, 1, `Alina`);
console.log(guestList);
let newguestList = guest;
let message1 = "You are invited for dinner.";
for (let i = 0; i < guestList.length; i++) {
    console.log("Miss " + guestList[i] + ',' + '' + message);
}
